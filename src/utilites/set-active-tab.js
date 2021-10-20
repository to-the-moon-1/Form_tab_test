const firstPage = 1;

const setActiveTab = (
  isRequired,
  isRequiredIndex,
  tab,
  toggleTab,
  toggleError,
  activeTab,
) => {
  if (isRequired === '' && tab === activeTab - 1) toggleTab(activeTab - 1);
  if (isRequired === '' && tab !== firstPage && tab !== isRequiredIndex) {
    toggleError();
  }
  if (isRequired.length > 0) toggleTab(tab);
  return null;
};

export default setActiveTab;
