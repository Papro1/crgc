import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  //here  are all variables
  const baseURL = "http://192.168.43.95:8000/api"
  const [user, setUser] = useState(null);
  const [days, setDays] = useState([])
  const [workshops, setWorkshops] = useState([])
  const [selectedWorkshops, setSelectedWorkshops] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [contacts, setContacts] = useState([]);

  const [submission, setSubmission] = useState({
    email: "",
    author: "",
    affiliation: "",
    presenting: "",
    title: "",
    theme: "",
    keywords: "Plante, Vert",
    abstact: "",
    file_path: "",
    notes: "",
    consent: "",
    workshop: ""
  })

  return (
    <GlobalContext.Provider value={{
       baseURL,
       workshops, setWorkshops,
       selectedWorkshops, setSelectedWorkshops,
       days, setDays,
       participants, setParticipants,
       submissions, setSubmissions,
       contacts, setContacts,
       submission, setSubmission
     }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook for easier usage
export const useGlobal = () => useContext(GlobalContext);
