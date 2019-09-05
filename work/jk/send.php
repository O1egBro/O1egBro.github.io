<?php 


	$to = 'Darthjktu@email'; // адрес получателя
	$subject = 'Тема письма'; // тема письма
	
	$email = $post['field']['e-mail']; // поле email
	$name = trim($post['field']['name']); // поле имя
	$login = trim($post['field']['login']); // поле имя
	$date = trim($post['field']['date']); // поле имя
	$promo = trim($post['field']['promo']); // поле имя
	$message = trim($post['field']['comment']); // поле сообщения
		
//	if (!$name)
//	{
//
//		echo 'Не указано имя!';
//		exit;
//	}
	
//	if (!$message)
//	{
//		echo 'Не указан текст сообщения!';
//		exit;
//	}	
	
	// формируем headers для письма
	$headers = 'From: '. $email . "\r\n"; // от кого

	// формируем тело сообщения
	$message = 'Имя: ' . $name . NR . 'Email: ' . $email . NR . 'promo: ' . $promo . NR . $login . NR . $date . NR . NR . $message ; 
	 
	// кодируем заголовок в UTF-8
	$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
	$subject = preg_replace("/(\t)/", " ", $subject);
	$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

	// отправка
	@mail($to, $subject, $message, $headers);

	echo 'Спасибо, ваше сообщение отправлено!';
