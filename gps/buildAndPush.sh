#!/bin/bash

git add --all
if [[ -z "$1" ]]
then
  git commit -m "Quick commit"
else
  git commit -m "$1"
fi
git push


docker build -t asia-south1-docker.pkg.dev/gpstrack-2/fleettrack/test .

docker push asia-south1-docker.pkg.dev/gpstrack-2/fleettrack/test   