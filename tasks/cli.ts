interface IGrunt {
    help: any,
    registerInitTask(taskname: string, description: string, taskFunction: (this: grunt.task.ITask, ...args: any[]) => void)
}

module.exports = (grunt: IGrunt) => {

    class GlMap<TKey, TValue>{
        keys: Array<TKey>;

        mapObj: any;

        constructor() {
            this.keys = new Array<TKey>();
            this.mapObj = {};
        }

        set(key: TKey, value: TValue) {
            this.mapObj[key] = value;
        }

        get(key: TKey): TValue {
            return this.mapObj[key];
        }
    }


    interface ITemplate {
        execute(): string[];
    }

    class TemplateWeb implements ITemplate {
        execute() {
            let tasks: string[] = [];
            tasks.push("unzip:unzip_template");
            tasks.push("move:web");
            return tasks;
        }
    }

    class TemplateDesktop implements ITemplate {
        execute() {
            let tasks: string[] = [];
            tasks.push("unzip:unzip_template");
            tasks.push("move:desktop");
            return tasks;
        }
    }


    var path = require("path");

    var _map: GlMap<string, ITemplate>;
    var _taskToExecute: string[] = [];


    grunt.template.addDelimiters("init", "{%", "%}");


    grunt.registerTask("generate-template", "Easily generate predefined templates for different type of works.", function () {
        var args = process.argv;

        grunt.help.log();

        _map = new GlMap<string, ITemplate>();
        _map.set("web", new TemplateWeb);
        _map.set("desktop", new TemplateDesktop);

        executeTasks();
    });

    function executeTasks() {

        _taskToExecute = _map.get(grunt.option("type")).execute();

        grunt.task.run(_taskToExecute);
    }
};