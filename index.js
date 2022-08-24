// Code your solution here
function findMatching(driverA,driverB){

    return driverA.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === driverB.toLowerCase()

    );

}
function fuzzyMatch(driverA,driverC){
    return driverA.filter(
    (possibleMatch) =>possibleMatch.toLowerCase().indexOf (driverC.toLowerCase()) ===0 
    );
}
function matchName(driverA,driverB){
return driverA.filter((record) => record.name === driverB);
}