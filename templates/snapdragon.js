---
install:
  dependencies: ['define-property']
rename:
  basename: index.js
---
'use strict';

var define = require('define-property');

/**
 * Adds a `.<%= camelcase(pluginName(name)) %>` method to a [snapdragon][] `Parser` instance.
 *
 * ```js
 * var Snapdragon = require('snapdragon');
 * var <%= camelcase(pluginName(name)) %> = require('<%= name %>');
 * var parser = new Snapdragon.Parser();
 * parser.use(<%= camelcase(pluginName(name)) %>([options]));
 *
 * ```
 * @param {String} `type`
 * @param {RegExp|Function} `regex` Pass the regex to use for capturing. Pass a function if you need access to the parser instance.
 * @return {Object} Returns the parser instance for chaining
 * @api public
 */

module.exports = function(options) {
  return function(snapdragon) {
    if (!snapdragon.isSnapdragon) {
      throw new Error('expected an instance of Snapdragon');
    }

    define(snapdragon, '<%= camelcase(pluginName(name)) %>', function() {
      // do stuff
      return this;
    });
  };
};
