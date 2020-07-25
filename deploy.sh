#!/bin/sh

# make sure ./docs is empty
rm -rd ./docs

mkdir ./docs

# copy static files from ./public to ./docs
cp -r ./public/* ./docs
cp -r ./CNAME ./docs

# remove ./public folder
rm -rd ./public
