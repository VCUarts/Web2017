module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: ['css/**/*.css']
            },
            js: {
                files: ['js/**/*.js']
            },
            livereload: {
                files: ['**/*.html', '**/*.php', '**/*.js', '**/*.css', '!**/node_modules/**'],
                options: { livereload: true }
            }
        },

        concurrent: {
            watch: {
                tasks: ['watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    // 3. Where we tell Grunt what plugins to use

    // Browser Reload + File Watch
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('dev', ['watch']);
};