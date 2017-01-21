---
install:
  dependencies: ['define-property']
rename:
  basename: index.js
---
'use strict';

var define = require('define-property');

/**
 * Adds a `.<%= camelcase(pluginName(name)) %>` method to a [snapdragon][] `Compiler` instance.
 *
 * ```js
 * var Snapdragon = require('snapdragon');
 * var snapdragon = new Snapdragon();
 *
 * var <%= camelcase(pluginName(name)) %> = require('<%= name %>');
 * var options = {};
 * snapdragon.use(<%= camelcase(pluginName(name)) %>(options));
 * ```
 * @name .<%= camelcase(pluginName(name)) %>
 * @param {Object} `options`
 * @return {Object} Returns the snapdragon instance for chaining
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

