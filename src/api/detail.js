import {detail} from "api/request"

function detailData(id){
    return detail({
        url : '/detail',
        params : {
            id : id
        }
    });
}


export {detailData}