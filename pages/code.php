<?php
include('default/header.php');
getHeader();
?>

<link rel="stylesheet" href="../styles/code-canvas.css">

  <canvas id="canvas"></canvas>
  <canvas id="trails"></canvas>
  <script src='../js/code-canvas.js'></script>

  <div class="outer-ring"></div>
  <div class="inner-ring"></div>
  <div class='project-container'>
    <div class="project-title">Neural Nets</div>
    <div class="code-break">&nbsp</div>
    <div class="project-desc">A novice's exploration into neural networks.<br><br>Starting with bare bones in order to gain strong insight into the working mechanism.</div>
    <a href='./projects/neural-nets/index.html'><div class='project-redirect'>Click Here To Start</div></a>
  </div>

</body>
<script>
  document.getElementsByClassName('title-div')[0].style.color = 'antiquewhite';
</script>
</html>