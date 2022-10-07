import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'

import '../App.css'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography
const { Option } = Select 

const gridStyle = {
        width: '50%'
    };

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'



const News = ({simplified}) => {
    const [newCategory, setNewCategory] = React.useState('cryptoCurrency')
    const { data: cryptoNews, isFetching} = useGetCryptoNewsQuery(newCategory)
    const { data: cryptoList } = useGetCryptosQuery(100)
    // console.log("News "+JSON.stringify(cryptoNews))

    if(!cryptoNews?.value) return 'Loading'

    return (
        <Row gutter={[ 24, 24 ]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        style={{width: '300px'}}
                        showSearch
                        placeholder="選擇加密貨幣"
                        optionFilterProp='children'
                        onChange={(value) => setNewCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurrency">CryptoCurrency</Option>
                        {cryptoList?.data?.coins.map((coin, i) => <Option value={coin.name} key={i}>{coin.name}</Option>)}
                        {/* {console.log(cryptoList.data.coins[0].name)} */}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => {
                // console.log(news, i)
                
                return <Col xs={24} sm={12} lg={8} key={i}>
                    <Card 
                        hoverable
                        className='news-card'
                    >
                        <a href={news.url} target='_blank' rel='noreferrer noopener'>
                            <Title className='news-title' level={4}>{news.name}</Title>
                                <div className='news-content-wrapper'>
                                    <div className='news-image-container'>
                                        <img src={news?.image?.thumbnail.contentUrl || demoImage} alt='news'></img>
                                    </div>
                                
                                    <div className='news-paragraph-wrapper'>
                                        <p>{news.description.length > 100
                                            ? `${news.description.substring(0,100)}...`
                                            : news.description}
                                        </p>
                                    </div>
                                    <div>
                                        <Avatar  style={{width: '30px', height: '30px'}} src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                                        <Text style={{paddingLeft: '10px', marginRight: '1px'}}>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                        <Text style={{padding: '10px'}} className='provider'>{news.provider[0].name}</Text>
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