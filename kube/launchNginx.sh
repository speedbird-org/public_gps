#!/bin/bash
# docker stack deploy --with-registry-auth -c docker-compose-nginx.yaml gps
docker-compose -f docker-compose-nginx.yaml up -d
