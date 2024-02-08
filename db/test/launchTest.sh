#!/bin/bash
docker-compose -f dc-test.yaml down
docker build . -f ftesti
docker-compose -f dc-test.yaml up -d
