function validate (){
    
   fname=document.getElementById("fname").value;
   lname=document.getElementById("lname").value;
   email=document.getElementById("email").value;
   pass=document.getElementById("pass").value;
   phone =document.getElementById("phone").value;
   count =0;
  if(fname.length<3)
  {
    alert("please enter your first name more than three letters");
    return false;
  }
  else {count++ ;}
  if(lname.length<3)
  {
    alert("please enter your last name more than three letters");
    return false;
  }
  else {count++ ;}

  if(email.indexOf('@')<0)
  {
    alert("email should contain @");
    return false;
  }
  else {count++ ;}
  if(pass.indexOf(' ')>=0)
  {
    alert("pass should not contain spaces");
    return false;
  } else {count++ ;}
  r = /01+[0-9]{9}/;
  if (!(r.test(phone))){
      alert("phone number should begin 01 and with night number");
      return false;
  }else {count++ ;}
  if (!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
    alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
    return false;
}else {count++ ;}
if (( pass[0].toUpperCase()!= pass[0].toLowerCase() )&&( pass[0].toUpperCase()==pass[0])){
    count++ ;
   
}else {
    alert ("pass must begine with uppercase latter");
    return false ;}
if (count==7){alert("ok , thanks "); return true ;
}
}

