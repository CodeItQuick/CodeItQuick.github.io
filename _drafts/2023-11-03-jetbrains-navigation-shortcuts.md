---
layout: post
name: Navigation Shortcuts in your jetbrains
description: In my blog article on JetBrains IDE shortcuts, I covered essential keyboard shortcuts designed to enhance productivity and efficiency while coding. 
image: navigation_shortcuts_zombie.png
time: 5 minutes 25 seconds
tags: editor all
---

# Navigation Shortcuts in your jetbrains 
<h6>(Reading Time: 5 minutes 25 seconds)</h6>

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

## Basic Editor Movements

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
one shortcut only, remember the first one. That shortcut (alt + enter) will allow
for a lot of functionality that is built-in to the editor.

## General Search Window Shortcuts

The general search window is very useful and can be displayed by using shift + shift.
There are shortcuts to go to each individual tab as detailed below.

| Shortcut       | Function                                            |
|----------------|-----------------------------------------------------|
| Double Click Shift | Search Window |
| Ctrl + N | Go to Class |
| Ctrl + Shift + N | Go To Files |
| Ctrl + Alt + Shift + N | Go To Symbols |

## Basic Editor Moving Around
Moving around in the editor, these shortcuts are used frequently. The goto error
and previous error is especially useful to find compile errors. It's also possible
to jump between methods.

| Shortcut       | Function                                            |
|----------------|-----------------------------------------------------|
| Ctrl + B  | Go to Declarations or Usages |
| Alt + Up | Previous Method |
| Alt + Down | Next Method |
| F2 | Go to Next Error |
| Shift + F2 | Go To Previous Error |

## Goto by Reference Actions
I use goto declaration or usage frequently, and need to start trying some of the other shortcuts in here more frequently.

| Shortcut       | Function                                            |
|----------------|-----------------------------------------------------|
| Alt + Home | Jump to Navigation Bar |
| Ctrl + B | Go to Declaration or Usages |
| Ctrl + Alt + B | Go to Implementations |
| Ctrl + Shift + B | Go To Type Declaration | 
| Ctrl + Shift + T | Go To Test |
| Ctrl + F12 | File Structure |
| Ctrl + Alt + F12 | File Path |

