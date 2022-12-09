import React from 'react';
import './ArticleCard.css'
import dotted from '../../../Assets/dotted.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faEye, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const ArticleCard = ({ article }) => {
    console.log(article);
    const { details, image, name, title, type, views, date, location, company } = article
    return (
        <div className='mt-2'>

            <div className="card">
                <img src={article?.image} alt="" />
                <div className="">
                    <div className='title-details'>
                        <div className='d-flex align-items-center type-details'>

                            <img src={article?.titleImg} alt="" />
                            <h1>{article?.type}</h1>


                        </div>
                        <div className=' d-flex justify-content-between align-items-center'>
                            <h4 className='titlecard'>{article?.title}</h4>

                            <FontAwesomeIcon icon={faCircleDot} />


                        </div>
                        <div className='d-flex detail'>
                            <p className=''>{article?.details}</p>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex date'>
                                <img src={article?.dateLogo} alt="" />
                                <p>{article?.date}</p>
                            </div>
                            <div className='d-flex date'>
                                <img src={article?.locationLogo} alt="" />
                                <p>{article?.location}</p>
                            </div>
                        </div>
                        {
                            article?.type === 'Meetup' ?
                                <>
                                    <button type="button" class="btn btn-outline-secondary w-100 mb-4 text-danger">Visit Website</button>
                                </>
                                :
                                <></>
                        }

                        {
                            article?.type === 'Job' ?
                                <>
                                    <button type="button" class="btn btn-outline-secondary w-100 mb-4 text-success">Apply on Timesjobs</button>
                                </>
                                :
                                <></>
                        }




                        {/* owner */}
                        <div className='d-flex justify-content-between owner-details'>
                            <div className='d-flex align-items-center '>
                                <img className='owner-img' src={article?.ownerImg} alt="" />
                                <h4 className='owner-name'>{article?.name}</h4>
                            </div>
                            <div className='d-flex align-items-center share'>
                                <FontAwesomeIcon icon={faEye} />
                                <p>{article?.views} Views</p>

                                <FontAwesomeIcon icon={faShareFromSquare} />

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ArticleCard;