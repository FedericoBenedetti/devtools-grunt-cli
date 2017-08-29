
'use strict';

module.exports = function (grunt) {

  // Nodejs libs.
  var path = require('path');

  grunt.template.addDelimiters('init', '{%', '%}');

  grunt.registerInitTask('init', 'Generate project scaffolding from a template.', function () {
    var args = grunt.util.toArray(arguments);

    console.log("args: " + args);
  });

};