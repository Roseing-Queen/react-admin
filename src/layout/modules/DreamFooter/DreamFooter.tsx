import {Footer} from "antd/es/layout/layout";
import {theme} from "antd";

const DreamFooter = () => {
    const tokens = theme.useToken(); // ✅ 正确调用位置
    const {colorBgContainer} = tokens.token;
    return (
        <Footer style={{padding: 0, background: colorBgContainer}} className={"Footer"}>
            版权所有 © 2025 天璇的幻梦开发小组 All Rights Reserved.
        </Footer>
    )
}
export default DreamFooter;
