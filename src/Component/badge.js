import React from "react";
import { AiOutlineExport } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";

export default function Badge() {
  return (
    <div className="breadcrumb-Navigation">
         <div class="container">
    <div class="row align-items-center">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Component</a></li>
            <li class="breadcrumb-item active" aria-current="page">Activity</li>
          </ol>
        </nav>
      </div>
      <div class="col-auto">
        <div className="badge-button">
        <button><AiOutlineImport />Import</button>
    <button> <AiOutlineExport/> Export</button>
    <button>Catagory</button>
    
    
        </div>
 
      </div>
    </div>
  </div>
    </div>
 
  );
}
