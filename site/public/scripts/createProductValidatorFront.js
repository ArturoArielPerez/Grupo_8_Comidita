const qs = function(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){

    let form = qs('form');
    let elementos = form.elements;
    let inputCategoria = document.getElementById('categoria');
    let inputNombre = document.getElementById('nombre');
    let inputPrecio = document.getElementById('precio');
    let inputDescripcion = document.getElementById('descripcion');
    let inputImagen = document.getElementById('imagen');
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputCategoria.addEventListener('blur', function(){

        switch (true) {
            case this.value == '':
                errorCategoria.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;
            case this.value.trim().length <= 3:
                errorCategoria.innerHTML = "Tenés que poner al menos 5 letras";
                this.classList.add('is-invalid');                
                break;         
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorCategoria.innerHTML = ''
                break;
        }
    })

    inputNombre.addEventListener('blur', function(){

        switch (true) {
            case this.value == '':
                errorNombre.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;
            case this.value.trim().length <= 1:
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

    inputPrecio.addEventListener('blur', function(){

        switch (true) {
            case this.value == '':
                errorPrecio.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;
            case this.value.trim().length <= 1:
                errorPrecio.innerHTML = "Tenés que poner al menos 2 cifras";
                this.classList.add('is-invalid');                
                break;         
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPrecio.innerHTML = ''
                break;
        }
    });

    inputDescripcion.addEventListener('keyup', function(){

        switch (true) {
            case this.value == '':
                errorDescripcion.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;
            case this.value.trim().length <= 20:
                errorDescripcion.innerHTML = "Tenés que poner al menos 20 caracteres";
                this.classList.add('is-invalid');                
                break;         
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorDescripcion.innerHTML = ''
                break;
        }
    });

    inputImagen.addEventListener('blur', function(){

        switch (true) {
            case this.value == '':
                errorImagen.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorImagen.innerHTML = ''
                break;
        }
    });

    inputImagen.addEventListener('change', function(){

        let filePath = inputImagen.value;

        if(!allowedExtensions.exec(filePath)){
            alert('La extencion del archivo no esta permitido. Los archivos deben tener extencion .jpeg/.jpg/.png/.gif');
            inputImagen.value = '';
            return false;
        }else{
            this.classList.add('is-invalid')
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