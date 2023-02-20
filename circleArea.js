const args = process.argv.slice(2);

function circleArea(radius){
    return 3.14*radius*radius;
}

console.log(circleArea(args[0]*1)+" is the area of the circle that have "+ args[0]+" radius.");
