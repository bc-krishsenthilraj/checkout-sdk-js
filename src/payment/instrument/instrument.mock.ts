import Instrument, { InstrumentRequestContext, VaultAccessToken } from './instrument';
import { InstrumentsResponseBody, InstrumentErrorResponseBody, InternalInstrumentsResponseBody, InternalVaultAccessTokenResponseBody } from './instrument-response-body';
import InstrumentState, { InstrumentMeta } from './instrument-state';

export function getInstrumentsMeta(): InstrumentMeta {
    return getVaultAccessToken();
}

export function getVaultAccessToken(): VaultAccessToken {
    return {
        vaultAccessToken: 'VAT f4k3v4ul74cc3sst0k3n',
        vaultAccessExpiry: 1516097476098,
    };
}

export function getInstruments(): Instrument[] {
    return [
        {
            bigpayToken: '123',
            provider: 'braintree',
            iin: '11111111',
            last4: '4321',
            expiryMonth: '02',
            expiryYear: '2020',
            brand: 'test',
            trustedShippingAddress: true,
            defaultInstrument: true,
        },
        {
            bigpayToken: '111',
            provider: 'authorizenet',
            iin: '11222333',
            last4: '4444',
            expiryMonth: '10',
            expiryYear: '2024',
            brand: 'test',
            trustedShippingAddress: false,
            defaultInstrument: false,
        },
    ];
}

export function getInstrumentsState(): InstrumentState {
    return {
        data: getInstruments(),
        meta: getInstrumentsMeta(),
        errors: {},
        statuses: {},
    };
}

export function instrumentRequestContext(): InstrumentRequestContext {
    return {
        storeId: '1504098821',
        customerId: 0,
        authToken: getInstrumentsMeta().vaultAccessToken,
    };
}

export function getErrorInstrumentResponseBody(): InstrumentErrorResponseBody {
    return {
        errors: [{
            code: 400,
            message: 'Bad Request',
        }],
    };
}

export function getVaultAccessTokenResponseBody(): InternalVaultAccessTokenResponseBody {
    return {
        data: {
            token: 'VAT f4k3v4ul74cc3sst0k3n',
            expires_at: 1516097476098,
        },
    };
}

export function getLoadInstrumentsResponseBody(): InstrumentsResponseBody {
    return {
        vaultedInstruments: getInstruments(),
    };
}

export function getInternalInstrumentsResponseBody(): InternalInstrumentsResponseBody {
    return {
        vaulted_instruments: [
            {
                bigpay_token: '123',
                provider: 'braintree',
                iin: '11111111',
                last_4: '4321',
                expiry_month: '02',
                expiry_year: '2020',
                brand: 'test',
                trusted_shipping_address: true,
                default_instrument: true,
            },
            {
                bigpay_token: '111',
                provider: 'authorizenet',
                iin: '11222333',
                last_4: '4444',
                expiry_month: '10',
                expiry_year: '2024',
                brand: 'test',
                trusted_shipping_address: false,
                default_instrument: false,
            },
        ],
    };
}

export function deleteInstrumentResponseBody(): InstrumentsResponseBody {
    return {
        vaultedInstruments: [],
    };
}
