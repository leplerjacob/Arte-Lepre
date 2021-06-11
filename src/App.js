import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
