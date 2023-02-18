let magi_n=['Shahzaib','Usman','Ahmed','Afnan'];

function show_magi(magi_n){
 for(let i=0;i<magi_n.length;i++){
  console.log(magi_n[i]);
 }
 console.log("\n\n");
}


let new_ar=[""];
function make_great(magi_n){
 for(let i=0;i<magi_n.length;i++){
  new_ar[i]=magi_n[i]+' the great magician';
 }
 for(let i=0;i<magi_n.length;i++){
  console.log(magi_n[i]);
 }

}


show_magi(magi_n);
show_magi(new_ar);