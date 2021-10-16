const newActiveTab = (
  activeTab,
  changeActiveTab,
  {
    current: {
      props: { value: valueReqHeader, index: idReqHeader },
    },
  },
  {
    current: {
      props: { value: valueReqPhone, index: idReqPhone },
    },
  },
  toggle,
  toggleError,
  index,
) => {
  const tab = index + 1;
  if (activeTab === idReqPhone) {
    changeActiveTab(valueReqPhone, idReqPhone, tab);
  }
  if (activeTab === idReqHeader) {
    changeActiveTab(valueReqHeader, idReqHeader, tab);
  }
  if (activeTab !== idReqPhone && activeTab !== idReqHeader) {
    toggle(tab);
  }
  if (valueReqHeader === '' && valueReqPhone === '') {
    toggle(idReqHeader);
  }
  if (
    valueReqHeader !== '' &&
    valueReqPhone === '' &&
    tab !== idReqHeader &&
    tab !== idReqPhone
  ) {
    toggleError();
    toggle(idReqPhone);
  }
  return null;
};

export default newActiveTab;
