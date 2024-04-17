import styled from "styled-components";

const Loading: React.FC<{}> = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default Loading;
const LoadingContainer = styled.h1`
  text-align: center;
  margin: auto;
  font-size: 2rem;
`;
