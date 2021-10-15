const newActiveTab = (
  activeTab,
  changeActiveTab,
  reqHeader,
  reqPhone,
  toggle,
  toggleError,
  index,
) => {
  const valueReqPhone = reqPhone.current.props.value;
  const valueReqHeader = reqHeader.current.props.value;
  const idReqPhone = reqPhone.current.props.index;
  const idReqHeader = reqHeader.current.props.index;
  const tab = index + 1;
  if (activeTab === idReqPhone) {
    changeActiveTab(reqPhone, tab);
  }
  if (activeTab === idReqHeader) {
    changeActiveTab(reqHeader, tab);
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
