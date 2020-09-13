#!/usr/bin/env sh
#set -e

#npm run build
#cd dist

git init
git add -A
git commit -m 'my test'
git remote add origin https://github.com/sunwl/vue-test.git
git pull origin master
git push origin master