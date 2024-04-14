import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageHeader = styled.header`
  padding: 1rem;
  z-index: 2;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 1px 3px 3px rgba(128, 128, 128, 0.1);
`;

const Heading = styled.h1`
  text-align: center;
  color: #334464;
  text-shadow: 1px 0px 1px #374151;
  font-size: 2rem;
  font-weight: 600;
  white-space:wrap;
  @media screen and (max-width:450px){
    font-size:1.4rem;
  }
`;

const PageContent = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  scroll-margin-top: 5rem;
  gap: 1.5rem;
  align-items: flex-start;
`;

export { MainContainer, PageHeader, Heading, PageContent };
