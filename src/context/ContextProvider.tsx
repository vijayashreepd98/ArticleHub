import { useEffect, useState } from "react";
import { ArticleContext } from "./ContextData";
import { fetchArticles, getArticleDetail } from "../services/article";
import {
  ArticleInViewProps,
  ArticleProps,
  HasErrorProps,
} from "../global/interface";

const ArticleContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [articleList, setArticleList] = useState<Array<ArticleProps>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<HasErrorProps>({
    isError: false,
    message: "",
  });
  const [articleInView, setArticleInView] = useState<ArticleInViewProps | null>(
    null
  );
  const [articleViewId, setArticleViewId] = useState<number>(0);

  async function fetchArticleData() {
    try {
      setIsLoading(true);
      const articleData = await getArticleDetail(articleViewId);
      setArticleInView(articleData);
      setIsLoading(false);
      setHasError({ isError: false, message: "" });
    } catch (e) {
      setHasError({ isError: true, message: (e as Error).message });
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (articleViewId) {
      fetchArticleData();
    }
  }, [articleViewId]);

  async function loadArticles() {
    try {
      setIsLoading(true);
      let articles = await fetchArticles();
      setArticleList(articles);
      setHasError({ isError: false, message: "" });
      setIsLoading(false);
    } catch (e) {
      setHasError({ isError: true, message: (e as Error).message });
      setIsLoading(false);
    }
  }

  function updatingArticleViewId(id: number, cb: () => void) {
    setArticleViewId(id);
    cb();
  }
  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        articleList,
        isLoading,
        hasError,
        setArticleViewId: updatingArticleViewId,
        articleInView,
        articleViewId,
        setHasError,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContextProvider };
