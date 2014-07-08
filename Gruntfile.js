//
// Grunt configuration
//
// Automated tasks to make my life easier
//
//

// TODO: Deploy
// Git push
// Phantomas
// PageSpeed (some how without exposing API key?)
// YSlow

"use strict";

module.exports = function (grunt) {
    // Save on lots of load npm task statements
    require("load-grunt-tasks")(grunt);

    // Show task execution times
    require("time-grunt")(grunt);

    //
    // Go go gadget task-configuration
    //
    grunt.initConfig({

        //
        // Configuration to avoid repetition in tasks
        //
        "aaConfig": {
            cssDir: "css",
            homepageUrl: "http://aaronallport.com",
            postUrl: "TODO",
            scssDirPath: "scss",
            tmpDirPath: "tmp"
        },

        //
        // Now the task configuration...
        //

        // Auto-prefix CSS based on the "Can I Use" Database
        autoprefixer: {
            build: {
                src: "<%= aaConfig.tmpDirPath %>/css/aa.css",
                dest: "<%= aaConfig.tmpDirPath %>/css/aa.prefixed.css"
            }
        },

        // Clean out specified directories
        clean: {
            tmp: ["<%= aaConfig.tmpDirPath %>"]
        },

        // Minify CSS
        cssmin: {
            "<%= aaConfig.cssDir %>/aa.min.css": ["<%= aaConfig.tmpDirPath %>/css/aa.prefixed.css"]
        },

        // Metrics collection
        phantomas: {
            homepage: {
                options: {
                    indexPath: "metrics/homepage/",
                    url: "<%= aaConfig.homepageUrl %>",
                    buildUi: true,
                    numberOfRuns: 10,
                    options: {
                        "no-externals": true,
                        "timeout": 30
                    }
                }
            },
            post: {
                options: {
                    indexPath: "metrics/post/",
                    url: "<%= aaConfig.postUrl %>",
                    buildUi: true,
                    numberOfRuns: 10,
                    options: {
                        "no-externals": true,
                        "timeout": 30
                    }
                }
            }
        },

        // Compile SASS on to CSS
        sass: {
            compile: {
                files: {
                    "<%= aaConfig.tmpDirPath %>/css/aa.css": "<%= aaConfig.scssDirPath %>/aa.scss"
                }
            }
        },

        // Ensure our SCSS (SASS) code is written as we like it
        // Remember to run "gem install scss-lint" to install the scss-lint ruby gem if not installed
        scsslint: {
            files: ["scss/*.scss", "scss/**/*.scss"]
        },

        // Watch for changes to SCSS files and re-build as necessary
        watch: {
            files: ["scss/**/*.scss"],
            tasks: ["css"]
        },

        yslow: {
            options: {
                thresholds: {
                    weight: 180,
                    speed: 1000,
                    score: 80,
                    requests: 15
                }
            },
            homepage: {
                files: [
                    {
                        src: "<%= aaConfig.homepageUrl %>"
                    },
                ]
            },
            post: {
                files: [{
                    src: "<%= aaConfig.postUrl %>"
                }]
            }
        }
    });

    //
    // Register Task Aliases
    //

    // CSS (not a true site build, but we build CSS)
    grunt.registerTask("css", ["clean", "scsslint", "sass", "autoprefixer", "cssmin", "clean"]);

    grunt.registerTask("deploy", ["phantomas", "yslow"]);

    grunt.registerTask("default", ["css"]);

    grunt.registerTask("dev", ["css", "watch"]);
};
