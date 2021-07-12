import {homeRequest} from "./request"

function swiper(){
    return homeRequest({
        url : '/home/swiper',
    });
}

function recommend(){
    return homeRequest({
        url : '/home/recommend',
    })
}

function week(){
    return homeRequest({
        url : "/home/week"
    });
}

function goods(type,page){
    // console.log(type)
    // console.log(page)
    return homeRequest({
        url : "/home/goods/"+type,
        params : {
            page : page,
            type : type,
        }
    })
}

export {
    swiper,
    recommend,
    week,
    goods
}

