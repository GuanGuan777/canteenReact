import { defineConfig } from "umi";
const pxtorem = require("postcss-pxtorem");
// const VeauryVuePlugin = require('veaury/webpack/VeauryVuePlugin')
export default defineConfig({
  npmClient: "npm",
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 37.5, //这里根据设计稿大小配置,一般是375
      propList: ["*"],
    }),
  ],
  define: {
    baseApi: "https://apidev.somedomain.com",
    "process.env": {
      NODE_ENV: "dev",
      UMI_ENV: "dev",
    },
  },
  plugins: ["@umijs/plugins/dist/dva"],
  dva: {},
  chainWebpack(config, { webpack }) {     
     
      // const vueLoaderRule = config.module.rules.find(rule => rule.test.toString() === /\.vue$/);  
      // const vueLoaderRule = config.module.rule('vue')
      // .test(/\.vue$/)
      // .use('vue-loader')
      
  
        // if (vueLoaderRule) {  
          // 移除现有的 vue-loader 规则  
          // config.module.rules = config.module.rules.filter(rule => rule !== vueLoaderRule);  
          // config.module
          //     .rule('vue')
          //     .test(/\.vue/)
          //     .pre()
          //       .enforce("pre")
            
          // 在 rules 数组的最前面添加 vue-loader 规则  
          // config.module.rules.unshift({  
          //   test: /\.vue$/,  
          //   loader: 'vue-loader',  
          //   options: {  
          //     // ...vue-loader 的选项...  
          //   }  
          // }); 
        // }
        // config.plugin('veauryVuePlugin')  
        // .use(require('veaury/webpack/VeauryVuePlugin'), []);  
      
      
    
  }, 
  
  // chainWebpack(config, { webpack }) {  
  //   config.plugin('veauryVuePlugin')  
  //     .use(new VeauryVuePlugin({
  //       babelLoader: {
  //         // Set all vue files and js files in the 'abc' directory to support vue type jsx
  //         include(filename) {
  //           // ignore node_modules
  //           if (filename.match(/[/\\]node_modules[\\/$]+/)) return
  //           // pass all vue file
  //           if (filename.match(/\.(vue|vue\.js)$/i)){
  //             return filename
  //           }
  //           // pass abc path
  //           if (filename.match(/[/\\]abc[\\/$]+/)) return filename
  //         },
  //         // exclude() {}
  //       }
  //     }))
  //     config.module  
  //     .rule('vue')  
  //     .use('vue-loader')  
  //       .loader('vue-loader')  
          
  // },   
});
