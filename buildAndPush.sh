#!/bin/bash

docker build -t registry.digitalocean.com/fleettrack/test .

docker push registry.digitalocean.com/fleettrack/test