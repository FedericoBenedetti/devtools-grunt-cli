'use strict';

// Get working directory: <%= grunt.options.cwd %>
let _current_dir = grunt.options.cwd;
let _project_title = grunt.options.pjtitle;

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
                command: 'mv out/' + _project_title + '/gui-project-template.sln out/' + _project_title + '/' + _project_title + '.sln'

            },

            desktop: {
                command: ''
            }
        },

        unzip: {
            unzip_template: {
              src: '/templates/gui-project-template.zip',
              dest: 'out/' + _project_title
            }
          }

    });

    grunt.registerTask('default', ['jshint']);
};