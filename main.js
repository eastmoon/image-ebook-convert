var fs = require("fs");
var path = require("path");
var shell = require("shelljs");
var Promise = require("promise");
var genEBook = require("./src/genEBook");

//
var resourcePath = path.join(__dirname, "resource");
if (!fs.existsSync(resourcePath)) {
    console.log("> ERROR : Target resource isn't exist.");
    resourcePath = null;
}

if ( resourcePath !== null ) {
    // Initial build directories
    var checkPath = "";

    checkPath = path.join(__dirname, "build");
    if (!fs.existsSync(checkPath)) {
        shell.mkdir(checkPath);
    }

    checkPath = path.join(__dirname, "build", "temp");
    if (fs.existsSync(checkPath)) {
        shell.rm(path.join(checkPath, "*.*"));
    } else {
        shell.mkdir(checkPath);
    }

    checkPath = path.join(__dirname, "build", "output");
    if (fs.existsSync(checkPath)) {
        shell.rm(path.join(checkPath, "*.*"));
    } else {
        shell.mkdir(checkPath);
    }

    // Search target in resource
    var list = shell.ls(resourcePath);
    new Promise(function(resolve, reject) {
        console.log("> Start ebook generate");
        generate(0, list, resolve);
    }).then(function(result) {
        console.log("> Complete ebook generate");
    });
}

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
