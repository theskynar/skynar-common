import { RouteDecotatorFactory } from "../helpers/RouteDecoratorFactory"

export function Post(path: string) {
  return function(target: any, propertyKey: any, descriptor: PropertyDescriptor) {

    return RouteDecotatorFactory('post', path, target, propertyKey, descriptor);

  }
}