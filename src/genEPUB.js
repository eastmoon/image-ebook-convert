var path = require("path");
var shell = require("shelljs");
var convert = require("ebook-convert");

module.exports = function(data, callback) {
    // see more options at https://manual.calibre-ebook.com/generated/en/ebook-convert.html
    var options = {
      input: data.input,
      output: data.output,
      cover: data.cover,
      authors: '"ebook generator"',
      pageBreaksBefore: '//img',
      prettyPrint: true,
      insertBlankLine: true,
      insertBlankLineSize: "1",
      lineHeight: "12",
      marginTop: "0",
      marginRight: "0",
      marginBottom: "0",
      marginLeft: "0"
    };

    /*
    * create epub file
    */
    convert(options, function (err) {
        if (err) console.log(err)
        shell.mv(data.output, path.join(process.cwd(), "build", "output", data.name + ".epub"));
        console.log("> Complete : " + data.name);
        if ( callback ) callback();
    });
}
