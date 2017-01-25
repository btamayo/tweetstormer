#!/bin/bash
set -x
git init
git remote add deploy "deploy@biancatamayo.me:/home/deploy/repo-receiver/tweetstormer.git"
git config user.name "Travis CI"
git config user.email "contact+travis@biancatamayo.me"

if [ $TRAVIS_BRANCH == 'master' ] ; then
    git checkout -b master
    git add .
    git commit -m "Deploy test"
    git push --force deploy master
else
    git checkout -b staging
    git add .
    git commit -m "Staging test"
    git push -u --force deploy staging
fi