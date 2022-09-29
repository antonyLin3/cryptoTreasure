import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'

import '../App.css'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Text, Title } = Typography
const { Option } = Select 

const gridStyle = {
        width: '50%'
    };

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({simplified}) => {
    const { data: cryptoNews, isFetching} = useGetCryptoNewsQuery('cryptocurrency')
    // console.log("News "+JSON.stringify(cryptoNews))

    if(!cryptoNews?.value) return 'Loading'

    return (
        <Row gutter={[ 24, 24 ]}>
            {cryptoNews.value.map((news, i) => {
                console.log(news, i)
                
                return <Col xs={24} sm={12} lg={8} key={i}>
                    <Card 
                        hoverable
                        className='news-card'
                    >
                        <a href={news.url} target='_blank' rel='noreferrer noopener'>
                            <Title className='news-title' level={4}>{news.name}</Title>
                                <div className='news-content-wrapper'>
                                    <div className='news-image-container'>
                                        <img src={news.image.thumbnail.contentUrl || demoImage} alt='news'></img>
                                    </div>
                                
                                    <div className='news-paragraph-wrapper'>
                                        <p>{news.description.length > 100
                                            ? `${news.description.substring(0,100)}...`
                                            : news.description}
                                        </p>
                                    </div>
                                    
                                </div>
                            
                                
                            
                            
                        </a>
                    </Card>
                </Col>
            })}
        </Row>
    )
}

export default News