<?php

$siteOwnersEmail = 'martin@offbeat-management.at';


if($_POST) {

    $name = trim(stripslashes($_POST['contactName']));
    $email = trim(stripslashes($_POST['contactEmail']));
    $subject = trim(stripslashes($_POST['contactSubject']));
    $contact_message = trim(stripslashes($_POST['contactMessage']));

    // Initialize error array
    $error = array();

    // Check Name
    if (strlen($name) < 2) {
        $error['name'] = "Bitte geben Sie Ihren Namen ein.";
    }
    // Check Email
    if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
        $error['email'] = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    // Check Message
    if (strlen($contact_message) < 10) {
        $error['message'] = "Bitte geben Sie Ihre Nachricht ein. Sie sollte mindestens 10 Zeichen haben.";
    }
    // Subject
    if ($subject == '') { $subject = "Kontaktformular Offbeat Management"; }


    // Set Message
    $message = "";
    $message .= "E-Mail von: " . $name . "<br />";
    $message .= "E-Mail-Adresse: " . $email . "<br />";
    $message .= "Betreff: " . $subject . "<br />";
    $message .= "Nachricht: <br />";
    $message .= nl2br($contact_message);
    $message .= "<br /> ----- <br /> Diese E-Mail wurde über das Kontaktformular Ihrer Website gesendet. <br />";

    // Set From: header
    $from =  $name . " <" . $email . ">";

    // Email Headers
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";


    if (count($error) == 0) {

        ini_set("sendmail_from", $siteOwnersEmail); // for windows server
        $mail = mail($siteOwnersEmail, $subject, $message, $headers);

        if ($mail) { echo "OK"; }
        else { echo "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut."; }
        
    } # end if - no validation error

    else {

        $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
        $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
        $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
        
        echo $response;

    } # end if - there was a validation error

}

?>
