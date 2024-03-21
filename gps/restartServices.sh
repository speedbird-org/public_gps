#!/bin/bash

# Iterate through all services in the Docker Swarm
for service in $(docker service ls --format "{{.Name}}"); do
    echo "Restarting service: $service"
    docker service update --force $service
done
