<?php
include ('config.php');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:DELETE');
header('Access-Control-Allow-headers: Access-Control-Allow-headers,Access-Control-Allow-Methods, Authorization,Content-Type, X-Requested-With');

$data = json_decode(file_get_contents("php//input"), true);
$student_id = $data['sid'];

$sql = "DELETE FROM students WHERE id = '{$student_id}'";
if(mysqli_query($conn, $sql)){
    echo json_encode(array('message' => 'Student Record Deleted.','status'=>true));
}
else{
    echo json_encode(array('message' => 'Student Record Not Deleted.','status'=>false));
}
?>