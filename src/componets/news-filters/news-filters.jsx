import { Component } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

export class NewsFilters extends Component {
    

    render() {
        const option = [
            {label: 'isSpecial', value: 1},
            {label: 'isLink', value: 2},
            {label: 'isPhoto', value: 3},
            
        ]
        return (
            <>
                {
                    option.map((option) => (
                        <button onClick={() => this.props.handleFilter(option.label)} key={option.value}>{option.label}</button>
                    ))
                }
                <button onClick={this.props.resetHandler}>reset</button>
            </>
        )
    }
}
NewsFilters.propTypes = {
    handleFilter: PropTypes.func,
    resetHandler: PropTypes.func,
    
}