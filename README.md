# Git Interactive

[![npm package](https://nodei.co/npm/git-interactive.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/request/)

An interactive git terminal utility for managing local git branches with ease. Offers interactive utilities for checking out, removing, logging and merging branches all from a simple UI.

## Install

```bash
# Yarn
yarn global add git-interactive

# NPM
npm install -g git-interactive
```

## Usage

### Checkout

> Checkout a local branch:

```bash
$ gi
? Select action › - Use arrow-keys. Return to submit.
❯   Checkout
    Delete
    Log
    Merge
```

> Select the desired branch:

```bash
$ gi
✔ Select action › Checkout
? Switch branch › current branch
❯   master
    feature-branch
```

> Checkout successful:

```bash
$ gi
✔ Select action › Checkout
✔ Switch branch › feature-branch
Switched to branch 'feature-branch'
```

### Delete

> Delete a local branch:

```bash
$ gi
? Select action › - Use arrow-keys. Return to submit.
    Checkout
❯   Delete
    Log
    Merge
```

> Select local branch to delete (Note: multi branches can be selected):

```bash
$ gi
✔ Select action › Delete
? Delete branch ›
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    a: Toggle all
    enter/return: Complete answer
◯   master
◉   feature-branch - 15b082d Initial commit
```

> Confirm removal:

```bash
$ gi
✔ Select action › Delete
✔ Delete branch › feature-branch
? Are you sure you want to delete: feature-branch › No / Yes
```

> Branch(es) successfully deleted:

```bash
$ gi
✔ Select action › Delete
✔ Delete branch › feature-branch
✔ Are you sure you want to delete: feature-branch … No / Yes
Deleted branch feature-branch (was 15b082d).
```

### Log

> Get the commit log of a local branch:

```bash
$ gi
? Select action › - Use arrow-keys. Return to submit.
    Checkout
    Delete
❯   Log
    Merge
```

> Select the local branch to get commit logs for:

```bash
$ gi
✔ Select action › Log
? Select branch › - Use arrow-keys. Return to submit.
❯   feature-branch - 15b082d Initial commit
    master
```

> Outputs the branches commit logs:

```bash
$ gi
✔ Select action › Log
✔ Select branch › feature-branch
commit 15b082d72446202dd3e42b0ff24ba629ff805c72
Author: Taylor <t.mccarthy1995@hotmail.com>
Date:   Sun May 10 10:16:03 2020 -0400

    Initial commit
```

### Merge

> Merge a local branch with current branch:

```bash
$ gi
? Select action › - Use arrow-keys. Return to submit.
    Checkout
    Delete
    Log
❯   Merge
```

> Select local branch to merge:

```bash
$ gi
✔ Select action › Merge
? Merge branch › - Use arrow-keys. Return to submit.
❯   feature-branch - 15b082d Initial commit
```

> Merges selected branch with current branch:

```bash
$ gi
✔ Select action › Merge
✔ Merge branch › feature-branch
Already up to date.
```
