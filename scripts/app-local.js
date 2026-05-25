//REGISTRO
const regsiterForm = document.getElementById('registerForm');

if (regsiterForm) {
    regsiterForm.addEventListener('submit', e => {
        e.preventDefault();
    
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    localStorage.setItem('user', JSON.stringify(user));

    document.getElementById('message').innerText = 'Cadastro realizado com sucesso!';
    });
}

//LOGIN
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

    if(user && email === user.email && password === user.password) {
        localStorage .setItem('logged', 'true');
        document.getElementById('message').innerText = 'Login realizado com sucesso!';
    } else {
        document.getElementById('message').innerText = 'Email ou senha incorretos!';
    }
    });
}