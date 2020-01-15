class Controller {

    constructor(){

   

  this.Intial();
            
    }



// function start app
  Intial() {

// all the variable

let arrayLatRequest=[];
let arrayLongRequest=[];
let arrayTimeZone=[];
let arrayxttp=[];
let json;
let xhttp;
let organizeRequest;
let organizeTimeZone;
let arrayLat = []; 
let arrayLong = [];
let arrayxttpFilter;
let i;
let n = 0;


for (let i = 0; i < 100; i++) {
  arrayLat.push(Math.floor(Math.random() * 41.25) -120.9762); //random Latitude
}


for (let i = 0; i < 100; i++) {
  arrayLong.push(Math.floor(Math.random() * -31.96) + 115.84); //random Longitude
}


//Start section 5 request from the API


while(  n < 20) {

n++;
   
setTimeout(function(){   //5 seconds for another reuest


for(let i = 0; i < 5; i++){  // 5 request


let url = "https://api.sunrise-sunset.org/json?lat=" + arrayLat[i] + "&lng=" + arrayLong[i]


xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();
     

arrayLatRequest.push(arrayLat[i]);
arrayLongRequest.push(arrayLong[i]);  



    
try { //handle error
  json = JSON.parse(xhttp.responseText);
}catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}              

arrayxttp.push(json.results); // array with all the request
arrayTimeZone.push([json.results, arrayLong[i]]); // array with request for timezone
                     
}   


//delete array for more 5 resquet

arrayLat.splice(0, 5); 
arrayLong.splice(0, 5);


// organize by early sunrise

organizeRequest = arrayxttp.sort((a, b) => (a.sunrise > b.sunrise) ? 1 : -1)
organizeTimeZone = arrayTimeZone.sort((a, b) => (a[0].sunrise > b[0].sunrise) ? 1 : -1)
        

//Filter all the data with same sunrise 

arrayxttpFilter = arrayxttp.filter((element) => {
  return element.sunrise === organizeRequest[0].sunrise;
 })



//varible for Timezone funtionality

let degree = Math.trunc(organizeTimeZone[0][1])
let timeZone



//get the right timeZone
          

if (degree> 0 && degree <= 15){
   timeZone = '+1 GMT' 


}else if (degree> 15 && degree <= 30){
     timeZone = '+2 GMT'


}else if(degree> 30 && degree <= 45){
     timeZone = '+3 GMT'


}else if (degree> 45 && degree <= 60){
   timeZone = '+4 GMT'


}else if (degree> 60 && degree <= 75){
     timeZone = '+5 GMT'


}else if (degree > 75 && degree <= 90){
      timeZone = '+6 GMT'


} else if (degree > 90 && degree <= 105){
     timeZone = '+7 GMT'


}else if (degree> 105 && degree <= 120){
     timeZone = '+8 GMT'


}else if (degree> 120 && degree <= 135){
     timeZone = '+9 GMT'


}else if (degree> 135 && degree <= 150){
     timeZone = '+10 GMT'


}else if (degree> 150 && degree <= 165){
       timeZone = '+11 GMT'


}else if (degree>= -15 && degree < 0){
     timeZone = '-1 GMT'


}else if (degree>= -30 && degree < -15){
     timeZone = '-2 GMT'


}else if (degree>= -45 && degree < -30){
     timeZone = '-3 GMT' 


}else if (degree>= -60 && degree < -45){
   timeZone = '-4 GMT'


}else if (degree>= -75 && degree < -60){
   timeZone = '-5 GMT'


}else if (degree>= -90 && degree < -75){
   timeZone = '-6 GMT'
  
  
}else if (degree>= -105 && degree < -90){
   timeZone = '-7 GMT'


}else if (degree>= -120 && degree < -105){
   timeZone = '-8 GMT'


}else if (degree>= -135 && degree < -120){
   timeZone = '-9 GMT'


}else if (degree >= -150 && degree < -135){
   timeZone = '-10 GMT'


}else{
  timeZone = 'Higher tham 11, lower than -10 or 0'

}
    
document.getElementById("lat").innerHTML = "&#x23f5 The earlist sunrise is at " +organizeRequest[0].sunrise +", the day lenght in this place is " + organizeRequest[0].day_length + " hours, <br/> with the longitude "+degree+"°"+" and the timezone is: "+ timeZone;
document.getElementById("timezone").innerHTML = "&#x23f5 The latest sunrise is at " +organizeRequest[organizeRequest.length-1].sunrise +" and the day lenght in this place is " + organizeRequest[organizeRequest.length-1].day_length + " hours"
 
arrayxttpFilter.forEach( element => document.getElementById("long").innerHTML = "&#x23f5 We have more "+ (arrayxttpFilter.length - 1) +" elements with the sunrise at " +element.sunrise 
);



      
 
    }, 5000)

 

  }
       

}

}




