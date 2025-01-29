import React, { useState } from "react";
import styled from "styled-components";

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


const Title = styled.h2`
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
  width: 100%;
  &::placeholder {
    color: #FF964B;
  }
`;

const SearchIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const RecordsContainer = styled.div`
  background: #F4F4F4;
  border-radius: 20px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 5px 5px 4px rgba(0,0,0,0.25);
`;

const RecordRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #BABABA;
  margin: 8px 0;
`;

const HeaderRow = styled(RecordRow)`
  color: #707070;
  margin-bottom: 15px;
`;

const EmployeeDetails = styled.div`
  background: #EBEBEB;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  color: #616161;
`;

const ViewEmployerFinancialRecord = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const records = [
    { month: "Jan", salary: "$2,000", creditedOn: "2025-01-25" },
    { month: "Dec", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Nov", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Oct", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Sept", salary: "$12,000", creditedOn: "2025-01-25" },
    { month: "Aug", salary: "$12,000", creditedOn: "2025-01-25" }
  ];
  console.log("ViewEmployerFinancialRecord component rendered");

  return (
    <Container>
      <Background>
        <Header>
          <UserIcon src="/assets/profile-icon.png" alt="Profile" />
          <Title>Financial Record</Title>

          <SearchBox>
            <SearchInput 
              placeholder="search of a month"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon src="/assets/search-icon.png" alt="Search" />
          </SearchBox>

          <RecordsContainer>
            <HeaderRow>
              <div>Month</div>
              <div>Salary</div>
              <div>Credited On</div>
            </HeaderRow>

            {records
              .filter(record => record.month.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((record, index) => (
                <RecordRow key={index}>
                  <div>{record.month}</div>
                  <div>{record.salary}</div>
                  <div>{record.creditedOn}</div>
                </RecordRow>
              ))}
          </RecordsContainer>

          <EmployeeDetails>
            emp id: 11111 payment: $12,000 last paid: 2025-01-05 due on: 2025-01-25
          </EmployeeDetails>
        </Header>
      </Background>
    </Container>
    
  );
};

export default ViewEmployerFinancialRecord;
