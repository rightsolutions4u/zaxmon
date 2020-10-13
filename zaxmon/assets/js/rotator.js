if (window.matchMedia("(min-width: 1024px)").matches) {
  var banner = [
    ["destination1.com", "assets/img/banner1.jpg"],
    ["destination2.com", "assets/img/banner2.jpg"],
    ["destination3.com", "assets/img/banner3.jpg"],
  ];

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  shuffle(banner);

  document.getElementById("ad-container").innerHTML =
    '<a href="' +
    banner[0][0] +
    '" target="_blank" rel="nofollow"><img src="' +
    banner[0][1] +
    '" height="350" width="1150" alt="300x250 Banner Ad" /></a>';
}
