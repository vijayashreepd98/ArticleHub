import React, { useContext } from "react";
import Card from "../component/Card";
import {
  Heading,
  MainContainer,
  PageContent,
  PageHeader,
} from "../global/styles";
import Modal from "../component/Modal";
import Loading from "../component/Loading";
import { ArticleContext } from "../context/ContextData";
import { useNavigate } from "react-router-dom";

const ArticleList: React.FC = () => {
  const { articleList, isLoading, hasError, setArticleViewId } =
    useContext(ArticleContext);
  const navigate = useNavigate();

  function onViewArticle(id: number) {
    setArticleViewId(id, () => {
      navigate(`/articleDetail/${id}`);
    });
  }

  return (
    <MainContainer>
      <PageHeader>
        <Heading>Article Hub</Heading>
      </PageHeader>
      <PageContent>
        {isLoading ? (
          <Loading />
        ) : hasError.isError ? (
          <Modal
            header={"Error!!!"}
            description={hasError.message}
            isError={true}
          />
        ) : (
          articleList.map(({ id, title, summary }) => {
            return (
              <Card
                key={id}
                id={parseInt(id)}
                title={title}
                summary={summary}
                onViewMore={onViewArticle}
              />
            );
          })
        )}
      </PageContent>
    </MainContainer>
  );
};

export default React.memo(ArticleList);
