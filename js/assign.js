// A CLUB WINNER CALCULATOR FUNCTION
const sortClubs = [{
    clubName: "Arsenal",
    numberOfWins: 20
},
{
    clubName: "Chelsea",
    numberOfWins: 60
},
{
    clubName: "Leeds",
    numberOfWins: 35
},
{
    clubName: "Manchester United",
    numberOfWins: 24
},
];

let sortAscending = sortClubs.sort( (a, b)=> {
    if (a.numberOfWins < b.numberOfWins) return -1; 
    if (a.numberOfWins > b.numberOfWins) return 1;
     return 0;
})

let sortDescending = sortAscending.reverse()

 getFields = (input, field) => {
    let output = [];
    for (let i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

let result = getFields(sortDescending, "clubName");

// for (let i = 0; i < result.length; i++) {
//     console.log(`${result[i]} came out ${i+1} position`)  
// }



// NAMES OF STUDENTS IN PHARMACY UNIPORT

const studentNames = ["Peace", "Philip", "Justice", "Vera", "Sophie", "Faith", "David", "Olakojo", "Eben" ]

const sortStudents = studentNames.sort( (a, b)=> {
    if (a < b) return -1; 
    if (a > b) return 1;
     return 0;
})

// for (let i = 0; i < studentNames.length; i++) {
//     console.log(`${studentNames[i]} is a Uniport Pharmacy student`)  
// }    


// AREA OF A CIRCLE
const calculateArea = (myRadius) => {
    return (myRadius * myRadius * Math.PI);
  }
  
  console.log(calculateArea(5))