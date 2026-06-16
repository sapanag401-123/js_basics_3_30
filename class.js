//class - blue print(object bata banena shape) of objecct
// used -reuse the code 
//object lai initialize - constructor function
//this-point to the object
// new-constructor call vako, garako
//private garna xa vana same class vita matraii used garna sakxa

class user{
    name,
    email,
    #password;

    constructor(name, email, password){
        this.name=name;
        this.name=email;
        this.name=#password;

    }
    getpassword(){
        return this.#password;
    }

    getpassword(){
        return this.name;
    }

    getpassword(){
        return this.emailmail;
    }
}
let sapana = new user("sapana", "sapanar123@gmail.com", "123678");
let salina = new user("salina", "salinar123@gmail.com", "123679")

console.log(sapana);
console.log(sapana.name);
console.log(sapana.getpassword);
console.log(sapana)["email"];


//inheritance

class student extends user{
    faculty,
    rollno,
    batch;

    constructor(name, email, password, faculty, rollno, batch);
    super(name, email, password);
    this.faculty = faculty;
    this.rollno = rollno;
    this.batch = batch;
    //super()-parent class ko constructor ho
}

getfaculty(){
        return this.faculty;
    }

    getrollno(){
        return this.rollno;
    }

    getbatch(){
        return this.batch;
    }
    introduce(){ //polymorphisms
        console.log("This is a student class")

    }
}

let salina = new student("salina","salinar123@gmail.com", "123679", "BCA", "18", "2080")
 salina.introduce();
 sapana.introduce();


 //abstraction
 class makecoffee{
    start(){
        console.log("start");
        this.#griding();
        this.#heating();
        this.#processing();
        this.#despetch();
    }

    #griding(){
        console.log("griding");
        
    }

    #heating(){
        console.log("heating");
        
    }

    #processing(){
        console.log("processing");
        
    }

    #despetch(){
        console.log("despetch");
        
    }
 }
    //static method, getter, setter
    class circle{
        radius,
        constructor(r){
            this.radius = r;
        }
        set rad(r){
            this.radius = r;
        }
        get area(){
            return Math.PT *this.radius
        }
    }
    const c1 = new circle(10);
    console.log(c1.area);
    c1.rad