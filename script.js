const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#passwordRepeat');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const inputs = document.querySelectorAll('.input');
const submitButton = document.querySelector('#submit');

function checkInfo(){

    const passwordValue = password.value;
    const passwordRepeatValue = passwordRepeat.value;
    const emailValue = email.value;
    const usernameValue = username.value;

    if(usernameValue === ''){

        document.querySelector('#usernameError').innerHTML = 'Please enter a username';

    } else {

        if (!passwordValue.includes(0||1||2||3||4||5||6||7||8||9)){

            document.querySelector('#passwordError').innerHTML = 'Password must contain numbers';
    
        } else {
    
            if(passwordRepeatValue !== passwordValue){
    
                document.querySelector('#passwordRepeatError').innerHTML = 'Must be the same as Password';
    
            } else {
    
                if(!emailValue.includes('@')){
    
                    document.querySelector('#emailError').innerHTML = 'Email must contain \'@\'';
    
                } else {
    
                    alert('Signed up successfully!');

                    window.location.reload();
    
                }
    
            }
    
        }
    
    }

}

document.querySelector('#container').addEventListener('change', () => {

    if(!username.value == ''){

        if(!password.value == ''){

            if(!passwordRepeat.value == ''){
    
                if(!email.value ==''){

                    submitButton.style.opacity = 1;

                    submitButton.addEventListener('click', checkInfo);

                } else {

                    submitButton.style.opacity = 0.4;

                    submitButton.removeEventListener('click', checkInfo);

                }
    
            } else {

                submitButton.style.opacity = 0.4;

                submitButton.removeEventListener('click', checkInfo);

            }
    
        } else {

            submitButton.style.opacity = 0.4;

            submitButton.removeEventListener('click', checkInfo);

        }

    } else {

        submitButton.style.opacity = 0.4;

        submitButton.removeEventListener('click', checkInfo);

    }

})






submitButton.addEventListener('click', e => {e.preventDefault()});