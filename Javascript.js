/* class car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    startEngine() {
        console.log(`The ${this.year} ${this.model}'s engine is starting`)
    }
}
const car1 = new car("Ford", "Expidition", 2003)
car1.startEngine()

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log("hello, my name is", (this.name), "and I am", (this.age), "years old.")
    }
}

const person1 = new person("Alice", 30)
person1.introduce();
*/

class book
{
    constructor(title, author, pages)
    { 
        this.title=title
        this.author=author
        this.pages=pages
    }

    getSummary()
    {
        console.log(`${this.title} by ${this.author} with ${this.pages} pages`)
    }
}

const book1= new book("life", "Amanda Drege", 500)
book1.getSummary()

/* 
car class
    name, model, year
    calculate price

    class car manager
    Constructor{}

    adding new car inventory method

    add car(name model)

    //create new car obj
    display cars method

    show total price


*/