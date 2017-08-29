'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('grunt-log-headers')(grunt);

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'bin/gl-cli'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

    });

    grunt.task.loadTasks('tasks');
    grunt.registerTask('default', ['jshint']);
};