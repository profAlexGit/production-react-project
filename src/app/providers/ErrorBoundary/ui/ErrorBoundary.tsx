import type { ErrorInfo, ReactNode } from 'react';
import { Component, Suspense } from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render (): ReactNode {
    if (this.state.hasError) {
      return <Suspense fallback={'...'}>
        <PageError />
      </Suspense>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
