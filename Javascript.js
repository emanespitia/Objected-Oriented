class car 
{
    //setting name, model, year, and price of car
    constructor(name, model, year, price) 
    {
        this.name = name
        this.model = model
        this.year = year
        this.price = price
    }

    //calculates the price of vehicles with depreciation
    calculatedPrice() 
    {
        let dp = this.price - 500*(2024 - this.year)
        if (dp <= 0) 
        {
            return 0
        }
        else 
        {
            return dp
        }
    }
}

class carManager 
{
    //create the array for cars
    constructor()
    {
        this.cars=[]
    }

    //add car to array/inventory and to list
    addCar(car)
    {
        this.cars.push(car)
        this.displayCars()
    }

    //uses a loop in order to go through array and display vehicles
    displayCars()
    {
        const list = document.getElementById('list')
        list.innerHTML=''
        //loop for all the car information to be displayed
        this.cars.forEach(car =>{
            const li = document.createElement('li')
            li.textContent = (`${car.name} ${car.model} ${car.year} $${car.price}`)
            list.appendChild(li)
        })

    }

    //display total price of all cars
    showTotalPrice()
    {
        let sum = this.cars.reduce((total,car) => total + car.calculatedPrice(),0)
        return sum;
    }
}

//begin initializations
const carManager1 = new carManager()

//listener for when user clicks submit
document.getElementById('carSystem').addEventListener('submit', function(event){
    event.preventDefault()
    //getting data from form and sending it to car then reseting form
    const name = document.getElementById('name').value
    const model = document.getElementById('model').value
    const year = parseInt(document.getElementById('year').value)
    const price = parseFloat(document.getElementById('price').value)

    const car1 = new car(name, model, year, price)

    carManager1.addCar(car1)

    document.getElementById('carSystem').reset()
})

//event listener for button to display the total price of vehicles
document.getElementById('total').addEventListener('click', function(){
    alert(carManager1.showTotalPrice())
})