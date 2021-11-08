<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

// 클라이언트로부터 받아온 것을 php 변수에 담음
$memberId = $_POST["id"];
$memberPw = $_POST["pw"];
$memberHashedPw = password_hash($memberPw, PASSWORD_DEFAULT); 

// member 테이블로부터 id가 일치하는게 있는지 파악
$sql = "SELECT * FROM person WHERE userId = '$memberId'";  

//실행결과는 $res에 저장
$res = $db->query($sql); 

// 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
$row = $res->fetch_array(MYSQLI_ASSOC); 

// 만약 배열이 존재하지 않는다면,
// 동일한 아이디가 없다는 뜻이므로 회원가입 진행.
if ($row === null) { 
    $_SESSION["ses_username"] = $memberId; // 세션변수에 입력
    $sql = "INSERT INTO `person` (`userId`, `userPw`) 
        VALUES ('$memberId','$memberHashedPw')";
    $db->query($sql); // SQL 실행
    echo json_encode(true,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {            // 만약 동일한 아이디가 있다면 false 반환하며 회원가입 실패
    echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK); 
}

mysqli_close($db);