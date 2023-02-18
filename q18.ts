let Countries=["USA","India","Afghanistan","Russia","China"];
console.log('["' +Countries.join('","')+'"]');
let Alphabeical =Countries.sort();
console.log("------------------alphabeical order");
console.log('["'+Alphabeical.join('","')+'"]');
console.log("----------------original order");
console.log('["' +Countries.join('","')+'"]');
Alphabeical=Alphabeical.reverse()
console.log("---------------reverse alphabeical order");
console.log('["'+Alphabeical.join('","')+'"]');
console.log("----------------original order");
console.log('["' +Countries.join('","')+'"]');
Countries=Countries.reverse()
console.log("-----------------reverse order");
console.log('["' +Countries.join('","')+'"]');
Countries=Countries.reverse()
console.log("-----------------original order");
console.log('["'+Countries.join('","')+'"]');
Countries=Countries.sort()
console.log("------------------alphabeical order");
console.log('["'+Countries.join('","')+'"]');
Countries=Countries.reverse()
console.log("-------------------reverse alphabeical order");
console.log('["'+Countries.join('","')+'"]');