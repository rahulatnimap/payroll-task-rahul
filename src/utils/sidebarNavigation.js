import { AllRoute } from "./constants";


console.log('AllRoute', Object.values(AllRoute.privateRoutes))
export const sideBarNavigation = Object.values(AllRoute.privateRoutes)
  .filter((x) => x?.sidebar?.show)
  .map((pageData, index) =>
    pageData.children
      ? {
        id: index + 1,
        path: pageData.path,
        icon: pageData.sidebar.icon,
        children: pageData.children.filter((x) => x?.sidebar?.show),
        pageName: pageData.sidebar.name || pageData.pageName,
        permissionName: pageData.permissionName,
      }
      : {
        id: index + 1,
        path: pageData.path,
        icon: pageData.sidebar.icon,
        pageName: pageData.pageName || pageData.pageName,
        permissionName: pageData.permissionName,
      }
  );
