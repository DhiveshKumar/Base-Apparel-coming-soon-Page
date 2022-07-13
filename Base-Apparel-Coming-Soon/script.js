var btn = document.getElementById("button");
var input = document.getElementById("inputBox");
var label = document.getElementById("label");
// var mailList = [];




btn.onclick = function(){
    // alert("click")
    var mailId = input.value;
    // var mailFormat = /^([a-z 0-9 /. -]+) @ ([a-z  0-9 -]+) . ([a-z]{2,8}) (.[a-z]{2,8})? $/;
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!mailId.match(mailFormat)){

        
    
        label.classList.add("visible");
        label.innerText = "Enter a valid mail";


    }
    else{

        // if(mailList.includes(mailId)){
        //     label.classList.add("visble");
        //     label.innerText = "Already logged in using this Mail";
        // }

        
        if(label.classList.contains('visible')){
            label.classList.remove('visible');
        }

        
        
        
        var localStorageValue = localStorage.getItem("list");
        if(localStorageValue==null){
            var arr = [];
        }
        else{
            arr = JSON.parse(localStorageValue);
        }
        // checking whether the mail id is in the list or not
        if(arr.includes(mailId)){
            // alert("iruku vro");

            label.classList.add('visible');
            label.innerText = "You've already used this mail"        
           
        }
        else{
            arr.push(mailId);

        }
        
        localStorage.setItem("list",JSON.stringify(arr));


        
        


        input.value = "";
    }
    
    

}

input.onkeyup = function(event){

    var pressedKey = event.key;
    if(pressedKey == "Enter"){
        var mailId = input.value;
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!mailId.match(mailFormat)){

        
    
        label.classList.add("visible");


    }
    else{

        
        if(label.classList.contains('visible')){
            label.classList.remove('visible');
        }


        var localStorageValue = localStorage.getItem("list");
        if(localStorageValue==null){
            var arr = [];
        }
        else{
            arr = JSON.parse(localStorageValue);
        }
        // checking whether the mail id is in the list or not
        if(arr.includes(mailId)){
            // alert("iruku vro");

            label.classList.add('visible');
            label.innerText = "You've already used this mail"        
           
        }
        else{
            arr.push(mailId);

        }
        
        localStorage.setItem("list",JSON.stringify(arr));

        input.value = "";
    }

    }


    
}
