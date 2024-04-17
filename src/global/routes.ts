import ArticleDetail from "../pages/ArticleDetail";
import ArticleList from "../pages/ArticleList";
import { RouteDataProps } from "./interface";

const RouteData:Array<RouteDataProps> = [
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
