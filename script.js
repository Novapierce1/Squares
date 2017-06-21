document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement("button");
    button.innerHTML = "push me";
    button.className = 'button';
    button.style.width = '50px';
    button.style.height = '50px';
    var counter = 0;
    document.body.appendChild(button);

    button.addEventListener ("click", function() {
        var div = document.createElement('div');
        div.id = (counter++);
        div.className = "colorblock";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.margin = "5px";
        div.style.padding = "5px";
        div.style.backgroundColor = "Black";
        div.style.color = "white";

        div.addEventListener ("mouseover", function () {
            div.innerText = (div.id);
        });

        div.addEventListener ("mouseleave", function(){
            div.innerText = "";
        });

        div.addEventListener('click', function(){
            div.style.backgroundColor = randomColor();
        });

        div.addEventListener ("dblclick", function(){
            console.log(div.previousSibling);
            if (div.id % 2 == 0 && div.nextSibling !== null){
                div.nextSibling.remove();    
            } else if (div.id % 2 == 1 && div.previousSibling !== button){
                div.previousSibling.remove();
            } else {
                alert('Element does not exist');
            }
        });

        document.body.appendChild(div);
    });

    function randomColor() {
        var randomRed = Math.floor(Math.random() * 350);
        var randomGreen = Math.floor(Math.random() * 350);
        var randomBlue = Math.floor(Math.random() * 350);
        var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
        return randomColor;
    };
});
