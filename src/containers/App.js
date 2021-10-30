import React from 'react';
import { TabContent } from 'reactstrap';

import tabs from '../constants/tabs-for-nav';

import getWarning from '../utilites/get-warning';
import getSection from '../utilites/get-section';
import changeTab from '../utilites/change-tab';

import useActiveTab from '../hooks/use-active-tab';
import useTextField from '../hooks/use-text-field';
import useTextReqField from '../hooks/use-text-req-field';
import useChecked from '../hooks/use-checked';
import useError from '../hooks/use-error';
import useImages from '../hooks/use-images';
import usePaidService from '../hooks/use-paid-service';

import Navigation from '../components/nav-tabs';
import Sections from '../components/sections';

import '../styles/app.css';

const initialHeader = { value: '', index: 1 };
const initialPhone = { value: '', index: 2 };

const App = () => {
  const { activeTab, nextTab, prevTab, toggleTab } = useActiveTab();
  const [header, handleChangeHeader] = useTextReqField(initialHeader);
  const [phone, handleChangePhone] = useTextReqField(initialPhone);
  const [description, handleChangeDescription] = useTextField();
  const [email, handleChangeEmail] = useTextField();
  const { checked, handleCheck, checkTitle } = useChecked();
  const { error, handleCheckErrorImg, toggleError } = useError();
  const [images, handleChangeImg] = useImages();
  const { checkPaidService, paidService, handlePaidService } = usePaidService();

  const maxCountOfImages = 5;

  const handleCheckRequiredField = param => {
    if (!param) toggleError();
    if (param.length) nextTab();
    return null;
  };

  const warning = getWarning(header.value, phone.value);

  const onChangeActiveTab = index => {
    const { value, error } = changeTab(activeTab, header, phone, index);
    if (error) toggleError();
    if (value) toggleTab(value);
  };

  const informationProps = {
    checked,
    checkTitle,
    handleChangeDescription,
    handleChangeHeader,
    handleCheck,
    handleCheckRequiredField,
    header,
  };

  const contactsProps = {
    handleChangeEmail,
    handleChangePhone,
    handleCheckRequiredField,
    phone,
    prevTab,
  };

  const photosProps = {
    error,
    handleChangeImg,
    handleCheckErrorImg,
    images,
    maxCountOfImages,
    toggleError,
    toggleTab,
    warning,
  };

  const publicationProps = {
    checkPaidService,
    checkTitle,
    description,
    email,
    handlePaidService,
    header,
    images,
    paidService,
    phone,
    toggleTab,
  };

  return (
    <div className="wrapper">
      <Navigation
        activeTab={activeTab}
        onChangeActiveTab={onChangeActiveTab}
        tabs={tabs}
      />
      <TabContent activeTab={activeTab} className="tab-card">
        <Sections
          contactsProps={contactsProps}
          getSection={getSection}
          informationProps={informationProps}
          photosProps={photosProps}
          publicationProps={publicationProps}
        />
      </TabContent>
    </div>
  );
};

export default App;
