//this->object
//kun chaiii contex ma call gare ra ko xa
//kunchaii object ma point garxa
//modular function- empty function
console.log (this);
mo
function a() {
   
   // console.log(this);

}
//a();  global object
//function ka define garxa
//arrow function afno this hudaiina tara object auxa ka bata vani afno parents ko access linxa
//this ma function used nagarnu
let user{
    name:"sapana",
    email:"sapanar123@gmail.com",
    getName= function(){
        console.log(user.name);
        console.log(this.name);
    },
};
user.getName();
const fn = user.getName;
fn();

//yasko this  this function xaina
// let user{
//     name:"sapana",
//     email:"sapanar123@gmail.com",
//     getName= (){
//         console.log(user.name);
//         console.log(this.name);
//     },
// };

//a ko function xaina 
// let user{
//     name:"sapana",
//     email:"sapanar123@gmail.com",
//     getName= function(){
//         const a =()=>{
//         //console.log(user.name);
//         console.log(this.name);
//     };
//     a();
//     },
// };

//
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    getName(){
         return this.name;
    }
}
const u = new user()
//{}<-this


//function object
function introduce{

}

//in interview
  //call, apply, bind  -what is this and used which method 

//call
 let user{
    name:"sapana",
    email:"sapanar123@gmail.com",
 };

 let use1{
    name:"sapana",
    email:"sapanar123@gmail.com",
 };
 function introduce(){
    console.log("Hello", this.name);
 }
 introduce.call(user);//user call
 introduce.call(user1);//user1 call
 
//apply
let user{
    name:"sapana",
    email:"sapanar123@gmail.com",
 };

 let use1{
    name:"sapana",
    email:"sapanar123@gmail.com",
 };
 function introduce(){
    console.log("Hello", this.name, age, email);
 }
 introduce.call(user, 12, sapanarg123@);//user call
 introduce.call(user1);//user1 call
 

 //bind-new function return
 let user{
    name:"sapana",
    email:"sapanar123@gmail.com",
 };

 let use1{
    name:"sapana",
    email:"sapanar123@gmail.com",
 };
 function introduce(){
    console.log("Hello", this.name, age, "email");
 }
 introduce.bind(user, 12, "sapanarg123@");//user call
 introduce.call(user1[26, "gmail"]);//user1 call

 const fn = introduce.bind(user)
 