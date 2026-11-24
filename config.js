// @ts-check
// Central place for test configuration. Spec files import values from here
// instead of hardcoding them. Secrets (login credentials) come from .env only.
import 'dotenv/config';

/**
 * Application URLs.
 */
export const appUrls = {
    baseURL: process.env.BASE_URL || 'http://192.168.11.25/RailERP-Staging/',
    loginURL: process.env.LOGIN_URL || './',
};

/**
 * Login credentials. Values are read from .env (or CI environment variables).
 */
export const credentials = {
    validLogin: {
        username: process.env.VALID_USERNAME,
        password: process.env.VALID_PASSWORD,
        checkbox: false,
    },
    invalidLogin: {
        username: process.env.INVALID_USERNAME,
        password: process.env.INVALID_PASSWORD,
        checkbox: false,
    },
};

/**
 * Test data for the State master screen.
 */
export const stateData = {
    addState: {
        stateName: 'Tamil Nadu',
        stateCode: 'TN',
        activeStatus: '1',
    },
};
