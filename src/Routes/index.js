import React from 'react';
import ROUTES from './routeConfigs';
import { generateRouteMap } from 'Util/routes';

const { pathMap } = generateRouteMap(ROUTES);
export const RouteMap = pathMap;
export default ROUTES;
