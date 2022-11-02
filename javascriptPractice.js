let s = "swarna";
console.log(s);
fs = s[1];
console.log(fs)
console.log(s.length)
fsl = s[s.length - 2]
console.log(fsl)
k = "jdjdbjdfhbh,cm,bcb"

console.log(k)
k1 = k[k.length - 3]
console.log(k1)
//mmulti dimsinal Arays
let ar = [ "a" ,1,"aaa",["a1",11,"aa1"],["a2",12,"aa2"]];
//console.log(ar[3][1])
for (let i = 0; i < ar.length; i++) {
    console .log("array ",i+1,)
      for  (let x in ar[i])
         {
           console.log(ar[i][x] )
        // for (let b in ar)
        // {
        //     console.log(ar[i][a][b])
        // }
    }
}
//Passing an array as an argument
let arr = ["value1", "value2", "valu3"]
function passarg(input)
{
    for (let a = 0; a < arr.length; a++)
    {
        console.log("passing value from array to array ",arr[a])
        }
}
passarg(arr);
//passing input vlues to function to create an array
let emtarr = [];
function passinput()
{
    for (let a = 0; a <= 10; a++)
    {
        var added = emtarr.push(a);
        console.log( " array element",added);
    }
   //   console.log(added)
}
passinput();
console.log(emtarr);
//setters an getters
const ob = {
  fname: "swarna",
  lname: "mamindla",
  rno: 19,
  id: 1,
  get fullname() {
    return  ob.fname, ob.lname;
  },
  set fullname(name) {
    const names = name.split(" ");
    this.fname = names[0];
    this.lname = names[1];
  },

  set idnumber(id) {
    this.id = id;
  },
  get idnumber() {
    return ob.id;
  },
};
ob.fullname = "swarna mudhiraj"
console.log(ob.fullname)
ob.id = (10)
console.log( ob.id)
console.log(ob)
// arrow functions
function f1( num1,num2)
{
    return num1 + num2; 
}
console.log(f1(10,2))
//  //.......arrow function will be
const f = (n1, n2) => { return n1 + n2; }

console.log(f(10, 20))
//function declaration
console.log(f3(1, 2));
 function f3( a,b)
{
     return a + b;
}
//function expression

let fun = function (nu1, nu2)
{
    return nu1 + nu2;
}
let f5 = fun(5, 8);
console.log(f5);
//call back functin calling anothre function in another function

let fun1 = function (a)
{
    console.log(a)
    a()
    console.log("fun1")
}
fun1(function ()
{
    var b = 20;
    console.log(b)
}
);
//higher order  functions
const radius = [2, 3, 4, 1];
//to find area,diameter,circumfarance 
const area = function (radius)
{
  return Math.PI * radius * radius;//pir2
}
const diameter = function (radius) {
  return 2 * radius;    //2r
}
const circumfarance = function (radius)
{
  return 2 * Math.PI * radius;//2pir
}
    //calling this function in anotherfunction
const calculate = function (radius, logic)
{
  const output = [];
  for (let i = 0; i < radius.length; i++)
  {
    output.push( logic(radius[i]));
  }
  return output;
}
console.log("area of circle for given radius", calculate(radius, area));
console.log("diameter of circle for given radius", calculate(radius, diameter));
console.log(" circumfaeranc of circle for given radius", calculate(radius, circumfarance));







// Array methods

// 1.to string()

var a = [1, 2, 3, 4, 5]
var tostring = a.toString();
console.log(tostring)
console.log(typeof (tostring))

// 2.join()

var jion1 = a.join("@")
console.log(jion1)
console.log(typeof (jion1));

//3.push
 a = [1, 2, 3, 4, 5];
var pushed = a.push(6)
console.log(pushed);
console.log(a);

// 4.pop
var poped = a.pop();
console.log(poped);
console.log(a);

//5.shift
var shifted = a.shift();
console.log(shifted);
console.log(a);

// 6.unshift
var unshifted = a.unshift(0);
console.log(unshifted);
console.log(a);

// 7. delete
var deleted = delete a[0];
console.log(deleted);
console.log(a);
let m = a.toString();
// 8.concat
var x = ["h","k","l","m"]
var concated = m.concat(x)
console.log(concated)

