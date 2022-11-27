// let l1 = ["arham", "huzaifa", "aslam", "asif"];

// document.write(l1 + "<br>");

// l2 = [];

// for (let i = 0; i < l1.length; i++) {
//   l2.push(" Malik " + l1[i]);
// };

// function Hello() {
//   document.write(l2);
// };

let students = [
  {name: "Aslam", age: "29"},
  {name: "Asad", age: "20"},
  {name: "Ikram", age: "29"},
  {name: "Uzair", age: "30"},
  {name: "Khilji", age: "29"},
  {name: "Usama", age: "17"},
  {name: "Rehan", age: "18"},
  {name: "Ahmad Shayan", age: "16"},
  {name: "Asif Iqbal", age: "12"},
]
let ar=students.filter(student=>student.age<=18)
for(a=0; a<ar.length;a++){
    document.write(ar[a].name+ ar[a].age+'<br>')
}
// for(a=0;a<students.length;a++){
// filterage=students[a].age.filter(age<=7){
//   if(students[a].age <=18 )
//   document.write(students[a].age+ (students[a].name)+'<br>'); 
// }
// }
  // let userInp = prompt("Enter Student Name");
  // for(a=0;a<students.length;a++){
  //   if(students[a].age <=18 ){
  //     document.write(students[a].age+ (students[a].name)+'<br>');
  //   }
  // }

// ARRAY METHODS
// Filter, 
// let AllKids = [];

// get all the students who have less then 18 age group.