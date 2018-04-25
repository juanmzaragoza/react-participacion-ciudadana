import { default as React, Component} from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Section from "components/Layout/Section";
import ImageLinkItem from "components/Item/ImageLinkItem";

import { getItemsObrasFromAction } from "components/ListThumbnailDescription";
import {  clearBodySection } from 'actions/SectionAction';
import {  fetchItemsFromGallery } from 'actions/MediaAction';

export class ContentNavegacionCategorias extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.componentDidMount();
	}

	componentWillUnmount() {
		this.props.componentWillUnmount();
	}

	render() {

		const items = this.props.items,
					isLoading = this.props.isLoading,
					itemsLength = items.length,
					spin = <h1 style={{textAlign: 'center'}}><span className="glyphicon glyphicon-refresh spin"></span></h1>;;

		return (
			isLoading?
				spin
				:
				<Section id={"content-nav-btn"} >
					{
						items.map((item,index) => {

		    			// if is the last one, add animation slide in right
		    			let animatedClass = "animated zoomIn";
		    			if(!index){
		    				animatedClass = "animated slideInLeft";
		    			} else if(itemsLength === index + 1){
		    				animatedClass = "animated slideInRight";
		    			}

		    			let href = item.linkHref? item.linkHref:'#',
		    					target = "_blank";
		    			if(href.indexOf('${web_url}') >= 0){ // if contains ${web_url}
		    				href = href.replace('${web_url}','');
		    				target = "";
		    			}

							return(
								<ImageLinkItem 
									target={target}
									key={index}
				    			linkHref={href}
				    			imageSrc={item.imageSrc}
				    			description={item.description} 
				    			animatedClass={animatedClass} />
							)
						})
					}
		    </Section>
		)
	}
}

ContentNavegacionCategorias.propTypes = {
	items: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	componentDidMount: PropTypes.func.isRequired,
	componentWillUnmount: PropTypes.func.isRequired,
};

//container
const mapStateToProps = (state, ownProps) => {
    return {
      isLoading: (state.bodySection.isFetching || state.bodySection.errorRequest),
      items: getItemsObrasFromAction(state.bodySection.items),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchItemsFromGallery('home'))
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const ContentNavegacionCategoriasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentNavegacionCategorias)