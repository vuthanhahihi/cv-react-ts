import { createContext, ReactNode, useState } from "react";

interface MenuContextProps {
  children: ReactNode;
}

interface MenuContextDefault {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

const menuDefault = {
  menuOpen: false,
  setMenuOpen: () => {},
};

export const MenuOpenContext = createContext<MenuContextDefault>(menuDefault);

const MenuContextProvider = ({ children }: MenuContextProps) => {
  const [menuOpen, setMenu] = useState<boolean>(menuDefault.menuOpen);

  const setMenuOpen = (menu: boolean) => setMenu(menu);

  const MenuContextDynamicData = { menuOpen, setMenuOpen };

  return (
    <MenuOpenContext.Provider value={MenuContextDynamicData}>
      {children}
    </MenuOpenContext.Provider>
  );
};

export default MenuContextProvider;
