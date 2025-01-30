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

const DisputesContainer = styled.div`
  background: #F4F4F4;
  border-radius: 20px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 5px 5px 4px rgba(0,0,0,0.25);
`;

const DisputeRow = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr 0.8fr;
  color: #BABABA;
  margin: 8px 0;
  align-items: center;
`;

const HeaderRow = styled(DisputeRow)`
  color: #707070;
  margin-bottom: 15px;
`;

const ActionButton = styled.button`
  background: ${props => props.active ? '#7CCF AE' : '#C7EFE0'};
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  color: #000;
  cursor: pointer;
  font-size: 12px;
`;

const ActionMenu = styled.div`
  position: absolute;
  background: #C7EFE0;
  border-radius: 0;
  padding: 8px;
  width: 58px;
  
  button {
    width: 100%;
    background: none;
    border: none;
    color: #BABABA;
    padding: 4px 0;
    text-align: left;
    font-size: 9px;
    cursor: pointer;
    
    &:not(:last-child) {
      border-bottom: 1px solid #BABABA;
    }
  }
`;

const EmployeerRaiseDispute = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  const disputes = [
    { id: "11111", issue: "It is a long established fact that a reader will.", trigger: "manual" },
    { id: "11111", issue: "It is a long established fact that a reader will.", trigger: "manual" },
    { id: "11111", issue: "It is a long established fact that a reader will.", trigger: "manual" },
    { id: "11111", issue: "It is a long established fact that a reader will.", trigger: "manual" },
    { id: "11111", issue: "It is a long established fact that a reader will.", trigger: "manual" },
    { id: "11111", issue: "It is a long established fact that a reader will.", trigger: "manual" }
  ];

  const handleAction = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <Container>
      <Background>
        <Header>
          <UserIcon src="/assets/profile-icon.png" alt="Profile" />
          <Title>Raise Dispute</Title>

          <SearchBox>
            <SearchInput 
              placeholder="search of older dispute"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon src="/assets/search-icon.png" alt="Search" />
          </SearchBox>

          <DisputesContainer>
            <HeaderRow>
              <div>ID</div>
              <div>Issue</div>
              <div>Manual Trigger</div>
            </HeaderRow>

            {disputes.map((dispute, index) => (
              <DisputeRow key={index}>
                <div>{dispute.id}</div>
                <div>{dispute.issue}</div>
                <div style={{position: 'relative'}}>
                  <ActionButton 
                    active={activeMenu === dispute.id}
                    onClick={() => handleAction(dispute.id)}
                  >
                    action
                  </ActionButton>
                  
                  {activeMenu === dispute.id && (
                    <ActionMenu>
                      <button>delete</button>
                      <button>mark resolved</button>
                      <button>mark urgent</button>
                    </ActionMenu>
                  )}
                </div>
              </DisputeRow>
            ))}
          </DisputesContainer>
        </Header>
      </Background>
    </Container>
  );
};

export default EmployeerRaiseDispute;
