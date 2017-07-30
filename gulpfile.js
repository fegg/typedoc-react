require("json-comments");

var gulp = require("gulp");
var typedoc = require("gulp-typedoc");
var typedocConfig = require("./typedoc/typedoc.json");

/**
 * 1. 如何指定解析的 ts 版本
 */
gulp.task("typedoc", function() {
    return gulp
        .src(["src/**/*.tsx"])
        // .pipe(typedoc(typedocConfig));
        .pipe( typedoc(JSON.parse(JSON.stringify(typedocConfig))) );
});

gulp.task("watch:typedoc", ["typedoc"], function () {
    gulp.watch("src/**/*.tsx", ["typedoc"]);
});