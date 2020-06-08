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
//check email
function checkemail(){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//show success outline
function showsuccess(input,postMessage){
const formControl = input.parentElement;
formControl.className = 'form-control success';	
}

//Event listener
form.addEventListener('submit',function(e){
	e.preventDefault();
	
	if(username.value === ''){
		showerror(username, 'username is required');
	}else{
		showsuccess(username);
	}
	
	if(email.value === ''){
		showerror(email, 'email is required');
	}else if(!checkemail(email.value)) {
		showerror(email, 'email is not valid');
	}else{
		showsuccess(email);
	}
	
	if(password.value === ''){
		showerror(password, 'email is required');
	}else{
		showsuccess(password);
	}
	
	if(password2.value === ''){
		showerror(password2, 'email is required');
	}else{
		showsuccess(password2);
	}
	
});

