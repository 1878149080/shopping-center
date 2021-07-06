const path = require("path");
function resolve(dir){
    return path.join(__dirname,dir);
}
module.exports = {
    devServer : {
        open : true,
        hot : true,
    },
    chainWebpack:(config) =>{//配置路径别名
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
        .set('assets',resolve('/src/assets/'))
        .set('components',resolve('/src/components/'))
        .set('router',resolve('/src/router/'))
        .set('store',resolve('/src/store/'))
        .set('views',resolve('/src/views/'))
        .set('utils',resolve('/src/utils/'))
        .set('api',resolve('/src/api/'))
    }
}