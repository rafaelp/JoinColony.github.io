/* @flow */
import type { RouteProps } from '@reach/router';

import React from 'react';
import { Link, withPrefix } from 'gatsby';
import { Location } from '@reach/router';
import { compose, fromRenderProps } from 'recompose';

import styles from './Header.module.css';
import Search from '../Search';

type Props = RouteProps & {
  projects: Array<Object>, // @TODO better typing
};

type State = {
  isNavExpanded: boolean,
  isScrolled: boolean,
};

class Header extends React.Component<Props, State> {
  state = {
    isNavExpanded: false,
    isScrolled: false,
  };

  componentDidMount() {
    const { isScrolled } = this.state;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        if (isScrolled) return;
        this.setState({ isScrolled: true });
      } else {
        this.setState({ isScrolled: false });
      }
    });
  }

  isProjectActive = project => {
    const {
      location: { pathname },
    } = this.props;
    return pathname && pathname.split('/').indexOf(project.slug) > -1;
  };

  handleCloseNavigation = () => {
    this.setState({
      isNavExpanded: false,
    });
  };

  handleToggleNavigation = () => {
    const { isNavExpanded } = this.state;
    this.setState({
      isNavExpanded: !isNavExpanded,
    });
  };

  render() {
    const { projects } = this.props;
    const { isNavExpanded, isScrolled } = this.state;

    const activeProject = projects.find(this.isProjectActive);
    const selectedProject = (activeProject && activeProject.name) || '';

    const navLinks = projects.map(project => {
      return (
        <Link
          key={project.slug}
          to={`/${project.slug}/${project.entryPoint}/`}
          className={styles.projectLink}
          activeClassName={styles.projectLinkActive}
          onClick={this.handleCloseNavigation}
          isActive={() =>
            selectedProject && project.slug === activeProject.slug
          }
        >
          {project.name}
        </Link>
      );
    });

    return (
      <div id="header" className={styles.container}>
        <header
          className={styles.header}
          aria-expanded={isNavExpanded}
          role="navigation"
          style={
            isScrolled ? { boxShadow: '0 0 10px 1px rgb(238, 238, 238)' } : null
          }
        >
          <div className={styles.headerContent}>
            <div className={styles.wrapper}>
              <Link
                to="/"
                className={styles.logo}
                onClick={this.handleCloseNavigation}
              >
                <img
                  src={withPrefix('/img/colonyDocs_navy.svg')}
                  alt="Colony Docs"
                />
              </Link>
              <div className={styles.mainNavigation}>
                <div className={styles.emptySpace} />
                <nav className={styles.navigation}>
                  <button className={styles.navigationButton} type="button">
                    {'Products'}
                    <i className={styles.navigationArrow} />
                  </button>
                  <div
                    id="navigationContent"
                    className={styles.navigationContent}
                  >
                    {navLinks}
                  </div>
                </nav>
                <ul className={styles.secondaryLinkList}>
                  <li className={styles.secondaryLinkListItem}>
                    <a
                      className={styles.repoLink}
                      href={`https://github.com/JoinColony/${selectedProject}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.hide} aria-hidden>
                        {selectedProject || 'Colony'} on GitHub
                      </span>
                      <svg
                        className={styles.repoIcon}
                        viewBox="0 0 32 32"
                        role="img"
                        aria-label="GitHub"
                      >
                        <title>{selectedProject || 'Colony'} on GitHub</title>
                        <use
                          xlinkHref={withPrefix(
                            '/img/social_github.svg#social_github',
                          )}
                        />
                      </svg>
                    </a>
                  </li>
                  <li className={styles.secondaryLinkListItem}>
                    <a
                      className={styles.repoLink}
                      href={`https://gitter.im/JoinColony/${selectedProject}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.hide} aria-hidden>
                        {selectedProject || 'Colony'} on Gitter
                      </span>
                      <svg
                        className={styles.repoIcon}
                        viewBox="0 0 32 32"
                        role="img"
                        aria-label="Gitter"
                      >
                        <title>{selectedProject || 'Colony'} on Gitter</title>
                        <use
                          xlinkHref={withPrefix(
                            '/img/social_gitter.svg#social_gitter',
                          )}
                        />
                      </svg>
                    </a>
                  </li>
                  <li className={styles.secondaryLinkListItem}>
                    <a
                      className={styles.repoLink}
                      href="https://build.colony.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.hide} aria-hidden>
                        {'Colony on Discourse'}
                      </span>
                      <svg
                        className={styles.repoIcon}
                        viewBox="0 0 32 32"
                        role="img"
                        aria-label="Discourse"
                      >
                        <title>Colony on Discourse</title>
                        <use
                          xlinkHref={withPrefix(
                            '/img/social_discourse.svg#social_discourse',
                          )}
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className={styles.searchContainer}>
                  <Search />
                </div>
              </div>
              <button
                type="button"
                className={styles.mobileIcon}
                aria-hidden
                onClick={this.handleToggleNavigation}
              >
                <span className={styles.mobileIconLine} />
                <span className={styles.mobileIconLine} />
                <span className={styles.mobileIconLine} />
                <span className={styles.mobileIconLine} />
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const enhance = compose(
  fromRenderProps(Location, locationProps => ({ ...locationProps })),
);

export default enhance(Header);
