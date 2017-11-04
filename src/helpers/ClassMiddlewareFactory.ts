export function ClassMiddlewareFactory(constructor, middleware) {
    constructor.prototype._middleware = (req, res, next) => {
        try {
            let response = middleware(req, res);
            if(response === false) return res.status(500).send();

            next();
        }
        catch(err){
            res.status(err.status || 500).send(err.message || err);
        }
    };

    return constructor;
}