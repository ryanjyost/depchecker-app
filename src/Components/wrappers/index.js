import _AppRoutesWrapper from './AppRoutesWrapper';
import _LoadingPageWrapper from './LoadingPageWrapper';
import _RootWrapper from './RootWrapper';
import _ErrorBoundary, { withErrorBoundary } from './ErrorBoundary';

export const ErrorBoundary = _ErrorBoundary;
export const withErrorBoundaryWrapper = withErrorBoundary;
export const AppRoutesWrapper = _AppRoutesWrapper;
export const LoadingPageWrapper = _LoadingPageWrapper;
export const RootWrapper = _RootWrapper;
