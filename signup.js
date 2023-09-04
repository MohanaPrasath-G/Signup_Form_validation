function demo() {
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var gender_male = document.getElementById("gender_male");
  var gender_female = document.getElementById("gender_female");
  var dob = document.getElementById("dob").value;
  var year = document.getElementById("year").value;
  var dept = document.getElementById("dept").value;
  var sec = document.getElementById("sec").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var pin = document.getElementById("pin").value;
  var city = document.getElementById("city").value;
  var add = document.getElementById("add").value;

  var n=/^[a-zA-Z]+$/;
  if (name == "" || name == null) {
    name1.style.color = "red";
    document.getElementById("name1").innerHTML = "Fill out this field";
    name1.style.display="block";
    return false;
  } 
  else if(!n.test(name)){
    name1.style.display="block";
    name1.style.color = "red";
    document.getElementById("name1").innerHTML = "Enter a valid name";
    return false;
  } 
  else {
    name1.style.display="none";
  }
  

  var r=/^[0-9]{8}$/
  if (roll == "" || roll == null) {
    roll1.style.color = "red";
    document.getElementById("roll1").innerHTML = "Fill out this field";
    roll1.style.display="block";
    return false;
  }
  else if(!r.test(roll)){
    roll1.style.color = "red";
    document.getElementById("roll1").innerHTML = "Enter a valid number";
    roll1.style.display="block";
    return false;
  }  
  else {
    roll1.style.display="none";
  }


  if (gender_male.checked == false && gender_female.checked == false) {
    gender1.style.color = "red";
    document.getElementById("gender1").innerHTML = "Fill out this field";
    gender1.style.display="block";
    return false;
  }
  else {
    gender1.style.display="none";
  }

  if (dob == "" || dob == null) {
    dob1.style.color = "red";
    document.getElementById("dob1").innerHTML = "Fill out this field";
    dob1.style.display="block";
    return false;
  } 
  else {
    dob1.style.display="none";
  }

  if (year == "" || year == null) {
    year1.style.color = "red";
    document.getElementById("year1").innerHTML = "Fill out this field";
    year1.style.display="block";
    return false;
  } 
  else {
    year1.style.display="none";
  }

  if (dept == "" || dept == null) {
    dept1.style.color = "red";
    document.getElementById("dept1").innerHTML = "Fill out this field";
    dept1.style.display="block";
    return false;
  }
  else {
    dept1.style.display="none";
  }

  if (sec == "" || sec == null) {
    sec1.style.color = "red";
    document.getElementById("sec1").innerHTML = "Fill out this field";
    sec1.style.display="block";
    return false;
  } 
  else {
    sec1.style.display="none";
  }

  var p=/^[0-9]{10}$/
  if (phone == "" || phone == null) {
    phone1.style.color = "red";
    document.getElementById("phone1").innerHTML = "Fill out this field";
    phone1.style.display = "block";
    return false;
  }
  else if(!p.test(phone)){
    phone1.style.color = "red";
    document.getElementById("phone1").innerHTML = "Enter a valid number";
    phone1.style.display = "block";
    return false;
  }
  else {
    phone1.style.display = "none";

  }

  var e=/^[a-zA-z0-9+-/]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/
  if (email == "" || email == null) {
    email1.style.color = "red";
    document.getElementById("email1").innerHTML = "Fill out this field";
    email1.style.display = "block";
    return false;
  }
  else if(!e.test(email)){
    email1.style.color = "red";
    document.getElementById("email1").innerHTML = "Enter a valid email id";
    email1.style.display = "block";
    return false;
  }
   else {
    email1.style.display = "none";

  }
  if (add == "" || add == null) {
    add1.style.color = "red";
    document.getElementById("add1").innerHTML = "Fill out this field";
    add1.style.display = "block";

    return false;
  } 
  else{
    add1.style.display = "none";

  }
  if (city == "" || city == null) {
    city1.style.color = "red";
    document.getElementById("city1").innerHTML = "Fill out this field";
    city1.style.display = "block";

    return false;
  }
  else{
    city1.style.display = "none";

  }

  var pin_num=/^[0-9]{6}$/
  if (pin == "" || pin == null) {
    pin1.style.color = "red";
    document.getElementById("pin1").innerHTML = "Fill out this field";
    pin1.style.display = "block";
    return false;
  } 
  else if(!pin_num.test(pin)){
    pin1.style.color = "red";
    document.getElementById("pin1").innerHTML = "Enter a valid pin number";
    pin1.style.display = "block";
    return false;
  }
  else {
    pin1.style.display = "none";
  }

 

}
