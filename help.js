function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var text;
    if(name.length < 10){
      alert ("Please enter a valid Full Name");
     
      return false;
    }
    if(subject.length < 10){
      alert ("Please enter a Correct Subject containing at LEAST 10 characters");
      return false;
    }
    if(isNaN(phone) || phone.length != 9){
      alert ("Please enter a valid Phone Number containing 9 digits");
      return false;
    }
    if(message.length <= 100){
      alert("Please enter more than 100 characters for the message.");
      return false;
    }
    if(document.form.submit()) {
    alert("Form Submitted Successfully!");
    return true;
    }
    return false;
  }

