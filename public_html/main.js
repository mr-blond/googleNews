$(function() {
  
  var query;
  //listener
  $('#submit').on("click",function (){
      query = $('#city').val();
     requestData(); 
  });
  
  function requestData(){
      console.log(query);
      jQuery.ajax({
        type: 'GET', // Le type de ma requete
        url: 'https://news.google.com/news/feeds?cf=all&ned=us&geo=los%20angeles&redirect=true&edchanged=1&authuser=0&output=json', // L'url vers laquelle la requete sera envoyee
        /*data: {
          username: 'OyoKooN', // Les donnees que l'on souhaite envoyer au serveur au format JSON
          age: 19,
          admin: true
        }, */
        success: function(data, textStatus, jqXHR) {
          // La reponse du serveur est contenu dans data
          // On peut faire ce qu'on veut avec ici
          console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // Une erreur s'est produite lors de la requete
          console.log('echec')
        }
      });
  }
});