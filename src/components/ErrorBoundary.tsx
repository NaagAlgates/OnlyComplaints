import React, {
  Component,
  ErrorInfo,
  ReactNode,
} from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      const containerStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        padding: '2rem',
        textAlign: 'center',
      };

      const titleStyles: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#dc3545',
        marginBottom: '1rem',
      };

      const messageStyles: React.CSSProperties = {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '2rem',
        maxWidth: '500px',
        lineHeight: '1.5',
      };

      const buttonStyles: React.CSSProperties = {
        backgroundColor: '#1e3a8a',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'background-color 0.2s ease',
      };

      return (
        <div style={containerStyles}>
          <h2 style={titleStyles}>⚠️ Something went wrong</h2>
          <p style={messageStyles}>
            We're sorry, but something went wrong. Please try refreshing the page or contact us if the problem persists.
          </p>
          <button
            style={buttonStyles}
            onClick={() => window.location.reload()}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1e2563';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#1e3a8a';
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
