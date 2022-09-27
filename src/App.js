import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateEvent/>}/>
          <Route exact path="/event" element={<EventDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
