//map,filter,reduce.

const nums=[3,12,7,9]

const mapNums=nums.map((n,i,ar)=>n*i)
console.log(mapNums);


const filterNums=nums.filter((san)=>san>5)
console.log(filterNums);

const reduceNums=nums.reduce((n,total)=>n*total,1)
console.log(reduceNums);




