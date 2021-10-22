import setActiveTab from './set-active-tab';

const changeTab = (activeTab, header, phone, toggleTab, toggleError, index) => {
  const { value: valueReqHeader, index: idReqHeader } = header;
  const { value: valueReqPhone, index: idReqPhone } = phone;
  const tabNumber = index + 1;
  const baseActiveTabAttrs = {
    tabNumber,
    toggleTab,
    toggleError,
    activeTab,
  };
  if (activeTab === idReqPhone) {
    setActiveTab(valueReqPhone, idReqPhone, baseActiveTabAttrs);
  }
  if (activeTab === idReqHeader) {
    setActiveTab(valueReqHeader, idReqHeader, baseActiveTabAttrs);
  }
  if (activeTab !== idReqPhone && activeTab !== idReqHeader) {
    toggleTab(tabNumber);
  }
  if (valueReqHeader === '' && valueReqPhone === '') {
    toggleTab(idReqHeader);
  }
  if (
    valueReqHeader !== '' &&
    valueReqPhone === '' &&
    tabNumber !== idReqHeader &&
    tabNumber !== idReqPhone
  ) {
    toggleError();
    toggleTab(idReqPhone);
  }
  return null;
};

export default changeTab;
