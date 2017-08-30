class TemplateWeb {
    execute() {
        return '';
    }
}
class TemplateDesktop {
    execute() {
        return '';
    }
}
module.exports = (grunt) => {
    var path = require('path');
    grunt.template.addDelimiters('init', '{%', '%}');
    grunt.registerInitTask('init', 'Easily generate predefined templates for different type of works.', function () {
        var args = process.argv;
        var withoutFullArgs = false;
        var _pjtitle;
        grunt.help.header();
        grunt.help.usage();
        grunt.help.footer();
        if (args.length < 4) {
            if (args[3].toString() === "web" ||
                args[3].toString() === "desktop") {
                _pjtitle = args[3];
                withoutFullArgs = true;
            }
            else {
                console.log("\n\n WARNING: Arguments expected: 2. \n");
                process.exit();
            }
        }
        let map = new Map();
        map.set("web", new TemplateWeb);
        map.set("desktop", new TemplateDesktop);
        console.log(map.get("web")); //.execute
        if (args[3] != "" && withoutFullArgs == true) {
            console.log(" LOG: template name: " + "'" + args[3] + "'");
            _pjtitle = args[3];
        }
    });
};
//# sourceMappingURL=cli.js.map