import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Heading, PageContent, PageHeader } from "../global/styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Loading from "../component/Loading";
import Modal from "../component/Modal";
import { ArticleContext } from "../context/ContextData";

const ArticleDetail: React.FC = () => {
  const {
    articleViewId,
    setArticleViewId,
    isLoading,
    hasError,
    articleInView,
    setHasError,
  } = useContext(ArticleContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const articleId = id ? parseInt(id) : 0;
    if (articleViewId != articleId && articleId) {
      setArticleViewId(articleId, () => {});
    }
  }, []);

  function goBack() {
    setHasError({ isError: false, message: "" });
    navigate("/");
  }
  return (
    <MainContainer>
      <PageHeader>
        <BackButton onClick={() => goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} fontSize={15} color={"#000000"} />
          <BackButtonContent>Go Back</BackButtonContent>
        </BackButton>
        <Heading>Article Detail</Heading>
      </PageHeader>
      <PageContent>
        {isLoading ? (
          <Loading />
        ) : hasError.isError ? (
          <Modal
            header="Error!!!"
            description={hasError.message}
            isError={true}
          />
        ) : (
          <ArticleContainer>
            <ArticleHeader>{articleInView?.title}</ArticleHeader>
            <ArticleDescription>{articleInView?.summary}</ArticleDescription>
            <ArticleSummary>{articleInView?.fullText}</ArticleSummary>
          </ArticleContainer>
        )}
      </PageContent>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ArticleContainer = styled.article`
  width: min(100%, 620px);
  padding: 1.5rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 1px 1px 4px rgba(128, 128, 128, 0.5);
  cursor: default;
`;

const ArticleHeader = styled.h2`
  padding: 0.3rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: #272727;
  border-bottom: 2px solid #aa9c45;
  width: fit-content;
  text-shadow: 1px 0.5px 1px #787878;
  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

const BackButton = styled.div`
  position: absolute;
  left: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  width: fit-content;
  gap: 0.5rem;
  font-weight: 600;
  box-sizing: border-box;
  text-shadow: 1px 0px 1px #787878;
  border: 1px solid #dcdabb;
  padding: 0.4rem 0.5rem;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px #dcdabb;
  color: #141414;
  font-size: 1rem;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

const BackButtonContent = styled.span`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const ArticleDescription = styled.p`
  padding: 0.3rem 0;
  color: #759da0;
  font-size: 1.3rem;
  text-shadow: 1px 0px 1px #bcced0;
  @media screen and (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

const ArticleSummary = styled.p`
  overflow: auto;
  color: #a0a0a0;
  font-size: 1rem;
  text-align: justify;
  flex-grow: 1;
  text-shadow: 1px 0px 1px #a8a8a8;
`;

export default React.memo(ArticleDetail);
