var button = document.createElement("button");
button.innerHTML = "push me";
var body = document.getElementsByTagName("body")[0];
button.className = 'button';
button.style.width = '50px';
button.style.height = '50px';
var counter = 0;
body.appendChild(button);
button.addEventListener ("click", function() {
    var div = document.createElement('div');
    div.id = (counter++);
    div.className = "colorblock";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.margin = "5px";
    div.style.padding = "5px";
    div.style.backgroundColor = "Black";
        div.addEventListener ("mouseover", function () {
            div.innerText = (div.id);
        });
        div.addEventListener ("mouseleave", function(){
            div.innerText = "";
        });
    div.style.color = "white";
    div.addEventListener('click', function(){
    div.style.backgroundColor = randomColor();
    
    function randomColor() {
        var randomRed = Math.floor(Math.random() * 350);
        var randomGreen = Math.floor(Math.random() * 350);
        var randomBlue = Math.floor(Math.random() * 350);
        var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
        return randomColor;
        };
});
    div.addEventListener ("doubleclick", function (){
        if (counter = 2,4,6,8,0){
            document.removeChild(div.id[counter+1])
        } else if (counter =1,3,5,7,9) {
            document.removeChild(div.id[counter-1])
        } else {
            alert.log("element does not exist")
        };
    });
    body.appendChild(div);

});

