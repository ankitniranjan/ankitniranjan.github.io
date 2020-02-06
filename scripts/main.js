let myImage = document.querySelector('img');  //for getting html element to js file

myImage.onclick = function() {  //function to perform
    // body...
    let mySrc = myImage.getAttribute('src');  //getting source/path of the image
    if (mySrc === 'images/batman.jpg') {
        myImage.setAttribute('src','images/batman2.jpg');
    }                                                          //comparing src and changing images
    else if (mySrc === 'images/batman2.jpg'){
        myImage.setAttribute('src','images/batman3.jpg');
    }else{
        myImage.setAttribute('src','images/batman.jpg');
    }
}

let myButton = document.querySelector('button');  //element selector
let myHeading = document.querySelector('h1');  //element selector

function setUserName(){
    let myname = prompt('Please enter your name');  //printing msg & getting user data
    if (!myname || myname === null) {
        setUserName();                       //error checking
    } else{                           
    localStorage.setItem('NAME',myname)  //storing user data in browser itself & giving it a name(NAME in this case) 
    myHeading.textContent = 'Batman is cool, ' + myname;  //setting text 
    }
}

if (!localStorage.getItem('NAME')) {
    setUserName();  //if user didn't give any input then show it prompt element again indefinitely 

} else{
    let storedname = localStorage.getItem('NAME');               //otherwise
    myHeading.textContent = 'Batman is cool,  ' + storedname;
  //object    //function                                         //remember every variable in js is an object 
}

myButton.onclick = function(){     //above code permanently stored data in the browser memory, it will only delete
    setUserName();                 //when the site is restated not reloaded. To make it dynamic we have to the provide
}                                  //the user a button which on pressed calls the setUserName fnc

