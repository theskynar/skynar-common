import { RouteDecotatorFactory } from "../helpers/RouteDecoratorFactory"

export function Put(path: string) {
  return function(target: any, propertyKey: any, descriptor: PropertyDescriptor) {

    return RouteDecotatorFactory('Put', path, target, propertyKey, descriptor);

  }
}