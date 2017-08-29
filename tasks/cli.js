/*
 * grunt-init
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Nodejs libs.
  var path = require('path');

  // The "init" task needs separate delimiters to avoid conflicts, so the <>
  // are replaced with {}. Otherwise, they behave the same.
  grunt.template.addDelimiters('init', '{%', '%}');

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerInitTask('init', 'Generate project scaffolding from a template.', function() {
    // Extra arguments will be applied to the template file.
    var args = grunt.util.toArray(arguments);
    console.log("gl-cli aquired");
  });

};