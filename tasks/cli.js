
'use strict';

module.exports = function (grunt) {

  var path = require('path');

  grunt.template.addDelimiters('init', '{%', '%}');

  grunt.registerInitTask('init', 'Grunt plugin to easily generate predefined templates for different type of works.', function () {
    var args = grunt.util.toArray(arguments);

    console.log("args: " + args);
  });

};