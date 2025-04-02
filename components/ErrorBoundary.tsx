"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught by boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-[max(50%,320px)] rounded-full flex flex-col items-center justify-center h-screen bg-white/50 text-center">
          <h1 className="text-4xl font-bold text-red-600">
            Something went wrong!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            An unexpected error occurred. Please refresh the page.
          </p>
          <a
            href="/"
            className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-600 transition"
          >
            Go Home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
