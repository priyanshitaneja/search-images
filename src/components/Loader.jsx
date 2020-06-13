import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

function Loader() {
  render() {
    const { count } = this.props;
    return (
      <Row>
        {
          count.map(item => (
            <Col>
              <div>
                <div style={{ height: '150px' }} />
              </div>
            </Col>
          ))
        }
      </Row>
    );
  }
}

Loader.propTypes = {
  count: PropTypes.array.isRequired,
}

Loader.defaultProps = {
  count: [1, 2, 3]
}

export default Loader;
