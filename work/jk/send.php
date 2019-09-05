<?php

	header("Content-Type: text/html; charset=utf-8");
	
	if(isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) === "xmlhttprequest") {
	
		
	
		function send_form($message) {
	
			$mail_to = "Darthjktu@gmail.com"; /*Ваш e-mail*/
			$subject = "Заказ"; 
			$headers = "MIME-Version: 1.0\r\n";
			$headers .= "Content-type: text/html; charset=utf-8\r\n";
			$headers .= "From:<no-reply@".$_SERVER['HTTP_HOST'].">\r\n";

			mail($mail_to, $subject, $message, $headers);
		
		}

		$name = isset($_POST["name"]) ? strip_tags($_POST["name"]) : '' ; 
		$login = isset($_POST["login"]) ? strip_tags($_POST["login"]) : '' ; 
		$email = isset($_POST["e-mail"]) ? strip_tags($_POST["e-mail"]) : '' ; 
		$date = isset($_POST["date"]) ? strip_tags($_POST["date"]) : '' ; 
		$promo = isset($_POST["promo"]) ? strip_tags($_POST["promo"]) : '' ; 
		$forma = isset($_POST["forma"]) ? strip_tags($_POST["forma"]) : '' ; 
		$comment = isset($_POST["comment"]) ? strip_tags($_POST["comment"]) : ''; 



		if($email == "") { 

			echo "Не указан телефон.";

			die();

		} 

		if($name == "") { 

			$name = "Не указано Имя";
            die();

		}

		$message = <<<HTML

			<b>форма</b>: {$forma}<br>
			<b>Имя</b>: {$name}<br>
			<b>логин</b>: {$login}<br><br>
			<b>email</b>: {$email}<br><br>
			<b>дата</b>: {$date}<br><br>
			<b>промокод</b>: {$promo}<br><br>
			<b>комент</b>: {$comment}<br><br>

HTML;

		send_form($message); 
		
		echo "Сообщение успешно отправлено!";
        

	} else {

		die();

	}

?>