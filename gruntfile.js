module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        flatten: true,
        assets: 'dist/assets',
        layoutdir: 'patternlib/layouts',
        layout: 'default.hbs',
        partials: 'patternlib/components/**/*.hbs'
      },
      patternlib: {
        src: 'patternlib/pages/*.hbs',
        dest: 'dist/'
      }
    },
    clean: {
      build: ['dist']
    },
    concat: {
      css: {
        src: ['patternlib/vendor/**/*.css', 'patternlib/core/*.css', 'patternlib/components/**/*.css'],
        dest: "dist/assets/css/style.css",
      } 
    },
    copy: {
      contentimages: {
        files: [{
          expand: true,
          flatten: true,
          src: 'patternlib/pages/images/*',
          dest: 'dist/images'
        }]
      }
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');  

  grunt.registerTask('default', ['clean', 'assemble', 'concat', 'copy']);
}
