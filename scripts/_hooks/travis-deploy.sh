#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    git init

    git remote add deploy "deploy@biancatamayo.me:/home/deploy/repo-receiver/tweetstormer"
    git config user.name "Travis CI"
    git config user.email "contact+travis@biancatamayo.me"

    git add .
    git commit -m "Deploy test" #TODO - Better message
    git push --force deploy master
else
    echo $TRAVIS_BRANCH #TODO - Env messages
fi