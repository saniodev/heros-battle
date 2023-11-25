"use client"

import React, { createContext, useContext, useState } from 'react';
import ContexProps from "../interfaces/contexProps/ContexProps";

const AppContext = createContext<any>(null);

export const AppProvider: React.FC<ContexProps> = ({ children }) => {
  const [metahumans, setMetahumans] = useState<any[]>([]);
  const [selectedMetahumans, setSelectedMetahumans] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const value = {
    metahumans,
    setMetahumans,
    selectedMetahumans,
    setSelectedMetahumans,
    isModalOpen,
    setIsModalOpen,
    filter,
    setFilter,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};
