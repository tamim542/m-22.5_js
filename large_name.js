function largeName(name){
    let teamp=name[0];
    for(let i=0;i<=name.length;i++){
        if(name[i]>name[0]){
            teamp=name[i];
        }
    }
    return teamp;

}

var nam=["naim","rashed","jahid","Mahabob","tamim","mahabob"];
var lar=largeName(nam);
console.log('large name: ',lar);