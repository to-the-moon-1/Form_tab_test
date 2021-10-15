import newActiveTab from './new-active-tab';

const changeTab = (
  activeTab,
  reqHeader,
  reqPhone,
  toggle,
  toggleError,
  index,
) => {
  const firstPage = 1;

  const changeActiveTab = (param, tab) => {
    const isRequired = param.current.props.value;
    const isRequiredIndex = param.current.props.index;
    if (isRequired === '' && tab === activeTab - 1) {
      toggle(activeTab - 1);
    }
    if (isRequired === '' && tab !== firstPage && tab !== isRequiredIndex) {
      toggleError();
    }
    if (isRequired.length > 0) {
      toggle(tab);
    }
    return null;
  };

  return newActiveTab(
    activeTab,
    changeActiveTab,
    reqHeader,
    reqPhone,
    toggle,
    toggleError,
    index,
  );
};

export default changeTab;
