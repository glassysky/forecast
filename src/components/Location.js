import React, {
  Component,
  PropTypes,
} from 'react';
import './Location.css';

class Location extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="location">
          <i className="fa fa-map-marker" aria-hidden="true" />
          <span>{this.props.location}</span>
        </div>
        {
          this.props.onRefreshClick ?
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
            :
            null
        }
      </div>
    );
  }
}

Location.defaultProps = {
  onRefreshClick: () => {},
};

Location.propTypes = {
  location: PropTypes.string.isRequired,
  onRefreshClick: PropTypes.func,
  isFetching: PropTypes.bool.isRequired,
};

export default Location;
