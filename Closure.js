//closure
    //inner(child) scope la outre(parent) scope ko access garna pauxa
   // kunaii pani variable private gara ra used gana xa vana-used closure class ko syntax used na gari kana browser ma private gana xa vana

//    const parent = () => {
//     let x = parent;
//      const child = () => {
//         console.log(x);
//      };
// return child;


//    };
    const inner = "parent";
    inner();

   //counter increment and decrement, so

   //increment
// const counter = ()={
//     let count = 0;

//     const increment = ()=>{
//     count++;
//     console.log(count);
//     };
// return inner;
//};

return increment;
const counter = counter();
const counter1 =counter();




//decrement
const counter = ()={
    let count = 0;

    const decrement = ()=>{
    count--;
    console.log(count);
    };
return decrement;
};

//get count
const getcount = () =>{
    console.log(counter);
    return count;
};

return {
increment:increment,
decrement,
getcount,
};
};

const counter = counter(5);
const counter1 =counter();

count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
count.getcount();
 
//function factory
const add = (factor)=>{
    return (num)=>{
        return factor + num;
    };
};

const add5 = add(5);// factor{5}
const add10 = add(10); //factor{10}
console.log(add5(10));
console.log(add5(13));
console.log(add10(23));


//caching, current kun kun case ma closure use hunxa
const sum = ()=>{
    let cache = {}; 

    return (num)=>{
        if(cache[num.toString()]){
            return cache[num.toString()];
        }
            else{
                let res=0;
                console.log("calculating");
                for(let i=0; i<1000)
            }
        }
    }
}
 
//class, synchronous, asynchronous
//Account(acc_name, initial_amt)
//*deposite, withdraw,blc_inq


// const account = () => {
//      const x = acc_name;
//       const initial_amt = () => {
//          console.log(x);
//       };
//  return initial_amt;


//     };
//     const inner = "i";
//     inner();


// const account = (acc_name, initial_amt=10000)=>{
//     let name = acc_name;
//     let amount = initial_amt;

//     return{
//         deposite: ()=>{
//             if(amount>0)

//                 return;
//                 balance+= amount;
// }


//         },
//         withdraw: ()=>{

//         },
//         balance: ()=>{

//         },



//     }
// }







