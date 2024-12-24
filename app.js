
$(document).ready(function () {
  var $card = $(".card"),
    $bgCard = $(".bgCard"),
    $icon = $(".icon"),
    cartPageBottomP = document.querySelector(".cart-page-bottom p"),
    cartPageBottomH4 = document.querySelector(".cart-page-bottom h4");
    let textTitle = "Merry Christmas!";
    let charArrTitle = textTitle.split('');
let text = "Hello Tài ViVu 💙Chúc anh có một giáng sinh an lành và ấm áp.Mong rằng những mùa giáng sinh sau mình có thể ở cùng nhau 😬Nhớ lời hứa đón giao thừa cùng em nhéeee ❤️🎄"
let charArrContent = text.split('');
var currentIndexTitle = 0;
var currentIndexContent = 0;
var textIntervalTitle;
var textIntervalContent;
function resetText(){
    clearInterval(textIntervalTitle)
    clearInterval(textIntervalContent)
    cartPageBottomH4.textContent = "";
    cartPageBottomP.textContent = "";
    currentIndexTitle = 0;
    currentIndexContent = 0;
}
  $card.on("click", function () {
    $(this).toggleClass("is-opened");
    if($card.hasClass("is-opened")){
        textIntervalTitle = setInterval(function(){
            if(currentIndexTitle < charArrTitle.length){
                cartPageBottomH4.textContent += charArrTitle[currentIndexTitle];
                currentIndexTitle++;
                console.log(currentIndexTitle)
            }
            else{
                clearInterval(textIntervalTitle)
                textIntervalContent = setInterval(function(){
                    if(currentIndexContent < charArrContent.length){
                        cartPageBottomP.textContent += charArrContent[currentIndexContent];
                        currentIndexContent++;
                console.log(currentIndexContent)
                    }
                    else{
                        clearInterval(textIntervalContent)
                    }
                },100)
            }
        },100)
    }
    else{
        resetText()
    }
  });

  $(".centerer").on("click", function () {
    $card.fadeIn();
    $bgCard.fadeIn();
    $icon.fadeIn();
  });
  $(".fa-xmark").on("click", function () {
    $card.fadeOut();
    $bgCard.fadeOut();
    $icon.fadeOut();
    $card.removeClass("is-opened");
    resetText()
  });

});
