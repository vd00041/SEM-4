//const { jsxs } = require("react/jsx-runtime");

// write one json string with Name, age,date property(yyyy-mm-dd) and print date in indian standard time
/*let obj = JSON.parse('{"Name": "abc", "age": 22, "dob": "1996-03-14"}');
console.log(obj);
a1 = new Date(obj.dob);
console.log(a1);*/
// write one json string with Name, age,date property(yyyy-mm-dd) and print date in indian standard time by taking on buttion
// write a json object witch contains array of 3 object each object contains name and age property and print name of all object on clicking button
//now sort an array by age in decending order. print name and age in terminal as per the sorted age
/*const student = [
    {
        name: "A",
        age: 20
    },
    {
        name: "B",
        age: 23
    },
    {
        name: "C",
        age: 21
    },
    {
        name: "D",
        age: 26
    }
]
const a = student.sort((a, b) => b.age - a.age);
for (x of a) {
    console.log(x.name + " " + x.age)
}
console.log(a)
console.log(student)
*/
// write a function last witch take array with return an onject with bleow condiction
// the first element of arry must be on object key2
//last ele of an array must be key value 
/*function FirstLast(a) {
    var temp = {}
    temp[a[0]] = a[a.length - 1];
    return temp;
}
array = ['abc', 'def', 'ghi', 'jkl'];
console.log(FirstLast(array));*/
//write a code to fatch the vault of keys and print the sentence 
//Hi! student of sem 4 of CSE branch
const a = {
    "A": "LJU",
    "B": ["CSE", "IT", "CE"],
    "C": [
        {
            'D': "hi",
            'E': ['are', 4, { 'f': ["semester", "we"] }]
        }
    ],
    "G": {
        "h1": 'student',
        'I': ['of', '!']
    },
    "J": [{ 'k': "python", 'l': 'branch' }, 'FSD-1']
}
console.log(a.C[0].D + "" + a.G.I[1] + " " + a.G.h1 + " " + a.G.I[0] + " " + a.C[0].E[2].f[0] + " " + a.C[0].E[1] + " " + a.G.I[0] + " " + a.B[0] + " " + a.J[0].l)
