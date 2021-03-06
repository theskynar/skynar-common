export function MethodMiddlewareFactory(target: any, propertyKey: any, descriptor: PropertyDescriptor, middleware: Function) {
    let original = descriptor.value;
    
    descriptor.value = function (req, res) {

        try {
            let response = middleware(req, res);
            if(response === false) return res.status(500).send();

            original.apply(this, [req, res]);
        }
        catch(err){
            res.status(err.status || 500).send(err.message || err);
        }

    }

    return descriptor;
}