import { default as React, Component} from "react";
import PropTypes from "prop-types";
import Row from "components/Layout/Row"

class Section extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const titleIcon = (this.props.titleIcon)? this.props.titleIcon:null;
		const clearElement = (this.props.title != undefined && this.props.title != '')? <div className="clear"></div>:null;
		const renderInOneCol = (this.props.renderInOneCol !== undefined && this.props.renderInOneCol)? true:false;
		const className = this.props.className? "container-fluid "+this.props.className:"container-fluid ";

		return (
			<section id={this.props.id} className={className}>
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
							<div className="col-xs-12 col-sm-12 col-md-12">
								{this.props.children}
							</div>
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
  className: PropTypes.string
}

export default Section