// 9.some

a = [1, 2, 3, 4, 5];
let somee = a.some((x) => x < 3);
console.log(somee)

// 10.every

let everyy = a.every((x) => x <0 );
console.log(everyy);

//11.array.from
let names = "swarna";
let from = Array.from(names);
console.log(from)
// 12. array.of
let off = Array.of(1,2,3,4);
console.log(off);

//13. for each
let eachh = a.forEach((x )=> console.log(x))

// 14 includes
let inc = a.includes(8)
console.log(inc)
// 15.sort
let descen = a.sort((g, h) =>  g > h ? -1 : 1);
console.log(descen)
// 16. reverse
console.log(a.reverse())
// 17.slice
console.log(a.slice(2,4))
//18. splice
a = [1, 2, 3, 4, 5, 6, 7];
console.log(a)
splicee = a.splice(4, 0, "a", 30)
console.log(splicee)


//mapping : it iterates through all the elements in an array and return output for each by tranforming each

let ary = [1, 2, 3, 4];

function double()
{
  return ary* 2;
}
let mapped = ary.map(double);

console.log(mapped)
//higherorder fntn
let mapped2 = ary.map(function (ary)
                             {
                              return ary * 2;

                              })
console.log(mapped2)
  //using arrow fnction
let arry = [2, 3, 4, 5];
let maparrow = arry.map(arry => { return arry * 2; })
document.write(maparrow);


//filtering its out the elements in an array based on condition
let arry1 = [1, 2, 3, 4, 5, 6, 7];
let filterout = arry1.filter((arry1) => arry1 % 2 === 0)
console.log(filterout);


//reduce the code it containts 2 argements 1...>current valueelement in an array and.....>oeration variable like sum,max,min etc
let arry3 = [1, 2, 3, 4, 5, 6, 7, 8]
let reduceout = arry3.reduce((maxnum, currentelement) => {
  if (currentelement > maxnum) {
    maxnum = currentelement;
  } return maxnum;
},0);
console.log(reduceout);
// create an object and find how many ages are same and print

var array1 = [{ fname: "swarna", lname: "mudhiraj", age: 21},
{ fname: "srija", lname: "njapuri", age:22},
{ fname: "sandeep", lname: "mamindla", age: 18 },
  { fname: "anusha", lname: "gouda", age:22 }]
let find = array1.reduce( function (value, currentvalue){
  if (value[currentvalue.age]) {
    value[currentvalue.age] = ++value[currentvalue.age];
  }
  else {
    value[currentvalue.age] = 1;
  }
  return value;
}, {});
console.log(" ages are", find)

//age less than 20

let age = array1.filter(array1 => array1.age < 20).map((array1) => array1.fname);
console.log(age)
  


// Hosting : using the variables or functions or mmethods before its declaration givs undefined because they are already stored in memory...but not define when not declared a variable

// Call() common operations are writen inside a 1 funcion and call with arguments when needed
let fn = {
  firstnam: "swarna", lastnam: "mudhiraj", 
}
let fn1 = {
  firstnam: "manoj", lastnam: "puppala", 
}
let fn2 = {
  firstnam: "sandeep", lastnam: "mamindla", 
}


   var fullname= function ( village,study,gender)               //can add new values as arguments //common method
  {
    console.log(this.firstnam, this.lastnam, village,study,gender);
}
    
fullname.call(fn ,"kpk","btech","girl");
fullname.call(fn1, "kpk", "degree", "boy");
fullname.apply(fn2, ["kpk", "iti", "boy"]);
//bind
let bindd = fullname.bind(fn, "kpk", "btech", "girl");//ths is not a variable its a function
bindd();



// Closures method created inside  a function to make variables tonot collected by garbage collector
var cc = 20;
let a4 = 10
function outer()
{
  const aa1 = 30;
  var aa = 10;
  function  bb()
  {
   console.log(cc,a4,aa1,aa ,aa2)
    return aa;
  }
 
  function ab()
  {
    var x = 3;
    console.log(x)
    return x;
  }
  let aa2 = 6;
  return bb() + " " + ab();
 

}
var gg=outer();
console.log(gg)
;


