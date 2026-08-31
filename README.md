# GitHub Alert Blocks

Render GitHub-style Markdown alert blocks on any site that turns Markdown blockquotes into HTML.

[Live demo](https://radicalgrimoire.github.io/docs/test/github-alert-blocks/)

## Supported syntax

```md
> [!NOTE]
> Useful context.

> [!TIP]
> A practical suggestion.

> [!IMPORTANT]
> Information that must not be missed.

> [!WARNING]
> Something to check before continuing.

> [!CAUTION]
> A potentially dangerous action.
```

## Install

Copy both files from `src/` into your project:

- `github-alert-blocks.js`
- `github-alert-blocks.scss`

Compile the Sass file with your site's existing Sass pipeline, or rename it to `.css` because it uses plain CSS syntax.

Load the stylesheet in your page `<head>` and the script after the Markdown content.

```html
<link rel="stylesheet" href="/assets/github-alert-blocks.css">
<script src="/assets/github-alert-blocks.js"></script>
```

The script looks for blockquotes whose first paragraph begins with `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, or `[!CAUTION]`. It replaces the blockquote with an accessible alert block and adds the appropriate class.

For Jekyll and GitHub Pages, see [Jekyll setup](docs/jekyll.md).

## Generated HTML

A Markdown renderer normally produces this HTML:

```html
<blockquote>
  <p>[!NOTE]<br>Useful context.</p>
</blockquote>
```

After the script runs, it becomes:

```html
<div class="github-alert github-alert-note">
  <p class="github-alert-title">Note</p>
  <p>Useful context.</p>
</div>
```

## Customize

Each alert uses two CSS custom properties:

```css
.github-alert {
  --github-alert-color: #0969da;
  --github-alert-background: #ddf4ff;
}
```

Override them in your own stylesheet to match your site. The bundled Sass includes colors for all five alert types and supports `prefers-color-scheme: dark`.

## Notes

This is a browser-side enhancement, not a Markdown parser plugin. With JavaScript disabled, readers see the original blockquote and its alert marker.
