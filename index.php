<?php 
	require 'vendor/autoload.php';
	require("sendgrid/sendgrid-php.php");


	$errores = '';
	$enviado = '';

	if (isset($_POST['submit'])) {
		$nombre = $_POST['nombre'];
		$correo = $_POST['correo'];
		$mensaje = $_POST['mensaje'];

		if (!empty($nombre)) {
			$nombre = trim($nombre);
			$nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
		} else {
			$errores .= 'Por favor ingresa un nombre <br>';
		}


		if (!empty($correo)) {
			$correo = filter_var($correo, FILTER_SANITIZE_EMAIL);

			if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
				$errores .= 'Por favor ingresa un correo valido <br>';
			}

		} else {
			$errores .= 'Por favor ingresa un correo <br>';
		}

		if (!empty($mensaje)) {
			$mensaje = htmlspecialchars($mensaje);
			$mensaje = trim($mensaje);
			$mensaje = stripcslashes($mensaje);
		} else {
			$errores .= 'Por favor ingresa el mensaje <br>';
		}

		if(!$errores){
			// $enviarA = 'navascruzf@gmail.com';
			// $asunto = 'Correo enviado desde juannavas.com.ve';
			// $mensajePreparado = "De: $nombre \n";
			// $mensajePreparado .= "Correo: $correo \n";
			// $mensajePreparado .= "Mensaje: " . $mensaje; 

			// mail($enviarA, $asunto, $mensajePreparado);

			$from = new SendGrid\Email("Example User", "navascruzf@gmail.com");
			$subject = "Sending with SendGrid is Fun";
			$to = new SendGrid\Email("Example User", "navascruzf@gmail.com");
			$content = new SendGrid\Content("text/plain", "and easy to do anywhere, even with PHP");
			$mail = new SendGrid\Mail($from, $subject, $to, $content);
			$apiKey = getenv('SENDGRID_API_KEY');
			$sg = new \SendGrid($apiKey);
			$response = $sg->client->mail()->send()->post($mail);
			echo $response->statusCode();
			print_r($response->headers());
			echo $response->body();


			$enviado = true;
		}

	}

	require "index.view.php";

 ?>