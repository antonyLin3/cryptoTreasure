import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { cryptoApi, useGetCryptosQuery } from '../services/cryptoApi'

const CryptoCurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching} = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = React.useState(cryptosList?.data?.coins)
    const [searchTerm, setSearchTerm] = React.useState('')

    React.useEffect(() => {
        // setCryptos(cryptosList?.data?.coins)
        const filterData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filterData)
    },[cryptosList, searchTerm,])


    
    if (isFetching) return ('loaing...')

    return (
        <>
            {!simplified && <div 
                className='search-crypto'
                style={{width: '100%', margin: '30px auto', }}
            >
                <Input placeholder='Search CryptoCurrency' onChange={(e) => setSearchTerm(e.target.value)} style={{textAlign: 'center'}}>
                </Input>
            </div>}
            
            <Row gutter={[32, 32]} className="crypto-card-container">
                {console.log(cryptos)}
                {cryptos?.map((currency => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card 
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl} style={{width:30, height:30}}/>}
                                hoverable
                                loading={isFetching}
                            >
                                <p>價格: {millify(currency.price)}</p>
                                <p>市場份額: {millify(currency.marketCap)}</p>
                                <p>今日價格變化: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                )))

                }
            </Row>
        </>
    )
}

export default CryptoCurrencies