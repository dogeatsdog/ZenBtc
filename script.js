
  var requestURL = 'https://blockchain.info/ticker';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    var btc = request.response;
    var data = btc['EUR']['last']
    $('#btc').html("BTC:  " + data)
  }

  var requestURL2 = 'https://api.cryptonator.com/api/ticker/eth-eur';
  var request2 = new XMLHttpRequest();
  request2.open('GET', requestURL2);
  request2.responseType = 'json';
  request2.send();
  request2.onload = function () {
    var eth = request2.response;
    var data2 = eth['ticker']['price']
    var round = parseFloat(data2).toFixed(2);
    $('#eth').html(round)
  }

  function updateChart(){
    var requestURL = 'https://blockchain.info/ticker';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
      var btc = request.response;
      var data = btc['EUR']['last']
      $('#btc').html("BTC:  " + data)
    }}

    function updateEth(){
      var requestURL2 = 'https://api.cryptonator.com/api/ticker/eth-eur';
      var request2 = new XMLHttpRequest();
      request2.open('GET', requestURL2);
      request2.responseType = 'json';
      request2.send();
      request2.onload = function () {
        var eth = request2.response;
        var data2 = eth['ticker']['price']
        var round = parseFloat(data2).toFixed(2);
        $('#eth').html("ETH:  " +  round)
      }}

    function startRefresh(){
      setTimeout(startRefresh,1000);
      updateChart();
      updateEth();
    }
    $(function(){
      startRefresh();
    })

function Waves(){
  $('#vvideo source').attr("src","img/Beach.mp4 ")
  $("#vvideo")[0].load();
}

function Dock(){
  $('#vvideo source').attr("src","img/Albert-Dock.mp4")
  $("#vvideo")[0].load();
}


$("#waves").on("click", Waves);
$("#dock").on("click", Dock);
