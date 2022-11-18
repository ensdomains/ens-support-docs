import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'

export function HomepageTextLinks() {
  return (
    <table class={styles.table}>
      <thead class={styles.thead}>
        <th>🛈 Getting Started</th>
        <th>🗪 FAQ</th>
        <th>🖺 Tutorials</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="docs/intro">Introduction</a>
            <br></br>
            <a href="docs/names">Records & Registration</a>
            <br></br>
            <a href="docs/names/avatar">The Avatar Record</a>
          </td>
          <td>
            <a href="docs/faq/marketplaces/opensea#ens-name-doesnt-show">Why doesn't my name show on OpenSea?</a>
            <br></br>
            <a href="docs/faq/wallets/metamask#exaggerated-gas-costs">Why is the gas fee so high?</a>
            <br></br>
            <a href="docs/faq/wallets/metamask#exaggerated-gas-costs">Is this airdrop link real?</a>
          </td>
          <td>
            <a href="docs/tutorials/registration">How to register an ENS name</a>
            <br></br>
            <a href="docs/tutorials/registration">How to transfer an ENS name</a>
            <br></br>
            <a href="docs/tutorials/registration">How to set an Avatar</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
