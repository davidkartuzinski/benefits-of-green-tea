import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    /// process the error message
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/hkRuanu.png' />
          <ErrorImageText>
            <h2>Sorry, this had an error</h2>
            <p>
              The imposing figure with the trenchcoat shows you the two
              polaroids. One appears to show the Loch Ness monster herself in
              the middle of a stretch of dark water. The other shows a sasquatch
              picking it’s way through a dark forest. You look closer. The
              animal shapes are drawn on with ink. “This isn’t real!” You scream
              and throw the polaroids to the floor, sobbing.
            </p>
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
