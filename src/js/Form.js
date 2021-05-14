import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: 0,
    }
  }

  getSelectedCandidate(e) {
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });
    document.getElementById(e.target.value).checked = true;

    this.setState({ choice: e.target.value }, () => { console.log('New state:', this.state); });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.castVote(this.state.choice);
  }

  render() {
    return (
      <div style={{ marginTop: "80px" }}>
        <div class="row m-auto">
          <div class="col-md-2  note" style={{ marginLeft: "-5px" }}>AAP</div>
          <div class="col-md-2  note" style={{ marginLeft: "71px" }}>BJP</div>
          <div class="col-md-2  note" style={{ marginLeft: "73px" }}>BSP</div>
          <div class="col-md-2  note" style={{ marginLeft: "66px", paddingLeft: "30px" }}>INC</div>
        </div>

        <div class="row" style={{ marginTop: "15px" }}>
          <div class="col-md-1 mr-auto">
            <label class="switch">
              <input id="1" name="myCheckbox" type="checkbox" onChange={(e) => { this.getSelectedCandidate(e) }} value="1" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="col-md-1 m-auto">
            <label class="switch">
              <input id="2" name="myCheckbox" type="checkbox" onChange={(e) => { this.getSelectedCandidate(e) }} value="2" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="col-md-1 m-auto">
            <label class="switch">
              <input id="3" name="myCheckbox" type="checkbox" onChange={(e) => { this.getSelectedCandidate(e) }} value="3" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="col-md-1 m-auto">
            <label class="switch">
              <input id="4" name="myCheckbox" type="checkbox" onChange={(e) => { this.getSelectedCandidate(e) }} value="4" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <button type='submit' onClick={(e) => { this.submitForm(e) }} className='btn btn-danger mt-5 mb-5 shadow' style={{ width: "100px" }}>Vote</button>

        {/* <form onSubmit={(event) => {
          event.preventDefault()
          this.props.castVote(this.candidateId.value)
        }}>
          <div class='form-group mt-5'>
            <label>Select Candidate</label>
            <select ref={(input) => this.candidateId = input} class='form-control'>
              {this.props.candidates.map((candidate) => {
                return <option value={candidate.id}>{candidate.name}</option>
              })}
            </select>
          </div>
          <button type='submit' className='btn btn-primary mt-3 mb-5'>Vote</button>
          <hr />
        </form> */}
      </div>
    )
  }
}

export default Form
