import { RouteDecotatorFactory } from "../helpers/RouteDecoratorFactory"

export function Delete(path: string) {
  return function(target: any, propertyKey: any, descriptor: PropertyDescriptor) {

    return RouteDecotatorFactory('delete', path, target, propertyKey, descriptor);

  }
}