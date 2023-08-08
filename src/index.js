console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const button = document.getElementById("breed-dropdown");


let ullist = 0;

// FETCH DATA
////dog images
function dogs(){
fetch(imgUrl)
    .then(response => response.json())
    .then(data => getdogimg(data.message))//data => getdogimg(data))
};
////dog breeds
function dogbreeds(a){
  fetch(breedUrl)
  .then(response => response.json())
  .then(dogb => getdogbreeds(dogb.message,a))//data => getdogimg(data))
};


// FUNCTION FOR MANIPULATING DOM
function getdogimg(gdogs) {
 // console.log(gdogs.message);
 const main = document.getElementById('dog-image-container'); 
 let imglist = main.children.length;
 if(imglist > 0){

  main.innerHTML = "";

};
   
   gdogs.forEach(gdog => {
      const h2 = document.createElement('a');
      h2.setAttribute("href","website");
      //console.log(gdog);
      h2.innerHTML = `<img src ="${gdog}">`;//gdog.message;
      h2.setAttribute("width",150);
      h2.setAttribute("height",50 );
      main.appendChild(h2);
    }    );
     
  };



// FUNCTION FOR MANIPULATING DOM
function getdogbreeds(dbreeds,bvalue){
  const ul = document.getElementById('dog-breeds'); 
  let listlength = ul.children.length;
 
   if(listlength > 0){

   ul.innerHTML = "";

 };
 

 //console.log(dbreeds.message);
 const iterator = dbreeds;
//Object.value will provide arrays value
//Object.keys will provide the key names
 for (let key of Object.keys(iterator)){
 //console.log(key);

 if (key.charAt(0) == bvalue){
const li = document.createElement("li");
li.appendChild(document.createTextNode(key));
li.setAttribute("name",key);
ul.appendChild(li);
ullist++;
li.addEventListener("click",function(e){
  if(e.target.style.color == "Black"){
    e.target.style.color = "Red";
  }else(e.target.style.color = "black");


});
 };

 };

/* 
 document.getElementById("dog-breeds").addEventListener("click",function(e){
  if(e.target && e.target.nodeName === "li"){
    e.target.style.color = "Red";
  };


}); */


 };
 
 function alert(){ 
  dogs();
  dogbreeds(document.getElementById("breed-dropdown").value);
 

 };
 function changecolor(L){
  //alert("clicked"=L);
 }

//document.addEventListener("click", function(e){e.preventDefault(); alert(document.getElementById("breed-dropdown").value)});
document.addEventListener("change", function(e){e.preventDefault(); alert()});                                 

//dogs();
//dogbreeds("a");