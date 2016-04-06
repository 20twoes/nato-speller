#!/bin/bash
gulp
rm -rf ~/tmp/nato-speller
git clone git@github-20twoes:20twoes/nato-speller.git -b gh-pages --single-branch ~/tmp/nato-speller
cp -a dist/ ~/tmp/nato-speller/
cd ~/tmp/nato-speller
git config user.email al.nguyen@gmail.com
git add . -A
git commit -m 'Publish website'
git push origin gh-pages
