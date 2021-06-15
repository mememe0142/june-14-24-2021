this.model = "Ferrari";

let car = {
    model: "BMW",
    drive: function() {
        console.log("Driving " + this.model);
    },
    applyBrakes: () => {
        console.log("Applying brakes on " + this.model);
    }
};

car.drive();//gets executed in car's context
car.applyBrakes(); //gets executed in the context of the caller