#!/bin/bash
docker stack deploy --with-registry-auth -c docker-compose-nginx.yaml gps
