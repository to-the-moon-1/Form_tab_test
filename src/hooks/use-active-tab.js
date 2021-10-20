import { useState } from 'react';

const useActiveTab = (initialActiveTab = 1) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const nextTab = () => setActiveTab(activeTab + 1);
  const prevTab = () => setActiveTab(activeTab - 1);

  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return {
    activeTab,
    nextTab,
    prevTab,
    toggleTab,
  };
};

export default useActiveTab;
