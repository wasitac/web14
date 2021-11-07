const getUserReservation = () => {
    //id로 예약예부 확인 
};

const getAllUser = async () =>{
    try {
        const response = await axios.get("../php/getAllUser.php");
        if(response.data) {
            console.log(response.data);
        }
    } catch (error) {
        console.log(error);
    }
};