import React, { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(`allpost.json`)
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    return (

        <div className='mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-ms-12 col-lg-8'>
                    {
                        articles.map(article => <ArticleCard
                            key={article.id}
                            article={article}
                        ></ArticleCard>)
                    }
                </div>
                <div className='col-8'>

                </div>
            </div>




        </div>


    );
};

export default Articles;