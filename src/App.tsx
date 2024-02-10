import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Article} from './models/article';
import {ArticleList, ErrorPage, Loader} from './components';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading,setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const response = await fetch('./data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="App">
       {loading ? <Loader/> : error ? <ErrorPage/> : <ArticleList articles={articles} />}
      </div>
  )
}

export default App;
