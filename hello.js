(function (window) {
    var speakWord= "Heey";
    var helloSpeaker= function (name){
      console.log( speakWord + ""+ name);
    }
  
    window.helloSpeaker = helloSpeaker;
  
  })(window);
  