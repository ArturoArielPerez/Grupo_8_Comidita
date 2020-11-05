const qs = function(element){
    return document.querySelector(element)
}


window.addEventListener('load', function(){

    let form = qs('form');
    let elementos = form.elements;
    let inputNombre = document.getElementById('nombre');
    let inputApellido = document.getElementById('apellido');
    let inputEmail = document.getElementById('email');
    let inputTelefono = document.getElementById('telefono');
    let inputDia = document.getElementById('dia');
    let inputHorario = document.getElementById('horario');
    let inputComentario = document.getElementById('comentario');
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexTelefono = /^([0-9])*$/

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
    });

    inputTelefono.addEventListener('keyup', function(){
        switch (true) {
            case this.value == '':
                errorTelefono.innerHTML = 'El campo es obligatorio'
                this.classList.add('is-invalid')                
                break;
                case !regexTelefono.test(this.value):
                    errorTelefono.innerHTML = 'El formato no corresponde'
                    this.classList.add('is-invalids')
                case this.value.length < 9:
                    errorTelefono.innerHTML = 'Debe tener 10 digitos'
                    this.classList.add('is-invalid')        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorTelefono.innerHTML = ';'
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
    });


    inputComentario.addEventListener('keyup', function(){

        switch (true) {
            case this.value == '':
                errorComentario.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;
            case this.value.trim().length <= 5:
                errorComentario.innerHTML = "Tenés que poner al menos 5 caracteres";
                this.classList.add('is-invalid');                
                break;         
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorComentario.innerHTML = ''
                break;
        }
    });

    inputDia.addEventListener('blur', function(){

        switch (true) {
            case this.value == '':
                errorDia.innerHTML = 'El campo es obligatorio. Seleccione un dia.';
                this.classList.add('is-invalid')                
                break;        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorDia.innerHTML = '';
                break;
        }
    })

    inputHorario.addEventListener('blur', function(){

        switch (true) {
            case this.value == '':
                errorHorario.innerHTML = 'El campo es obligatorio. Seleccione un horario.';
                this.classList.add('is-invalid')                
                break;        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorHorario.innerHTML = '';
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