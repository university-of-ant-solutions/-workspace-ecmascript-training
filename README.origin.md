# ecmascript training

An open source project to help you learn JS

## Getting Started

### Prerequisites

You will need:

```
- Docker (>= 1.12.0 required)
- Docker Compose (>= 1.11.2 required)
```

### Installing

Open your terminal, go to the folder and type this:

```
./bin/snail start
```

### View the logs

```
./bin/snail logs -f
Attaching to ecmascripttraining_ecmascript_1
...
ecmascript_1  |
ecmascript_1  | > ecmascript-training@1.1.0 test:tape /usr/src/app
ecmascript_1  | > NODE_ENV=tests ./node_modules/.bin/tape -r babel-register ./src/**/__tests__/**/index.js | tap-notify | tap-diff
ecmascript_1  |
ecmascript_1  |         not implement yet
ecmascript_1  |
ecmascript_1  |   timing test
ecmascript_1  |     ✔  should be equal
ecmascript_1  |
ecmascript_1  |   es2015  01-new-variables  let const real life
ecmascript_1  |     ✔  should be equal
ecmascript_1  |     ✔  should be equal
ecmascript_1  |
ecmascript_1  |   es2015  01-new-variables  let const
ecmascript_1  |     ✔  should be equal
ecmascript_1  |     ✔  should be equal
ecmascript_1  |     ✔  should be equal
ecmascript_1  |     ✔  should be equal
...
```

## Content

### ES2015

 - [01-new-variables](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/01-new-variables/__tests__)

 - [02-arrow-functions](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/02-arrow-functions/__tests__)

 - [03-template-strings](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/03-template-strings/__tests__)

 - [05-destructuring](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/05-destructuring/__tests__)

 - [06-iterables-looping](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/06-iterables-looping/__tests__)

 - [07-an-array-of-mprovements](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/07-an-array-of-mprovements/__tests__)

 - [08-say-hello-to-spread-and-rest](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/08-say-hello-to-spread-and-rest/__tests__)

 - [09-object-literal-upgrades](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/09-object-literal-upgrades/__tests__)

 - [10-promises](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/10-promises/__tests__)

 - [11-symbols](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/11-symbols/__tests__)

 - [12-code-quality-with-eslint](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/12-code-quality-with-eslint/__tests__)

 - [13-javascript-modules-and-using-npm](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/13-javascript-modules-and-using-npm/__tests__)

 - [15-classes](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/15-classes/__tests__)

 - [16-generators](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/16-generators/__tests__)

 - [17-proxies](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/17-proxies/__tests__)

 - [18-sets-and-weaksets](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/18-sets-and-weaksets/__tests__)

 - [19-maps-and-weakmaps](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2015/19-maps-and-weakmaps/__tests__)

### ES2016

- [20-the-decorator-pattern](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2016/19-maps-and-weakmaps/__tests__)

- [21-asynchronous](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/es2016/21-asynchronous/__tests__)

### Function JS

- [02-first-class-functions-and-applicative-programming](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/function-js/02-first-class-functions-and-applicative-programming/__tests__)

- [04-higher-order-functions](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/function-js/04-higher-order-functions/__tests__)

- [05-function-building-functions](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/function-js/05-function-building-functions/__tests__)

- [06-recursion](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/function-js/06-recursion/__tests__)

- [08-flow-based-programming](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/function-js/08-flow-based-programming/__tests__)

- [09-programming-without-class](https://github.com/university-of-ant-solutions/ecmascript-training/tree/master/source/src/function-js/09-programming-without-class/__tests__)

## Built With

* [NodeJS](https://github.com/nodejs/node)
* [Babel](https://github.com/babel/babel)
* [Webpack](https://github.com/webpack)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/university-of-ant-solutions/ecmascript-training/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/university-of-ant-solutions/ecmascript-training/tags).

## Authors

* **Hoang Nam** - *Initial work* - [particle4dev](https://github.com/particle4dev)

See also the list of [contributors](https://github.com/university-of-ant-solutions/ecmascript-training/AUTHORS) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
