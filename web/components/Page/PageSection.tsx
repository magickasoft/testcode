import { bool, node, oneOf } from 'prop-types';
import * as React from 'react';
import cn from 'classnames';

// import bem from 'utils/bem';
import { ElementPropTypes } from 'utils/prop-types';
import { filter, prefixBy, prefixed, unprefixed, withRefProps } from 'utils/props';

// import './PageSection.scss';
import styles from './pageSection.module.css';

enum PageSectionFace {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  THIRD = 'third'
}

const FACES = [PageSectionFace.PRIMARY, PageSectionFace.SECONDARY, PageSectionFace.THIRD] as const;

export interface PageSectionProps {
  face: keyof typeof PageSectionFace;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  first: boolean;
  last: boolean;
  bottomIndent: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const [PageSection, PageSectionPropTypes, PageSectionDefaultProps] = withRefProps(
  /**
   * @property { React.Ref } headerRef
   * @property { React.Ref } actionsRef
   * @property { React.Ref } titleRef
   */
  class PageSection extends React.PureComponent<PageSectionProps, {}> {
    protected titleRef?: Element;

    protected actionsRef?: Element;

    protected headerRef?: Element;

    static propTypes = {
      ...prefixBy('actions', ElementPropTypes),
      ...prefixBy('content', ElementPropTypes),
      ...prefixBy('header', ElementPropTypes),
      ...prefixBy('title', ElementPropTypes),
      actions: node,
      children: node,
      face: oneOf(FACES),
      title: node,
      first: bool,
      last: bool,
      bottomIndent: bool
    };

    static defaultProps = {
      actions: undefined,
      children: undefined,
      face: PageSectionFace.PRIMARY,
      title: undefined,
      first: undefined,
      last: undefined,
      bottomIndent: true
    };

    static className = 'PageSection';

    static refProps = ['header', 'actions', 'title'];

    renderTitle() {
      const { face, title, ...props } = this.props;
      const titleProps = prefixed(props, 'title');

      return (
        <div className={styles.heading}>
          {titleProps?.before && <div>{titleProps?.before}</div>}
          <h3
            {...filter(titleProps, ElementPropTypes)}
            ref={this.titleRef}
            className={cn(styles.title, titleProps.className, {
              [styles[face]]: !!face
            })}
          >
            {title}
          </h3>
          {titleProps?.after && <div>{titleProps?.after}</div>}
        </div>
      );
    }

    renderActions() {
      const { actions, face, ...props } = this.props;

      if (actions) {
        const actionProps = prefixed(props, 'actions');

        return (
          <div
            {...filter(actionProps, ElementPropTypes)}
            ref={this.actionsRef}
            className={cn(styles.actions, actionProps.className, {
              [styles[face]]: !!face
            })}
          >
            {actions}
          </div>
        );
      }

      return null;
    }

    renderHeader() {
      const { face, ...props } = this.props;
      const headerProps = prefixed(props, 'header');

      return (
        <header
          {...filter(headerProps, ElementPropTypes)}
          ref={this.headerRef}
          className={cn(styles.header, headerProps.className, {
            [styles[face]]: !!face
          })}
        >
          {this.renderTitle()}
          {this.renderActions()}
        </header>
      );
    }

    renderContent() {
      const { children, face, ...props } = this.props;
      const contentProps = prefixed(props, 'content');

      return (
        <div
          {...filter(contentProps, ElementPropTypes)}
          className={cn(styles.content, contentProps.className, {
            [styles[face]]: !!face
          })}
        >
          {children}
        </div>
      );
    }

    render() {
      const { face, first, last, ...props } = this.props;

      return (
        <section
          {...filter(unprefixed(props, 'actions', 'content', 'header', 'title'), ElementPropTypes)}
          className={cn(styles.pageSection, {
            [styles[face]]: !!face,
            [styles.first]: !!first,
            [styles.last]: !!last
          })}
        >
          {this.renderHeader()}
          {this.renderContent()}
        </section>
      );
    }
  }
);

PageSection.FACE_PRIMARY = PageSectionFace.PRIMARY;
PageSection.FACE_SECONDARY = PageSectionFace.SECONDARY;
PageSection.FACE_THIRD = PageSectionFace.THIRD;
PageSection.FACES = PageSectionFace;
