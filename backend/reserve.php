<?php
require 'database.php';

function sendMail($to,$subject,$mailText)
{
     $from = "From: <benigerber@livenet.ch>";
     $mailText = wordwrap($mailText, 70);
    //$to = $eMail;
    $headers   = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/plain; charset=utf-8";
    $headers[] = $from;
    $headers[] = "X-Mailer: PHP/".phpversion();

    if(isset($from) && isset($to) && isset($subject) && isset($mailText)){
        mail($to, $subject, $mailText, implode("\r\n",$headers));
    }
}

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
    $firstname_post = mysqli_real_escape_string($con, trim($request->firstname));
    $lastname_post = mysqli_real_escape_string($con, trim($request->lastname));
    $eMail_post = mysqli_real_escape_string($con, trim($request->eMail));
    $acceptedAGB_post =  filter_var($request->acceptedAGB, FILTER_VALIDATE_BOOLEAN);

    if (mysqli_connect_errno()) {
        // If there is an error with the connection, stop the script and display the error.
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }

    $worked = true;

    $alreadyBooked = false;
    for ($i = 0; $i < count($days_post); $i++) {
        $sql = "SELECT ID FROM fiescheralp_reservations_tbl WHERE day='{$days_post[$i]}' AND month='{$months_post[$i]}' AND year='{$years_post[$i]}'";
        $result = $con->query($sql);

        if ($result->num_rows > 0) { //day already booked
            $alreadyBooked = true;
        }
    }

    if (!$alreadyBooked) {
        for ($i = 0; $i < count($days_post); $i++) {
           // $sql = "INSERT INTO fiescheralp_reservations_tbl (day, month,year,firstname,lastname,eMail,acceptedAGB) VALUES ( '{$days_post[$i]}','{$months_post[$i]}','{$years_post[$i]}','{$firstname_post}','{$lastname_post}','{$eMail_post}','{$acceptedAGB_post}')";
            $sql="INSERT INTO fiescheralp_reservations_tbl (day,month,year,firstname,lastname,eMail,acceptedAGB) VALUES ({$days_post[$i]},{$months_post[$i]},{$years_post[$i]},'{$firstname_post}','{$lastname_post}','{$eMail_post}','{$acceptedAGB_post}')";
            if ($con->query($sql) === TRUE) {
            } else {
                $worked = false;
            }
        }
        $subject="Ferien Fiescheralp";
        $mailText="Vielen Dank für Ihre Reservation des Appartments Fiescheralp, wir kontaktieren Sie in kürze mit weiteren Details\n\nBuchung vom ".$days_post[0].".".$months_post[0].".".$years_post[0]." bis ".$days_post[count($days_post)-1].".".$months_post[count($days_post)-1].".".$years_post[count($days_post)-1];
        sendMail($eMail_post,$subject,$mailText);
        $subject="Buchung Fiescheralp";
        $mailText=$firstname_post." ".$lastname_post."\nE-Mail: ".$eMail_post."\nBuchung vom ".$days_post[0].".".$months_post[0].".".$years_post[0]." bis ".$days_post[count($days_post)-1].".".$months_post[count($days_post)-1].".".$years_post[count($days_post)-1];
        sendMail("benigerber@livenet.ch",$subject,$mailText);
    } else {
        $worked = false;
    }
    echo json_encode($worked);
}
