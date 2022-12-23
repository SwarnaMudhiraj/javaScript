
         
let ary = [1, 6,  7, 1, 3, 2, 4, 5, 4];
 const sorting = ary.reduce((a, b) => {
     let obj = a.find((x) => x === b);
     if (obj) { return a; }
     return a.concat([b])

    }
, [])
let removedup = JSON.stringify(sorting)
console.log(removedup)
console.log(typeof (removedup));
let toArr = removedup.split("")
console.log(toArr)

// // // .sort
let sort = toArr.sort((g, h) =>  g > h ? 1 : -1);
console.log(sort)