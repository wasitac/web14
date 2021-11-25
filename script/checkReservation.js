const data = true;

// 예약 유무에 따라 예약 확인 화면의 출력 내용을 달리하기 위한 코드
onload = () => {
    if(data) {
        document.querySelector(".loading").style.display = "none";
        document.querySelector(".Main").style.display = "grid";
    } else {
        document.querySelector(".loading").style.display = "none";
            document.querySelector(".ifNoData").style.display = "block";
    }
};

let datas;

// 사용자가 예약한 정보를 예약 확인 화면의 각 자리에 출력하기 위한 코드
const getReservation = () => {
    document.querySelector(".name").textContent = datas[0].cafeName;
    document.querySelector(".number").textContent = datas[0].sitNumber;
    document.querySelector(".time").textContent = datas[0].time;
    document.getElementById("location").href = datas[0].cafeLocation;
}

onload = async () => {
    try {
        const response = await axios.get("/php/getReservationByUserId.php");
        datas = response.data;
        if(datas) {
            console.log(datas);
            getReservation();
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".Main").style.display = "grid";
        } else {
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".ifNoData").style.display = "block";
        }
    } catch (error) {
        console.log(error);
    }
};

// 화면의 뒤로가기 버튼을 구현하기 위한 goback()함수
function goback() {
    window.history.back();
};