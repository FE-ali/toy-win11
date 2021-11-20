import React from 'react';
import Icon from '@src/components/icon/desktopIcon';
import { useAppsControl } from '@src/context/desktop-apps';
import {
    DesktopApps
} from '@src/typings/desktop-app';
import './index.scss';

const DesktopAppsBtn = ({
    iconSrc,
    func,
    status,
    name,
}: DesktopApps) => {
    const handle = () => {
        const w: any = window.open('about:blank');
        w.location.href = "https://github.com/FE-ali/toy-win11";
    }

    return (
        <div className='flex flex-col items-start text-center'>
            <div className='justify-center'>
                <div className='relative place-items-center iconwrap'
                    onClick={handle}
                >
                    <Icon iconSrc={iconSrc} size={60} />
                </div>
            </div>
            <div className='text-sm mb-4 mt-2 justify-center textwrap'>{name}</div>
        </div>
    );
};

export default function DeskApps() {
    const { appsList } = useAppsControl();

    return (
        <div
            className="appWrap"
        >
            <div className='flex flex-col gap-5 p-5'>
                <div className='w-full flex flex-col flex-wrap justify-between'>
                    {appsList.map((item) => (
                        <DesktopAppsBtn key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
