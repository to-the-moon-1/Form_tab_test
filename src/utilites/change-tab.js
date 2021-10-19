import setActiveTab from './set-active-tab';

const changeTab = (activeTab, header, phone, toggle, toggleError, index) => {
  const firstPage = 1;

  const changeActiveTab = (isRequired, isRequiredIndex, tab) => {
    if (isRequired === '' && tab === activeTab - 1) toggle(activeTab - 1);
    if (isRequired === '' && tab !== firstPage && tab !== isRequiredIndex) {
      toggleError();
    }
    if (isRequired.length > 0) toggle(tab);
    return null;
  };

  return setActiveTab(
    activeTab,
    changeActiveTab,
    header,
    phone,
    toggle,
    toggleError,
    index,
  );
};

export default changeTab;
