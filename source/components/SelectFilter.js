import React, { PropTypes } from "react";

class SelectFilter extends React.Component {

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
        return(
            <div className="list-group">
                {this.props.filters.map( (filter, index) => {

                    let className = "list-group-item"

                    if(filter.className !== undefined){
                        className += filter.className
                    }

                    if(filter.active){
                        className += " active"
                    }

                    return <a key={index} className={className} onClick={e => (this.props.onFilterSelect(filter))} >{filter.name}</a>
                })}
            </div>
        );
    }

}

SelectFilter.propTypes = {
	filters: PropTypes.array.isRequired,
  	onFilterSelect: PropTypes.func.isRequired
}

export default SelectFilter