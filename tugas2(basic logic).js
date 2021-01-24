//   if condition
const nilai = 93
if (nilai >= 78) {
    console.log("berhasil")
}

//   if/else condition 
if (nilai >= 80) {
    console.log("berhasil")
}
else {
    console.log("gagal")
}

//   else/if condition
if (nilai > 100) {
    console.log("silahkan coba lagi")
}
else if (nilai >= 90) {
    console.log("A")
}
else if (nilai >= 80) {
    console.log("B+")
}
else if (nilai >= 70) {
    console.log("B-")
}
else if (nilai >= 60) {
    console.log("C")
}
else if (nilai >= 50) {
    console.log("C-")
}
else if (nilai <= 49) {
    console.log("D")
}
else {
    console.log("silahkan coba lagi")
}

// Switch case
//input golongan darah anda (A,B,AB,O)
const b = "AB"
switch(b){
    case "A" : karakter = "kreatif"
        break
    case "B" : karakter = "berani"
        break
    case "AB" : karakter = "empati"
        break
    case "O" : karakter = "ambisius"
        break
}
console.log(b + " adalah orang yang = " + karakter);

// Perulangan for
for (let i = 0; i <=5; i++){
    console.log(i)
}

for (let a = 4; a >= 0; a--){
    console.log(a)
}

// Perulangan foreach
const days = [ "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
const  numbers = [ 1,2,3,4,5 ];

days.forEach((item, index) => {
    console.log( "array ke:", index,"=", item );
})

numbers.forEach(function(number){
    console.log(number)
})

// Repeat
for (let p = 1; p <=3; p++){
    console.log("hi".repeat(2))
}

// While
let r = 2;
while (r < 5) {
	console.log("while loop", r);
	r++;
}

// Do while
n = 1
do {
    console.log("do while loop", n)
    n++
} while (n<=5)