import ArticleDetail from "../pages/ArticleDetail";
import ArticleList from "../pages/ArticleList";

const RouteData = [
  {
    path: "/",
    page: ArticleList,
  },
  {
    path: "/articleDetail/:id",
    page: ArticleDetail,
  },
];

export default RouteData;
