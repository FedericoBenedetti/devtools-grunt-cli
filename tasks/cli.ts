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


    grunt.registerTask("generate-folder", "Easily generate predefined templates for different type of works.", function () {
        var args = process.argv;

        if (args.length < 4 || args[2] == "help" || args[2] == "h") {
            grunt.help.queue.forEach(helpMsg => {
                grunt.help[helpMsg]();
            });
            process.exit();
        }

        grunt.help.log();

        _map = new GlMap<string, ITemplate>();
        _map.set("web", new TemplateWeb);
        _map.set("desktop", new TemplateDesktop);

        if (args.length < 4) {
            if (args[2] != "web" ||
                args[2] != "desktop") {

                console.log("\n LOG: 1 argument detected, using it as a title. ");
                setTitle(args[2]);

                console.log("\n LOG: using 'web' as default template. ")
                executeTasks("web");

            } else if (!args[2]) {

                console.log("\n LOG: No args detected, using 'web' as default template. ");
                executeTasks("web");
            }

        } else if (args.length == 4) {
            setTitle(args[3]);
            executeTasks(args[2]);
        }

    });

    function setTitle(title: string) {
        console.log("\n LOG: template name: " + "'" + title + "'");
    }

    function executeTasks(type: string) {
        console.log("\n LOG: type of task: '" + type + "'");

        _taskToExecute = _map.get(type).execute();
        console.log("\n LOG: command that is being executed: " + _taskToExecute);

        grunt.task.run(_taskToExecute);
    }
};