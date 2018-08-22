import * as React from 'react';
import './styles.scss';

type SpacingSize = 0 | 0.5 | 1 | 2 | 3 | 4 | 5;
type Spacings = SpacingSize | { x?: SpacingSize, y?: SpacingSize, top?: SpacingSize, right?: SpacingSize, bottom?: SpacingSize, left?: SpacingSize };

interface PublicProps {
  padding?: Spacings;
  margin?: Spacings;
}

type Props = React.Props<Container> & PublicProps;

export class Container extends React.Component<Props, React.ComponentState> {
  public render() {
    let classes: string[] = [];

    classes = classes.concat(this.getSpacingClasses());

    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }

  private getSpacingClasses = () => {
    const { padding, margin } = this.props;

    if (padding) {
      return this.getSpaceValue('pd', padding);
    }

    if (margin) {
      return this.getSpaceValue('mg', margin);
    }

    return [];
  }

  private getSpaceValue = (prefix: 'pd' | 'mg', spacing: Spacings) => {
    if (typeof spacing === 'number') {
      return [`${prefix}-${spacing}`];
    }

    if (typeof spacing === 'object') {
      const values: string[] = [];
      Object.keys(spacing).forEach((key) => {
        // tslint:disable-next-line:no-any
        const value: string = `${(spacing as any)[key]}`;
        const parsedValue = value.split('.').join('');
        values.push(`${prefix}-${key.substr(0, 1)}-${parsedValue}`);
      });
      return values;
    }

    return [];
  }
}
