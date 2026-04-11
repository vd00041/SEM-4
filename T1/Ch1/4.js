var a = JSON.parse('{"name": null}');// undefined give error  at place of null
console.log(a)
//let data = ('{"name":"FSD","Date":new Date()}');
//var b = JSON.parse(data)
//console.log(b)
// QUE : From json object fatch the vaule as asked 
const c = {
    'DataStructure': [
        {
            'Name': "tree",
            'Course': 'Intro',
            'content': ['1', 'B', 'C']

        },
        {
            'Name': "tree 1",
            'Course': 'Intro',
            'content': ['1', 'B', 'C', 'D']

        }
    ],
    'xyz': [
        {
            'Name': 'grophics',
            'Topic': ['BFS', 'CDF']

        }
    ]
}
console.log(c.DataStructure[0].Name)
console.log(c.DataStructure[1].Name)
console.log(c.xyz[0].Name)
console.log(c.xyz[0].Topic)
console.log(c.xyz[0].Topic[0])
console.log(c.xyz[0].Topic[1])