import React from 'react'

class Table extends React.Component {
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th className='text'>#</th>
            <th className='text'>Name</th>
            <th className='text'>Votes</th>
          </tr>
        </thead>
        <tbody >
          {this.props.candidates.map((candidate) => {
            return (
              <tr>
                <th>{candidate.id.toNumber()}</th>
                <td>{candidate.name}</td>
                <td>{candidate.voteCount.toNumber()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Table
