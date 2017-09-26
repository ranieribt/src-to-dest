# src-to-dest

Creates a web page given a template, contents, and data.

1. build all
2. serve
3. live-reload
4. watch:
    - on src change -> incremental build (only changed files)
    - on dest change -> (3)

HTML, img, CSS, JS are independent: can be built/optimized in parallel
