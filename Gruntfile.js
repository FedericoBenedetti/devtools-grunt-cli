module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.task.loadTasks('tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        typings: {
            install: {}
        },
        unzip_template: {
            path: 'templates/'
        }
    });

    grunt.registerTask('test', ['jshint']);

    grunt.registerTask('default', ['test']);
};