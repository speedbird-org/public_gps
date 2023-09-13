#!/bin/bash
git pull origin master

# docker stack deploy --with-registry-auth -c docker-compose.yaml gps

docker stack deploy --with-registry-auth -c compose-lb.yaml lb
docker stack deploy --with-registry-auth -c compose-gps.yaml gps
