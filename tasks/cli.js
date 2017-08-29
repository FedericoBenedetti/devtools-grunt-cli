
'use strict';

module.exports = function (grunt) {

  var path = require('path');

  grunt.template.addDelimiters('init', '{%', '%}');

  grunt.registerInitTask('init', 'Easily generate predefined templates for different type of works.', function () {
    var args = grunt.util.toArray(arguments);
    
    grunt.help.header();
    grunt.help.usage();
    grunt.help.footer();

    console.log("\n\n\t-: arguments " + args[0]);

  });

};