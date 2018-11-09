/* @flow */

import * as React from "react";
import ProgressBarComponent from "./ProgressBarComponent";
import { withTheme } from "../../core/theming";
import type { Theme } from "../../types";

type Props = {|
  /**
   * Progress value (between 0 and 1).
   */
  progress: number,
  style?: any,
  /**
   * @optional
   */
  theme: Theme
|};

/**
 * Progress bar is an indicator used to present progress of some activity in the app.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar } from '@draftbit/ui';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} />
 * );
 *
 * export default MyComponent;
 * ```
 */
class ProgressBar extends React.Component<Props> {
  render() {
    const {
      progress,
      style,
      theme: { colors }
    } = this.props;

    return (
      <ProgressBarComponent
        progress={progress}
        progressTintColor={colors.primary}
        style={style}
        trackTintColor={colors.divider}
      />
    );
  }
}

export default withTheme(ProgressBar);
