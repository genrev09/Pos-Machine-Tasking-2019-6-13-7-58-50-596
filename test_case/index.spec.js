const indexModule = require('../index');

// Happy Cases
it('should print receipt', () => {
    const barcodeList = ['0001', '0003', '0005', '0003'];
    const expectedResult = "Receipts\n------------------------------------------------------------\n"+
                           "Coca Cola\t" + "3\t" + "1\n"+
                           "Pepsi-Cola\t" + "5\t" + "2\n"+
                           "Dr Pepper\t" + "7\t" + "1\n"+
                           "------------------------------------------------------------\n"+
                           "Price: 20";

    const actualResult = indexModule.PrintReceipt(barcodeList);
    expect(actualResult).toBe(expectedResult);
});

it('should filter array of barcodes', () => {
    const barcodeList = ['0001', '0003', '0005', '0003'];
    const expectedResult = ['0001','0003','0005'];

    const actualResult = indexModule.filterBarcodeList(barcodeList);
    expect(actualResult).toEqual(expectedResult);
});

it('should get count of barcode from array of barcodes', () => {
    const barcode = '0003';
    const barcodeList = ['0001', '0003', '0005', '0003'];
    const expectedResult = 2;

    const actualResult = indexModule.getCount(barcode, barcodeList);

    expect(actualResult).toBe(expectedResult);
});

it('should get product using barcode', () => {
    const barcode = '0003';
    const expectedResult = {"id": "0003", "name" : "Pepsi-Cola", "price": 5};
    const actualResult = indexModule.getProduct(barcode);

    expect(actualResult).toEqual(expectedResult);
});

it('should check product', () => {
    const product = {"id": "0003", "name" : "Pepsi-Cola", "price": 5};
    const actualResult = indexModule.checkProduct(product);

    expect(actualResult).toBe(true);
});

it('should get product using barcode', () => {
    const barcodeList = ['0001', '0003', '0005', '0003'];
    const filteredBarcodeList = ['0001', '0003', '0005'];
    
    const expectedResult = "Receipts\n------------------------------------------------------------\n"+
                           "Coca Cola\t" + "3\t" + "1\n"+
                           "Pepsi-Cola\t" + "5\t" + "2\n"+
                           "Dr Pepper\t" + "7\t" + "1\n"+
                           "------------------------------------------------------------\n"+
                           "Price: 20";

    const actualResult = indexModule.generateReceipt(filteredBarcodeList,barcodeList);
    
    expect(actualResult).toEqual(expectedResult);
});

it('should print receipt without invalid barcode', () => {
    const barcodeList = ['0000','0001', '0003'];
    const expectedResult = "Receipts\n------------------------------------------------------------\n"+
                           "Coca Cola\t" + "3\t" + "1\n"+
                           "Pepsi-Cola\t" + "5\t" + "1\n"+
                           "------------------------------------------------------------\n"+
                           "Price: 8";

    const actualResult = indexModule.PrintReceipt(barcodeList);
    expect(actualResult).toBe(expectedResult);
});

it('should get count of barcode from array of barcodes', () => {
    const barcode = '0000';
    const barcodeList = ['0001', '0003', '0005', '0003'];
    const expectedResult = 0;

    const actualResult = indexModule.getCount(barcode, barcodeList);

    expect(actualResult).toBe(expectedResult);
});

it('should give undefined if product does not exists', () => {
    const actualResult = indexModule.getProduct('0000');

    console.log(actualResult);
    expect(actualResult).toBe(undefined);
});

it('should check product', () => {
    const product = undefined;
    const actualResult = indexModule.checkProduct(product);

    expect(actualResult).toBe(false);
});

it('should get product using barcode', () => {
    const barcodeList = ['0001', '0003', '0000'];
    const filteredBarcodeList = ['0001', '0003', '0000'];
    
    const expectedResult = "Receipts\n------------------------------------------------------------\n"+
                           "Coca Cola\t" + "3\t" + "1\n"+
                           "Pepsi-Cola\t" + "5\t" + "1\n"+
                           "------------------------------------------------------------\n"+
                           "Price: 8";

    const actualResult = indexModule.generateReceipt(filteredBarcodeList,barcodeList);
    
    expect(actualResult).toEqual(expectedResult);
});