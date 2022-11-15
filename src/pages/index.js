import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {HomepageInfoCardsRow} from '@site/src/components/HomepageInfo';
import {HomepageTextLinks} from '@site/src/components/HomepageTextLinks';
import styles from './index.module.css';

/*
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    </header>
  );
}
*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ENS Support Docs">
      <main>
    <HomepageTextLinks />
    <section className={styles.body}>
	  <HomepageInfoCardsRow />
    </section>
      </main>
    </Layout>
  );
}
