import React from "react";
import { connect } from 'react-redux';

import { Layout, Form, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import * as actions from "../../data/redux/actions";
import "../../styles/header.css";
import "../../styles/common.css";

const { Title } = Typography;
const { Header } = Layout;

class HeaderX extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.inputRef = React.createRef();
    }

    handleSearch = (event) => {
        this.props.onSearchPhotos(event.target.value);
    }

    debounceFn = (func, time) => {
        let timeout;
        return function () {
            const functionCall = () => func.apply(this, arguments);
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
        }  
    }

    handleChange = (event) => {
        if (event.target.value.length === 0) {
            this.props.onFetchPhotos();
        }
        else {
            this.debounceFn(this.handleSearch, 300);
        }
    }

    handleKeypress = (event) => {
        if (event.keyCode === 13) {
            this.handleSearch(event.target.value)
        }
    }

    render() {
        return (
            <Header id="header">
                <Title level={1} id="title">Search Images</Title>
                <Form>
                    <Input
                        name="search"
                        component="input"
                        id="input"
                        ref={this.inputRef}
                        className=""
                        onChange={(event) => this.handleChange(event)}
                        onKeyPress={(event) => this.handleKeypress(event)}
                        type="text"
                        placeholder="Search here"
                    />
                    <SearchOutlined id="SearchOutlined"
                        onClick={(event) => this.handleSearch(event)}
                    />
                </Form>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    return {
        photos: state.photos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchPhotos: (tag) => dispatch(actions.searchPhotos(tag)),
        onFetchPhotos: () => dispatch(actions.fetchPhotos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderX);
