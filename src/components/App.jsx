import React from "react";
import { Form, Input, Typography, Layout } from "antd";

import "./App.css";

function App() {

    // const [input, setInput] = useState("")

    const { Title } = Typography;
    const { Header, Footer, Content } = Layout;

    const searchFunc = (event) => {
        console.log("search.....");
        // setInput(event.target.value)
    }

    const debounceFn = (func, time) => {
        let timeout;
        return function () {
            const functionCall = () => func.apply(this, arguments);
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
        }
    }

    const handleChange = debounceFn(searchFunc, 300)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("make api call")
    }

    return (
        <Layout>
            <Header>
                <Title level={1}>Search Images</Title>
                <Form size="large" onSubmit={handleSubmit} >
                    <Input
                        size="large"
                        type="text"
                        placeholder="search here"
                        // value={input}
                        onChange={handleChange}
                    />
                </Form>
            </Header>
            <Content />
            <Footer id="">
                Developed by PT &copy; 2020
            </Footer>
        </Layout>
    )
}

export default App;