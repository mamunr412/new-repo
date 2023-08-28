import { MenuProps } from 'antd';
import { SideBarItems } from './MenuData';


type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

function createMenuItems(items: Array<any>): Array<MenuItem> {
    return items.map((item) => {
        if (item) {
            const { label, key, icon, children } = item;
            if (Array.isArray(children)) {
                return getItem(label, key, icon, createMenuItems(children));
            }
            return getItem(label, key, icon);
        }
        return null
    });
}

export const menuItems: MenuItem[] = createMenuItems(SideBarItems);