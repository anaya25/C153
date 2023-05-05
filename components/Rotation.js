//sea Rotation
AFRAME.registerComponent("fantasy-sea-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
  //scuba

  AFRAME.registerComponent("scuba-diver-rotation-reader" ,{
    schema:{
      speedOfRotation: {type: "number ", default: 0},
      speedofAscent : {type: "number" , default: 0}
    },
  
    init: function(){
      window.addEventListener("keydown", (e)=> {
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedofAscent = this.el.getAttribute("position");
    
      var scubarotation = this.data.speedOfRotation
      var scubaposition = this.data.speedofAscent
  
  
  
  
  
  
        if(e.key === "ArrowRight"){
          if(scubarotation.x > -10 )
          {scubarotation.x += 0.5
          this.el.setAttribute("rotation",scubarotation)}
        
        }
  
        if(e.key === "ArrowLeft"){
          if(scubarotation.x < 10 )
          {scubarotation.x -= 0.5
          this.el.setAttribute("rotation",scubarotation)}
        
        }
  
        if(e.key === "ArrowUp"){
          if(scubarotation.z < 20 )
          {scubarotation.z += 0.5
          this.el.setAttribute("rotation",scubarotation)}
         
          if(scubarotation.y < 2 )
          {scubarotation.y += 0.01
          this.el.setAttribute("rotation",scubarotation)}
  
        }
  
        if(e.key === "ArrowDown"){
          if(scubarotation.z > -10 )
          {scubarotation.z -= 0.5
          this.el.setAttribute("rotation",scubarotation)}
         
          if(scubarotation.y > -2 )
          {scubarotation.y -= 0.01
          this.el.setAttribute("rotation",scubarotation)}
  
        }
  
        
      })
    }
  })
  
  