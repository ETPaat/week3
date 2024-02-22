const btnSubmit = document.querySelector('button');
const userNameInputField = document.querySelector('#username');
const userAgeInputField = document.querySelector('#age');
const loginMessage = document.querySelector('.login-message')

btnSubmit.addEventListener('click', () =>{
    const userNameInput = userNameInputField.value.toLowerCase(); //HARRY/ HaRRy / hArRy==> harry
    const userAgeInput = userAgeInputField.value;

    if(userNameInput === 'harry' && userAgeInput === '11') {
        console.log('welcome');
        loginMessage.textContent = 'Welcome, Harry!';
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = 'Who are you?';
        loginMessage.style.color = 'red';
    }
        

    

});