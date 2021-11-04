// 아이디 비밀번호 저장하고 불러오는거 몰라서 임시로 만든 userinfo
const myinfo = {
    id: "myname",
    pw: "mypassword",
    name: "이지홍"
};

//로그인 실패 알람
const showAlarm = (failedAlert) => {
    failedAlert.style.display = "block";
    setTimeout(() => {
      failedAlert.style.display = "none";
    }, 1000);
  }

  
  
const infoCheck = () => {
    const id = document.querySelector(".idInput").value;
    const pw = document.querySelector(".pwInput").value;
    const failedAlert = document.querySelector(".loginFailed");
    if(id === myinfo.id){
        if(pw === myinfo.pw){
            window.location="/html/cafeList.html";
        } else {
            showAlarm(failedAlert);  
        }
    } else {
        showAlarm(failedAlert);
    }
};

