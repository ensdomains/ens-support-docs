/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';

const HomepageInfo = [
  {
    name: 'How to Register an ENS name',
    image: require('@site/static/img/cards/registername.png'),
    url: 'docs/tutorials/registration',
    description: 'Learn how to register an ENS name.'
  },
  {
    name: 'What can I do with an ENS name?',
    image: require('@site/static/img/cards/whattodowithensname.png'),
    url: 'docs/names',
    description: 'Everything you can use an ENS name for.'
  },
  {
    name: 'Safeguard your ENS names',
    image: require('@site/static/img/cards/security.png'),
    url: 'docs/faq/security',
    description: 'Improve the security of your Ethereum wallets.'
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  description: JSX.Element;
}

function HomepageInfoCard({name, image, url, description}: Props) {
  return (
    <div className="col margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <div className={styles.cardstyle}>
            <a href={url}>
              <h3>{name}</h3>
              <div className={styles.carddescr}>
                <p>{description}</p>
              </div>
            </a>
      </div>
        </div>
        <div className="card__footer">
        </div>
      </div>
    </div>
  );
}

export function HomepageInfoCardsRow(): JSX.Element {
  return (
    <div className="row">
      {HomepageInfo.map((homepageinfo) => (
        <HomepageInfoCard key={homepageinfo.name} {...homepageinfo} />
      ))}
    </div>
  );
}
