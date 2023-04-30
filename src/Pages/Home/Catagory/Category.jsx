/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import moment from 'moment';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
const Category = () => {
    const { id } = useParams()
    const data = useLoaderData();


    return (
        <div>
            { id && <h2>news length : {data.length}</h2>}
            {
                data.map(news =>
                    <div key={data.id}>
                        <Card className="mb-4">
                            <Card.Header className='d-flex align-items-center'>
                                <Image style={{ height: '40px' }} src={news.author?.img} roundedCircle />
                                <div className='ps-2 flex-grow-1'>
                                    <p className='mb-0'>{news.author?.name}</p>
                                    <p><small> {moment(news.author?.published_date).format('yyyy-MM-D')}</small></p>
                                </div>
                                <div>
                                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Img variant="top" src={news.image_url} />
                                <Card.Text>
                                    {news.details.length < 250 ? <>{news.details}</> :
                                        <>{news.details.slice(0, 250)}... <Link to={`/news/${news._id}`}>Read More</Link> </>
                                    }
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted d-flex">
                                <div className='flex-grow-1 d-flex align-items-center'>
                                    <Rating>
                                        style={{ maxWidth: 150 }}
                                        value={Math.round(news.rating?.number || 0)} readOnly </Rating>
                                    <span className='ms-2'> {news.rating?.number}</span>
                                </div>
                                <div>
                                    <FaEye></FaEye> {news.total_view}
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            }
        </div>
    );
};

export default Category;