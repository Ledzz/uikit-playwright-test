#!/bin/sh
joined_args=""
for arg in "$@"; do
    joined_args="$joined_args \"$arg\""
done
MSYS_NO_PATHCONV=1 docker-compose -f ./docker-compose.yml run --rm -w /app stories /bin/bash -c \
  "npm install && npm run test $joined_args"
