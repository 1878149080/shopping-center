import {detail} from "api/request"

function detailData(id){
    return detail({
        url : '/detail',
        params : {
            id : id
        }
    });
}

function detailR(){
    return detail({
        url : "/detail/recommend"
    });
}
export {detailData,detailR}