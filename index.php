<?php 
	include('pages/default/header.php');
	getIndexHeader();
?>
	<div class="title-div">

		<input type="checkbox" id="snow" class="checkbox" onclick="checkedWeather(0)"/>
		<label class="title-letter" for="snow"><img class="weather-icon" id="icon0" src="./images/snow.png" /></label>
		<input type="checkbox" id="sun" class="checkbox" onclick="checkedWeather(1)"/>
		<label class="title-letter" for="sun"><img class="weather-icon"  id="icon1" src="./images/sun.png" /></label>
		<input type="checkbox" id="rain" class="checkbox" onclick="checkedWeather(2)"/>
		<label class="title-letter" for="rain"><img class="weather-icon"  id="icon2" src="./images/rain.png" /></label>
		<input type="checkbox" id="beach" class="checkbox" onclick="checkedWeather(3)"/>
		<label class="title-letter" for="beach"><img class="weather-icon"  id="icon3" src="./images/beach.png" /></label>
		<input type="checkbox" id="board" class="checkbox" onclick="checkedWeather(4)"/>
		<label class="title-letter" for="board"><img class="weather-icon weather-icon-board"  id="icon4" src="./images/board.png" /></label>		

	</div>

<canvas></canvas>
<script src='./js/home.js'></script>

</body>
</html>