const firstPage = 1;

const setActiveTab = (
  isRequired,
  isRequiredIndex,
  { tabNumber, toggleTab, toggleError, activeTab },
) => {
  if (isRequired === '' && tabNumber === activeTab - 1) {
    toggleTab(activeTab - 1);
  }
  if (
    isRequired === '' &&
    tabNumber !== firstPage &&
    tabNumber !== isRequiredIndex
  ) {
    toggleError();
  }
  if (isRequired.length > 0) toggleTab(tabNumber);
  return null;
};

export default setActiveTab;
