// Restaurant
// in the restaurant ,there are two section here one is Kitchen area and Eatting area 
// in the Kitchen area ->cooking and implementing the order: 
// Eatting area -> serving customer , cleaning tables ,taking orders ,welcoming customers ,billing customers etc

let Is_restaurantOpen = true; //check if open / closed

// this promise function  is to move out and ask customers the choice  back to chichent

let AdditionalFruils =()=>{
    return new Promise( (reslove ,reject)=>{
        if(Is_restaurantOpen){
            setTimeout(()=>{
                reslove(console.log(`What Do you want to Add on your Ordered Food`))
            },3000)
        }else{
            reject(console.log(`Restaurant is closed Now`))
        }
    })
}

// in the kichen area  | one chef operates it  mean if the chef is into in the kichen also the  kichen work is on pause untill he cames back to resume the work  and below is the function containing the work of the chef while in  the kichen

async function kichen(){
    console.log("Starting the fire")
    console.log("Setting up the dished ")
    console.log("cooking the order choice for the customer")
    await AdditionalFruils();//here the code will stop for 3s to ask the customer what he wants
    console.log("packaging for customer ")
    console.log("putting on the tray and move to customer")
}
// invoking the kitchen function 
kichen();
// below these are other activities going on in the restaurant
console.log(`serving other  customer who made order  first`)
console.log(`cleaning the  table of the customers  `)
console.log(`taking order of other customers  `)
console.log(`Welcoming  other new  customers  `)
console.log(`Billing of aready served customers  `)
