//Step 1
//
//var ANIMAL = ANIMAL || {};
//
//var Dog = new ANIMAL();
//
//var Cat = new ANIMAL();


//Step 2

//var Cat = function () {};
//
//function Dog() {};
//
////Step 3
//
//var pitBull = new Dog();


//Step 4


//function Animal() {
//	window.console.log("The animal has been created.");
//}


//Step 5


//function Animal(message) {
//	window.console.log("The animal " + message + " has been created.");
//}



//Step 6

//function Animal(type, breed, color, height, length) {
//	this.type = type;
//	this.breed = breed;
//	this.color = color;
//	this.height = height;
//	this.length = length;
//	
//}
//
////Step 7
//	
////var Dog = new Animal();
////for (var property in Dog){
////	window.console.log(property);
////
////}
//
//
//
//
////Step 8
//
//var Dog = new Animal();
//var Cat = new Animal();
//Animal.prototype.speak = function() {
//	if (this.type == "Dog"){
//		window.console.log("The Dog is barking!");
//	} else if (this.type == "Cat"){
//		window.console.log("The cat is meowing!");
//	}
//}; 
//
//var myCat = new Animal("Cat", "breed", "color", "height", "length");
//
//window.console.log(myCat.speak());





//Step 9

//function Animal(type, breed, color, height, length) {
//	var _type = type;
//	var _breed = breed;
//	var _color = color;
//	var _height = height;
//	var _length = length;
//	var checkType = {
//		if (_type === "dog"){
//			return "dog"
//		}else{
//		return "cat"
//	}
//		
//	};
//	this.speak = {
//		if (checkType == "dog"){
//			window.console.log("The Dog has made a noise!");
//		} else if (checkType == "cat"){
//		window.console.log("The Cat has made a noise!");
//	}
//	};
//}
//
//var myDog = new Animal("dog", "breed", "color", "height", "length");
//window.console.log(myDog.speak());



//Step 10

//String.prototype.findWords = function (text, word) {
//	text = text.split(" ");
//	
//	var i = 0, x = 0;
//	for (i in text){
//		if (text[i] == word){
//			x++;
//		}else{
//			continue;
//		}
//	}
//	alert(x);
//};
//
//
//var y = new String();
//y.findWords("The quick brown fox jumps over the lazy dog dog dog", "dog");






//########The Recipe Card #########


//var recipe = function(title, servings, ingredients){
//this.title = title;
//this.servings = servings;
//this.ingredients = ingredients;
//
//this.print = function() {
//	var newIngredients = "";
//	for (var i = 0; i < this.ingredients.length; i++){
//		newIngredients = newIngredients + ingredients[i] + "\n";
//	}
//	
//	console.log(title + "\nServes: " + servings + "\n" + "Ingredients:\n"+ newIngredients);
//}
//}
//var ingredients = ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"];
//
//
//
//var myRecipe = new recipe("Guacamole", "4", ingredients);
//
//
//myRecipe.print();




//########## The Reading List  #######



var Book = function(title, author, alreadyRead) {
    this._title = title;
    this._author = author;
    this._alreadyRead = alreadyRead;
};
var hobbit = new Book("The Hobbit", "J.R.R. Tolkien", false);

var mockingbird = new Book("To Kill a Mockingbird", "Harper Lee", true);

var tippingPoint = new Book("The Tipping Point", "Malcolm Gladwell", true);

var blink = new Book("Blink", "Malcolm Gladwell", true);

var hunger = new Book("The Hunger Games", "Suzanne Collins", false);

var myBooks = [hobbit, mockingbird, tippingPoint, blink, hunger];

for (var i in myBooks) {    
    if (myBooks[i]._alreadyRead == true) {
        console.log('You already read "' + myBooks[i]._title + '" by ' + myBooks[i]._author)
    } else if (myBooks[i]._alreadyRead == false) {
        console.log('You still need to read "' + myBooks[i]._title + '" by ' + myBooks[i]._author);
    } 
};



























