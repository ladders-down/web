import * as React from 'react';
import './styles.scss';

type SpacingSize = 0 | 0.5 | 1 | 2 | 3 | 4 | 5;
type Spacings = SpacingSize | { x?: SpacingSize, y?: SpacingSize, top?: SpacingSize, right?: SpacingSize, bottom?: SpacingSize, left?: SpacingSize };

export enum Display {
  Block = 'block',
  Flex = 'flex',
  Inherit = 'inherit',
  Inline = 'inline',
}

export enum Direction {
  Row = 'row',
  RowReverse = 'row-reverse',
  Column = 'column',
  ColumnReverse = 'column-reverse',
}

export enum Align {
  Stretch = 'stretch',
  Center = 'center',
  Start = 'start',
  End = 'end',
}

export enum Justify {
  Start = 'start',
  Center = 'center',
  Between = 'space-between',
  Around = 'space-around',
  Evenly = 'space-evenly',
}

interface PublicProps {
  align?: Align;
  className?: string;
  direction?: Direction;
  display?: Display;
  grow?: boolean;
  justify?: Justify;
  margin?: Spacings;
  padding?: Spacings;
  shrink?: boolean;
}

type Props = React.Props<Container> & PublicProps;

export class Container extends React.Component<Props, React.ComponentState> {
  public render() {
    let classes: string[] = [];

    if (this.props.className) {
      classes = this.addClass(classes, [this.props.className]);
    }

    classes = this.addClass(classes, this.getSpacingClasses());

    classes = this.addClass(classes, this.getDisplayClasses());

    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }

  private addClass(source: string[], newClasses: string[]) {
    return source.concat(newClasses);
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
      return [`${prefix}-${spacing.toString().split('.').join('')}`];
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

  private getDisplayClasses = () => {
    let classes: string[] = [];
    const { direction, display, align, grow, shrink, justify } = this.props;

    if (direction) {
      classes = classes.concat(`flex__direction--${direction}`);
    }

    if (display) {
      classes = classes.concat(`${display}`);
    }

    if (align) {
      classes = classes.concat(`flex__align--${align}`);
    }

    if (grow) {
      classes = classes.concat(`flex__grow`);
    }

    if (shrink) {
      classes = classes.concat(`flex__shrink`);
    }

    if (justify) {
      classes = classes.concat(`flex__justify--${justify}`);
    }

    return classes;
  }
}
