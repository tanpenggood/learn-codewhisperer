#!/bin/bash

# Stop all EC2 instances tagged environment=dev
aws ec2 describe-instances --filters "Name=tag:environment,Values=dev" --query "Reservations[].Instances[].InstanceId" --output text | xargs -n1 aws ec2 stop-instances --instance-ids