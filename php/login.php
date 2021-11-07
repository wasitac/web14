<?php
require_once("dbconfig.php");
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

// 클라이언트로부터 받아온 것을 php 변수에 담음
$memberId = $_POST["id"];
$memberPw = $_POST["pw"];

$sql = "SELECT userPw FROM person WHERE userId = '$memberId'"; 

$res = $db->query($sql);

// 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
$row = $res->fetch_array(MYSQLI_ASSOC); 


if ($row) {
// 사용자 입력 password 와 해시값 비교
//   $passwordResult = password_verify($memberPw, $row['password']);
// 아직 password_verify 몰라서 문자열 비교함
// $passwordResult = ($memberPw === $row['userPw']);

if ($memberPw === $row['userPw']) { // 만약 참이면 로그인 성공한 것
    //  $_SESSION["ses_username"] = $memberId; // 세션변수에 입력
     echo json_encode(true,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
  } else {            // 만약 참이 아니면 로그인 실패
     echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK); 
  }
}

mysqli_close($db);