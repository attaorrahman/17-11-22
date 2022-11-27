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