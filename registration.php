<head>
<link rel="stylesheet" href="darkM.css">
</head>
<nav class="navbar navbar-expand-lg navbar-light" >

             <a class="navbar-brand" href="/">
                <img style="height:47px !important ; margin-top:-4px;" src="assets/img/logo/mun-logo.png" id="img1">
                <img style="height:60px !important ; margin-top:-4px;" src="assets/img/logo/e-mun-logo.png" id="img2"
                    class="nav-logo">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="" role="button">
                    <i class="fa fa-bars toggle-icon" aria-hidden="true"></i>
                </span>
            </button>


            <div class="collapse navbar-collapse " >
                <ul style="margin-left: 10vw;" class="navbar-nav navbar-right">
                    <li class="nav-item">
                        <a class="menu-item active" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="about.html">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <!-- <a class="menu-item" data-toggle="dropdown">eMun</a> -->
                        <!-- <ul class="dropdown-menu">
                            <li><a href="committees.html" class="dropdown-item">Committees</li></a>
                            <li><a href="agenda.html" class="dropdown-item">Agenda</li></a>
                            <li><a href="eb.html" class="dropdown-item">Executive Board</li></a>
                            <li><a href="study-guide.html" class="dropdown-item">Study Guide</a></li>
                            <li><a href="newsletter.html" class="dropdown-item">Newsletter</a></li>
                            <li><a href="rules-and-regulations.html" class="dropdown-item">Rules and Regulations</a>
                            </li>
                        </ul> -->
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="gallery.php">Gallery</a>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="menu-item" data-toggle="dropdown">Partners</a>
                        <ul class="dropdown-menu">
                            <li><a href="sponsors.html" class="dropdown-item">Sponsors</li></a>
                            <li><a href="collaborators.html" class="dropdown-item">Collaborators</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="campus-ambassador.php">Campus Ambassador</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="menu-item" href="contact.php">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="login.php">Login</a>
                    </li>
                    <li class="nav-item dropdown-btn">
                        <a class="menu-item dropdown-btn-item" href="registration.php">Registrations</a>
                    </li>
                    <li class="dark">
                        <img src="assets/img/sun.png" id="icon" .mx-2>
                    </li>
            </div>
        </nav><!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title> KIIT eMUN </title>
    <meta name='description' content="Official Website of KIITMUN 2021">


    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:500,700,900" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="./assets/css/index2019.css" />
    <link rel="stylesheet" href="./assets/css/header.css" />

    <!-- Custom JS -->
    <script src="./assets/js/index.js"></script>
    <script src="./assets/js/committee.js"></script>

    <script>
        $(window).on("load", function() {
            $("body").css("overflow-y", "hidden");
            setTimeout(function() {
                $(".loading").addClass("fadeOut");
                $(".loading").hide();
                $(".body-content").addClass("fadeIn");
                $(".body-content").css("opacity", "1");
                $("body").css("overflow-y", "auto");
            }, 0.5 * 1000);
        });
        $("#myCarousel").carousel();
        $(function() {
            $(document).scroll(function() {
                var $nav = $(".navbar");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                var $navItem = $(".menu-item");
                $navItem.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                var $navLogo = $(".nav-logo");
                if ($(this).scrollTop() > $nav.height())
                    $navLogo.attr("src", "./assets/img/logo/e-mun-logo-black.png");
                else
                    $navLogo.attr("src", "./assets/img/logo/e-mun-logo.png");
            });
        });
    </script>

    <style>
        .arrow_box {
            border: 2px solid #c4c4c5;
            text-align: center;
            font-weight: 600;
            font-family: 'Poppins';
            border-radius: 8px;
            padding: 13px 0;
            margin: 0 auto 22px;
            width: 290px;
        }
    </style>
    <style>
        .healnow {
            background: #bab86c !important;
            color: #fff;
            font-family: 'Poppins';
            padding: 15px 0;
            width: 290px;
            font-size: 16px;
            text-transform: capitalize;
            margin-bottom: 10px;
        }
    </style>
    <style>
        .fade-carousel .slides .slide-1 {
            background-image: url('./assets/img/banner/reg/reg3.jpg');
            height: 80vh;
        }
    </style>

</head>

<body>

    <!-- FOR THE APP-->
    <!-- <a target="_blank" id="myBtn" style="right: 25px;
    bottom: 20px; position: fixed;z-index: 99;" href="https://bit.ly/KMUN19">
            <div style="border: 2px solid black;">
            <img style="width: 115px ; height: 125px; " src="https://kiitmun.org/wp-content/uploads/2019/09/munappqr.png" /><br>
            <span><center> Get the App</center></span>
            </div>
        </a> -->

    <!-- LOADING SECTION -->
    <section class="loading">
        <img src="./assets/img/loader.gif">
    </section>

    <section class="body-content darkmode">
    <nav class="navbar navbar-expand-lg navbar-light" >

