#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://zv295921481.github.io
# git push -f git@github.com:zv295921481/zv295921481.github.io.git master

# 如果发布到 https://zv295921481.github.io/personal-blog 推荐这个
git push -f git@github.com:zv295921481/personal-blog.git master:gh-pages

cd -