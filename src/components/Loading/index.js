import React from "react";
import { CircleLoading } from 'react-loadingg';
import PropTypes from 'prop-types';

const Loading = ({height}) => {

  return <div 	className="row"
				      style={{height:`${height}px`}}>
              <CircleLoading/>
          </div>;
};

Loading.propTypes = {
    height: PropTypes.number
  };

export default Loading;