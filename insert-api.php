<?php 
include("config.php");

header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-headers: Access-Control-Allow-headers,Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), TRUE);
// $student_id = $data['sid'];
$student_name = $data['sname'];
$student_age = $data['sage'];
$student_city = $data['scity'];

$sql = "INSERT INTO students(id, name, age, city) VALUES ('{$student_name}',{$student_age},'{$student_city}')";

if(mysqli_query($conn, $sql)){
    echo json_encode(array('message' => 'Record added successsfully.','status'=>true));
}
else{
    echo json_encode(array('message' => 'No RecordFound.','status'=>false));
}
?>  