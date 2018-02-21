module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.initConfig({
		uglify: {
            build: {
              files: [{
                  expand: true,
                  src: ['_/components/js/*.js','_/components/js/anims/*.js'],
                  dest: 'js/',
                  cwd: '.'
              }]
            }
        },
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            options: { livereload: true },
            scripts: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['_/components/html/*.html'],
                tasks: ['htmlmin']
            }
        },
        htmlmin: {
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '_/components/html',
                    src: '**/*.html',
                    dest: ''
                }]
            }
	}
    }) //initconfig
    grunt.registerTask('default', 'watch');
} // exports