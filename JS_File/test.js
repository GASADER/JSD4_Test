const user = {
    firstName: 'Jo',
    lastName: 'Save',
    fullName: function () {
        console.log(`My name is ${user.firstName}${this.lastName}`);
      }
};
user.fullName()

const customerName = 'Arlif'
const age = 29
const address = 'Nonthaburi'
const customer = {
    customerName, 
    age,
    address,
    data: function showData() {
        return console.log(`ข้อมูลทั่วไป ${customer.customerName}  อายุ ${age}  จังหวัด ${address}`)        
    }
}
customer.data()

const myPC = {
    driveA: 'Game',
    driveB: 'Work',
    driveC: 'Audio',
    whatsInMyPC: function () {
      console.log(`MyPC contains ${myPC.driveA} on my driveA, ${myPC.driveB} on my diveB, and ${myPC.driveC} on my driveC`);
    }
  };
  myPC.whatsInMyPC()
  

  function IceCreamMaking(flavor, type, toppings) {
    this.type = type;
    this.flavor = flavor;
    this.toppings = toppings;
  ​
    this.make = function () {
      return `${this.flavor.charAt(0).toUpperCase()}${this.flavor.slice(1)} ${
        this.type
      } served with ${this.toppings.slice(
        0,
        toppings.length - 1
      )} and ${this.toppings.slice(-1)}. 😉`;
    };
  }
  ​
  const vanillaFlavor = new IceCreamMaking("vanilla", "gelato", [
    "almond",
    "caramel suace",
  ]);
  ​
  // console.log(vanillaFlavor.make());
  ​
  // const mintChocChip = new IceCreamMaking("Mint Chocolate Chip", "ice cream", [
  //   "choclate sauce",
  //   "hazelnut",
  //   "cherry",
  // ]);
  ​
  // console.log(mintChocChip.make());
  ​
  // const strawberryYogurt = new IceCreamMaking("strawberry", "frozen yogurt", [
  //   "strawberry",
  //   "whipped cream",
  //   "strawberry sauce",
  // ]);
  ​
  // console.log(strawberryYogurt.make());
  ​
  //
  // function showProps(obj, objName) {
  //   let result = "";
  //   for (let i in obj) {
  //     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
  //     if (obj.hasOwnProperty(i)) {
  //       result += objName + "." + i + " = " + obj[i] + "\n";
  //     }
  //   }
  //   return result;
  // }
  // console.log(showProps(vanillaFlavor, "vanillaFlavor"));
  ​
  // function showProps2(obj, objName) {
  //   let result = "";
  //   for ([key, value] of Object.entries(obj)) {
  //     if (obj.hasOwnProperty(key)) {
  //       result += objName + "." + key + " = " + value + "\n";
  //     }
  //   }
  //   return result;
  // }
  // console.log(showProps2(vanillaFlavor, "vanillaFlavor"));


  let x =''
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x +=  `${myObj.cars[i].name}` + '\n';
  for (let j in myObj.cars[i].models) {
    x += '-' + myObj.cars[i].models[j] + '\n';
  }
}
