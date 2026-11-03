"""Validate the published static portfolio without third-party dependencies."""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys


SITE = Path(__file__).resolve().parents[1] / "site"


class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.elements = []

    def handle_starttag(self, tag, attrs):
        self.elements.append((tag, dict(attrs)))


def validate():
    errors = []
    pages = {}
    references = []
    for path in SITE.rglob("*.html"):
        doc = Document()
        doc.feed(path.read_text(encoding="utf-8"))
        ids = [attrs["id"] for _, attrs in doc.elements if attrs.get("id")]
        duplicates = [value for value, count in Counter(ids).items() if count > 1]
        errors.extend(f"{path.relative_to(SITE)}: duplicate id {value!r}" for value in duplicates)
        pages[path.resolve()] = set(ids)
        for tag, attrs in doc.elements:
            for field in ("src", "href", "poster"):
                if attrs.get(field):
                    references.append((path, attrs[field]))
            if tag == "img" and attrs.get("src") and not attrs.get("alt", "").strip():
                errors.append(f"{path.relative_to(SITE)}: static image lacks alt text")

    for path in SITE.rglob("*.css"):
        pattern = r"url\(\s*(?:(['\"])(.*?)\1|([^'\"\s][^)]*))\s*\)"
        for match in re.finditer(pattern, path.read_text(encoding="utf-8"), re.DOTALL):
            references.append((path, match.group(2) or match.group(3)))

    for origin, ref in references:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        base = SITE if url.path.startswith("/") else origin.parent
        target = (base / unquote(url.path).lstrip("/")).resolve() if url.path else origin.resolve()
        if not target.is_relative_to(SITE.resolve()) or not target.is_file():
            errors.append(f"{origin.relative_to(SITE)}: missing or out-of-site reference {ref!r}")
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target]:
            errors.append(f"{origin.relative_to(SITE)}: missing anchor {ref!r}")

    index = SITE / "index.html"
    if not index.is_file():
        errors.append("site/index.html is missing")
    elif re.search(r"portfolio-palette|palette-chooser|data-palette", index.read_text(encoding="utf-8")):
        errors.append("temporary color comparison controls are still present")
    return errors, len(pages), len(references)


if __name__ == "__main__":
    failures, page_count, reference_count = validate()
    if failures:
        print("\n".join(failures), file=sys.stderr)
        sys.exit(1)
    print(f"Static portfolio: {page_count} page(s), {reference_count} references checked.")
