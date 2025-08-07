// hooks/useSnackbar.ts
import { SnackbarConfig, SnackbarState } from '@/lib/snackbar';
import { useState } from 'react';
// import { SnackbarState, SnackbarConfig } from '../types/snackbar';

export const useSnackbar = () => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        isVisible: false,
        message: '',
        type: 'success',
        duration: 3000,
        position: 'bottom-center'
    });

    const showSnackbar = (config: SnackbarConfig): void => {
        setSnackbar({
            isVisible: true,
            message: config.message,
            type: config.type || 'success',
            duration: config.duration || 3000,
            position: config.position || 'bottom-center'
        });
    };

    const hideSnackbar = (): void => {
        setSnackbar(prev => ({ ...prev, isVisible: false }));
    };

    // Convenience methods
    const showSuccess = (message: string, duration?: number): void => {
        showSnackbar({ message, type: 'success', duration });
    };

    const showError = (message: string, duration?: number): void => {
        showSnackbar({ message, type: 'error', duration });
    };

    const showWarning = (message: string, duration?: number): void => {
        showSnackbar({ message, type: 'warning', duration });
    };

    const showInfo = (message: string, duration?: number): void => {
        showSnackbar({ message, type: 'info', duration });
    };

    return {
        snackbar,
        showSnackbar,
        hideSnackbar,
        showSuccess,
        showError,
        showWarning,
        showInfo
    };
};