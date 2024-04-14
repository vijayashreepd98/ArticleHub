import { getRequest } from "./core";

const fetchArticles = async () => {
  const articleList = await getRequest("articles");
  return articleList;
};

const getArticleDetail = async (articleId: number) => {
  const articleDetail = await getRequest(`articles/${articleId}`);
  return articleDetail;
};
export { fetchArticles, getArticleDetail };
