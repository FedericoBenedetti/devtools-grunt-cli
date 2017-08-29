
'use strict';

module.exports = function (grunt) {

  var path = require('path');

  grunt.template.addDelimiters('init', '{%', '%}');

  grunt.registerInitTask('init', 'Easily generate predefined templates for different type of works.', function () {
    var args = process.argv;
    var _pjtitle;

    grunt.help.header();
    grunt.help.usage();
    grunt.help.footer();

    if (args.length < 4) {
      console.log("\n\n WARNING: Arguments expected: 2. \n");
      process.exit();
    } 

    switch (args[2]) {
      case "web":
        console.log("\n\n LOG: 'web' template chosed. ");

        //TODO: manage web template
        break;
      
      case "desktop":
        console.log("\n\n LOG: 'desktop' template chosed. ");

        //TODO: manage desktop template
        break;

      default:
        console.log("\n\n WARNING: Wrong profile. \n");
        process.exit();
        break;
    }

    if (args[3] != "") {
      console.log(" LOG: template name: " + "'" + args[3] + "'");
      _pjtitle = args[3];
    } 

  });

};