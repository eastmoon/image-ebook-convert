var fs = require("fs");
var path = require("path");
var handlebars = require("handlebars");

module.exports = function(data) {
    var source = "<!DOCTYPE html>"
    source += "<html><head>";
    source += fs.readFileSync(path.join(process.cwd(), "partials", "head.hbs")).toString();
    source += "</head><body>"
    var pageSource = fs.readFileSync(path.join(process.cwd(), "partials", "page.hbs")).toString();
    var pageTemplate = handlebars.compile(pageSource);
    data.page.forEach(function(file) {
        source += pageTemplate({filename:"../../" + file});
    })
    source += "</body></html>"
    var template = handlebars.compile(source);
    var result = template(data);
    return result;
}
