import React, { Component } from 'react';
import '../App.css';

export default class SocialMedia extends Component {

  render() {
    return (
      <div>
        <div class="full-line"></div>
          <div class="row">
            <div class="col-11 social-widget">
              <h3>Social Stats</h3>
            </div>
            <div class="col-3 flex">
              <div class="border flex social-grow">

                <div className="icons-background"><span className='twitter-icon'></span></div>

                <div class="social-stats social-inner-text">
                  <h4>Twitter</h4>
                  <span class="text-lg">10,345</span>
                </div>
              </div>
            </div>
            <div class="col-3 flex">
              <div class="border flex social-grow">
                <div className="icons-background"><span className='facebook-icon'></span></div>


                {/* <svg width="90" height="80">
                <use height="50" width="50" xlink:href="#facebook" class="twitter"/>
              </svg> */}
                <div class="social-stats social-inner-text">
                  <h4>Facebook</h4>
                  <span class="text-lg">8,739</span>
                </div>
              </div>
            </div>
            <div class="col-3 flex end-spacing">
              <div class="border flex social-grow">
                <div className="icons-background"><span className='google-icon'></span></div>

                {/* <svg width="90" height="80">
                <rect x="0" y="0" width="69" height="69" rx="55" ry="55" fill="#7377BF" stroke="#7377BF" stroke-width="0" />
                <use height="50" width="50" xlink:href="#google-plus" class="twitter"/>
              </svg> */}
                <div class="social-stats social-inner-text">
                  <h4>Google+</h4>
                  <span class="text-lg">2,530</span>
                </div>
              </div>
            </div>
          </div>
          </div>
      );
    }
  }
