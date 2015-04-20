module.exports = function(grunt) {
    'use strict';

    // Module configs
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner:
            '/*\n' +
            ' * <%= pkg.name %>\n' +
            ' * <%= pkg.description %>\n' +
            ' * Version: "<%= pkg.version %>"\n' +
            ' * <%= pkg.author %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * License: <%= pkg.license %>\n' +
            ' */' +
            '\n',

        version: {
            js_files: {
                options: {
                    prefix: 'Version\:\\s+[\'"]'
                },
                src: ['js/jquery.plusanchor.js']
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
            },
            my_target: {
                files: {
                    'js/jquery.plusanchor.min.js': ['js/jquery.plusanchor.js']
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-version');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register tasks for the `grunt` terminal command
    grunt.registerTask('default', ['version', 'uglify']);
};
