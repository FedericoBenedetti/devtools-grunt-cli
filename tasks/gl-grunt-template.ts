module.exports = (grunt: IGrunt) => {
    grunt.registerTask('modify_template', 'unzip default template in /templates', () => {
        var param_web = grunt.option("web");
        var param_desktop = grunt.option("desktop");

        if (param_web) {
            console.log("param_web: " + param_web);
        } else if (param_desktop) {
            console.log("param_web: " + param_web);
        }
    });

}