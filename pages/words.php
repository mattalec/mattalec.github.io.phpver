<?php 
	include('default/header.php');
	$words_data = getHeader();

	$i = 0;
	$per_row = 2;
	foreach ($words_data as $data):
			$row = floor($i / $per_row);
			$col = ($i % $per_row) * 2 + ($row % $per_row);
?>

<div class='row<?=$row;?> col<?=$col;?> square wordsquare'><button class='square type-font' onclick='openWordBox(<?=$i;?>)'><b><?=$data['title'];?></b></button></div>
    <div class='wordbox' id='wordbox<?=$i;?>'>
			<div class='word-title'>
				<h1><?=$data['title'];?></h1>
				<button class='exit-button' onclick='hideWordBox()'>X</button>
			</div>
			<div class='word-content' style='overflow: scroll;'><?=$data['content'];?></div>
    </div>

<?php 
$i++;
endforeach; 
?>   

<script>

	hideWordBox();

	function openWordBox(n)
	{
		n = n.toString();
		document.getElementById('wordbox'+n).style.display = 'block';
	}

	function hideWordBox()
	{
		document.querySelectorAll('.wordbox').forEach(function(wordbox) {
			wordbox.style.display = 'none';
		});
	}

</script>

<?php include('default/footer.php'); ?>