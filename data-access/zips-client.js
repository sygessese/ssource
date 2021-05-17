// mocks a database client
export default class ZipsClient {
    constructor() {
        this.data = new Set();
    };

    async delay(func) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve(func());
            }, 0);
        });
    };

    // return object of zips
    async getZips() {
        return await this.delay(() => {
            return Array.from(this.data)
        });
    };

    // return boolean
    async getZip(zip) {
        return await this.delay(() => {
            return this.data.has(zip);
        });
    };

    // return success upon saving zips
    async addZip(zip) {
        return await this.delay(() => {
            this.data.add(zip);
        });
    };

    // return success upon saving zips
    async deleteZip(zip) {
        return await this.delay(() => {
            this.data.delete(zip);
        });
    };
};