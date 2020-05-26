
let sv = ''

if(process.env.NODE_ENV == 'development'){
    sv='http://localhost:8081';
}else{
    sv="http://baidu.com";
}

export const server = sv;