var button = document.createElement("button");
console.log(button)
button.innerHTML = "push me";
var body = document.getElementsByTagName("body")[0];
button.className = 'button';
button.style.width = '50px';
button.style.height = '50px';
var counter = 0;
var even = [2,4,6,8,0]
var odd = [1,3,5,7,9]
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
    body.appendChild(div);
div.addEventListener ("dblclick", function remove(){
        if (div.id%2==0){
            div.nextSibling.remove();    
        } else if (div.id%2==1){
            div.previousSibling.remove();
        } else ;{
            alert('Element does not exist');
        }
        console.log(div.nextElementSibling.remove);
    });
});