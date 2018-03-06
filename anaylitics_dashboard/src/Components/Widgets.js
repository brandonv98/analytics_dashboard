import React from 'react';

const Widgets = () => {
  return (
      <div className="row">
            <div className="col-6 widget-panel border widget-layout">
              <h3>New Members</h3>
              <ul>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  <span className="date">10/15/15</span>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic-1"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  <span className="date">10/15/15</span>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic-2"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  <span className="date">10/15/15</span>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic-3"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  <span className="date">10/15/15</span>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
              </ul>
            </div>
            <div className="col-6 border widget-panel">
              <h3>Revent Activity</h3>
              <ul>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  {/* <a className="arrow" href="#">&#8250;</a> */}
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic-1"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  {/* <a className="arrow" href="#">&#8250;</a> */}
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic-2"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  {/* <a className="arrow" href="#">&#8250;</a> */}
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li className="flex spaced">
                  <div className="group flex">
                    <div className="avitar-pic-3"></div>
                    {/* <span className="avitar-name-new-members">Jack Diven <br><a href="#"> jackbrown@example.com</a></span> */}
                  </div>
                  {/* <a className="arrow" href="#">&#8250; /> */}
                </li>
                <li>
                  <div className="divider"></div>
                </li>
              </ul>
            </div>
            <div className="col-6 border widget-panel flex justify-widget border-delete">
              <h3 id="msUser">Message User</h3>
              <form id="dm-user" className="user-message" action="index.html" method="post">
                <input id="error" autocomplete="on" type="text" name="user-name" placeholder="Search for User" required />
                <textarea id="error" className="input-areas" name="user-message" rows="5" cols="40" placeholder="Message for User" required />
                <button id="sendBtn" className="btn-message" type="button" name="user-send">SEND</button>
              </form>
            </div>
            <div className="col-6 border widget-panel flex justify-widget border-delete">
              <h3>Settings</h3>
              <div className="flex col-6 justify-settings">
                <span className="settings-label">Send Email Notification</span>
                <div className="col-2">
                  <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider"><span className="slider-on">ON</span></span>
                </label>
                </div>
              </div>

              <div className="flex">
                <div className="flex col-6 justify-settings">
                  <span className="settings-label">Set Profile to Public</span>
                  <div className="col-2">
                    <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"><span className="slider-on">ON</span></span>
                  </label>
                  </div>
                </div>
              </div>

              <select className="dropdown-timezone" name="Select Timezone">
              <option value="time">Select Timezone</option>
            </select>
              <div className="flex settings-btn">
                <button id="save-btn" className="btn-save settings-btn" type="button" name="user-send">SAVE</button>
                <button className="btn-cancel settings-btn" type="button" name="user-send">CANCEL</button>
              </div>
            </div>


          </div>
    );
}

export default Widgets;
