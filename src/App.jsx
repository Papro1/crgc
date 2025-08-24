import { useEffect, useState } from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import { useGlobal } from "./GlobalContext";
import axios from "axios"
function App(){
  const {
    baseURL,
    workshops, setWorkshops,
    selectedWorkshops, setSelectedWorkshops,
    days, setDays,
    participants, setParticipants,
    submissions, setSubmissions,
    contacts, setContacts
  } =  useGlobal()
  //server request
    useEffect(() => {
      axios.get(`${baseURL}/day/`)
        .then(resp => setDays(resp.data))
        .catch(err => console.error(err))

      axios.get(`${baseURL}/workshop/`)
        .then(resp => setWorkshops(resp.data))
        .catch(err => console.error(err))

      axios.get(`${baseURL}/participant/`)
        .then(resp => setParticipants(resp.data))
        .catch(err => console.error(err))

      axios.get(`${baseURL}/submission/`)
        .then(resp => setSubmissions(resp.data))
        .catch(err => console.error(err))

      axios.get("${baseURL}/contact/")
        .then(resp => setContacts(resp.data))
        .catch(err => console.error(err))

    },[])
  return(
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
       <Footer/>
    </>
    )
}

export default App;
