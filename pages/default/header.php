<?php

function getIndexHeader()
{
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="./styles/styles.css">
  </head>
  <body style="overflow: hidden;">
  <div class="dropdown">
    <button class="dropbtn" onclick="document.location.href='./'"><b>| | |</b></button>
    <div class="dropdown-content">
      <a href="./pages/sounds"><img class='menu-img' src='./images/headphone.png'></a>
      <a href="./pages/drawings"><img class='menu-img' src='./images/pencil.png'></a>
      <a href="./pages/words"><img class='menu-img' src='./images/inkpen.png'></a>
      <a href="./pages/pictures"><img class='menu-img' src='./images/camera.png'></a>
      <a href="./pages/code"><img class='menu-img' src='./images/code.png'></a>
    </div>
  </div>
<?php
}
function getHeader(string $page_name = '') : array
{
  if (empty($page_name)) $page_name = preg_replace('/.php$/','',basename($_SERVER['PHP_SELF']));
  ?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=$page_name;?></title>
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  
  <?php
  displayTitle($page_name);
  include('menu.php');
  $data_file_name = "./data/".$page_name."_data.php";
  if (file_exists($data_file_name)) include($data_file_name);
  // var_export($words_data);die;
  $var_name = $page_name."_data";
  return isset(get_defined_vars()[$var_name]) ? get_defined_vars()[$var_name] : array();
}

function displayTitle($title="")
{
  echo '<div class="title-div">';
  foreach(str_split($title) as $letter) {
    echo '<div class="title-letter">'.ucfirst($letter).'</div>';
  }
  echo '</div>';
}

?>
