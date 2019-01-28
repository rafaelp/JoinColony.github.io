/* @flow */
import React from 'react';
import { Link } from 'gatsby';

import styles from './Sidebar.module.css';

import { orderSections, orderDocs } from '../../utils';

type Props = {
  project: Object, // @TODO type better
};

const Sidebar = ({ project }: Props) => (
  <nav className={styles.main}>
    <ul className={styles.sectionsList}>
      {project.sections
        .sort(orderSections.bind(null, project.sectionOrder))
        .map(section => (
          <li key={section.slug} className={styles.sectionItem}>
            <h5 className={styles.sectionTitle}>{section.name}</h5>
            <ul className={styles.docsList}>
              {section.docs.sort(orderDocs).map(doc => (
                <li key={doc.slug} className={styles.docsItem}>
                  <Link
                    to={`/${project.slug}/${section.slug}-${doc.slug}/`}
                    title={doc.frontmatter.title}
                    className={styles.itemLink}
                    activeClassName={styles.active}
                  >
                    {doc.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
    </ul>
    <div className={styles.backToTop}>
      <a className={styles.itemLink} onClick={handleBackToTop} href="#">
        <small>Back to Top</small>
      </a>
    </div>
  </nav>
);

function handleBackToTop(e) {
  if (typeof window !== 'undefined') {
    e.preventDefault();
    window.scrollTo(0, 0);
  }
}

export default Sidebar;
