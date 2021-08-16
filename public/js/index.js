



const submitBtnEl = document.getElementById('submit-btn');
const passwordEl = document.getElementById('password');
const usernameEl = document.getElementById('username');

const createUser = async (event) => {
    event.preventDefault();

    const body = {
        username: usernameEl.value,
        password: passwordEl.value,
    };
    
        console.log('body');
        const result = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(`user created with id#${result.id}`);
            return result;
          });
       
        if(result.id){
            window.location.href = `/${body.username}`;
        } else {
            alert('error with user creation')
            window.location.href = '/';
        }
}

submitBtnEl.addEventListener('click', createUser);

