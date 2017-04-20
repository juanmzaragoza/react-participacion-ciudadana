import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router'

const ListGroupThumbnailItem = ({thumbnail_src, label, description, linkHref, colSm = 6, colMd = 3, descriptionTextClass = ''}) => {

	const classNameRoot = "col-md-"+colMd+" col-sm-"+colSm+" list-group list-group-content list-group-multi";
	
  const style = {
      backgroundImage: 'url(' + thumbnail_src + ')'
  }

	return(
		<div className={classNameRoot}>
            <Link to={linkHref} className="list-group-item list-thumb" title={label}>
          		<div style={style}></div>
              	<h4>{label}</h4>
              	<p className={descriptionTextClass}>{description}</p>
              	<p>
                	<span className="glyphicon glyphicon-unchecked"></span>
                	<span className="glyphicon glyphicon-paperclip"></span>
              	</p>
            </Link>
        </div>
	)

}

ListGroupThumbnailItem.propTypes = {
  thumbnail_src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  colSm: PropTypes.number,
  colMd: PropTypes.number,
  descriptionTextClass: PropTypes.string
}

export default ListGroupThumbnailItem