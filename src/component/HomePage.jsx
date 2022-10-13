import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Statistic} from 'antd'
import '../App.css'

import { useGetCryptosQuery } from '../services/cryptoApi'
// import Cryptocurrencies from './CryptoCurrencies'

import { CryptoCurrencies, News } from '../component'


const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStatus = data?.data?.stats

    if (isFetching) return "loading"
    const { Title } = Typography
    return (
        <>
            <Title level={2} className='heading'>加密貨幣市場狀況</Title>
            <Row>
                <Col className="homepage-col" span={12}> <Statistic title="Total CryptoCurrencies" value={globalStatus?.total}/></Col>
                <Col className="homepage-col" span={12}> <Statistic title="Total Exchanges" value={millify(globalStatus?.totalExchanges)}/></Col>
                <Col className="homepage-col" span={12}> <Statistic title="Total Market Cap" value={millify(globalStatus?.totalMarketCap)}/></Col>
                <Col className="homepage-col" span={12}> <Statistic title="Total 24hour Volume" value={millify(globalStatus?.total24hVolume)}/></Col>
                <Col className="homepage-col" span={12}> <Statistic title="Total Markets" value={millify(globalStatus?.totalMarkets)}/></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className="home-title" style={{display: 'inline', marign:'30 20'}}>加密貨幣市值排行榜</Title>
                <Title level={4} className="show-more" style={{display: 'inline', marginLeft: '30px'}}><Link to="/CryptoCurrencies">顯示更多</Link></Title>
                <CryptoCurrencies simplified/>
            </div>
            <div className='home-heading-container'>
                <Title level={2} className="home-title" style={{display: 'inline-block', marign:'30 20'}}>最新加密貨幣新聞</Title>
                <Title level={4} className="show-more" style={{display: 'inline-block', marginLeft: '30px'}}><Link to="/News">顯示更多</Link></Title>
                <News simplified/>
            </div>
        </>
    )
}

export default HomePage