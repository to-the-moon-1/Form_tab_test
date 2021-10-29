import React from 'react';
import { TabPane, Form } from 'reactstrap';

import getSection from '../utilites/get-section';

const Sections = ({
  checked,
  checkPaidService,
  checkTitle,
  description,
  email,
  error,
  handleChangeDescription,
  handleChangeEmail,
  handleChangeHeader,
  handleChangeImg,
  handleChangePhone,
  handleCheck,
  handleCheckErrorImg,
  handleCheckRequiredField,
  handlePaidService,
  header,
  images,
  maxCountOfImages,
  paidService,
  phone,
  prevTab,
  toggleError,
  toggleTab,
  warning,
}) => {
  const section = [
    {
      name: 'Information',
      props: {
        checked,
        checkTitle,
        handleChangeDescription,
        handleChangeHeader,
        handleCheck,
        handleCheckRequiredField,
        header,
      },
    },
    {
      name: 'Contacts',
      props: {
        handleChangeEmail,
        handleChangePhone,
        handleCheckRequiredField,
        phone,
        prevTab,
      },
    },
    {
      name: 'Photos',
      props: {
        error,
        handleChangeImg,
        handleCheckErrorImg,
        images,
        maxCountOfImages,
        toggleError,
        toggleTab,
        warning,
      },
    },
    {
      name: 'Publication',
      props: {
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
      },
    },
  ];

  return section.map(({ name, props }, index) => (
    <TabPane key={`${name}_show`} tabId={index + 1}>
      <Form>{getSection(name, props)}</Form>
    </TabPane>
  ));
};

export default Sections;
