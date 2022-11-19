import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🛈 Getting Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href="docs/intro">Introduction</a>
        <br></br>
        <a href="docs/names">Records & Registration</a>
        <br></br>
        <a href="docs/names/avatar">The Avatar Record</a>
      </>
    ),
  },
  {
    title: '🗪 Frequently Asked Questions',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <a href="docs/faq/marketplaces/opensea#ens-name-doesnt-show">Why doesn't my name show on OpenSea?</a>
        <br></br>
        <a href="docs/faq/wallets/metamask#exaggerated-gas-costs">Why is the gas fee so high?</a>
        <br></br>
        <a href="docs/faq/wallets/metamask#exaggerated-gas-costs">Is this airdrop link real?</a>
      </>
    ),
  },
  {
    title: '🖺 Tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a href="docs/tutorials/registration">How to register an ENS name</a>
        <br></br>
        <a href="docs/tutorials/registration">How to transfer an ENS name</a>
        <br></br>
        <a href="docs/tutorials/registration">How to set an Avatar</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.stylez}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