<a class="navbar-brand" href="/">
    <img style="height:57px !important ; margin-top:-4px;" src="assets/img/logo/mun-logo.png" id="img1">
    <img style="height:80px !important ; margin-top:-4px;" src="assets/img/logo/e-mun-logo.png" id="img2"
        class="nav-logo">
</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="" role="button">
        <i class="fa fa-bars toggle-icon" aria-hidden="true"></i>
    </span>
</button>


<div class="collapse navbar-collapse " >
    <ul style="margin-left: 10vw;" class="navbar-nav navbar-right">
        <li class="nav-item">
            <a class="menu-item active" href="#">Home </a>
        </li>
        <li class="nav-item">
            <a class="menu-item" href="about.html">About</a>
        </li>
        <li class="nav-item dropdown">
            <!-- <a class="menu-item" data-toggle="dropdown">eMun</a> -->
            <!-- <ul class="dropdown-menu">
                <li><a href="committees.html" class="dropdown-item">Committees</li></a>
                <li><a href="agenda.html" class="dropdown-item">Agenda</li></a>
                <li><a href="eb.html" class="dropdown-item">Executive Board</li></a>
                <li><a href="study-guide.html" class="dropdown-item">Study Guide</a></li>
                <li><a href="newsletter.html" class="dropdown-item">Newsletter</a></li>
                <li><a href="rules-and-regulations.html" class="dropdown-item">Rules and Regulations</a>
                </li>
            </ul> -->
        </li>
        <li class="nav-item">
            <a class="menu-item" href="gallery.php">Gallery</a>
        </li>
        <!-- <li class="nav-item dropdown">
            <a class="menu-item" data-toggle="dropdown">Partners</a>
            <ul class="dropdown-menu">
                <li><a href="sponsors.html" class="dropdown-item">Sponsors</li></a>
                <li><a href="collaborators.html" class="dropdown-item">Collaborators</a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="menu-item" href="campus-ambassador.php">Campus Ambassador</a>
        </li> -->
        <li class="nav-item">
            <a class="menu-item" href="contact.php">Contact</a>
        </li>
        <li class="nav-item">
            <a class="menu-item" href="login.php">Login</a>
        </li>
        <li class="nav-item dropdown-btn">
            <a class="menu-item dropdown-btn-item" href="registration.php">Registrations</a>
        </li>
        <li class="dark">
            <img src="assets/img/sun.png" id="icon" .mx-2>
        </li>
</div>
</nav>

        <div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
            <!-- Overlay -->
            <div class="overlay"></div>


            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item slides active">
                    <div class="slide-1"></div>
                    <div class="hero">
                        <hgroup>
                            <h1>Registrations</h1>
                        </hgroup>
                    </div>
                </div>
            </div>
        </div>

        <!-- <section id="contact-second">
            <div class="m-auto">
                <h1>Registration <br><b>Closed</h1>
                <hr>
            </div>
        </section> -->

        <section id="committees-second">
            <h1 align="center">
                Coming <b>Soon</b>
            </h1>
        </section>


        <div class="footer-copyright">
            <ul style="list-style:none;background:rgba(0,0,0,0);overflow:hidden;color:#fff;padding:0;text-align: center;margin:0;">
                <li style="display:inline-block;padding:10px;list-style:none;"><a href="https://www.facebook.com/kiitmun/" target="_blank"><img src="./assets/img/footer/fb.png" height="50" width="50"></a></li>
                <li style="display:inline-block;padding:10px;list-style:none;"><a href="https://www.instagram.com/instakiitmun/" target="_blank"><img src="./assets/img/footer/it.png" height="60" width="60"></a></li>
                <li style="display:inline-block;padding:10px;list-style:none;"><a href="https://twitter.com/kiitmun" target="_blank"><img src="./assets/img/footer/tw.png" height="50" width="50"></a></li>
                <li style="display:inline-block;padding:10px;list-style:none;"><a href="https://www.linkedin.com/in/kiitmun/" target="_blank"><img src="./assets/img/footer/li.png" height="55" width="55"></a></li>
            </ul>
            <center id="cr">
                Copyright 2021 &copy; KIIT International Model United Nations
                <br><a href="copyright.html" target="_blank">PRIVACY POLICY</a>
            </center>
        </div>
    </section>

</body>

</html>