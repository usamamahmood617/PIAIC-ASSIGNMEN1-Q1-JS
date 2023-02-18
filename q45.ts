function manufactur_car(Manufacturers,Models,...options){
 let car_object={
  'Manufacturer':Manufacturers,
  'Model':Models,
 }
 options.forEach((option)=>{
  let [key,value]=option;
  car_object[key]=value;
 });
 return car_object
}
console.log(manufactur_car('Toyota','Corolla',['Color','Red'],['Sun Roof','Yes']));