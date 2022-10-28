function f1() {
    var a = 10;
    a = 20;
    let b = 1;
    b = 2;
    const e = [1, 2, 4, 0];
    console.log(e)
    const f = { name: "swana", rno: 0 };
    console.log(f)
    console.log(f.name = "srija")
  
   // console.log(f)
    console.log(e)
   console.log(b)
    if (a > 2)
    {
        let c = 3
        c = 4
        console.log(c)
        a = 30;
        console.log(a)
    }
   // let c=c+10
   c = 20
    console.log(c)
  //var a = 20;
    console.log("inside the unction", a);
     console.log("inside the unction", a);

}
a=50
console.log(a - 10);

f1();
 // This key word
 function f2()
 {
     let t = {
         a: 10, b: "abc",
         c: function () {
             console.log(t, 'object')
             console.log(this, "this key word")
             console.log(this.a)
             
         }
     };
     t.c();
     console.log(t.a)
 }
f2();
