import React, {
  Component
} from 'react';
import '../App.css';
// Dependances
import {
  Row,
  Col,
  Clearfix,
} from 'react-bootstrap';

export default class SocialMedia extends Component {

  render() {
    return (
      <div>
        <div class="full-line"></div>
          <Row>
            <Col xs={12} md={12}>
              <h3>Social Stats</h3>
            </Col>
            <Col xs={3} md={4}>
              <Row>
              <div className="border flex social-grow">
                <Col>
                  <div className="icons-background"><span className='twitter-icon'></span></div>
                </Col>
                <Col md={5}>
                  <div class="social-stats social-inner-text">
                    <h4>Twitter</h4>
                    <span class="text-lg">10,345</span>
                  </div>
                </Col>
              </div>
              </Row>
            </Col>
            <Col xs={3} md={4}>
              <div className="border flex social-grow">
                <div className="icons-background"><span className='facebook-icon'></span></div>

                <div class="social-stats social-inner-text">
                  <h4>Facebook</h4>
                  <span class="text-lg">8,739</span>
                </div>
              </div>
            </Col>
            <Col xs={3} md={4}>
              <div className="border flex social-grow">
                <div className="icons-background"><span className='google-icon'></span></div>

                <div class="social-stats social-inner-text">
                  <h4>Google+</h4>
                  <span class="text-lg">2,530</span>
                </div>
              </div>
            </Col>
          </Row>
          </div>
    );
  }
}