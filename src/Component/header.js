import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import user2 from "../Images/user2.PNG";
import "../App.css";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a className="navbar-brand" href="#">
            Finance App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                class="form-control"
                placeholder="Search User , Events and more"
              />
            </div>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown" id="nav-dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      France
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Italein
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a>
                  <IoSettingsOutline />
                </a>
              </li>
              <li class="nav-item">
                <span>
                  <IoNotificationsOutline />
                </span>
                <span className="count-notification">1</span>
              </li>

              <li class="nav-item">
                <div className="userpic">
                  <span>
                    <img src={user2} alt="userpic"></img>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
