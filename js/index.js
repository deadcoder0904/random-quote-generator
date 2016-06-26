function getQuote(quote, author) {
  $.ajax({
    headers: {
      'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(data) {
      quote.html("<i class='fa fa-quote-left'> </i>" + " " + JSON.parse(data).quote);
      author.html(JSON.parse(data).author);
    }
  });
}

function changeAll(change, quote, author, changeCSS) {
  change.css('background', changeCSS);
  getQuote(quote, author);
}
$(document).ready(function() {
  var i = 0;
  var colors = [
    '#27ae60',
    '#2c3e50',
    '#16a085',
    '#e74c3c',
    '#9b59b6',
    '#342224',
    '#BDBB99',
    '#FB6964',
    "#C63D0F",
    "#3B3738",
    "#005A31",
    '#472E32',
    "#558C89",
    "#f39c12",
    "#77b1a9"
  ];
  var change = $(".change");
  var quote = $("#quote");
  var author = $("#author");
  changeAll(change, quote, author, colors[(i++) % 15]);
  $("#button").click(function() {
    changeAll(change, quote, author, colors[(i++) % 15]);
  });
});