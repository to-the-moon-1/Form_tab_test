import React from 'react';
import { TabContent } from 'reactstrap';

import tabs from '../constants/tabs-for-nav';

import getWarning from '../utilites/get-warning';
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
    if (param === '') toggleError();
    if (param.length > 0) nextTab();
    return null;
  };

  const warning = getWarning(header.value, phone.value);

  const onChangeActiveTab = index => {
    const { value, error } = changeTab(activeTab, header, phone, index);
    if (error) toggleError();
    if (value) toggleTab(value);
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
          checked={checked}
          checkPaidService={checkPaidService}
          checkTitle={checkTitle}
          description={description}
          email={email}
          error={error}
          handleChangeDescription={handleChangeDescription}
          handleChangeEmail={handleChangeEmail}
          handleChangeHeader={handleChangeHeader}
          handleChangeImg={handleChangeImg}
          handleChangePhone={handleChangePhone}
          handleCheck={handleCheck}
          handleCheckErrorImg={handleCheckErrorImg}
          handleCheckRequiredField={handleCheckRequiredField}
          handlePaidService={handlePaidService}
          header={header}
          images={images}
          maxCountOfImages={maxCountOfImages}
          paidService={paidService}
          phone={phone}
          prevTab={prevTab}
          toggleError={toggleError}
          toggleTab={toggleTab}
          warning={warning}
        />
      </TabContent>
    </div>
  );
};

export default App;
