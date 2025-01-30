import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 482px;
  height: 974px;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 50px;
  box-shadow: 226px 45px 226px rgba(9, 20, 50, 0.15);
`;

const Header = styled.div`
  padding: 20px;
`;

const UserIcon = styled.img`
  width: 43px;
  height: 43px;
  position: absolute;
  right: 25px;
  top: 48px;
`;

const EmployeeId = styled.div`
  color: #707070;
  font-size: 16px;
  margin: 20px 0;
`;

const SectionTitle = styled.h2`
  color: #FF964B;
  font-size: 24px;
  margin: 15px 0;
`;

const SearchBox = styled.div`
  background: #E2E2E2;
  border-radius: 10px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: #FF964B;
  &::placeholder {
    color: #FF964B;
  }
`;

const SearchIcon = styled.img`
  width: 13px;
  height: 13px;
  margin-left: auto;
`;

const ScheduleTable = styled.div`
  background: #F4F4F4;
  border-radius: 20px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 5px 5px 4px rgba(0,0,0,0.25);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #707070;
  margin-bottom: 15px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #BABABA;
  margin: 8px 0;
`;

const ViewEmployeeSchedule = () => {
  const [searchDate, setSearchDate] = useState('');

  return (
    <Container>
      <Background>
        <Header>
          <UserIcon src="/user-icon.png" alt="User" />
          <EmployeeId>emp id : 11111</EmployeeId>
          
          <SectionTitle>Schedule of the week</SectionTitle>
          <SearchBox>
            <SearchInput 
              placeholder="search of an day"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            <SearchIcon src="/search-icon.png" alt="Search" />
          </SearchBox>

          <ScheduleTable>
            <TableHeader>
              <div>date</div>
              <div>schedule</div>
              <div>misc</div>
            </TableHeader>
            {[...Array(7)].map((_, i) => (
              <TableRow key={i}>
                <div>2025-01-15</div>
                <div>09:00-19:00</div>
                <div>-</div>
              </TableRow>
            ))}
          </ScheduleTable>

          <SectionTitle>clock in/out</SectionTitle>
          <ScheduleTable>
            <TableHeader>
              <div>date</div>
              <div>clock-in</div>
              <div>clock-out</div>
            </TableHeader>
            {[...Array(3)].map((_, i) => (
              <TableRow key={i}>
                <div>2025-01-15</div>
                <div>09:00</div>
                <div>19:00</div>
              </TableRow>
            ))}
          </ScheduleTable>
        </Header>
      </Background>
    </Container>
  );
};

export default ViewEmployeeSchedule;
