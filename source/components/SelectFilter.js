import React, { PropTypes } from "react";

class SelectFilter extends React.Component {

    constructor(props) {
        super(props);
        this.shouldUpdate = false;
    }

    componentDidMount() { 
        if(this.props.componentDidMount !== undefined){
            this.props.componentDidMount();
        }
    }

    componentWillMount() { 
        if(this.props.componentWillMount !== undefined){
            this.props.componentWillMount();
        }
    }

    componentDidUpdate(nextProps, nextState) { 
        if(this.props.componentDidUpdate !== undefined){
            if(this.shouldUpdate){
                this.props.componentDidUpdate();
            }
        }
        this.shouldUpdate = true;
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.filters !== nextProps.filters;
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