import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'

export function HomepageTextLinks() {
  return (
    <header class={styles.header}>
      <table class={styles.table}>
        <center>
          <td class={styles.td}>
          <tr class={styles.tr2}>🛈 Getting Started</tr>
          </td>
          <td class={styles.td}>
          <tr class={styles.tr2}>🖺 Tutorials</tr>
          </td>
          <td class={styles.td}>
          <tr class={styles.tr2}>🗪 Frequently Asked Questions</tr>
          </td>
    </center>
        <tbody class={styles.tbody}>
          <tr class={styles.tr}>
            <td class={styles.td}>
            <center>
              <a href="docs/intro">Introduction</a>
              <br></br>
              <a href="docs/names">Records & Registration</a>
              <br></br>
              <a href="docs/names/avatar">The Avatar Record</a>
            </center>
            </td>
            <td class={styles.td}>
              <center>
                <a href="docs/tutorials/registration">How to register an ENS name</a>
                <br></br>
                <a href="docs/tutorials/registration">How to transfer an ENS name</a>
                <br></br>
                <a href="docs/tutorials/registration">How to set an Avatar</a>
              </center>
            </td>
            <td class={styles.td}>
              <center>
                <a href="docs/faq/marketplaces/opensea#ens-name-doesnt-show">Why doesn't my name show on OpenSea?</a>
                <br></br>
                <a href="docs/faq/wallets/metamask#exaggerated-gas-costs">Why is the gas fee so high?</a>
                <br></br>
                <a href="docs/faq/wallets/metamask#exaggerated-gas-costs">Is this airdrop link real?</a>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
}
