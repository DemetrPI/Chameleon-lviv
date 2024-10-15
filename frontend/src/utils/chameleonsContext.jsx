import React, { createContext, useContext, useState } from 'react';

const ChameleonsContext = createContext();

export const useChameleons = () => useContext(ChameleonsContext);

export const ChameleonsProvider = ({ children }) => {
  const [chameleonsVisible, setChameleonsVisible] = useState(true);

  const toggleChameleons = () => setChameleonsVisible(!chameleonsVisible);

  return (
    <ChameleonsContext.Provider value={{ chameleonsVisible, toggleChameleons }}>
      {children}
    </ChameleonsContext.Provider>
  );
};
