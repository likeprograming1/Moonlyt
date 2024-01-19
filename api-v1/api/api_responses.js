module.exports = {
    NONCE: {
        code: 200,
        message: 'Nonce successfully created and returned'
    },
    LOGIN: {
        code: 200,
        message: 'Successfully logged in'
    },
    REFRESH: {
        code: 200,
        message: 'Tokens successfully refreshed'
    },

    /* failed response */
    INVALID_TOKEN_ERROR: {
        code: 401,
        msg: 'Invalid token'
    },
    INVALID_SIGNATURE_ERROR: {
        code: 401,
        msg: 'Invalid signature'
    },
    TOKEN_ISSUE_ERROR: {
        code: 500,
        message: 'Error occurred while issuing tokens'
    },
    USER_CREATION_ERROR: {
        code: 500,
        message: 'Error occurred while creating the user!'
    },

    INTERNAL_ERROR: {
        code: 500,
        message: 'An internal server error occurred'
    },
};
