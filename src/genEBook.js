var path = require("path");
var fs = require("fs");
var shell = require("shelljs");

module.exports = function(directory, callback) {
    var data = {};
    data.name = directory;
    data.page = [];

    shell.ls(path.join(process.cwd(), "resource", directory)).forEach(function(file) {
        data.page.push("resource/" + directory + "/" + file);
    });

    // Declare path
    data.input = path.join(process.cwd(), "build", "temp", "ebook.html");
    data.cover = path.join(process.cwd(), "build", "temp", "cover" + path.extname(data.page[0]));
    data.output = path.join(process.cwd(), "build", "temp", "ebook.epub");

    // Generate HTML
    var result = require("./genHTML")(data);

    // Write ebook html
    fs.writeFileSync(data.input, result);

    // Copy cover file
    shell.cp("-f", path.join(process.cwd(), data.page[0]), data.cover);

    // Generate epub ebook
    var result = require("./genEPUB")(data, callback);
}
