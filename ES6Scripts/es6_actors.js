const academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

//Number 1
const actor187 = academyMembers.find((member) => member.memID === 187);
console.log("actor 187 is named", actor187.name);

console.log("-------------");

//Number 2
console.log("Actors eho have been in at least three films");
const actorsIn3orMore = academyMembers.filter(
  (member) => member.films.length >= 3
);
actorsIn3orMore.forEach((member) => console.log(member.name));

console.log("-------------");
console.log('Actors whose name starts with "Bob"');
const actorsBob = academyMembers.filter((member) =>
  member.name.startsWith("Bob")
);
actorsBob.forEach((member) => console.log(member.name));

console.log("-------------");

const startsWithA = (filmName) => filmName.startsWith("A");
const containsTitleThatStartsWithA = (films) => films.find(startsWithA);
const actorsA = academyMembers.filter((member) =>
  containsTitleThatStartsWithA(member.films)
);
actorsA.forEach((actor) => console.log(actor.name));
