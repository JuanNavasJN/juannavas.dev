<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Formulario Contactos</title>
	<link rel="stylesheet" href="../css/estilos5.css">
</head>
<body>
	<div class="wrap">
		<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
			
			<input type="text" class="form-control" id="nombre" name="nombre" placeholder="nombre" value="<?php if(!$enviado && isset($nombre)) echo $nombre; ?>">

			<input type="text" class="form-control" id="correo" name="correo" placeholder="correo" value="<?php if(!$enviado && isset($correo)) echo $correo; ?>">

			<textarea name="mensaje" id="mensaje" placeholder="Mensaje" class="form-control"><?php if(!$enviado && isset($mensaje)) echo $mensaje; ?></textarea>

			<?php if(!empty($errores)): ?>
				<div class="alert error">
					<?php echo $errores; ?>
				</div>
			<?php elseif($enviado): ?>
				<div class="alert success">
					<p>Enviado correctamente</p>
				</div>
			<?php endif ?>
	
			<input type="submit" name="submit" class="btn" value="Enviar Correo">

		</form>
	</div>
</body>
</html>