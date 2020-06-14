import React from "react";
import "./header.css"
import { Layout, Form, Input, Typography } from "antd";

function HeaderX({search_text, onSearch, onChange}) {

    const { Title } = Typography;
    const { Header } = Layout;

    return (
        <Header>
            <Title level={1}>Search Images</Title>
            <Form>
                <Input
                    type="text"
                    placeholder="Search here"
                    value={search_text} 
                    onSearch={onSearch} 
                    onChange={onChange}
                />
            </Form>
        </Header>
    )

}

export default HeaderX;