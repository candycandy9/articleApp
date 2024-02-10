import {Row , Col} from 'react-bootstrap';
import { ArticleListProps } from "../../models/article";
import Article from "./Article";
import ErrorBoundary from '../error/ErrorBoundary';

const ArticleList = ({articles}:ArticleListProps) => {
        if(!articles.length){
        return <div>No articles Found</div>
    }
    return (
        <>
            <h1 className="title">ARTICLES</h1>
            <Row xs={1} sm ={1} md={4} className="g-4">
                {articles.map((article, index) => (
                    <Col key={index}>
                        <ErrorBoundary key={index}>
                            <Article article={article}/>
                        </ErrorBoundary>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default ArticleList;