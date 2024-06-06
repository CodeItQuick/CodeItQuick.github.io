---
layout: post
name: Shortcutting your jetbrains
description: In my blog article on JetBrains IDE shortcuts, I covered essential keyboard shortcuts designed to enhance productivity and efficiency while coding. I included navigation shortcuts for quickly moving between files and code elements, editing shortcuts for common tasks like refactoring and code formatting.
image: shortcutting_editor_zombie.webp
tags: editor all
---

# Shortcutting your jetbrains (Windows only)

Here's a list of several shortcuts with some explanations of why they are useful. I'll try
to list them in order of usefulness. There are very few navigation shortcuts in here, and I 
will hopefully make a new post that outlines all the navigation shortcuts that I'm not currently
using.

## The Basics

| Shortcut       | Function                                            |
|----------------|-----------------------------------------------------|
| Shift + F6     | Rename Variable                                     |
| Ctrl + P       | List function parameters |
| Ctrl + Space   | Trigger autocomplete manually |

These are the basic shortcuts everyone should really be using. Rename variable and alt + enter
are probably the most useful. List function parameters is a recent one I've learned that is handy a lot.
Autocomplete allows for grabbing methods without having to look at the function itself etc.

## Dipsy-Doodles

| Shortcut       | Function                                            |
|----------------|-----------------------------------------------------|
| Alt + Up/Down Arrows | Move line Up/Down |
| Alt + J | Grab next occurance of whatever is highlighted |
| Ctrl + Left/Right Arrows | Skip to next word |

This set lets you move things around. Alt + J and combined with Ctrl + arrows lets
you skip between things in multiple lines and apply whatever is needed - good for mass editing.
Moving lines up and down is slightly faster than cut/paste and looks a little bit fancier.

## Refactoring Shortcuts - The Core

| Shortcut       | Function                                            |
|----------------|-----------------------------------------------------|
| Alt + Enter    | Fix some kind of warning/error, Other functionality |
| Ctrl + Alt + M | Extract Method                                      |
| Ctrl + Alt + N | Inline Variable                                     |
| Ctrl + Alt + V | Extract Variable                                    |
| Ctrl + Alt + P | Extract Parameter                                   |
| Ctrl + Alt + F | Extract Field                                       |

Most of the refactoring shortcuts are ctrl + alt + *some command*. If you want to learn
one shortcut only, remember the the first one. That shortcut (alt + enter) will allow
for a lot of functionality that is built-in to the editor.

[Take me to the blog]({% link blog_list.md %})
