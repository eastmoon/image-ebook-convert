var path = require("path");
var shell = require("shelljs");
var Promise = require("promise");
var genEBook = require("./src/genEBook");

// Initial build folder
shell.mkdir(path.join(__dirname, "build"));
shell.rm(path.join(__dirname, "build", "temp", "*.*"));
shell.mkdir(path.join(__dirname, "build", "temp"));
shell.rm(path.join(__dirname, "build", "output", "*.*"));
shell.mkdir(path.join(__dirname, "build", "output"));

// Search target in resource
var data = {};
var list = shell.ls(path.join(__dirname, "resource"));
new Promise(function(resolve, reject) {
    console.log("> Start ebook generate");
    generate(0, list, resolve);
}).then(function(result) {
    console.log("> Complete ebook generate");
});

function generate(index, list, callback) {
    var directory = list[index];
    if (index < list.length) {
        new Promise(function(resolve, reject) {
            console.log("> Generate " + (index + 1) + "/" + list.length + ", " + directory);
            genEBook(directory, resolve);
        }).then(function(result) {
            return generate(index + 1, list, callback);
        });
    } else {
        if ( callback ) callback();
    }
}
