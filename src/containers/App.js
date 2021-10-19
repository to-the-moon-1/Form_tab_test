import React, { useState } from 'react';
import { TabContent } from 'reactstrap';

import Navigation from '../components/nav-tabs';
import Information from '../components/information';
import Contact from '../components/contact';
import Photo from '../components/photo';
import Publication from '../components/publication';

import '../styles/app.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [header, setHeader] = useState({ value: '', index: 1 });
  const [phone, setPhone] = useState({ value: '', index: 2 });
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [paidService, setPaidService] = useState([
    { number: 'one', checked: false },
    { number: 'two', checked: false },
    { number: 'three', checked: false },
    { number: 'four', checked: false },
    { number: 'five', checked: false },
  ]);

  const handleChangeHeader = e => {
    e.persist();
    setHeader(prevHeader => {
      return { ...prevHeader, value: e.target.value };
    });
  };

  const handleChangePhone = e => {
    e.persist();
    setPhone(prevPhone => {
      return { ...prevPhone, value: e.target.value };
    });
  };

  const handleChangeDescription = e => setDescription(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);

  const maxNumberOfImages = 5;

  const nextTab = () => setActiveTab(activeTab + 1);
  const prevTab = () => setActiveTab(activeTab - 1);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleCheck = () => setChecked(!checked);
  const handleChangeImg = imageList => setImages(imageList);
  const toggleError = () => setError(!error);

  const requiredSuccess = param => {
    if (param === '') {
      toggleError();
    }
    if (param.length > 0) {
      return nextTab();
    }
    return null;
  };

  const errorImg = errors => {
    if (!errors.maxNumber) return;
    toggleError();
  };

  const handlePaidService = ({ target: { name, checked } }) => {
    const index = paidService.findIndex(({ number }) => number === name);
    const item = paidService[index];
    const newPaidService = [...paidService];
    newPaidService[index] = { ...item, checked };

    setPaidService(newPaidService);
  };

  return (
    <div className="wrapper">
      <Navigation
        activeTab={activeTab}
        header={header}
        phone={phone}
        toggle={toggle}
        toggleError={toggleError}
      />
      <TabContent activeTab={activeTab} className="tab-card">
        <Information
          checked={checked}
          handleChangeDescription={handleChangeDescription}
          handleChangeHeader={handleChangeHeader}
          handleCheck={handleCheck}
          header={header}
          requiredSuccess={requiredSuccess}
        />
        <Contact
          handleChangeEmail={handleChangeEmail}
          handleChangePhone={handleChangePhone}
          phone={phone}
          prevTab={prevTab}
          requiredSuccess={requiredSuccess}
        />
        <Photo
          error={error}
          errorImg={errorImg}
          handleChangeImg={handleChangeImg}
          header={header}
          images={images}
          maxNumberOfImages={maxNumberOfImages}
          phone={phone}
          toggle={toggle}
          toggleError={toggleError}
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
          toggle={toggle}
        />
      </TabContent>
    </div>
  );
};

export default App;
