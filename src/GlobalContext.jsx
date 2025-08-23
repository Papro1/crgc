import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [days, setDays] = useState([])
  const [workshops, setWorkshops] = useState([])
  const [selectedWorkshops, setSelectedWorkshops] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [contacts, setContacts] = useState([]);
  return (
    <GlobalContext.Provider value={{
       workshops, setWorkshops,
       selectedWorkshops, setSelectedWorkshops,
       days, setDays,
       participants, setParticipants,
       submissions, setSubmissions,
       contacts, setContacts
     }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook for easier usage
export const useGlobal = () => useContext(GlobalContext);
