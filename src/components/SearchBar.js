import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  render() {
    return (
      <div>
        <div className="row my-4 justify-content-center">
          <div className="col-lg-10">
            <form
              onSubmit={e => {
                e.preventDefault();
                this.props.onSubmit(this.state.term);
              }}
            >
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  value={this.state.term}
                  name="name"
                  id="name"
                  placeholder="Search"
                  aria-label=""
                  onChange={e => {
                    this.setState({ term: e.target.value });
                  }}
                />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-outline-primary">
                    Search
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
