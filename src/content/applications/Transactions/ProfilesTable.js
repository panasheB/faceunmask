import { Table } from 'antd';
import { Box, TableContainer } from '@mui/material';
import { useState } from 'react';
import { HeatMapOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// third-party

export default function ProfilesTable() {
  // const name = "Panashe"
  const profiles = [
    {
      employeeId: '001',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '002',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '003',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '004',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '005',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '006',
      name: 'Panashe Budzinike',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'panashebudzinike@gmail.com',
      phone: '0719879553',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '006',
      name: 'Panashe Budzinike',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'panashebudzinike@gmail.com',
      phone: '0719879553',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '005',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '401',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '031',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '041',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

  ];
  const [tableData, setTableData] = useState(profiles);
  console.log(setTableData);
  const profileColumn = [
    {
      title: '##',
      key: '##',
      render: () => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <HeatMapOutlined style={{ color: 'blue', cursor: 'pointer' }} />
        </div>
      )
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeId',
      key: 'employeeId'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position'
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department'
    },
    {
      title: 'Skills',
      key: 'skills',
      render: (record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          {record?.skills?.map((skill, index) => (
            <span key={index}>
              {skill}
              {index !== record?.skills?.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Hire Date',
      dataIndex: 'hireDate',
      key: 'hireDate',
      render: (hireDate) => hireDate?.slice(0, 10)
    },

    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
           <Link
        to={{
          pathname: '/management/profile/details',
          search: `?data=${encodeURIComponent(JSON.stringify(record))}`,
        }}
      >
        View Profile
    
      </Link>

        </div>
      )
    }
  ];

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          columns={profileColumn}
          dataSource={tableData}
          size="small"
          pagination={{
            pageSize: 10
          }}
        />
      </TableContainer>
    </Box>
  );
}
