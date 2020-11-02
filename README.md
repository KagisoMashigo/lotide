# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

^^ read that again.

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @KagisoMashigo/lotide`

**Require it:**

`const _ = require('@KagisoMashigo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented along with their corresopnding test files:

* `head(...)`: returns first value of an array
* `middle(...)`: returns middle value of an array
* `tail(...)`: returns end value of an array
* `flatten(...)`: merges nested arrays
* `letterPositions(...)`: returns the positions of a particular letter in a string
* `map(...)`: returns first character of strings in an array
* `mergeArrays(...)`: returns merged arrays
* `takeUntil(...)`: stores values in an object as specified
* `without(...)`: returns an array without particular elements
* `countOnly(...)`: counts specific values and stores in an object
* `countLetters(...)`: counts the occurance of a char and adds value to object
* `findKey(...)`: finds key in an objects based on requirements
* `findKeyByValue(...)`: finds value of the aforementioned function




