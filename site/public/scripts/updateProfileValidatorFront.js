const qs = function(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){

    let form = qs('form');
    let elementos = form.elements;
    let inputAvatar= document.getElementById('avatar');
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;


    inputAvatar.addEventListener('blur', function(){

        switch (true) {
            case this.value == '':
                errorAvatar.innerHTML = 'Este campo es obligatorio';
                this.classList.add('is-invalid'); 
                break;        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorAvatar.innerHTML = ''
                break;
        }
    });

    inputAvatar.addEventListener('change', function(){

        let filePath = inputAvatar.value;

        if(!allowedExtensions.exec(filePath)){
            alert('La extencion del archivo no esta permitido. Los archivos deben tener extencion .jpeg/.jpg/.png/.gif');
            inputAvatar.value = '';
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

