var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){

    recognition.start()
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    if(content=="Selfie."){
        speak()
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata="taking your selfie in 5 seconds"
utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function(){
        img_id="selfie1"
speakdata="taking your selfie in 10 seconds"
utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
        takesnapshot()
    },5000 )
    setTimeout(function(){
        img_id="selfie2"
        
speakdata="taking your selfie in 15 seconds"
utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
        takesnapshot()
    },10000 )
    setTimeout(function(){
        img_id="selfie3"

        takesnapshot()
    },15000 )   
}

Webcam.set({
    width: 350,
    height:250,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML="<img id='selfie1' src='"+data_uri+"'>"

    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML="<img id='selfie2' src='"+data_uri+"'>"

    }
    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML="<img id='selfie3' src='"+data_uri+"'>"

    }
    })
}

