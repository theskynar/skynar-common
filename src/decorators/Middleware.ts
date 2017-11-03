export function Middleware(middleware: Function) {
  return function(target: any, propertyKey: any, descriptor: PropertyDescriptor) { 
    let original = descriptor.value;

    descriptor.value = function (req, res) {

      try {
        let response = middleware(req, res);
        if(!response) return res.end();

        original.apply(this, [req, res]);
      }
      catch(err){
        res.status(err.status || 500).send(err.message || err);
      }

    }

    return descriptor;
  }
}