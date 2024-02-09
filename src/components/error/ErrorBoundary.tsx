import React, { Component,ErrorInfo} from 'react';
import ErrorPage from './ErrorPage';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
class ErrorBoundary extends Component<ErrorBoundaryProps,ErrorBoundaryState> {
  constructor(props:ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error:Error, errorInfo:ErrorInfo) {
    console.error('Unable to load the articles due to:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage/>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;