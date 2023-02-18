let ages=[];
if(ages.length>0){
 for(let i=0;i<ages.length;i++){
  if(ages[i]<2){
   console.log("you is baby");
  }
  if(ages[i]>=2&&ages[i]<4){
   console.log("you are toddler");
  }
  if(ages[i]>=4&&ages[i]<13){
   console.log("you are ages kid");
  }
  if(ages[i]>=13&&ages[i]<20){
   console.log("you are teenager");
  }
  if(ages[i]>=20&&ages[i]<65){
   console.log("you are an adult");
  }
  if(ages[i]>=65){
   console.log("you are an elder person");
 }
}
}
else{
 console.log("no user is registered to check the age");
} 


