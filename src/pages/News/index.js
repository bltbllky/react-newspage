import React,{useState,useEffect} from "react";
import Loading from "../../components/Loading";
import SerpAPI from '../../api/serpapi';
import PropTypes from 'prop-types';
import NewsBox from "../../components/NewsBox";
import './style.css'

const News = ({searchString,state}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        getData();
    }, [state])

    const getData = () =>{
        if(!searchString || searchString.length<2)
            return;
        setLoading(true);
        SerpAPI
        .getNews(searchString,
        (resp, error) => {
        if (resp){
            setLoading(false);
            console.log(resp);
            setData(resp);
        } 
         
        });
    }

    return loading ?
            <Loading height={700} />
            :
                data && data.news_results && data.news_results.length>0 ?
                    <div className="list">
                        {data.news_results.map((item,i)=>{
                            return <NewsBox 
                                        key={i}
                                        item={item} />
                        })

                        }

                    </div>
                    :
                    <div>
                        Welcome
                    </div>
    
}
News.propTypes = {
    searchString: PropTypes.string,
    state:PropTypes.bool
  };

export default News;