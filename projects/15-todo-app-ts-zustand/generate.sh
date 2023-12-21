#!/bin/bash

service_name="todo"
image_name=""

pnpm run build
pwd
cp -R dist/ Docker
cd Docker
docker build -t react-todo:1.0.0 --target nginx-todo .
rm -rf Docker/dist
