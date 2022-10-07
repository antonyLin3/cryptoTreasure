import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title as ChartTitle, Tooltip, Legend} from 'chart.js'
import { Col, Row, Typography } from 'antd'





const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const { Title } = Typography
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        // ChartTitle,
        // Tooltip,
        // Legend
    )

    const coinPrice = []
    const coinTimeStamp = []

    for(let i = 0; i < coinHistory?.data?.history?.length; i++){
        coinPrice.unshift(coinHistory.data.history[i].price)
        // let timeStampElement = new Date()
        coinTimeStamp.unshift(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleString())
        //`${timeStampElement.getFullYear()}/${timeStampElement.getMonth()+1}/${timeStampElement.getDate()}`
        //  ${timeStampElement.getHours()}時  ${timeStampElement.getMinutes()}分  ${timeStampElement.getSeconds()}秒
    }

    // console.log(coinTimeStamp)

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