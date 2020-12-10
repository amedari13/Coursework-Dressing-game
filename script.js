jQuery(document).ready(function($){

   function changeEyeColor(){
      var colorDeg = document.getElementById("EyeColor").value; 
      forchange.style.filter = "hue-rotate(" + colorDeg +"deg)";
   }
   $(".colorChange input").on("change", changeEyeColor);

   
   function changeTopColor(){
      var colorDeg = document.getElementById("TopColor").value; 
      forchangeTop.style.filter = "hue-rotate(" + colorDeg +"deg)";
   }
   $(".colorChangeTop input").on("change", changeTopColor);


   function changeHairColor(){
      var colorDeg = document.getElementById("HairColor").value; 
      forchangeHair.style.filter = "hue-rotate(" + colorDeg +"deg)";
   }
   $(".colorChangeHair input").on("change", changeHairColor);


    //массивы с ссылками на картинки(например первый массив для глаз)
    var eyesArray = ["images/eyes1.png", "images/eyes2.png", "images/eyes3.png"];
    
    var noseArray = ["images/nose1.png", "images/nose2.png"];

    var lipsArray = ["images/lips1.png", "images/lips2.png","images/lips3.png"];

    var colorArray = ["", "images/color1.png", "images/color2.png", "images/color3.png"];

    var hairArray = ["images/hair1.png", "images/hair2.png", "images/hair3.png", ""];

    var topArray = ["images/top1.png", "images/top2.png", "images/top3.png"];

    var browsArray = ["images/brows1.png", "images/brows2.png", "images/brows3.png"];

    var accsArray = ["images/accs1.png", "images/accs2.png", ""];

    var clothesArray = ["images/clothes1.png", "images/clothes2.png", "images/clothes3.png"];
    
    
    var colorE = 0;
    function changeEye(){
      colorE++;
      if(colorE >= 3){colorE = 0;}
      $("#eyesId img").attr("src", eyesArray[colorE]);
    }

    /////////////////
    var colorN = 0;
    function changeNose(){
      colorN++; 
      if(colorN >= 2){colorN = 0;}
      $("#noseId img").attr("src", noseArray[colorN]);
    }

    ////////////////
    var colorL = 0;
    function changeLips(){
      colorL++;
      if(colorL >= 3){colorL = 0;}
      $("#lipsId img").attr("src", lipsArray[colorL]);   
      }

    ////////////////
    var colorP = 0;
    function changePupils(){
      colorP++;
      if(colorP >= 4){colorP = 0;}
      $("#colorId img").attr("src", colorArray[colorP]);
    }

     ////////////////
     var colorH = 0;
     function changeHair(){
      colorH++;
      if(colorH >= 4){colorH = 0;}
      $("#hairId img").attr("src", hairArray[colorH]);
     }

      ////////////////
      var colorT = 0;
      function changeTop(){
         colorT++;
         if(colorT >= 3){colorT = 0;}
         $("#topId img").attr("src", topArray[colorT]);
      }
 
       ////////////////
      var colorB = 0;
      function changeBrows(){
         colorB++;
         if(colorB >= 3){colorB = 0;}
         $("#browsId img").attr("src", browsArray[colorB]);    
      }

      ////////////////
      var colorA = 0;
      function changeAccs(){
         colorA++;
         if(colorA >=3){colorA = 0;}
         $("#accsId img").attr("src", accsArray[colorA]);
      }

      ////////////////
      var colorC = 0;
      function changeClothes(){
         colorC++;
         if(colorC >=3){colorC = 0;}
         $("#clothesId img").attr("src", clothesArray[colorC]);   
      } 
      
     
    $("#eyesButton").click(changeEye);
    $("#noseButton").click(changeNose);
    $("#lipsButton").click(changeLips);
    $("#colorButton").click(changePupils);
    $("#hairButton").click(changeHair);
    $("#topButton").click(changeTop);
    $("#browsButton").click(changeBrows);
    $("#accsButton").click(changeAccs);
    $("#clothesButton").click(changeClothes);
    }
);