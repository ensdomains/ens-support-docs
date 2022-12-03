import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { SearchBox } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('USIPAE8OD4', '79429ecc4d7578b000968889c03de4b0');

export default function SearchBar() {
  return (
    <section className={styles.searchbar}>
      <div className="container">
      <InstantSearch searchClient={searchClient} indexName="instant_search">
      {/*
      <input placeholder="Search names or addresses" autocapitalize="none"/><div class="css-pk11hq eaous8u1"><div class="css-so8ynf eaous8u0"><span>en</span><svg width="12" height="7" xmlns="http://www.w3.org/2000/svg" rotated="0" highlight="1" class="css-zbhvx3 e1ivtlmu1"><path d="M1.3431 0L6 4.6569 10.6569 0l1 1L6 6.6569.3431 1l1-1z" fill="#ADBBCD" fill-rule="evenodd"></path></svg></div></div><button disabled="" type="submit" data-testid="home-search-button">Search</button>
       */}
      {/*
          <SearchBox
             />
       */}
        </InstantSearch>
      </div>
    </section>
  );
}
