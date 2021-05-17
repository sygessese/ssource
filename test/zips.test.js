import { assert, expect } from "chai";
import ZipsService from '../domain/zips-service.js';
import ZipsClient from '../data-access/zips-client.js';

    /* Test read/ write/ delete logic */
    describe("CRUD logic for Zip codes", () => {
        const testZip = Math.floor(Math.random() * 100000);
        const testService = new ZipsService(ZipsClient)

        it(`getZips() should initially return an empty array`, async () => {
            const result = await testService.getZips();
            expect(result).to.have.lengthOf(0);
            assert.isArray(result);
        })

        it(`getZip() should return false for nonexistant zip`, async () => {
            const result = await testService.getZip(testZip);
            expect(result).to.equal(false);
        });

        it(`addZip() should insert zip`, async () => {
            await testService.addZip(testZip);
            const result = await testService.getZip(testZip);
            expect(result).to.equal(true);
        })

        it(`getZips() should return an array of inserted zips`, async () => {
            const result = await testService.getZips();
            expect(result).to.have.lengthOf(1);
            expect(result).to.have.members([`${testZip}`])
        })

        it(`deleteZips() should remove zip`, async () => {
            const zips = await testService.getZips();
            expect(zips).to.have.lengthOf(1);
            await testService.deleteZip(testZip);
            const result = await testService.getZips();
            expect(result).to.have.lengthOf(0);
        });
    });
    
    /* Test sort and range logic */
    describe("Transform logic for getZips()", () => {
        const testService = new ZipsService(ZipsClient);
        const zips = [
            [[1, 9, 6, 2, 4, 3], ['1-4', '6', '9']],
            [[0], ['0']],
            [[1, 5, 2, 9, 10, 11], ['1-2', '5', '9-11']],
            [[32, 31, 28, 5, 3],['3', '5', '28', '31-32']]
        ];

        it(`transform() should sort zips`, () => {
            zips.forEach(zip => {
                const result = testService.transform(zip[0]);
                assert.isArray(result);
                expect(result).to.have.lengthOf(zip[1].length);
                expect(result).to.have.deep.ordered.members(zip[1])
                expect(result).to.not.have.deep.ordered.members(zip[0])
            })
        })
    });


