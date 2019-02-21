const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20'],
            grid: true,
            cascade: false
        }))
        .pipe(gulp.dest('./dist')),
        gulp.src('src/flex.html')
        .pipe(gulp.dest('./dist'))
);