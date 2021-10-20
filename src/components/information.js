import React from 'react';
import { Button, FormGroup, Label, Input, TabPane, Form } from 'reactstrap';
import PropTypes from 'prop-types';

import Check from './check';

const Information = ({
  checked,
  handleChangeDescription,
  handleChangeHeader,
  handleCheck,
  handleCheckRequiredField,
  header,
}) => {
  const { value } = header;
  const handleClickNextTab = () => handleCheckRequiredField(value);

  return (
    <TabPane tabId={1}>
      <Form>
        <FormGroup>
          <Label className="label" for="example-header">
            Header*
          </Label>
          <Input
            id="example-header"
            name="header"
            onChange={handleChangeHeader}
            placeholder="Your header"
            required
            type="text"
            value={value}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label label-mg" for="example-text">
            Description
          </Label>
          <Input
            id="example-text"
            name="text"
            onChange={handleChangeDescription}
            placeholder="Your description"
            type="textarea"
          />
        </FormGroup>
        <Check checked={checked} setChecked={handleCheck} />
        <Button
          className="full-of-width-btn label-mg"
          color="primary"
          onClick={handleClickNextTab}
        >
          Next
        </Button>{' '}
      </Form>
    </TabPane>
  );
};

Information.propTypes = {
  checked: PropTypes.bool,
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  handleChangeDescription: PropTypes.func,
  handleChangeHeader: PropTypes.func,
  handleCheck: PropTypes.func,
  handleCheckRequiredField: PropTypes.func,
};

Information.defaultProps = {
  checked: false,
  header: { value: '', index: 1 },
  handleChangeDescription: () => {},
  handleChangeHeader: () => {},
  handleCheck: () => {},
  handleCheckRequiredField: () => {},
};

export default Information;
