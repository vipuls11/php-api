<?php 
include("config.php");

header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-headers: Access-Control-Allow-headers,Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$student_id = $data['sid'];
$student_name = $data['sname'];
$student_age = $data['sage'];
$student_city = $data['scity'];

$sql = "UPDATE students SET name='{$student_name}', age={$student_age}, city='{$student_city}' WHERE id = {$student_id}";

if(mysqli_query($conn, $sql)){
    echo json_encode(array('message' => 'Student data inserted successfully.','status'=>false));
}
else{
    echo json_encode(array('message' => 'Student data is not inserted.','status'=>false));
}
?>