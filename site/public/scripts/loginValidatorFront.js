const qs = function(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){

    let form = qs('form');
    let elementos = form.elements;
    let inputEmail = document.getElementById('exampleInputEmail1');
    let inputContraseña = document.getElementById('exampleInputPassword1');

    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexContraseña =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

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
            case !regexContraseña.test(this.value):
                errorContraseña.innerHTML = 'Debe contener entre 6 y 12 caracteres'
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorContrseña.innerHTML = ''
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

