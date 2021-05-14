import React from 'react'
import Table from './Table'
import Form from './Form'

class Content extends React.Component {
  render() {
    return (
      <div>
        <Table candidates={this.props.candidates} />
        <hr />
        { !this.props.hasVoted ?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : <div className="already_casted">You have already casted your vote.</div>
        }
        <p className="mt-3 acc">Your account: {this.props.account}</p>
      </div>
    )
  }
}

export default Content
