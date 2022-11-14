import React from 'react'
import millify  from 'millify'
import { Collapse, Row, Col, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'
import '../App.css'

import { useGetExchangesQuery } from '../services/crytpoExchanges'


const { Text } = Typography
const { Panel } = Collapse

const Exchanges = () => {
  const { data, isFetching} = useGetExchangesQuery()
  const exchangeList = data
  console.log(data)

  if (isFetching) return 'Loading'


  return (
    <div>
      <Row className='exchange-list-title'>
        <Col span={6}>交易所名稱</Col>
        <Col span={6}>24h BTC交易量</Col>
        <Col span={6}>信任指數</Col>
        <Col span={6}>成立日期</Col>
      </Row>
        {exchangeList.map((exchange, i) => {
          return <Collapse>
            <Panel 
              showArrow={false}
              header={(
                <Row className='exchange-list'>
                <Col span={6}>{i+1}.   <Avatar className='exchange-image' src={exchange.image}/>   {exchange?.name}</Col>
                <Col span={6}>{millify(exchange?.trade_volume_24h_btc)}</Col>
                <Col span={6}>{exchange?.trust_score}</Col>
                <Col span={6}>{exchange?.year_established? exchange?.year_established: "不詳"}</Col>
              </Row>
            )}>
              官方網站：<a href={exchange.url} target="_blank">{exchange.url}</a>
              {/* {HTMLReactParser(exchange?.description)} */}
            </Panel>
            
          </Collapse>
          
        })}
      
    </div>
  )
}

export default Exchanges