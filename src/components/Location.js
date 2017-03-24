import React, {
  Component,
  PropTypes,
} from 'react';

class Location extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="location">
          <i className="fa fa-map-marker" aria-hidden="true" />
          <span>{this.props.location}</span>
        </div>
        <button
          className="refresh"
          onClick={() => {
            this.props.onRefreshClick();
          }}
        >
          <i
            className={`
              fa 
              fa-refresh
              ${this.props.isFetching ? 'rotate' : ''}
            `}
            aria-hidden="true"
          />
        </button>
      </div>
    );
  }
}

Location.propTypes = {
  location: PropTypes.string,
  onRefreshClick: PropTypes.func,
  isFetching: PropTypes.bool,
};

export default Location;
