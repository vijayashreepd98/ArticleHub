import { Dispatch, SetStateAction, createContext } from "react";
import { ArticleProps, HasErrorProps } from "../global/interface";

const ArticleContext = createContext<{
  articleList: Array<ArticleProps>;
  isLoading: boolean;
  hasError: HasErrorProps;
  setArticleViewId: (id: number, cb:()=>void) => void;
  articleInView: ArticleProps | null;
  articleViewId: number;
  setHasError: Dispatch<SetStateAction<{ isError: boolean; message: string }>>;
}>({
  articleList: [{id:"", title:"", summary:""}],
  isLoading: true,
  hasError: { isError: false, message: "" },
  setArticleViewId: (id=0,cb=()=>{}) => {},
  articleInView: { id:"",title: "", summary: "", fullText: "" },
  articleViewId: 0,
  setHasError: () => {},
});

export { ArticleContext };
