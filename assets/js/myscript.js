$( document ).ready(function(){

  // agganciamo al click sul pulsante microfono la funzione di callback
  $('.invio').click(function() {

    // creo la variabile messaggio (quello che l'utente scrive)
    var messaggio = $('.messaggio-utente').val();
    console.log(messaggio);

  });

});
