$(document).ready(function() {
	$.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(dataResponse) {
        var dischi= dataResponse.response;
        stampaCd(dischi);
      },
      error: function() {
        alert:("errore");
      }
    }
  );
  function stampaCd(arrayDischi) {

    var source = $('#cd-template').html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < arrayDischi.length; i++) {
      var singoloCd = arrayDischi[i];
      var html = template(singoloCd);
      $('.cds-container').append(html);
    }
  }
});
