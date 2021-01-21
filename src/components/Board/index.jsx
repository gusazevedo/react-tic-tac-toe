import React from 'react';
import Square from '../Square';

import './style.css'

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      player: 1
    };
  }

  handleClick = (i) => {
    const {squares, player} = this.state;
    let array = squares;
    if (player === 1) {
      array[i]  = 'X';
      this.setState({squares: array, player: 2})
    } else {
      array[i]  = 'O';
      this.setState({squares: array, player: 1})
    }
    
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return(
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;