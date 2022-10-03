import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Select, Typography } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined } from '@ant-design/icons'

import { cryptoApi, useGetCoinPriceQuery } from '../services/cryptoApi'

const { Title, Text } = Typography
const { Option } = Select




const CryptoDetail = () => {

  const { coinId } = useParams()

  const [timePeriod, setTimePeriod] = React.useState('7d')

  const data = useGetCoinPriceQuery(coinId)
  console.log(data)

  return (
    <div>
      CryptoDetail{coinId}
      {console.log(data)}
    </div>
    
  )
}

export default CryptoDetail