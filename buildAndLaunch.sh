#!/bin/bash
git pull origin master

docker stop gps
docker build -t gps .
docker run -p 1800:1800 --name gps gps:latest &
