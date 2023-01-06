import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import BrowserWindow from '@site/src/components/BrowserWindow';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';

export default {
  ...MDXComponents,
  BrowserWindow: BrowserWindow,
  Image: Image,
  Link: Link,
};
