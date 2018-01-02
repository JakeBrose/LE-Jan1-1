//make a for loop, .forEach, and .filter on this array to get the same result.
//Make an array called fav_demo that cantains only ages from 18-49.

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
document.getElementById("printHere");
let fav_demo = []

for (let i = 0; i < ages.length; i++) {
    if (ages < 50 && ages > 17) fav_demo.push(ages[i])   
}

ages.forEach((ages) => {
    if (ages < 50 && ages > 17) fav_demo.push(ages[i])
});

let fav_demographic = ages.filter((age) => age < 50 && age > 17 )
