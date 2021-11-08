<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

$memberId = $_POST["id"];
$memberId = $_POST["reservation"];