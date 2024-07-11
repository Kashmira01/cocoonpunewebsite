/*--------------------------Trim()--------------------------*/
function trim(inputString) 
{
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString;
   var ch = retValue.substring(0, 1);
   
   while (ch == " ") { 
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
   }
   
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { 
      retValue = retValue.substring(0, retValue.length-1);
      ch = retValue.substring(retValue.length-1, retValue.length);
   }
   while (retValue.indexOf("  ") != -1) { 
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); 
   }
   return retValue;
}
/*--------------------------Trim()--------------------------*/

/*---------------E-mail check function---------------*/
function echeck(str)
	 {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1)
		{
		   alert("Invalid E-mail ID ")
		    return false;
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
		{
		   alert("Invalid E-mail ID")		    
		   return false;
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
		{
		    alert("Invalid E-mail ID")		     
		    return false;
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID")		   
		    return false;
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID")		   
		    return false;
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID")		   
		    return false;
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID")	   
		    return false;
		 }
      return true;
 	    	 			
	}
/*---------------E-mail check function---------------*/

/*--------------form validation function---------------*/
function validate(form)
	{ 	
	
	if(trim(form.name.value) =="")
		{
			alert("Please Enter Your Name");
			form.name.focus();
			return false;
		}
		
	{
			var valid = ".0123456789-() "
			var ok = "yes";
			var temp;
			for (var i=0; i<form.zip.value.length; i++) 
			{
				temp = "" + form.zip.value.substring(i,i+1);
				if (valid.indexOf(temp) == "-1") 
				ok = "no";
			}
			if (ok == "no")
 			{
				alert("Invalid Entry! Only Numbers Are Accepted!");
				form.zip.value="";
				form.zip.focus();
				return false;
			}
		}
		
		if(trim(form.phone.value) =="")
		{
			alert("Please Enter Your Phone Number");
			form.phone.focus();
			return false;
		}
		
		{
			var valid = ".0123456789-() "
			var ok = "yes";
			var temp;
			for (var i=0; i<form.phone.value.length; i++) 
			{
				temp = "" + form.phone.value.substring(i,i+1);
				if (valid.indexOf(temp) == "-1") 
				ok = "no";
			}
			if (ok == "no")
 			{
				alert("Invalid Entry! Only Numbers Are Accepted!");
				form.phone.value="";
				form.phone.focus();
				return false;
			}
		}
		
		if(form.email.value =="")
		  {
			alert("Please Enter Email Address");
			form.email.focus();
			return false;
		  }
		  
		 			  
	if(form.email.value !=='')
		  {		
		    if (echeck(form.email.value)==true)
		      {
		        		
		      }
		    else
		      {
		        form.email.focus();
		        return false;
		      }
		      
	      	}
			
	if(form.chk6.checked==false && form.chk7.checked==false && form.chk8.checked==false && form.chk9.checked==false && form.chk10.checked==false && form.chk11.checked==false)
		  {
			alert("Please tell us how did you hear about Nixon Insurance");
			return false;
		  }
	
	}
/*--------------form validation function---------------*/


/*--------------Reqest Quote validation function---------------*/
function validate_feedback(form)
	{ 	
	
		if(trim(form.name.value) =="")
		{
			alert("Please Enter Your Name");
			form.name.focus();
			return false;
		}
		
		if(trim(form.phone.value) =="")
		{
			alert("Please Enter Your Phone No.");
			form.phone.focus();
			return false;
		}
		
		{
			var valid = ".0123456789-() "
			var ok = "yes";
			var temp;
			for (var i=0; i<form.phone.value.length; i++) 
			{
				temp = "" + form.phone.value.substring(i,i+1);
				if (valid.indexOf(temp) == "-1") 
				ok = "no";
			}
			if (ok == "no")
 			{
				alert("Invalid Entry! Only Numbers Are Accepted!");
				form.phone.value="";
				form.phone.focus();
				return false;
			}
		}
		
		if(form.email.value =="")
		  {
			alert("Please Enter Email Address");
			form.email.focus();
			return false;
		  }
		  
		 			  
	if(form.email.value !=='')
		  {		
		    if (echeck(form.email.value)==true)
		      {
		        		
		      }
		    else
		      {
		        form.email.focus();
		        return false;
		      }
		      
	      	}
			
		if(trim(form.comment.value) =="")
		{
			alert("Please Enter Your Comment");
			form.comment.focus();
			return false;
		}
			
	}
/*--------------Reqest Quote validation function---------------*/
function validate_applynow(form)
	{ 	
	
		if(trim(form.name.value) =="")
		{
			alert("Please Enter Your Name");
			form.name.focus();
			return false;
		}
		
		if(trim(form.phone.value) =="")
		{
			alert("Please Enter Your Phone No.");
			form.phone.focus();
			return false;
		}
		
		{
			var valid = ".0123456789-() "
			var ok = "yes";
			var temp;
			for (var i=0; i<form.phone.value.length; i++) 
			{
				temp = "" + form.phone.value.substring(i,i+1);
				if (valid.indexOf(temp) == "-1") 
				ok = "no";
			}
			if (ok == "no")
 			{
				alert("Invalid Entry! Only Numbers Are Accepted!");
				form.phone.value="";
				form.phone.focus();
				return false;
			}
		}
		
		if(form.email.value =="")
		  {
			alert("Please Enter Email Address");
			form.email.focus();
			return false;
		  }
		  
		 			  
	if(form.email.value !=='')
		  {		
		    if (echeck(form.email.value)==true)
		      {
		        		
		      }
		    else
		      {
		        form.email.focus();
		        return false;
		      }
		      
	      	}
			
		if(trim(form.comment.value) =="")
		{
			alert("Please Enter Position Applied For.");
			form.comment.focus();
			return false;
		}
			
	}