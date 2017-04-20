import { default as React, Component} from "react";
import PropTypes from "prop-types";

class Row extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={"row"}>	
				{(Array.isArray(this.props.children) && this.props.children.length > 1)? 
					this.props.children.map((child, index) => {
						let className, colSm = (this.props.children.length % 2) == 0? 6:4;
						if(this.props.sizeCols !== undefined && parseFloat(this.props.sizeCols[index])>0){
							className = "col-xs-12 col-sm-"+colSm+" col-md-"+this.props.sizeCols[index]
						} else{
							className = "col-xs-12 col-sm-"+colSm+" col-md-"+Math.round(12/this.props.children.length)
						}
						return <div className={className} key={index}>{child}</div>
					}):
					<div className={"col-xs-12 col-sm-12 col-md-12"}>
						{this.props.children}
					</div>

				}
			</div>
		)
	}
}

Row.propTypes = {
  sizeCols: PropTypes.array
}

export default Row