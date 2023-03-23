// const names = ['John', 'David', 'Mike','Sam','Carol','Bob'];
// console.log("The names are=");
// console.log(names);
// var nameObject=names.filter(f => !['David', 'Mike','Sam','Carol'].includes(f));
// console.log("After filter=");
// console.log(nameObject);

// const demo = {
// 	Abhishek: 30,
// 	Pritam: 50,
// 	Sabbir: 40,
// 	Ram: 90
// };
// const demo1 = Object.keys(demo);
// console.log(demo1);
// document.write('Object By Key: ' + demo1);

const data = [
    {
        id: "1",
        name: "animal_image.jpg"
    },
    {
        id: "2",
        name: "fish_image.jpg"
    },
    {
        id: "3",
        name: "animal_doc.txt"
    }, {
        id: "4",
        name: "fish_doc.txt"
    },
    {
        id: "4",
        name: "flower_petals.jpg"
    },
    {
        id: "5",
        name: "plant_roots.jpg"
    },
    {
        id: "6",
        name: "human_image.jpg"
    },
]

const filtredData = data.filter(el => el.name.includes("_image.jpg"));

console.log(filtredData);

const output = filtredData.map(el => el.name);

console.log(output);