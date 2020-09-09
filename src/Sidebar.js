import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import {TwitterOutlined,SearchOutlined,
    HomeOutlined,BellOutlined,MailOutlined,
    BookOutlined,UnorderedListOutlined,SmileOutlined,EllipsisOutlined} from '@ant-design/icons';
import {Button} from 'antd';


    function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterOutlined className="Icon"/>
            <div className="SidebarOption">
            <SidebarOption active Icon={HomeOutlined} text="Home"/>
            <SidebarOption Icon={SearchOutlined} text="Explore"/>
            <SidebarOption Icon={BellOutlined} text="Notifications"/>
            <SidebarOption Icon={MailOutlined} text="Messages"/>
            <SidebarOption Icon={BookOutlined} text="Bookmarks"/>
            <SidebarOption Icon={UnorderedListOutlined} text="Lists"/>
            <SidebarOption Icon={SmileOutlined} text="Profile"/>
            <SidebarOption Icon={EllipsisOutlined} text="More"/>
            </div>
            <Button type="primary" className="sidebar__tweet" >
          Tweet
        </Button>
        </div>
    )
}

export default Sidebar
