

<?php
// Post Type data
include('config.php');

header('Content-Type:application/json');
header('Access-Control-Allow-Origin:*');
// header('');

$data = json_decode(file_get_contents("php://input"), true);
$student_value = $data['search'];

$sql = "SELECT * FROM students WHERE name. age, city LIKE '%{$student_value}%'";

$result = mysqli_query($conn, $sql) or die("SQL Query Failed");

if (mysqli_num_rows($result) > 0) {
    $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // echo json_decode($output);
}
else{
    echo json_encode(array('message' => 'No Record Found','status'=>false));
}

?>

<?php
// // get types for securty nad it a urls based 
// include('config.php');

// header('Content-Type:application/json');
// header('Access-Control-Allow-Origin:*');
// // header('');

// // $data = json_decode(file_get_contents("php://input"), true);
// // $student_value = $data['search'];

// $search_value = isset($Get['search']) ? $Get['search'] : die();

// $sql = "SELECT * FROM students WHERE name LIKE '%{$student_value}%'";

// $result = mysqli_query($conn, $sql) or die("SQL Query Failed");

// if (mysqli_num_rows($result) > 0) {
//     $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
//     // echo json_decode($output);
// }
// else{
//     echo json_encode(array('message' => 'No Record Found','status'=>false));
// }
?>