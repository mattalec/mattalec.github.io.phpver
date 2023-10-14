<?php 
	include('default/header.php');
	$sounds_data = getHeader();
?>
<?php
	$soundcloud_url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";
	$i = 0;
	$per_row = 2;
	foreach ($sounds_data as $data) :
		$row = floor($i / $per_row);
		$col = ($i % $per_row) * 2 + ($row % $per_row);
?>
		<div class='row<?= $row; ?> col<?= $col; ?> square'>
			<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="<?= $soundcloud_url . $data['link']; ?>"></iframe>
		</div>
		<div class='row<?= $row; ?> colblack<?= $col; ?> square sound-title type-font'>
			<?= $data['title']; ?>
		</div>
<?php
		$i++;
	endforeach;
?>
<?php include('default/footer.php'); ?>