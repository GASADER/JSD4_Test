class UserInfo {
    constructor(firstName, lastName, email, age, weight, heigth) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._age = age;
        this._weight =  weight;
        this._heigth = heigth;
        this._fullName;
        this._bmi;
        
    }

    get firstName() {return this._firstName;}
    get lastName() {return this._lastName;}
    get email() {return this.email;}
    get birthDay() {return this._birthDay;}
    get weight() {return this._weight;}
    get heigth() {return this._heigth;}
    get age() {return this._age;}

    catFullName() {
        this._fullName = `Full name: ${this._firstName}  Last name: ${this._lastName}`;
    }

    get fullName() {
        return this._fullName;
    }

    calBMI() {
        this._bmi = Math.floor(this._weight/((this._heigth/100)**2));
    }

    get bmi() {
        return this._bmi;
    } 
}

class Trainer extends UserInfo {
    constructor(firstName, lastName, email, age, weight, heigth, level) {
       super(firstName, lastName, email, age, weight, heigth);
        this._level = level;
    }

    get level() {
        return this._level;
    }
};

   
const save = new UserInfo('savesave', 'ss', 'ss@gmail.com', 35, 75, 178);
save.catFullName();
const saveFullname = save.fullName;
console.log(saveFullname);
save.calBMI();
console.log(`your BMI: ${save.bmi}`);

const ball = new Trainer('ball', 'balball', 'bball@gmail.com', 29, 80, 175, 999);
console.log(ball.level)
ball.catFullName();
ball.calBMI();
const ballFullname = ball.fullName;
console.log(ballFullname);
console.log(`your BMI: ${ball.bmi}`);






class Users {
    constructor(obj) {
      this.email = obj.email;
      this.password = obj.password;
      this.displayName = obj.displayName;
      this.height = obj.height;
      this.weight = obj.weight;
      this.gender = obj.gender;
      this.image = obj.image;
    }
    get showEmail() {
      return this.email;
    }
    get showDisplay() {
      return this.displayName;
    }
    get showImage() {
      return this.image;
    }
  }
  
  class UserLogin extends Users {
    constructor(obj) {
      super({
        email: obj.email,
        password: obj.password,
        image: obj.email,
      });
      this.isLogin = 0;
      this.showTextResponse = "";
    }
    get checkLogin() {
      if (this.email === "user1@gmail.com" && this.password === "123456") {
        this.isLogin = 1;
      } else {
        this.isLogin = 0;
      }
      return this.isLogin;
    }
    get showLoginResponse() {
      if (!this.checkLogin) {
        return "Email or password incorrect";
      } else {
        return `Welcome ${this.showEmail}`;
      }
    }
  }
  
  const iMember = new UserLogin({
    email: "user1@gmail.com",
    password: "123456",
    image: "image.png",
  });
  console.log(iMember.showLoginResponse);







  class User {
    constructor(username, fname, lname, age) {
      this.username = username,
      this.firstName = fname,
      this.lastName = lname,
      this.age = age,
      this.activity = [],
      this.activityCount = 1
    }
    
    addActivity(val) {
      let temp = {}
      temp.name = val
      temp.activityId = this.activityCount
      temp.time = new Date()
      this.activity.push(temp) 
      this.activityCount++
    }
    
    removeActivity(id) {
      this.activity.forEach((e,idx) => {
        e.activityId === id ? this.activity.splice(idx,1) : null;
      })
    }
    
    editActivity(id, val) {
      this.activity.forEach((e,idx) => {
        e.activityId === id ? this.activity[idx].name = val : null;
      })
    }
  }
  
  const a = new User("kuku247", 'Chaiyaphon', 'Yuyod', 24)
  // console.log(a)
  a.addActivity('boxing');
  a.addActivity('running');
  a.addActivity('muay-thai');
  a.removeActivity(1)
  a.removeActivity(3)
  a.editActivity(2, "biking");
  a




//   class User {
//     constructor(username,email,gender,age,password){
//         this._username = username;
//         this._email = email;
//         this._gender = gender;
//         this._age = age;
//         this._password = password;
//     }

//     get username(){ return this._username; };
//     get email(){ return this._email; };
//     get gender(){ return this._gender; };
//     get age(){ return this._age; };

//     showInfo(){
//         return `User: ${this._username}, ${this._email}, ${this._gender}`;
//     }

//     login(password){
//         if (this._password === password){
//             return 'Login Success';
//         }else{
//             return 'Login Failure';
//         }
//     }

//     createActivityCard(name,duration,date){
//         return `Activity: ${name}, Duration: ${duration} hrs, Created: ${date}`;
//     }
// }

// class Admin extends User{
//     delete(user){
//         return `${user.username} was deleted!`;
//     }

//     showInfo(){
//         return `Admin: ${this._username}, ${this._email}, ${this._gender}`;
//     }
// }

// //Create Users
// const user1 = new User('Joe','joe@email.com','male',49,'1234');
// const user2 = new User('Billy','billy@live.com','male',23,'4321');
// const user3 = new Admin('Samanta','samanta@123.com','female',32,'xxxy');

// console.log(user1.showInfo());
// console.log(user2.showInfo());
// console.log(user3.showInfo());

// console.log(user1.login('1234'));
// console.log(user2.login('11'));

// console.log(user1.createActivityCard('Bicycling',4.5,Date()));

// console.log(user3.delete(user2));