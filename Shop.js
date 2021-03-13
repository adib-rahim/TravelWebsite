var modal=document.getElementById("modal1");
  var btn = document.getElementById("book");
  var a = document.getElementsByClassName("close1")[0];
  btn.onclick = function(){modal.style.display = "block"; }
  a.onclick = function(){modal.style.display = "none";}

  

  function getselectedValue()
  {
      var selectedValue = document.getElementById("destinations" ).value;
      document.getElementById("divprice").innerHTML=selectedValue;
  }