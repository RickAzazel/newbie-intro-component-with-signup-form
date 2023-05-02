const form = document.getElementById('form');
const username = document.getElementById('username');
const usersurname = document.getElementById('usersurname');
const email = document.getElementById('email');
const password = document.getElementById('password');

console.log(form)

form.addEventListener('submit', e => {
	e.preventDefault();

	validateInputs();
});

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorMessage = inputControl.querySelector('.error__text');
	const errorIcon = inputControl.querySelector('.error__icon');

	errorMessage.innerText = message;
	errorIcon.style.display = 'block';
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorMessage = inputControl.querySelector('.error__text');
	const errorIcon = inputControl.querySelector('.error__icon');

	errorMessage.innerText = '';
	errorIcon.style.display = 'none';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
}

const isValidEmail = email => {
	const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(String(email).toLowerCase());
};

const validateInputs = () => {
	const usernameValue = username.value.trim();
	const usersurnameValue = usersurname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if (usernameValue === '') {
		setError(username, 'Fist name cannot be empty');
	} 
	else {
		setSuccess(username);
	}

	if (usersurnameValue === '') {
		setError(usersurname, 'Last name cannot be empty');
	} 
	else {
		setSuccess(usersurname);
	}

	if (emailValue === '') {
		setError(email, 'Email cannot be empty');
	} 
	else if (!isValidEmail(emailValue)) {
		setError(email, 'Looks like this is not an email')
	}
	else {
		setSuccess(email);
	}

	if (passwordValue === '') {
		setError(password, 'Password cannot be empty');
	} 
	else if (passwordValue.length < 8) {
		setError(password, 'Password must be at least 8 character')
	}
	else {
		setSuccess(password);
	}
};