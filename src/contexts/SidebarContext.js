import React, {createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
      <SidebarContext.Provider value={{activeNav, setActiveNav}}>
          {children}
      </SidebarContext.Provider>
  );
};

export const useSideBar = () => useContext(SidebarContext);