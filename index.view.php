<!DOCTYPE html>
<html lang="es">
  <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115753994-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-115753994-1');
    </script>

    <meta charset="utf-8">
    <meta name="keywords" content="diseno web, html, css, javascript">
    <meta name="description" content="Juan Navas - Desarrollador web, fagotista, estudiante. En esta página muestro los proyectos que he desarrollado   utilizando html css javascript php jquery laravel">
    <meta name="author" content="Juan Navas">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" >
    <title>Juan Navas</title>
    <link rel="shorcut icon" type="image/x-icon" href="img/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.11/css/all.css" integrity="sha384-p2jx59pefphTFIpeqCcISO9MdVfIm4pNnsL08A6v5vaQc4owkQqxMV8kg4Yvhaw/" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="css/estilos.css">
    <style>
      .mensajes {
        width: 100%;

      }
      .alert {
        width: 40%;
        padding: 1em;
        color: #fff;
        border-radius: 2px;
        margin-bottom: 20px;
        font-size: 14px;
      }

      .alert.error {
        background: #f2dede;
        border: 1px solid #a94442;
        color: #a94442;
      }

      .alert.success {
        background: #4caf50;
      }
    </style>
  </head>
  <body>

    <header>
      <div class="contenedor">
        <nav class="menu">
          <a href="#" id="btn-acerca-de">Acerca de</a>
          <a href="#" id="btn-trabajos">Proyectos</a>
          <a href="#" id="btn-contacto">Contacto</a>
        </nav>

        <div class="contenedor-texto" id="tituloPrin">
          <div class="texto">
            <h1 class="nombre">Juan Navas</h1>
            <h2 class="profesion"> Desarrollador Web - Músico</h2>
          </div>
        </div>
      </div>
    </header>

    <section class="main">
      <section class="acerca-de" id="acerca-de">
        <div class="contenedor">
          <div class="foto">
            <img src="img/yo.jpg" alt="Juan Navas" width="115" title="Juan Navas">
          </div>
          <div class="texto">
            <h3 class="titulo">Acerca de</h3>
            <p>Soy un joven desarrollador web, estudiante de computación en la Universidad Central de Venezuela, también soy músico (fagotista) en la Orquesta Sinfónica Juan José Landaeta perteneciente a "El Sistema". En esta página muestro los proyectos que he desarrollado.</p>
          </div>
        </div>
      </section>
      <section class="trabajos" id="trabajos">
        <div class="contenedor">
          <h3 class="titulo">Proyectos</h3>
          <div class="contenedor-trabajos">

            <div class="trabajo"> <a href="html/index1.html">
              <div class="thumb">
                <img src="img/trabajos/1.png" alt="Layout basico" title="Layout basico">
              </div>
              <div class="descripcion">
                <p class="nombre">Layout basico</p>
                <p class="categoria">HTML - CSS</p>
              </div>
            </a>
            </div>

            <div class="trabajo"> <a href="html/index2.html" title="Layout con flexbox">
              <div class="thumb">
                <img src="img/trabajos/2.png" alt="Layout con flexbox">
              </div>
              <div class="descripcion">
                <p class="nombre">Layout con flexbox</p>
                <p class="categoria">HTML - CSS</p>
              </div>
            </a>
            </div>

            <div class="trabajo"> <a href="html/index3.html">
              <div class="thumb">
                <img src="img/trabajos/3.png" alt="Portafolio" title="Portafolio">
              </div>
              <div class="descripcion">
                <p class="nombre">Portafolio</p>
                <p class="categoria">HTML - CSS</p>
              </div>
            </a>
            </div>

            <div class="trabajo"> <a href="html/index4.html">
              <div class="thumb">
                <img src="img/trabajos/4.png" alt="Cafe" title="Cafe">
              </div>
              <div class="descripcion">
                <p class="nombre">Cafe</p>
                <p class="categoria">HTML - CSS - JS -JQUERY</p>
              </div>
            </a>
            </div>

            <div class="trabajo"> <a href="php/index5.php">
              <div class="thumb">
                <img src="img/trabajos/5.png" alt="Formulario" title="Formulario">
              </div>
              <div class="descripcion">
                <p class="nombre">Formulario</p>
                <p class="categoria">HTML - CSS - PHP</p>
              </div>
            </a>
            </div>

           <div class="trabajo"> <a href="https://obscure-fortress-11609.herokuapp.com/">
              <div class="thumb">
                <img src="img/trabajos/6.png" alt="Primer proyecto con Laravel" title="Primer proyecto con Laravel">
              </div>
              <div class="descripcion">
                <p class="nombre">Agencia</p>
                <p class="categoria">Laravel - BackEnd</p>
              </div>
            </a>
            </div>

            <div class="trabajo"> <a href="f1.html">
              <div class="thumb">
                <img src="" alt="" title="">
              </div>
              <div class="descripcion">
                <p class="nombre"></p>
                <p class="categoria"></p>
              </div>
            </a>
            </div>

        </div>
      </section>
    </section>

    <footer>
      <section class="contacto" id="contacto">
        <div class="contenedor">
          <h3 class="titulo">Contacto</h3>
          <!-- <form id="gform" method="post" action="" class="formulario">

            <input type="text" placeholder="Nombre" name="nombre" value="<?php //if(!$enviado && isset($nombre)) echo $nombre; ?>" required>

            <input type="email" placeholder="Correo" name="correo" value="<?php //if(!$enviado && isset($correo)) echo $correo; ?>" required>

            <textarea name="mensaje" placeholder="Mensaje" required><?php //if(!$enviado && isset($mensaje)) echo $mensaje; ?></textarea>

            <?php //if(empty($errores) && $enviado): ?>
              <script language="javascript">alert("Su correo fue enviado con exito! Muchas gracias por contactarme.")</script>
           // <?php //endif ?>

           <div class="mensajes">
             <?php // if(!empty($errores)): ?>
              <div class="alert error">
                 <?php //echo $errores; ?>
               </div>
             <?php //elseif($enviado): ?>
              <div class="alert success">
                <p>Enviado correctamente</p>
              </div>
            <?php// endif ?>
			 </div>



            <input type="submit" class="boton" name="submit" value="Enviar">

          </form> -->

      	  </div>
        </div>
      </section>

      <section class="redes-sociales">
        <div class="contenedor">
          <a href="http://www.twitter.com/juannavasjn" class="twitter" target="_blank"><i class="fas fa-twitter"></i></a>
          <a href="http://www.facebook.com/juannavasjn" class="facebook" target="_blank"><i class="fas fa-facebook"></i></a>
          <a href="http://www.instagram.com/juannavasjn" class="instagram" target="_blank"><i class="fas fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/juannavasjn/" class="linkedin" target="_blank"><i class="fas fa-linkedin-square"></i></a>
          <a href="mailto:navascruzf@gmail.com" class="twitter"><i class="fas fa-envelope"></i></a>
          <a href="https://github.com/JuanNavasJN" class="linkedin" target="_blank"><i class="fas fa-github"></i></a>
          

        </div>
      </section>

      <section class="copyright">
        <div class="contenedor"><h3><i class="fa fa-copyright"></i> Juan Navas 2018</h3></div>
      </section>

    </footer>

  <script src="js/jquery.min.js"></script>
  <script src="js/main.js"></script>
  </body>
</html>
