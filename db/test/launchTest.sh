#!/bin/bash
docker-compose -f dc-test.yaml down
docker build . -t ftesti
docker-compose -f dc-test.yaml up -d
