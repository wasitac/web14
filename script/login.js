const myinfo = {
    id: "myname",
    pw: "mypassword",
    name: "이지홍"
};

const infoCheck = (id, pw) => {
    if(id === myinfo.id){
        if(pw === myinfo.pw){
            window.location="/html/cafe.html";
            console.log(`환영합니다 $(myinfo.name)님`);
        } else {
            console.log(`로그인 실패`);
        }
    } else {
        console.log(`로그인 실패`);
    }
};

