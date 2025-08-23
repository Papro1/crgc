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
    workshops, setWorkshops,
    selectedWorkshops, setSelectedWorkshops,
    days, setDays,
    participants, setParticipants,
    submissions, setSubmissions,
    contacts, setContacts
  } =  useGlobal()
  //server request
    useEffect(() => {
      axios.get("http://192.168.43.95:8000/api/day/")
        .then(resp => setDays(resp.data))
        .catch(err => console.error(err))

      axios.get("http://192.168.43.95:8000/api/workshop/")
        .then(resp => setWorkshops(resp.data))
        .catch(err => console.error(err))

      axios.get("http://192.168.43.95:8000/api/participant/")
        .then(resp => setParticipants(resp.data))
        .catch(err => console.error(err))

      axios.get("http://192.168.43.95:8000/api/submission/")
        .then(resp => setSubmissions(resp.data))
        .catch(err => console.error(err))

      axios.get("http://192.168.43.95:8000/api/contact/")
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
