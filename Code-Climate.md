Code Climate

1. install
https://istanbul.js.org/

2.

  docker run \
  --interactive --tty --rm \
  --env CODECLIMATE_CODE="$PWD/source" \
  --env CODECLIMATE_DEBUG=1 \
  --volume "$PWD/source":/code \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume "$PWD/cc":/tmp/cc \
  codeclimate/codeclimate:0.67.0 analyze -f json > raw_codeclimate.json


git commit --allow-empty -m "[started #151152274] [skip ci] 151152274-ecma-setup-ci https://www.pivotaltracker.com/story/show/151152274"

[finished #151152274] [skip ci] 151152274-ecma-setup-ci https://www.pivotaltracker.com/story/show/151152274

[delivered #151152274]
