<?php
require 'database.php';
//main-----------------------------------------------------------------------------------------------------------
// Get the posted data.
$postdata = file_get_contents("php://input");


if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);
    // Sanitize.

    $days_post = [];
    for ($i = 0; $i < count($request->days); $i++) {
        $days_post[$i] = filter_var(trim(mysqli_real_escape_string($con, ($request->days)[$i])), FILTER_VALIDATE_INT);
    }
    $months_post = [];
    for ($i = 0; $i < count($request->months); $i++) {
        $months_post[$i] = filter_var(trim(mysqli_real_escape_string($con, ($request->months)[$i])), FILTER_VALIDATE_INT);
    }
    $years_post = [];
    for ($i = 0; $i < count($request->years); $i++) {
        $years_post[$i] = filter_var(trim(mysqli_real_escape_string($con, ($request->years)[$i])), FILTER_VALIDATE_INT);
    }
    $nickname_post = mysqli_real_escape_string($con, trim($request->nickname));
    $password_post = mysqli_real_escape_string($con, trim($request->password));


    if (mysqli_connect_errno()) {
        // If there is an error with the connection, stop the script and display the error.
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }

    $worked = true;

    $sql = "SELECT nickname FROM fiescheralp_admins_tbl WHERE nickname='{$nickname_post}' AND password='{$password_post}' ";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        for ($i = 0; $i < count($days_post); $i++) {
             $sql="DELETE * FROM fiescheralp_reservations_tbl WHERE WHERE day='{$days_post[$i]}' AND month='{$months_post[$i]}' AND year='{$years_post[$i]}'";
             if ($con->query($sql) === TRUE) {
             } else {
                 $worked = false;
             }
         }
    }

    echo json_encode($worked);
}
