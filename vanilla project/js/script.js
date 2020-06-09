const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showerror(input,postMessage) {  
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = postMessage;
}
//check email added
function checkemail(input){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
		showsuccess(input);
	}else{
		showerror(input, 'Email is not valid');
	}
}
	
//show success outline
function showsuccess(input,postMessage){
const formControl = input.parentElement;
formControl.className = 'form-control success';	
}
//chech required
function checkrequired(inputArr){
	inputArr.forEach(function(input) {
		if(input.value.trim()===''){
			showerror(input, `${getFieldName(input)} is required`)
		}else{
			showsuccess(input);
		}
	});
}
//check password match
function checkpassword(input1, input2){
	if(input1.value !== input2.value){
		showerror(input2, 'Password do not match');
	}
	
}
//chech lenght
 function checklenght(input, min, max){
	 if(input.value.length < min) {
		 showerror(input, `${getFieldName(input)} must be at least ${min}characters`);
	 } else if(input.value.lenght > max){
		  showerror(input,`${getFieldName(input)} must be less than ${max}characters`);
	 }else{
		 showsuccess(input);
	 }
 }

//get field name
function getFieldName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listener
form.addEventListener('submit',function(e){
	e.preventDefault();

	 checkrequired([username,email,password,password2]);
	 checklenght(username, 3, 15);
	 checklenght(password, 6, 25);
     checkemail(email);
	 checkpassword(password, password2);
});

