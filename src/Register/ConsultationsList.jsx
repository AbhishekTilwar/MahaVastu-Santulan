import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path as per your project structure
import { Select, Input, Row, Col, Card, Spin, Button } from 'antd';
import { 
  FilterOutlined, 
  SearchOutlined, 
  InfoCircleOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  CalendarOutlined, 
  SolutionOutlined 
} from '@ant-design/icons';
import './ConsultationsList.css'; // Add a CSS file for custom styles

const { Option } = Select;

const ConsultationsList = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from Firestore when the component mounts
  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "consultations"));
        const consultationsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setConsultations(consultationsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching consultations: ", error);
        setLoading(false);
      }
    };

    fetchConsultations();
  }, []);

  // Function to filter consultations based on date range and search term
  const filteredConsultations = () => {
    const now = new Date();
    return consultations.filter(consultation => {
      const createdAt = new Date(consultation.createdAt.seconds * 1000);
      const matchesSearchTerm =
        consultation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultation.email.toLowerCase().includes(searchTerm.toLowerCase());

      switch (filter) {
        case 'today':
          return createdAt.toDateString() === now.toDateString() && matchesSearchTerm;
        case 'last7days':
          return now - createdAt <= 7 * 24 * 60 * 60 * 1000 && matchesSearchTerm;
        case 'last30days':
          return now - createdAt <= 30 * 24 * 60 * 60 * 1000 && matchesSearchTerm;
        default:
          return matchesSearchTerm; // Return all if no filter is applied
      }
    });
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Display loading state if data is still being fetched
  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}><Spin size="large" /></div>;
  }

  const consultationsToDisplay = filteredConsultations();

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          marginTop: '70px', // Adjust this value based on your NavBar's height
        }}
      ></div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Consultations List</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Row gutter={16} justify="center">
          <Col xs={24} sm={16} md={12} lg={8}>
            <Input.Search
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ width: '100%' }}
              enterButton={<SearchOutlined />}
            />
          </Col>

          <Col xs={24} sm={8} md={6} lg={4}>
            <Select
              defaultValue="today"
              style={{ width: '100%' }}
              onChange={handleFilterChange}
              suffixIcon={<FilterOutlined />} // Adding filter icon to the select dropdown
            >
              <Option value="today">Today</Option>
              <Option value="last7days">Last 7 Days</Option>
              <Option value="last30days">Last 30 Days</Option>
              <Option value="all">All Data</Option>
            </Select>
          </Col>
        </Row>
      </div>

      <Row gutter={[16, 16]}>
        {consultationsToDisplay.length > 0 ? (
          consultationsToDisplay.map(consultation => (
            <Col xs={24} sm={12} md={8} key={consultation.id}>
              <Card
                title={<span><SolutionOutlined /> {consultation.name}</span>}
                bordered={true}
                style={{ borderColor: '#d12336' }} // Red border
                headStyle={{ backgroundColor: '#ffcd55' }} // Chrome yellow header
                bodyStyle={{ textAlign: 'left' }}
                hoverable
                extra={<InfoCircleOutlined />} // Adding info icon for details
              >
                <p>
                  <MailOutlined /> 
                  Email: <a href={`mailto:${consultation.email}`}>{consultation.email}</a> {/* Email link */}
                </p>
                <p>
                  <PhoneOutlined /> 
                  Phone: <a href={`tel:${consultation.phone}`}>{consultation.phone}</a> {/* Phone link */}
                </p>
                <p><SolutionOutlined /> Service: {consultation.service}</p>
                <p><CalendarOutlined /> Date: {new Date(consultation.createdAt.seconds * 1000).toLocaleDateString()}</p>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <p style={{ textAlign: 'center' }}>No consultations available</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ConsultationsList;
