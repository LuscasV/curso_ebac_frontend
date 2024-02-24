$(document).ready(function() {

//impede o envio do formulario
$('form').submit(function(e) {
    e.preventDefault();

const inputTarefa = $('#nova-tarefa').val();
//faz aparecer a lista quando clicamos no button submit
$("ul").append(`<li><span class="pendent"></span> ${inputTarefa}</li>`);
$("#nova-tarefa").val('');

$('ul').on('click', 'li', function() {
    $(this).toggleClass("linha")
})




$('#nova-tarefa').val("");

})

})