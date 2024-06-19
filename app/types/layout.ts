import { ReactNode } from 'react';
 export interface MenuItem {
    title: string,
    list: SubMenuItem[]
}
export interface SubMenuItem {
    title: string,
    path: string,
    icon: ReactNode;
}