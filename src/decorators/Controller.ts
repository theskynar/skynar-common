import { decorate, injectable } from "inversify"
import "reflect-metadata";

export function Controller (baseUrl: string = '') {
  return function(constructor) {
    // Save target
    let original = constructor;
    // Increment properties
    original.prototype._baseRoute = baseUrl;
    if(!original.prototype._routes) original.prototype._routes = [];
    // Return new module
    decorate(injectable(), original);
    return <any>original;
  }
}