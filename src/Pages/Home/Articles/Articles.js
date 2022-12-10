import React, { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import Groups from '../Groups/Groups';

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
                <div className='col-sm-12 col-ms-12 col-lg-4'>

                    <Groups></Groups>
                </div>
            </div>




        </div>


    );
};

export default Articles;