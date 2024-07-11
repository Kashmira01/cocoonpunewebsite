<?php ini_set("error_reporting", "E_ALL & ~E_NOTICE"); ?>
session_start();
$returnPageUrl = $_SERVER['HTTP_REFERER'];
<?php
function reCaptcha($recaptcha){
    $secret = "6Lde0DgoAAAAAAlvcC5HJu550SJM86IT9HIMU0tc";
    $ip = $_SERVER['REMOTE_ADDR'];
  
    $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
    $data = curl_exec($ch);
    curl_close($ch);
  
    return json_decode($data, true);
  }
  $recaptcha = $_POST['g-recaptcha-response'];
$res = reCaptcha($recaptcha);
if($res['success']){
	$body .="Hello Administrator,<br /><br />";
	$body .="We have recorded the following \"Feedback Form\" mail for you:<br /><br />";
	
	$body .= "Name: ".trim(stripslashes($_REQUEST['name']))."<br />";
	//$body .= "Last Name: ".trim(stripslashes($_REQUEST['lname']))."<br />";
	$body .= "Phone: ".trim(stripslashes($_REQUEST['phone']))."<br />";
	$body .= "E-Mail: ".trim(stripslashes($_REQUEST['email']))."<br />";
	$body .= "Comment: ".trim(stripslashes($_REQUEST['comment']))."<br />";
	
	$body .="<br />Thanks & Regards,<br />";
	$body .="Technical Support Team<br />";
	$body .="Cocoon Service Hotel";
	

	$headers .= "Bcc:support@pivotaldesign.biz \r\n";
	//$headers .= "Cc:  \r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1';
	$subject="Feedback Form";
	//$e_mail="yuvraj@pivotaldesign.biz";
	$e_mail="sales@magarhospitality.com";
	
	if(@mail($e_mail,$subject,$body,$headers))
	{
	$body="";
	$body .= "Dear ".trim(stripslashes($_REQUEST['name'])).", <br /><br />Your \"Feedback Form\" mail has been successfully sent to site administrator. We will get back to you soon.<br /><br /> Following are your request details:<br /><br />";
		
	$body .= "Name: ".trim(stripslashes($_REQUEST['name']))."<br />";
	//$body .= "Last Name: ".trim(stripslashes($_REQUEST['lname']))."<br />";
	$body .= "Phone: ".trim(stripslashes($_REQUEST['phone']))."<br />";
	$body .= "E-Mail: ".trim(stripslashes($_REQUEST['email']))."<br />";
	$body .= "Comment: ".trim(stripslashes($_REQUEST['comment']))."<br />";
	
	$body .="<br />Thanks & Regards,<br />";
	$body .="Technical Support Team<br />";
	$body .="Cocoon Service Hotel";
	
	$headers = "From: sales@magarhospitality.com \r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1";
	$subject= "Feedback Form";
	$e_mail=$_REQUEST['email'];
		if(@mail($e_mail,$subject,$body,$headers))
		{
			?>
			<script language="javascript">
				alert('Thank You! Your request has been sent successfully.');
				parent.window.location = "contact-us.html";
			</script>
			<?
			exit;
		}
	
		else
		{
			?>
			<script language="javascript">
				alert('Request not completed. Please try again later.');
				parent.window.location = "contact-us.html";
			</script>
			<?
			exit;
		}
	}	
	else
	{
		?>
		<script language="javascript">
			alert('Request not completed. Please try again later.');
			parent.window.location = "contact-us.html";
		</script>
		<?
		exit;
	}
	
     }else{
   ?>
			<script language="javascript">
                alert('Captcha not check.  Please try again.');
                parent.window.location = "contact-us.html";
            </script>
        <?
        exit;
  }


   ?>
