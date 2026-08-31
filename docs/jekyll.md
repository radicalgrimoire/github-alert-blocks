# Jekyll and GitHub Pages Setup

Jekyll renders GitHub alert syntax as an ordinary blockquote. Add this package to convert that blockquote in the browser.

## Install

1. Copy `src/github-alert-blocks.scss` to `_sass/github-alert-blocks.scss`.
2. Import it from your existing Sass entry point, such as `assets/css/index.scss` or `assets/css/index.sass`.

```scss
@import "github-alert-blocks";
```

```sass
@import "github-alert-blocks"
```

3. Copy `src/github-alert-blocks.js` to `assets/js/github-alert-blocks.js`.
4. Add this tag after `{{ content }}` in the layout that renders Markdown, usually `_layouts/default.html`.

```liquid
<script src="{{ '/assets/js/github-alert-blocks.js' | relative_url }}"></script>
```

The JavaScript must be loaded after `{{ content }}` so the rendered blockquotes already exist when it runs.

## Use in Markdown

Use alert syntax normally in posts, pages, and collection documents.

```md
> [!WARNING]
> This action cannot be undone.
```