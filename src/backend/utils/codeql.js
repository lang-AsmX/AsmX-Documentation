class ClientServer {
    static connect(url) {
        if (typeof url !== 'string') new Error('Invalid type argument');
        if (url  !== this.url) this.hostname = url;
        return this;
    }
    

    static route(rout) {
        if (typeof url !== 'string') new Error('Invalid type argument');
        this.route = rout;
    }


    static async get() {
        return await fetch(`${this.hostname}${this.rout}`, { method: 'GET' });
    }


    static async post() {
        return await fetch(`${this.hostname}${this.rout}`, { method: 'POST' });
    }


    static clean(resource, fields, recursion) {
        if (recursion == false) {
            let newrs = [];

            for (const node of resource) {
                return Reflect.ownKeys(node).filter(key => {
                    if (typeof fields == 'string') key !== fields;
                    if (Array.isArray(fields)) fields.includes(key);
                });
            }
        } else {
            for (const node of resource) {
                this.clean(node, fields, true);
            }
        }
    }
}