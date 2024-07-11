<?
	session_start();
	$fontfile = "ariali.ttf";
	 
	$allowable_characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	mt_srand((double)microtime()*1000000);

	$pass = "";
	$length=6;
	$ps_len = strlen($allowable_characters);
	$ps_st=0;
	for($i = 0; $i < $length; $i++) 
	{
		$pass .= $allowable_characters[mt_rand($ps_st, $ps_len - 1)];
	} 
	$_SESSION['sess_captcha']=$pass;
	 
	$size = 11;
	$h = 50;
	$w = 140;

	$im  =  imagecreatefromjpeg("assets/img/captcha.jpg");//imagecreate($w, $h);
	$fill = imagecolorallocate($im, 168, 211, 230);
	$light = imagecolorallocate($im, 0, 0, 0);
	$corners = imagecolorallocate($im, 153, 153, 102);
	$dark = imagecolorallocate($im, 51, 51 , 0);
	$black = imagecolorallocate($im , 0, 0 , 0);
	$brown = imagecolorallocate($im , 193, 160 , 91);

	$colors = imagecolorallocate($im, 255, 255, 255);
	

	header("Content-Type: image/png");

	//srand($_GET['egal']);
	$c = 1;
	$x=-10;
	$anz = strlen($_SESSION['sess_captcha']);
	$step = (4 / $anz);
	for ($i = 0; $i < $anz; $i += 1) {
		$size = 17;
		$x += 18;
		if($y==30) $y=33; 
		else $y = 30;
		$c += $step;
		imagettftext($im, $size, 0, $x+2, $y+2, $black, $fontfile, strtoupper($_SESSION['sess_captcha'][$i]));
		imagettftext($im, $size, 0, $x+1, $y+1, $brown, $fontfile, strtoupper($_SESSION['sess_captcha'][$i]));
		

		imagettftext($im, $size, 0, $x-1, $y-1, $black, $fontfile, strtoupper($_SESSION['sess_captcha'][$i]));
		imagettftext($im, $size, 0, $x, $y, $colors, $fontfile, strtoupper($_SESSION['sess_captcha'][$i]));
		//$font = imageloadfont("./".$fontfile);
		//$font = imageloadfont("./".$fontfile);
		$font=3;
		//imagestring($im, $font, $x+2, $y+2-15, strtoupper($_SESSION['sess_captcha'][$i]), $black);
		//imagestring($im, $font, $x+1, $y+1-15, strtoupper($_SESSION['sess_captcha'][$i]), $brown);
		//imagestring($im, $font, $x-1, $y-1-15, strtoupper($_SESSION['sess_captcha'][$i]), $black);
		//imagestring($im, $font, $x, $y-15, strtoupper($_SESSION['sess_captcha'][$i]), $colors);
	}

	ImageLine($im, 0, 0, $w - 1, 0, $light);
	ImageLine($im, 0, 0, 0, $h - 2, $light);
	
	ImagePNG($im);
?>