//https://teachablemachine.withgoogle.com/models/dONeIwXBb/model.json

function startProgram(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rnlHLrHbf/model.json", modelready);
}

function modelready(){
    classifier.classify(gotResults);
}


function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);

        randomnumber_r = Math.floor(Math.random() * 255) + 1;
        randomnumber_b = Math.floor(Math.random() * 255) + 1;
        randomnumber_g = Math.floor(Math.random() * 255) + 1;
        console.log("R: " + randomnumber_r + ", G: " + randomnumber_g + ", B: " + randomnumber_b);

    
        document.getElementById("result").innerHTML = "I can hear: " + results[0].label;

        document.getElementById("confidence_of_result").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";
    
        
        document.getElementById("result").style.color = "rgb("+randomnumber_r+","+randomnumber_g+", "+randomnumber_b+")";
        document.getElementById("confidence_of_result").style.color = "rgb("+randomnumber_r+","+randomnumber_g+", "+randomnumber_b+")"; 
    
            
    

        if(results[0].label=="Cat"){
        console.log("user is hearing a cat");
        document.getElementById("img_result").src = "cat gif.gif";
        }
    
    

        else if(results[0].label=="Background Noise"){
        console.log("user has background noise");
        document.getElementById("img_result").src = "";
        }

        else if(results[0].label=="Tiger"){
            console.log("user is hearing a tiger");
            document.getElementById("img_result").src = "tiger gif.gif";
            }

    
        
    
    }
    }