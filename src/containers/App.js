import React from 'react';
import { TabContent } from 'reactstrap';

import Navigation from '../components/nav-tabs';
import Information from '../components/information';
import Contact from '../components/contact';
import Photo from '../components/photo';
import Publication from '../components/publication';

import initialHeader from '../constants/initial-header';
import initialPhone from '../constants/initial-phone';

import useActiveTab from '../hooks/use-active-tab';
import useTextField from '../hooks/use-text-field';
import useTextReqField from '../hooks/use-text-req-field';
import useChecked from '../hooks/use-checked';
import useError from '../hooks/use-error';
import useImages from '../hooks/use-images';
import usePaidService from '../hooks/use-paid-service';

import '../styles/app.css';

const App = () => {
  const { activeTab, nextTab, prevTab, toggleTab } = useActiveTab();
  const [header, handleChangeHeader] = useTextReqField(initialHeader);
  const [phone, handleChangePhone] = useTextReqField(initialPhone);
  const [description, handleChangeDescription] = useTextField();
  const [email, handleChangeEmail] = useTextField();
  const [checked, handleCheck] = useChecked();
  const { error, handleCheckErrorImg, toggleError } = useError();
  const [images, handleChangeImg] = useImages();
  const [paidService, handlePaidService] = usePaidService();

  const maxCountOfImages = 5;

  const handleCheckRequiredField = param => {
    if (param === '') {
      return toggleError();
    }
    if (param.length > 0) {
      return nextTab();
    }
    return null;
  };

  return (
    <div className="wrapper">
      <Navigation
        activeTab={activeTab}
        header={header}
        phone={phone}
        toggleError={toggleError}
        toggleTab={toggleTab}
      />
      <TabContent activeTab={activeTab} className="tab-card">
        <Information
          checked={checked}
          handleChangeDescription={handleChangeDescription}
          handleChangeHeader={handleChangeHeader}
          handleCheck={handleCheck}
          handleCheckRequiredField={handleCheckRequiredField}
          header={header}
        />
        <Contact
          handleChangeEmail={handleChangeEmail}
          handleChangePhone={handleChangePhone}
          handleCheckRequiredField={handleCheckRequiredField}
          phone={phone}
          prevTab={prevTab}
        />
        <Photo
          error={error}
          handleChangeImg={handleChangeImg}
          handleCheckErrorImg={handleCheckErrorImg}
          header={header}
          images={images}
          maxCountOfImages={maxCountOfImages}
          phone={phone}
          toggleError={toggleError}
          toggleTab={toggleTab}
        />
        <Publication
          checked={checked}
          description={description}
          email={email}
          handlePaidService={handlePaidService}
          header={header}
          images={images}
          paidService={paidService}
          phone={phone}
          toggleTab={toggleTab}
        />
      </TabContent>
    </div>
  );
};

export default App;
