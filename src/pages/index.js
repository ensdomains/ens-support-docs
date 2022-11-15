import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {HomepageInfoCardsRow} from '@site/src/components/HomepageInfo';
import styles from './index.module.css';

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
