// 아이디, 비밀번호 유효성 검사
const check = (re, what) => {
    if (re.test(what)) {
      return true;
    }
    return false;
  };
  
  //로그인 실패시 알람을 띄웠다가 1초후에 종료
  const showAlarm = (failedAlert) => {
    failedAlert.style.display = "block";
    setTimeout(() => {
      failedAlert.style.display = "none";
    }, 1000);
  };
  
  const addUser = async () => {
    const re = /^[a-zA-Z0-9]{4,16}$/; // 아이디와 패스워드가 적합한지 검사할 정규식
    // DOM 접근용
    const id = document.querySelector(".idInput").value;
    const password = document.querySelector(".passwordInput").value;
    const failedAlert = document.querySelector(".joinFailedAlert");
  
    // 유효성 체크 후 부합하지 않으면 에러
    if (!check(re, id)) {
      showAlarm(failedAlert);
      return false;
    }
    if (!check(re, password)) {
      showAlarm(failedAlert);
      return false;
    }
  
    try {
      const response = await axios.post("../php/join.php", {
        id: id,
        pw: password,
      });
      if (response.data) {
        // 회원가입 성공 시
        location.replace("../html/cafeList.html"); // 카페 리스트로 이동
      } else {
        // 회원가입 실패 시
        showAlarm(failedAlert); // 경고창 띄우고 1초후에 끄기
      }
    } catch (error) {
      console.log(error);
    }
  };