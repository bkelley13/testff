

const ffval = () => {
    var elem = document.getElementById("div1");
    var result = document.getElementById("result");
    var rawfontstring = window.getComputedStyle(elem).getPropertyValue('font-family');    
    console.log("rawfontstring = " + rawfontstring);    
    result.innerHTML = rawfontstring;  
  }
  