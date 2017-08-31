"use strict";

// Get working directory: <%= grunt.options.cwd %>


module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-git");
    grunt.loadNpmTasks("grunt-move");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-zip");
    grunt.task.loadTasks(grunt.options.asset("tasks"));

    var _current_dir = grunt.options.cwd;
    var _project_title = grunt.options.pjtitle;

    grunt.initConfig({
        pkg: grunt.file.readJSON("./package.json"),
        jshint: {
            all: [
                "Gruntfile.js",
                "tasks/*.ts",
                "bin/gl-cli"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        move: {
            web: {
                src:  "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\gui-project-template.sln",
                dest: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\<%= grunt.options.pjtitle %>.sln"
            },

            desktop: {
                src:  "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\gui-project-template.sln",
                dest: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\<%= grunt.options.pjtitle %>.sln"
            }
        },

        unzip: {
            unzip_template: {
                src: process.cwd() + "/templates/gui-project-template.zip",
                dest: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\"
            }
        }

    });

    grunt.registerTask("default", ["jshint"]);
};