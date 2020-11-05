const qs = function(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){

    let form = qs('form');
    let elementos = form.elements;
    let inputNombre = document.getElementById('nombre');
    let inputApellido = document.getElementById('apellido');
    let inputEmail = document.getElementById('email');
    let inputContraseña = document.getElementById('contraseña');
    let inputContraseña2 = document.getElementById('contraseña2');

    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexContraseña =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    inputNombre.addEventListener('keyup', function(){

        switch (true) {
            case this.value == '':
                errorNombre.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;
            case this.value.trim().length <= 2:
                errorNombre.innerHTML = "Tenés que poner al menos 3 letras";
                this.classList.add('is-invalid');                
                break;         
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ''
                break;
        }
    });

    inputApellido.addEventListener('keyup', function(){

        switch (true) {
            case this.value == '':
                errorApellido.innerHTML = 'Este campo es obligatorio'
                this.classList.add('is-invalid')  
                break;
            case this.value.trim().length <= 2:
                errorApellido.innerHTML = "Tenés que poner al menos 3 letras"
                this.classList.add('is-invalid')                
                break;         
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorApellido.innerHTML = ''
                break;
        }
    })

    inputEmail.addEventListener('keyup', function(){
        switch (true) {
            case this.value == '':
            errorEmail.innerHTML = 'El campo es obligarorio'
            this.classList.add('is-invalid')                
                break;
            case !regexEmail.test(this.value):
                errorEmail.innerHTML = 'Debes escribir un email valido'
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ''
                break;
        }
    })
    inputContraseña.addEventListener('keyup', function(){
        switch (true) {
            case this.value == '':
            errorContraseña.innerHTML = 'El campo es obligarorio'
            this.classList.add('is-invalid')                
                break;
            case!regexContraseña.test(this.value):
                errorContraseña.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres, una mayuscula, una minuscula y un número'
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorContraseña.innerHTML = ''
                break;
        }
    })

    inputContraseña.addEventListener('mouseover', function(){
        this.setAttribute('title', 'La contraseña debe tener entre 6 y 12 caracteres, una mayuscula, una minuscula y un número')
    })

    inputContraseña2.addEventListener('keyup', function(){
        switch (true) {
            case this.value == '':
            errorContraseña2.innerHTML = 'El campo es obligarorio'
            this.classList.add('is-invalid')                
                break;
            case this.value != inputContraseña.value:
                errorContraseña2.innerHTML = 'Las contraseñas no coinciden. Reitentar'
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorContrseña2.innerHTML = ''
                break;
        }
    })

    form.addEventListener('submit', function(e){

        e.preventDefault();

        let error = false;

        for (let i = 0; i < elementos.length; i++) {
           
            if(elementos[1].value == 0){
                elementos[1].classList.add('is-invalid')
                error = true
            }

        }
        if(!error){
            form.submit();
        }
    })
})