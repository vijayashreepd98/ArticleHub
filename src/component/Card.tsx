import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
interface CardProps {
  id: number;
  title: string;
  summary: string;
  onViewMore?: (id: number) => void;
}

export default function Card({
  id,
  title,
  summary,
  onViewMore = () => {},
}: CardProps) {
  return (
    <CardContainer key={id}>
      <CardTitle>{title}</CardTitle>
      <CardDiscription title="Click to read full text">
        {summary.split(" ").join("").length > 100
          ? summary.substring(0, 100) + " ..."
          : summary}
        <ReadMoreContainer
          onClick={() => {
            onViewMore(id);
          }}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} fontSize={20} />
        </ReadMoreContainer>
      </CardDiscription>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  width: min(100%, 320px);
  height: fit-content;
  background-color: #ffffff;
  border: 1px solid #ededed;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 4px rgba(128, 128, 128, 0.5);
`;

const CardTitle = styled.h2`
  text-align: left;
  padding: 0.3rem 0;
  font-weight: 400;
  font-size: 1.1rem;
  color: #272727;
  border-bottom: 2px solid #aa9c45;
  overflow: hidden;
  text-shadow: 1px 0px 1px #787878;
`;
const CardDiscription = styled.p`
  width: 100%;
  padding: 0.3rem 0;
  background-color: #ffffff;
  color: #989898;
  font-size: 1rem;
  overflow: hidden;
  line-height: 1.6;
  text-align: left;
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  text-shadow: 1px 0px 1px #cccccc;
  position: relative;
  cursor: default;
`;

const ReadMoreContainer = styled.span`
  position: absolute;
  bottom: 0.3rem;
  right: 0.2rem;
  z-index: 1;
  cursor: pointer;
  color: #b6d0cd;
  background-color: #ffffff;
  padding-left: 0.5rem;
  &:hover {
    color: hsla(182, 57%, 75%, 0.984);
  }
`;
