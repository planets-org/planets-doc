import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <div className="row margin--lg">
              <div className="col padding-top--lg">
                  <h1 className="hero__title">{siteConfig.title}</h1>
                  <div className={styles.heroSubtitle}>
                      <p className="hero__subtitle padding-bottom--lg ">{siteConfig.tagline}</p>
                  </div>
                  <div className={styles.buttons}>
                      <Link
                          className="button button--secondary button--lg"
                          to="/docs/intro">
                          ドキュメントを見る
                      </Link>
                  </div>
              </div>
              <div className="col margin--lg">
                  <img alt="logo" src="/img/top_img.jpg" />
              </div>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Top`}
      description="PLAneTsのドキュメントサイトです。">
      <HomepageHeader />
      {/*<main>*/}
      {/*  <HomepageFeatures />*/}
      {/*</main>*/}
    </Layout>
  );
}
