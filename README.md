# adhd

Source for [adhd.tristonyoder.com](https://adhd.tristonyoder.com) — a running list of misc side projects.

Plain HTML/CSS/JS, no build step, deployed to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `main`.

## Adding a project

Edit [`projects.js`](projects.js) — add an object to the `PROJECTS` array. Every field except `name` is optional and degrades gracefully (missing icon → initials badge, missing screenshot → no image block, missing links → only existing link buttons render). See the comment at the top of the file for the full field list.

To feature one project above the grid, edit the `FEATURED` object in the same file.

Icons and screenshots go in `icons/` and `screenshots/` respectively.
