// src/App.js
import React, { useEffect } from "react";
import AppRouter from "./routes/AppRouter";

function App() {
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5000/api/appointments");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return <AppRouter />;
}

export default App;
