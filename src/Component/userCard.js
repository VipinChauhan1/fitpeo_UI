import React from "react";
import user2 from "../Images/user2.PNG";
import user3 from "../Images/user3.PNG";
import logo from "../Images/logo.PNG";

export default function UserCard() {
  return (
    <div>
      <div className="card-user">
        <div class="card">
          <div className="logo">
            <span>
              {" "}
              <img src={logo} alt="..." />
            </span>
            <button>In Progress</button>
          </div>

          <div class="card-body">
            <h5 class="card-title">Finance App</h5>
            <p class="card-text">
              It is a long eastablised fact that a reader to sets
            </p>
          </div>
          <div className="card-button">
            <button>Add User</button>
            <button>Set Target</button>
          </div>
          <div class="card-body">
            <div>
              <span>Due Date</span>

              <p>
                {" "}
                25-09-2022
                <span className="due-date-remender"> [60 days Remaining]</span>
              </p>
            </div>
            <div>
              <span>Budget</span>
              <p>{`$ 25000`}</p>
            </div>
            <div>
              <span>Client</span>
              <div className="client-details">
                <span>
                  <img src={user2} alt="client"></img>
                </span>
                <span className="client-name">Christopjer JD</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Assigned Users</div>
          <div class="card-body">
            <div className="Assigned-user">
              <div>
                <span>
                  <img src={user2} alt="none"></img>
                </span>
              </div>
              <div>
                <span>Alexandra</span>
                <p>alexndra@gmail.com</p>
              </div>
              <div className="progessbar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-50"></div>
                </div>
                <p>2 tasks</p>
              </div>
            </div>
            <div className="Assigned-user">
              <div>
                <span>
                  <img src={user3} alt="none"></img>
                </span>
              </div>
              <div>
                <span>Alexandra</span>
                <p>alexndra@gmail.com</p>
              </div>
              <div className="progessbar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>
                <p>2 tasks</p>
              </div>
            </div>
            <div className="Assigned-user">
              <div>
                <span>
                  <img src={user2} alt="none"></img>
                </span>
              </div>
              <div>
                <span>Alexandra</span>
                <p>alexndra@gmail.com</p>
              </div>
              <div className="progessbar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-50"></div>
                </div>
                <p>2 tasks</p>
              </div>
            </div>
            <div className="Assigned-user">
              <div>
                <span>
                  <img src={user3} alt="none"></img>
                </span>
              </div>
              <div>
                <span>Alexandra</span>
                <p>alexndra@gmail.com</p>
              </div>
              <div className="progessbar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-25"></div>
                </div>
                <p>2 tasks</p>
              </div>
            </div>
            <div className="Assigned-user">
              <div>
                <span>
                  <img src={user3} alt="none"></img>
                </span>
              </div>
              <div>
                <span>Alexandra</span>
                <p>alexndra@gmail.com</p>
              </div>
              <div className="progessbar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>
                <p>2 tasks</p>
              </div>
            </div>

            <div className="Assigned-more-user">
              <button>View All Users</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
