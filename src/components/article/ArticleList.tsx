import {Row , Col} from 'react-bootstrap';
import { ArticleListProps } from "../../models/article";
import Article from "./Article";

const ArticleList = ({articles}:ArticleListProps) => {
    if(!articles.length){
        return <div>No articles Found</div>
    }
    return (
        <Row xs={1} sm ={1} md={4} className="g-4">
            {articles.map((article, index) => (
                <Col key={index}>
                    <Article article={article} />
                </Col>
            ))}
        </Row>
    )
}
export default ArticleList;