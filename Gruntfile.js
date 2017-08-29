'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

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
        }

    });

    grunt.task.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-rename');

    grunt.registerTask('default', ['jshint']);
};