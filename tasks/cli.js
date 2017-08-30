"use strict";
module.exports = function (grunt) {
    var GlMap = (function () {
        function GlMap() {
            this.keys = new Array();
            this.mapObj = {};
        }
        GlMap.prototype.set = function (key, value) {
            this.mapObj[key] = value;
        };
        GlMap.prototype.get = function (key) {
            return this.mapObj[key];
        };
        return GlMap;
    }());
    var TemplateWeb = (function () {
        function TemplateWeb() {
        }
        TemplateWeb.prototype.execute = function () {
            var tasks = [];
            tasks.push('unzip:unzip_template');
            tasks.push('move:web');
            return tasks;
        };
        return TemplateWeb;
    }());
    var TemplateDesktop = (function () {
        function TemplateDesktop() {
        }
        TemplateDesktop.prototype.execute = function () {
            var tasks = [];
            tasks.push('unzip:unzip_template');
            tasks.push('move:desktop');
            return tasks;
        };
        return TemplateDesktop;
    }());
    var path = require('path');
    var _map;
    var _taskToExecute = [];
    grunt.template.addDelimiters('init', '{%', '%}');
    grunt.registerTask('generate-folder', 'Easily generate predefined templates for different type of works.', function () {
        var args = process.argv;
        if (args.length < 4 || args[2] == "help" || args[2] == "h") {
            grunt.help.queue.forEach(function (helpMsg) {
                grunt.help[helpMsg]();
            });
            process.exit();
        }
        grunt.help.log();
        _map = new GlMap();
        _map.set("web", new TemplateWeb);
        _map.set("desktop", new TemplateDesktop);
        if (args.length < 4) {
            if (args[2] != "web" ||
                args[2] != "desktop") {
                console.log("\n LOG: 1 argument detected, using it as a title. ");
                setTitle(args[2]);
                console.log("\n LOG: using 'web' as default template. ");
                executeTasks("web");
            }
            else if (!args[2]) {
                console.log("\n LOG: No args detected, using 'web' as default template. ");
                executeTasks("web");
            }
        }
        else if (args.length == 4) {
            setTitle(args[3]);
            executeTasks(args[2]);
        }
    });
    function setTitle(title) {
        console.log("\n LOG: template name: " + "'" + title + "'");
    }
    function executeTasks(type) {
        console.log("\n LOG: type of task: '" + type + "'");
        _taskToExecute = _map.get(type).execute();
        console.log("\n LOG: command that is being executed: " + _taskToExecute);
        grunt.task.run(_taskToExecute);
    }
};
//# sourceMappingURL=cli.js.map