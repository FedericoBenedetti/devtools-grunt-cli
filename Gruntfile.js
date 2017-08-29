module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-rename');

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

        unzip: {
            'out': 'templates/gui-template.zip'
        },

        rename: {
            main: {
                files: [
                    { src: ['out/gui-project-template.sln'], dest: 'out/' + grunt.option("title") + '.sln' },
                ]
            }
        },

    });

    grunt.registerTask('default', ['jshint', 'unzip', 'rename', 'modify_template']);
};