import { Outlet } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar";
import GetMyInforContextProvider from "./contexts/GetInformationContext";
import MenuContextProvider from "./contexts/MenuContext";

function App() {
  return (
    <div className="App">
      <GetMyInforContextProvider>
        <MenuContextProvider>
          <Topbar />
          <Menu />
          <Outlet />
        </MenuContextProvider>
      </GetMyInforContextProvider>
    </div>
  );
}

export default App;
