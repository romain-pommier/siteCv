<?php
//echo phpinfo();
// My email
$siteOwnersEmail = 'romain-p31@hotmail.fr';
$host  = $_SERVER['HTTP_HOST'];
$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
$dir = dirname($uri);
$file = 'index.html';

if($_POST) {

   $name = trim(stripslashes($_POST['contactName']));
   $email = trim(stripslashes($_POST['contactEmail']));
   $subject = trim(stripslashes($_POST['contactSubject']));
   $contact_message = trim(stripslashes($_POST['contactMessage']));
	$error = "";

   // Check Name
	if (strlen($name) < 2) {
		$error['name'] = "Entrez votre nom, s'il vous plaît.";
	}
	// Check Email
	// if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
	// 	$error['email'] = "Entrez un e-mail valide, s'il vous plaît..";
	// }
	// // Check Message
	// if (strlen($contact_message) < 15) {
	// 	$error['message'] = "Votre message doit avoir minimum 15 caractères.";
	// }
   // Subject
	if ($subject == '') { $subject = "portfolio email"; }

<<<<<<< HEAD
=======

>>>>>>> 52d4ca50d861a1893958325712e6e6331dd62b30
	// Set Message
	$message = "";
   $message .= "Email from: " . $name . "<br />";
	$message .= "Email address: " . $email . "<br />";
   $message .= "Message: <br />";
   $message .= $contact_message;
   $message .= "<br /> ----- <br /> This email was sent from your site's contact form. <br />";

   // Set From: header
   $from =  $name . " <" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

   if (!$error) {
<<<<<<< HEAD
=======

>>>>>>> 52d4ca50d861a1893958325712e6e6331dd62b30
       ini_set("sendmail_from", $siteOwnersEmail); // for windows server
      $mail = mail($siteOwnersEmail, $subject, $message, $headers);

		if ($mail) {
			header("Location: http://$host$dir/$file" . "?sent=1");
		}
      else { echo "Votre message n'a été envoyé. Ressayez s'il vous plaît."; }
		
	} # end if - no validation error

	else {
		header("Location: http://$host$dir/$file" . "?sent=0");

	} # end if - there was a validation error

}
else {
	header("Location: http://$host$dir/$file");
}

?>