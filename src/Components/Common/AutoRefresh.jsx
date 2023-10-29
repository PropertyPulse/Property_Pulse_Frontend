import React, { useEffect } from 'react';

function AutoRefresh() {
    // Specify the refresh interval in milliseconds
    const refreshInterval = 60000; // 1 minute

    useEffect(() => {
        const timer = setTimeout(() => {
            // Reload the page after the specified interval
            window.location.reload();
        }, refreshInterval);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>

        </div>
    );
}

export default AutoRefresh;
