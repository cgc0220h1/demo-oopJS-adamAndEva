let Apple = function () {
    this.weight = 10;
    this.weightLoss = function () {
        this.weight--;
    };
    this.isEmpty = function () {
        if (this.weight === 0) {
            return true;
        }
        return false;
    };
    this.getWeight = function () {
        return this.weight;
    }
};

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.thought;
    this.isMale = function () {
        if (this.gender === "male") {
            return true;
        }
        return false;
    };
    this.setGender = function (gender) {
        return this.gender = gender;
    };
    this.setName = function (name) {
        return this.name = name;
    };
    this.setWeight = function (weight) {
        return this.weight = weight;
    };
    this.setThought = function (thought) {
        this.thought = thought;
    };
    this.checkApple = function (object) {
        if (object.getWeight() > 0) {
            return true;
        }
        return false;
    };
    this.eat = function (object) {
        if (object.weight > 0) {
            this.weight++;
            object.weight--;
        }
    };
    this.say = function () {
        return this.thought;
    };
    this.getName = function () {
        return this.name;
    };
    this.getWeight = function () {
        return this.weight;
    };
};

let adam = new Human("adam", "male", 80);
let eva = new Human("eva", "female", 60);
let apple_eva = new Apple();
let apple_adam = new Apple();
let index = 1;

function speak(name) {
    if (name === "eva") {
        eva.setThought(prompt(name + " đang nghĩ gì ?"));
        document.getElementById('eva-thought').innerText = eva.say();
    } else {
        adam.setThought(prompt(name + " đang nghĩ gì ?"));
        document.getElementById('adam-thought').innerText = adam.say();
    }
}

function eat(name) {
    if (name === "eva-tree") {
        eva.eat(apple_eva);
        if (apple_eva.weight > 0) {
            document.getElementById('eva-apple').src = "img/image-apple/apple_" + index + ".png";
            index++;
        } else {
            document.getElementById('eva-apple').src = "img/image-apple/apple_1.png";
            index = 1;
        }
    } else {
        adam.eat(apple_adam);
        if (apple_adam.weight >= 0) {
            document.getElementById('adam-apple').src = "img/image-apple/apple_" + index + ".png";
            console.log(adam.weight);
            index++;
        } else {
            document.getElementById('adam-apple').src = "img/image-apple/apple_1.png";
            index = 1;
        }
    }
}

function getHumanData(name) {
    if (name === "eva") {
        this.getName();
    }
}





