const newActiveTab = (
  activeTab,
  changeActiveTab,
  header,
  phone,
  toggle,
  toggleError,
  index,
) => {
  const { value: valueReqHeader, index: idReqHeader } = header;
  const { value: valueReqPhone, index: idReqPhone } = phone;
  const tabNumber = index + 1;
  if (activeTab === idReqPhone) {
    changeActiveTab(valueReqPhone, idReqPhone, tabNumber);
  }
  if (activeTab === idReqHeader) {
    changeActiveTab(valueReqHeader, idReqHeader, tabNumber);
  }
  if (activeTab !== idReqPhone && activeTab !== idReqHeader) {
    toggle(tabNumber);
  }
  if (valueReqHeader === '' && valueReqPhone === '') {
    toggle(idReqHeader);
  }
  if (
    valueReqHeader !== '' &&
    valueReqPhone === '' &&
    tabNumber !== idReqHeader &&
    tabNumber !== idReqPhone
  ) {
    toggleError();
    toggle(idReqPhone);
  }
  return null;
};

export default newActiveTab;
