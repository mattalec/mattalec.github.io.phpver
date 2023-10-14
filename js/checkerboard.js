var canvas = document.querySelector('canvas');
// search for canvas vairable
var fullwidth = window.innerWidth;
var fullheight = window.innerHeight;
canvas.width = fullwidth;
canvas.height = fullheight;

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var c = canvas.getContext('2d');

window.addEventListener('resize', function(event) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	window.fullwidth = window.innerWidth;
	window.fullheight = window.innerHeight;
})

//CHESSBOARD
var width = fullheight / 8;
var height = fullheight / 8;

//CHECK IF WE WANT BLACK OR WHITE BACKGROUND BY URL
var black_nwhite = false;
var conditions = ['sounds', 'drawings', 'words', 'pictures']
if (conditions.some(el => window.location.href.includes(el))) black_nwhite = true;

var r = Math.random() * 255;
var g = Math.random() * 255;
var b = Math.random() * 255;
var dr = (Math.random() - 0.5) * 2;
var dg = (Math.random() - 0.5) * 2;
var db = (Math.random() - 0.5) * 2;

if (black_nwhite) {
		// change every other letter
		var i = 0
		document.querySelectorAll('.title-letter').forEach(function(letter) {
			// Now do something with my button
			i++
			if (i % 2) letter.style.color = 'white';
	});
}

function update_board(r,g,b)
{
	var rowcount = 0
	var square_side_cnt = Math.ceil(fullwidth / height);
	if (square_side_cnt % 2 == 1) square_side_cnt++;
	var square_cnt = square_side_cnt * 8 + 1

	// for chess board i < 65;
	for (var i = 0; i < square_cnt; i++)
	{
		// for chess board i % 8;
		
		var real = i % square_side_cnt;
		var x = real * width; 
		var y = rowcount * height;
		if (!(rowcount % 2))
		{
			if (i % 2)
			{
				c.fillRect(x, y, height, width);
				c.fillStyle = 'rgba('+r+','+g+','+b+',1)';
			}
		}
		else
		{
			if (!(i % 2))
			{
				c.fillRect(x, y, height, width);
				c.fillStyle = 'rgba('+r+','+g+','+b+',1)';
			}
		}

		if ((!real) & (i != 0))
		{
			++rowcount;
		}
	}
}

function animate(black_nwhite) {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	if (!black_nwhite) {
		if (r > 255) dr = -1;
		else if (r < 0) dr = 1;	

		if (g > 255) dg = -1;
		else if (g < 0) dg = 1;	

		if (b > 255) db = -1;
		else if (b < 0) db = 1;	

		r += Math.random() * 3 * dr;
		g += Math.random() * 3 * dg;
		b += Math.random() * 3 * db;
	} else {
		// set vars to black
		var r = 0;
		var g = 0;
		var b = 0;
		var dr = 0;
		var dg = 0;
		var db = 0;
	}

	update_board(r,g,b);
}

animate()