import React, { Component,ErrorInfo} from 'react';
import {Card} from 'react-bootstrap';
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
      return (
        <Card border="light" className="h-100 error-card">
          <Card.Body className="d-flex justify-content-center align-items-center">
            <Card.Text>Something went wrong!</Card.Text>
          </Card.Body>
        </Card>
      )

    }
    return this.props.children;
  }
}

export default ErrorBoundary;