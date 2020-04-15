document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('tıklaLoad');
    var linkDownload = document.getElementById('tıklaSave');
    link.addEventListener('click', function() {
        loadFileAsText();
    });
    linkDownload.addEventListener('click',function(){
        savefile();
    });

    chrome.runtime.getBackgroundPage(function (bg) {
        var myUrl = bg.htmlData;
        document.getElementById('inputTextToSave').value = myUrl;
    });
    });

function loadFileAsText(){
    var myFile = document.getElementById("myFile").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };

    fileReader.readAsText(myFile, "UTF-8");
  }
  function savefile(){
      var content = document.getElementById("inputTextToSave").value;
      uriContent = "data:application/octet-stream," + encodeURIComponent(content);
      document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile.txt\">İşte indirme linki</a>";
  } 