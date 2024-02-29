function replaceImages() {
    var viewportWidth = window.innerWidth;
    var imageContainer = document.getElementById("image-container");
  
    imageContainer.innerHTML = "";
  
    var imageSrc = "";
    if (viewportWidth > 400) {
      imageSrc = "books-and-graduation-hat-obj.png";
    } else {
      imageSrc = "Graduation-hat-icon.png";
    }
  
    var newImage = document.createElement("img");
    newImage.src = imageSrc;
    imageContainer.appendChild(newImage);
  }
  
  replaceImages();
    window.addEventListener("resize", replaceImages);
  



  function replcePara(){
    var viewportWidth = window.innerWidth;
    var paracontainer=document.getElementById("para-container")

    paracontainer.innerHTML=""

    var para=""
    if(viewportWidth >400){
        para="keynote.png"
        var newpara=document.createElement("img")
    newpara.src= para
    paracontainer.appendChild(newpara)
    }
    else{
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus scelerisque amet, fermentum tellus pellentesque metus, eleifend. Ullamcorper interdum tellus turpis aliquam amet sit posuere. Ullamcorper nec risus nec at. Mauris, amet, quisque risus, tellus. Nisl, nullam sit id malesuada amet, ultrices odio. to Nunc laoreet vulputate at enim."
        var newpara=document.createElement("p")
    newpara.innerText=para
    paracontainer.appendChild(newpara)
    }

    

  }
  replcePara()
  window.addEventListener("resize",replcePara)
  



  function replaceBootcamp() {
    var viewportWidth = window.innerWidth;
    var imageContainer = document.getElementById("bootcamp");
  
    imageContainer.innerHTML = "";
  
    var imageSrc = "";
    if (viewportWidth > 400) {
      imageSrc = "Group-5.png";
    } else {
      imageSrc = "girlandboy.png";
    }
  
    var newImage = document.createElement("img");
    newImage.src = imageSrc;
    imageContainer.appendChild(newImage);
  }
  
  replaceBootcamp();
    window.addEventListener("resize", replaceBootcamp);


    function replaceGoalphin() {
        var viewportWidth = window.innerWidth;
        var imageContainer = document.getElementById("Goalphin");
      
        imageContainer.innerHTML = "";
      
        var imageSrc = "";
        if (viewportWidth > 400) {
          imageSrc = "Goalphin-text-end.png";
          
          var newImage = document.createElement("img");
        newImage.src = imageSrc;
        imageContainer.appendChild(newImage);
        } else {
          imageSrc = "";
        }
      
        
      }
      
      replaceGoalphin();
        window.addEventListener("resize", replaceGoalphin);
  