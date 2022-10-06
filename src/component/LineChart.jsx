import React from 'react'
import { Line } from 'react-chartjs-2'

import { Col, Row, Typography } from 'antd'

const { Title } = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {

    const coinPrice = []
    const coinTimeStamp = []

    for(let i = 0; i < coinHistory?.data?.history?.length; i++){
        coinPrice.push(coinHistory.data.history[i].price)
        // let coinTimeStampElement = new Date(1995,11,19)
        // coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const option = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className="chart-title">{coinName}</Title>
                <Col className='price-container'>
                    <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                    <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} optopn={option}/>
        </>
    )
}

export default LineChart