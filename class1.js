class Car{
constructor(name, brand){
    this.name=name;
    this.brand=brand;

}

}
var car1= new Car("ford", "mustang");
var car2= new Car("Toyota", "corolla");
console.log("This is a " + car1.name  + car1.brand )

console.log("The " + car2.name +" is a " + car2.brand)
