import "./styles/App.css";
import "./styles/Variables.css";
import "./styles/CommonStyles.css";
import NavigationBar from "./components/layout/navbar/NavigationBar";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import DatabaseResponse from "./utils/DatabaseResponse";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(undefined);

  useEffect(function () {
    setTimeout(() => {
      const response = DatabaseResponse;
      setData(response);
    }, 3000); // 3 Sekunden Ladezeit
  }, []);

  useEffect(function () {}, []);
  if (!data) return <div> Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <Content data={DatabaseResponse} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
