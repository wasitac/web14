//테스트용 배열
const TestInfo = new Array();
TestInfo[0] = {
        count : 1,
        name : "park",
        seat : 5,
        date : "yyyy-mm-dd",
        start_time : "hh",
        end_time : "hh"
    }
TestInfo[1] = {
        count : 2,
        name : "choi",
        seat : 9,
        date : "yyyy-mm-dd",
        start_time : "hh",
        end_time : "hh"
    }

//선택한 좌석번호를 SelectedSeatNum에 저장
let SelectedSeatNum;
const SeatButton = (seatNum) =>{
    SelectedSeatNum = seatNum;
    const seat = document.getElementById(seatNum);
    const test = document.querySelectorAll(".seat")
     //jqueryselectorall을 사용하려 했으나 errer 발생 Cannot set properties of undefined (setting 'backgroundColor') 
    for(let i = 0; i<test.length;i++){
        document.getElementById(i+1).style.backgroundColor = "#f2f1e7";}
    seat.style.backgroundColor = "#5c4d4d";
}

//좌석을 선택하고 '시간선택'버튼을 누르면 예약정보창을 열고 새로운 배열(count, 좌석번호)를 생성.
const popup = () => {
    let con = document.querySelector(".reserve");
	if(con.style.display === "none"&&SelectedSeatNum !== undefined){
        con.style.display = 'grid';
    }
    document.getElementById("printseat").innerHTML = SelectedSeatNum;
    TestInfo[TestInfo.length] =  {
        count : TestInfo.length,
        name : null,
        seat : SelectedSeatNum,
        date : null,
        start_time : null,
        end_time : null
    }
    console.log(TestInfo.length);
}
//새로 생성한 배열에 이름 입력
const setName = () =>{
    let name = document.querySelector(".reserveName").value;
    TestInfo[TestInfo.length-1].name = name;
}
//새로 생성한 배열에 날짜 입력
const setDate = () =>{
    let date = document.querySelector("#input_date").value;
    TestInfo[TestInfo.length-1].date = date;
}
//새로 생성한 배열에 예약 시간 입력
const startTime = () =>{
    let time = document.querySelector("#firsttime").value;
    TestInfo[TestInfo.length-1].start_time = time;
}
const endTime = () =>{
    let time = document.querySelector("#secondtime").value;
    TestInfo[TestInfo.length-1].end_time = time;
}
/* 정보저장없이 팝업창 닫기*/
const popdown = () =>{
    let con = document.querySelector(".reserve");
    if(con.style.display === "grid"){
        con.style.display = 'none';
    }
    TestInfo.pop()
}

const reservation = () =>{
    let con = document.querySelector(".reserve");
    if(TestInfo[TestInfo.length-1].name !== null && TestInfo[TestInfo.length-1].date !==null && TestInfo[TestInfo.length-1].start_time !== null && TestInfo[TestInfo.length-1].end_time !== null) {
        if(con.style.display === "grid"){
            con.style.display = 'none';
            window.location.href = "/html/cafeList.html";
        }
    }
}

function goback() {
    window.history.back();
};