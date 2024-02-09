export interface Article {
    title: string;
    summary: string;
    fullText: string;
}

export interface ArticleListProps {
    articles: Article[];
}

export interface ArticleProps {
    article: {
      title: string;
      summary: string;
      fullText: string;
    };
}