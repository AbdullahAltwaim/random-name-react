import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  const [resultB, setReultB] = useState("")
  const [resultA, setReultA] = useState("")
  const [showB, setShowB] = useState(false)
  const [showA, setShowA] = useState(false)
  useEffect(() => {
    generate()
  }, [showA, showB])
  const toggleShowClassB = () => {
    setShowB(!showB)
    setShowA(false)
  }
  const toggleShowClassA = () => {
    setShowA(!showA)
    setShowB(false)
  }
  const generate = () => {
    var firstnameClassB = [
      "Thamer Mashni",
      "Hussain Alghamdi",
      "Mohammed ALHARBI",
      "Raneen Alzafarani",
      "Abdulrahman Aljafar",
      "Saud Alshammari",
      "Yasmin Alghamdi",
      "Fahad Alkhayyal",
      "Anas Alhmoud",
      "Sultan alzoubi",
      "Abdullah Albagshi",
      "Shahad Alshehri",
      "Rahaf Alqhtani",
      "Nada AlOtaibi",
      "Afra allahyani",
      "Taghreed alqahtani",
      "Maryam Alraddadi",
      "Taif Eid",
      "Norah Almutairi",
      "Meshal Najdi",
      "Hanan Hakami",
      "Sara Alnasser"
      , "Hassan algadah",
      "Mutaz Alajlan",
      "Mansour Al Dundur"];
    var firstnameClassA = [
      "Reema Alyousef",
      "Rawabe alshduki",
      "Abdullah Alhaif",
      "Samirah Alhusayni",
      "Abdulaziz   Almohammadi",
      "Albandry AlQaseemi",
      "Arwa Wan La",
      "Amal Almotairi",
      "Fatimah Alqhtany",
      "Faisal Alsagri",
      "Batool Alghamdi",
      "Amal Al-Aqel",
      "Ahmed Alzubaidi",
      "Mohammed Albalawi",
      "Reham Alanazi",
      "Abdulaziz Alasmari",
      "Riyad Alghamdi",
      "Abdulrahman Bin Maneea",
      "Adel Kalu",
      "Turki Alqurashi",
      "Ahmed Almutairi",
      "Ibrahim Alobaysi",
      "Younes Alturkey",
      "Abdulmajeed Almaymuni",
      "Abdulrahman sarawiq"
    ]
    const rand_first = Math.floor(Math.random() * firstnameClassB.length);
    setReultB(firstnameClassB[rand_first])
    const rand_second = Math.floor(Math.random() * firstnameClassA.length);
    setReultA(firstnameClassA[rand_second])
  }
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">

        </div>
      </nav>
      <div className="col-md-3"></div>
      <div className="col-md-6 well">
        <h3 className="text-primary">React - Random Name Generator</h3>
        {/* <hr style="border-top:1px dotted #ccc;" /> */}
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <button className="btn btn-primary btn btn-block" onClick={toggleShowClassB}>Generate Name Class B</button>
          <button className="btn btn-primary btn btn-block" onClick={toggleShowClassA}>Generate Name Class A</button>
          {showB ? <div id="result">
            <h1>Name</h1>
            <div className="alert alert-success">{resultB}</div>
          </div> : null}
          {showA ? <div id="result">
            <h1>Name</h1>
            <div className="alert alert-success">{resultA}</div>
          </div> : null}

        </div>
      </div>
    </div>
  );
}

export default App;
