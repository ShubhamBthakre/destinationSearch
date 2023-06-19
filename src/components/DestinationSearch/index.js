// Write your code here
import {Component} from 'react'
import DestinationsItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchedResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-search-container">
            <input
              type="search"
              className="search-input"
              placeholder="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>

          <ul className="destinations-list">
            {searchedResults.map(eachDestination => (
              <DestinationsItem
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
