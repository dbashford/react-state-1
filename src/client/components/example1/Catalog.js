import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import CatalogItem from './CatalogItem';

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
        <h2>Pokemon Catalog</h2>

        {isLoading &&
          <h3>Loading...</h3>
        }
        {!isLoading &&
          this.state.items.map((item) =>
            <CatalogItem key={item.id} {...this.props} {...item} />
          )
        }
      </section>
    );
  }
}
