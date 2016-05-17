// This is a manifest file that"ll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin"s vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It"s not advisable to add code directly here, but if you do, it"ll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require faye
//= require_tree .

var faye = new Faye.Client("/faye")

faye.subscribe("/chat", function(data){
  $("#box").append("<h4>"+data.message+"</h4>")
  .animate({scrollTop: $("#box").prop("scrollHeight")}, 500);
});

$(document).ready(function(){
  $("#post-button").click(function() {

    publisher = faye.publish("/chat", {
      message: $("#message").val()
    });

    publisher.callback(function() {
      $("#message").val("");
    });

    publisher.errback(function() {
      alert("Something went wrong. Try again.");
    });
  });
})
