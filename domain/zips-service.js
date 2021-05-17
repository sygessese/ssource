export default class ZipsService {
    constructor(Client) {
        this.client = new Client();
    };
    
    async addZip(zip) {
        return await this.client.addZip(zip);
    }
    
    async deleteZip(zip) {
        return await this.client.deleteZip(zip);
    }
    
    async getZip(zip) {
        return await this.client.getZip(zip);
    }
    
    async getZips() {
        const zips = await this.client.getZips();
        return this.transform(zips);
    }
    
    transform(zips) {
        zips.sort((a,b) => a-b);
        const result = [];
        for (var i = 0; i < zips.length; i++) {
            const current = zips[i];
            let next = zips[i + 1];
            if (!next || next !== current + 1) result.push(`${current}`);
            else { 
                i++;
                while (zips[i + 1]) {
                    if (zips[i + 1] === next + 1) {
                        next = zips[++i];
                    } else break;
                }
                result.push(`${current}-${next}`);
            }
        }
        return result;
    }
}
