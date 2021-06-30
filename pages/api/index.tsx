import axios from 'axios';

interface QuoteRequest {
    service: string;
    when: string;
    serviceLocation: string;
    mobileNumber: string;
    details: string;
}

export const submitQuote = (values: QuoteRequest) => {
    return axios.post('/api/submit-quote', values)
        .then(res => res.data)
        .catch(err => err);
}