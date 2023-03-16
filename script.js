
// Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

function generatePassword() {
	// Define assignment characters
	var lowercaseCh = 'abcdefghijklmnopqrstuvwxyz';
	var uppercaseCh = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var numericCh = '0123456789';
	var specialCh = '!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
	
	// Initial states
	var password = '';
	var useLowercase = false;
	var useUppercase = false;
	var useNumeric = false;
	var useSpecial = false;
	
	// Initial Prompt
	var passwordLength = prompt('Please enter a desired password length between 8 and 128 characters:');
	
	// First assignment validation
	if (passwordLength >= 8 && passwordLength <= 128) {
		// Prompting for character types
		useLowercase = confirm('Include lowercase letters?');
		useUppercase = confirm('Include uppercase letters?');
		useNumbers = confirm('Include numbers?');
		useSpecial = confirm('Include special characters?');
		
		// Checking criteria met
		if (useLowercase || useUppercase || useNumeric || useSpecial) {
			// If statements given input
			var charSet = '';
			if (useLowercase) {
				charSet += lowercaseCh;
			}
			if (useUppercase) {
				charSet += uppercaseCh;
			}
			if (useNumbers) {
				charSet += numericCh;
			}
			if (useSpecial) {
				charSet += specialCh;
			}
			
			// Password generation
			for (var i = 0; i < passwordLength; i++) {
				password += charSet.charAt(Math.floor(Math.random() * charSet.length));
			}
			
			// Update password display
		//	document.getElementById('password-display').textContent = password;
		} else {
			alert('Please select one or more character type.');
		}
	} else {
		alert('Please enter a password length of between 8 and 128 characters.');
	}

    return password;
}


//end of assignment code

// Write password to the #password input
function writePassword() {
//  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);