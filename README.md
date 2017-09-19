# ecmascript-training

[![pipeline status](https://gitlab.com/particle4dev/ecmascript-training/badges/develop/pipeline.svg)](https://gitlab.com/particle4dev/ecmascript-training/commits/develop)

### Installation
+ clone this repo
+ build docker images: `make start`
+ watch the result: `make logs ecmascript`

### Licensing
Please see the file called LICENSE.

### Todo

- update babel
- complete the fp course
- performance tips in JS/NODE

### Tutorials
- https://ponyfoo.com/articles/tagged/es6-in-depth
- http://kangax.github.io/compat-table/es6/
- https://github.com/feross/standard/blob/master/README.md

### Tips

- https://developers.google.com/speed/articles/optimizing-javascript
- https://www.html5rocks.com/en/tutorials/speed/v8/
- https://blog.newrelic.com/2014/11/14/javascript-perf-tips/
- http://jonraasch.com/blog/10-javascript-performance-boosting-tips-from-nicholas-zakas
- https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e


,
          {
            \"title\": \"Report\",
            \"value\": \"$(tail -3 eslint-codeframe-report | sed 's/`/\`/g' | sed 's/"/\"/g' | sed "s/'/\'/g")\",
            \"short\": false
          }
          {
            \"title\": \"Message\",
            \"value\": \"$(git rev-list --format=%B --max-count=1 $CI_COMMIT_SHA)\",
            \"short\": false
          },
          {


