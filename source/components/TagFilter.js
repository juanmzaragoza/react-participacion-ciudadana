import React, { PropTypes } from "react";
import { TagCloud } from "react-tagcloud";


class TagFilter extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() { 
        if(this.props.componentDidMount !== undefined){
            this.props.componentDidMount();
        }
    }

    componentDidUpdate(nextProps, nextState) { 
        if(this.props.componentDidUpdate !== undefined){
            this.props.componentDidUpdate();
        }
    }

    render() {

        const colorActive = "#00b2e2", colorInactive = "#5574c3";

        let tags = [];
        for(let index in this.props.filters){
            let tag = {
                id: this.props.filters[index].id,
                value: this.props.filters[index].name,
                count: this.props.filters[index].count,
                color: this.props.filters[index].active? colorActive:colorInactive
            }
            tags.push(tag);
        }

        return(
            <div className="list-group">
		        <TagCloud minSize={12}
		            maxSize={35}
		            tags={tags}
		            style={{textAlign: 'center'}}
                    shuffle={false}
                    onClick={tag => (this.props.onFilterSelect(tag))} />
            </div>
        );
    }

}

TagFilter.propTypes = {
	filters: PropTypes.array.isRequired,
  	onFilterSelect: PropTypes.func.isRequired
}

export default TagFilter