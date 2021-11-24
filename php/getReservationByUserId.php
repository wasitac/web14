

<!-- require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

$memberId = $_POST["id"];
$memberId = $_POST["reservation"]; -->

<?php
require_once("dbconfig.php");
$sql = "
    SELECT
        cafeName,
        cafeLocation,
        sitNumber
        time
    FROM reservation
";

$data = array();

$res = $db->query($sql);

$row = $res->fetch_array(MYSQLI_ASSOC);
array_push($data, $row);

if ($data != null) {
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
} else {
    echo json_encode(false, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
}

mysqli_close($db);