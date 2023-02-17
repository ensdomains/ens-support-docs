import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import BrowserWindow from '@site/src/components/BrowserWindow';
import ImageWindow from '@site/src/components/ImageWindow';
import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

export default {
  ...MDXComponents,
  BrowserWindow: BrowserWindow,
  ImageWindow: ImageWindow,
  Image: Image,
  Link: Link,
  Tabs: Tabs,
  TabItem: TabItem,
};
