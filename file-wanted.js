document.getElementById("filetoRead").addEventListener("change",function(){
    var file = this.files[0];
  
    if (file) {
        var reader = new FileReader();
  
        reader.onload = function (evt) {
          console.log(evt);
          document.getElementById("buscador").value = evt.target.result;
        };
  
        reader.onerror = function (evt) {
          console.error("sorry erro to read the file",evt);
        };
  
        reader.readAsText(file, "UTF-8");
        
      }
  },false);