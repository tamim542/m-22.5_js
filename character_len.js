function largeName(name){
    let teamp=name[0];
    let b=name[0].length;
    var c=name.length;
    for(let i=0;i<c;i++){
       let a= name[i].length;
        if(a>b){
            teamp=name[i];
            b=name[i].length;
        }
    }
    console.log(teamp);
   //return teamp;

}

var nam=["naim","rashed","jahid","Mahabob","tamim","mahabob"];
largeName(nam);
//console.log('large name: ',lar);