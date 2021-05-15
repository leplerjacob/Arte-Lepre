import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
          <div className="App-header">
            <Header />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
