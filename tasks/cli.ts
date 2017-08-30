interface IGrunt {
    help: any,
    registerInitTask(taskname: string, description: string, taskFunction: (this: grunt.task.ITask, ...args: any[]) => void)
}

interface ITemplate {
    execute(): string[];
}

class TemplateWeb implements ITemplate {
    execute() {
        let tasks: string[] = [];
        
        tasks.push('shell:web');
        return tasks;
    }
}

class TemplateDesktop implements ITemplate {
    execute() {
        let tasks: string[] = [];
        return tasks;
    }
}

module.exports = (grunt: IGrunt) => {

    var path = require('path');
    
    var _pjtitle: string;
    var _map: Map<string, ITemplate>;
    
    grunt.template.addDelimiters('init', '{%', '%}');


    grunt.registerTask('generate-folder', 'Easily generate predefined templates for different type of works.', function () {
        var args = process.argv;

        if (args.length < 4 || args[2] == "help" || args[2] == "h") {
            grunt.help.queue.forEach(helpMsg => {
                grunt.help[helpMsg]();
            });       
            process.exit();
        }

        grunt.help.log();
        
        _map = new Map<string, ITemplate>();
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

                console.log("\n LOG: No args detected, using 'web' as default template. ")
                executeTasks("web");
            }

        } else if (args.length == 4) {
            setTitle(args[3]);
            executeTasks(args[2]);
        }

    });

    function setTitle(title: string) {
        _pjtitle = title;
        console.log("\n LOG: template name: " + "'" + _pjtitle + "'");
    }

    function executeTasks(type: string) {
        let taskToExecute;
        console.log("\n LOG: type of task: '" + type + "'");

        taskToExecute = _map.get(type).execute()
        console.log("\n LOG: command that is being executed: " + taskToExecute);

        grunt.task.run('shell:web');
    }
};