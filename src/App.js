import React from 'react'
import { Routes, Route, Link, Navigate} from "react-router-dom"
import { Layout, Typography, Space } from "antd"
import './App.css'

import { Navbar, HomePage, CryptoCurrencies, CryptoDetail, News, Exchanges } from "./component"

const App = () => {
    const { Header, Content, Footer, Sider } = Layout;
    

    return (
    <div className='app'>
        <Layout>
            <Sider 
                className='navbar'
                breakpoint='lg'
                collapsedWidth="0"

            >
                <Navbar />
            </Sider>

            <Layout className='main'>
                <Content className='routes' style={{margin: '30px 20px'}}>
                        <Routes>
                            <Route path='/' element={<Navigate to="/homePage" />} />
                            <Route path='/homepage' element={<HomePage />} />
                            <Route path='/exchanges' element={<Exchanges />} />
                            <Route path='/cryptoCurrencies' element={<CryptoCurrencies />} />
                            <Route  path='/crypto/:coinId' element={<CryptoDetail />} />
                            <Route  path='/news' element={<News />} />
                            {/* <Redirect from="/" to="/homepage"/> */}
                            {/* <DefaultRoute element={<HomePage />} /> */}
                        </Routes>
                </Content>
                
                <Footer style={{textAlign: 'center', backgroundColor:'#001529'}}>
                    <Typography.Title level={5} style={{color: 'white'}}>
                        AntonyLin produce <br />
                        All right reserve
                    </Typography.Title>
                    <Space>
                        <Link to='/homePage'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/cryptoCurrencies'>cryptoCurrencies</Link>
                    </Space>
                </Footer>
            </Layout>
        </Layout>
    </div>
    )
}

export default App