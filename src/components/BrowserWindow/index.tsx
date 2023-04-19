/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This component is based on Facebook's BrowserWindow-components, with various modifications
 * I've found useful along the way.
 * - cthulu.eth [ rasmus@ens.domains ]
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Image from '@theme/IdealImage';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  minHeight: number;
  url: string;
  padding: string;
  bg: string;
  img: string;
  embed: string;
}

export default function BrowserWindow({
  children,
  minHeight,
  padding,
  bg,
  img,
  embed,
  url = 'http://localhost:3000',
}: Props): JSX.Element {
  return (
      <div style={{'padding':'25px 0px 25px 0px'}}>
        <div className={styles.browserWindow} style={{minHeight}}>
          <div className={styles.browserWindowHeader}>
            <div className={styles.buttons}>
              <span className={styles.dot} style={{background: '#f25f58'}} />
              <span className={styles.dot} style={{background: '#fbbe3c'}} />
              <span className={styles.dot} style={{background: '#58cb42'}} />
            </div>
            <div className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>
              {url}
            </div>
            <div className={styles.browserWindowMenuIcon}>
              <div>
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
              </div>
            </div>
          </div>

          <div className={styles.browserWindowBody} style={{'padding':padding,'background':bg}}>
            <p align="center">
            {img ? ( <Image img={img} /> ) : <div>{children}</div>}
            </p>
          </div>
        </div>
      </div>
  );
}
