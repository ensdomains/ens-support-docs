/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This component is based on Facebook's "BrowserWindow" component
 * and modified for use with mobile phone screenshots where a BrowserWindow or ImageWindow might not be suitable.
 * - cthulu.eth
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  minHeight: number;
  img: string;
}

export default function PhoneWindow({
  children,
  img,
  minHeight,
}: Props): JSX.Element {
  return (
    <div className={styles.phoneWindow} style={{minHeight}}>
      <div className={styles.phoneWindowHeader}>
      <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        <div className={clsx(styles.phoneWindowAddressBar, 'text--truncate')}>
        </div>
      </div>

      <div className={styles.phoneWindowBody}>
        <Image img={img}/>
      </div>
    <div className={styles.phoneWindowFooter}>
    </div>
    </div>
  );
}
