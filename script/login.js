
//로그인 실패 알람
const showAlarm = (failedAlert) => {
    failedAlert.style.display = "block";
    setTimeout(() => {
      failedAlert.style.display = "none";
    }, 1000);
  }

  
  //로그인 함수. 
const infoCheck = async () => {
    const id = document.querySelector(".idInput").value;
    const pw = document.querySelector(".pwInput").value;
    const failedAlert = document.querySelector(".loginFailed");
   
    try{
        const response = await axios.post('../php/login.php',{
            id: id,
            pw: pw
    });

    if(response.data){   
        location.replace("/html/cafeList.html");  
      } else {  
        showAlarm(failedAlert);                   
      }
    } catch (error) {
        console.log(error);
    }
};

