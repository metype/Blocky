function load() {
    var file = new XMLHttpRequest();
    file.open("GET", "version.txt", true);
    file.onreadystatechange = function() {
      if (file.readyState === 4) {  // Makes sure the document is ready to parse
        if (file.status === 200) {  // Makes sure it's found the file
          text = file.responseText;
          document.getElementById("version").innerHTML = "Version:"+text;
        }
      }
    }
}

window.onLoad = load();
