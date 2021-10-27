// 아이디 비밀번호 저장하고 불러오는거 몰라서 임시로 만든 userinfo
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

