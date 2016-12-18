/*
Add the following to your previous work:
- Add a second list to the html page, do not add elements to it.
- Create a second button.
- When the second button is pressed, the new list should have an item added that contains the next fibonacci number.
- For the mathematically inclined, you could add more lists that generate other numeric sequences if you like.
*/

var list = document.getElementsByTagName("li");
var thelist = document.getElementById("thelist");
var btn = document.getElementById("b");
var fibobtn = document.getElementById("f");
var fibolist = document.getElementById("fibolist");
var fibonum = document.getElementsByClassName("fol")

// When the button is pushed, add an element to the list
var add = function() {
    var newElement = document.createElement("li");
    newElement.innerHTML = "New element";
    thelist.appendChild(newElement);
}

// When the mouse goes over an item in the list, change the heading at the top to contain the text of the item
var changeHeading = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = this.innerHTML;
};

// When the mouse is no longer over an item in the list, change the heading back to "Hello World!"
var revertHeading = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = "Hello World!";
};

// When an item on the list is clicked, remove it from the DOM
var rm = function() {
    this.remove();
};

// To generate the next fibonacci number
var fibo = function(e) {
    var first = 1;
    var second = 1;
    for (var i = 0; i < e; i++) {
	var temp = second;
	second = first + second;
	first = temp;
    }
    return first;
}

// When the fibo button is push, add a new fibonacci term
var fiboadd = function() {
    var newFibo = document.createElement("li");
    newFibo.className = "fol"
    newFibo.innerHTML = fibo(fibonum.length);
    fibolist.appendChild(newFibo);
}

for (var x = 0; x < list.length; x++) {
    list[x].addEventListener("mouseover", changeHeading);
    list[x].addEventListener("mouseout", revertHeading);
    list[x].addEventListener("click", rm);
}

btn.addEventListener("click", add);
fibobtn.addEventListener("click", fiboadd);