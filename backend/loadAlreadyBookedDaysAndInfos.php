<?php
require 'database.php';

$allDates;

function addDateToAllDates($date, $month, $fullYear, $firstname, $lastname, $eMail, $ind)
{
    global $allDates;

    $date = [
        'day' => $date,
        'month' => $month,
        'fullYear' => $fullYear,
        'firstname' => $firstname,
        'lastname' => $lastname,
        'eMail' => $eMail,

    ];
    //echo json_encode($productsBought);
    $allDates[$ind] = $date;
}

//main-----------------------------------------------------------------------------------------------------------
// Get the posted data.
$postdata = file_get_contents("php://input");


if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);

    $nickname_post = mysqli_real_escape_string($con, trim($request->nickname));
    $password_post = mysqli_real_escape_string($con, trim($request->password));

    if (mysqli_connect_errno()) {
        // If there is an error with the connection, stop the script and display the error.
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }

    $sql = "SELECT nickname, password FROM fiescheralp_admins_tbl WHERE nickname='{$nickname_post}'";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            if ($row['password'] == $password_post) { //login
                $sql = "SELECT DISTINCT day,month,year,firstname,lastname,eMail FROM fiescheralp_reservations_tbl";
                $result = $con->query($sql);

                if ($result->num_rows > 0) {
                    $ind = 0;
                    while ($row = $result->fetch_assoc()) {
                        addDateToAllDates($row['day'], $row['month'], $row['year'], $row['firstname'], $row['lastname'], $row['eMail'], $ind);
                        $ind++;
                    }
                }
                echo json_encode($allDates);
            }
        }
    }
}
