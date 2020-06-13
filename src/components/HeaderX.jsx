import React from "react";
import "./header.css"
import { Header, Form, Input, Typography } from "antd";

function HeaderX({ title, search_text, show_search_overlay, search_keys, onSearch, onChange, onClickSearchKey }) {

    const { Title } = Typography;

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