import React, { Component } from 'react';
// import InterestCard from './InterestCard';
import UserInfoCard from './modules/UserInfoCard/UserInfoCard';
// import PlayersCard from './PlayersCard';

import './styles/MainCard.css';

class MainCard extends Component {
  state = { place: 0, visibleCard: [true, false, false] }
  clickNext = () => {
    if (this.state.place < 2) {
      this.setState((prevState) => ({
        place: prevState.place += 1,
      }));
    }
  }

  render() {
    const place = this.state.place;
    return (
            <div>
                <div className="side_bar" > </div>
                <div className="main_card">
                    {place === 0 && <UserInfoCard userLocation={place} />}
                    <button onClick={this.clickNext} className="next_button">Next</button>
                </div>
                <div className="side_bar" />
            </div>
        );
  }
}
export default MainCard;
