/* @flow */
import React, { createElement } from 'react';
import { defineMessages } from 'react-intl';
import { withProps } from 'recompose';
import { Match } from '@reach/router';
import RehypeReact from 'rehype-react';

import type { Project, HtmlAst } from '~types';

import Button from '~core/Button';
import Heading from '~core/Heading';
import Icon from '~core/Icon';
import Link from '~core/Link';
import SectionList from '~pages/DocPage/SectionList';
import { PAGE_DEVELOPER_PORTAL } from '~routes';
import { getMainClasses } from '~utils/css';

import styles from './Sidebar.module.css';
import listItemStyles from '../SectionListItem/SectionListItem.module.css';

const MSG = defineMessages({
  linkHome: {
    id: 'parts.Sidebar.linkHome',
    defaultMessage: 'Home',
  },
  btnBackToTop: {
    id: 'parts.Sidebar.btnBackToTop',
    defaultMessage: 'Back to Top',
  },
});

type Props = {|
  locationState: {
    fromChild: boolean,
    fromParent: boolean,
    key: string,
  },
  project: Project,
  projectEntryPoint: string,
  tableOfContents: HtmlAst,
  title?: string,
|};

const renderAst = new RehypeReact({
  createElement,
  components: {
    a: withProps({
      className: listItemStyles.itemLink,
    })(Link),
    li: props =>
      createElement('li', { ...props, className: listItemStyles.docsItem }),
    p: withProps({
      appearance: {
        margin: 'none',
        size: 'medium',
        weight: 'medium',
      },
      style: { color: listItemStyles.textColor },
    })(Heading),
  },
}).Compiler;

const displayName = 'parts.Sidebar';

const Sidebar = ({
  locationState: { fromChild, fromParent },
  project: { name: projectName },
  project,
  projectEntryPoint,
  tableOfContents,
  title,
}: Props) => (
  <nav
    className={getMainClasses({}, styles, {
      fromChild,
      fromParent,
    })}
  >
    <div className={styles.menuContentsWrapper}>
      <div className={styles.menuContents}>
        <Match path={projectEntryPoint}>
          {({ match }) =>
            match ? (
              <>
                <Link
                  arrow="left"
                  className={styles.homeLink}
                  href={PAGE_DEVELOPER_PORTAL}
                  text={MSG.linkHome}
                />
                <div className={styles.projectTitle}>
                  <Heading
                    appearance={{
                      size: 'mediumLarge',
                      theme: 'dark',
                      weight: 'medium',
                    }}
                    text={projectName}
                  />
                </div>
                <div className={styles.mobileProjectTitle}>
                  <Link href={PAGE_DEVELOPER_PORTAL}>
                    <Icon
                      className={styles.chevron}
                      name="chevron"
                      title={projectName}
                    />
                    <Heading
                      appearance={{
                        size: 'mediumLarge',
                        theme: 'dark',
                        weight: 'medium',
                      }}
                      text={projectName}
                    />
                  </Link>
                </div>
                <SectionList project={project} />
              </>
            ) : (
              <>
                <Link
                  arrow="left"
                  className={styles.homeLink}
                  href={projectEntryPoint}
                  state={{ fromChild: true }}
                  text={projectName}
                />
                {title && (
                  <>
                    <div className={styles.projectTitle}>
                      <Heading
                        appearance={{
                          size: 'mediumLarge',
                          theme: 'dark',
                          weight: 'medium',
                        }}
                        text={title}
                      />
                    </div>
                    <div className={styles.mobileProjectTitle}>
                      <Link
                        href={projectEntryPoint}
                        state={{ fromChild: true }}
                      >
                        <Icon
                          className={styles.chevron}
                          name="chevron"
                          title={title}
                        />
                        <Heading
                          appearance={{
                            size: 'mediumLarge',
                            theme: 'dark',
                            weight: 'medium',
                          }}
                          text={title}
                        />
                      </Link>
                    </div>
                  </>
                )}
                {renderAst(tableOfContents)}
              </>
            )
          }
        </Match>
      </div>
    </div>
    <div className={styles.backToTop}>
      <Button
        className={styles.itemLink}
        onClick={handleBackToTop}
        text={MSG.btnBackToTop}
      />
    </div>
  </nav>
);

Sidebar.displayName = displayName;

function handleBackToTop(e) {
  if (typeof window !== 'undefined') {
    e.preventDefault();
    window.scrollTo(0, 0);
  }
}

export default Sidebar;
