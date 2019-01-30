import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  _change = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  _submit = event => {
    event.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this._submit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this._change}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this._change}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
