#!/bin/sh
joined_args=""
for arg in "$@"; do
    joined_args="$joined_args \"$arg\""
done
MSYS_NO_PATHCONV=1 docker-compose -f ./docker-compose.stories.yml run --rm -w /app stories /bin/bash -c \
  "yarn install && yarn playwright test --output test-results-from-docker $joined_args && chown -R pwuser:pwuser src/stories/stories.shots.ts-snapshots test-results-from-docker"
