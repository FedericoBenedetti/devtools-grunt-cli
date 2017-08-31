"use strict";

// Get working directory: <%= grunt.options.cwd %>

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-git");
    grunt.loadNpmTasks("grunt-move");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-zip");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.task.loadTasks(grunt.options.asset("tasks"));

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
                src: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\gui-project-template.sln",
                dest: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\<%= grunt.options.pjtitle %>.sln"
            },

            desktop: {
                src: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\gui-project-template.sln",
                dest: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\<%= grunt.options.pjtitle %>.sln"
            }
        },

        gitclone: {
            update: {
                options: {
                    repository: "https://git.loccioni.com/IT/gui-project-template",
                    branch: "master",
                    directory: "<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\"
                }
            }
        },

        clean: {
            delete_git_folder: ["<%= grunt.options.cwd %>\\<%= grunt.options.pjtitle %>\\.git"]
        }

    });

    grunt.registerTask("json_version", function() {

        var package_JSON = grunt.options.cwd + "\\" + grunt.options.pjtitle + "\\app\\package.json";
        var JSONFile = grunt.file.readJSON(package_JSON);

        for (var prop in JSONFile) {
            if (prop === "name") {
                JSONFile[prop] = grunt.options.pjtitle;
            } else if (prop === "version") {
                JSONFile[prop] = "1.0.0";
            }
        }

        grunt.file.write(package_JSON, JSON.stringify(JSONFile, null));
        
        

    });

};