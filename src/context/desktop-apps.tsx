import React, { useState } from 'react';
import { DesktopApps } from '@src/typings/desktop-app';
import { initalDesktopApps } from '@src/constant';

export const DesktopAppsContext = React.createContext<
    | {
        show: boolean;
        appsList: DesktopApps[];
        triggerSidePanelShow: () => void;
    }
    | undefined
>(undefined);


export const DesktopAppsProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [show, setShow] = useState(true);
    const [appsList, ] = useState(() => initalDesktopApps());

    const triggerSidePanelShow = () => {
        setShow(!show);
    };


    return (
        <DesktopAppsContext.Provider
            value={{
                show,
                appsList,
                triggerSidePanelShow,
            }}
        >
            {children}
        </DesktopAppsContext.Provider>
    );
};

export const useAppsControl = () => {
    const context = React.useContext(DesktopAppsContext);
    if (!context) {
        throw new Error('1111111111111111212');
    }
    return context;
};