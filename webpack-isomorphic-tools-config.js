var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

module.exports = {
  assets: {
    images: {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
    },
    styles: {
      //added css because certain packages come with css for their components and not sass
      extensions: ['scss','css'],
      filter: function(module, regex, options, log) {
        if(options.development) {
          return WebpackIsomorphicToolsPlugin.styleLoaderFilter(module, regex, options, log)
        }
        return regex.test(module.name)
      },

      path: function(module, options, log) {
        if(options.development) {
          return WebpackIsomorphicToolsPlugin.styleLoaderPathExtractor(module, options, log)
        }
        return module.name
      },

      parser: function(module, options, log) {
        if(options.development) {
          return WebpackIsomorphicToolsPlugin.cssModulesLoaderParser(module, options, log)
        }
        return module.source
      }
    }
  }
}