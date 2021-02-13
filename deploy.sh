#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# push到master
git add .
git commit -m 'update'
# 部署到 https://<USERNAME>.github.io
git push -f https://github.com/1328999898/blog.git master

# cd 到构建输出的目录下 
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/1328999898/blog.git master:gh-pages

cd -