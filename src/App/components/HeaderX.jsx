import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../data/redux/actions";
import "../../styles/header.css";
// import "./../styles/header.css"

import { Layout, Form, Input, Typography, SearchOutlined } from "antd";
// import { reduxForm } from 'redux-form';

const { Title } = Typography;
const { Header } = Layout;


class HeaderX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        let list = [];
        if (JSON.parse(localStorage.getItem('list'))) {
            list = JSON.parse(localStorage.getItem('list'));
        }
        if (list.length > 0) {
            this.setState({ list: list })
        }
    }

    handleChange = (event) => {
        if (event.target.value.length === 0) {
            this.props.onFetchPhotos();
        }
        else {
            this.props.onSearchPhotos(event.target.value);
        }
    }

    handleClick = (event) => {
        this.props.onSearchPhotos(event.target.value);
        document.getElementById('my-input-box').val(event.target.value)
    }

    handleKeypress = (event) => {
        if (event.keyCode === 13) {
            this.storeSuggestions(event.target.value)
            document.getElementsByClassName('options').hide()
        }
    }

    searchPhotos = (event) => {
        this.storeSuggestions(document.getElementById('my-input-box').val());
        document.getElementsByClassName('options').hide()
    }

    // storeSuggestions = (value) => {
    //     let newList = [...this.state.list, value]
    //     this.setState({
    //         list: newList
    //     })

    //     localStorage.setItem('list', JSON.stringify(newList))
    // }

    render() {
        return (
            <Header id="header">
                <Title level={1} id="title">Search Images</Title>
                <Form>
                    <Input
                        id="input"
                        ref={this.inputRef}
                        className=""
                        onChange={(event) => this.handleChange(event)}
                        onKeyDown={(event) => this.handleKeypress(event)}
                        type="text"
                        placeholder="Search here"
                    />
                    <SearchOutlined 
                        onClick={(event) => this.searchPhotos(event)}
                    />
                    {/* <div className="">
                            {
                                JSON.parse(localStorage.getItem('list')) ?
                                    JSON.parse(localStorage.getItem('list')).reverse().map((option, index) => (
                                        <option className="" onClick={(event) => this.handleClick(event)} key={index} value={option}>{option}</option>
                                    )) : null
                            }
                            <button type="button" className="" onClick={() => this.clearList()}>Clear All</button>
                        </div> */}
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