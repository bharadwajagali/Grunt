module.exports = function(grunt) {

    grunt.initConfig({
        sass:{
            dist:{
                options:{
                    style:'expanded'
                },
                files:{
                    'css/style.css':'sass/style.scss',
                }
            }
        },
        uglify:{
            dist:{
                files:[{
                    expand:true,
                    cwd:'js/src',
                    src:'**/*.js',
                    dest:'js/dest',
                    ext:'.min.js',
                    }]
            }
        },
        watch:{
            sass:{
                files:['sass/**/*.scss'],
                tasks:['sass'],
                options:{
                spawn:false,
                },
            },
            scripts:{
                files:['js/src/**/*.js'],
                tasks:['uglify'],
                options:{
                    spawn:false,
                },
            },
        },

csslint: {
  strict: {
    options: {
      import: 2
    },
    src: ['css/*.css']
  },
  lax: {
    options: {
      import: false
    },
    src: ['css/*.css']
  }
},
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.registerTask('default', ['sass','uglify','watch','csslint']);

};