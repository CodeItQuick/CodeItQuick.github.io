---
name: laws-of-ux
description: 'Audit this Jekyll + Tailwind site against the 30 Laws of UX (lawsofux.com) and return findings with steps to fix them. Run only when the user invokes /laws-of-ux. Takes an optional argument: a file, folder, or page to audit. With no argument, audits _layouts/ and _includes/.'
disable-model-invocation: true
argument-hint: "[file | folder | page]"
---

# Laws of UX: audit on demand

Source: https://lawsofux.com/ (Jon Yablonski). This skill runs only when the user types `/laws-of-ux`. Do not run it on edits or commits.

## Procedure

1. Find the scope from `$ARGUMENTS`. If it is empty, use `_layouts/` and `_includes/`.
2. Read each file in the scope. Also read the includes and the Tailwind config that the files use.
3. Run the checklist below against the files. Record each violation with its file and line.
4. Do not edit any file. This skill reports only.
5. Write the report in the format at the end of this file.
6. Ask the user which findings to fix.

## Checklist (grouped by what the diff touches)

### Targets and interaction
- **Fitts's Law** — Tap targets are at least 44×44 px (`min-h-11 min-w-11` or padding). Primary actions sit near the content they act on.
- **Doherty Threshold** — Feedback in under 400 ms. Add `loading="lazy"` on below-the-fold images. Give width and height to images. No blocking script in `<head>`.
- **Postel's Law** — Inputs accept loose formats (trim, case, separators). Output is consistent.
- **Paradox of the Active User** — No instruction is required to use a control. Labels say what the control does.

### Choices and navigation
- **Hick's Law** / **Choice Overload** — A nav bar or menu shows 7 items or fewer. Put the rest in a secondary menu or a filter.
- **Jakob's Law** — Logo links home at top left. Nav at the top. Links look like links (underline or distinct color). Search, if present, is at the top right.
- **Serial Position Effect** — Put the most important nav items first and last.
- **Pareto Principle** — The 20% of content that gets most visits (latest posts, series nav) is above the fold.
- **Occam's Razor** / **Tesler's Law** — Remove an element if the page works without it. Do not push necessary complexity onto the reader (for example, a series must have prev/next links, not "find part 3 yourself").

### Memory and load
- **Miller's Law** / **Working Memory** / **Chunking** — Break lists over 7 items into groups with headings. Use pagination (`table_paginated.html`) for long tables.
- **Cognitive Load** — One primary action per view. No decorative motion near body text. Body line length 45–75 characters (`max-w-prose`).
- **Selective Attention** — Do not style content to look like an ad or a banner. Users skip it.
- **Mental Model** — A blog post looks like a blog post, a recipe looks like a recipe. Reuse the existing layout for the content type.

### Grouping (Gestalt)
- **Law of Proximity** — Space inside a group is smaller than space between groups.
- **Law of Common Region** — Related items share a card or background (`card.html`).
- **Law of Similarity** — Same function, same style. Different function, different style. A link and a button do not share a style.
- **Law of Uniform Connectedness** — Connect steps or series parts visually (line, shared border, `series-nav.html`).
- **Law of Prägnanz** — Use simple shapes and plain layouts. No ambiguous icons without a text label.

### Emphasis and emotion
- **Von Restorff Effect** — Exactly one element per view stands out (the primary CTA or the current item). If two things are emphasized, neither is.
- **Aesthetic-Usability Effect** — Consistent spacing scale, type scale, and color tokens from `tailwind.config.js`. Do not add one-off hex values.
- **Peak-End Rule** — The end of a post has a clear next step (next part, related posts, back to list). Error and empty states are friendly.
- **Goal-Gradient Effect** — Multi-part series and long tutorials show progress ("Part 3 of 6").
- **Zeigarnik Effect** — Show incomplete series as incomplete ("Part 7: coming soon") so readers come back.
- **Flow** — No modal, popup, or layout shift interrupts reading. Reserve space for embeds and images.
- **Parkinson's Law** — Give an estimated reading time on long posts. Keep forms short.
- **Cognitive Bias** — Do not use dark patterns (fake urgency, preselected opt-ins, confirmshaming).

## Accessibility floor (never skip)

- Text contrast is at least 4.5:1, in light and dark themes.
- Every image has `alt`. Decorative images have `alt=""`.
- Focus is visible on every interactive element.
- Headings go in order (one `h1`, no skipped levels).

## Report format

Give one table, sorted by impact (accessibility floor first). Number each finding so the user can say "fix 1 and 3".

| # | Law | Location | Problem | Steps to fix |
|---|-----|----------|---------|--------------|
| 1 | Hick's Law | `_includes/navbar.html:12` | 9 top-level links. | 1. Keep the 5 most-used links. 2. Move the rest into a "More" menu. |

After the table, give one line: the number of laws checked, the number that pass, and the number of findings. If there are no findings, give only that line.
