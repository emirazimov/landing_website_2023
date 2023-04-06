type InvoiceCompanyInfo = {
    companyLogo: string,
    companyName: string,
};

type InvoiceReservationDetail = {
    addressFrom: string,
    addressTo: string,
    date: string,
    paymentId: number,
    personsQty: number,
    total: number,
};

type InvoiceDetailType = {
    allowTip: boolean,
    cardNickname: null | string,
    cardNumber: null | string, 
    cvc: number, 
    discount: number, 
    email: null | string,
    firstName: null | string,
    invoiceCompanyInfo: InvoiceCompanyInfo,
    invoiceReservationInfo: InvoiceReservationDetail,
    isSaveCard: boolean,
    lastName: null | string
    month: number,
    paymentId: number,
    phone: null | string,
    tipAmount : number,
    year: number,
    total: number
};
