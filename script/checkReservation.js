// const getUserReservation = () => {
//     //id로 예약예부 확인 
// };

// const getAllUser = async () =>{
//     try {
//         const response = await axios.get("../php/getAllUser.php");
//         if(response.data) {
//             console.log(response.data);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// onload = () => {
//     if(true){
//         document.querySelector(".loading").style.display="none";
//         document.querySelector(".myReservation").style.display="block";
//     } else {
//         document.querySelector(".loading").style.display="none";
//         document.querySelector(".ifNoData").style.display="block";
//     }
// }

const dataTrue = [
    {
        cafeName: "커피플라워",
        cafeLocation: "https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js",
        sitNumber: 1,
        time: 10
    },
];

const dataFalse = null;

// onload = () => {
//     if(!dataFalse) {
//         document.querySelector(".loading").style.display = "none";
//         document.querySelector(".Main").style.display = "block";
//     }
// };

let datas;

const getReservation = () => {
    document.querySelector(".name").textContent = datas[0].cafeName;
    document.querySelector(".number").textContent = datas[0].sitNumber;
    console.log(datas[0].sitNumber);
    console.log(datas[0].cafeName);
    console.log(datas[0].time);
    document.querySelector(".time").textContent = datas[0].time;
    document.getElementById("location").href = datas[0].cafeLocation;
}

onload = async () => {
    try {
        const response = await axios.get("/php/getReservationByUserId.php");
        // datas = response.data;
        datas = false;
        if(datas) {
            console.log(datas);
            // getReservation();
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

function goback() {
    window.history.back();
};