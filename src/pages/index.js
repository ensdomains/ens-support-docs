import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {HomepageInfoCardsRow} from '@site/src/components/HomepageInfo';
import {HomepageTextLinks} from '@site/src/components/HomepageTextLinks';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ENS Support Docs">
      <main>
        <section class={styles.features}>
          <HomepageFeatures />
        </section>
        <section className={styles.infoCards}>
          <HomepageInfoCardsRow />
        </section>
      </main>
    </Layout>
  );
}
