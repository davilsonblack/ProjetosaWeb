function mostrarpassword()  {
    const eye1 = document.getElementById('eye1')
    const eye2 = document.getElementById('eye2')
    const inputpass = document.getElementById('password-input') //esqueci a propriedade document

    if (eye1.style.display === 'none'){

        eye1.style.display = 'block';
        eye2.style.display = 'none';
        inputpass.type = 'text';

    } else {

        eye1.style.display = 'none';
        eye2.style.display = 'block';
        inputpass.type = 'password';

    }
}

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Bem-vindo!');
})