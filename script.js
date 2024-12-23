text=document.createElement('h2')
text.innerHTML='Please Wate While Loading...'
text.style.color='gray'
container=document.getElementById('container')
img=document.getElementById('img')
container.insertBefore(text,img)
container.removeChild(img)
img2=document.getElementById('img2')
img2.style.display='none'
function getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(Position)
      
    } else {
      alert("Location is not supported in this browser")
    }
  }
  function Position(position) {
    container.insertBefore(img,text)
    container.removeChild(text)
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    console.log(latitude+','+longitude)
    url=`https://weather-proxy.freecodecamp.rocks/api/current?lon=${longitude}&lat=${latitude}`
    fetch(url)
      .then(response =>response.json())
      .then(data=>{
        temp=data.main.temp
        city=data.name
        country=data.sys.country
        desc=data.weather[0].description
        console.log(temp,city,country,desc)
        area=document.getElementById('area')
        area.innerHTML=` ${country}, ${city}`
        tempval=document.getElementById('tval')
        tempval.innerHTML=`${temp}°C`
      })
      pb=document.getElementById('pb')
      pbc=document.getElementById('pbc')
      pb.addEventListener('click',function(){
        ftemp=(temp*9/5)+32
        fftemp=parseFloat(ftemp.toFixed(3))
        console.log(ftemp)
        if(pbc.style.marginLeft=='60%'){
         tempval.innerHTML=`${temp}°C`
          pbc.style.marginLeft='0%'
        }else{
           tempval.innerHTML=`${fftemp}°F`
          pbc.style.marginLeft='60%'
          
        }
        
      })
  
   
}
getLocation()


