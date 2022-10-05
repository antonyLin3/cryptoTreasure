import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Select, Typography} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, NumberOutlined, ThunderboltFilled, ThunderboltOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors';

//正式環境接入api
// import { useGetCoinDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography
const { Option } = Select




const CryptoDetail = () => {

  

  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = React.useState('7d')
  // 測試用接回來的物件
  const data = {"status":"success","data":{"coin":{"uuid":"Qwsogvtv82FCd","symbol":"BTC","name":"BitCoin","description":"<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href=\"https://coinranking.com/blog/how-to-buy-your-first-bitcoin/\" rel=\"nofollow noopener\" target=\"_blank\">this blog article</a> on how to buy your first bitcoin.</p>\n","color":"#f7931A","iconUrl":"https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg","websiteUrl":"https://bitcoin.org","links":[{"name":"bitcoin.org","type":"website","url":"https://bitcoin.org"},{"name":"bitcoinmagazine.com","url":"https://bitcoinmagazine.com/","type":"website"},{"name":"bitcointalk.org","url":"https://bitcointalk.org/","type":"bitcointalk"},{"name":"blockchain.com","url":"https://www.blockchain.com/explorer","type":"explorer"},{"name":"bitcoin/bitcoin","url":"https://github.com/bitcoin/bitcoin","type":"github"},{"name":"r/bitcoin","url":"https://www.reddit.com/r/bitcoin/","type":"reddit"},{"name":"Bitcoin_Magazine","url":"https://t.me/Bitcoin_Magazine","type":"telegram"},{"name":"bitcoin","url":"https://t.me/bitcoin","type":"telegram"},{"name":"Bitcoin Whitepaper","url":"https://bitcoin.org/bitcoin.pdf","type":"whitepaper"}],"supply":{"confirmed":true,"supplyAt":1664855100,"max":"21000000","total":"19168575","circulating":"19168575"},"numberOfMarkets":5101,"numberOfExchanges":154,"24hVolume":"1370869.2048852071","marketCap":"19155286.472421985","fullyDilutedMarketCap":"20985441.84538047","price":"0.9993067545411598","btcPrice":"1","priceAt":1664855040,"change":"-0.07","rank":1,"sparkline":["0.9997643029184592","1.0001675705419553","1.000097098645401","1.0000443128723158","0.9999793581481361","0.9998058578838807","1.000175531800722","1.0001040351882418","1.0000089539817765","1.0000447061545692","1.0007416804332347","1.0000563719658202","1","1","1","1","1","1","1","1","1","1","1","1","1"],"allTimeHigh":{"price":"68763.41083248306","timestamp":1636502400},"coinrankingUrl":"https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc","tier":1,"lowVolume":false,"listedAt":1330214400}}}
  //正式環境接入的api
  // const {data, isFetching} = useGetCoinDetailsQuery(coinId, timePeriod)
  const time = ['3h', '24h', '7d', '30d', '1m', '1y', '3y', '5y']
  const cryptoDetails = data?.data?.coin

  // console.log(JSON.stringify(data))
  const stats = [
    //詳細資訊：1:37:19 45
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon:<NumberOutlined /> },
    { title: '24h volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined />},
    { title: 'MarketCap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined/> },
    { title: 'All-time-height(daily avg)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined/> }

  ]
  // console.log(cryptoDetails)

  return (
    <div>
      {/* CryptoDetail{coinId} */}
      <Col className='coin-detail-container'>
        <Col className='coin-heading-container'>
          <Title level={2} className='coin-name' style={{color: '#1890ff'}}>
            {cryptoDetails?.name} {cryptoDetails?.slug} price
          </Title>
          <p>
            {cryptoDetails?.name} live price in US dollars
            View value statistics, market cap and supply.
          </p>
          <hr />
        </Col>
        <Select 
          defaultValue="7d" 
          className='select-timePeriod' 
          placeholder='select time period'
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((option) => (<Option value={option}>{option}</Option>))}
        </Select>
        {/* line chart  */}
        <Col className='stats-container'>
          <Col className='coin-value-statistics'>
            <Col className='coin-value-statistics-heading'>
              <Title level={3} className='coin-details-heading'>
                {cryptoDetails.name} Value Statistics
              </Title>
              <p>
                An overview showing the stats of {cryptoDetails.name}
              </p>
            </Col>
            {stats.map(({icon, title, value})=> (
              <Col className='coin-stats'>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='coin-stats-value'>{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
      </Col>
    </div>
    
  )
}

export default CryptoDetail