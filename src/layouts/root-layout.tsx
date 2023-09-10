import Player from '@/components/player';
import SideBar from '@/components/sidebar';
import WindowBar from '@/components/ui/window-bar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <div className=''>
            <WindowBar />
            <div className='flex flex-row'>
                <SideBar />
                <div className='flex flex-col gap-1'>
                    <div className='bg-background rounded-lg w-screen h-[calc(100vh-8rem)] justify-center self-center p-2'>
                        <Outlet />
                    </div>
                    <Player />
                </div>
            </div>
        </div>
    );
}
