import {Button, Flex, Layout, Menu, theme} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {useState} from "react";
import "./styles/index.scss";

const LayOuts = () => {
    const [collapsed, setCollapsed] = useState(false);
    const tokens = theme.useToken(); // ✅ 正确调用位置
    const {colorBgContainer, borderRadiusLG} = tokens.token;
    return (
        <Flex>
            <Layout className={"layout"}>
                <Sider trigger={null} collapsible collapsed={collapsed} className={"Slider"}>
                    <div className="demo-logo-vertical"/>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined/>,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined/>,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined/>,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header style={{padding: 0, background: colorBgContainer}}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Layout>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            CONTENT
                        </Content>
                        <Footer style={{padding: 0, background: colorBgContainer}} className={"Footer"}>
                            版权所有  © 2025 天璇的幻梦开发小组  All Rights Reserved.
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </Flex>
    )
}

export default LayOuts;
