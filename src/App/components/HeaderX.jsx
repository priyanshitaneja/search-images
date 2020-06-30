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

    componentDidMount() {
        let list = [];
        // if (JSON.parse(localStorage.getItem('list'))) {
        //     list = JSON.parse(localStorage.getItem('list'));
        // }
        if (list.length > 0) {
            this.setState({ list: list })
        }
    }

    handleClick = (event) => {
        // document.getElementById('input').val(event.target.value);
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
            this.props.debounceFn(this.handleClick, 300);
            // this.props.onSearchPhotos(event.target.value);
        }
    }

    // storeSuggestions = (value) => {
    //     let newList = [...this.state.list, value]
    //     this.setState({
    //         list: newList
    //     })

    //     localStorage.setItem('list', JSON.stringify(newList))
    // }


    handleKeypress = (event) => {
        if (event.keyCode === 13) {
            this.handleClick(event.target.value)
        }
    }

    // searchPhotos = (event) => {
    //     // this.storeSuggestions(document.getElementById('input').val());
    //     // document.getElementsByClassName('options').hide();
    // }


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
                        onClick={(event) => this.searchPhotos(event)}
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

// function SearchForm({ search_text, onSearch, onChange }) {

//     const { Title } = Typography;
//     const { Header } = Layout;

//     return (
//         <Header>
//             <Title level={1}>Search Images</Title>
//             <Form>
//                 <Input
//                     name="search"
//                     id="search"
//                     component="input"
//                     type="text"
//                     placeholder="Search here"
//                     value={search_text}
//                     onSearch={onSearch}
//                     onChange={onChange}
//                 />
//             </Form>
//         </Header>
//     )

// }

// export default reduxForm({
//     form: 'searchForm', // a unique identifier for this form
// })(SearchForm);