import { useState } from 'react';
import { CFormLabel, CFormInput } from '@coreui/react';
import { Button, Input, Row, Col } from 'antd';
import { Table } from 'reactstrap';
import { BsPlusLg } from 'react-icons/bs';

function AddProfile() {
  const buttonStyle3 = {
    backgroundColor: '#69A3DE',
    border: '1px solid #69A3DE',
    borderRadius: '50px',
    color: '#fff',
    variant: 'outline',
    padding: '2px 15px',
    margin: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const [profile, setProfile] = useState({
    id: '',
    firstName: '',
    lastName: '',
    expertise: '',
    experienceYears: '',
    contactEmail: '',
    contactPhone: '',
    locationCity: '',
    locationState: '',
    locationCountry: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));
  };

  const [tableData, setTableData] = useState([{ id: 1, date: '' }]);
  const [idCount, setIdCount] = useState(2);
  const handleAddRow = () => {
    setTableData([...tableData, { id: idCount, date: '' }]);
    setIdCount(idCount + 1);
  };
  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedTableData = tableData.map((data) =>
      data.id === id ? { ...data, [name]: value } : data
    );
    setTableData(updatedTableData);
  };

  //handle submit function
  function handleSubmit() {
    const data = {
      id: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      expertise: profile.expertise,
      experienceYears: profile.experienceYears,
      contactEmail: profile.contactEmail,
      contactPhone: profile.contactPhone,
      locationCity: profile.locationCity,
      locationState: profile.locationState,
      locationCountry: profile.locationCountry
    };
    console.log(data);
  }

  //container style
  const containerStyle = {
    border: '0.5px solid lightgrey',
    padding: '10px'
  };

  return (
    <>
      <div style={containerStyle}>
        <>
          <div style={{ backgroundColor: 'white' }}>
            <div style={{ marginLeft: '10px' }}>
              <h3> Add Profile</h3>
              <hr />

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>First Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      valid={profile.firstName !== ''}
                      name="firstName"
                      placeholder="First Name"
                      value={profile.firstName}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel className="label-txt">Last Name</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.lastName !== ''}
                      name="lastName"
                      placeholder="Last Name"
                      value={profile.lastName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">National ID</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.id !== ''}
                      name="id"
                      placeholder="National ID"
                      value={profile.id}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Expertise</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.expertise !== ''}
                      name="expertise"
                      placeholder="Expertise"
                      value={profile.expertise}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Experience</CFormLabel>
                    <Input
                      type="number"
                      size="sm"
                      valid={profile.experienceYears !== ''}
                      name="experienceYears"
                      placeholder="Experience Years"
                      value={profile.experienceYears}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Email</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.contactEmail !== ''}
                      name="contactEmail"
                      placeholder="Contact Email"
                      value={profile.contactEmail}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Phone Number</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.contactPhone !== ''}
                      name="contactPhone"
                      placeholder="Phone Number"
                      value={profile.contactPhone}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">City</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.locationCity !== ''}
                      name="locationCity"
                      placeholder="Location City"
                      value={profile.locationCity}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel className="label-txt">State</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.locationState !== ''}
                      name="locationState"
                      placeholder="Location State"
                      value={profile.locationState}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel className="label-txt">Country</CFormLabel>
                    <Input
                      type="text"
                      size="sm"
                      valid={profile.locationCountry !== ''}
                      name="locationCountry"
                      placeholder="Location Country"
                      value={profile.locationCountry}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
              <Row gutter={[16, 16]}>  

              <Col span={24}>
              <>
                  <Table size="sm" striped bordered hover style={{ backgroundColor: 'grey' }}>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image ID</th>
                        <th>Image Name</th>
                        <th>Image Upload</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                          <td>
                            <Input
                              type="text"
                              size="lg"
                              name="imageId"
                              placeholder="Image Id"
                              value={data.imageName}
                              onChange={(e) => handleInputChange(e, data.id)}
                            />
                          </td>
                          <td>
                            <Input
                              type="text"
                              size="lg"
                              name="name"
                              placeholder="Image Name"
                              value={data.imageName}
                              onChange={(e) => handleInputChange(e, data.id)}
                            />
                          </td>

                          <td>
                            <Input
                              type="file"
                              size="lg"
                              name="image"
                              placeholder="Image Path"
                              value={data.imageName}
                              onChange={(e) => handleInputChange(e, data.id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
            
                </> 
                  </Col>

                  <Col span={24}>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={handleAddRow}
                  >
                    <BsPlusLg
                      style={{
                        fontSize: '40px',
                        fontWeight: 'bold',
                        paddingRight: '10px'
                      }}
                    />{' '}
                    <span style={{ color: 'blue', fontWeight: 'bold' }}>
                      Add Image
                    </span>
                  </span>
                  </Col>

              
              
              
               </Row>

            
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                      <Button
                        className="sb-3"
                        size="sm"
                        style={buttonStyle3}
                        onClick={handleSubmit}
                      >
                        Confirm
                      </Button>{' '}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
export default AddProfile;
