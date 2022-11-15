import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {HomepageInfoCardsRow} from '@site/src/components/HomepageInfo';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
	<div class="docs-card-container">
	<div class="row row-cols-1 row-cols-md-3a g-4">

  	<div class="col">
    	<div class="card card-body h-100 d-flex flex-column" >
    		<a href="docs/intro" class="card-title card-link stretched-link"> <h2>Getting started</h2></a>
    		<p style={{ color: 'black' }}>Get started with your ENS name</p>
	</div>
  </div>
  <div class="col">
	<div class="card card-body h-100 d-flex flex-column">
    		<a href="blog/" class="card-title card-link stretched-link"> <h2>Support updates</h2></a>
    <p style={{ color: 'black' }}>The latest support updates</p>
</div>
    </div>
  <div class="col">
	<div class="card card-body h-100 d-flex flex-column">
    		<a href="docs/faq" class="card-title card-link stretched-link"> <h2>Frequently Asked Questions</h2></a>
    <p style={{ color: 'black' }}>The most frequently asked questions</p>
    </div>
</div>
    </div>
    </div>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ENS Support Docs">
      <main>
    <section className={styles.body}>
	  <HomepageInfoCardsRow />
    </section>
      </main>
    </Layout>
  );
}
