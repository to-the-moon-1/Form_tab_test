import React from 'react';
import { Button, FormGroup, Label, Input, TabPane, Form } from 'reactstrap';
import PropTypes from 'prop-types';

import Check from './check';

const Information = ({
  checked,
  handleCheck,
  header,
  requiredSuccess,
  setDescription,
  setHeader,
}) => {
  const { value } = header;
  const handleChangeHeader = e =>
    setHeader({ ...header, value: e.target.value });
  const handleChangeDescription = e => setDescription(e.target.value);
  const handleClickNextTab = () => requiredSuccess(value);

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
  header: PropTypes.object,
  handleCheck: PropTypes.func,
  setDescription: PropTypes.func,
  setHeader: PropTypes.func,
  requiredSuccess: PropTypes.func,
};

Information.defaultProps = {
  checked: false,
  header: { value: '', index: 1 },
  handleCheck: () => {},
  setDescription: () => {},
  setHeader: () => {},
  requiredSuccess: () => {},
};

export default Information;
