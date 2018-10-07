import * as React from 'react';

interface Props {}
interface State {
  // tslint:disable-next-line:no-any
  component?: any;
}

/**
 * Allows components to load asynchronously
 * @param loader the webpack chunk importer
 * @param moduleName the exported method to call
 */
// tslint:disable-next-line:no-any
export function loadComponent(loader: () => Promise<any>, moduleName: string) {
  return class Loadable extends React.Component<Props, State> {
    public state: State = {};

    public componentDidMount() {
      this.getComponent();
    }

    public render() {
      if (!this.state.component) {
        return (
          <>
            Loading
          </>
        );
      }

      return React.createElement(this.state.component);
    }

    private async getComponent() {
      const exportedModules = await loader();

      this.setState({
        component: exportedModules[moduleName],
      });
    }
  };
}
