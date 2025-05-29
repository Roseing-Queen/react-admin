import {Button, Flex, Layout, Menu, theme} from "antd";
import {Content, Header} from "antd/es/layout/layout";
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
import DreamFooter from "@/layout/modules/DreamFooter/DreamFooter.tsx";

const LayOuts = () => {
    const [collapsed, setCollapsed] = useState(false);
    const tokens = theme.useToken(); // ✅ 正确调用位置
    const {colorBgContainer, borderRadiusLG} = tokens.token;
    return (
        <Flex className={"layout-container"}>
            <Layout className={"layout"}>
                <Sider trigger={null} collapsible collapsed={collapsed} className={"Slider"}>
                    {!collapsed ? (
                        <div className="layout-logo-vertical">
                            <div className={"layout-logo"}></div>
                            <div className={"layout-logo-text"}>后台管理系统</div>
                        </div>
                    ) : (
                        <div className="layout-logo-vertical">
                            <div className={"layout-logo"} style={{height:'60px',width:'60px'}}></div>
                        </div>
                    )}
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
                        <DreamFooter/>
                    </Layout>
                </Layout>
            </Layout>
        </Flex>
    )
}

export default LayOuts;
