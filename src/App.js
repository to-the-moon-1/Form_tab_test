import './App.css';
import React, { useState, useRef } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import classnames from 'classnames';
import ImageUploading from 'react-images-uploading';
import ModalBtn from './modal';
import Check from './check';
import Error from './error';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [header, setHeader] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(false);
  const [service3, setService3] = useState(false);
  const [service4, setService4] = useState(false);
  const [service5, setService5] = useState(false);

  const reqHeader = useRef(null);
  const reqPhone = useRef(null);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const toggleError = () => setError(!error);

  const each = (param, tab) => {
    const isRequired = param.current.props.value;
    if (isRequired === '') {
      toggleError();
    } else if (isRequired.length > 0) {
      return toggle(tab);
    }
    return null;
  };

  const handleCheck = () => setChecked(!checked);
  const changeImg = imageList => {
    setImages(imageList);
  };
  const handleService1 = () => setService1(!service1);
  const handleService2 = () => setService2(!service2);
  const handleService3 = () => setService3(!service3);
  const handleService4 = () => setService4(!service4);
  const handleService5 = () => setService5(!service5);

  const maxNumber = 5;

  const onError = errors => {
    if (errors.maxNumber === true) {
      toggleError();
    }
  };

  const next = () => {
    setActiveTab(activeTab + 1);
  };
  const prev = () => {
    setActiveTab(activeTab - 1);
  };

  const requiredSuccess = param => {
    if (param === '') {
      toggleError();
    } else if (param.length > 0) {
      return next();
    }
    return null;
  };

  return (
    <div className="wrapper">
      <Nav tabs>
        <NavItem className="tabName">
          <NavLink
            className={classnames({ active: activeTab === 1 })}
            onClick={() => {
              toggle(1);
            }}
          >
            Information
          </NavLink>
        </NavItem>
        <NavItem className="tabName">
          <NavLink
            className={classnames({ active: activeTab === 2 })}
            onClick={() => {
              each(reqHeader, 2);
            }}
          >
            Contact
          </NavLink>
        </NavItem>
        <NavItem className="tabName">
          <NavLink
            className={classnames({ active: activeTab === 3 })}
            onClick={() => {
              each(reqPhone, 3);
            }}
          >
            Photo
          </NavLink>
        </NavItem>
        <NavItem className="tabName">
          <NavLink
            className={classnames({ active: activeTab === 4 })}
            onClick={() => {
              each(reqPhone, 4);
            }}
          >
            Publication
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="card">
        <TabPane tabId={1}>
          <Form>
            <FormGroup>
              <Label className="label" for="exampleHeader">
                Header*
              </Label>
              <Input
                ref={reqHeader}
                id="exampleHeader"
                name="header"
                onChange={e => setHeader(e.target.value)}
                placeholder="Your header"
                required
                type="text"
                value={header}
              />
              <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label className="label label-bottom" for="exampleText">
                Description
              </Label>
              <Input
                id="exampleText"
                name="text"
                onChange={e => setDescription(e.target.value)}
                placeholder="Your description"
                type="textarea"
              />
            </FormGroup>
            <Check checked={checked} setChecked={handleCheck} />
            <Button
              className="oneBtn label-bottom"
              color="primary"
              onClick={() => {
                requiredSuccess(header);
              }}
            >
              Next
            </Button>{' '}
          </Form>
        </TabPane>
        <TabPane tabId={2}>
          <Form>
            <FormGroup>
              <Label className="label" for="examplePhone">
                Phone number*
              </Label>
              <Input
                ref={reqPhone}
                id="examplePhone"
                name="phone"
                onChange={e => setPhone(e.target.value)}
                placeholder="Your phone number"
                required
                type="text"
                value={phone}
              />
            </FormGroup>
            <FormGroup>
              <Label className="label label-bottom" for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                type="text"
              />
            </FormGroup>
            <Button
              className="twoBtn leftBtn label-bottom"
              color="secondary"
              onClick={prev}
            >
              Prev
            </Button>{' '}
            <Button
              className="twoBtn label-bottom"
              color="primary"
              onClick={() => {
                requiredSuccess(phone);
              }}
            >
              Next
            </Button>{' '}
          </Form>
        </TabPane>
        <TabPane tabId={3}>
          <Form>
            <div className="App">
              <ImageUploading
                dataURLKey="data_url"
                maxNumber={maxNumber}
                multiple
                onChange={changeImg}
                onError={onError}
                value={images}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="upload__image-wrapper">
                    <div
                      className="imageDow"
                      onClick={onImageUpload}
                      style={isDragging ? { color: 'red' } : undefined}
                      {...dragProps}
                    >
                      Click or drop here . . .
                    </div>
                    <Error
                      error={error}
                      header={header}
                      phone={phone}
                      toggleError={toggleError}
                    />
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img
                          alt=""
                          height="210"
                          src={image.data_url}
                          width="159"
                        />
                        <div className="image-item__btn-wrapper">
                          <Button
                            className="threeBtn"
                            color="danger"
                            onClick={() => onImageRemove(index)}
                            outline
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
            <Button
              className="twoBtn leftBtn label-bottom"
              color="secondary"
              onClick={() => {
                toggle(2);
              }}
            >
              Prev
            </Button>{' '}
            <Button
              className="twoBtn label-bottom"
              color="primary"
              onClick={() => {
                toggle(4);
              }}
            >
              Next
            </Button>{' '}
          </Form>
        </TabPane>
        <TabPane tabId={4}>
          <Form>
            <FormGroup check>
              <Label check>
                <Input
                  className="check"
                  defaultChecked={service1}
                  onChange={handleService1}
                  type="checkbox"
                />{' '}
                <span className="label-check checkSm">Paid service one</span>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check className="check-top">
                <Input
                  className="check"
                  defaultChecked={service2}
                  onChange={handleService2}
                  type="checkbox"
                />{' '}
                <span className="label-check checkSm">Paid service two</span>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check className="check-top">
                <Input
                  className="check"
                  defaultChecked={service3}
                  onChange={handleService3}
                  type="checkbox"
                />{' '}
                <span className="label-check checkSm">Paid service three</span>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check className="check-top">
                <Input
                  className="check"
                  defaultChecked={service4}
                  onChange={handleService4}
                  type="checkbox"
                />{' '}
                <span className="label-check checkSm">Paid service four</span>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check className="check-top">
                <Input
                  className="check"
                  defaultChecked={service5}
                  onChange={handleService5}
                  type="checkbox"
                />{' '}
                <span className="label-check checkSm">Paid service five</span>
              </Label>
            </FormGroup>
            <Button
              className="twoBtn leftBtn label-bottom"
              color="secondary"
              onClick={() => {
                toggle(3);
              }}
            >
              Prev
            </Button>{' '}
            <ModalBtn
              checked={checked}
              description={description}
              email={email}
              header={header}
              images={images}
              phone={phone}
              service1={service1}
              service2={service2}
              service3={service3}
              service4={service4}
              service5={service5}
            />
          </Form>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default App;
