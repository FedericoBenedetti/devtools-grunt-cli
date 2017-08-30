'use strict';

// Get working directory: <%= grunt.options.cwd %>

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.task.loadTasks('tasks');

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.ts',
                'bin/gl-cli'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        shell: {
            web: {
                command: ''

            },

            desktop: {
                command: ''
            }
        }

    });

    grunt.registerTask('default', ['jshint']);
};