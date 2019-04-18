var pagesHelper=require('./pages-helper.js')

var pages = pagesHelper('./src/pages/' , {
    mainJsTemp : function (fileName){
        var temp=`

            import Vue from 'vue'
            import '@/css/public.css'
            import '@/js/public.js'
            import App from '@/pages/${fileName}'

            new Vue({
                render: h => h(App)
            }).$mount('#app')
        `
        return temp
    }
})

module.exports = {
    // 线上环境使用相对路径
    publicPath: process.env.NODE_ENV === 'production'? './' : '/' ,
    // 打包正式版时 , 不保留map文件
    productionSourceMap : false,
    pages : pages
}