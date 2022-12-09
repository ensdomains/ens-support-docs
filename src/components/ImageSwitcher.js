import React from 'react';
import useThemeConfig from '@docusaurus/theme-common';
import useThemeContext from '@docusaurus/theme-common/hooks/useThemeContext';

const ImageSwitcher = ({lightImageSrc, darkImageSrc}) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <img src={isDarkTheme ? darkImageSrc : lightImageSrc} alt="Example banner" />
  )
}

export default ImageSwitcher;
