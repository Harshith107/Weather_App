const apiKey="22f98f2feff30bb3f7988a1dc02d9e66";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
        
    async function checkWeather(city){
            const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
            
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                var info= await response.json();
            
           document.querySelector(".city").innerHTML=info.name;
           document.querySelector(".temp").innerHTML=(info.main.temp) +"°C";
           document.querySelector(".humidity").innerHTML=info.main.humidity+"%";
           document.querySelector(".wind").innerHTML=info.wind.speed+" Km/h";
        
           if(info.weather[0].main=="Clouds"){
               weatherIcon.src="images/clouds.png";
           }
           else if(info.weather[0].main=="Rain"){
               weatherIcon.src="images/rain.png";
           }
           else if(info.weather[0].main=="Clear"){
               weatherIcon.src="images/clear.png";
           }
           else if(info.weather[0].main=="Drizzle"){
               weatherIcon.src="images/drizzle.png";
           }
           else if(info.weather[0].main=="Snow"){
               weatherIcon.src="images/snow.png";
           }
        
           document.querySelector(".weather").style.display="block"; 
           document.querySelector(".error").style.display="none";
               }
            
            
        
        }
         
         searchButton.addEventListener("click",()=>{
            checkWeather(searchBox.value);
         });

          searchBox.addEventListener("keypress", (event) => {
             if (event.key==='Enter') {
                checkWeather(searchBox.value);
             }
            });