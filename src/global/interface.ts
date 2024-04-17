export  interface ArticleInViewProps {
    title: string;
    summary: string;
    fullText: string;
    id:string
}


export interface ArticleProps {
    id: string;
    title: string; 
    summary: string ;
    fullText?:string;
}

export interface HasErrorProps {
    isError: boolean; 
    message: string;
}

export interface ModalHeaderProps {
    color?: string;
  }

  export interface ModalProps {
    header: string;
    description: string;
    isError?: boolean;
  }

  export interface RouteProps {
    [key:string]:RouteDataProps;
  }

  export interface RouteDataProps {
    path:string;
    page:React.FC;
  }
