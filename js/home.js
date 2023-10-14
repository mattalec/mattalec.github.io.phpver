// canvas settings

var canvas = document.querySelector('canvas');
// search for canvas vairable
var fullwidth = window.innerWidth;
var fullheight = window.innerHeight;
canvas.width = fullwidth;
canvas.height = fullheight;
var c = canvas.getContext('2d');

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


//Event listeners

window.addEventListener('resize', function(event) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
})



//CHESSBOARD

var width = fullheight / 8;
var height = fullheight / 8;

var r = Math.random() * 255;
var g = Math.random() * 255;
var b = Math.random() * 255;
var dr = (Math.random() - 0.5) * 2;
var dg = (Math.random() - 0.5) * 2;
var db = (Math.random() - 0.5) * 2;

// Draw chessboard with updated r,g,b

function update_board(r,g,b)
{

	// taking height / 8 as the length of the square

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


// Piece class for movement


function Piece(image, x, y, dx, height, width, lvl) 
{
	// initialise variables
	this.image = image;
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.height = height;
	this.width = width;
	this.lvl = lvl;
	this.changed = 1;
	
	this.draw = function()
	{	
		piece_height = this.y + (-this.height * (this.lvl * 2));
		c.drawImage(this.image, this.x , piece_height, this.height, this.width);
	}

	this.update = function()
	{
		// random element of being able to reverse dx on square center
		if (this.x % width)
		{
			if (Math.random() > 0.999)
			{
				if (this.dx) this.dx = 0;
				else this.dx = 1;
			}		
		}

		// piece movement
		if (this.dx) this.x++; // and dx == 1 which is
		else this.x--;

		// piece barriers, if piece > than stopping right, it will go back

		stopping_xleft = this.lvl * 2 * this.width;
		stopping_xright = this.lvl * 12 * this.width;
		if (this.lvl == 0)
		{
			stopping_xleft = this.width;
			stopping_xright = this.width * 12;		
		}
		if (this.lvl >= 2) stopping_xleft = (this.lvl * 2 + (lvl / 2)) * this.width;
		if (this.x <= stopping_xleft)
		{
			// makes pieces go right
			this.dx = 1;
		}
		else if (this.x >= stopping_xright)
		{
			// makes pieces go left
			this.dx = 0;
		}

		this.draw();
	}
}

function draw_roofs()
{
	get_roof(0);
	get_roof(1);
	get_roof(2);
	get_roof(3);
}

function get_roof(lvl) // 0 is ground
{
	corner_width = width * (3 * lvl)
	if (lvl == 12) corner_width = width * ((8/3) * lvl);
	roof_height = height * (3.3 + (2 * -lvl))
	// y distance to get roofs touching
	n = -height * 0.4;

	c.drawImage(roof_left_image, corner_width, roof_height, width, height * 7);
	// now the second, slightly higher and to the right
	c.drawImage(roof_left_image, corner_width + width, roof_height + n, width, height * 7);

	for (i = 0; i < 4; i++)
	{
		c.drawImage(roof_mid_image, corner_width + (((4 * i) + 1) * width), roof_height, width * 4, height * 7);
		c.drawImage(roof_mid_image, corner_width + (((4 * i) + 2) * width), roof_height + n, width * 4, height * 7);
		c.drawImage(pillar_image, corner_width + (((4 * i) + 2) * width), roof_height + (height * 3.58), width / 2, height * 1.2);
	}
}

const image_dir = './images/'

var rook_image = new Image();
rook_image.src = image_dir+'rook.png';
var bishop_image = new Image();
bishop_image.src = image_dir+'bishop.png';
var knight_image = new Image();
knight_image.src = image_dir+'knight.png';
var king_image = new Image();
king_image.src = image_dir+'king.png';
var queen_image = new Image();
queen_image.src = image_dir+'queen.png';

var roof_left_image = new Image();
roof_left_image.src = image_dir+'roof_left.png';
var roof_mid_image = new Image();
roof_mid_image.src = image_dir+'roof_middle.png';
var pillar_image = new Image();
pillar_image.src = image_dir+'pillar.png';

var pieceArray = [];

function piece_place(pieceArray, pieceImage, n, lvl)
{

	for (var i =0; i < n; i++)
	{
		var x = Math.round(Math.random() * 10) * (width) + (width * 2 * i);
		var y = height * 7;//Math.round(Math.random()*8) * height;
		var dx = Math.round(Math.random());;

		pieceArray.push(new Piece(pieceImage, x, y, dx, height, width, lvl));	
	}

	return pieceArray
}

function init()
{
	pieceArray = [];
	n = [8, 4, 4, 1, 1]; // number of pieces on each lvl
	lvl = [0, 1, 2, 3, 3];
	images = [rook_image, bishop_image, knight_image, king_image, queen_image];

	for (i = 0; i < 5; i++)
	{
		pieceArray = piece_place(pieceArray, images[i], n[i], lvl[i]); 
	}
}

function getrgb(r, g, b, dr, dg, db) {

	// get selected option from DOM
	var weathers = document.getElementsByClassName("checkbox");
	var selectedweather = 'rgb';
	for (var i = 0; i < weathers.length; i++)
	{
		// see if checked
		if (weathers[i].checked == true) selectedweather = weathers[i].id;
	}

	// associate to hard-coded boundaries
	// weather ids = [snow, sun, rain , beach, snow]
	// if (selectedweather == 'snow') animateflakes();

	// array => [r_lower, r_higher, g_lower, ...]
	var weatherColours = {
		'snow'  : [0, 50, 190, 230, 170, 255],
		'sun'   : [40, 100, 40, 100, 40, 100],
		'rain'  : [100, 170, 100, 170, 100, 170],
		'beach' : [170, 255, 170, 255, 170, 255],
		'rgb'   : [0, 255, 0, 255, 0, 255],
		'board' : [0, 10, 0, 10, 0, 10]
	}

	var rgb_bounds = weatherColours[selectedweather];
	// tend towards boundary
	if (r > rgb_bounds[1]) dr = -1;
	else if (r < rgb_bounds[0]) dr = 1;

	if (g > rgb_bounds[3]) dg = -1;
	else if (g < rgb_bounds[2]) dg = 1;

	if (b > rgb_bounds[5]) db = -1;
	else if (b < rgb_bounds[4]) db = 1;

	return {'dr': dr, 'dg': dg, 'db': db}
}

function checkedWeather(id) {
	var weathers = document.getElementsByClassName("checkbox");
	for (var i = 0; i < weathers.length; i++) {
		if (i != id) {
			weathers[i].checked = false;
			document.getElementById("icon"+i).setAttribute("style","-webkit-filter:grayscale(100%)");
			// if (document.getElementById("icon"+i).getAttribute("style","-webkit-filter:invert(100%)"))
			// {
			// 	document.getElementById("icon"+i).setAttribute("style","-webkit-filter:grayscale(100%)")
			// }
		}
		else {
			!weathers[i].checked ? document.getElementById("icon"+i).setAttribute("style","-webkit-filter:grayscale(100%)") : document.getElementById("icon"+i).setAttribute("style","-webkit-filter:grayscale(0%)")
		}
	}
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	// get rgb for squares
	var RGB = getrgb(r, g, b, dr, dg, db);

	// change value in correct dir
	var change_rate = 0.5;

	r += Math.random() * change_rate * RGB['dr'];
	g += Math.random() * change_rate * RGB['dg'];
	b += Math.random() * change_rate * RGB['db'];
	dr = RGB['dr'];
	dg = RGB['dg'];
	db = RGB['db'];

	update_board(r,g,b);

	for (var i = 0; i < pieceArray.length; i++)
	{
		pieceArray[i].update();
	}
	draw_roofs();
}

init();
animate();