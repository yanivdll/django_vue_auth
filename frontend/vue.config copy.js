const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/scss/_normalize.scss";
          @import "./src/assets/scss/_variables.scss";
          @import "./src/assets/scss/_base.scss";
        `
      }
    }
  }
};
