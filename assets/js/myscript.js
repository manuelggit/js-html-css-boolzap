$( document ).ready(function(){

  // agganciamo al click sul pulsante microfono la funzione di callback
  $('.invio').click(function() {

    // creo la variabile messaggio (quello che l'utente scrive)
    var messaggio = $('.messaggio-utente').val();
    console.log(messaggio);

    // copio il div del messaggio inviato che è all'interno del template: ne creo una variabile
    var messaggioInviato = $('#template .template-messaggio').clone();
    console.log(messaggioInviato);

    // ora inserisco il testo del messaggio a questa copia
    messaggioInviato.find('.testo').text(messaggio);

    // grazie all'append posso stampare in pagina (nel contenuto della chat) questo messaggio
    $('#chat-contenuto').append(messaggioInviato);

    // ripulisco il campo del messaggio-utente
    $('.messaggio-utente').val("");

  });

});
