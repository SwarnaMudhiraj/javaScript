let student = {
  name: "swarna",
  rno: 19,
  branch: "eee",
  fee: 10000,
  //method is a function written iside a object
  instancefee: function () {
    return (this.fee * 10) / 100;
  },
};
console.log(student.name);
console.log(student.instancefee());
student.marks = 2.8;
student.college = "tpce";
delete student.rno;
for (let x in student) {
  console.log(x, student[x]);
}
delete student.branch;
console.log(student.branch);   
{
  console.log("Hello world");
}
