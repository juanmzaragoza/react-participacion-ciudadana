import React, { PropTypes } from "react"

const RowImagesToSections = ({id,children, title = '', total}) => {

	let itemFirst = true

	let items = []
	var i,j,temparray,chunk = total > 0? total:4
	for (i=0,j=children.length; i<j; i+=chunk) {
	    items.push(children.slice(i,i+chunk))
	}

	return (
		<div>
	  		{title? <h3>{title}</h3>:null}
			<div id={id} className="row">

				{/* Wrapper for slides */}
				<div className="carousel-inner">
					{items.map((item,index) => {
						let classNameActive = 'item' 
						if(itemFirst){
							classNameActive = 'item active'
							itemFirst = false
						}
						return (
							<div className={classNameActive} key={index} >
								<div className={"row"} >
									{item}
								</div>
							</div>
						)
					})}
				</div>

			</div>
		</div>
	)
}

RowImagesToSections.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  total: PropTypes.number.isRequired
}

export default RowImagesToSections