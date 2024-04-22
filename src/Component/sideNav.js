import React from "react";

import { BsChat } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { AiOutlineSetting } from "react-icons/ai";
import {  MdOutlineCorporateFare } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";


export default function SideNav() {
  return (
   
    <div>
          <div class="sidenav">
              <div>
                <span>
                  <AiOutlineHome />
                </span>
              </div>
              <div>
                <span>
                  <MdOutlineCorporateFare />
                </span>
              </div>
              <div>
                <span>
                  <HiOutlineMail />
                </span>
              </div>
              <div>
                {" "}
                <span>
                  <SlCalender />
                </span>
              </div>
              <div >
                <span>
                  <BsChat />
                </span>
              
              </div>
              <div>
                <span>
                  <AiOutlineSetting />
                </span>
              </div>
              <div>
                {" "}
                <span>
                  <HiOutlineUser />
                </span>
              </div>
            </div>
    </div>
 
  );
}
