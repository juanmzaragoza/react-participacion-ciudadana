import { default as React, Component, PropTypes } from "react";
import Row from "./Row"

class Section extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const titleIcon = (this.props.titleIcon)? this.props.titleIcon:null;
		const clearElement = (this.props.title != undefined && this.props.title != '')? <div className="clear"></div>:null;
		const renderInOneCol = (this.props.renderInOneCol !== undefined && this.props.renderInOneCol)? true:false;

		return (
			<section id={this.props.id} className="container-fluid">
				<div className={"container"}>	
					
					{(this.props.title != undefined && this.props.title != '')? 
						<div className={"row"}>	
							<div className="col-md-12">
								<h2>{this.props.title} {titleIcon}</h2>
							</div>
						</div>
						:null
					}

					{clearElement}

					{renderInOneCol?
						<div className={"row"}>	
							{this.props.children}
						</div>
						:
						<Row sizeCols={this.props.sizeCols}>
							{this.props.children}
						</Row>
					}
					
				</div>
			</section>
		)
	}
}

Section.propTypes = {
  id: PropTypes.string,
  titleIcon: PropTypes.object,
  title: PropTypes.string,
  sizeCols: PropTypes.array,
  renderInOneCol: PropTypes.bool,
}

export default Section