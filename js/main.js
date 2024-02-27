$(document).ready(function(){   


    $('#numero').mask('(00) 00000-0000' , {
        placeholder: 'Ex: (00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00' , {
        placeholder: 'Ex: 000.000.000-00'
    })
    
    $('#cep').mask('00000-000' , {
        placeholder: 'Ex: 00000-000'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            numero: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu E-mail',
            numero: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira o seu endereço',
            cep: 'Por favor, insira o seu CEP'
            },
            submitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos){
                    alert(`Exitem ${camposIncorretos} campos incorretos`)
                }
            }
        })
        })

