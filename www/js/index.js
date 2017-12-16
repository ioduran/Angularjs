$(document).on("pagebeforeshow","#ayetler" ,function(){
  var liste = "";
  $.getJSON("https://raw.githubusercontent.com/ioduran/AyetApp/master/namaz.json",
      function (veri, textStatus, jqXHR) {
          $.each(veri["sureler"], function (k, v) {
               console.log(k+"-"+v["author"]);
               liste+='<li><p ><h1 class="ayetadi">'+v["adi"]+'</h1></p><p>'+v["sure"]+'</p></li>';
          });
          $("#ayetList").html(liste).listview('refresh');
      }
  );
});
