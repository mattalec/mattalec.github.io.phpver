<?php
include('default/header.php');
getHeader();
?>

	<div class='row0 col0 square' style="background-position: center center; background-repeat: no-repeat; background-image: url('../images/photos/flower_bird.jpg')">&nbsp;</div>

	<style>

		.main-panel {
			background-color:black;

			position: absolute;
			display: none;/*flex;*/
			align-items: center;
			justify-content: space-around;
			flex-direction: row;

			top: 1vw;
			left: 2.5vw;
			height: 95vh;
			width: 95vw;
			margin: 0;
			padding: 0;
		}

		.main-image {
			/* background-color: blue; */
			background-image: url("../images/photos/flower_bird.jpg");
			background-position: center; /* Center the image */
			background-repeat: no-repeat; /* Do not repeat the image */
			background-size: cover;
			height: 92%;
			width: 69%;
		}
		.arrow {
			background-color: rgba(255, 255, 255, 0.4);
			width: 10%;
			height: 100%;
			font-size: 10rem;
			line-height: 95vh;
			text-align: center;
			border-radius: 10vh;
			font-weight: bold;

		}

	</style>

	<div class="main-panel">&nbsp;
		<div class="arrow"><</div>
		<div class="main-image">&nbsp;</div>
		<div class="arrow">></div>
	</div>

<?php include('default/footer.php') ?>