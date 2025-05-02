function checkLibSec() {
	var section = document.getElementById('lib-sec').value;

	switch(section){

	case "F":
		document.getElementById('result-libsec').innerHTML = "Fiction";
	break;

	case "N":
		document.getElementById('result-libsec').innerHTML = "Non-Fiction";
	break;

	case "R":
		document.getElementById('result-libsec').innerHTML = "Reference";
	break;

	default:
		document.getElementById('result-libsec').innerHTML = "Invalid output. Please try again.";
	}
}

function checkGradeSec() {
  const section = document.getElementById('grade-sec').value;
  let result;

  switch (section) {
    
  case "1":
      result = "Emerald";
  break;
    case "2":
      result = "Ruby";
      break;
    case "3":
      result = "Sapphire";
      break;
    case "4":
      result = "Topaz";
      break;
    default:
      result = "Invalid input";
  }

  	alert("Grade 9 Section: " + result);
  }