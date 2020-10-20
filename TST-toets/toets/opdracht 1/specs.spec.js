// hugo van der geest, zie aantekeningen 

describe('Testje 1', function() {
    it('should have the correct title', function () {
        expect(document.title).toBe('Verbeteringen');
        // veranderd naar "Verbeterigen"
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Testje 2', function () {
    it('should test', function () {
        expect(unitTest.item).toBe('item');
        // veranderd naar "Item"
        ('should test', function () {
            expect(unitTest.nummer).toEqual(3);
                    // "it"  weggehaald 

        });
    });
});

describe('Testje 3', function () {
    it('should test', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});
// deze verplaats 
        describe('Testje 4', function () {
            it('should test', function () {
                expect(unitTest.boodschap).toEqual('Hallo');

    });
});
