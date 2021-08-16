


const chooseLoginEl = document.getElementById('choose-login');
const chooseCreateEl = document.getElementById('choose-create');

const displayLogIn = (event) => {
  chooseLoginEl.parentNode.removeChild(chooseLoginEl);
  chooseCreateEl.parentNode.removeChild(chooseCreateEl);

  const columnsDiv = document.createElement('div');
  columnsDiv.classList.add('columns');
  const singleColumnDiv = document.createElement('div');
  singleColumnDiv.classList.add('column', 'is-half');

  const loginForm = document.createElement('form');
  const usernameInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const usernameLabel = document.createElement('label');
  const passwordLabel = document.createElement('label');
  const submitBtnEl = document.createElement('input');
  submitBtnEl.type = 'submit';
  usernameLabel.textContent = 'username: ';
  passwordLabel.textContent = 'password: ';

  loginForm.appendChild(usernameLabel);
  loginForm.appendChild(usernameInput);
  loginForm.appendChild(passwordLabel);
  loginForm.appendChild(passwordInput);
  loginForm.appendChild(submitBtnEl);

  singleColumnDiv.appendChild(loginForm);
  columnsDiv.appendChild(singleColumnDiv);
  document.body.appendChild(columnsDiv);

  const handleLogin = async (username, password) => {

    const body = {
        username: username,
        password: password,
    };
    
        console.log(body);

    const result = await fetch(`/api/users/sign-in/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return result;
      });
   
    if(result){
        window.location.href = `/${body.username}`;
    } else {
        alert('error with login')
        window.location.href = '/';
    }
  }

  submitBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    handleLogin(usernameInput.value, passwordInput.value)
  });

}

chooseLoginEl.addEventListener('click', displayLogIn);

const displayCreateUser = (event) => {
  chooseLoginEl.parentNode.removeChild(chooseLoginEl);
  chooseCreateEl.parentNode.removeChild(chooseCreateEl);

  const columnsDiv = document.createElement('div');
  columnsDiv.classList.add('columns');
  const singleColumnDiv = document.createElement('div');
  singleColumnDiv.classList.add('column', 'is-half');

  const createForm = document.createElement('form');
  const usernameInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const usernameLabel = document.createElement('label');
  const passwordLabel = document.createElement('label');
  const submitBtnEl = document.createElement('input');
  submitBtnEl.type = 'submit';
  usernameLabel.textContent = 'username: ';
  passwordLabel.textContent = 'password: ';

  passwordInput.classList.add('input');
  usernameInput.classList.add('input');

  createForm.appendChild(usernameLabel);
  createForm.appendChild(usernameInput);
  createForm.appendChild(passwordLabel);
  createForm.appendChild(passwordInput);
  createForm.appendChild(submitBtnEl);

  singleColumnDiv.appendChild(createForm);
  columnsDiv.appendChild(singleColumnDiv);
  document.body.appendChild(columnsDiv);

  const handleCreateUser = async (username, password) => {

    const body = {
        username: username,
        password: password,
    };
    
        console.log(body);

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

  submitBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    handleCreateUser(usernameInput.value, passwordInput.value)
  });
}

chooseCreateEl.addEventListener('click', displayCreateUser);