let obj = JSON.stringify('{ "var1": "LJ", "var2": "University" }');
console.log(obj)
console.log(obj.var1 + " " + obj.var2)
//-------------------object------------------//
let person = {
    name: "FSD",
    age: 20,
    city: "ahemdabad"
}

person.age = 15; //first way to change the value of object
person['city'] = "surat"//second way to change the value of object
let key = "name"
person[key] = "PYTHON"//third way to change the value of object
person.marks = 15 //inserting new key value pair in object
console.log(person)
console.log(person.marks)

