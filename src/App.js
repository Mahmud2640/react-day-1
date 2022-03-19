import "./App.css";

const number = 5555;
const family = {
  myName: "Abdullah Al Mahmud",
  father: "Abu Taher",
  mother: "Rowshon Ara Begum",
  sister: "Khadija",
  brother1: "Nur Alom",
  brother2: "Jubayer Hossen Rahat",
};
const goodPerson = { name: "Masum Ibn Youfus", job: "Spekar" };
const badPerson = { name: "Manik Hoseen", job: "Fisher" };

function App() {
  const superHeros = [
    "Spider Man",
    "Iron Man",
    "Bat Man",
    "Venom",
    "Hulk",
    "Ant Man",
    "Kobutor Man",
  ];
  const cousinName = [
    { name: "Masum Ibn Youfus", job: "Spekar" },
    { name: "Nur Alom", job: "Student" },
    { name: "Jubayer", job: "Hujur" },
  ];
  return (
    // practice part 1
    <div className="App">
      {superHeros.map((hero) => (
        <Mahmud name={hero}></Mahmud>
      ))}
      {cousinName.map((cousin) => (
        <Mahmud name={cousin.name}></Mahmud>
      ))}
      <div className="container">
        <Mahmud name="Jhankar Mahmud" youtube="Programing Hero"></Mahmud>
        <Mahmud name="Sumit Saha" youtube="Learn With Sumit"></Mahmud>
        <Mahmud name="Anisul Islam" youtube="Anisul Islam Official"></Mahmud>
        <Mahmud name="Ayman Sadik" youtube="Ayman Sadik Official"></Mahmud>
        <Cousin name="Polas" father="Ismail"></Cousin>
        <Cousin name="Masum" father="Abu Yousuf"></Cousin>
        <Cousin name="Mahmud" father="Abu Taher"></Cousin>
      </div>

      {/* practice part 2  */}
      <div className="music">
        <p>Name: {number} </p>
        <p>Name: {10000 + number} </p>
        <h1>Name: {goodPerson.name} </h1>
        <h3>Name: {goodPerson.job} </h3>
        <h1>Name: {badPerson.name} </h1>
        <h3>Name: {badPerson.job} </h3>
      </div>
      {/* practice part 3  */}
      <div className="myFamily">
        <h1>Name: {family.myName}</h1>
        <h1>Father: {family.father}</h1>
        <h1>Mother: {family.mother}</h1>
        <h1>Sister: {family.sister}</h1>
        <h1>Brother: {family.brother1}</h1>
        <h1>Brother: {family.brother2}</h1>
      </div>
    </div>
  );
}

function Mahmud(props) {
  console.log(props);
  return (
    // practice part 1
    <div className="person">
      <h1>{props.name}</h1>
      <h2>{props.youtube}</h2>
    </div>
  );
}

function Cousin(props) {
  console.log(props);
  return (
    <div className="info">
      <h1>{props.name}</h1>
      <h2>{props.father}</h2>
    </div>
  );
}

export default App;
