var gulp = require('gulp');
var server = require('gulp-webserver');
var searchjson = require('./src/data/data.json');

gulp.task('default',function(){
    gulp.src('src')
        .pipe(server({
            port:9090,
            open:true,
            livereload:true,
            middleware:function(req, res, next){
                if(req.url ==='/search'){
                    res.end(JSON.stringify(searchjson));
                }
                next();
            }
        }))
});