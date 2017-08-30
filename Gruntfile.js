'use strict';

// Get working directory: <%= grunt.options.cwd %>


module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.task.loadTasks(grunt.options.asset('tasks'));

    var _current_dir = grunt.options.cwd;
    var _project_title = grunt.options.pjtitle;

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
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

        move: {
            web: {
                src:  _current_dir + '\\' + _project_title + '\\gui-project-template.sln',
                dest: _current_dir + '\\' + _project_title + '\\' + _project_title + '.sln'

            },

            desktop: {
                src:  _current_dir + '\\' + _project_title + '\\gui-project-template.sln',
                dest: _current_dir + '\\' + _project_title + '\\' + _project_title + '.sln'
            }
        },

        unzip: {
            unzip_template: {
                src: process.cwd() + '/templates/gui-project-template.zip',
                dest: _current_dir + '/' + _project_title
            }
        }

    });

    grunt.registerTask('default', ['jshint']);
};