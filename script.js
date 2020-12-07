jQuery(document).ready(function($){
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
       if(colorE < 3 && colorE >= 0){
          $("#eyesId img").attr("src", eyesArray[colorE]);
          colorE++;
       }
       else{
        colorE = 0; 
        changeEye();
       }
    }

    /////////////////
    var colorN = 0;
    function changeNose(){
       if(colorN < 2 && colorN >= 0){
          $("#noseId img").attr("src", noseArray[colorN]);
          colorN++;
       }
       else{
        colorN = 0; 
        changeNose();
       }
    }

    ////////////////
    var colorL = 0;
    function changeLips(){
       if(colorL < 3 && colorL >= 0){
          $("#lipsId img").attr("src", lipsArray[colorL]);
          colorL++;
       }
       else{
        colorL = 0; 
        changeLips();
       }
    }

    ////////////////
    var colorP = 0;
    function changePupils(){
       if(colorP < 4 && colorP >= 0){
          $("#colorId img").attr("src", colorArray[colorP]);
          colorP++;
       }
       else{
        colorP = 0; 
        changePupils();
       }
    }

     ////////////////
     var colorH = 0;
     function changeHair(){
        if(colorH < 4 && colorH >= 0){
           $("#hairId img").attr("src", hairArray[colorH]);
           colorH++;
        }
        else{
         colorH = 0; 
         changeHair();
        }
     }

      ////////////////
      var colorT = 0;
      function changeTop(){
         if(colorT < 4 && colorT >= 0){
            $("#topId img").attr("src", topArray[colorT]);
            colorT++;
         }
         else{
          colorT = 0; 
          changeTop();
         }
      }
 
       ////////////////
      var colorB = 0;
      function changeBrows(){
          if(colorB < 3 && colorB >= 0){
             $("#browsId img").attr("src", browsArray[colorB]);
             colorB++;
          }
          else{
           colorB = 0; 
           changeBrows();
          }
      }

      ////////////////
      var colorA = 0;
      function changeAccs(){
         if(colorA < 3 && colorA >= 0){
            $("#accsId img").attr("src", accsArray[colorA]);
            colorA++;
         }
         else{
          colorA = 0; 
          changeAccs();
         }
      }

      ////////////////
      var colorC = 0;
      function changeClothes(){
         if(colorC < 3 && colorC >= 0){
            $("#clothesId img").attr("src", clothesArray[colorC]);
            colorC++;
         }
         else{
          colorC = 0; 
          changeClothes();
         }
      } 
      
     
    $(".eyesButton").click(changeEye);
    $(".noseButton").click(changeNose);
    $(".lipsButton").click(changeLips);
    $(".colorButton").click(changePupils);
    $(".hairButton").click(changeHair);
    $(".topButton").click(changeTop);
    $(".browsButton").click(changeBrows);
    $(".accsButton").click(changeAccs);
    $(".clothesButton").click(changeClothes);
    }
);