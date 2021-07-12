import axios from "axios"


export function homeRequest(config){
    const instance = axios.create({
        baseURL : "https://www.fastmock.site/mock/f4245f524496c318b6926b791400120c/shopping",
        timeout : 5000,
    });
    // instance.interceptors.request.use(function(config){
    //     console.log(config);
    //     return config
    // },function(err){
    //     console.log(err);
    //     return err
    // });
    return instance(config);
}

export function detail(config){
    const instance = axios.create({
        baseURL : "https://www.fastmock.site/mock/f4245f524496c318b6926b791400120c/shopping",
        timeout : 5000
    });
    return instance(config);
}