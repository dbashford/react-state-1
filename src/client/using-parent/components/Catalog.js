import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: []
    };
  }

  componentDidMount() {
    fetch('/api/catalog')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((items) => {
        this.setState({
          loading: false,
          items
        });
      });
  }

  render() {
    const isLoading = this.state.loading;
    return (
      <section className="item-list">
        {isLoading &&
          <h2>Loading...</h2>
        }
        {!isLoading &&
          <h2>Gonna make a list here</h2>
        }
      </section>
    );
  }
}
