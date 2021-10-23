const myinfo = {
    id: "myname",
    pw: "mypassword"
};

const infoCheck = (id, pw) => {
    if(id === myinfo.id){
        if(pw === myinfo.pw){
            console.log(`환영합니다`)
        } else {
            console.log(`로그인 실패`);
        }
    } else {
        console.log(`로그인 실패`);
    }
};

