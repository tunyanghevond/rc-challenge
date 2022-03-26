module.exports = function(grunt) {
    //Dev
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        compass: {
            bts: {
                options: {
                    sourcemap: true,
                    sassDir: 'src/bootstrap',
                    cssDir: 'css',
                    outputStyle: 'compressed'
                }
            },
            build: {
                options: {
                    sourcemap: true,
                    sassDir: 'src/sass',
                    cssDir: 'css',
                    outputStyle: 'compressed'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 11',  'ie 10'],
                map: true,
            },
            dev: {
                src: 'css/*.css'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                mangle: false
            },
            dev: {
                files: [{
                    src: ['src/js/*.js'],
                    dest: 'js/index.min.js'
                }]
            }
        },
        clean: {
            css: {
                src: ['css/index.css','css/bootstrap.css','css/lsg.css']
            },
            build: {
                src: ['build']
            },
            cache: {
                src: ['build/cache']
            }
        },
        watch: {
            dev: {
                files: ['src/js/*.*','src/sass/**/*.sass','src/lsg/**/*.*','src/bootstrap/**/*.scss'],
                tasks: [
                    'clean:css',
                    'uglify',
                    'compass',
                    'autoprefixer'
                ]
            }
        }
    });
};