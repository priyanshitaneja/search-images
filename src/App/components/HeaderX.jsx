import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../data/redux/actions";
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

    handleChange = (e) => {
        if (e.target.value.length === 0) {
            this.props.onFetchPhotos();
        }
        else {
            this.props.onSearchPhotos(e.target.value);
        }
    }


    handleClick = (e) => {
        this.props.onSearchPhotos(e.target.value);
        document.getElementById('my-input-box').val(e.target.value)
    }

    // //Suggestion box search
    // clearList = () => {
    //     localStorage.removeItem('list');
    //     this.setState({ list: [] })
    //     $('.options').hide()
    // }

    // showSuggestions = () => {
    //     if (this.state.list.length > 0) {
    //         $('.options').show()
    //     }
    // }

    searchPhotos = (e) => {
        this.storeSuggestions(document.getElementById('my-input-box').val());
        document.getElementsByClassName('options').hide()
    }

    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.storeSuggestions(e.target.value)
            document.getElementsByClassName('options').hide()
        }
    }

    storeSuggestions = (value) => {
        let newList = [...this.state.list, value]
        this.setState({
            list: newList
        })

        localStorage.setItem('list', JSON.stringify(newList))
    }

    render() {
        return (

            <Header className="">
                <Title level={1}>Search Images</Title>

                <Form className="">
                    <div className="">
                        <Input
                            id=""
                            ref={this.inputRef}
                            className=""
                            onChange={(e) => this.handleChange(e)}
                            // onSelect={() => this.showSuggestions()}
                            onKeyDown={(e) => this.keyPress(e)}
                            type="text"
                            placeholder="Search here"
                        />
                        <SearchOutlined 
                            style={{
                            right: "10px",
                            top: "6px",
                            color: '#24827d',
                            cursor: "pointer"
                        }}
                        onClick={(e) => this.searchPhotos(e)}
                        />
                        <div className="">
                            {
                                JSON.parse(localStorage.getItem('list')) ?
                                    JSON.parse(localStorage.getItem('list')).reverse().map((option, index) => (
                                        <option className="" onClick={(e) => this.handleClick(e)} key={index} value={option}>{option}</option>
                                    )) : null
                            }
                            <button type="button" className="" onClick={() => this.clearList()}>Clear All</button>
                        </div>
                    </div>
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