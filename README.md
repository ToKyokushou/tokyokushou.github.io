# tokyokushou.github.io

Personal academic website of Xusheng Du, in English (`/`) and Japanese (`/ja/`).
Built with Jekyll and published by GitHub Pages from the `master` branch.

## Where to edit

| What | File |
|---|---|
| Name, position, introduction, news, research interests, CV entries | `_data/profile.yml` (`en` and `ja` blocks) |
| Section titles and other interface text | `_data/i18n.yml` |
| Journal articles and conference papers (with a detail page) | one file per paper in `_publications/` |
| Presentations, invited talks, thesis (list only) | `_data/pubs_extra.yml` |
| Paper figures and list thumbnails | `images/pubs/`, `images/thumbs/` |
| Colours, spacing, layout | `assets/css/site.css` |

A paper appears under "Selected Publications" on the homepage when its file has
`selected: <number>`; the number sets the order, and the first three are shown
before the "show more" control.

## Preview locally

```bash
bundle install
```

```bash
bundle exec jekyll serve
```
