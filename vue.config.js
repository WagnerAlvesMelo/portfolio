module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/styles/_vars.scss";
          @import "./src/styles/_mixins.scss";
        `,
      },
    },
  },
};
