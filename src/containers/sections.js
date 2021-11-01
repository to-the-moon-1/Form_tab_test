import React, { memo } from 'react';
import { TabPane, Form } from 'reactstrap';

import getSection from './get-section';

const Sections = ({
  informationProps,
  contactsProps,
  photosProps,
  publicationProps,
}) => {
  const section = [
    {
      name: 'Information',
      props: informationProps,
    },
    {
      name: 'Contacts',
      props: contactsProps,
    },
    {
      name: 'Photos',
      props: photosProps,
    },
    {
      name: 'Publication',
      props: publicationProps,
    },
  ];

  return section.map(({ name, props }, index) => (
    <TabPane key={`${name}_show`} tabId={index + 1}>
      <Form>{getSection(name, props)}</Form>
    </TabPane>
  ));
};

export default memo(Sections);
