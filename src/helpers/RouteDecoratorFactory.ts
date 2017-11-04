import { IRoute } from "../types/IRoute";

export function RouteDecotatorFactory(method: string, path: string, target: any, propertyKey: any, descriptor: PropertyDescriptor) {

  if(!target.constructor.prototype._routes) target.constructor.prototype._routes = [];
  let route: IRoute = {
    handler: propertyKey,
    method: method,
    path: path
  };
  target.constructor.prototype._routes.push(route);
  return descriptor;

}