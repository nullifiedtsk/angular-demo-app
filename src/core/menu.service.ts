import { Route, Routes } from '@angular/router';

export interface MenuItem {
  name: string;
  documentationUrl?: string;
  path: string[];
  children: MenuItem[];
}

export interface NavItemData {
  name: string;
  documentationUrl?: string;
  children?: Routes;
}

export interface RouteWithNavItemData extends Route {
  data: {
    navItem: NavItemData;
  };
}

export function extractMenuFromDemoApplicationRoutes(routes: Routes, basePath: string[] = []): MenuItem[] {
  return routes
    .filter<RouteWithNavItemData>((x): x is RouteWithNavItemData => x.data?.navItem)
    .map((x) => {
      const nextBasePath = basePath.concat(x.path || '').filter(Boolean);
      return {
        name: x.data.navItem.name,
        documentationUrl: x.data.navItem.documentationUrl,
        path: nextBasePath,
        children: extractMenuFromDemoApplicationRoutes(x.data.navItem.children || [], nextBasePath),
      } as MenuItem;
    });
}
