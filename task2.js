const facebookProfiles = [

    {

        firstName: "Akash",

        lastName: "Agarwal",

        location: "rampur",

    },

    {

        firstName: "Pritesh",

        lastName: "Kumar",

        location: "gurgaon",

    },

    {

        firstName: "Sabiha",

        lastName: "Khan",

        location: "gurgaon",

    },

    {

        firstName: "Suyash",

        lastName: "Kashyap",

        location: "alwar",

    },

    {

        firstName: "Jay",

        location: "gurgaon",

    },

];

// return the full names of the facebook users who belong to guragon

// HINT: use higher order functions and chain them

facebookProfiles.map(data => data.location).forEach((data, i) =>{
    if(data === 'gurgaon'){
        let name = facebookProfiles[i].firstName+" "+(facebookProfiles[i].lastName != undefined ? facebookProfiles[i].lastName : '');  
        console.log(name)
    }
}); 

 

// ======================================================================== //

function filterOddNumbers(num) {

    if (num % 2 === 0) {

        return true;

    } else {

        return false;

    }

}
// const evenNumbers = [1, 2, 3, 4, 5].push(6).filter(filterOddNumbers);

/**

 * Q1. without actually running this code, you need to answer whether this code will run or not along with the reason */

    // Ans : Proper array format is not defined on the Higher Order function.

/*

 Q2. now run the above code and see the result/error. 

 Analyze the difference bw your answer before and after running the code 
 
 Q2. correct the code so that method chain starts working
 
  * 
 
  */

const arr = [1, 2, 3, 4, 5, 6]; 
const evenNumbers = arr.filter(filterOddNumbers);
console.log(evenNumbers)