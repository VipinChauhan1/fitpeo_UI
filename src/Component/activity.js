import React from 'react'
import gallery1 from "../Images/gallery1.PNG";
import gallery2 from "../Images/gallery2.PNG";
import gallery3 from "../Images/gallery3.PNG";
import word from "../Images/word.PNG";
import figma from "../Images/figma.PNG";
import pdf from "../Images/pdf.PNG";
import user2 from "../Images/user2.PNG";
import user3 from "../Images/user3.PNG"
import calender from "../Images/calender.PNG";

export default function Activity() {
  return (
    <div>
       <div class="card">
              <div className="card-links">
                <div className="nav-links">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Overview
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Client
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        update
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Budget
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        users
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="#">
                        Activity
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Settings
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Logs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div class="card">
                <div className="calender-card">
                  <div>
                    <span>
                      {" "}
                      <img src={calender} alt="calender"></img>
                    </span>
                    <span>July 28, 2022 - Activity</span>
                  </div>
                  <div className="calender-month">
                    <button>Today</button>
                    <button>Month</button>
                    <button>Year</button>
                    <button>2022</button>
                  </div>
                </div>

                <div className="user-comment">
                  <p>
                    Added two new modules in Finance Mobile Application
                    development
                  </p>
                  <span>Updated at 10:45 AM By</span>
                  <span>
                    <img src={user2} alt="client1"></img>
                  </span>
                </div>

                <div className="finance-users">
                  <div className="finance-details">
                    <div>
                      <input type="checkbox"></input>
                      <span className="payment-text">Payment Module</span>
                    </div>
                    <div>
                      <button className="finance-button">Finance</button>
                    </div>
                    <div>
                      <span>
                        <img src={user3} alt="user1"></img>
                      </span>
                      <span>
                        <img src={user2} alt="user2"></img>
                      </span>
                      <span>
                        <img src={user3} alt="user3"></img>
                      </span>
                    </div>
                    <div className="finance-buttons">
                      <button>In Progress</button>
                      <button>25-09-2022</button>
                    </div>
                  </div>
                  <div className="finance-details">
                    <div>
                      <input type="checkbox"></input>
                      <span className="payment-text">User Profile</span>
                    </div>
                    <div>
                      <button className="finance-button">Finance</button>
                    </div>
                    <div>
                      <span>
                        <img src={user3} alt="user1"></img>
                      </span>
                      <span>
                        <img src={user2} alt="user2"></img>
                      </span>
                      <span>
                        <img src={user3} alt="user3"></img>
                      </span>
                    </div>
                    <div className="finance-buttons">
                      <button>In Progress</button>
                      <button>25-09-2022</button>
                    </div>
                  </div>
                </div>

                <div className="image-gallery">
                  <div className="user-comment">
                    <p>2 Images files and 1 videos Uploded</p>
                    <span>Updated at 10:45 AM By</span>
                    <span>
                      <img src={user2} alt="client1"></img>
                    </span>
                  </div>

                  <div className="gallery-images">
                    <div>
                      <img src={gallery1} alt="gallery1"></img>
                    </div>
                    <div>
                      <img src={gallery2} alt="gallery2"></img>
                    </div>
                    <div>
                      <img src={gallery3} alt="gallery3"></img>
                    </div>
                  </div>
                </div>

                <div className="user-comment">
                  <p>
                    {`Pull Request URL ${"831"} and ${"#845"} marged in development Branch`}
                  </p>
                  <span>Updated at 10:45 AM By</span>
                  <span>
                    <img src={user3} alt="client1"></img>
                  </span>
                </div>

                <div className="user-comment">
                  <p>3 Project Files Uploded</p>
                  <span>Updated at 10:45 AM By</span>
                  <span>
                    <img src={user3} alt="client1"></img>
                  </span>
                </div>

                <div className="user-modules">
                  <div className="modules">
                    <div>
                      <span>
                        <img src={pdf} alt="pdf"></img>
                      </span>
                    </div>
                    <div>
                      <p>User Invoice</p>
                      <span>12MB</span>
                    </div>
                  </div>
                  <div className="modules">
                    <div>
                      <span>
                        <img src={word} alt="pdf"></img>
                      </span>
                    </div>
                    <div>
                      <p>User Invoice</p>
                      <span>12MB</span>
                    </div>
                  </div>
                  <div className="modules">
                    <div>
                      <span>
                        <img src={figma} alt="pdf"></img>
                      </span>
                    </div>
                    <div>
                      <p>User Invoice</p>
                      <span>12MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
 </div>
      

  )
}
