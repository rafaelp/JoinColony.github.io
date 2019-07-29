/* @flow */

import React, { useContext } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

import Announcement from '~core/Announcement';
import Button from '~core/Button';
import Heading from '~core/Heading';
import ThemeContext from '~layouts/WebsiteLayout/context';
import { COLONY_GITTER } from '~routes';

import styles from './Hero.module.css';

const MSG = defineMessages({
  announcement: {
    id: 'pages.Website.AboutMetaColony.Hero.announcement',
    defaultMessage: 'About the Metacolony',
  },
  title: {
    id: 'pages.Website.AboutMetaColony.Hero.title',
    defaultMessage: `Colony Isn’t a Company.{br}It’s a Colony.`,
  },
  body: {
    id: 'pages.Website.AboutMetaColony.Hero.body',
    defaultMessage: `Colonies come in many shapes and sizes,
      but at their most ambitious, will manifest something
      fundamentally new in the world: internet native organizations
      enabling people to collaborate and manage shared funds
      without needing to trust one another.`,
  },
  buttonText: {
    id: 'pages.Website.AboutMetaColony.Hero.subTitle',
    defaultMessage: 'Say hi',
  },
  subTitle: {
    id: 'pages.Website.AboutMetaColony.Hero.subTitle',
    defaultMessage: `Meet the Metacolony. In fact, join it. We’re
      always looking for something something clever individuals.`,
  },
  subBody: {
    id: 'pages.Website.AboutMetaColony.Hero.subBody',
    defaultMessage: `The Colony Network is designed as a
      self-sustaining public utility: a digital commons available
      to all, in which permission isn’t needed and censorship not
      possible. We think of it as infrastructure for next gen firms.
      {br}{br}
      Nevertheless, infrastructure requires upkeep. Ongoing management
      and development will be needed to support the growth of a thriving
      ecosystem. The Metacolony is the colony responsible for that
      important work. Every colony needs the Metacolony, anyone may
      contribute, and it will be opening for business real soon.
      {br}{br}
      The Metacolony will launch under the aegis of Colony Foundation
      Ltd., which will gradually cede control to the Metacolony’s members.`,
  },
});

const displayName = 'pages.Website.AboutMetaColony.Hero';

const Hero = () => {
  const { headerHeight } = useContext(ThemeContext);
  const style = headerHeight ? { paddingTop: `${headerHeight}px` } : {};
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.imageContainer} style={style} />
        <div className={styles.contentContainer} style={style}>
          <div className={styles.contentInner}>
            <Announcement text={MSG.announcement} />
            <Heading appearance={{ margin: 'none', theme: 'dark' }}>
              <FormattedMessage {...MSG.title} values={{ br: <br /> }} />
            </Heading>
            <div className={styles.body}>
              <p>
                <FormattedMessage {...MSG.body} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.subTitleContainer}>
          <Heading
            appearance={{
              size: 'large',
              theme: 'primary',
              weight: 'bold',
            }}
            text={MSG.subTitle}
          />
          <Button
            appearance={{ borderRadius: 'none', theme: 'primary' }}
            linkTo={COLONY_GITTER}
            text={MSG.buttonText}
          />
        </div>
        <div className={styles.subBodyContainer}>
          <p>
            <FormattedMessage {...MSG.subBody} values={{ br: <br /> }} />
          </p>
        </div>
      </div>
    </div>
  );
};

Hero.displayName = displayName;

export default Hero;
