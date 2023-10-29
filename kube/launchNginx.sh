#!/bin/bash
git pull

# docker stack deploy --with-registry-auth -c docker-compose-nginx.yaml gps

docker-compose -f docker-compose-nginx.yaml down --remove-orphans
docker-compose -f docker-compose-nginx.yaml up -d
