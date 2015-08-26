var gulp = require('gulp');
var browserify = require('gulp-browerifly');
var concat = require('gulp-concat');

gulp.task('browserify', function(){
	gulp.scr("src/js/main.js")
	.pipe(bowerify({transform: "reactify"}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest("dist.js"));
});
