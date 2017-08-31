module.exports = (grunt: IGrunt) => {
    grunt.registerTask("json_version", function () {

        var package_JSON = grunt.option("cwd") + "\\" + grunt.option("pjtitle") + "\\app\\package.json";
        var JSONFile = grunt.file.readJSON(package_JSON);

        for (var prop in JSONFile) {
            if (prop === "name") {
                JSONFile[prop] = grunt.option("pjtitle");
            } else if (prop === "version") {
                JSONFile[prop] = "1.0.0";
            }
        }

        grunt.file.write(package_JSON, JSON.stringify(JSONFile, null, 2));



    });
}