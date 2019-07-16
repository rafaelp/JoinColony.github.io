/* @flow */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import WebsiteLayout from '~layouts/WebsiteLayout';

import DecentralizedCta from './DecentralizedCta';
import FeatureGrid from './FeatureGrid';
import Hero from './Hero';
import Infrastructure from './Infrastructure';
import Modules from './Modules';

const displayName = 'pages.Website.AboutColonyNetwork';

const AboutColonyNetwork = () => {
  const { project } = useStaticQuery(graphql`
    query aboutColonyNetworkProjectQuery(
      $projectName: String = "colonyNetwork"
    ) {
      ...singleProjectFragment
    }
  `);
  return (
    <WebsiteLayout
      headerAppearance={{ theme: 'transparent', navTheme: 'dark' }}
    >
      <Hero project={project} />
      <FeatureGrid />
      <Modules />
      <Infrastructure />
      <DecentralizedCta />
    </WebsiteLayout>
  );
};

AboutColonyNetwork.displayName = displayName;

export default AboutColonyNetwork;
