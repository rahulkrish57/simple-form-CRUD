import React from "react";
import "./featured.css";
// import circular progress bar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import icons
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Featured = () => {
  return (
    <div className="featured">
      <div className="top-featured">
        <h1 className="title-featured">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom-featured">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <p className="title-para-featured">Total Sales Made Today</p>
        <p className="amount-featured">$420</p>
        <p className="description-featured">
          Previous transcations processing.Last payments may not be included.
        </p>
        <div className="summary-featured">
            <div className="item-featured">
                <div className="itemTitle-featured ">Target</div>
                <div className="itemResult-featured positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                    $12.4K
                </div>
            </div>
            <div className="item-featured">
                <div className="itemTitle-featured ">Last Week</div>
                <div className="itemResult-featured negative">
                <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                    $12.4K
                </div>
            </div>
            <div className="item-featured">
                <div className="itemTitle-featured ">Last Month</div>
                <div className="itemResult-featured positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                    $12.4K
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
