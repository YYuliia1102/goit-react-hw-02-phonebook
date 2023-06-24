import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    handleFilterChange = (event) => {
        this.props.onFilterChange(event.target.value);
    };

    render() {
        return (
            <input
                type="text"
                placeholder="Search by name"
                onChange={this.handleFilterChange}
            />
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default Filter;
