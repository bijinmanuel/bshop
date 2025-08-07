export interface SnackbarState {
    isVisible: boolean;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    position?: 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right' | 'bottom-left';
}

export interface SnackbarConfig {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    position?: 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right' | 'bottom-left';
}