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
        getTasksToExecute(): string[];
    }

    class TemplateWeb implements ITemplate {
        getTasksToExecute() {
            let tasks: string[] = [];
            tasks.push("move:web");
            tasks.push("json_version");
            return tasks;
        }
    }

    class TemplateDesktop implements ITemplate {
        getTasksToExecute() {
            let tasks: string[] = [];
            tasks.push("move:desktop");
            tasks.push("json_version");
            return tasks;
        }
    }


    var path = require("path");

    grunt.registerTask("generate-template", "Easily generate predefined templates for different type of works.", () => {
        grunt.help.log();
        let _map = new GlMap<string, ITemplate>();
        _map.set("web", new TemplateWeb);
        _map.set("desktop", new TemplateDesktop);

        grunt.task.run("gitclone:update", "clean:delete_git_folder");

        grunt.task.run(_map.get(<string>grunt.option("type")).getTasksToExecute());
    });

};