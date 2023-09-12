#!/bin/bash
git pull origin master

docker stack deploy --with-registry-auth -c docker-compose.yaml gps
