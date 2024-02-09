import React from "react";
import {Card} from 'react-bootstrap';
import '../styles/Article.css';
import { ArticleProps } from "../../models/article";

const Article = ({article}:ArticleProps) => {
    return (
        <Card border="light" className="h-100">
          <Card.Header>{article.title}</Card.Header>
          <Card.Body>
            <Card.Title>{article.summary}</Card.Title>
            <Card.Text>
              {article.fullText}
            </Card.Text>
          </Card.Body>
      </Card>
    );
}
export default Article;