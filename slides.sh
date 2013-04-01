#!/bin/bash
slide_index=-1
slide_dir=/home/substack/projects/talks/html5devconf_2013/slides

function next_slide {
    slide_index=$((slide_index+1))
    show_slide
}

function prev_slide {
    slide_index=$((slide_index-1))
    show_slide
}

function show_slide {
    exterminate show "$slide_dir/$slide_index.html"
}

function edit_slide {
    $EDITOR "$slide_dir/$slide_index.html"
}
