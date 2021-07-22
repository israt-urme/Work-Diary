import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

import "./App.css";
import CustomLayout from "./containers/NavDrawer";

function App() {
  
  return (
    <div>
      <Router>
        <CustomLayout>
          <BaseRouter/>
        </CustomLayout>
      </Router>
    </div>
    
  );
}

export default App;
