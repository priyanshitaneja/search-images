// import React from "react";
// import "./../styles/header.css"
// import { Layout, Form, Input, Typography } from "antd";
// import { reduxForm } from 'redux-form';

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