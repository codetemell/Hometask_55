

var kucukResimler = document.getElementsByClassName('kucukResim');
var buyukResim = document.getElementById('buyukResim');

for (var i = 0; i < kucukResimler.length; i++) {
  kucukResimler[i].addEventListener('click', function(event) {
    var yeniResimSrc = event.target.src;
    var eskiResimSrc = buyukResim.src;

    event.target.src = eskiResimSrc;
    buyukResim.src = yeniResimSrc;

    buyukResim.style.width = '650px'; 
    // buyukResim.style.marginTop = '70px'; 
    buyukResim.style.height = '400px';
  });
}