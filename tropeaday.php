<?php
session_start();

if(isset($_POST['submit_pass']) && $_POST['pass'])
{
 $pass=$_POST['pass'];
 if($pass=="stopasianhate")
 {
  $_SESSION['password']=$pass;
 }
 else
 {
  $error="Incorrect Password";
 }
}
?>

<html lang="en">
<head>
    <!--uses unicode characters-->
    <meta charset="utf-8">
    <!--makes it responsive-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
            Asian Trope-a-Day
    </title>
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <link rel="stylesheet" href="spectre-icons.css">
    <script src="jquery/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            $("#footer").load("jquery/footer.html");
        });
    </script>
    <!--inline discussion disqus thingy-->
    <script src="inlineDisqussions.js"></script>
    <link rel="stylesheet" type="text/css" href="inlineDisqussions.css" />
    <!--<script>
        disqus_shortname = 'asterfialla';
        jQuery(document).ready(function() {
          jQuery(".card-footer").inlineDisqussions();
        });
      </script>-->
    <!--font for headers and special text-->
    <link href="https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap" rel="stylesheet">
    <!--font for body text-->
    <link href="https://fonts.googleapis.com/css?family=ABeeZee&display=swap" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="imgs/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="imgs/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="imgs/favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
</head>
<body>
<div id="content" style="padding-top:0">
<?php
if($_SESSION['password']=="stopasianhate")
{
?>
    <div class="section3">
        <h1>Asian Trope-a-Day</h1>
        <h2><a href="https://asterfialla.com">Aster Fialla</a></h2>
        <div class="flex-centered columns col-sm-11 col-10 col-mx-auto">
            <p>A series of posts examining Asian stereotypes in media, one per day of May 2021.</p>
        </div>
    </div>
    <div class="columns" style="display:none">
        <!-- LEFT COLUMN -->
        <div class="column col-3 col-md-12 float-right section4">
            <div id="tableofcontents">
                <h3>Table of Contents</h3>
                <div class="divider" style="padding-top: 1em;"></div>
                <ol>
                    <li><a href='#orientalism'>Orientalism</a></li>
                </ol>
            </div>
        </div>
        <!-- RIGHT COLUMN-CLIENT AREA -->
        <div class="column col-9 col-md-12 float-left section1" style="padding:5%">		
            <!--Orientalism-->
            <div id="orientalism" class="card">
                <div class="card-header">
                  <div class="card-title h3">
                      1. Orientalism
                  </div>
                  <div class="card-title h4">
                      May 1, 2021
                  </div>
                </div>
                <div class="card-body" >
                    <p>Here's where it all starts.</p>

                    <p>Orientalism as an oppressive tool (as opposed to simply an area of academic study, or any depiction of Asian countries) was most prominently defined in Edward Said's book, Orientalism, in 1978. In a nutshell, it is “the way that the West perceives of — and thereby defines — the East".</p>
                    
                    <p>The East, also called the Orient, is defined as anything east of Europe and Eurocentric culture, i.e. the West. This includes a lot of places, such as West Asia (the Near/Middle East), South Asia, and East Asia, but for this series, I'm going to be mostly focusing on East Asia, as I'm East Asian.</p>
                    
                    <p>Little tidbit: the word for 'China' in Chinese is <i>Zhōngguó</i>, which translates to Middle Kingdom. Yet it's part of the Far East in Western terminology, named only for its location in relation to Europe. This is the crux of Orientalism: the East only exists as a concept created by (literal) Eurocentric thought, warped through White supremacist views of the Other. The West is defined as normal and standard, with strengths and weaknesses that are inherently human. The East is defined as deviant from that norm, with strange powers and exotic customs, inherently <i>in</i>human.</p>
                    
                    <p>Orientalism is 'the Chinese Virus'. Orientalism is Weeaboos. Orientalism is the Day Spa Shootings. Orientalism is Avatar: the Last Airbender. It can be obvious hate crimes, but it can also be dressed up as adoration, idealization, cultural appreciation. Regardless, it is a manifestation of White supremacy.</p>
                </div>
                <div class="card-footer">
                    <p></p>
                </div>
            </div>
        </div>
    </div>
<?php
}
else
{
 ?>
     <div class="columns col-xs-11 col-10 col-mx-auto">
        <form style="text-align:center" method="post" action="" id="login_form">
        <h2>This section is password protected.</h2>
        <input type="password" name="pass" placeholder="*******">
        <input class="btn btn-link" type="submit" name="submit_pass" value="SUBMIT">
        <p><font style="color:red;"><?php echo $error;?></font></p>
        </form>
    </div>
    <?php
}
?>
</div>
    <!--copyright-->
    <footer id="footer" class="flex-centered columns col-12 col-mx-auto">
    </footer>
</body>
</html>