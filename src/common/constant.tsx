import { SideNavItem } from "./types";
import { Icon } from '@iconify/react';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/explore/dashboard",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    isDisabled: true,
  },
  {
    title: "Portfolio",
    path: "/explore/portfolio",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    isDisabled: true,
  },
  {
    title: "Recipe hub",
    path: "/explore/recipe",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
];
