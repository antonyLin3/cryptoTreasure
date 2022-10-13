import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../images/money.png'

const Navbar = () => {

    // const [activeMenu, setActiveMenu] = React.useState(true)
    // const [screenSize, setScreenSize] = React.useState(null)

    // React.useEffect(() => {
    //     const handleResize = () => setScreenSize(window.innerWidth)
    //     window.addEventListener('resize', handleResize)
    //     handleResize()
    //     return () => window.removeEventListener('resize', handleResize)
    // },[])

    // React.useEffect(() => {
    //     if (screenSize < 700){
    //         setActiveMenu(false)
    //     } else {
    //         setActiveMenu(true)
    //     }
    // },[screenSize])

    return (
        <div className='nav-container'> 
            <div className='logo-container'>
                <Typography.Title level={3} className='logo' style={{margin:'20px 10px'}}>
                    <Link to='/HomePage'> 加密寶網站</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container' onClick={() => setActiveMenu (!activeMenu)}>
                    <MenuOutlined></MenuOutlined>
                </Button> */}
            </div>

            <Menu 
                theme ='dark'
                defaultSelectedKeys={['0']}
            >
                <Menu.Item icon={<HomeOutlined />} key='0'>
                    <Link to="/homePage">首頁</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} key='1'>
                    <Link to="/cryptoCurrencies">加密貨幣</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />} key='2'>
                    <Link to="/exchanges">交易所</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />} key='3'>
                    <Link to="/news">新聞</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar