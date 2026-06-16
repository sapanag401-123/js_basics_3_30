// //array method
// //high order method take call back
// //for each 
// //value, index array->order
// let number=[2,4,5,6,7];
// let double = [];
// //arr.forEach(callBack)
// const callBack =(value, index,array)=>{
//     console.log(value,index, array);
//     double [index] = arr[index]*2;

// };
// const res number.forEach(callBack);
// number.foeEach(v,i )=>{

// console.log(res);
// console.log(number);
// console.log(double);
// }

// //map x transform to y x=>y add/remove pani garna sakyo
// //same array element return back
// const double = number.map(num)=>{
//     return num*2;
//     console.log(number);
// console.log(double);

//};
// const double = number.map(num)=> num*2);
    // const user =[
    //     {
    //     name: "Ram",
    //     email:"ram123@gmail.com"
    //     user_name:
    //     }
        
    // ];

// const name= user.map((nm)=> nm.name)
// console.log(name);

// const email= user.map((em)=>em.email)
// console.log(email);

// const user_with_user_name=user.map((user)=>{
//     //UserActivat.usear_name = user.name +
//     return {
//         ...user
//         user_name: user.name + "-" + user.email;

//     };
// });

//filter return value or number
//array return garxa naii
//arr.filter(callBacK)
// const even = numbers.filter((num)=>{
//    if (num % 2 === 0) {
//     return true;
//    }
//    else{
//     return false;
//    }

// });

// console.log(even);
// console.log(number);

// reduce->single value ma reduce garna(acc(accumulator))
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

// console.log(sum);

// const sum = number.reduce((acc, value)=>{
//     return (acc +=value);
// }, 10);
// console.log(sum);
// console.log(number);

//find->value undefine
//findindex->index, -1
//every->booplean (true or false)
//sum->boolean
//sort->
// let cart = {
//   user: 1,
//   items: [
//     {
//       product: {
//         id: 1,
//         price: 1000,
//       },
//       quantity: 10,
//     },
//     {
//       product: {
//         id: 2,
//         price: 500,
//       },
//       quantity: 4,
//     },
//     {
//       product: {
//         id: 3,
//         price: 1500,
//       },
//       quantity: 6,
//     },
//   ],
// };

// const totalprice = cart.items.reduce((total,item )=> {
//   return total + item.product.price * item.quantity;
// }, 0);
// console.log(totalprice);


//sort - as a string short
//assending and decendaning->compare garxa
//+ ->swap garna
//- ->no swap
//0 -> no swap
// forstring -> a.localcompare(b) 

// const arr = [101, 10, 20, 2, 45, 4, 67, 6]
// console.log(arr);
// arr.sort((a,b) => {
//   return a-b;

// });

// const students = [
//   {
//   name: "sapana",
//   marks: [43, 65, 78, 89],
// },
// {
//   name: "salina",
//   marks: [42, 66, 79, 90],
// },
// {
//   name: "shristi",
//   marks: [44, 67, 80, 91]
// },
// ]


//map, filter, map
// const name= students.map((nm)=> nm.name)
// console.log(name);

// const marks= students.map((msk)=> msk.marks)
// console.log(marks);

//  let a = student.map((student)=>{
//  console.log(student);
//  return {
//         ...student
//          avg_masks:0;

//          };
// });

// // reduce
// const avg_masks = student.marks.reduce((acc, marks)=> {
// return (acc+= marks);
// })
// student.marks.lemgth,
// },

// const students = [
//   {
//     name: "Ram",
//     marks: [80, 90, 70]
//   },
//   {
//     name: "Shyam",
//     marks: [50, 60, 40]
//   },
//   {
//     name: "Hari",
//     marks: [90, 95, 85]
//   }
// ];

// const calculateAvg = (arr) => {
//   return (
//     arr.reduce((acc, mark) => {
//       return acc + mark;
//     }, 0) / arr.length
//   );
// };

// const result = students
//   .map((student) => {
//     return {
//       ...student,
//       avg_marks: calculateAvg(student.marks)
//     };
//   })
//   .filter((std) => std.avg_marks <= 60)
//   .map((std) => std.name);

// console.log(result);





