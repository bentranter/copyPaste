(function() {
  var home = document.querySelector(".home-devices");

  window.addEventListener("paste", function(e) {
    var items = e.clipboardData.items;

    for (var i = 0; i < items.length; i++) {
      // Skip content if not image
      if (items[i].type.indexOf("image") == -1) {
        continue;
      }

      // Retrieve image on clipboard as blob
      var blob = items[i].getAsFile();

      // Get the base64 data URI from the image blob, and set it to be the
      // background image of the div.
      home.style.backgroundImage = "url(" + window.URL.createObjectURL(blob) + ")";
    };
  }, false);
})();
