<?php
require 'database.php';

$allDates;

function addDateToAllDates($date,$month,$fullYear, $ind)
{
    global $allDates;

    $date = [
        'date' => $date,
        'month' => $month,
        'fullYear' => $fullYear,
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
    
    if (mysqli_connect_errno()) {
        // If there is an error with the connection, stop the script and display the error.
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }

    $sql = "SELECT DISTINCT day,month,year FROM fiescheralp_reservations_tbl";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        $ind = 0;
        while ($row = $result->fetch_assoc()) {
            addDateToAllDates($row['day'],$row['month'],$row['year'], $ind);
            $ind++;
        }
    }

    echo json_encode($allDates);
}
