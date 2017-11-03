# Skynar/core

Skynar is MVC framework using typescript and based in AngularJS decorators. Make efficient NodeJS scalable application ussing OOP and Dependency Injection.

### Technologies

* Inversify
* Express
* TypeScript

### About common module

Common module have a responsibility for create/modify routes of your application, configuring path and module, adding middlewares and more.

### Dccumentation

Here you can find specification of all exported modules by common module.

#### Decorators

* @Controller(baseRoute?: string)

This decorator make your class a controller. The baseRoute param is opcional, but if exists configure all methods to using her.

**Example:**
```typescript
@Controller('/mycontroller')
class MyController {}
```

* @Get(path: string), @Post(path: string), @Put(path: string), @Delete(path: string)

All of these above decorators configure methods to make routes.

**Example:**
```typescript
@Controller()
class MyController {

  @Get('/hello')
  public say(req: Express.Request, res: Express.Response) {
    res.send('hello world!');
  }
}
```

The example configure one route of method *Get* and Path */hello*.

You can combine baseRoute of controller and path of Http decorators:

```typescript
@Controller('/todo')
class TodoController {

  @Get('/:id')
  public say(req: Express.Request, res: Express.Response) {
    res.send(`Your todo id is: ${req.params.id}`);
  }
}
```

The route generated is */todo/:id* and method is *Get*.

* @Middleware(Function)

The middleware decorator receive required function param. This function receive two params: req (of type Express.Request) and res (of type Express.Response) and is called before original method. 

If function return **false** or throw Error, the original function is not called, in other cases the original function is called normaly.

```typescript
function Auth(req: Express.Request, res: Express.Response) {
  if(!req.header['token']) {
    res.status(401).send('Not authorized');
    return false;
  }

  return true;
}

@Controller('/todo')
class TodoController {

  @Middleware(Auth)
  @Get('/:id')
  public say(req: Express.Request, res: Express.Response) {
    res.send(`Your todo id is: ${req.params.id}`);
  }
}
```