import { MethodMiddlewareFactory } from "../helpers/MethodMiddlewareFactory";
import { ClassMiddlewareFactory } from "../helpers/ClassMiddlewareFactory";

export function Middleware(middleware: Function) {
  return function(target: any, propertyKey?: any, descriptor?: PropertyDescriptor) { 
    
    if(descriptor) return MethodMiddlewareFactory(target, propertyKey, descriptor, middleware);
    else return ClassMiddlewareFactory(target, middleware);

  }
}