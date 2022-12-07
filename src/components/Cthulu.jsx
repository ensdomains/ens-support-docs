// A function to use different images in articles for
// light/dark themes, with IdealImage support for lazy loading
//
// 2022 rasmus@ens.domains
//
import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import Image from '@theme/IdealImage';
import mediumZoom from 'medium-zoom';

const ThemedImage = ({lightImage, darkImage}) => {
  const { colorMode } = useColorMode();

  return (
    <img src={colorMode === 'dark' ? darkImage : lightImage} />
  )
}

export default ThemedImage;
