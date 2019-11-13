$( document ).ready(function(){

  // agganciamo al click sul pulsante microfono la funzione di callback
  $('.invio').click(function() {

    // creo la variabile messaggio (quello che l'utente scrive)
    var messaggio = $('.messaggio-utente').val();
    console.log(messaggio);

    // copio il div del messaggio inviato che è all'interno del template: ne creo una variabile
    var messaggioInviato = $('.template .template-messaggio').clone();
    console.log(messaggioInviato);

    // assegno una classe al messaggio inviato così da attribuirgli lo stile
    messaggioInviato.removeClass('template');
    messaggioInviato.addClass('template-inviato');

    // // risposta 'ok' (logica analoga al messaggio inviato)
    // var contromessaggio = 'ok';
    // console.log(contromessaggio);
    //
    // var messaggioRicevuto = $('.template .template-messaggio').clone();
    // console.log(messaggioRicevuto);
    // messaggioRicevuto.removeClass('template');
    // messaggioRicevuto.addClass('template-ricevuto');

    // ora inserisco il testo del messaggio a questa copia
    messaggioInviato.find('.testo').text(messaggio);
    // messaggioRicevuto.text(contromessaggio);

    // grazie all'append posso stampare in pagina (nel contenuto della chat) questo messaggio
    $('#chat-contenuto').append(messaggioInviato);

    setTimeout(risposta, 1000);

    function risposta() {
      // risposta 'ok' (logica analoga al messaggio inviato)
      var contromessaggio = 'ok';
      console.log(contromessaggio);

      var messaggioRicevuto = $('.template .template-messaggio').clone();
      console.log(messaggioRicevuto);
      messaggioRicevuto.removeClass('template');
      messaggioRicevuto.addClass('template-ricevuto');
      messaggioRicevuto.text(contromessaggio);
      $('#chat-contenuto').append(messaggioRicevuto);
    }




    // ripulisco il campo del messaggio-utente
    $('.messaggio-utente').val("");

  });

});
