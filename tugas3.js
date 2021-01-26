for (let i = 1; i <=20; i++){
    if (i === 1) {
        console.log(i + " mulai loop")
    }
    else if ( i === 10) {
        console.log(i, "pertengahan loop")
    }
    else if ( i === 20) {
        console.log(i, "akhir loop")
    }
    else {
        console.log(i)
    }
}


const a = "belajar";
const b = "bermain";

function kegiatan(param = "") {
    switch(param){
        case "belajar" : {
            return "Saya sedang belajar logic JS";
            break;
        }
        case "bermain" : {return "Saya sedang memainkan logic JS"
            break;
        }
        default : return "Saya sedang mencari kegiatan"
    }
}
console.log(kegiatan(a))
