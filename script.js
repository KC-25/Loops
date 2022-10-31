// console.log("Hello World");

document.write("<h1>Loops</h1>");

const ghost = ["Ghost 1","Ghost 2", "Demon Dog 1", "Demon Dog 2","The Stay-Puft Marshmallow Man"];

var i = 0;
while(ghost[i]){
    console.log(ghost[i]);
    i++;
} 

while(i<=0){
    console.log(i);
    i--;
}

for(i=0; i<=10; i=i+2){
    console.log(i);
}

for(i=1; i<=10; i=i+2-1+1){
    console.log(i);
}