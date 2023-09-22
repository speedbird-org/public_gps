#!/bin/bash

# docker build -t registry.digitalocean.com/fleettrack/test .
# docker push registry.digitalocean.com/fleettrack/test

bb.sh "$1"

docker build -t asia-south1-docker.pkg.dev/gpstrack-2/fleettrack/test .

docker push asia-south1-docker.pkg.dev/gpstrack-2/fleettrack/test