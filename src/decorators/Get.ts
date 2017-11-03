import { RouteDecotatorFactory } from "../helpers/RouteDecoratorFactory"

export function Get(path: string) {
  return function(target: any, propertyKey: any, descriptor: PropertyDescriptor) {

    return RouteDecotatorFactory('get', path, target, propertyKey, descriptor);

  }
}