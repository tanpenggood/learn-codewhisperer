#!/bin/bash

# Remove all unused containers
docker container prune -f
# Remove all unused images
docker image prune -f
# Remove all unused volumes
docker volume prune -f