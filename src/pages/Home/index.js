import React,{useState,useEffect} from "react";
import Loading from "../../components/Loading";
import SerpAPI from '../../api/serpapi';
import PropTypes from 'prop-types';
import NewsBox from "../../components/NewsBox";
import './style.css'

const Home = ({searchString,state,setSearchString}) => {
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
        .getResult(searchString,
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
                data ?
                    <div className="row">
                      <div className="upper">
                      {data.inline_videos &&
                        <div className="list">
                          {data.inline_videos.map((item,i)=>{
                              return <NewsBox 
                                        key={i}
                                        item={item} />
                          })

                          }
                        </div>
                      }
                      {data.knowledge_graph &&
                        <div className="desc">

                          {data.knowledge_graph.header_images && data.knowledge_graph.header_images.length>0 &&
                            <div className="imgBox">
                              {
                            data.knowledge_graph.header_images.map((item,i)=>{
                              return i<3 &&
                                      <img 
                                        key={i}
                                        src={item.image} />
                            })
                            }
                            </div>
                          }
                          <a className="descTitle"
                            href={data.knowledge_graph.source?.link}
                            target="_blank">
                            {data.knowledge_graph.title}
                          </a>
                          <span className="descType">
                            {`( ${data.knowledge_graph.source?.name} - ${data.knowledge_graph.type} )`}
                          </span>
                          <p className="description">
                            {
                              data.knowledge_graph.description
                            }
                          </p>
                        </div>

                      }
                      </div>
                      {data.organic_results && data.organic_results.length>0 &&
                        <div className="results">
                          {data.organic_results.map((item,i)=>{
                            return <a key={i}
                                      href={item.link}
                                      target="_blank"
                                      className="resultItem">
                                      <p className="detailTitle">
                                        {item.title}
                                      </p>
                                      <p>
                                        {item.about_this_result?.description}
                                      </p>
                                      <p>
                                        {item.snippet}
                                      </p>
                                    </a>
                          })

                          }
                        </div>
                      }
                       {data.related_searches && data.related_searches.length>0 &&
                        <div className="results">
                          <p className="people">
                            People Also Search
                            </p>
                          {data.related_searches.map((item,i)=>{
                            return <a key={i}
                                      onClick={e=>{e.preventDefault();setSearchString(item.query)}}
                                      target="_blank"
                                      className="peopleLink">
                                        {item.query}
                                    </a>
                          })

                          }
                        </div>
                      }
                      
                    </div>
                    :
                    <div>
                        Welcome
                    </div>
    
}
Home.propTypes = {
    searchString: PropTypes.string,
    state:PropTypes.bool
  };

export default Home;