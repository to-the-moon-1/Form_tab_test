import React, { useState, useRef } from 'react';
import { TabContent } from 'reactstrap';
import Navigation from './nav-tabs';
import Information from './information';
import Contact from './contact';
import Photo from './photo';
import Publication from './publication';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [header, setHeader] = useState('');
  const [phone, setPhone] = useState('');
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

  const reqHeader = useRef(null);
  const reqPhone = useRef(null);

  const maxNumberOfImages = 5;

  const nextTab = () => setActiveTab(activeTab + 1);
  const prevTab = () => setActiveTab(activeTab - 1);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleCheck = () => setChecked(!checked);
  const changeImg = imageList => setImages(imageList);
  const toggleError = () => setError(!error);

  const changeActiveTab = (param, tab) => {
    const isRequired = param.current.props.value;
    if (isRequired === '') {
      toggleError();
    }
    if (isRequired.length > 0) {
      return toggle(tab);
    }
    return null;
  };

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
    if (errors.maxNumber === true) {
      toggleError();
    }
  };

  const handlePaidService = e => {
    const { name, checked } = e.target;
    const index = paidService.findIndex(item => item.number === name);
    const item = paidService[index];
    const newPaidService = [...paidService];
    newPaidService[index] = { ...item, checked };

    setPaidService(newPaidService);
  };

  return (
    <div className="wrapper">
      <Navigation
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        reqHeader={reqHeader}
        reqPhone={reqPhone}
        toggle={toggle}
      />
      <TabContent activeTab={activeTab} className="card" id="tab-card">
        <Information
          checked={checked}
          handleCheck={handleCheck}
          header={header}
          reqHeader={reqHeader}
          requiredSuccess={requiredSuccess}
          setDescription={setDescription}
          setHeader={setHeader}
        />
        <Contact
          phone={phone}
          prevTab={prevTab}
          reqPhone={reqPhone}
          requiredSuccess={requiredSuccess}
          setEmail={setEmail}
          setPhone={setPhone}
        />
        <Photo
          changeImg={changeImg}
          error={error}
          errorImg={errorImg}
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
          header={header}
          images={images}
          paidService={paidService}
          phone={phone}
          setCheckedService={handlePaidService}
          toggle={toggle}
        />
      </TabContent>
    </div>
  );
};

export default App;
