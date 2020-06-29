/*! @azure/msal-common v1.0.0-beta.2 2020-06-18 */
'use strict';
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.msalCommon = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * AuthErrorMessage class containing string constants used by error codes and messages.
     */
    var AuthErrorMessage = {
        unexpectedError: {
            code: "unexpected_error",
            desc: "Unexpected error in authentication."
        }
    };
    /**
     * General error class thrown by the MSAL.js library.
     */
    var AuthError = /** @class */ (function (_super) {
        __extends(AuthError, _super);
        function AuthError(errorCode, errorMessage) {
            var _this = this;
            var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
            _this = _super.call(this, errorString) || this;
            Object.setPrototypeOf(_this, AuthError.prototype);
            _this.errorCode = errorCode;
            _this.errorMessage = errorMessage;
            _this.name = "AuthError";
            return _this;
        }
        /**
         * Creates an error that is thrown when something unexpected happens in the library.
         * @param errDesc
         */
        AuthError.createUnexpectedError = function (errDesc) {
            return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
        };
        return AuthError;
    }(Error));

    var name = "@azure/msal-common";
    var author = {
    	name: "Microsoft",
    	email: "nugetaad@microsoft.com",
    	url: "https://www.microsoft.com"
    };
    var license = "MIT";
    var repository = {
    	type: "git",
    	url: "https://github.com/AzureAD/microsoft-authentication-library-for-js.git"
    };
    var version = "1.0.0-beta.2";
    var description = "Microsoft Authentication Library for js";
    var keywords = [
    	"implicit",
    	"authorization code",
    	"PKCE",
    	"js",
    	"AAD",
    	"msal",
    	"oauth"
    ];
    var main = "./dist/index.js";
    var module = "./dist/index.es.js";
    var types = "./dist/src/index.d.ts";
    var browserslist = [
    	"last 1 version",
    	"> 1%",
    	"maintained node versions",
    	"not dead"
    ];
    var engines = {
    	node: ">=0.8.0"
    };
    var directories = {
    	test: "test"
    };
    var files = [
    	"dist"
    ];
    var scripts = {
    	clean: "shx rm -rf dist lib",
    	"clean:coverage": "rimraf ../../.nyc_output/*",
    	lint: "eslint src --ext .ts",
    	test: "mocha",
    	"test:coverage": "nyc --reporter=text mocha --exit",
    	"test:coverage:only": "npm run clean:coverage && npm run test:coverage",
    	"build:modules": "rollup -c",
    	"build:modules:watch": "rollup -cw",
    	build: "npm run clean && npm run lint && npm run build:modules",
    	prepack: "npm run build"
    };
    var devDependencies = {
    	"@babel/core": "^7.7.2",
    	"@babel/plugin-proposal-class-properties": "^7.7.0",
    	"@babel/plugin-proposal-object-rest-spread": "^7.6.2",
    	"@babel/polyfill": "^7.7.0",
    	"@babel/preset-env": "^7.7.1",
    	"@babel/preset-typescript": "^7.7.2",
    	"@babel/register": "^7.7.0",
    	"@istanbuljs/nyc-config-babel": "^2.1.1",
    	"@rollup/plugin-json": "^4.0.0",
    	"@types/chai": "^4.2.5",
    	"@types/chai-as-promised": "^7.1.2",
    	"@types/debug": "^4.1.5",
    	"@types/mocha": "^5.2.7",
    	"@types/sinon": "^7.5.0",
    	"@typescript-eslint/eslint-plugin": "^2.4.0",
    	"@typescript-eslint/eslint-plugin-tslint": "^2.4.0",
    	"@typescript-eslint/parser": "^2.4.0",
    	"babel-plugin-istanbul": "^5.2.0",
    	chai: "^4.2.0",
    	"chai-as-promised": "^7.1.1",
    	eslint: "^6.5.1",
    	husky: "^3.0.9",
    	mocha: "^6.2.2",
    	nyc: "^14.1.1",
    	rimraf: "^3.0.2",
    	rollup: "^1.24.0",
    	"rollup-plugin-typescript2": "^0.24.3",
    	"rollup-plugin-uglify": "^6.0.4",
    	shx: "^0.3.2",
    	sinon: "^7.5.0",
    	tslib: "^1.10.0",
    	tslint: "^5.20.0",
    	typescript: "^3.7.5"
    };
    var dependencies = {
    	debug: "^4.1.1"
    };
    var pkg = {
    	name: name,
    	author: author,
    	license: license,
    	repository: repository,
    	version: version,
    	description: description,
    	keywords: keywords,
    	main: main,
    	module: module,
    	types: types,
    	browserslist: browserslist,
    	engines: engines,
    	directories: directories,
    	files: files,
    	scripts: scripts,
    	devDependencies: devDependencies,
    	dependencies: dependencies
    };

    /**
     * ClientAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientAuthErrorMessage = {
        clientInfoDecodingError: {
            code: "client_info_decoding_error",
            desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
        },
        clientInfoEmptyError: {
            code: "client_info_empty_error",
            desc: "The client info was empty. Please review the trace to determine the root cause."
        },
        idTokenParsingError: {
            code: "id_token_parsing_error",
            desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
        },
        nullOrEmptyIdToken: {
            code: "null_or_empty_id_token",
            desc: "The idToken is null or empty. Please review the trace to determine the root cause."
        },
        endpointResolutionError: {
            code: "endpoints_resolution_error",
            desc: "Error: could not resolve endpoints. Please check network and try again."
        },
        invalidAuthorityType: {
            code: "invalid_authority_type",
            desc: "The given authority is not a valid type of authority supported by MSAL. Please review the trace to determine the root cause."
        },
        hashNotDeserialized: {
            code: "hash_not_deserialized",
            desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
        },
        blankGuidGenerated: {
            code: "blank_guid_generated",
            desc: "The guid generated was blank. Please review the trace to determine the root cause."
        },
        stateMismatchError: {
            code: "state_mismatch",
            desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
        },
        nonceMismatchError: {
            code: "nonce_mismatch",
            desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
        },
        accountMismatchError: {
            code: "account_mismatch",
            desc: "The cached account and account which made the token request do not match."
        },
        invalidIdToken: {
            code: "invalid_id_token",
            desc: "Invalid ID token format."
        },
        noTokensFoundError: {
            code: "no_tokens_found",
            desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
        },
        cacheParseError: {
            code: "cache_parse_error",
            desc: "Could not parse cache key."
        },
        userLoginRequiredError: {
            code: "user_login_error",
            desc: "User login is required."
        },
        multipleMatchingTokens: {
            code: "multiple_matching_tokens",
            desc: "The cache contains multiple tokens satisfying the requirements. " +
                "Call AcquireToken again providing more requirements such as authority or account."
        },
        multipleMatchingAccounts: {
            code: "multiple_matching_accounts",
            desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
        },
        tokenRequestCannotBeMade: {
            code: "request_cannot_be_made",
            desc: "Token request cannot be made without authorization code or refresh token."
        },
        appendEmptyScopeError: {
            code: "cannot_append_empty_scope",
            desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
        },
        removeEmptyScopeError: {
            code: "cannot_remove_empty_scope",
            desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
        },
        appendScopeSetError: {
            code: "cannot_append_scopeset",
            desc: "Cannot append ScopeSet due to error."
        },
        emptyInputScopeSetError: {
            code: "empty_input_scopeset",
            desc: "Empty input ScopeSet cannot be processed."
        },
        DeviceCodePollingCancelled: {
            code: "device_code_polling_cancelled",
            desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
        },
        DeviceCodeExpired: {
            code: "device_code_expired",
            desc: "Device code is expired."
        },
        NoAccountInSilentRequest: {
            code: "no_account_in_silent_request",
            desc: "Please pass an account object, silent flow is not supported without account information"
        }
    };
    /**
     * Error thrown when there is an error in the client code running on the browser.
     */
    var ClientAuthError = /** @class */ (function (_super) {
        __extends(ClientAuthError, _super);
        function ClientAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientAuthError";
            Object.setPrototypeOf(_this, ClientAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when client info object doesn't decode correctly.
         * @param caughtError
         */
        ClientAuthError.createClientInfoDecodingError = function (caughtError) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
        };
        /**
         * Creates an error thrown if the client info is empty.
         * @param rawClientInfo
         */
        ClientAuthError.createClientInfoEmptyError = function (rawClientInfo) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, ClientAuthErrorMessage.clientInfoEmptyError.desc + " Given Object: " + rawClientInfo);
        };
        /**
         * Creates an error thrown when the id token extraction errors out.
         * @param err
         */
        ClientAuthError.createIdTokenParsingError = function (caughtExtractionError) {
            return new ClientAuthError(ClientAuthErrorMessage.idTokenParsingError.code, ClientAuthErrorMessage.idTokenParsingError.desc + " Failed with error: " + caughtExtractionError);
        };
        /**
         * Creates an error thrown when the id token string is null or empty.
         * @param invalidRawTokenString
         */
        ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
            return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyIdToken.code, ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
        };
        /**
         * Creates an error thrown when the endpoint discovery doesn't complete correctly.
         */
        ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
        };
        /**
         * Creates an error thrown if authority type is not valid.
         * @param invalidAuthorityError
         */
        ClientAuthError.createInvalidAuthorityTypeError = function (givenUrl) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidAuthorityType.code, ClientAuthErrorMessage.invalidAuthorityType.desc + " Given Url: " + givenUrl);
        };
        /**
         * Creates an error thrown when the hash cannot be deserialized.
         * @param invalidAuthorityError
         */
        ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
            return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
        };
        /**
         * Creates an error thrown when two states do not match.
         */
        ClientAuthError.createStateMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
        };
        /**
         * Creates an error thrown when the nonce does not match.
         */
        ClientAuthError.createNonceMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
        };
        /**
         * Creates an error thrown when the cached account and response account do not match.
         */
        ClientAuthError.createAccountMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.accountMismatchError.code, ClientAuthErrorMessage.accountMismatchError.desc);
        };
        /**
         * Throws error if idToken is not correctly formed
         * @param idToken
         */
        ClientAuthError.createInvalidIdTokenError = function (idToken) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidIdToken.code, ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + JSON.stringify(idToken));
        };
        /**
         * Creates an error thrown when the authorization code required for a token request is null or empty.
         */
        ClientAuthError.createNoTokensFoundError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noTokensFoundError.code, ClientAuthErrorMessage.noTokensFoundError.desc);
        };
        /**
         * Creates an error in cache parsing.
         */
        ClientAuthError.createCacheParseError = function (cacheKey) {
            return new ClientAuthError(ClientAuthErrorMessage.cacheParseError.code, ClientAuthErrorMessage.cacheParseError.desc + " Cache key: " + cacheKey);
        };
        /**
         * Throws error when renewing token without login.
         */
        ClientAuthError.createUserLoginRequiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.userLoginRequiredError.code, ClientAuthErrorMessage.userLoginRequiredError.desc);
        };
        /**
         * Throws error when multiple tokens are in cache for the given scope.
         * @param scope
         */
        ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
        };
        /**
         * Throws error when multiple tokens are in cache for the given scope.
         * @param scope
         */
        ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
        };
        /**
         * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
         */
        ClientAuthError.createTokenRequestCannotBeMadeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append null or empty ScopeSet.
         * @param appendError
         */
        ClientAuthError.createAppendScopeSetError = function (appendError) {
            return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
        };
        /**
         * Throws error if ScopeSet is null or undefined.
         * @param givenScopeSet
         */
        ClientAuthError.createEmptyInputScopeSetError = function (givenScopeSet) {
            return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, ClientAuthErrorMessage.emptyInputScopeSetError.desc + " Given ScopeSet: " + givenScopeSet);
        };
        /**
         * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
         */
        ClientAuthError.createDeviceCodeCancelledError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
        };
        /**
         * Throws error if device code is expired
         */
        ClientAuthError.createDeviceCodeExpiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
        };
        /**
         * Throws error when silent requests are made without an account object
         */
        ClientAuthError.createNoAccountInSilentRequestError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
        };
        return ClientAuthError;
    }(AuthError));

    /**
     * @hidden
     */
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        /**
         * decode a JWT
         *
         * @param jwtToken
         */
        StringUtils.decodeJwt = function (jwtToken) {
            if (StringUtils.isEmpty(jwtToken)) {
                throw ClientAuthError.createIdTokenNullOrEmptyError(jwtToken);
            }
            var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
            var matches = idTokenPartsRegex.exec(jwtToken);
            if (!matches || matches.length < 4) {
                throw ClientAuthError.createIdTokenParsingError("Given token is malformed: " + JSON.stringify(jwtToken));
            }
            var crackedToken = {
                header: matches[1],
                JWSPayload: matches[2],
                JWSSig: matches[3]
            };
            return crackedToken;
        };
        /**
         * Check if a string is empty.
         *
         * @param str
         */
        StringUtils.isEmpty = function (str) {
            return (typeof str === "undefined" || !str || 0 === str.length);
        };
        /**
         * Parses string into an object.
         *
         * @param query
         */
        StringUtils.queryStringToObject = function (query) {
            var match; // Regex for replacing addition symbol with a space
            var pl = /\+/g;
            var search = /([^&=]+)=([^&]*)/g;
            var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
            var obj = {};
            match = search.exec(query);
            while (match) {
                obj[decode(match[1])] = decode(match[2]);
                match = search.exec(query);
            }
            return obj;
        };
        /**
         * Trims entries and converts them to lower case.
         *
         * @param arr
         */
        StringUtils.trimAndConvertArrayEntriesToLowerCase = function (arr) {
            return arr.map(function (entry) { return entry.trim().toLowerCase(); });
        };
        /**
         * Removes empty strings from array
         * @param arr
         */
        StringUtils.removeEmptyStringsFromArray = function (arr) {
            return arr.filter(function (entry) {
                return !StringUtils.isEmpty(entry);
            });
        };
        return StringUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    (function (LogLevel) {
        LogLevel[LogLevel["Error"] = 0] = "Error";
        LogLevel[LogLevel["Warning"] = 1] = "Warning";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
    })(exports.LogLevel || (exports.LogLevel = {}));
    /**
     * Class which facilitates logging of messages to a specific place.
     */
    var Logger = /** @class */ (function () {
        function Logger(loggerOptions) {
            // Current log level, defaults to info.
            this.level = exports.LogLevel.Info;
            if (loggerOptions) {
                this.localCallback = loggerOptions.loggerCallback;
                this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled;
                this.level = loggerOptions.logLevel;
            }
        }
        /**
         * Log message with required options.
         */
        Logger.prototype.logMessage = function (logMessage, options) {
            if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
                return;
            }
            var timestamp = new Date().toUTCString();
            var logHeader = StringUtils.isEmpty(this.correlationId) ? "[" + timestamp + "] : " : "[" + timestamp + "] : [" + this.correlationId + "]";
            var log = logHeader + " : " + pkg.version + " : " + exports.LogLevel[options.logLevel] + " - " + logMessage;
            // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": ""}${options.context ? `:${options.context}` : ""}`)(logMessage);
            this.executeCallback(options.logLevel, log, options.containsPii);
        };
        /**
         * Execute callback with message.
         */
        Logger.prototype.executeCallback = function (level, message, containsPii) {
            if (this.localCallback) {
                this.localCallback(level, message, containsPii);
            }
        };
        /**
         * Logs error messages.
         */
        Logger.prototype.error = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Error,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs error messages with PII.
         */
        Logger.prototype.errorPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Error,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages.
         */
        Logger.prototype.warning = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Warning,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages with PII.
         */
        Logger.prototype.warningPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Warning,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages.
         */
        Logger.prototype.info = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Info,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages with PII.
         */
        Logger.prototype.infoPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Info,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages.
         */
        Logger.prototype.verbose = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Verbose,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages with PII.
         */
        Logger.prototype.verbosePii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Verbose,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Returns whether PII Logging is enabled or not.
         */
        Logger.prototype.isPiiLoggingEnabled = function () {
            return this.piiLoggingEnabled || false;
        };
        return Logger;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var Constants = {
        LIBRARY_NAME: "MSAL.JS",
        SKU: "msal.js.common",
        // Prefix for all library cache entries
        CACHE_PREFIX: "msal",
        // default authority
        DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common",
        // ADFS String
        ADFS: "adfs",
        // Default AAD Instance Discovery Endpoint
        AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance",
        // Resource delimiter - used for certain cache entries
        RESOURCE_DELIM: "|",
        // Placeholder for non-existent account ids/objects
        NO_ACCOUNT: "NO_ACCOUNT",
        // Claims
        CLAIMS: "claims",
        // Consumer UTID
        CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
        // Default scopes
        OPENID_SCOPE: "openid",
        PROFILE_SCOPE: "profile",
        OFFLINE_ACCESS_SCOPE: "offline_access",
        // Default response type for authorization code flow
        CODE_RESPONSE_TYPE: "code",
        CODE_GRANT_TYPE: "authorization_code",
        RT_GRANT_TYPE: "refresh_token",
        FRAGMENT_RESPONSE_MODE: "fragment",
        S256_CODE_CHALLENGE_METHOD: "S256",
        URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
        AUTHORIZATION_PENDING: "authorization_pending",
        NOT_DEFINED: "not_defined"
    };
    /**
     * Request header names
     */
    var HeaderNames;
    (function (HeaderNames) {
        HeaderNames["CONTENT_TYPE"] = "Content-Type";
    })(HeaderNames || (HeaderNames = {}));
    (function (PersistentCacheKeys) {
        PersistentCacheKeys["ID_TOKEN"] = "idtoken";
        PersistentCacheKeys["CLIENT_INFO"] = "client.info";
        PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
        PersistentCacheKeys["ERROR"] = "error";
        PersistentCacheKeys["ERROR_DESC"] = "error.description";
    })(exports.PersistentCacheKeys || (exports.PersistentCacheKeys = {}));
    /**
     * List of pre-established trusted host URLs.
     */
    var AADTrustedHostList = [
        "login.windows.net",
        "login.chinacloudapi.cn",
        "login.cloudgovapi.us",
        "login.microsoftonline.com",
        "login.microsoftonline.de",
        "login.microsoftonline.us"
    ];
    /**
     * TODO: placeholder for discovery endpoint call. dynamically generate preferredCache and cacheAliases per cloud
     */
    var EnvironmentAliases = [
        "login.microsoftonline.com",
        "login.windows.net",
        "login.windows-ppe.net",
        "login.microsoft.com",
        "sts.windows.net"
    ];
    var PreferredCacheEnvironment = "login.windows.net";
    /**
     * String constants related to AAD Authority
     */
    var AADAuthorityConstants;
    (function (AADAuthorityConstants) {
        AADAuthorityConstants["COMMON"] = "common";
        AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
        AADAuthorityConstants["CONSUMERS"] = "consumers";
    })(AADAuthorityConstants || (AADAuthorityConstants = {}));
    /**
     * Keys in the hashParams sent by AAD Server
     */
    var AADServerParamKeys;
    (function (AADServerParamKeys) {
        AADServerParamKeys["CLIENT_ID"] = "client_id";
        AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
        AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
        AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
        AADServerParamKeys["GRANT_TYPE"] = "grant_type";
        AADServerParamKeys["CLAIMS"] = "claims";
        AADServerParamKeys["SCOPE"] = "scope";
        AADServerParamKeys["ERROR"] = "error";
        AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
        AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
        AADServerParamKeys["ID_TOKEN"] = "id_token";
        AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
        AADServerParamKeys["EXPIRES_IN"] = "expires_in";
        AADServerParamKeys["STATE"] = "state";
        AADServerParamKeys["NONCE"] = "nonce";
        AADServerParamKeys["PROMPT"] = "prompt";
        AADServerParamKeys["SESSION_STATE"] = "session_state";
        AADServerParamKeys["CLIENT_INFO"] = "client_info";
        AADServerParamKeys["CODE"] = "code";
        AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
        AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
        AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
        AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
        AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
        AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
        AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
        AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
        AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
        AADServerParamKeys["DEVICE_CODE"] = "device_code";
    })(AADServerParamKeys || (AADServerParamKeys = {}));
    /**
     * IdToken claim string constants
     */
    var IdTokenClaimName;
    (function (IdTokenClaimName) {
        IdTokenClaimName["ISSUER"] = "iss";
        IdTokenClaimName["OBJID"] = "oid";
        IdTokenClaimName["SUBJECT"] = "sub";
        IdTokenClaimName["TENANTID"] = "tid";
        IdTokenClaimName["VERSION"] = "ver";
        IdTokenClaimName["PREF_USERNAME"] = "preferred_username";
        IdTokenClaimName["NAME"] = "name";
        IdTokenClaimName["NONCE"] = "nonce";
        IdTokenClaimName["EXPIRATION"] = "exp";
        IdTokenClaimName["HOME_OBJID"] = "home_oid";
        IdTokenClaimName["SESSIONID"] = "sid";
        IdTokenClaimName["CLOUD_INSTANCE_HOSTNAME"] = "cloud_instance_host_name";
    })(IdTokenClaimName || (IdTokenClaimName = {}));
    /**
     * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
     * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
     * internal partners too, hence the choice of generic "string" type instead of the "enum"
     */
    var PromptValue = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none",
    };
    /**
     * SSO Types - generated to populate hints
     */
    var SSOTypes;
    (function (SSOTypes) {
        SSOTypes["ACCOUNT"] = "account";
        SSOTypes["SID"] = "sid";
        SSOTypes["LOGIN_HINT"] = "login_hint";
        SSOTypes["ID_TOKEN"] = "id_token";
        SSOTypes["DOMAIN_HINT"] = "domain_hint";
        SSOTypes["ORGANIZATIONS"] = "organizations";
        SSOTypes["CONSUMERS"] = "consumers";
        SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
        SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
    })(SSOTypes || (SSOTypes = {}));
    /**
     * Disallowed extra query parameters.
     */
    var BlacklistedEQParams = [
        SSOTypes.SID,
        SSOTypes.LOGIN_HINT
    ];
    /**
     * allowed values for codeVerifier
     */
    var CodeChallengeMethodValues = {
        PLAIN: "plain",
        S256: "S256"
    };
    (function (ResponseMode) {
        ResponseMode["QUERY"] = "query";
        ResponseMode["FRAGMENT"] = "fragment";
        ResponseMode["FORM_POST"] = "form_post";
    })(exports.ResponseMode || (exports.ResponseMode = {}));
    /**
     * allowed grant_type
     */
    var GrantType;
    (function (GrantType) {
        GrantType["IMPLICIT_GRANT"] = "implicit";
        GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
        GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
        GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
        GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
        GrantType["DEVICE_CODE_GRANT"] = "device_code";
    })(GrantType || (GrantType = {}));
    /**
     * Account types in Cache
     */
    var CacheAccountType;
    (function (CacheAccountType) {
        CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
        CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
        CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
        CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
    })(CacheAccountType || (CacheAccountType = {}));
    /**
     * Separators used in cache
     */
    var Separators;
    (function (Separators) {
        Separators["CACHE_KEY_SEPARATOR"] = "-";
        Separators["CLIENT_INFO_SEPARATOR"] = ".";
    })(Separators || (Separators = {}));
    (function (CredentialType) {
        CredentialType["ID_TOKEN"] = "idtoken";
        CredentialType["ACCESS_TOKEN"] = "accesstoken";
        CredentialType["REFRESH_TOKEN"] = "refreshtoken";
    })(exports.CredentialType || (exports.CredentialType = {}));
    (function (CacheSchemaType) {
        CacheSchemaType["ACCOUNT"] = "Account";
        CacheSchemaType["CREDENTIAL"] = "Credential";
        CacheSchemaType["APP_META_DATA"] = "AppMetadata";
        CacheSchemaType["TEMPORARY"] = "TempCache";
    })(exports.CacheSchemaType || (exports.CacheSchemaType = {}));
    /**
     * Combine all cache types
     */
    var CacheType;
    (function (CacheType) {
        CacheType[CacheType["ADFS"] = 1001] = "ADFS";
        CacheType[CacheType["MSA"] = 1002] = "MSA";
        CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
        CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
        CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
        CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
        CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
        CacheType[CacheType["APP_META_DATA"] = 3001] = "APP_META_DATA";
    })(CacheType || (CacheType = {}));
    /**
     * More Cache related constants
     */
    var APP_META_DATA = "appmetadata";
    var ClientInfo = "client_info";

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Token renewal offset default in seconds
    var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
    var DEFAULT_AUTH_OPTIONS = {
        clientId: "",
        authority: null,
        knownAuthorities: [],
        redirectUri: "",
        postLogoutRedirectUri: ""
    };
    var DEFAULT_SYSTEM_OPTIONS = {
        storeInMemory: true,
        tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
        telemetry: null
    };
    var DEFAULT_LOGGER_IMPLEMENTATION = {
        loggerCallback: function () {
            // allow users to not set loggerCallback
        },
        piiLoggingEnabled: false,
        logLevel: exports.LogLevel.Info
    };
    var DEFAULT_STORAGE_IMPLEMENTATION = {
        clear: function () {
            var notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        containsKey: function () {
            var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        getItem: function () {
            var notImplErr = "Storage interface - getItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        getKeys: function () {
            var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        removeItem: function () {
            var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        setItem: function () {
            var notImplErr = "Storage interface - setItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        getCache: function () {
            var notImplErr = "Storage interface - getCache() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        setCache: function () {
            var notImplErr = "Storage interface - setCache() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        }
    };
    var DEFAULT_NETWORK_IMPLEMENTATION = {
        sendGetRequestAsync: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        sendPostRequestAsync: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    var DEFAULT_CRYPTO_IMPLEMENTATION = {
        createNewGuid: function () {
            var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Decode: function () {
            var notImplErr = "Crypto interface - base64Decode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Encode: function () {
            var notImplErr = "Crypto interface - base64Encode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        generatePkceCodes: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    var DEFAULT_LIBRARY_INFO = {
        sku: Constants.SKU,
        version: version,
        cpu: "",
        os: ""
    };
    /**
     * Function that sets the default options when not explicitly configured from app developer
     *
     * @param Configuration
     *
     * @returns Configuration
     */
    function buildClientConfiguration(_a) {
        var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, libraryInfo = _a.libraryInfo;
        return {
            authOptions: __assign(__assign({}, DEFAULT_AUTH_OPTIONS), userAuthOptions),
            systemOptions: __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
            loggerOptions: __assign(__assign({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption),
            storageInterface: storageImplementation || DEFAULT_STORAGE_IMPLEMENTATION,
            networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
            cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
            libraryInfo: __assign(__assign({}, DEFAULT_LIBRARY_INFO), libraryInfo)
        };
    }

    /**
     * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientConfigurationErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        claimsRequestParsingError: {
            code: "claims_request_parsing_error",
            desc: "Could not parse the given claims request object."
        },
        authorityUriInsecure: {
            code: "authority_uri_insecure",
            desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
        },
        urlParseError: {
            code: "url_parse_error",
            desc: "URL could not be parsed into appropriate segments."
        },
        urlEmptyError: {
            code: "empty_url_error",
            desc: "URL was empty or null."
        },
        emptyScopesError: {
            code: "empty_input_scopes_error",
            desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
        },
        nonArrayScopesError: {
            code: "nonarray_input_scopes_error",
            desc: "Scopes cannot be passed as non-array."
        },
        clientIdSingleScopeError: {
            code: "clientid_input_scopes_error",
            desc: "Client ID can only be provided as a single scope."
        },
        invalidPrompt: {
            code: "invalid_prompt_value",
            desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
        },
        tokenRequestEmptyError: {
            code: "token_request_empty",
            desc: "Token request was empty and not found in cache."
        },
        invalidCodeChallengeMethod: {
            code: "invalid_code_challenge_method",
            desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
        },
        invalidCodeChallengeParams: {
            code: "pkce_params_missing",
            desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
        },
        b2cKnownAuthoritiesNotSet: {
            code: "b2c_known_authorities_not_set",
            desc: "Must set known authorities when validateAuthority is set to True and using B2C"
        },
        untrustedAuthority: {
            code: "untrusted_authority",
            desc: "The provided authority is not a trusted authority. If using B2C, please include this authority in the knownAuthorities config parameter."
        }
    };
    /**
     * Error thrown when there is an error in configuration of the MSAL.js library.
     */
    var ClientConfigurationError = /** @class */ (function (_super) {
        __extends(ClientConfigurationError, _super);
        function ClientConfigurationError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientConfigurationError";
            Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the claims request could not be successfully parsed
         */
        ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
        };
        /**
         * Creates an error thrown if authority uri is given an insecure protocol.
         * @param urlString
         */
        ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
        };
        /**
         * Creates an error thrown if URL string does not parse into separate segments.
         * @param urlString
         */
        ClientConfigurationError.createUrlParseError = function (urlParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
        };
        /**
         * Creates an error thrown if URL string is empty or null.
         * @param urlString
         */
        ClientConfigurationError.createUrlEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
        };
        /**
         * Error thrown when scopes are not an array
         * @param inputScopes
         */
        ClientConfigurationError.createScopesNonArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.nonArrayScopesError.code, ClientConfigurationErrorMessage.nonArrayScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when scopes are empty.
         * @param scopesValue
         */
        ClientConfigurationError.createEmptyScopesArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, ClientConfigurationErrorMessage.emptyScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when client id scope is not provided as single scope.
         * @param inputScopes
         */
        ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when prompt is not an allowed type.
         * @param promptValue
         */
        ClientConfigurationError.createInvalidPromptError = function (promptValue) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyTokenRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
        };
        /**
         * Throws error when an invalid code_challenge_method is passed by the user
         */
        ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
        };
        /**
         * Throws error when both params: code_challenge and code_challenge_method are not passed together
         */
        ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
        };
        /**
         * Throws an error when the user passes B2C authority and does not set knownAuthorities
         */
        ClientConfigurationError.createKnownAuthoritiesNotSetError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.b2cKnownAuthoritiesNotSet.code, ClientConfigurationErrorMessage.b2cKnownAuthoritiesNotSet.desc);
        };
        /**
         * Throws error when provided authority is not a member of the trusted host list
         */
        ClientConfigurationError.createUntrustedAuthorityError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
        };
        return ClientConfigurationError;
    }(ClientAuthError));

    /**
     * Url object class which can perform various transformations on url strings.
     */
    var UrlString = /** @class */ (function () {
        function UrlString(url) {
            this._urlString = url;
            if (!StringUtils.isEmpty(this._urlString) && StringUtils.isEmpty(this.getHash())) {
                this._urlString = this.canonicalizeUri(url);
            }
            else if (StringUtils.isEmpty(this._urlString)) {
                // Throws error if url is empty
                throw ClientConfigurationError.createUrlEmptyError();
            }
        }
        Object.defineProperty(UrlString.prototype, "urlString", {
            get: function () {
                return this._urlString;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Ensure urls are lower case and end with a / character.
         * @param url
         */
        UrlString.prototype.canonicalizeUri = function (url) {
            if (url) {
                url = url.toLowerCase();
            }
            if (url && !url.endsWith("/")) {
                url += "/";
            }
            return url;
        };
        /**
         * Throws if urlString passed is not a valid authority URI string.
         */
        UrlString.prototype.validateAsUri = function () {
            // Attempts to parse url for uri components
            var components;
            try {
                components = this.getUrlComponents();
            }
            catch (e) {
                throw ClientConfigurationError.createUrlParseError(e);
            }
            // Throw error if URI or path segments are not parseable.
            if (!components.HostNameAndPort || !components.PathSegments || components.PathSegments.length < 1) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Throw error if uri is insecure.
            if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
                throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
            }
        };
        /**
         * Function to remove query string params from url. Returns the new url.
         * @param url
         * @param name
         */
        UrlString.prototype.urlRemoveQueryStringParameter = function (name) {
            var regex = new RegExp("(\\&" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            // name=value&
            regex = new RegExp("(" + name + "=)[^\&]+&");
            this._urlString = this.urlString.replace(regex, "");
            // name=value
            regex = new RegExp("(" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            return this.urlString;
        };
        /**
         * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
         * @param href The url
         * @param tenantId The tenant id to replace
         */
        UrlString.prototype.replaceTenantPath = function (tenantId) {
            var urlObject = this.getUrlComponents();
            var pathArray = urlObject.PathSegments;
            if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
                pathArray[0] = tenantId;
            }
            return UrlString.constructAuthorityUriFromObject(urlObject);
        };
        /**
         * Returns the anchor part(#) of the URL
         */
        UrlString.prototype.getHash = function () {
            var hashIndex1 = this.urlString.indexOf("#");
            var hashIndex2 = this.urlString.indexOf("#/");
            if (hashIndex2 > -1) {
                return this.urlString.substring(hashIndex2 + 2);
            }
            else if (hashIndex1 > -1) {
                return this.urlString.substring(hashIndex1 + 1);
            }
            return "";
        };
        /**
         * Returns deserialized portion of URL hash
         */
        UrlString.prototype.getDeserializedHash = function () {
            var hash = this.getHash();
            var deserializedHash = StringUtils.queryStringToObject(hash);
            if (!deserializedHash) {
                throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
            }
            return deserializedHash;
        };
        /**
         * Parses out the components from a url string.
         * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
         */
        UrlString.prototype.getUrlComponents = function () {
            // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
            var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
            // If url string does not match regEx, we throw an error
            var match = this.urlString.match(regEx);
            if (!match) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Url component object
            var urlComponents = {
                Protocol: match[1],
                HostNameAndPort: match[4],
                AbsolutePath: match[5]
            };
            var pathSegments = urlComponents.AbsolutePath.split("/");
            pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
            urlComponents.PathSegments = pathSegments;
            return urlComponents;
        };
        UrlString.constructAuthorityUriFromObject = function (urlObject) {
            return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
        };
        /**
         * Check if the hash of the URL string contains known properties
         */
        UrlString.hashContainsKnownProperties = function (url) {
            if (StringUtils.isEmpty(url)) {
                return false;
            }
            var urlString = new UrlString(url);
            var parameters = urlString.getDeserializedHash();
            return !!(parameters.error_description ||
                parameters.error ||
                parameters.state);
        };
        return UrlString;
    }());

    /**
     * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
     * endpoint. It will store the pertinent config data in this object for use during token calls.
     */
    var Authority = /** @class */ (function () {
        function Authority(authority, networkInterface) {
            this.canonicalAuthority = authority;
            this._canonicalAuthority.validateAsUri();
            this.networkInterface = networkInterface;
        }
        Object.defineProperty(Authority.prototype, "canonicalAuthority", {
            /**
             * A URL that is the authority set by the developer
             */
            get: function () {
                return this._canonicalAuthority.urlString;
            },
            /**
             * Sets canonical authority.
             */
            set: function (url) {
                this._canonicalAuthority = new UrlString(url);
                this._canonicalAuthority.validateAsUri();
                this._canonicalAuthorityUrlComponents = null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
            /**
             * Get authority components.
             */
            get: function () {
                if (!this._canonicalAuthorityUrlComponents) {
                    this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
                }
                return this._canonicalAuthorityUrlComponents;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tenant", {
            /**
             * Get tenant for authority.
             */
            get: function () {
                return this.canonicalAuthorityUrlComponents.PathSegments[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
            /**
             * OAuth /authorize endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.authorization_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tokenEndpoint", {
            /**
             * OAuth /token endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.token_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
            get: function () {
                if (this.discoveryComplete()) {
                    return this.tenantDiscoveryResponse.token_endpoint.replace("/token", "/devicecode");
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
            /**
             * OAuth logout endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.end_session_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
            /**
             * OAuth issuer for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.issuer);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Replaces tenant in url path with current tenant. Defaults to common.
         * @param urlString
         */
        Authority.prototype.replaceTenant = function (urlString) {
            return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
        };
        Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
            /**
             * The default open id configuration endpoint for any canonical authority.
             */
            get: function () {
                return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Boolean that returns whethr or not tenant discovery has been completed.
         */
        Authority.prototype.discoveryComplete = function () {
            return !!this.tenantDiscoveryResponse;
        };
        /**
         * Gets OAuth endpoints from the given OpenID configuration endpoint.
         * @param openIdConfigurationEndpoint
         */
        Authority.prototype.discoverEndpoints = function (openIdConfigurationEndpoint) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint)];
                });
            });
        };
        /**
         * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
         */
        Authority.prototype.resolveEndpointsAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var openIdConfigEndpoint, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getOpenIdConfigurationEndpointAsync()];
                        case 1:
                            openIdConfigEndpoint = _a.sent();
                            return [4 /*yield*/, this.discoverEndpoints(openIdConfigEndpoint)];
                        case 2:
                            response = _a.sent();
                            this.tenantDiscoveryResponse = response.body;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Authority;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    (function (AuthorityType) {
        AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
        AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
        AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
    })(exports.AuthorityType || (exports.AuthorityType = {}));

    /**
     * The B2CAuthority class extends the Authority class and adds functionality specific to B2C Authorities.
     */
    var B2cAuthority = /** @class */ (function (_super) {
        __extends(B2cAuthority, _super);
        function B2cAuthority(authority, networkInterface) {
            return _super.call(this, authority, networkInterface) || this;
        }
        /**
         * Use when Authority is B2C to provide list of trusted/allowed domains.
         */
        B2cAuthority.setKnownAuthorities = function (knownAuthorities) {
            if (B2cAuthority.B2CTrustedHostList.length === 0) {
                knownAuthorities.forEach(function (authority) {
                    B2cAuthority.B2CTrustedHostList.push(authority);
                });
            }
        };
        Object.defineProperty(B2cAuthority.prototype, "authorityType", {
            // Set authority type to B2C
            get: function () {
                return exports.AuthorityType.B2C;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns a promise which resolves to the OIDC endpoint
         * Only responds with the endpoint
         */
        B2cAuthority.prototype.getOpenIdConfigurationEndpointAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.isInTrustedHostList(this.canonicalAuthorityUrlComponents.HostNameAndPort)) {
                        return [2 /*return*/, this.defaultOpenIdConfigurationEndpoint];
                    }
                    throw ClientConfigurationError.createUntrustedAuthorityError();
                });
            });
        };
        /**
         * Checks to see if the host is in a list of trusted hosts
         * @param {string} The host to look up
         */
        B2cAuthority.prototype.isInTrustedHostList = function (host) {
            return B2cAuthority.B2CTrustedHostList.indexOf(host) > -1;
        };
        B2cAuthority.B2CTrustedHostList = [];
        return B2cAuthority;
    }(Authority));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Function to build a client info object
     * @param rawClientInfo
     * @param crypto
     */
    function buildClientInfo(rawClientInfo, crypto) {
        if (StringUtils.isEmpty(rawClientInfo)) {
            throw ClientAuthError.createClientInfoEmptyError(rawClientInfo);
        }
        try {
            var decodedClientInfo = crypto.base64Decode(rawClientInfo);
            return JSON.parse(decodedClientInfo);
        }
        catch (e) {
            throw ClientAuthError.createClientInfoDecodingError(e);
        }
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
     * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings to ensure uniqueness of strings.
     */
    var ScopeSet = /** @class */ (function () {
        function ScopeSet(inputScopes) {
            // Filter empty string and null/undefined array items
            var scopeArr = inputScopes ? StringUtils.trimAndConvertArrayEntriesToLowerCase(__spreadArrays(inputScopes)) : [];
            var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
            // Validate and filter scopes (validate function throws if validation fails)
            this.validateInputScopes(filteredInput);
            this.scopes = new Set(filteredInput);
        }
        /**
         * Factory method to create ScopeSet from space-delimited string
         * @param inputScopeString
         * @param appClientId
         * @param scopesRequired
        */
        ScopeSet.fromString = function (inputScopeString) {
            inputScopeString = inputScopeString || "";
            var inputScopes = inputScopeString.split(" ");
            return new ScopeSet(inputScopes);
        };
        /**
         * Used to validate the scopes input parameter requested  by the developer.
         * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
         * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
        */
        ScopeSet.prototype.validateInputScopes = function (inputScopes) {
            // Check if scopes are required but not given or is an empty array
            if (!inputScopes || inputScopes.length < 1) {
                throw ClientConfigurationError.createEmptyScopesArrayError(inputScopes);
            }
        };
        /**
         * Check if a given scope is present in this set of scopes.
         * @param scope
         */
        ScopeSet.prototype.containsScope = function (scope) {
            return !StringUtils.isEmpty(scope) ? this.scopes.has(scope) : false;
        };
        /**
         * Check if a set of scopes is present in this set of scopes.
         * @param scopeSet
         */
        ScopeSet.prototype.containsScopeSet = function (scopeSet) {
            var _this = this;
            if (!scopeSet) {
                return false;
            }
            return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
        };
        /**
         * Appends single scope if passed
         * @param newScope
         */
        ScopeSet.prototype.appendScope = function (newScope) {
            if (StringUtils.isEmpty(newScope)) {
                throw ClientAuthError.createAppendEmptyScopeToSetError(newScope);
            }
            this.scopes.add(newScope.trim().toLowerCase());
        };
        /**
         * Appends multiple scopes if passed
         * @param newScopes
         */
        ScopeSet.prototype.appendScopes = function (newScopes) {
            var _this = this;
            try {
                newScopes.forEach(function (newScope) { return _this.scopes.add(newScope); });
            }
            catch (e) {
                throw ClientAuthError.createAppendScopeSetError(e);
            }
        };
        /**
         * Removes element from set of scopes.
         * @param scope
         */
        ScopeSet.prototype.removeScope = function (scope) {
            if (StringUtils.isEmpty(scope)) {
                throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
            }
            this.scopes.delete(scope.trim().toLowerCase());
        };
        /**
         * Combines an array of scopes with the current set of scopes.
         * @param otherScopes
         */
        ScopeSet.prototype.unionScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            return new Set(__spreadArrays(otherScopes.asArray(), Array.from(this.scopes)));
        };
        /**
         * Check if scopes intersect between this set and another.
         * @param otherScopes
         */
        ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            var unionScopes = this.unionScopeSets(otherScopes);
            // Do not allow offline_access to be the only intersecting scope
            var sizeOtherScopes = otherScopes.getScopeCount();
            var sizeThisScopes = this.getScopeCount();
            var sizeUnionScopes = unionScopes.size;
            return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
        };
        /**
         * Returns size of set of scopes.
         */
        ScopeSet.prototype.getScopeCount = function () {
            return this.scopes.size;
        };
        /**
         * Returns the scopes as an array of string values
         */
        ScopeSet.prototype.asArray = function () {
            return Array.from(this.scopes);
        };
        /**
         * Prints scopes into a space-delimited string
         */
        ScopeSet.prototype.printScopes = function () {
            if (this.scopes) {
                var scopeArr = this.asArray();
                return scopeArr.join(" ");
            }
            return "";
        };
        return ScopeSet;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var CacheHelper = /** @class */ (function () {
        function CacheHelper() {
        }
        /**
         * Helper to convert serialized data to object
         * @param obj
         * @param json
         */
        CacheHelper.toObject = function (obj, json) {
            for (var propertyName in json) {
                obj[propertyName] = json[propertyName];
            }
            return obj;
        };
        /**
         * helper function to swap keys and objects
         * @param cacheMap
         */
        CacheHelper.swap = function (cacheMap) {
            var ret = {};
            for (var key in cacheMap) {
                ret[cacheMap[key]] = key;
            }
            return ret;
        };
        /**
         * helper function to map an obj to a new keyset
         * @param objAT
         * @param keysMap
         */
        CacheHelper.renameKeys = function (objAT, keysMap) {
            var keyValues = Object.keys(objAT).map(function (key) {
                var _a;
                if (objAT[key]) {
                    var newKey = keysMap[key] || key;
                    return _a = {}, _a[newKey] = objAT[key], _a;
                }
                return null;
            });
            return Object.assign.apply(Object, __spreadArrays([{}], keyValues));
        };
        /**
         *
         * @param value
         * @param homeAccountId
         */
        CacheHelper.matchHomeAccountId = function (entity, homeAccountId) {
            return homeAccountId === entity.homeAccountId;
        };
        /**
         *
         * @param value
         * @param environment
         * // TODO: Add Cloud specific aliases based on current cloud
         */
        CacheHelper.matchEnvironment = function (entity, environment) {
            if (EnvironmentAliases.includes(environment) &&
                EnvironmentAliases.includes(entity.environment)) {
                return true;
            }
            return false;
        };
        /**
         *
         * @param entity
         * @param credentialType
         */
        CacheHelper.matchCredentialType = function (entity, credentialType) {
            return credentialType.toLowerCase() === entity.credentialType.toLowerCase();
        };
        /**
         *
         * @param entity
         * @param clientId
         */
        CacheHelper.matchClientId = function (entity, clientId) {
            return clientId === entity.clientId;
        };
        /**
         *
         * @param entity
         * @param realm
         */
        CacheHelper.matchRealm = function (entity, realm) {
            return realm === entity.realm;
        };
        /**
         * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
         * @param entity
         * @param target
         */
        CacheHelper.matchTarget = function (entity, target) {
            var entityScopeSet = ScopeSet.fromString(entity.target);
            var requestTargetScopeSet = ScopeSet.fromString(target);
            return entityScopeSet.containsScopeSet(requestTargetScopeSet);
        };
        /**
         * helper function to return `CredentialType`
         * @param key
         */
        CacheHelper.getCredentialType = function (key) {
            if (key.indexOf(exports.CredentialType.ACCESS_TOKEN) !== -1) {
                return exports.CredentialType.ACCESS_TOKEN;
            }
            else if (key.indexOf(exports.CredentialType.ID_TOKEN) !== -1) {
                return exports.CredentialType.ID_TOKEN;
            }
            else if (key.indexOf(exports.CredentialType.REFRESH_TOKEN) !== -1) {
                return exports.CredentialType.REFRESH_TOKEN;
            }
            return Constants.NOT_DEFINED;
        };
        /**
         * returns if a given cache entity is of the type appmetadata
         * @param key
         */
        CacheHelper.isAppMetadata = function (key) {
            return key.indexOf(APP_META_DATA) !== -1;
        };
        /**
         * Generates account key from interface
         * @param accountInterface
         */
        CacheHelper.generateAccountCacheKey = function (accountInterface) {
            var accountKey = [
                accountInterface.homeAccountId,
                accountInterface.environment || "",
                accountInterface.tenantId || "",
            ];
            return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * generates Account Id for keys
         * @param homeAccountId
         * @param environment
         */
        CacheHelper.generateAccountIdForCacheKey = function (homeAccountId, environment) {
            var accountId = [homeAccountId, environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * generates credential key
         */
        CacheHelper.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId) {
            var credentialKey = [
                this.generateAccountIdForCacheKey(homeAccountId, environment),
                this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
                this.generateTargetForCacheKey(target),
            ];
            return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generates Credential Id for keys
         * @param credentialType
         * @param realm
         * @param clientId
         * @param familyId
         */
        CacheHelper.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
            var clientOrFamilyId = credentialType === exports.CredentialType.REFRESH_TOKEN
                ? familyId || clientId
                : clientId;
            var credentialId = [
                credentialType,
                clientOrFamilyId,
                realm || "",
            ];
            return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate target key component as per schema: <target>
         */
        CacheHelper.generateTargetForCacheKey = function (scopes) {
            return (scopes || "").toLowerCase();
        };
        CacheHelper.toIAccount = function (accountObj) {
            return {
                homeAccountId: accountObj.homeAccountId,
                environment: accountObj.environment,
                tenantId: accountObj.realm,
                username: accountObj.username
            };
        };
        return CacheHelper;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs)
     */
    var AccountEntity = /** @class */ (function () {
        function AccountEntity() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        AccountEntity.prototype.generateAccountId = function () {
            var accountId = [this.homeAccountId, this.environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
         */
        AccountEntity.prototype.generateAccountKey = function () {
            return CacheHelper.generateAccountCacheKey({
                homeAccountId: this.homeAccountId,
                environment: this.environment,
                tenantId: this.realm,
                username: this.username
            });
        };
        /**
         * returns the type of the cache (in this case account)
         */
        AccountEntity.prototype.generateType = function () {
            switch (this.authorityType) {
                case CacheAccountType.ADFS_ACCOUNT_TYPE:
                    return CacheType.ADFS;
                case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                    return CacheType.MSA;
                case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                    return CacheType.MSSTS;
                case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                    return CacheType.GENERIC;
                default: {
                    console.log("Unexpected account type");
                    return null;
                }
            }
        };
        /**
         * Build Account cache from IdToken, clientInfo and authority/policy
         * @param clientInfo
         * @param authority
         * @param idToken
         * @param policy
         */
        AccountEntity.createAccount = function (clientInfo, authority, idToken, policy, crypto) {
            var account = new AccountEntity();
            account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
            account.clientInfo = clientInfo;
            // TBD: Clarify "policy" addition
            var clientInfoObj = buildClientInfo(clientInfo, crypto);
            var homeAccountId = "" + clientInfoObj.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfoObj.utid;
            account.homeAccountId =
                policy !== null
                    ? homeAccountId + Separators.CACHE_KEY_SEPARATOR + policy
                    : homeAccountId;
            var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
            account.environment = EnvironmentAliases.includes(reqEnvironment)
                ? PreferredCacheEnvironment
                : reqEnvironment;
            account.realm = idToken.claims.tid;
            if (idToken) {
                // How do you account for MSA CID here?
                var localAccountId = !StringUtils.isEmpty(idToken.claims.oid)
                    ? idToken.claims.oid
                    : idToken.claims.sid;
                account.localAccountId = localAccountId;
                account.username = idToken.claims.preferred_username;
                account.name = idToken.claims.name;
            }
            return account;
        };
        /**
         * Build ADFS account type
         * @param authority
         * @param idToken
         */
        AccountEntity.createADFSAccount = function (authority, idToken) {
            var account = new AccountEntity();
            account.authorityType = CacheAccountType.ADFS_ACCOUNT_TYPE;
            account.homeAccountId = idToken.claims.sub;
            account.environment =
                authority.canonicalAuthorityUrlComponents.HostNameAndPort;
            account.username = idToken.claims.upn;
            // add uniqueName to claims
            // account.name = idToken.claims.uniqueName;
            return account;
        };
        return AccountEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
     */
    var Credential = /** @class */ (function () {
        function Credential() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        Credential.prototype.generateAccountId = function () {
            var accountId = [this.homeAccountId, this.environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
         */
        Credential.prototype.generateCredentialId = function () {
            var clientOrFamilyId = exports.CredentialType.REFRESH_TOKEN
                ? this.familyId || this.clientId
                : this.clientId;
            var credentialId = [
                this.credentialType,
                clientOrFamilyId,
                this.realm || "",
            ];
            return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate target key component as per schema: <target>
         */
        Credential.prototype.generateTarget = function () {
            return (this.target || "").toLowerCase();
        };
        /**
         * generates credential key
         */
        Credential.prototype.generateCredentialKey = function () {
            var credentialKey = [
                this.generateAccountId(),
                this.generateCredentialId(),
                this.generateTarget(),
            ];
            return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * returns the type of the cache (in this case credential)
         */
        Credential.prototype.generateType = function () {
            switch (this.credentialType) {
                case exports.CredentialType.ID_TOKEN:
                    return CacheType.ID_TOKEN;
                case exports.CredentialType.ACCESS_TOKEN:
                    return CacheType.ACCESS_TOKEN;
                case exports.CredentialType.REFRESH_TOKEN:
                    return CacheType.REFRESH_TOKEN;
                default: {
                    console.log("Unexpected credential type");
                    return null;
                }
            }
        };
        return Credential;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ID_TOKEN Cache
     */
    var IdTokenEntity = /** @class */ (function (_super) {
        __extends(IdTokenEntity, _super);
        function IdTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create IdTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId) {
            var idTokenEntity = new IdTokenEntity();
            idTokenEntity.credentialType = exports.CredentialType.ID_TOKEN;
            idTokenEntity.homeAccountId = homeAccountId;
            idTokenEntity.environment = environment;
            idTokenEntity.clientId = clientId;
            idTokenEntity.secret = idToken;
            idTokenEntity.realm = tenantId;
            return idTokenEntity;
        };
        return IdTokenEntity;
    }(Credential));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class which exposes functions for managing date and time operations.
     */
    var TimeUtils = /** @class */ (function () {
        function TimeUtils() {
        }
        /**
         * return the current time in Unix time (seconds).
         */
        TimeUtils.nowSeconds = function () {
            // Date.getTime() returns in milliseconds.
            return Math.round(new Date().getTime() / 1000.0);
        };
        return TimeUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ACCESS_TOKEN Credential Type
     */
    var AccessTokenEntity = /** @class */ (function (_super) {
        __extends(AccessTokenEntity, _super);
        function AccessTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create AccessTokenEntity
         * @param homeAccountId
         * @param environment
         * @param accessToken
         * @param clientId
         * @param tenantId
         * @param scopes
         * @param expiresOn
         * @param extExpiresOn
         */
        AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn) {
            var atEntity = new AccessTokenEntity();
            atEntity.homeAccountId = homeAccountId;
            atEntity.credentialType = exports.CredentialType.ACCESS_TOKEN;
            atEntity.secret = accessToken;
            var currentTime = TimeUtils.nowSeconds();
            atEntity.cachedAt = currentTime.toString();
            // Token expiry time.
            // This value should be  calculated based on the current UTC time measured locally and the value  expires_in Represented as a string in JSON.
            atEntity.expiresOn = expiresOn.toString();
            atEntity.extendedExpiresOn = extExpiresOn.toString();
            atEntity.environment = environment;
            atEntity.clientId = clientId;
            atEntity.realm = tenantId;
            atEntity.target = scopes;
            return atEntity;
        };
        return AccessTokenEntity;
    }(Credential));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * REFRESH_TOKEN Cache
     */
    var RefreshTokenEntity = /** @class */ (function (_super) {
        __extends(RefreshTokenEntity, _super);
        function RefreshTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create RefreshTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId) {
            var rtEntity = new RefreshTokenEntity();
            rtEntity.clientId = clientId;
            rtEntity.credentialType = exports.CredentialType.REFRESH_TOKEN;
            rtEntity.environment = environment;
            rtEntity.homeAccountId = homeAccountId;
            rtEntity.secret = refreshToken;
            if (familyId)
                rtEntity.familyId = familyId;
            return rtEntity;
        };
        return RefreshTokenEntity;
    }(Credential));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * APP_META_DATA Cache
     */
    var AppMetadataEntity = /** @class */ (function () {
        function AppMetadataEntity() {
        }
        /**
         * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
         */
        AppMetadataEntity.prototype.generateAppMetaDataEntityKey = function () {
            var appMetaDataKeyArray = [APP_META_DATA, this.environment, this.clientId];
            return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        return AppMetadataEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Map for AccountCache entity serialization and deserialization
     */
    var AccountCacheMaps = /** @class */ (function () {
        function AccountCacheMaps() {
        }
        AccountCacheMaps.toCacheMap = {
            homeAccountId: "home_account_id",
            environment: "environment",
            realm: "realm",
            localAccountId: "local_account_id",
            username: "username",
            authorityType: "authority_type",
            name: "name",
            clientInfo: "client_info",
            lastModificationTime: "last_modification_time",
            lastModificationApp: "last_modification_app",
        };
        AccountCacheMaps.fromCacheMap = CacheHelper.swap(AccountCacheMaps.toCacheMap);
        return AccountCacheMaps;
    }());
    /**
     * Map for IdTokenCache entity serialization and deserialization
     */
    var IdTokenCacheMaps = /** @class */ (function () {
        function IdTokenCacheMaps() {
        }
        IdTokenCacheMaps.toCacheMap = {
            homeAccountId: "home_account_id",
            environment: "environment",
            credentialType: "credential_type",
            clientId: "client_id",
            secret: "secret",
            realm: "realm",
        };
        IdTokenCacheMaps.fromCacheMap = CacheHelper.swap(IdTokenCacheMaps.toCacheMap);
        return IdTokenCacheMaps;
    }());
    /**
     * Map for AccessTokenCache entity serialization and deserialization
     */
    var AccessTokenCacheMaps = /** @class */ (function () {
        function AccessTokenCacheMaps() {
        }
        AccessTokenCacheMaps.toCacheMap = {
            homeAccountId: "home_account_id",
            environment: "environment",
            credentialType: "credential_type",
            clientId: "client_id",
            secret: "secret",
            realm: "realm",
            target: "target",
            cachedAt: "cached_at",
            expiresOn: "expires_on",
            extendedExpiresOn: "extended_expires_on",
            refreshOn: "refresh_on",
            keyId: "key_id",
            tokenType: "token_type",
        };
        AccessTokenCacheMaps.fromCacheMap = CacheHelper.swap(AccessTokenCacheMaps.toCacheMap);
        return AccessTokenCacheMaps;
    }());
    /**
     * Map for RefreshTokenCache entity serialization and deserialization
     */
    var RefreshTokenCacheMaps = /** @class */ (function () {
        function RefreshTokenCacheMaps() {
        }
        RefreshTokenCacheMaps.toCacheMap = {
            homeAccountId: "home_account_id",
            environment: "environment",
            credentialType: "credential_type",
            clientId: "client_id",
            secret: "secret",
        };
        RefreshTokenCacheMaps.fromCacheMap = CacheHelper.swap(RefreshTokenCacheMaps.toCacheMap);
        return RefreshTokenCacheMaps;
    }());
    /**
     * Map for AppMetadataCache entity serialization and deserialization
     */
    var AppMetadataCacheMaps = /** @class */ (function () {
        function AppMetadataCacheMaps() {
        }
        AppMetadataCacheMaps.toCacheMap = {
            clientId: "client_id",
            environment: "environment",
            familyId: "family_id",
        };
        AppMetadataCacheMaps.fromCacheMap = CacheHelper.swap(AppMetadataCacheMaps.toCacheMap);
        return AppMetadataCacheMaps;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // TODO: Can we write this with Generics?
    var Deserializer = /** @class */ (function () {
        function Deserializer() {
        }
        /**
         * Parse the JSON blob in memory and deserialize the content
         * @param cachedJson
         */
        Deserializer.deserializeJSONBlob = function (jsonFile) {
            var deserializedCache = StringUtils.isEmpty(jsonFile)
                ? {}
                : JSON.parse(jsonFile);
            return deserializedCache;
        };
        /**
         * Deserializes accounts to AccountEntity objects
         * @param accounts
         */
        Deserializer.deserializeAccounts = function (accounts) {
            var accountObjects = {};
            Object.keys(accounts).map(function (key) {
                var mappedAcc = CacheHelper.renameKeys(accounts[key], AccountCacheMaps.fromCacheMap);
                var account = new AccountEntity();
                CacheHelper.toObject(account, mappedAcc);
                accountObjects[key] = account;
            });
            return accountObjects;
        };
        /**
         * Deserializes id tokens to IdTokenEntity objects
         * @param idTokens
         */
        Deserializer.deserializeIdTokens = function (idTokens) {
            var idObjects = {};
            Object.keys(idTokens).map(function (key) {
                var mappedIdT = CacheHelper.renameKeys(idTokens[key], IdTokenCacheMaps.fromCacheMap);
                var idToken = new IdTokenEntity();
                CacheHelper.toObject(idToken, mappedIdT);
                idObjects[key] = idToken;
            });
            return idObjects;
        };
        /**
         * Deserializes access tokens to AccessTokenEntity objects
         * @param accessTokens
         */
        Deserializer.deserializeAccessTokens = function (accessTokens) {
            var atObjects = {};
            Object.keys(accessTokens).map(function (key) {
                var mappedAT = CacheHelper.renameKeys(accessTokens[key], AccessTokenCacheMaps.fromCacheMap);
                var accessToken = new AccessTokenEntity();
                CacheHelper.toObject(accessToken, mappedAT);
                atObjects[key] = accessToken;
            });
            return atObjects;
        };
        /**
         * Deserializes refresh tokens to RefreshTokenEntity objects
         * @param refreshTokens
         */
        Deserializer.deserializeRefreshTokens = function (refreshTokens) {
            var rtObjects = {};
            Object.keys(refreshTokens).map(function (key) {
                var mappedRT = CacheHelper.renameKeys(refreshTokens[key], RefreshTokenCacheMaps.fromCacheMap);
                var refreshToken = new RefreshTokenEntity();
                CacheHelper.toObject(refreshToken, mappedRT);
                rtObjects[key] = refreshToken;
            });
            return rtObjects;
        };
        /**
         * Deserializes appMetadata to AppMetaData objects
         * @param appMetadata
         */
        Deserializer.deserializeAppMetadata = function (appMetadata) {
            var appMetadataObjects = {};
            Object.keys(appMetadata).map(function (key) {
                var mappedAmd = CacheHelper.renameKeys(appMetadata[key], AppMetadataCacheMaps.fromCacheMap);
                var amd = new AppMetadataEntity();
                CacheHelper.toObject(amd, mappedAmd);
                appMetadataObjects[key] = amd;
            });
            return appMetadataObjects;
        };
        /**
         * Deserialize an inMemory Cache
         * @param jsonCache
         */
        Deserializer.deserializeAllCache = function (jsonCache) {
            return {
                accounts: jsonCache.Account ? this.deserializeAccounts(jsonCache.Account) : {},
                idTokens: jsonCache.IdToken ? this.deserializeIdTokens(jsonCache.IdToken) : {},
                accessTokens: jsonCache.AccessToken ? this.deserializeAccessTokens(jsonCache.AccessToken) : {},
                refreshTokens: jsonCache.RefreshToken ? this.deserializeRefreshTokens(jsonCache.RefreshToken) : {},
                appMetadata: jsonCache.AppMetadata ? this.deserializeAppMetadata(jsonCache.AppMetadata) : {}
            };
        };
        return Deserializer;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var EntitySerializer = /** @class */ (function () {
        function EntitySerializer() {
        }
        /**
          * Convert AccountEntity to string
          * @param accCache
          * @param key
          */
        EntitySerializer.mapAccountKeys = function (accCache, key) {
            return CacheHelper.renameKeys(accCache[key], AccountCacheMaps.toCacheMap);
        };
        /**
         * Convert IdTokenEntity to string
         * @param idTCache
         * @param key
         */
        EntitySerializer.mapIdTokenKeys = function (idTCache, key) {
            return CacheHelper.renameKeys(idTCache[key], IdTokenCacheMaps.toCacheMap);
        };
        /**
         * Convert AccessTokenEntity to string
         * @param atCache
         * @param key
         */
        EntitySerializer.mapAccessTokenKeys = function (atCache, key) {
            return CacheHelper.renameKeys(atCache[key], AccessTokenCacheMaps.toCacheMap);
        };
        /**
         * Convert RefreshTokenEntity to string
         * @param rtCache
         * @param key
         */
        EntitySerializer.mapRefreshTokenKeys = function (rtCache, key) {
            return CacheHelper.renameKeys(rtCache[key], RefreshTokenCacheMaps.toCacheMap);
        };
        /**
         * Convert AppMetaDataEntity to string
         * @param amdtCache
         * @param key
         */
        EntitySerializer.mapAppMetadataKeys = function (amdtCache, key) {
            return CacheHelper.renameKeys(amdtCache[key], AppMetadataCacheMaps.toCacheMap);
        };
        return EntitySerializer;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var Serializer = /** @class */ (function () {
        function Serializer() {
        }
        /**
         * serialize the JSON blob
         * @param data
         */
        Serializer.serializeJSONBlob = function (data) {
            return JSON.stringify(data);
        };
        /**
         * Serialize Accounts
         * @param accCache
         */
        Serializer.serializeAccounts = function (accCache) {
            var accounts = {};
            Object.keys(accCache).map(function (key) {
                accounts[key] = EntitySerializer.mapAccountKeys(accCache, key);
            });
            return accounts;
        };
        /**
         * Serialize IdTokens
         * @param idTCache
         */
        Serializer.serializeIdTokens = function (idTCache) {
            var idTokens = {};
            Object.keys(idTCache).map(function (key) {
                idTokens[key] = EntitySerializer.mapIdTokenKeys(idTCache, key);
            });
            return idTokens;
        };
        /**
         * Serializes AccessTokens
         * @param atCache
         */
        Serializer.serializeAccessTokens = function (atCache) {
            var accessTokens = {};
            Object.keys(atCache).map(function (key) {
                accessTokens[key] = EntitySerializer.mapAccessTokenKeys(atCache, key);
            });
            return accessTokens;
        };
        /**
         * Serialize refreshTokens
         * @param rtCache
         */
        Serializer.serializeRefreshTokens = function (rtCache) {
            var refreshTokens = {};
            Object.keys(rtCache).map(function (key) {
                refreshTokens[key] = EntitySerializer.mapRefreshTokenKeys(rtCache, key);
            });
            return refreshTokens;
        };
        /**
         * Serialize amdtCache
         * @param amdtCache
         */
        Serializer.serializeAppMetadata = function (amdtCache) {
            var appMetadata = {};
            Object.keys(amdtCache).map(function (key) {
                appMetadata[key] = EntitySerializer.mapAppMetadataKeys(amdtCache, key);
            });
            return appMetadata;
        };
        /**
         * Serialize the cache
         * @param jsonContent
         */
        Serializer.serializeAllCache = function (inMemCache) {
            return {
                Account: this.serializeAccounts(inMemCache.accounts),
                IdToken: this.serializeIdTokens(inMemCache.idTokens),
                AccessToken: this.serializeAccessTokens(inMemCache.accessTokens),
                RefreshToken: this.serializeRefreshTokens(inMemCache.refreshTokens),
                AppMetadata: this.serializeAppMetadata(inMemCache.appMetadata),
            };
        };
        return Serializer;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var UnifiedCacheManager = /** @class */ (function () {
        function UnifiedCacheManager(cacheImpl, clientId, storeInMemory) {
            this.cacheStorage = cacheImpl;
            this.clientId = clientId;
            this.inMemory = storeInMemory;
        }
        /**
         * Initialize in memory cache from an exisiting cache vault
         * @param cache
         */
        UnifiedCacheManager.prototype.generateInMemoryCache = function (cache) {
            return Deserializer.deserializeAllCache(Deserializer.deserializeJSONBlob(cache));
        };
        /**
         * retrieves the final JSON
         * @param inMemoryCache
         */
        UnifiedCacheManager.prototype.generateJsonCache = function (inMemoryCache) {
            return Serializer.serializeAllCache(inMemoryCache);
        };
        /**
         * Returns all accounts in memory
         */
        UnifiedCacheManager.prototype.getAllAccounts = function () {
            return this.getAccountsFilteredBy();
        };
        /**
         * saves a cache record
         * @param cacheRecord
         */
        UnifiedCacheManager.prototype.saveCacheRecord = function (cacheRecord, responseScopes) {
            this.saveAccount(cacheRecord.account);
            this.saveCredential(cacheRecord.idToken);
            this.saveAccessToken(cacheRecord.accessToken, responseScopes);
            this.saveCredential(cacheRecord.refreshToken);
        };
        /**
         * saves account into cache
         * @param account
         */
        UnifiedCacheManager.prototype.saveAccount = function (account) {
            var key = account.generateAccountKey();
            this.cacheStorage.setItem(key, account, exports.CacheSchemaType.ACCOUNT, this.inMemory);
        };
        /**
         * saves credential - accessToken, idToken or refreshToken into cache
         * @param credential
         */
        UnifiedCacheManager.prototype.saveCredential = function (credential) {
            var key = credential.generateCredentialKey();
            this.cacheStorage.setItem(key, credential, exports.CacheSchemaType.CREDENTIAL, this.inMemory);
        };
        /**
         * saves access token credential
         * @param credential
         */
        UnifiedCacheManager.prototype.saveAccessToken = function (credential, responseScopes) {
            var _this = this;
            var currentTokenCache = this.getCredentialsFilteredBy({
                clientId: credential.clientId,
                credentialType: exports.CredentialType.ACCESS_TOKEN,
                environment: credential.environment,
                homeAccountId: credential.homeAccountId,
                realm: credential.realm
            });
            var currentAccessTokens = Object.values(currentTokenCache.accessTokens);
            if (currentAccessTokens) {
                currentAccessTokens.forEach(function (tokenEntity) {
                    var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                    if (tokenScopeSet.intersectingScopeSets(responseScopes)) {
                        _this.removeCredential(tokenEntity);
                    }
                });
            }
            this.saveCredential(credential);
        };
        /**
         * Given account key retrieve an account
         * @param key
         */
        UnifiedCacheManager.prototype.getAccount = function (key) {
            var account = this.cacheStorage.getItem(key, exports.CacheSchemaType.ACCOUNT, this.inMemory);
            return account;
        };
        /**
         * retrieve a credential - accessToken, idToken or refreshToken; given the cache key
         * @param key
         */
        UnifiedCacheManager.prototype.getCredential = function (key) {
            return this.cacheStorage.getItem(key, exports.CacheSchemaType.CREDENTIAL, this.inMemory);
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        UnifiedCacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
            return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : "", accountFilter ? accountFilter.environment : "", accountFilter ? accountFilter.realm : "");
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        UnifiedCacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm) {
            var _this = this;
            var allCacheKeys = this.cacheStorage.getKeys();
            var matchingAccounts = {};
            allCacheKeys.forEach(function (cacheKey) {
                var matches = true;
                // don't parse any non-credential type cache entities
                if (CacheHelper.getCredentialType(cacheKey) !== Constants.NOT_DEFINED || CacheHelper.isAppMetadata(cacheKey)) {
                    return;
                }
                var entity = _this.cacheStorage.getItem(cacheKey, exports.CacheSchemaType.ACCOUNT);
                if (!StringUtils.isEmpty(homeAccountId)) {
                    matches = CacheHelper.matchHomeAccountId(entity, homeAccountId);
                }
                if (!StringUtils.isEmpty(environment)) {
                    matches =
                        matches &&
                            CacheHelper.matchEnvironment(entity, environment);
                }
                if (!StringUtils.isEmpty(realm)) {
                    matches = matches && CacheHelper.matchRealm(entity, realm);
                }
                if (matches) {
                    matchingAccounts[cacheKey] = entity;
                }
            });
            return matchingAccounts;
        };
        /**
         * retrieve credentails matching all provided filters; if no filter is set, get all credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         */
        UnifiedCacheManager.prototype.getCredentialsFilteredBy = function (filter) {
            return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.realm, filter.target);
        };
        /**
         * Support function to help match credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         */
        UnifiedCacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, realm, target) {
            var _this = this;
            var allCacheKeys = this.cacheStorage.getKeys();
            var matchingCredentials = {
                idTokens: {},
                accessTokens: {},
                refreshTokens: {}
            };
            allCacheKeys.forEach(function (cacheKey) {
                var matches = true;
                // don't parse any non-credential type cache entities
                var credType = CacheHelper.getCredentialType(cacheKey);
                if (credType === Constants.NOT_DEFINED) {
                    return;
                }
                var entity = _this.cacheStorage.getItem(cacheKey, exports.CacheSchemaType.CREDENTIAL);
                if (!StringUtils.isEmpty(homeAccountId)) {
                    matches = CacheHelper.matchHomeAccountId(entity, homeAccountId);
                }
                if (!StringUtils.isEmpty(environment)) {
                    matches =
                        matches &&
                            CacheHelper.matchEnvironment(entity, environment);
                }
                if (!StringUtils.isEmpty(realm)) {
                    matches = matches && CacheHelper.matchRealm(entity, realm);
                }
                if (!StringUtils.isEmpty(credentialType)) {
                    matches =
                        matches &&
                            CacheHelper.matchCredentialType(entity, credentialType);
                }
                if (!StringUtils.isEmpty(clientId)) {
                    matches =
                        matches && CacheHelper.matchClientId(entity, clientId);
                }
                // idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
                // TODO: Add case for target specific refresh tokens
                if (!StringUtils.isEmpty(target) && credType === exports.CredentialType.ACCESS_TOKEN) {
                    matches = matches && CacheHelper.matchTarget(entity, target);
                }
                if (matches) {
                    switch (credType) {
                        case exports.CredentialType.ID_TOKEN:
                            matchingCredentials.idTokens[cacheKey] = entity;
                            break;
                        case exports.CredentialType.ACCESS_TOKEN:
                            matchingCredentials.accessTokens[cacheKey] = entity;
                            break;
                        case exports.CredentialType.REFRESH_TOKEN:
                            matchingCredentials.refreshTokens[cacheKey] = entity;
                            break;
                    }
                }
            });
            return matchingCredentials;
        };
        /**
         * returns a boolean if the given account is removed
         * @param account
         */
        UnifiedCacheManager.prototype.removeAccount = function (accountKey) {
            var account = this.getAccount(accountKey);
            return (this.removeAccountContext(account) &&
                this.cacheStorage.removeItem(accountKey, exports.CacheSchemaType.ACCOUNT, this.inMemory));
        };
        /**
         * returns a boolean if the given account is removed
         * @param account
         */
        UnifiedCacheManager.prototype.removeAccountContext = function (account) {
            var _this = this;
            var allCacheKeys = this.cacheStorage.getKeys();
            var accountId = account.generateAccountId();
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-credential type cache entities
                if (CacheHelper.getCredentialType(cacheKey) === Constants.NOT_DEFINED) {
                    return;
                }
                var cacheEntity = _this.cacheStorage.getItem(cacheKey, exports.CacheSchemaType.CREDENTIAL, _this.inMemory);
                if (!!cacheEntity &&
                    accountId === cacheEntity.generateAccountId()) {
                    _this.removeCredential(cacheEntity);
                }
            });
            return true;
        };
        /**
         * returns a boolean if the given credential is removed
         * @param credential
         */
        UnifiedCacheManager.prototype.removeCredential = function (credential) {
            var key = credential.generateCredentialKey();
            return this.cacheStorage.removeItem(key, exports.CacheSchemaType.CREDENTIAL, this.inMemory);
        };
        return UnifiedCacheManager;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
     */
    var BaseClient = /** @class */ (function () {
        function BaseClient(configuration) {
            // Set the configuration
            this.config = buildClientConfiguration(configuration);
            // Initialize the logger
            this.logger = new Logger(this.config.loggerOptions);
            // Initialize crypto
            this.cryptoUtils = this.config.cryptoInterface;
            // Initialize storage interface
            this.cacheStorage = this.config.storageInterface;
            // Initialize serialized cache manager
            this.unifiedCacheManager = new UnifiedCacheManager(this.cacheStorage, this.config.authOptions.clientId, this.config.systemOptions.storeInMemory);
            // Set the network interface
            this.networkClient = this.config.networkInterface;
            B2cAuthority.setKnownAuthorities(this.config.authOptions.knownAuthorities);
            this.defaultAuthority = this.config.authOptions.authority;
        }
        /**
         * Creates default headers for requests to token endpoint
         */
        BaseClient.prototype.createDefaultTokenRequestHeaders = function () {
            var headers = this.createDefaultLibraryHeaders();
            headers.set(HeaderNames.CONTENT_TYPE, Constants.URL_FORM_CONTENT_TYPE);
            return headers;
        };
        /**
         * addLibraryData
         */
        BaseClient.prototype.createDefaultLibraryHeaders = function () {
            var headers = new Map();
            // client info headers
            headers.set("" + AADServerParamKeys.X_CLIENT_SKU, this.config.libraryInfo.sku);
            headers.set("" + AADServerParamKeys.X_CLIENT_VER, this.config.libraryInfo.version);
            headers.set("" + AADServerParamKeys.X_CLIENT_OS, this.config.libraryInfo.os);
            headers.set("" + AADServerParamKeys.X_CLIENT_CPU, this.config.libraryInfo.cpu);
            return headers;
        };
        /**
         * Http post to token endpoint
         * @param tokenEndpoint
         * @param queryString
         * @param headers
         */
        BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers) {
            return this.networkClient.sendPostRequestAsync(tokenEndpoint, {
                body: queryString,
                headers: headers,
            });
        };
        /**
         * Get all currently signed in accounts.
         */
        BaseClient.prototype.getAllAccounts = function () {
            var currentAccounts = this.unifiedCacheManager.getAllAccounts();
            var accountValues = Object.values(currentAccounts);
            var numAccounts = accountValues.length;
            if (numAccounts < 1) {
                return null;
            }
            else {
                var allAccounts = accountValues.map(function (value) {
                    var accountObj = JSON.parse(JSON.stringify(value));
                    return CacheHelper.toIAccount(accountObj);
                });
                return allAccounts;
            }
        };
        return BaseClient;
    }());

    /**
     * The AadAuthority class extends the Authority class and adds functionality specific to the Azure AD OAuth Authority.
     */
    var AadAuthority = /** @class */ (function (_super) {
        __extends(AadAuthority, _super);
        function AadAuthority(authority, networkInterface) {
            return _super.call(this, authority, networkInterface) || this;
        }
        Object.defineProperty(AadAuthority.prototype, "authorityType", {
            // Set authority type to AAD
            get: function () {
                return exports.AuthorityType.Aad;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AadAuthority.prototype, "aadInstanceDiscoveryEndpointUrl", {
            // Default AAD Instance Discovery Endpoint
            get: function () {
                return Constants.AAD_INSTANCE_DISCOVERY_ENDPT + "?api-version=1.0&authorization_endpoint=" + this.canonicalAuthority + "oauth2/v2.0/authorize";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns a promise which resolves to the OIDC endpoint
         * Only responds with the endpoint
         */
        AadAuthority.prototype.getOpenIdConfigurationEndpointAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.isInTrustedHostList(this.canonicalAuthorityUrlComponents.HostNameAndPort)) {
                                return [2 /*return*/, this.defaultOpenIdConfigurationEndpoint];
                            }
                            return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(this.aadInstanceDiscoveryEndpointUrl)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response.body.tenant_discovery_endpoint];
                    }
                });
            });
        };
        /**
         * Checks to see if the host is in a list of trusted hosts
         * @param {string} The host to look up
         */
        AadAuthority.prototype.isInTrustedHostList = function (host) {
            return AADTrustedHostList.includes(host);
        };
        return AadAuthority;
    }(Authority));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The AdfsAuthority class extends the Authority class and adds functionality specific to ADFS 2019
     */
    var AdfsAuthority = /** @class */ (function (_super) {
        __extends(AdfsAuthority, _super);
        function AdfsAuthority(authority, networkInterface) {
            return _super.call(this, authority, networkInterface) || this;
        }
        Object.defineProperty(AdfsAuthority.prototype, "authorityType", {
            /**
             * Return authority type
             */
            get: function () {
                return exports.AuthorityType.Adfs;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns a promise which resolves to the OIDC endpoint
         */
        AdfsAuthority.prototype.getOpenIdConfigurationEndpointAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.canonicalAuthority + ".well-known/openid-configuration"];
                });
            });
        };
        return AdfsAuthority;
    }(Authority));

    var AuthorityFactory = /** @class */ (function () {
        function AuthorityFactory() {
        }
        /**
         * Parse the url and determine the type of authority
         */
        AuthorityFactory.detectAuthorityFromUrl = function (authorityString) {
            var authorityUrl = new UrlString(authorityString);
            var components = authorityUrl.getUrlComponents();
            var pathSegments = components.PathSegments;
            if (pathSegments.length && pathSegments[0].toLowerCase() === Constants.ADFS)
                return exports.AuthorityType.Adfs;
            else if (B2cAuthority.B2CTrustedHostList.length)
                return exports.AuthorityType.B2C;
            // defaults to Aad
            return exports.AuthorityType.Aad;
        };
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
         */
        AuthorityFactory.createInstance = function (authorityUrl, networkInterface) {
            // Throw error if authority url is empty
            if (StringUtils.isEmpty(authorityUrl)) {
                throw ClientConfigurationError.createUrlEmptyError();
            }
            var type = AuthorityFactory.detectAuthorityFromUrl(authorityUrl);
            // Depending on above detection, create the right type.
            switch (type) {
                case exports.AuthorityType.Aad:
                    return new AadAuthority(authorityUrl, networkInterface);
                case exports.AuthorityType.B2C:
                    return new B2cAuthority(authorityUrl, networkInterface);
                case exports.AuthorityType.Adfs:
                    return new AdfsAuthority(authorityUrl, networkInterface);
                default:
                    throw ClientAuthError.createInvalidAuthorityTypeError("" + authorityUrl);
            }
        };
        return AuthorityFactory;
    }());

    /**
     * Id Token representation class. Parses id token string and generates claims object.
     */
    var IdToken = /** @class */ (function () {
        function IdToken(rawIdToken, crypto) {
            if (StringUtils.isEmpty(rawIdToken)) {
                throw ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
            }
            this.rawIdToken = rawIdToken;
            this.claims = IdToken.extractIdToken(rawIdToken, crypto);
        }
        /**
         * Extract IdToken by decoding the RAWIdToken
         *
         * @param encodedIdToken
         */
        IdToken.extractIdToken = function (encodedIdToken, crypto) {
            // id token will be decoded to get the username
            var decodedToken = StringUtils.decodeJwt(encodedIdToken);
            if (!decodedToken) {
                return null;
            }
            try {
                var base64IdTokenPayload = decodedToken.JWSPayload;
                // base64Decode() should throw an error if there is an issue
                var base64Decoded = crypto.base64Decode(base64IdTokenPayload);
                return JSON.parse(base64Decoded);
            }
            catch (err) {
                throw ClientAuthError.createIdTokenParsingError(JSON.stringify(err));
            }
        };
        return IdToken;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Validates server consumable params from the "request" objects
     */
    var RequestValidator = /** @class */ (function () {
        function RequestValidator() {
        }
        /**
         * Utility to check if the `redirectUri` in the request is a non-null value
         * @param redirectUri
         */
        RequestValidator.validateRedirectUri = function (redirectUri) {
            if (StringUtils.isEmpty(redirectUri)) {
                throw ClientConfigurationError.createRedirectUriEmptyError();
            }
        };
        /**
         * Utility to validate prompt sent by the user in the request
         * @param prompt
         */
        RequestValidator.validatePrompt = function (prompt) {
            if ([
                PromptValue.LOGIN,
                PromptValue.SELECT_ACCOUNT,
                PromptValue.CONSENT,
                PromptValue.NONE
            ].indexOf(prompt) < 0) {
                throw ClientConfigurationError.createInvalidPromptError(prompt);
            }
        };
        /**
         * Utility to validate code_challenge and code_challenge_method
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
            else {
                this.validateCodeChallengeMethod(codeChallengeMethod);
            }
        };
        /**
         * Utility to validate code_challenge_method
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
            if ([
                CodeChallengeMethodValues.PLAIN,
                CodeChallengeMethodValues.S256
            ].indexOf(codeChallengeMethod) < 0) {
                throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
            }
        };
        /**
         * Removes unnecessary or duplicate query parameters from extraQueryParameters
         * @param request
         */
        RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
            if (!eQParams) {
                return null;
            }
            // Remove any query parameters already included in SSO params
            queryParams.forEach(function (value, key) {
                if (eQParams[key]) {
                    console.log("Removed param " + key + " from extraQueryParameters since it was already present in library query parameters.");
                    delete eQParams[key];
                }
            });
            return eQParams;
        };
        return RequestValidator;
    }());

    /*
    * Copyright (c) Microsoft Corporation. All rights reserved.
    * Licensed under the MIT License.
    */
    var RequestParameterBuilder = /** @class */ (function () {
        function RequestParameterBuilder() {
            this.parameters = new Map();
        }
        /**
         * add response_type = code
         */
        RequestParameterBuilder.prototype.addResponseTypeCode = function () {
            this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
        };
        /**
         * add response_mode. defaults to query.
         * @param responseMode
         */
        RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
            this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : exports.ResponseMode.QUERY));
        };
        /**
         * add scopes
         * @param scopeSet
         */
        RequestParameterBuilder.prototype.addScopes = function (scopeSet) {
            this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
        };
        /**
         * add clientId
         * @param clientId
         */
        RequestParameterBuilder.prototype.addClientId = function (clientId) {
            this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
        };
        /**
         * add redirect_uri
         * @param redirectUri
         */
        RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
            RequestValidator.validateRedirectUri(redirectUri);
            this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
        };
        /**
         * add domain_hint
         * @param domainHint
         */
        RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
            this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
        };
        /**
         * add login_hint
         * @param loginHint
         */
        RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
            this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
        };
        /**
         * add claims
         * @param claims
         */
        RequestParameterBuilder.prototype.addClaims = function (claims) {
            this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(claims));
        };
        /**
         * add correlationId
         * @param correlationId
         */
        RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
            this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
        };
        /**
         * add library info query params
         * @param libraryInfo
         */
        RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
            // Telemetry Info
            this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
            this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
            this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
            this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
        };
        /**
         * add prompt
         * @param prompt
         */
        RequestParameterBuilder.prototype.addPrompt = function (prompt) {
            RequestValidator.validatePrompt(prompt);
            this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
        };
        /**
         * add state
         * @param state
         */
        RequestParameterBuilder.prototype.addState = function (state) {
            if (!StringUtils.isEmpty(state)) {
                this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
            }
        };
        /**
         * add nonce
         * @param nonce
         */
        RequestParameterBuilder.prototype.addNonce = function (nonce) {
            this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
        };
        /**
         * add code_challenge and code_challenge_method
         * - throw if either of them are not passed
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
            if (codeChallenge && codeChallengeMethod) {
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
            }
            else {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
            this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addDeviceCode = function (code) {
            this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
        };
        /**
         * add the `refreshToken` passed by the user
         * @param refreshToken
         */
        RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
            this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
        };
        /**
         * add the `code_verifier` passed by the user to exchange for a token
         * @param codeVerifier
         */
        RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
            this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
        };
        /**
         * add client_secret
         * @param clientSecret
         */
        // TODO uncomment when confidential client flow is added.
        // addClientSecret(clientSecret: string): void {
        //     params.set(`${AADServerParamKeys.CLIENT_SECRET}`, clientSecret);
        // }
        /**
         * add grant type
         * @param grantType
         */
        RequestParameterBuilder.prototype.addGrantType = function (grantType) {
            this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
        };
        /**
         * add client info
         *
         */
        RequestParameterBuilder.prototype.addClientInfo = function () {
            this.parameters.set(ClientInfo, "1");
        };
        /**
         * add extraQueryParams
         * @param eQparams
         */
        RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
            var _this = this;
            RequestValidator.sanitizeEQParams(eQparams, this.parameters);
            Object.keys(eQparams).forEach(function (key) {
                _this.parameters.set(key, eQparams[key]);
            });
        };
        /**
         * Utility to create a URL from the params map
         */
        RequestParameterBuilder.prototype.createQueryString = function () {
            var queryParameterArray = new Array();
            this.parameters.forEach(function (value, key) {
                queryParameterArray.push(key + "=" + value);
            });
            return queryParameterArray.join("&");
        };
        return RequestParameterBuilder;
    }());

    /**
     * Error thrown when there is an error with the server code, for example, unavailability.
     */
    var ServerError = /** @class */ (function (_super) {
        __extends(ServerError, _super);
        function ServerError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ServerError";
            _this.subError = subError;
            Object.setPrototypeOf(_this, ServerError.prototype);
            return _this;
        }
        return ServerError;
    }(AuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * InteractionRequiredAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var InteractionRequiredAuthErrorMessage = [
        "interaction_required",
        "consent_required",
        "login_required"
    ];
    var InteractionRequiredAuthSubErrorMessage = [
        "message_only",
        "additional_action",
        "basic_action",
        "user_password_expired",
        "consent_required"
    ];
    /**
     * Error thrown when user interaction is required at the auth server.
     */
    var InteractionRequiredAuthError = /** @class */ (function (_super) {
        __extends(InteractionRequiredAuthError, _super);
        function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage, subError) || this;
            _this.name = "InteractionRequiredAuthError";
            Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
            return _this;
        }
        InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
            var isInteractionRequiredErrorCode = !StringUtils.isEmpty(errorCode) && InteractionRequiredAuthErrorMessage.indexOf(errorCode) > -1;
            var isInteractionRequiredSubError = !StringUtils.isEmpty(subError) && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
            var isInteractionRequiredErrorDesc = !StringUtils.isEmpty(errorString) && InteractionRequiredAuthErrorMessage.some(function (irErrorCode) {
                return errorString.indexOf(irErrorCode) > -1;
            });
            return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
        };
        return InteractionRequiredAuthError;
    }(ServerError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var CacheRecord = /** @class */ (function () {
        function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity) {
            this.account = accountEntity;
            this.idToken = idTokenEntity;
            this.accessToken = accessTokenEntity;
            this.refreshToken = refreshTokenEntity;
        }
        return CacheRecord;
    }());

    /**
     * Class that handles response parsing.
     */
    var ResponseHandler = /** @class */ (function () {
        function ResponseHandler(clientId, unifiedCacheManager, cryptoObj, logger) {
            this.clientId = clientId;
            this.uCacheManager = unifiedCacheManager;
            this.cryptoObj = cryptoObj;
            this.logger = logger;
        }
        /**
         * Function which validates server authorization code response.
         * @param serverResponseHash
         * @param cachedState
         * @param cryptoObj
         */
        ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
            if (serverResponseHash.state !== cachedState) {
                throw ClientAuthError.createStateMismatchError();
            }
            // Check for error
            if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror);
                }
                throw new ServerError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            if (serverResponseHash.client_info) {
                buildClientInfo(serverResponseHash.client_info, cryptoObj);
            }
        };
        /**
         * Function which validates server authorization token response.
         * @param serverResponse
         */
        ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
            // Check for error
            if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
                }
                var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
                throw new ServerError(serverResponse.error, errString);
            }
            // generate homeAccountId
            if (serverResponse.client_info) {
                this.clientInfo = buildClientInfo(serverResponse.client_info, this.cryptoObj);
                if (!StringUtils.isEmpty(this.clientInfo.uid) && !StringUtils.isEmpty(this.clientInfo.utid)) {
                    this.homeAccountIdentifier = this.clientInfo.uid + "." + this.clientInfo.utid;
                }
            }
        };
        /**
         * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
         * @param serverTokenResponse
         * @param authority
         */
        ResponseHandler.prototype.generateAuthenticationResult = function (serverTokenResponse, authority, cachedNonce) {
            // create an idToken object (not entity)
            var idTokenObj = new IdToken(serverTokenResponse.id_token, this.cryptoObj);
            // token nonce check (TODO: Add a warning if no nonce is given?)
            if (!StringUtils.isEmpty(cachedNonce)) {
                if (idTokenObj.claims.nonce !== cachedNonce) {
                    throw ClientAuthError.createNonceMismatchError();
                }
            }
            // save the response tokens
            var cacheRecord = this.generateCacheRecord(serverTokenResponse, idTokenObj, authority);
            var responseScopes = ScopeSet.fromString(serverTokenResponse.scope);
            this.uCacheManager.saveCacheRecord(cacheRecord, responseScopes);
            var authenticationResult = {
                uniqueId: idTokenObj.claims.oid || idTokenObj.claims.sub,
                tenantId: idTokenObj.claims.tid,
                scopes: responseScopes.asArray(),
                account: CacheHelper.toIAccount(cacheRecord.account),
                idToken: idTokenObj.rawIdToken,
                idTokenClaims: idTokenObj.claims,
                accessToken: serverTokenResponse.access_token,
                fromCache: true,
                expiresOn: new Date(cacheRecord.accessToken.expiresOn),
                extExpiresOn: new Date(cacheRecord.accessToken.extendedExpiresOn),
                familyId: serverTokenResponse.foci || null,
            };
            return authenticationResult;
        };
        /**
         * Generate Account
         * @param serverTokenResponse
         * @param idToken
         * @param authority
         */
        ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority) {
            var authorityType = authority.authorityType;
            if (!serverTokenResponse.client_info)
                throw ClientAuthError.createClientInfoEmptyError(serverTokenResponse.client_info);
            switch (authorityType) {
                case exports.AuthorityType.B2C:
                    return AccountEntity.createAccount(serverTokenResponse.client_info, authority, idToken, "policy", this.cryptoObj);
                case exports.AuthorityType.Adfs:
                    return AccountEntity.createADFSAccount(authority, idToken);
                // default to AAD
                default:
                    return AccountEntity.createAccount(serverTokenResponse.client_info, authority, idToken, null, this.cryptoObj);
            }
        };
        /**
         * Generates CacheRecord
         * @param serverTokenResponse
         * @param idTokenObj
         * @param authority
         */
        ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, idTokenObj, authority) {
            // Account
            var cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority);
            var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
            var env = EnvironmentAliases.includes(reqEnvironment) ? PreferredCacheEnvironment : reqEnvironment;
            // IdToken
            var cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, idTokenObj.claims.tid);
            // AccessToken
            var responseScopes = ScopeSet.fromString(serverTokenResponse.scope);
            // Expiration calculation
            var expiresInSeconds = TimeUtils.nowSeconds() + serverTokenResponse.expires_in;
            var extendedExpiresInSeconds = expiresInSeconds + serverTokenResponse.ext_expires_in;
            var cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, idTokenObj.claims.tid, responseScopes.asArray().join(" "), expiresInSeconds, extendedExpiresInSeconds);
            // refreshToken
            var cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci);
            return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken);
        };
        return ResponseHandler;
    }());

    /**
     * SPAClient class
     *
     * Object instance which will construct requests to send to and handle responses
     * from the Microsoft STS using the authorization code flow.
     */
    var SPAClient = /** @class */ (function (_super) {
        __extends(SPAClient, _super);
        function SPAClient(configuration) {
            var _this = 
            // Implement base module
            _super.call(this, configuration) || this;
            B2cAuthority.setKnownAuthorities(_this.config.authOptions.knownAuthorities);
            return _this;
        }
        /**
         * Creates a url for logging in a user. Also performs validation of the request parameters.
         * Including any SSO parameters (account, sid, login_hint) will short circuit the authentication and allow you to retrieve a code without interaction.
         * @param request
         */
        SPAClient.prototype.createUrl = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var acquireTokenAuthority, e_1, queryString;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            acquireTokenAuthority = request && request.authority
                                ? AuthorityFactory.createInstance(request.authority, this.networkClient)
                                : this.defaultAuthority;
                            // This is temporary. Remove when ADFS is supported for browser
                            if (acquireTokenAuthority.authorityType == exports.AuthorityType.Adfs) {
                                throw ClientAuthError.createInvalidAuthorityTypeError(acquireTokenAuthority.canonicalAuthority);
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                        case 4: return [4 /*yield*/, this.createUrlRequestParamString(request)];
                        case 5:
                            queryString = _a.sent();
                            return [2 /*return*/, acquireTokenAuthority.authorizationEndpoint + "?" + queryString];
                    }
                });
            });
        };
        SPAClient.prototype.createUrlRequestParamString = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var parameterBuilder, scopeSet, correlationId;
                return __generator(this, function (_a) {
                    parameterBuilder = new RequestParameterBuilder();
                    parameterBuilder.addResponseTypeCode();
                    // Client ID
                    parameterBuilder.addClientId(this.config.authOptions.clientId);
                    scopeSet = new ScopeSet((request && request.scopes) || []);
                    if (request.extraScopesToConsent) {
                        scopeSet.appendScopes(request && request.extraScopesToConsent);
                    }
                    parameterBuilder.addScopes(scopeSet);
                    parameterBuilder.addRedirectUri(this.getRedirectUri());
                    correlationId = (request && request.correlationId) ||
                        this.config.cryptoInterface.createNewGuid();
                    parameterBuilder.addCorrelationId(correlationId);
                    parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod ||
                        "" + Constants.S256_CODE_CHALLENGE_METHOD);
                    parameterBuilder.addState(request.state);
                    parameterBuilder.addNonce(request.nonce || this.config.cryptoInterface.createNewGuid());
                    parameterBuilder.addClientInfo();
                    parameterBuilder.addLibraryInfo(this.config.libraryInfo);
                    if (request && request.prompt) {
                        parameterBuilder.addPrompt(request.prompt);
                    }
                    if (request && request.loginHint) {
                        parameterBuilder.addLoginHint(request.loginHint);
                    }
                    if (request && request.domainHint) {
                        parameterBuilder.addDomainHint(request.domainHint);
                    }
                    if (request && request.claims) {
                        parameterBuilder.addClaims(request.claims);
                    }
                    parameterBuilder.addResponseMode(exports.ResponseMode.FRAGMENT);
                    if (request && request.extraQueryParameters) {
                        parameterBuilder.addExtraQueryParameters(request && request.extraQueryParameters);
                    }
                    return [2 /*return*/, parameterBuilder.createQueryString()];
                });
            });
        };
        /**
         * Given an authorization code, it will perform a token exchange using cached values from a previous call to
         * createLoginUrl() or createAcquireTokenUrl(). You must call this AFTER using one of those APIs first. You should
         * also use the handleFragmentResponse() API to pass the codeResponse to this function afterwards.
         * @param codeResponse
         */
        SPAClient.prototype.acquireToken = function (codeRequest, userState, cachedNonce) {
            return __awaiter(this, void 0, void 0, function () {
                var acquireTokenAuthority, e_2, parameterBuilder, scopeSet, tokenEndpoint;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // If no code response is given, we cannot acquire a token.
                            if (!codeRequest || StringUtils.isEmpty(codeRequest.code)) {
                                throw ClientAuthError.createTokenRequestCannotBeMadeError();
                            }
                            acquireTokenAuthority = codeRequest && codeRequest.authority ? AuthorityFactory.createInstance(codeRequest.authority, this.networkClient) : this.defaultAuthority;
                            if (!!acquireTokenAuthority.discoveryComplete()) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_2);
                        case 4:
                            parameterBuilder = new RequestParameterBuilder();
                            parameterBuilder.addClientId(this.config.authOptions.clientId);
                            parameterBuilder.addRedirectUri(codeRequest.redirectUri || this.getRedirectUri());
                            scopeSet = new ScopeSet(codeRequest.scopes || []);
                            parameterBuilder.addScopes(scopeSet);
                            // add code: set by user, not validated
                            parameterBuilder.addAuthorizationCode(codeRequest.code);
                            parameterBuilder.addCodeVerifier(codeRequest.codeVerifier);
                            parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
                            parameterBuilder.addClientInfo();
                            tokenEndpoint = acquireTokenAuthority.tokenEndpoint;
                            return [4 /*yield*/, this.getTokenResponse(tokenEndpoint, parameterBuilder, acquireTokenAuthority, cachedNonce, userState)];
                        case 5: 
                        // User helper to retrieve token response.
                        // Need to await function call before return to catch any thrown errors.
                        // if errors are thrown asynchronously in return statement, they are caught by caller of this function instead.
                        return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
         * the given token and returns the renewed token. Will throw an error if login is not completed (unless
         * id tokens are not being renewed).
         * @param request
         */
        SPAClient.prototype.getValidToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var requestScopes, cachedAccount, homeAccountId, env, cachedAccessToken, cachedRefreshToken, acquireTokenAuthority, e_3, tokenEndpoint, refreshTokenRequest, cachedIdToken, idTokenObj, cachedScopes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Cannot renew token if no request object is given.
                            if (!request) {
                                throw ClientConfigurationError.createEmptyTokenRequestError();
                            }
                            if (!request.account) {
                                throw ClientAuthError.createNoAccountInSilentRequestError();
                            }
                            requestScopes = new ScopeSet(request.scopes || []);
                            cachedAccount = this.unifiedCacheManager.getAccount(CacheHelper.generateAccountCacheKey(request.account));
                            homeAccountId = cachedAccount.homeAccountId;
                            env = cachedAccount.environment;
                            cachedAccessToken = this.fetchAccessToken(homeAccountId, env, requestScopes, cachedAccount.realm);
                            cachedRefreshToken = this.fetchRefreshToken(homeAccountId, env);
                            if (!cachedAccessToken) {
                                throw ClientAuthError.createNoTokensFoundError();
                            }
                            if (!(request.forceRefresh || this.isTokenExpired(cachedAccessToken.expiresOn))) return [3 /*break*/, 5];
                            if (!cachedRefreshToken) {
                                throw ClientAuthError.createNoTokensFoundError();
                            }
                            acquireTokenAuthority = request.authority ? AuthorityFactory.createInstance(request.authority, this.networkClient) : this.defaultAuthority;
                            // This is temporary. Remove when ADFS is supported for browser
                            if (acquireTokenAuthority.authorityType === exports.AuthorityType.Adfs) {
                                throw ClientAuthError.createInvalidAuthorityTypeError(acquireTokenAuthority.canonicalAuthority);
                            }
                            if (!!acquireTokenAuthority.discoveryComplete()) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_3);
                        case 4:
                            tokenEndpoint = acquireTokenAuthority.tokenEndpoint;
                            refreshTokenRequest = {
                                refreshToken: cachedRefreshToken.secret,
                                scopes: request.scopes,
                                authority: acquireTokenAuthority.canonicalAuthority
                            };
                            return [2 /*return*/, this.renewToken(refreshTokenRequest, acquireTokenAuthority, tokenEndpoint)];
                        case 5:
                            cachedIdToken = this.fetchIdToken(homeAccountId, env, cachedAccount.realm);
                            idTokenObj = new IdToken(cachedIdToken.secret, this.cryptoUtils);
                            cachedScopes = ScopeSet.fromString(cachedAccessToken.target);
                            return [2 /*return*/, {
                                    uniqueId: idTokenObj.claims.oid || idTokenObj.claims.sub,
                                    tenantId: idTokenObj.claims.tid,
                                    scopes: cachedScopes.asArray(),
                                    idToken: idTokenObj.rawIdToken,
                                    idTokenClaims: idTokenObj.claims,
                                    accessToken: cachedAccessToken.secret,
                                    fromCache: true,
                                    account: CacheHelper.toIAccount(cachedAccount),
                                    expiresOn: new Date(cachedAccessToken.expiresOn),
                                    extExpiresOn: new Date(cachedAccessToken.extendedExpiresOn),
                                    familyId: null,
                                    state: ""
                                }];
                    }
                });
            });
        };
        // #region Logout
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param authorityUri
         */
        SPAClient.prototype.logout = function (account, acquireTokenAuthority) {
            return __awaiter(this, void 0, void 0, function () {
                var postLogoutRedirectUri, e_4, logoutUri;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Clear current account.
                            this.unifiedCacheManager.removeAccount(CacheHelper.generateAccountCacheKey(account));
                            postLogoutRedirectUri = "";
                            try {
                                postLogoutRedirectUri = "?" + AADServerParamKeys.POST_LOGOUT_URI + "=" + encodeURIComponent(this.getPostLogoutRedirectUri());
                            }
                            catch (e) { }
                            // Acquire token authorities.
                            if (!acquireTokenAuthority) {
                                acquireTokenAuthority = this.defaultAuthority;
                            }
                            // This is temporary. Remove when ADFS is supported for browser
                            if (acquireTokenAuthority.authorityType === exports.AuthorityType.Adfs) {
                                throw ClientAuthError.createInvalidAuthorityTypeError(acquireTokenAuthority.canonicalAuthority);
                            }
                            if (!!acquireTokenAuthority.discoveryComplete()) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_4 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_4);
                        case 4:
                            logoutUri = "" + acquireTokenAuthority.endSessionEndpoint + postLogoutRedirectUri;
                            return [2 /*return*/, logoutUri];
                    }
                });
            });
        };
        // #endregion
        // #region Response Handling
        /**
         * Handles the hash fragment response from public client code request. Returns a code response used by
         * the client to exchange for a token in acquireToken.
         * @param hashFragment
         */
        SPAClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
            // Handle responses.
            var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.unifiedCacheManager, this.cryptoUtils, this.logger);
            // Deserialize hash fragment response parameters.
            var hashUrlString = new UrlString(hashFragment);
            var serverParams = hashUrlString.getDeserializedHash();
            // Get code response
            responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
            return serverParams.code;
        };
        // #endregion
        // #region Helpers
        /**
         * fetches idToken from cache if present
         * @param request
         */
        SPAClient.prototype.fetchIdToken = function (homeAccountId, environment, inputRealm) {
            var idTokenKey = CacheHelper.generateCredentialCacheKey(homeAccountId, environment, exports.CredentialType.ID_TOKEN, this.config.authOptions.clientId, inputRealm);
            return this.unifiedCacheManager.getCredential(idTokenKey);
        };
        /**
         * fetches accessToken from cache if present
         * @param request
         * @param scopes
         */
        SPAClient.prototype.fetchAccessToken = function (homeAccountId, environment, scopes, inputRealm) {
            var accessTokenFilter = {
                homeAccountId: homeAccountId,
                environment: environment,
                credentialType: exports.CredentialType.ACCESS_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: inputRealm,
                target: scopes.printScopes()
            };
            var credentialCache = this.unifiedCacheManager.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.values(credentialCache.accessTokens);
            if (accessTokens.length > 1) ;
            else if (accessTokens.length < 1) {
                return null;
            }
            return accessTokens[0];
        };
        /**
         * fetches refreshToken from cache if present
         * @param request
         */
        SPAClient.prototype.fetchRefreshToken = function (homeAccountId, environment) {
            var refreshTokenKey = CacheHelper.generateCredentialCacheKey(homeAccountId, environment, exports.CredentialType.REFRESH_TOKEN, this.config.authOptions.clientId);
            return this.unifiedCacheManager.getCredential(refreshTokenKey);
        };
        /**
         * check if an access token is expired
         * @param expiresOn
         */
        SPAClient.prototype.isTokenExpired = function (expiresOn) {
            // check for access token expiry
            var expirationSec = Number(expiresOn) || 0;
            var offsetCurrentTimeSec = TimeUtils.nowSeconds() +
                this.config.systemOptions.tokenRenewalOffsetSeconds;
            // If current time + offset is greater than token expiration time, then token is expired.
            return offsetCurrentTimeSec > expirationSec;
        };
        /**
         * Makes a request to the token endpoint with the given parameters and parses the response.
         * @param tokenEndpoint
         * @param tokenReqParams
         * @param tokenRequest
         * @param codeResponse
         */
        SPAClient.prototype.getTokenResponse = function (tokenEndpoint, parameterBuilder, authority, cachedNonce, userState) {
            return __awaiter(this, void 0, void 0, function () {
                var acquiredTokenResponse, responseHandler, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.networkClient.sendPostRequestAsync(tokenEndpoint, {
                                body: parameterBuilder.createQueryString(),
                                headers: this.createDefaultTokenRequestHeaders(),
                            })];
                        case 1:
                            acquiredTokenResponse = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.unifiedCacheManager, this.cryptoUtils, this.logger);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(acquiredTokenResponse.body);
                            tokenResponse = responseHandler.generateAuthenticationResult(acquiredTokenResponse.body, authority, cachedNonce);
                            tokenResponse.state = userState;
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * Creates refreshToken request and sends to given token endpoint.
         * @param refreshTokenRequest
         * @param tokenEndpoint
         * @param refreshToken
         */
        SPAClient.prototype.renewToken = function (refreshTokenRequest, authority, tokenEndpoint) {
            return __awaiter(this, void 0, void 0, function () {
                var parameterBuilder, scopeSet;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            parameterBuilder = new RequestParameterBuilder();
                            parameterBuilder.addClientId(this.config.authOptions.clientId);
                            parameterBuilder.addRedirectUri(this.getRedirectUri());
                            scopeSet = new ScopeSet(refreshTokenRequest.scopes || []);
                            parameterBuilder.addScopes(scopeSet);
                            parameterBuilder.addRefreshToken(refreshTokenRequest.refreshToken);
                            parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
                            parameterBuilder.addClientInfo();
                            return [4 /*yield*/, this.getTokenResponse(tokenEndpoint, parameterBuilder, authority)];
                        case 1: 
                        // User helper to retrieve token response.
                        // Need to await function call before return to catch any thrown errors.
                        // if errors are thrown asynchronously in return statement, they are caught by caller of this function instead.
                        return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        // #endregion
        // #region Getters and setters
        /**
         *
         * Use to get the redirect uri configured in MSAL or null.
         * Evaluates redirectUri if its a function, otherwise simply returns its value.
         * @returns {string} redirect URL
         *
         */
        SPAClient.prototype.getRedirectUri = function () {
            if (this.config.authOptions.redirectUri) {
                if (typeof this.config.authOptions.redirectUri === "function") {
                    return this.config.authOptions.redirectUri();
                }
                else if (!StringUtils.isEmpty(this.config.authOptions.redirectUri)) {
                    return this.config.authOptions.redirectUri;
                }
            }
            // This should never throw unless window.location.href is returning empty.
            throw ClientConfigurationError.createRedirectUriEmptyError();
        };
        /**
         * Use to get the post logout redirect uri configured in MSAL or null.
         * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
         *
         * @returns {string} post logout redirect URL
         */
        SPAClient.prototype.getPostLogoutRedirectUri = function () {
            if (this.config.authOptions.postLogoutRedirectUri) {
                if (typeof this.config.authOptions.postLogoutRedirectUri === "function") {
                    return this.config.authOptions.postLogoutRedirectUri();
                }
                else if (!StringUtils.isEmpty(this.config.authOptions.postLogoutRedirectUri)) {
                    return this.config.authOptions.postLogoutRedirectUri;
                }
            }
            // This should never throw unless window.location.href is returning empty.
            throw ClientConfigurationError.createPostLogoutRedirectUriEmptyError();
        };
        /**
         * Returns the signed in account
         * (the account object is created at the time of successful login)
         * or null when no state is found
         * @returns {@link Account} - the account object stored in MSAL
         */
        SPAClient.prototype.getAccount = function (homeAccountIdentifier, env, rlm) {
            var accountCache = this.unifiedCacheManager.getAccountsFilteredBy({
                homeAccountId: homeAccountIdentifier,
                environment: env,
                realm: rlm
            });
            var numAccounts = Object.keys(accountCache).length;
            if (numAccounts < 1) {
                return null;
            }
            else if (numAccounts > 1) {
                throw ClientAuthError.createMultipleMatchingAccountsInCacheError();
            }
            else {
                return accountCache[0];
            }
        };
        return SPAClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Oauth2.0 Authorization Code client
     */
    var AuthorizationCodeClient = /** @class */ (function (_super) {
        __extends(AuthorizationCodeClient, _super);
        function AuthorizationCodeClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Creates the URL of the authorization request letting the user input credentials and consent to the
         * application. The URL target the /authorize endpoint of the authority configured in the
         * application object.
         *
         * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
         * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
         * acquireToken(AuthorizationCodeRequest)
         * @param request
         */
        AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var queryString;
                return __generator(this, function (_a) {
                    queryString = this.createAuthCodeUrlQueryString(request);
                    return [2 /*return*/, this.defaultAuthority.authorizationEndpoint + "?" + queryString];
                });
            });
        };
        /**
         * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
         * authorization_code_grant
         * @param request
         */
        AuthorizationCodeClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var response, responseHandler, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("in acquireToken call");
                            return [4 /*yield*/, this.executeTokenRequest(this.defaultAuthority, request)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.unifiedCacheManager, this.cryptoUtils, this.logger);
                            responseHandler.validateTokenResponse(response.body);
                            tokenResponse = responseHandler.generateAuthenticationResult(response.body, this.defaultAuthority);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * Executes POST request to token endpoint
         * @param authority
         * @param request
         */
        AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, headers;
                return __generator(this, function (_a) {
                    requestBody = this.createTokenRequestBody(request);
                    headers = this.createDefaultTokenRequestHeaders();
                    return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers)];
                });
            });
        };
        /**
         * Generates a map for all the params to be sent to the service
         * @param request
         */
        AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            // validate the redirectUri (to be a non null value)
            parameterBuilder.addRedirectUri(request.redirectUri);
            var scopeSet = new ScopeSet(request.scopes || []);
            parameterBuilder.addScopes(scopeSet);
            // add code: user set, not validated
            parameterBuilder.addAuthorizationCode(request.code);
            // add code_verifier if passed
            if (request.codeVerifier) {
                parameterBuilder.addCodeVerifier(request.codeVerifier);
            }
            parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
            parameterBuilder.addClientInfo();
            return parameterBuilder.createQueryString();
        };
        /**
         * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
         * @param request
         */
        AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            var scopeSet = new ScopeSet(request.scopes || []);
            if (request.extraScopesToConsent) {
                scopeSet.appendScopes(request.extraScopesToConsent);
            }
            parameterBuilder.addScopes(scopeSet);
            // validate the redirectUri (to be a non null value)
            parameterBuilder.addRedirectUri(request.redirectUri);
            // generate the correlationId if not set by the user and add
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            // add response_mode. If not passed in it defaults to query.
            parameterBuilder.addResponseMode(request.responseMode);
            // add response_type = code
            parameterBuilder.addResponseTypeCode();
            // add library info parameters
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            if (request.codeChallenge) {
                parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
            }
            if (request.state) {
                parameterBuilder.addState(request.state);
            }
            if (request.prompt) {
                parameterBuilder.addPrompt(request.prompt);
            }
            if (request.loginHint) {
                parameterBuilder.addLoginHint(request.loginHint);
            }
            if (request.domainHint) {
                parameterBuilder.addDomainHint(request.domainHint);
            }
            if (request.nonce) {
                parameterBuilder.addNonce(request.nonce);
            }
            if (request.claims) {
                parameterBuilder.addClaims(request.claims);
            }
            if (request.extraQueryParameters) {
                parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
            }
            return parameterBuilder.createQueryString();
        };
        return AuthorizationCodeClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 Device code client
     */
    var DeviceCodeClient = /** @class */ (function (_super) {
        __extends(DeviceCodeClient, _super);
        function DeviceCodeClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Gets device code from device code endpoint, calls back to with device code response, and
         * polls token endpoint to exchange device code for tokens
         * @param request
         */
        DeviceCodeClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var deviceCodeResponse, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getDeviceCode(request)];
                        case 1:
                            deviceCodeResponse = _a.sent();
                            request.deviceCodeCallback(deviceCodeResponse);
                            return [4 /*yield*/, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
                        case 2:
                            response = _a.sent();
                            // TODO handle response
                            return [2 /*return*/, JSON.stringify(response)];
                    }
                });
            });
        };
        /**
         * Creates device code request and executes http GET
         * @param request
         */
        DeviceCodeClient.prototype.getDeviceCode = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var queryString, headers;
                return __generator(this, function (_a) {
                    queryString = this.createQueryString(request);
                    headers = this.createDefaultLibraryHeaders();
                    return [2 /*return*/, this.executePostRequestToDeviceCodeEndpoint(this.defaultAuthority.deviceCodeEndpoint, queryString, headers)];
                });
            });
        };
        /**
         * Executes POST request to device code endpoint
         * @param deviceCodeEndpoint
         * @param queryString
         * @param headers
         */
        DeviceCodeClient.prototype.executePostRequestToDeviceCodeEndpoint = function (deviceCodeEndpoint, queryString, headers) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.networkClient.sendPostRequestAsync(deviceCodeEndpoint, {
                                body: queryString,
                                headers: headers
                            })];
                        case 1:
                            _a = (_b.sent()).body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
                            return [2 /*return*/, {
                                    userCode: userCode,
                                    deviceCode: deviceCode,
                                    verificationUri: verificationUri,
                                    expiresIn: expiresIn,
                                    interval: interval,
                                    message: message
                                }];
                    }
                });
            });
        };
        /**
         * Create device code endpoint query parameters and returns string
         */
        DeviceCodeClient.prototype.createQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            var scopeSet = new ScopeSet(request.scopes || []);
            parameterBuilder.addScopes(scopeSet);
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            return parameterBuilder.createQueryString();
        };
        /**
         * Creates token request with device code response and polls token endpoint at interval set by the device code
         * response
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.acquireTokenWithDeviceCode = function (request, deviceCodeResponse) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, headers, deviceCodeExpirationTime, pollingIntervalMilli;
                var _this = this;
                return __generator(this, function (_a) {
                    requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
                    headers = this.createDefaultTokenRequestHeaders();
                    deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
                    pollingIntervalMilli = deviceCodeResponse.interval * 1000;
                    // Poll token endpoint while (device code is not expired AND operation has not been cancelled by
                    // setting CancellationToken.cancel = true). POST request is sent at interval set by pollingIntervalMilli
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var intervalId = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                                var response, error_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 5, , 6]);
                                            if (!request.cancel) return [3 /*break*/, 1];
                                            this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
                                            clearInterval(intervalId);
                                            reject(ClientAuthError.createDeviceCodeCancelledError());
                                            return [3 /*break*/, 4];
                                        case 1:
                                            if (!(TimeUtils.nowSeconds() > deviceCodeExpirationTime)) return [3 /*break*/, 2];
                                            this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
                                            clearInterval(intervalId);
                                            reject(ClientAuthError.createDeviceCodeExpiredError());
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, this.executePostToTokenEndpoint(this.defaultAuthority.tokenEndpoint, requestBody, headers)];
                                        case 3:
                                            response = _a.sent();
                                            if (response.body && response.body.error == Constants.AUTHORIZATION_PENDING) {
                                                // user authorization is pending. Sleep for polling interval and try again
                                                this.logger.info(response.body.error_description);
                                            }
                                            else {
                                                clearInterval(intervalId);
                                                resolve(response.body);
                                            }
                                            _a.label = 4;
                                        case 4: return [3 /*break*/, 6];
                                        case 5:
                                            error_1 = _a.sent();
                                            clearInterval(intervalId);
                                            reject(error_1);
                                            return [3 /*break*/, 6];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); }, pollingIntervalMilli);
                        })];
                });
            });
        };
        /**
         * Creates query parameters and converts to string.
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.createTokenRequestBody = function (request, deviceCodeResponse) {
            var requestParameters = new RequestParameterBuilder();
            var scopeSet = new ScopeSet(request.scopes || []);
            requestParameters.addScopes(scopeSet);
            requestParameters.addClientId(this.config.authOptions.clientId);
            requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
            requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
            return requestParameters.createQueryString();
        };
        return DeviceCodeClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 refresh token client
     */
    var RefreshTokenClient = /** @class */ (function (_super) {
        __extends(RefreshTokenClient, _super);
        function RefreshTokenClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        RefreshTokenClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var response, responseHandler, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.executeTokenRequest(request, this.defaultAuthority)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.unifiedCacheManager, this.cryptoUtils, this.logger);
                            responseHandler.validateTokenResponse(response.body);
                            tokenResponse = responseHandler.generateAuthenticationResult(response.body, this.defaultAuthority);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, headers;
                return __generator(this, function (_a) {
                    requestBody = this.createTokenRequestBody(request);
                    headers = this.createDefaultTokenRequestHeaders();
                    return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers)];
                });
            });
        };
        RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            var scopeSet = new ScopeSet(request.scopes || []);
            parameterBuilder.addScopes(scopeSet);
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
            parameterBuilder.addClientInfo();
            parameterBuilder.addRefreshToken(request.refreshToken);
            return parameterBuilder.createQueryString();
        };
        return RefreshTokenClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentFlowClient = /** @class */ (function (_super) {
        __extends(SilentFlowClient, _super);
        function SilentFlowClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
         * the given token and returns the renewed token
         * @param request
         */
        SilentFlowClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var requestScopes, accountKey, cachedAccount, homeAccountId, environment, cachedIdToken, idTokenObj, cachedAccessToken, cachedRefreshToken, refreshTokenClient, refreshTokenRequest;
                return __generator(this, function (_a) {
                    // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                    if (!request.account) {
                        throw ClientAuthError.createNoAccountInSilentRequestError();
                    }
                    requestScopes = new ScopeSet(request.scopes || []);
                    accountKey = CacheHelper.generateAccountCacheKey(request.account);
                    cachedAccount = this.unifiedCacheManager.getAccount(accountKey);
                    homeAccountId = cachedAccount.homeAccountId;
                    environment = cachedAccount.environment;
                    cachedIdToken = this.readIdTokenFromCache(homeAccountId, environment, cachedAccount.realm);
                    idTokenObj = new IdToken(cachedIdToken.secret, this.config.cryptoInterface);
                    cachedAccessToken = this.readAccessTokenFromCache(homeAccountId, environment, requestScopes, cachedAccount.realm);
                    cachedRefreshToken = this.readRefreshTokenFromCache(homeAccountId, environment);
                    // Check if refresh is forced, or if tokens are expired. If neither are true, return a token response with the found token entry.
                    if (request.forceRefresh || !cachedAccessToken || this.isTokenExpired(cachedAccessToken.expiresOn)) {
                        // no refresh Token
                        if (!cachedRefreshToken) {
                            throw ClientAuthError.createNoTokensFoundError();
                        }
                        refreshTokenClient = new RefreshTokenClient(this.config);
                        refreshTokenRequest = {
                            scopes: request.scopes,
                            refreshToken: cachedRefreshToken.secret,
                            authority: request.authority
                        };
                        return [2 /*return*/, refreshTokenClient.acquireToken(refreshTokenRequest)];
                    }
                    // generate Authentication Result
                    return [2 /*return*/, {
                            uniqueId: idTokenObj.claims.oid || idTokenObj.claims.sub,
                            tenantId: idTokenObj.claims.tid,
                            scopes: requestScopes.asArray(),
                            account: CacheHelper.toIAccount(cachedAccount),
                            idToken: cachedIdToken.secret,
                            idTokenClaims: idTokenObj.claims,
                            accessToken: cachedAccessToken.secret,
                            fromCache: true,
                            expiresOn: new Date(cachedAccessToken.expiresOn),
                            extExpiresOn: new Date(cachedAccessToken.extendedExpiresOn),
                            familyId: null,
                        }];
                });
            });
        };
        /**
         * fetches idToken from cache if present
         * @param request
         */
        SilentFlowClient.prototype.readIdTokenFromCache = function (homeAccountId, environment, inputRealm) {
            var idTokenKey = CacheHelper.generateCredentialCacheKey(homeAccountId, environment, exports.CredentialType.ID_TOKEN, this.config.authOptions.clientId, inputRealm);
            return this.unifiedCacheManager.getCredential(idTokenKey);
        };
        /**
         * fetches accessToken from cache if present
         * @param request
         * @param scopes
         */
        SilentFlowClient.prototype.readAccessTokenFromCache = function (homeAccountId, environment, scopes, inputRealm) {
            var accessTokenFilter = {
                homeAccountId: homeAccountId,
                environment: environment,
                credentialType: exports.CredentialType.ACCESS_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: inputRealm,
                target: scopes.printScopes()
            };
            var credentialCache = this.unifiedCacheManager.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.values(credentialCache.accessTokens);
            if (accessTokens.length > 1) ;
            else if (accessTokens.length < 1) {
                return null;
            }
            return accessTokens[0];
        };
        /**
         * fetches refreshToken from cache if present
         * @param request
         */
        SilentFlowClient.prototype.readRefreshTokenFromCache = function (homeAccountId, environment) {
            var refreshTokenKey = CacheHelper.generateCredentialCacheKey(homeAccountId, environment, exports.CredentialType.REFRESH_TOKEN, this.config.authOptions.clientId);
            return this.unifiedCacheManager.getCredential(refreshTokenKey);
        };
        /**
         * check if a token is expired based on given UTC time in seconds.
         * @param expiresOn
         */
        SilentFlowClient.prototype.isTokenExpired = function (expiresOn) {
            // check for access token expiry
            var expirationSec = Number(expiresOn) || 0;
            var offsetCurrentTimeSec = TimeUtils.nowSeconds() + this.config.systemOptions.tokenRenewalOffsetSeconds;
            // If current time + offset is greater than token expiration time, then token is expired.
            return (offsetCurrentTimeSec > expirationSec);
        };
        return SilentFlowClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Result returned from the authority's token endpoint.
     */
    var AuthenticationResult = /** @class */ (function () {
        function AuthenticationResult() {
        }
        return AuthenticationResult;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which provides helpers for OAuth 2.0 protocol specific values
     */
    var ProtocolUtils = /** @class */ (function () {
        function ProtocolUtils() {
        }
        /**
         * Appends user state with random guid, or returns random guid.
         * @param userState
         * @param randomGuid
         */
        ProtocolUtils.setRequestState = function (userState, randomGuid) {
            return !StringUtils.isEmpty(userState) ? "" + randomGuid + Constants.RESOURCE_DELIM + userState : randomGuid;
        };
        /**
         *
         * Extracts user state value from the state sent with the authentication request.
         * @returns {string} scope.
         * @ignore
         */
        ProtocolUtils.getUserRequestState = function (serverResponseState) {
            if (!StringUtils.isEmpty(serverResponseState)) {
                var splitIndex = serverResponseState.indexOf(Constants.RESOURCE_DELIM);
                if (splitIndex > -1 && splitIndex + 1 < serverResponseState.length) {
                    return serverResponseState.substring(splitIndex + 1);
                }
            }
            return "";
        };
        return ProtocolUtils;
    }());

    exports.AccessTokenEntity = AccessTokenEntity;
    exports.AccountEntity = AccountEntity;
    exports.AppMetadataEntity = AppMetadataEntity;
    exports.AuthError = AuthError;
    exports.AuthErrorMessage = AuthErrorMessage;
    exports.AuthenticationResult = AuthenticationResult;
    exports.Authority = Authority;
    exports.AuthorityFactory = AuthorityFactory;
    exports.AuthorizationCodeClient = AuthorizationCodeClient;
    exports.B2cAuthority = B2cAuthority;
    exports.CacheHelper = CacheHelper;
    exports.ClientAuthError = ClientAuthError;
    exports.ClientAuthErrorMessage = ClientAuthErrorMessage;
    exports.ClientConfigurationError = ClientConfigurationError;
    exports.ClientConfigurationErrorMessage = ClientConfigurationErrorMessage;
    exports.Constants = Constants;
    exports.Credential = Credential;
    exports.DEFAULT_SYSTEM_OPTIONS = DEFAULT_SYSTEM_OPTIONS;
    exports.Deserializer = Deserializer;
    exports.DeviceCodeClient = DeviceCodeClient;
    exports.IdToken = IdToken;
    exports.IdTokenEntity = IdTokenEntity;
    exports.InteractionRequiredAuthError = InteractionRequiredAuthError;
    exports.Logger = Logger;
    exports.PromptValue = PromptValue;
    exports.ProtocolUtils = ProtocolUtils;
    exports.RefreshTokenClient = RefreshTokenClient;
    exports.RefreshTokenEntity = RefreshTokenEntity;
    exports.SPAClient = SPAClient;
    exports.Serializer = Serializer;
    exports.ServerError = ServerError;
    exports.SilentFlowClient = SilentFlowClient;
    exports.StringUtils = StringUtils;
    exports.UnifiedCacheManager = UnifiedCacheManager;
    exports.UrlString = UrlString;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXNhbC1jb21tb24uanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvci9BdXRoRXJyb3IudHMiLCIuLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwiLi4vc3JjL3V0aWxzL1N0cmluZ1V0aWxzLnRzIiwiLi4vc3JjL2xvZ2dlci9Mb2dnZXIudHMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLnRzIiwiLi4vc3JjL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uLnRzIiwiLi4vc3JjL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvci50cyIsIi4uL3NyYy91cmwvVXJsU3RyaW5nLnRzIiwiLi4vc3JjL2F1dGhvcml0eS9BdXRob3JpdHkudHMiLCIuLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eVR5cGUudHMiLCIuLi9zcmMvYXV0aG9yaXR5L0IyY0F1dGhvcml0eS50cyIsIi4uL3NyYy9hY2NvdW50L0NsaWVudEluZm8udHMiLCIuLi9zcmMvcmVxdWVzdC9TY29wZVNldC50cyIsIi4uL3NyYy9jYWNoZS91dGlscy9DYWNoZUhlbHBlci50cyIsIi4uL3NyYy9jYWNoZS9lbnRpdGllcy9BY2NvdW50RW50aXR5LnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0NyZWRlbnRpYWwudHMiLCIuLi9zcmMvY2FjaGUvZW50aXRpZXMvSWRUb2tlbkVudGl0eS50cyIsIi4uL3NyYy91dGlscy9UaW1lVXRpbHMudHMiLCIuLi9zcmMvY2FjaGUvZW50aXRpZXMvQWNjZXNzVG9rZW5FbnRpdHkudHMiLCIuLi9zcmMvY2FjaGUvZW50aXRpZXMvUmVmcmVzaFRva2VuRW50aXR5LnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0FwcE1ldGFkYXRhRW50aXR5LnRzIiwiLi4vc3JjL2NhY2hlL3NlcmlhbGl6ZS9Kc29uS2V5cy50cyIsIi4uL3NyYy9jYWNoZS9zZXJpYWxpemUvRGVzZXJpYWxpemVyLnRzIiwiLi4vc3JjL2NhY2hlL3NlcmlhbGl6ZS9FbnRpdHlTZXJpYWxpemVyLnRzIiwiLi4vc3JjL2NhY2hlL3NlcmlhbGl6ZS9TZXJpYWxpemVyLnRzIiwiLi4vc3JjL2NhY2hlL1VuaWZpZWRDYWNoZU1hbmFnZXIudHMiLCIuLi9zcmMvY2xpZW50L0Jhc2VDbGllbnQudHMiLCIuLi9zcmMvYXV0aG9yaXR5L0FhZEF1dGhvcml0eS50cyIsIi4uL3NyYy9hdXRob3JpdHkvQWRmc0F1dGhvcml0eS50cyIsIi4uL3NyYy9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeS50cyIsIi4uL3NyYy9hY2NvdW50L0lkVG9rZW4udHMiLCIuLi9zcmMvcmVxdWVzdC9SZXF1ZXN0VmFsaWRhdG9yLnRzIiwiLi4vc3JjL3NlcnZlci9SZXF1ZXN0UGFyYW1ldGVyQnVpbGRlci50cyIsIi4uL3NyYy9lcnJvci9TZXJ2ZXJFcnJvci50cyIsIi4uL3NyYy9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0NhY2hlUmVjb3JkLnRzIiwiLi4vc3JjL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlci50cyIsIi4uL3NyYy9jbGllbnQvU1BBQ2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9BdXRob3JpemF0aW9uQ29kZUNsaWVudC50cyIsIi4uL3NyYy9jbGllbnQvRGV2aWNlQ29kZUNsaWVudC50cyIsIi4uL3NyYy9jbGllbnQvUmVmcmVzaFRva2VuQ2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9TaWxlbnRGbG93Q2xpZW50LnRzIiwiLi4vc3JjL3Jlc3BvbnNlL0F1dGhlbnRpY2F0aW9uUmVzdWx0LnRzIiwiLi4vc3JjL3V0aWxzL1Byb3RvY29sVXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogQXV0aEVycm9yTWVzc2FnZSBjbGFzcyBjb250YWluaW5nIHN0cmluZyBjb25zdGFudHMgdXNlZCBieSBlcnJvciBjb2RlcyBhbmQgbWVzc2FnZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQXV0aEVycm9yTWVzc2FnZSA9IHtcclxuICAgIHVuZXhwZWN0ZWRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidW5leHBlY3RlZF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVW5leHBlY3RlZCBlcnJvciBpbiBhdXRoZW50aWNhdGlvbi5cIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYWwgZXJyb3IgY2xhc3MgdGhyb3duIGJ5IHRoZSBNU0FMLmpzIGxpYnJhcnkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXV0aEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG5cclxuICAgIC8vIFNob3J0IHN0cmluZyBkZW5vdGluZyBlcnJvclxyXG4gICAgZXJyb3JDb2RlOiBzdHJpbmc7XHJcbiAgICAvLyBEZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiBlcnJvclxyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yU3RyaW5nID0gZXJyb3JNZXNzYWdlID8gYCR7ZXJyb3JDb2RlfTogJHtlcnJvck1lc3NhZ2V9YCA6IGVycm9yQ29kZTtcclxuICAgICAgICBzdXBlcihlcnJvclN0cmluZyk7XHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkF1dGhFcnJvclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aGF0IGlzIHRocm93biB3aGVuIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbnMgaW4gdGhlIGxpYnJhcnkuXHJcbiAgICAgKiBAcGFyYW0gZXJyRGVzYyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihlcnJEZXNjOiBzdHJpbmcpOiBBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQXV0aEVycm9yKEF1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmNvZGUsIGAke0F1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmRlc2N9OiAke2VyckRlc2N9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL2FjY291bnQvSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBTY29wZVNldCB9IGZyb20gXCIuLi9yZXF1ZXN0L1Njb3BlU2V0XCI7XHJcblxyXG4vKipcclxuICogQ2xpZW50QXV0aEVycm9yTWVzc2FnZSBjbGFzcyBjb250YWluaW5nIHN0cmluZyBjb25zdGFudHMgdXNlZCBieSBlcnJvciBjb2RlcyBhbmQgbWVzc2FnZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSA9IHtcclxuICAgIGNsaWVudEluZm9EZWNvZGluZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19kZWNvZGluZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGNsaWVudCBpbmZvIGNvdWxkIG5vdCBiZSBwYXJzZWQvZGVjb2RlZCBjb3JyZWN0bHkuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIGNsaWVudEluZm9FbXB0eUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19lbXB0eV9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGNsaWVudCBpbmZvIHdhcyBlbXB0eS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgaWRUb2tlblBhcnNpbmdFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiaWRfdG9rZW5fcGFyc2luZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiSUQgdG9rZW4gY2Fubm90IGJlIHBhcnNlZC4gUGxlYXNlIHJldmlldyBzdGFjayB0cmFjZSB0byBkZXRlcm1pbmUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIG51bGxPckVtcHR5SWRUb2tlbjoge1xyXG4gICAgICAgIGNvZGU6IFwibnVsbF9vcl9lbXB0eV9pZF90b2tlblwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGlkVG9rZW4gaXMgbnVsbCBvciBlbXB0eS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImVuZHBvaW50c19yZXNvbHV0aW9uX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJFcnJvcjogY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzLiBQbGVhc2UgY2hlY2sgbmV0d29yayBhbmQgdHJ5IGFnYWluLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZEF1dGhvcml0eVR5cGU6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfYXV0aG9yaXR5X3R5cGVcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBnaXZlbiBhdXRob3JpdHkgaXMgbm90IGEgdmFsaWQgdHlwZSBvZiBhdXRob3JpdHkgc3VwcG9ydGVkIGJ5IE1TQUwuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIGhhc2hOb3REZXNlcmlhbGl6ZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImhhc2hfbm90X2Rlc2VyaWFsaXplZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGhhc2ggcGFyYW1ldGVycyBjb3VsZCBub3QgYmUgZGVzZXJpYWxpemVkLiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBibGFua0d1aWRHZW5lcmF0ZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImJsYW5rX2d1aWRfZ2VuZXJhdGVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgZ3VpZCBnZW5lcmF0ZWQgd2FzIGJsYW5rLiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBzdGF0ZU1pc21hdGNoRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInN0YXRlX21pc21hdGNoXCIsXHJcbiAgICAgICAgZGVzYzogXCJTdGF0ZSBtaXNtYXRjaCBlcnJvci4gUGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yay4gQ29udGludWVkIHJlcXVlc3RzIG1heSBjYXVzZSBjYWNoZSBvdmVyZmxvdy5cIlxyXG4gICAgfSxcclxuICAgIG5vbmNlTWlzbWF0Y2hFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm9uY2VfbWlzbWF0Y2hcIixcclxuICAgICAgICBkZXNjOiBcIk5vbmNlIG1pc21hdGNoIGVycm9yLiBUaGlzIG1heSBiZSBjYXVzZWQgYnkgYSByYWNlIGNvbmRpdGlvbiBpbiBjb25jdXJyZW50IHJlcXVlc3RzLlwiXHJcbiAgICB9LFxyXG4gICAgYWNjb3VudE1pc21hdGNoRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImFjY291bnRfbWlzbWF0Y2hcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZWQgYWNjb3VudCBhbmQgYWNjb3VudCB3aGljaCBtYWRlIHRoZSB0b2tlbiByZXF1ZXN0IGRvIG5vdCBtYXRjaC5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRJZFRva2VuOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2lkX3Rva2VuXCIsXHJcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIElEIHRva2VuIGZvcm1hdC5cIlxyXG4gICAgfSxcclxuICAgIG5vVG9rZW5zRm91bmRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fdG9rZW5zX2ZvdW5kXCIsXHJcbiAgICAgICAgZGVzYzogXCJObyB0b2tlbnMgd2VyZSBmb3VuZCBmb3IgdGhlIGdpdmVuIHNjb3BlcywgYW5kIG5vIGF1dGhvcml6YXRpb24gY29kZSB3YXMgcGFzc2VkIHRvIGFjcXVpcmVUb2tlbi4gWW91IG11c3QgcmV0cmlldmUgYW4gYXV0aG9yaXphdGlvbiBjb2RlIGJlZm9yZSBtYWtpbmcgYSBjYWxsIHRvIGFjcXVpcmVUb2tlbigpLlwiXHJcbiAgICB9LFxyXG4gICAgY2FjaGVQYXJzZUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjYWNoZV9wYXJzZV9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ291bGQgbm90IHBhcnNlIGNhY2hlIGtleS5cIlxyXG4gICAgfSxcclxuICAgIHVzZXJMb2dpblJlcXVpcmVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVzZXJfbG9naW5fZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWQuXCJcclxuICAgIH0sXHJcbiAgICBtdWx0aXBsZU1hdGNoaW5nVG9rZW5zOiB7XHJcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBjb250YWlucyBtdWx0aXBsZSB0b2tlbnMgc2F0aXNmeWluZyB0aGUgcmVxdWlyZW1lbnRzLiBcIiArXHJcbiAgICAgICAgICAgIFwiQ2FsbCBBY3F1aXJlVG9rZW4gYWdhaW4gcHJvdmlkaW5nIG1vcmUgcmVxdWlyZW1lbnRzIHN1Y2ggYXMgYXV0aG9yaXR5IG9yIGFjY291bnQuXCJcclxuICAgIH0sXHJcbiAgICBtdWx0aXBsZU1hdGNoaW5nQWNjb3VudHM6IHtcclxuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX21hdGNoaW5nX2FjY291bnRzXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgYWNjb3VudHMgc2F0aXNmeWluZyB0aGUgZ2l2ZW4gcGFyYW1ldGVycy4gUGxlYXNlIHBhc3MgbW9yZSBpbmZvIHRvIG9idGFpbiB0aGUgY29ycmVjdCBhY2NvdW50XCJcclxuICAgIH0sXHJcbiAgICB0b2tlblJlcXVlc3RDYW5ub3RCZU1hZGU6IHtcclxuICAgICAgICBjb2RlOiBcInJlcXVlc3RfY2Fubm90X2JlX21hZGVcIixcclxuICAgICAgICBkZXNjOiBcIlRva2VuIHJlcXVlc3QgY2Fubm90IGJlIG1hZGUgd2l0aG91dCBhdXRob3JpemF0aW9uIGNvZGUgb3IgcmVmcmVzaCB0b2tlbi5cIlxyXG4gICAgfSxcclxuICAgIGFwcGVuZEVtcHR5U2NvcGVFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2Fubm90X2FwcGVuZF9lbXB0eV9zY29wZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2Fubm90IGFwcGVuZCBudWxsIG9yIGVtcHR5IHNjb3BlIHRvIFNjb3BlU2V0LiBQbGVhc2UgY2hlY2sgdGhlIHN0YWNrIHRyYWNlIGZvciBtb3JlIGluZm8uXCJcclxuICAgIH0sXHJcbiAgICByZW1vdmVFbXB0eVNjb3BlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNhbm5vdF9yZW1vdmVfZW1wdHlfc2NvcGVcIixcclxuICAgICAgICBkZXNjOiBcIkNhbm5vdCByZW1vdmUgbnVsbCBvciBlbXB0eSBzY29wZSBmcm9tIFNjb3BlU2V0LiBQbGVhc2UgY2hlY2sgdGhlIHN0YWNrIHRyYWNlIGZvciBtb3JlIGluZm8uXCJcclxuICAgIH0sXHJcbiAgICBhcHBlbmRTY29wZVNldEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjYW5ub3RfYXBwZW5kX3Njb3Blc2V0XCIsXHJcbiAgICAgICAgZGVzYzogXCJDYW5ub3QgYXBwZW5kIFNjb3BlU2V0IGR1ZSB0byBlcnJvci5cIlxyXG4gICAgfSxcclxuICAgIGVtcHR5SW5wdXRTY29wZVNldEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJlbXB0eV9pbnB1dF9zY29wZXNldFwiLFxyXG4gICAgICAgIGRlc2M6IFwiRW1wdHkgaW5wdXQgU2NvcGVTZXQgY2Fubm90IGJlIHByb2Nlc3NlZC5cIlxyXG4gICAgfSxcclxuICAgIERldmljZUNvZGVQb2xsaW5nQ2FuY2VsbGVkOiB7XHJcbiAgICAgICAgY29kZTogXCJkZXZpY2VfY29kZV9wb2xsaW5nX2NhbmNlbGxlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2FsbGVyIGhhcyBjYW5jZWxsZWQgdG9rZW4gZW5kcG9pbnQgcG9sbGluZyBkdXJpbmcgZGV2aWNlIGNvZGUgZmxvdyBieSBzZXR0aW5nIERldmljZUNvZGVSZXF1ZXN0LmNhbmNlbCA9IHRydWUuXCJcclxuICAgIH0sXHJcbiAgICBEZXZpY2VDb2RlRXhwaXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwiZGV2aWNlX2NvZGVfZXhwaXJlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiRGV2aWNlIGNvZGUgaXMgZXhwaXJlZC5cIlxyXG4gICAgfSxcclxuICAgIE5vQWNjb3VudEluU2lsZW50UmVxdWVzdDoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fYWNjb3VudF9pbl9zaWxlbnRfcmVxdWVzdFwiLFxyXG4gICAgICAgIGRlc2M6IFwiUGxlYXNlIHBhc3MgYW4gYWNjb3VudCBvYmplY3QsIHNpbGVudCBmbG93IGlzIG5vdCBzdXBwb3J0ZWQgd2l0aG91dCBhY2NvdW50IGluZm9ybWF0aW9uXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgY2xpZW50IGNvZGUgcnVubmluZyBvbiB0aGUgYnJvd3Nlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiBjbGllbnQgaW5mbyBvYmplY3QgZG9lc24ndCBkZWNvZGUgY29ycmVjdGx5LlxyXG4gICAgICogQHBhcmFtIGNhdWdodEVycm9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biBpZiB0aGUgY2xpZW50IGluZm8gaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gcmF3Q2xpZW50SW5mb1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb0VtcHR5RXJyb3IocmF3Q2xpZW50SW5mbzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9FbXB0eUVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0VtcHR5RXJyb3IuZGVzY30gR2l2ZW4gT2JqZWN0OiAke3Jhd0NsaWVudEluZm99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBpZCB0b2tlbiBleHRyYWN0aW9uIGVycm9ycyBvdXQuXHJcbiAgICAgKiBAcGFyYW0gZXJyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGNhdWdodEV4dHJhY3Rpb25FcnJvcjogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5QYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuUGFyc2luZ0Vycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEV4dHJhY3Rpb25FcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIGlkIHRva2VuIHN0cmluZyBpcyBudWxsIG9yIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIGludmFsaWRSYXdUb2tlblN0cmluZ1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3IoaW52YWxpZFJhd1Rva2VuU3RyaW5nOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5kZXNjfSBSYXcgSUQgVG9rZW4gVmFsdWU6ICR7aW52YWxpZFJhd1Rva2VuU3RyaW5nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgZW5kcG9pbnQgZGlzY292ZXJ5IGRvZXNuJ3QgY29tcGxldGUgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoZXJyRGV0YWlsOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5kZXNjfSBEZXRhaWw6ICR7ZXJyRGV0YWlsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgYXV0aG9yaXR5IHR5cGUgaXMgbm90IHZhbGlkLlxyXG4gICAgICogQHBhcmFtIGludmFsaWRBdXRob3JpdHlFcnJvclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZEF1dGhvcml0eVR5cGVFcnJvcihnaXZlblVybDogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGUuZGVzY30gR2l2ZW4gVXJsOiAke2dpdmVuVXJsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgaGFzaCBjYW5ub3QgYmUgZGVzZXJpYWxpemVkLlxyXG4gICAgICogQHBhcmFtIGludmFsaWRBdXRob3JpdHlFcnJvclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSGFzaE5vdERlc2VyaWFsaXplZEVycm9yKGhhc2hQYXJhbU9iajogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmhhc2hOb3REZXNlcmlhbGl6ZWQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5oYXNoTm90RGVzZXJpYWxpemVkLmRlc2N9IEdpdmVuIE9iamVjdDogJHtoYXNoUGFyYW1PYmp9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHR3byBzdGF0ZXMgZG8gbm90IG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU3RhdGVNaXNtYXRjaEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5zdGF0ZU1pc21hdGNoRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5zdGF0ZU1pc21hdGNoRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBub25jZSBkb2VzIG5vdCBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgY2FjaGVkIGFjY291bnQgYW5kIHJlc3BvbnNlIGFjY291bnQgZG8gbm90IG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNjb3VudE1pc21hdGNoRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjY291bnRNaXNtYXRjaEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNjb3VudE1pc21hdGNoRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3IgaWYgaWRUb2tlbiBpcyBub3QgY29ycmVjdGx5IGZvcm1lZFxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRJZFRva2VuRXJyb3IoaWRUb2tlbjogSWRUb2tlbikgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZElkVG9rZW4uY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5kZXNjfSBHaXZlbiB0b2tlbjogJHtKU09OLnN0cmluZ2lmeShpZFRva2VuKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIGF1dGhvcml6YXRpb24gY29kZSByZXF1aXJlZCBmb3IgYSB0b2tlbiByZXF1ZXN0IGlzIG51bGwgb3IgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVOb1Rva2Vuc0ZvdW5kRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vVG9rZW5zRm91bmRFcnJvci5jb2RlLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vVG9rZW5zRm91bmRFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgaW4gY2FjaGUgcGFyc2luZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNhY2hlUGFyc2VFcnJvcihjYWNoZUtleTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhY2hlUGFyc2VFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhY2hlUGFyc2VFcnJvci5kZXNjfSBDYWNoZSBrZXk6ICR7Y2FjaGVLZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiByZW5ld2luZyB0b2tlbiB3aXRob3V0IGxvZ2luLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gbXVsdGlwbGUgdG9rZW5zIGFyZSBpbiBjYWNoZSBmb3IgdGhlIGdpdmVuIHNjb3BlLlxyXG4gICAgICogQHBhcmFtIHNjb3BlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5jb2RlLFxyXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5kZXNjfS5gKTtcclxuICAgIH1cclxuXHRcclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gbXVsdGlwbGUgdG9rZW5zIGFyZSBpbiBjYWNoZSBmb3IgdGhlIGdpdmVuIHNjb3BlLlxyXG4gICAgICogQHBhcmFtIHNjb3BlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZU1hdGNoaW5nQWNjb3VudHNJbkNhY2hlRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdBY2NvdW50cy5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdBY2NvdW50cy5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIG5vIGF1dGggY29kZSBvciByZWZyZXNoIHRva2VuIGlzIGdpdmVuIHRvIFNlcnZlclRva2VuUmVxdWVzdFBhcmFtZXRlcnMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVUb2tlblJlcXVlc3RDYW5ub3RCZU1hZGVFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZXF1ZXN0Q2Fubm90QmVNYWRlLmNvZGUsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZXF1ZXN0Q2Fubm90QmVNYWRlLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gYXR0ZW1wdGluZyB0byBhcHBlbmQgYSBudWxsLCB1bmRlZmluZWQgb3IgZW1wdHkgc2NvcGUgdG8gYSBzZXRcclxuICAgICAqIEBwYXJhbSBnaXZlblNjb3BlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBcHBlbmRFbXB0eVNjb3BlVG9TZXRFcnJvcihnaXZlblNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYXBwZW5kRW1wdHlTY29wZUVycm9yLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuYXBwZW5kRW1wdHlTY29wZUVycm9yLmRlc2N9IEdpdmVuIFNjb3BlOiAke2dpdmVuU2NvcGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGFwcGVuZCBhIG51bGwsIHVuZGVmaW5lZCBvciBlbXB0eSBzY29wZSB0byBhIHNldFxyXG4gICAgICogQHBhcmFtIGdpdmVuU2NvcGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVJlbW92ZUVtcHR5U2NvcGVGcm9tU2V0RXJyb3IoZ2l2ZW5TY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnJlbW92ZUVtcHR5U2NvcGVFcnJvci5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnJlbW92ZUVtcHR5U2NvcGVFcnJvci5kZXNjfSBHaXZlbiBTY29wZTogJHtnaXZlblNjb3BlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gYXR0ZW1wdGluZyB0byBhcHBlbmQgbnVsbCBvciBlbXB0eSBTY29wZVNldC5cclxuICAgICAqIEBwYXJhbSBhcHBlbmRFcnJvclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXBwZW5kU2NvcGVTZXRFcnJvcihhcHBlbmRFcnJvcjogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFwcGVuZFNjb3BlU2V0RXJyb3IuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5hcHBlbmRTY29wZVNldEVycm9yLmRlc2N9IERldGFpbCBFcnJvcjogJHthcHBlbmRFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiBTY29wZVNldCBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqIEBwYXJhbSBnaXZlblNjb3BlU2V0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eUlucHV0U2NvcGVTZXRFcnJvcihnaXZlblNjb3BlU2V0OiBTY29wZVNldCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbXB0eUlucHV0U2NvcGVTZXRFcnJvci5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVtcHR5SW5wdXRTY29wZVNldEVycm9yLmRlc2N9IEdpdmVuIFNjb3BlU2V0OiAke2dpdmVuU2NvcGVTZXR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3IgaWYgdXNlciBzZXRzIENhbmNlbGxhdGlvblRva2VuLmNhbmNlbCA9IHRydWUgZHVyaW5nIHBvbGxpbmcgb2YgdG9rZW4gZW5kcG9pbnQgZHVyaW5nIGRldmljZSBjb2RlIGZsb3dcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZURldmljZUNvZGVDYW5jZWxsZWRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuRGV2aWNlQ29kZVBvbGxpbmdDYW5jZWxsZWQuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5EZXZpY2VDb2RlUG9sbGluZ0NhbmNlbGxlZC5kZXNjfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIGlmIGRldmljZSBjb2RlIGlzIGV4cGlyZWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZURldmljZUNvZGVFeHBpcmVkRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLkRldmljZUNvZGVFeHBpcmVkLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuRGV2aWNlQ29kZUV4cGlyZWQuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIHNpbGVudCByZXF1ZXN0cyBhcmUgbWFkZSB3aXRob3V0IGFuIGFjY291bnQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVOb0FjY291bnRJblNpbGVudFJlcXVlc3RFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuTm9BY2NvdW50SW5TaWxlbnRSZXF1ZXN0LmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuTm9BY2NvdW50SW5TaWxlbnRSZXF1ZXN0LmRlc2N9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IERlY29kZWRKd3QgfSBmcm9tIFwiLi4vYWNjb3VudC9EZWNvZGVkSnd0XCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVjb2RlIGEgSldUXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGp3dFRva2VuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVKd3Qoand0VG9rZW46IHN0cmluZyk6IERlY29kZWRKd3Qge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGp3dFRva2VuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3Ioand0VG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGlkVG9rZW5QYXJ0c1JlZ2V4LmV4ZWMoand0VG9rZW4pO1xyXG4gICAgICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoYEdpdmVuIHRva2VuIGlzIG1hbGZvcm1lZDogJHtKU09OLnN0cmluZ2lmeShqd3RUb2tlbil9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNyYWNrZWRUb2tlbjogRGVjb2RlZEp3dCA9IHtcclxuICAgICAgICAgICAgaGVhZGVyOiBtYXRjaGVzWzFdLFxyXG4gICAgICAgICAgICBKV1NQYXlsb2FkOiBtYXRjaGVzWzJdLFxyXG4gICAgICAgICAgICBKV1NTaWc6IG1hdGNoZXNbM11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjcmFja2VkVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIHN0cmluZyBpcyBlbXB0eS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3RyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSBcInVuZGVmaW5lZFwiIHx8ICFzdHIgfHwgMCA9PT0gc3RyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgc3RyaW5nIGludG8gYW4gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBxdWVyeVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcXVlcnlTdHJpbmdUb09iamVjdDxUPihxdWVyeTogc3RyaW5nKTogVCB7XHJcbiAgICAgICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+OyAvLyBSZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcclxuICAgICAgICBjb25zdCBwbCA9IC9cXCsvZztcclxuICAgICAgICBjb25zdCBzZWFyY2ggPSAvKFteJj1dKyk9KFteJl0qKS9nO1xyXG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHMucmVwbGFjZShwbCwgXCIgXCIpKTtcclxuICAgICAgICBjb25zdCBvYmo6IHt9ID0ge307XHJcbiAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XHJcbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIG9ialtkZWNvZGUobWF0Y2hbMV0pXSA9IGRlY29kZShtYXRjaFsyXSk7XHJcbiAgICAgICAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmltcyBlbnRyaWVzIGFuZCBjb252ZXJ0cyB0aGVtIHRvIGxvd2VyIGNhc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJpbUFuZENvbnZlcnRBcnJheUVudHJpZXNUb0xvd2VyQ2FzZShhcnI6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gYXJyLm1hcChlbnRyeSA9PiBlbnRyeS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGVtcHR5IHN0cmluZ3MgZnJvbSBhcnJheVxyXG4gICAgICogQHBhcmFtIGFyclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVtb3ZlRW1wdHlTdHJpbmdzRnJvbUFycmF5KGFycjogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBhcnIuZmlsdGVyKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFTdHJpbmdVdGlscy5pc0VtcHR5KGVudHJ5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHBrZyBmcm9tIFwiLi4vLi4vcGFja2FnZS5qc29uXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IExvZ2dlck9wdGlvbnMgfSBmcm9tIFwiLi4vY29uZmlnL0NsaWVudENvbmZpZ3VyYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBsb2dnZXIgbWVzc2FnZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMb2dnZXJNZXNzYWdlT3B0aW9ucyA9IHtcclxuICAgIGxvZ0xldmVsOiBMb2dMZXZlbCxcclxuICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXHJcbiAgICBjb250YWluc1BpaT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0Pzogc3RyaW5nXHJcbn07XHJcblxyXG4vKipcclxuICogTG9nIG1lc3NhZ2UgbGV2ZWwuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XHJcbiAgICBFcnJvcixcclxuICAgIFdhcm5pbmcsXHJcbiAgICBJbmZvLFxyXG4gICAgVmVyYm9zZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIHRvIHNlbmQgdGhlIG1lc3NhZ2VzIHRvLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyQ2FsbGJhY2sge1xyXG4gICAgKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB3aGljaCBmYWNpbGl0YXRlcyBsb2dnaW5nIG9mIG1lc3NhZ2VzIHRvIGEgc3BlY2lmaWMgcGxhY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuXHJcbiAgICAvLyBDb3JyZWxhdGlvbiBJRCBmb3IgcmVxdWVzdCwgdXN1YWxseSBzZXQgYnkgdXNlci5cclxuICAgIHByaXZhdGUgY29ycmVsYXRpb25JZDogc3RyaW5nO1xyXG5cclxuICAgIC8vIEN1cnJlbnQgbG9nIGxldmVsLCBkZWZhdWx0cyB0byBpbmZvLlxyXG4gICAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xyXG5cclxuICAgIC8vIEJvb2xlYW4gZGVzY3JpYmluZyB3aGV0aGVyIFBJSSBsb2dnaW5nIGlzIGFsbG93ZWQuXHJcbiAgICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8vIENhbGxiYWNrIHRvIHNlbmQgbWVzc2FnZXMgdG8uXHJcbiAgICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXJPcHRpb25zOiBMb2dnZXJPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGxvZ2dlck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbGxiYWNrID0gbG9nZ2VyT3B0aW9ucy5sb2dnZXJDYWxsYmFjaztcclxuICAgICAgICAgICAgdGhpcy5waWlMb2dnaW5nRW5hYmxlZCA9IGxvZ2dlck9wdGlvbnMucGlpTG9nZ2luZ0VuYWJsZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSBsb2dnZXJPcHRpb25zLmxvZ0xldmVsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZyBtZXNzYWdlIHdpdGggcmVxdWlyZWQgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2dNZXNzYWdlKGxvZ01lc3NhZ2U6IHN0cmluZywgb3B0aW9uczogTG9nZ2VyTWVzc2FnZU9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoKG9wdGlvbnMubG9nTGV2ZWwgPiB0aGlzLmxldmVsKSB8fCAoIXRoaXMucGlpTG9nZ2luZ0VuYWJsZWQgJiYgb3B0aW9ucy5jb250YWluc1BpaSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbG9nSGVhZGVyOiBzdHJpbmcgPSBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY29ycmVsYXRpb25JZCkgPyBgWyR7dGltZXN0YW1wfV0gOiBgIDogYFske3RpbWVzdGFtcH1dIDogWyR7dGhpcy5jb3JyZWxhdGlvbklkfV1gO1xyXG4gICAgICAgIGNvbnN0IGxvZyA9IGAke2xvZ0hlYWRlcn0gOiAke3BrZy52ZXJzaW9ufSA6ICR7TG9nTGV2ZWxbb3B0aW9ucy5sb2dMZXZlbF19IC0gJHtsb2dNZXNzYWdlfWA7XHJcbiAgICAgICAgLy8gZGVidWcoYG1zYWw6JHtMb2dMZXZlbFtvcHRpb25zLmxvZ0xldmVsXX0ke29wdGlvbnMuY29udGFpbnNQaWkgPyBcIi1QaWlcIjogXCJcIn0ke29wdGlvbnMuY29udGV4dCA/IGA6JHtvcHRpb25zLmNvbnRleHR9YCA6IFwiXCJ9YCkobG9nTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlQ2FsbGJhY2sob3B0aW9ucy5sb2dMZXZlbCwgbG9nLCBvcHRpb25zLmNvbnRhaW5zUGlpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgY2FsbGJhY2sgd2l0aCBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBleGVjdXRlQ2FsbGJhY2sobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FsbGJhY2sobGV2ZWwsIG1lc3NhZ2UsIGNvbnRhaW5zUGlpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGVycm9yIG1lc3NhZ2VzLlxyXG4gICAgICovXHJcbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiBmYWxzZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGVycm9yIG1lc3NhZ2VzIHdpdGggUElJLlxyXG4gICAgICovXHJcbiAgICBlcnJvclBpaShtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3Mgd2FybmluZyBtZXNzYWdlcy5cclxuICAgICAqL1xyXG4gICAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3Mgd2FybmluZyBtZXNzYWdlcyB3aXRoIFBJSS5cclxuICAgICAqL1xyXG4gICAgd2FybmluZ1BpaShtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ6IGNvcnJlbGF0aW9uSWQgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyBpbmZvIG1lc3NhZ2VzLlxyXG4gICAgICovXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5JbmZvLFxyXG4gICAgICAgICAgICBjb250YWluc1BpaTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ6IGNvcnJlbGF0aW9uSWQgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyBpbmZvIG1lc3NhZ2VzIHdpdGggUElJLlxyXG4gICAgICovXHJcbiAgICBpbmZvUGlpKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5JbmZvLFxyXG4gICAgICAgICAgICBjb250YWluc1BpaTogdHJ1ZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIHZlcmJvc2UgbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIHZlcmJvc2UobWVzc2FnZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKG1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgbG9nTGV2ZWw6IExvZ0xldmVsLlZlcmJvc2UsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiBmYWxzZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIHZlcmJvc2UgbWVzc2FnZXMgd2l0aCBQSUkuXHJcbiAgICAgKi9cclxuICAgIHZlcmJvc2VQaWkobWVzc2FnZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKG1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgbG9nTGV2ZWw6IExvZ0xldmVsLlZlcmJvc2UsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciBQSUkgTG9nZ2luZyBpcyBlbmFibGVkIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaXNQaWlMb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWlMb2dnaW5nRW5hYmxlZCB8fCBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIExJQlJBUllfTkFNRTogXCJNU0FMLkpTXCIsXHJcbiAgICBTS1U6IFwibXNhbC5qcy5jb21tb25cIixcclxuICAgIC8vIFByZWZpeCBmb3IgYWxsIGxpYnJhcnkgY2FjaGUgZW50cmllc1xyXG4gICAgQ0FDSEVfUFJFRklYOiBcIm1zYWxcIixcclxuICAgIC8vIGRlZmF1bHQgYXV0aG9yaXR5XHJcbiAgICBERUZBVUxUX0FVVEhPUklUWTogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCIsXHJcbiAgICAvLyBBREZTIFN0cmluZ1xyXG4gICAgQURGUzogXCJhZGZzXCIsXHJcbiAgICAvLyBEZWZhdWx0IEFBRCBJbnN0YW5jZSBEaXNjb3ZlcnkgRW5kcG9pbnRcclxuICAgIEFBRF9JTlNUQU5DRV9ESVNDT1ZFUllfRU5EUFQ6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vbi9kaXNjb3ZlcnkvaW5zdGFuY2VcIixcclxuICAgIC8vIFJlc291cmNlIGRlbGltaXRlciAtIHVzZWQgZm9yIGNlcnRhaW4gY2FjaGUgZW50cmllc1xyXG4gICAgUkVTT1VSQ0VfREVMSU06IFwifFwiLFxyXG4gICAgLy8gUGxhY2Vob2xkZXIgZm9yIG5vbi1leGlzdGVudCBhY2NvdW50IGlkcy9vYmplY3RzXHJcbiAgICBOT19BQ0NPVU5UOiBcIk5PX0FDQ09VTlRcIixcclxuICAgIC8vIENsYWltc1xyXG4gICAgQ0xBSU1TOiBcImNsYWltc1wiLFxyXG4gICAgLy8gQ29uc3VtZXIgVVRJRFxyXG4gICAgQ09OU1VNRVJfVVRJRDogXCI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWRcIixcclxuICAgIC8vIERlZmF1bHQgc2NvcGVzXHJcbiAgICBPUEVOSURfU0NPUEU6IFwib3BlbmlkXCIsXHJcbiAgICBQUk9GSUxFX1NDT1BFOiBcInByb2ZpbGVcIixcclxuICAgIE9GRkxJTkVfQUNDRVNTX1NDT1BFOiBcIm9mZmxpbmVfYWNjZXNzXCIsXHJcbiAgICAvLyBEZWZhdWx0IHJlc3BvbnNlIHR5cGUgZm9yIGF1dGhvcml6YXRpb24gY29kZSBmbG93XHJcbiAgICBDT0RFX1JFU1BPTlNFX1RZUEU6IFwiY29kZVwiLFxyXG4gICAgQ09ERV9HUkFOVF9UWVBFOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxyXG4gICAgUlRfR1JBTlRfVFlQRTogXCJyZWZyZXNoX3Rva2VuXCIsXHJcbiAgICBGUkFHTUVOVF9SRVNQT05TRV9NT0RFOiBcImZyYWdtZW50XCIsXHJcbiAgICBTMjU2X0NPREVfQ0hBTExFTkdFX01FVEhPRDogXCJTMjU2XCIsXHJcbiAgICBVUkxfRk9STV9DT05URU5UX1RZUEU6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIixcclxuICAgIEFVVEhPUklaQVRJT05fUEVORElORzogXCJhdXRob3JpemF0aW9uX3BlbmRpbmdcIixcclxuICAgIE5PVF9ERUZJTkVEOiBcIm5vdF9kZWZpbmVkXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXF1ZXN0IGhlYWRlciBuYW1lc1xyXG4gKi9cclxuZXhwb3J0IGVudW0gSGVhZGVyTmFtZXMge1xyXG4gICAgQ09OVEVOVF9UWVBFID0gXCJDb250ZW50LVR5cGVcIlxyXG59XHJcblxyXG4vKipcclxuICogUGVyc2lzdGVudCBjYWNoZSBrZXlzIE1TQUwgd2hpY2ggc3RheSB3aGlsZSB1c2VyIGlzIGxvZ2dlZCBpbi5cclxuICovXHJcbmV4cG9ydCBlbnVtIFBlcnNpc3RlbnRDYWNoZUtleXMge1xyXG4gICAgSURfVE9LRU4gPSBcImlkdG9rZW5cIixcclxuICAgIENMSUVOVF9JTkZPID0gXCJjbGllbnQuaW5mb1wiLFxyXG4gICAgQURBTF9JRF9UT0tFTiA9IFwiYWRhbC5pZHRva2VuXCIsXHJcbiAgICBFUlJPUiA9IFwiZXJyb3JcIixcclxuICAgIEVSUk9SX0RFU0MgPSBcImVycm9yLmRlc2NyaXB0aW9uXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3Qgb2YgcHJlLWVzdGFibGlzaGVkIHRydXN0ZWQgaG9zdCBVUkxzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFBRFRydXN0ZWRIb3N0TGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICBcImxvZ2luLndpbmRvd3MubmV0XCIsXHJcbiAgICBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIixcclxuICAgIFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiLFxyXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLnVzXCJcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBUT0RPOiBwbGFjZWhvbGRlciBmb3IgZGlzY292ZXJ5IGVuZHBvaW50IGNhbGwuIGR5bmFtaWNhbGx5IGdlbmVyYXRlIHByZWZlcnJlZENhY2hlIGFuZCBjYWNoZUFsaWFzZXMgcGVyIGNsb3VkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRW52aXJvbm1lbnRBbGlhc2VzOiBzdHJpbmdbXSA9IFtcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiLFxyXG4gICAgXCJsb2dpbi53aW5kb3dzLm5ldFwiLFxyXG4gICAgXCJsb2dpbi53aW5kb3dzLXBwZS5uZXRcIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0LmNvbVwiLFxyXG4gICAgXCJzdHMud2luZG93cy5uZXRcIlxyXG5dO1xyXG5leHBvcnQgY29uc3QgUHJlZmVycmVkQ2FjaGVFbnZpcm9ubWVudDogc3RyaW5nID0gXCJsb2dpbi53aW5kb3dzLm5ldFwiO1xyXG5cclxuLyoqXHJcbiAqIFN0cmluZyBjb25zdGFudHMgcmVsYXRlZCB0byBBQUQgQXV0aG9yaXR5XHJcbiAqL1xyXG5leHBvcnQgZW51bSBBQURBdXRob3JpdHlDb25zdGFudHMge1xyXG4gICAgQ09NTU9OID0gXCJjb21tb25cIixcclxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUyA9IFwiY29uc3VtZXJzXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIEtleXMgaW4gdGhlIGhhc2hQYXJhbXMgc2VudCBieSBBQUQgU2VydmVyXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBQURTZXJ2ZXJQYXJhbUtleXMge1xyXG4gICAgQ0xJRU5UX0lEID0gXCJjbGllbnRfaWRcIixcclxuICAgIFJFRElSRUNUX1VSSSA9IFwicmVkaXJlY3RfdXJpXCIsXHJcbiAgICBSRVNQT05TRV9UWVBFID0gXCJyZXNwb25zZV90eXBlXCIsXHJcbiAgICBSRVNQT05TRV9NT0RFID0gXCJyZXNwb25zZV9tb2RlXCIsXHJcbiAgICBHUkFOVF9UWVBFID0gXCJncmFudF90eXBlXCIsXHJcbiAgICBDTEFJTVMgPSBcImNsYWltc1wiLFxyXG4gICAgU0NPUEUgPSBcInNjb3BlXCIsXHJcbiAgICBFUlJPUiA9IFwiZXJyb3JcIixcclxuICAgIEVSUk9SX0RFU0NSSVBUSU9OID0gXCJlcnJvcl9kZXNjcmlwdGlvblwiLFxyXG4gICAgQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NfdG9rZW5cIixcclxuICAgIElEX1RPS0VOID0gXCJpZF90b2tlblwiLFxyXG4gICAgUkVGUkVTSF9UT0tFTiA9IFwicmVmcmVzaF90b2tlblwiLFxyXG4gICAgRVhQSVJFU19JTiA9IFwiZXhwaXJlc19pblwiLFxyXG4gICAgU1RBVEUgPSBcInN0YXRlXCIsXHJcbiAgICBOT05DRSA9IFwibm9uY2VcIixcclxuICAgIFBST01QVCA9IFwicHJvbXB0XCIsXHJcbiAgICBTRVNTSU9OX1NUQVRFID0gXCJzZXNzaW9uX3N0YXRlXCIsXHJcbiAgICBDTElFTlRfSU5GTyA9IFwiY2xpZW50X2luZm9cIixcclxuICAgIENPREUgPSBcImNvZGVcIixcclxuICAgIENPREVfQ0hBTExFTkdFID0gXCJjb2RlX2NoYWxsZW5nZVwiLFxyXG4gICAgQ09ERV9DSEFMTEVOR0VfTUVUSE9EID0gXCJjb2RlX2NoYWxsZW5nZV9tZXRob2RcIixcclxuICAgIENPREVfVkVSSUZJRVIgPSBcImNvZGVfdmVyaWZpZXJcIixcclxuICAgIENMSUVOVF9SRVFVRVNUX0lEID0gXCJjbGllbnQtcmVxdWVzdC1pZFwiLFxyXG4gICAgWF9DTElFTlRfU0tVID0gXCJ4LWNsaWVudC1TS1VcIixcclxuICAgIFhfQ0xJRU5UX1ZFUiA9IFwieC1jbGllbnQtVkVSXCIsXHJcbiAgICBYX0NMSUVOVF9PUyA9IFwieC1jbGllbnQtT1NcIixcclxuICAgIFhfQ0xJRU5UX0NQVSA9IFwieC1jbGllbnQtQ1BVXCIsXHJcbiAgICBQT1NUX0xPR09VVF9VUkkgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLFxyXG4gICAgREVWSUNFX0NPREUgPSBcImRldmljZV9jb2RlXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIElkVG9rZW4gY2xhaW0gc3RyaW5nIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gSWRUb2tlbkNsYWltTmFtZSB7XHJcbiAgICBJU1NVRVIgPSBcImlzc1wiLFxyXG4gICAgT0JKSUQgPSBcIm9pZFwiLFxyXG4gICAgU1VCSkVDVCA9IFwic3ViXCIsXHJcbiAgICBURU5BTlRJRCA9IFwidGlkXCIsXHJcbiAgICBWRVJTSU9OID0gXCJ2ZXJcIixcclxuICAgIFBSRUZfVVNFUk5BTUUgPSBcInByZWZlcnJlZF91c2VybmFtZVwiLFxyXG4gICAgTkFNRSA9IFwibmFtZVwiLFxyXG4gICAgTk9OQ0UgPSBcIm5vbmNlXCIsXHJcbiAgICBFWFBJUkFUSU9OID0gXCJleHBcIixcclxuICAgIEhPTUVfT0JKSUQgPSBcImhvbWVfb2lkXCIsXHJcbiAgICBTRVNTSU9OSUQgPSBcInNpZFwiLFxyXG4gICAgQ0xPVURfSU5TVEFOQ0VfSE9TVE5BTUUgPSBcImNsb3VkX2luc3RhbmNlX2hvc3RfbmFtZVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxyXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcclxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUHJvbXB0VmFsdWUgPSB7XHJcbiAgICBMT0dJTjogXCJsb2dpblwiLFxyXG4gICAgU0VMRUNUX0FDQ09VTlQ6IFwic2VsZWN0X2FjY291bnRcIixcclxuICAgIENPTlNFTlQ6IFwiY29uc2VudFwiLFxyXG4gICAgTk9ORTogXCJub25lXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogU1NPIFR5cGVzIC0gZ2VuZXJhdGVkIHRvIHBvcHVsYXRlIGhpbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBTU09UeXBlcyB7XHJcbiAgICBBQ0NPVU5UID0gXCJhY2NvdW50XCIsXHJcbiAgICBTSUQgPSBcInNpZFwiLFxyXG4gICAgTE9HSU5fSElOVCA9IFwibG9naW5faGludFwiLFxyXG4gICAgSURfVE9LRU4gPSBcImlkX3Rva2VuXCIsXHJcbiAgICBET01BSU5fSElOVCA9IFwiZG9tYWluX2hpbnRcIixcclxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUyA9IFwiY29uc3VtZXJzXCIsXHJcbiAgICBBQ0NPVU5UX0lEID0gXCJhY2NvdW50SWRlbnRpZmllclwiLFxyXG4gICAgSE9NRUFDQ09VTlRfSUQgPSBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNhbGxvd2VkIGV4dHJhIHF1ZXJ5IHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmxhY2tsaXN0ZWRFUVBhcmFtcyA9IFtcclxuICAgIFNTT1R5cGVzLlNJRCxcclxuICAgIFNTT1R5cGVzLkxPR0lOX0hJTlRcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBhbGxvd2VkIHZhbHVlcyBmb3IgY29kZVZlcmlmaWVyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcyA9IHtcclxuICAgIFBMQUlOOiBcInBsYWluXCIsXHJcbiAgICBTMjU2OiBcIlMyNTZcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRob2QgdXNlZCB0byBlbmNvZGUgdGhlIGNvZGUgdmVyaWZpZXIgZm9yIHRoZSBjb2RlIGNoYWxsZW5nZSBwYXJhbWV0ZXIuIGNhbiBiZSBvbmVcclxuICogb2YgcGxhaW4gb3IgczI1Ni4gaWYgZXhjbHVkZWQsIGNvZGUgY2hhbGxlbmdlIGlzIGFzc3VtZWQgdG8gYmUgcGxhaW50ZXh0LiBmb3IgbW9yZVxyXG4gKiBpbmZvcm1hdGlvbiwgc2VlIHRoZSBwa2NlIHJjZjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc2MzZcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2RlQ2hhbGxlbmdlTWV0aG9kVmFsdWVzQXJyYXk6IHN0cmluZ1tdID0gW1xyXG4gICAgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcy5QTEFJTixcclxuICAgIENvZGVDaGFsbGVuZ2VNZXRob2RWYWx1ZXMuUzI1NlxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIGFsbG93ZWQgdmFsdWVzIGZvciByZXNwb25zZV9tb2RlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZXNwb25zZU1vZGUge1xyXG4gICAgUVVFUlkgPSBcInF1ZXJ5XCIsXHJcbiAgICBGUkFHTUVOVCA9IFwiZnJhZ21lbnRcIixcclxuICAgIEZPUk1fUE9TVCA9IFwiZm9ybV9wb3N0XCJcclxufVxyXG5cclxuLyoqXHJcbiAqIGFsbG93ZWQgZ3JhbnRfdHlwZVxyXG4gKi9cclxuZXhwb3J0IGVudW0gR3JhbnRUeXBlIHtcclxuICAgIElNUExJQ0lUX0dSQU5UID0gXCJpbXBsaWNpdFwiLFxyXG4gICAgQVVUSE9SSVpBVElPTl9DT0RFX0dSQU5UID0gXCJhdXRob3JpemF0aW9uX2NvZGVcIixcclxuICAgIENMSUVOVF9DUkVERU5USUFMU19HUkFOVCA9IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXHJcbiAgICBSRVNPVVJDRV9PV05FUl9QQVNTV09SRF9HUkFOVCA9IFwicGFzc3dvcmRcIixcclxuICAgIFJFRlJFU0hfVE9LRU5fR1JBTlQgPSBcInJlZnJlc2hfdG9rZW5cIixcclxuICAgIERFVklDRV9DT0RFX0dSQU5UID0gXCJkZXZpY2VfY29kZVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IHR5cGVzIGluIENhY2hlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZUFjY291bnRUeXBlIHtcclxuICAgIE1TU1RTX0FDQ09VTlRfVFlQRSA9IFwiTVNTVFNcIixcclxuICAgIEFERlNfQUNDT1VOVF9UWVBFID0gXCJBREZTXCIsXHJcbiAgICBNU0FWMV9BQ0NPVU5UX1RZUEUgPSBcIk1TQVwiLFxyXG4gICAgR0VORVJJQ19BQ0NPVU5UX1RZUEUgPSBcIkdlbmVyaWNcIiAvLyBOVExNLCBLZXJiZXJvcywgRkJBLCBCYXNpYyBldGNcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlcGFyYXRvcnMgdXNlZCBpbiBjYWNoZVxyXG4gKi9cclxuZXhwb3J0IGVudW0gU2VwYXJhdG9ycyB7XHJcbiAgICBDQUNIRV9LRVlfU0VQQVJBVE9SID0gXCItXCIsXHJcbiAgICBDTElFTlRfSU5GT19TRVBBUkFUT1IgPSBcIi5cIlxyXG59XHJcblxyXG4vKipcclxuICogQ3JlZGVudGFpbCBUeXBlIHN0b3JlZCBpbiB0aGUgY2FjaGVcclxuICovXHJcbmV4cG9ydCBlbnVtIENyZWRlbnRpYWxUeXBlIHtcclxuICAgIElEX1RPS0VOID0gXCJpZHRva2VuXCIsXHJcbiAgICBBQ0NFU1NfVE9LRU4gPSBcImFjY2Vzc3Rva2VuXCIsXHJcbiAgICBSRUZSRVNIX1RPS0VOID0gXCJyZWZyZXNodG9rZW5cIixcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWRlbnRhaWwgVHlwZSBzdG9yZWQgaW4gdGhlIGNhY2hlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZVNjaGVtYVR5cGUge1xyXG4gICAgQUNDT1VOVCA9IFwiQWNjb3VudFwiLFxyXG4gICAgQ1JFREVOVElBTCA9IFwiQ3JlZGVudGlhbFwiLFxyXG4gICAgQVBQX01FVEFfREFUQSA9IFwiQXBwTWV0YWRhdGFcIixcclxuICAgIFRFTVBPUkFSWSA9IFwiVGVtcENhY2hlXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmUgYWxsIGNhY2hlIHR5cGVzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZVR5cGUge1xyXG4gICAgQURGUyA9IDEwMDEsXHJcbiAgICBNU0EgPSAxMDAyLFxyXG4gICAgTVNTVFMgPSAxMDAzLFxyXG4gICAgR0VORVJJQyA9IDEwMDQsXHJcbiAgICBBQ0NFU1NfVE9LRU4gPSAyMDAxLFxyXG4gICAgUkVGUkVTSF9UT0tFTiA9IDIwMDIsXHJcbiAgICBJRF9UT0tFTiA9IDIwMDMsXHJcbiAgICBBUFBfTUVUQV9EQVRBID0gMzAwMVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1vcmUgQ2FjaGUgcmVsYXRlZCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBjb25zdCBBUFBfTUVUQV9EQVRBID0gXCJhcHBtZXRhZGF0YVwiO1xyXG5leHBvcnQgY29uc3QgQ2xpZW50SW5mbyA9IFwiY2xpZW50X2luZm9cIjtcclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJQ2FjaGVTdG9yYWdlIH0gZnJvbSBcIi4uL2NhY2hlL2ludGVyZmFjZS9JQ2FjaGVTdG9yYWdlXCI7XHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlIH0gZnJvbSBcIi4uL25ldHdvcmsvSU5ldHdvcmtNb2R1bGVcIjtcclxuaW1wb3J0IHsgSUNyeXB0bywgUGtjZUNvZGVzIH0gZnJvbSBcIi4uL2NyeXB0by9JQ3J5cHRvXCI7XHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9BdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgSUxvZ2dlckNhbGxiYWNrLCBMb2dMZXZlbCB9IGZyb20gXCIuLi9sb2dnZXIvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuXHJcbi8vIFRva2VuIHJlbmV3YWwgb2Zmc2V0IGRlZmF1bHQgaW4gc2Vjb25kc1xyXG5jb25zdCBERUZBVUxUX1RPS0VOX1JFTkVXQUxfT0ZGU0VUX1NFQyA9IDMwMDtcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBNU0FMIE1vZHVsZXMgYW5kIGluaXRpYWxpemUgdGhlIGJhc2UgaW50ZXJmYWNlcyBmb3IgTVNBTC5cclxuICpcclxuICogVGhpcyBvYmplY3QgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgaW1wb3J0YW50IGVsZW1lbnRzIG9mIE1TQUwgZnVuY3Rpb25hbGl0eTpcclxuICogLSBsb2dnZXI6IGxvZ2dpbmcgZm9yIGFwcGxpY2F0aW9uXHJcbiAqIC0gc3RvcmFnZTogdGhpcyBpcyB3aGVyZSB5b3UgY29uZmlndXJlIHN0b3JhZ2UgaW1wbGVtZW50YXRpb24uXHJcbiAqIC0gbmV0d29yazogdGhpcyBpcyB3aGVyZSB5b3UgY2FuIGNvbmZpZ3VyZSBuZXR3b3JrIGltcGxlbWVudGF0aW9uLlxyXG4gKiAtIGNyeXB0bzogaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIGZ1bmN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2xpZW50Q29uZmlndXJhdGlvbiA9IHtcclxuICAgIGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyxcclxuICAgIHN5c3RlbU9wdGlvbnM/OiBTeXN0ZW1PcHRpb25zLFxyXG4gICAgbG9nZ2VyT3B0aW9ucz86IExvZ2dlck9wdGlvbnMsXHJcbiAgICBzdG9yYWdlSW50ZXJmYWNlPzogSUNhY2hlU3RvcmFnZSxcclxuICAgIG5ldHdvcmtJbnRlcmZhY2U/OiBJTmV0d29ya01vZHVsZSxcclxuICAgIGNyeXB0b0ludGVyZmFjZT86IElDcnlwdG8sXHJcbiAgICBsaWJyYXJ5SW5mbz86IExpYnJhcnlJbmZvXHJcbn07XHJcblxyXG4vKipcclxuICogQHR5cGUgQXV0aE9wdGlvbnM6IFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgYXV0aCBvcHRpb25zIGluIHRoZSBDb25maWd1cmF0aW9uIG9iamVjdFxyXG4gKlxyXG4gKiAgLSBjbGllbnRJZCAgICAgICAgICAgICAgICAgICAgLSBDbGllbnQgSUQgb2YgeW91ciBhcHAgcmVnaXN0ZXJlZCB3aXRoIG91ciBBcHBsaWNhdGlvbiByZWdpc3RyYXRpb24gcG9ydGFsIDogaHR0cHM6Ly9wb3J0YWwuYXp1cmUuY29tLyNibGFkZS9NaWNyb3NvZnRfQUFEX0lBTS9BY3RpdmVEaXJlY3RvcnlNZW51QmxhZGUvUmVnaXN0ZXJlZEFwcHNQcmV2aWV3IGluIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxyXG4gKiAgLSBhdXRob3JpdHkgICAgICAgICAgICAgICAgICAgLSBZb3UgY2FuIGNvbmZpZ3VyZSBhIHNwZWNpZmljIGF1dGhvcml0eSwgZGVmYXVsdHMgdG8gXCIgXCIgb3IgXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcclxuICovXHJcbmV4cG9ydCB0eXBlIEF1dGhPcHRpb25zID0ge1xyXG4gICAgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIGF1dGhvcml0eT86IEF1dGhvcml0eTtcclxuICAgIGtub3duQXV0aG9yaXRpZXM/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxuICAgIHBvc3RMb2dvdXRSZWRpcmVjdFVyaT86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRlbGVtZXRyeSBDb25maWcgT3B0aW9uc1xyXG4gKiAtIGFwcGxpY2F0aW9uTmFtZSAgICAgICAgICAgICAgLSBOYW1lIG9mIHRoZSBjb25zdW1pbmcgYXBwcyBhcHBsaWNhdGlvblxyXG4gKiAtIGFwcGxpY2F0aW9uVmVyc2lvbiAgICAgICAgICAgLSBWZXJzaW9uIG9mIHRoZSBjb25zdW1pbmcgYXBwbGljYXRpb25cclxuICogLSB0ZWxlbWV0cnlFbWl0dGVyICAgICAgICAgICAgIC0gRnVuY3Rpb24gd2hlcmUgdGVsZW1ldHJ5IGV2ZW50cyBhcmUgZmx1c2hlZCB0b1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGVsZW1ldHJ5T3B0aW9ucyA9IHtcclxuICAgIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgYXBwbGljYXRpb25WZXJzaW9uOiBzdHJpbmc7XHJcbiAgICAvLyBUT0RPLCBhZGQgb25seUFkZEZhaWx1cmVUZWxlbWV0cnkgb3B0aW9uXHJcbn07XHJcblxyXG4vKipcclxuICogTGlicmFyeSBTcGVjaWZpYyBPcHRpb25zXHJcbiAqXHJcbiAqIC0gdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyAgICAtIHNldHMgdGhlIHdpbmRvdyBvZiBvZmZzZXQgbmVlZGVkIHRvIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJ5XHJcbiAqIC0gdGVsZW1ldHJ5ICAgICAgICAgICAgICAgICAgICAtIFRlbGVtZXRyeSBvcHRpb25zIGZvciBsaWJyYXJ5IG5ldHdvcmsgcmVxdWVzdHNcclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbU9wdGlvbnMgPSB7XHJcbiAgICBzdG9yZUluTWVtb3J5PzogYm9vbGVhbjtcclxuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM/OiBudW1iZXI7XHJcbiAgICB0ZWxlbWV0cnk/OiBUZWxlbWV0cnlPcHRpb25zO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvZ2dlciBvcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgbG9nZ2luZyB0aGF0IE1TQUwgZG9lcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIExvZ2dlck9wdGlvbnMgPSB7XHJcbiAgICBsb2dnZXJDYWxsYmFjaz86IElMb2dnZXJDYWxsYmFjayxcclxuICAgIHBpaUxvZ2dpbmdFbmFibGVkPzogYm9vbGVhbixcclxuICAgIGxvZ0xldmVsPzogTG9nTGV2ZWxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUZWxlbWV0cnkgaW5mbyBhYm91dCBsaWJyYXJ5XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMaWJyYXJ5SW5mbyA9IHtcclxuICAgIHNrdTogc3RyaW5nLFxyXG4gICAgdmVyc2lvbjogc3RyaW5nLFxyXG4gICAgY3B1OiBzdHJpbmcsXHJcbiAgICBvczogc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0FVVEhfT1BUSU9OUzogQXV0aE9wdGlvbnMgPSB7XHJcbiAgICBjbGllbnRJZDogXCJcIixcclxuICAgIGF1dGhvcml0eTogbnVsbCxcclxuICAgIGtub3duQXV0aG9yaXRpZXM6IFtdLFxyXG4gICAgcmVkaXJlY3RVcmk6IFwiXCIsXHJcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IFwiXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBTeXN0ZW1PcHRpb25zID0ge1xyXG4gICAgc3RvcmVJbk1lbW9yeTogdHJ1ZSxcclxuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IERFRkFVTFRfVE9LRU5fUkVORVdBTF9PRkZTRVRfU0VDLFxyXG4gICAgdGVsZW1ldHJ5OiBudWxsXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0xPR0dFUl9JTVBMRU1FTlRBVElPTjogTG9nZ2VyT3B0aW9ucyA9IHtcclxuICAgIGxvZ2dlckNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gYWxsb3cgdXNlcnMgdG8gbm90IHNldCBsb2dnZXJDYWxsYmFja1xyXG4gICAgfSxcclxuICAgIHBpaUxvZ2dpbmdFbmFibGVkOiBmYWxzZSxcclxuICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5JbmZvXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX1NUT1JBR0VfSU1QTEVNRU5UQVRJT046IElDYWNoZVN0b3JhZ2UgPSB7XHJcbiAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gY2xlYXIoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9LFxyXG4gICAgY29udGFpbnNLZXk6ICgpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIGNvbnRhaW5zS2V5KCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfSxcclxuICAgIGdldEl0ZW06ICgpOiBvYmplY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gZ2V0SXRlbSgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICBnZXRLZXlzOiAoKTogc3RyaW5nW10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gZ2V0S2V5cygpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVJdGVtOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSByZW1vdmVJdGVtKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfSxcclxuICAgIHNldEl0ZW06ICgpID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIHNldEl0ZW0oKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2FjaGU6ICgpOiBvYmplY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gZ2V0Q2FjaGUoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9LFxyXG4gICAgc2V0Q2FjaGU6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIHNldENhY2hlKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9ORVRXT1JLX0lNUExFTUVOVEFUSU9OOiBJTmV0d29ya01vZHVsZSA9IHtcclxuICAgIGFzeW5jIHNlbmRHZXRSZXF1ZXN0QXN5bmM8VD4oKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiTmV0d29yayBpbnRlcmZhY2UgLSBzZW5kR2V0UmVxdWVzdEFzeW5jKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZW5kUG9zdFJlcXVlc3RBc3luYzxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJOZXR3b3JrIGludGVyZmFjZSAtIHNlbmRQb3N0UmVxdWVzdEFzeW5jKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQ1JZUFRPX0lNUExFTUVOVEFUSU9OOiBJQ3J5cHRvID0ge1xyXG4gICAgY3JlYXRlTmV3R3VpZDogKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiQ3J5cHRvIGludGVyZmFjZSAtIGNyZWF0ZU5ld0d1aWQoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWRcIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfSxcclxuICAgIGJhc2U2NERlY29kZTogKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiQ3J5cHRvIGludGVyZmFjZSAtIGJhc2U2NERlY29kZSgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9LFxyXG4gICAgYmFzZTY0RW5jb2RlOiAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJDcnlwdG8gaW50ZXJmYWNlIC0gYmFzZTY0RW5jb2RlKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZW5lcmF0ZVBrY2VDb2RlcygpOiBQcm9taXNlPFBrY2VDb2Rlcz4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIkNyeXB0byBpbnRlcmZhY2UgLSBnZW5lcmF0ZVBrY2VDb2RlcygpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0xJQlJBUllfSU5GTzogTGlicmFyeUluZm8gPSB7XHJcbiAgICBza3U6IENvbnN0YW50cy5TS1UsXHJcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxyXG4gICAgY3B1OiBcIlwiLFxyXG4gICAgb3M6IFwiXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IHNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyB3aGVuIG5vdCBleHBsaWNpdGx5IGNvbmZpZ3VyZWQgZnJvbSBhcHAgZGV2ZWxvcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSBDb25maWd1cmF0aW9uXHJcbiAqXHJcbiAqIEByZXR1cm5zIENvbmZpZ3VyYXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZENsaWVudENvbmZpZ3VyYXRpb24oXHJcbiAgICB7XHJcbiAgICAgICAgYXV0aE9wdGlvbnM6IHVzZXJBdXRoT3B0aW9ucyxcclxuICAgICAgICBzeXN0ZW1PcHRpb25zOiB1c2VyU3lzdGVtT3B0aW9ucyxcclxuICAgICAgICBsb2dnZXJPcHRpb25zOiB1c2VyTG9nZ2VyT3B0aW9uLFxyXG4gICAgICAgIHN0b3JhZ2VJbnRlcmZhY2U6IHN0b3JhZ2VJbXBsZW1lbnRhdGlvbixcclxuICAgICAgICBuZXR3b3JrSW50ZXJmYWNlOiBuZXR3b3JrSW1wbGVtZW50YXRpb24sXHJcbiAgICAgICAgY3J5cHRvSW50ZXJmYWNlOiBjcnlwdG9JbXBsZW1lbnRhdGlvbixcclxuICAgICAgICBsaWJyYXJ5SW5mbzogbGlicmFyeUluZm9cclxuICAgIH0gOiBDbGllbnRDb25maWd1cmF0aW9uKTogQ2xpZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGhPcHRpb25zOiB7IC4uLkRFRkFVTFRfQVVUSF9PUFRJT05TLCAuLi51c2VyQXV0aE9wdGlvbnMgfSxcclxuICAgICAgICBzeXN0ZW1PcHRpb25zOiB7IC4uLkRFRkFVTFRfU1lTVEVNX09QVElPTlMsIC4uLnVzZXJTeXN0ZW1PcHRpb25zIH0sXHJcbiAgICAgICAgbG9nZ2VyT3B0aW9uczogeyAuLi5ERUZBVUxUX0xPR0dFUl9JTVBMRU1FTlRBVElPTiwgLi4udXNlckxvZ2dlck9wdGlvbiB9LFxyXG4gICAgICAgIHN0b3JhZ2VJbnRlcmZhY2U6IHN0b3JhZ2VJbXBsZW1lbnRhdGlvbiB8fCBERUZBVUxUX1NUT1JBR0VfSU1QTEVNRU5UQVRJT04sXHJcbiAgICAgICAgbmV0d29ya0ludGVyZmFjZTogbmV0d29ya0ltcGxlbWVudGF0aW9uIHx8IERFRkFVTFRfTkVUV09SS19JTVBMRU1FTlRBVElPTixcclxuICAgICAgICBjcnlwdG9JbnRlcmZhY2U6IGNyeXB0b0ltcGxlbWVudGF0aW9uIHx8IERFRkFVTFRfQ1JZUFRPX0lNUExFTUVOVEFUSU9OLFxyXG4gICAgICAgIGxpYnJhcnlJbmZvOiB7IC4uLkRFRkFVTFRfTElCUkFSWV9JTkZPLCAuLi5saWJyYXJ5SW5mbyB9XHJcbiAgICB9O1xyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIGNsYXNzIGNvbnRhaW5pbmcgc3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IGVycm9yIGNvZGVzIGFuZCBtZXNzYWdlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgcmVkaXJlY3RVcmlOb3RTZXQ6IHtcclxuICAgICAgICBjb2RlOiBcInJlZGlyZWN0X3VyaV9lbXB0eVwiLFxyXG4gICAgICAgIGRlc2M6IFwiQSByZWRpcmVjdCBVUkkgaXMgcmVxdWlyZWQgZm9yIGFsbCBjYWxscywgYW5kIG5vbmUgaGFzIGJlZW4gc2V0LlwiXHJcbiAgICB9LFxyXG4gICAgcG9zdExvZ291dFVyaU5vdFNldDoge1xyXG4gICAgICAgIGNvZGU6IFwicG9zdF9sb2dvdXRfdXJpX2VtcHR5XCIsXHJcbiAgICAgICAgZGVzYzogXCJBIHBvc3QgbG9nb3V0IHJlZGlyZWN0IGhhcyBub3QgYmVlbiBzZXQuXCJcclxuICAgIH0sXHJcbiAgICBjbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGFpbXNfcmVxdWVzdF9wYXJzaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJDb3VsZCBub3QgcGFyc2UgdGhlIGdpdmVuIGNsYWltcyByZXF1ZXN0IG9iamVjdC5cIlxyXG4gICAgfSxcclxuICAgIGF1dGhvcml0eVVyaUluc2VjdXJlOiB7XHJcbiAgICAgICAgY29kZTogXCJhdXRob3JpdHlfdXJpX2luc2VjdXJlXCIsXHJcbiAgICAgICAgZGVzYzogXCJBdXRob3JpdHkgVVJJcyBtdXN0IHVzZSBodHRwcy4gIFBsZWFzZSBzZWUgaGVyZSBmb3IgdmFsaWQgYXV0aG9yaXR5IGNvbmZpZ3VyYXRpb24gb3B0aW9uczogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXp1cmUvYWN0aXZlLWRpcmVjdG9yeS9kZXZlbG9wL21zYWwtanMtaW5pdGlhbGl6aW5nLWNsaWVudC1hcHBsaWNhdGlvbnMjY29uZmlndXJhdGlvbi1vcHRpb25zXCJcclxuICAgIH0sXHJcbiAgICB1cmxQYXJzZUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1cmxfcGFyc2VfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlVSTCBjb3VsZCBub3QgYmUgcGFyc2VkIGludG8gYXBwcm9wcmlhdGUgc2VnbWVudHMuXCJcclxuICAgIH0sXHJcbiAgICB1cmxFbXB0eUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJlbXB0eV91cmxfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlVSTCB3YXMgZW1wdHkgb3IgbnVsbC5cIlxyXG4gICAgfSxcclxuICAgIGVtcHR5U2NvcGVzRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImVtcHR5X2lucHV0X3Njb3Blc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgbnVsbCwgdW5kZWZpbmVkIG9yIGVtcHR5IGFycmF5IGJlY2F1c2UgdGhleSBhcmUgcmVxdWlyZWQgdG8gb2J0YWluIGFuIGFjY2VzcyB0b2tlbi5cIlxyXG4gICAgfSxcclxuICAgIG5vbkFycmF5U2NvcGVzRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcIm5vbmFycmF5X2lucHV0X3Njb3Blc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgbm9uLWFycmF5LlwiXHJcbiAgICB9LFxyXG4gICAgY2xpZW50SWRTaW5nbGVTY29wZUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGllbnRpZF9pbnB1dF9zY29wZXNfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNsaWVudCBJRCBjYW4gb25seSBiZSBwcm92aWRlZCBhcyBhIHNpbmdsZSBzY29wZS5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRQcm9tcHQ6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfcHJvbXB0X3ZhbHVlXCIsXHJcbiAgICAgICAgZGVzYzogXCJTdXBwb3J0ZWQgcHJvbXB0IHZhbHVlcyBhcmUgJ2xvZ2luJywgJ3NlbGVjdF9hY2NvdW50JywgJ2NvbnNlbnQnIGFuZCAnbm9uZScuICBQbGVhc2Ugc2VlIGhlcmUgZm9yIHZhbGlkIGNvbmZpZ3VyYXRpb24gb3B0aW9uczogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXp1cmUvYWN0aXZlLWRpcmVjdG9yeS9kZXZlbG9wL21zYWwtanMtaW5pdGlhbGl6aW5nLWNsaWVudC1hcHBsaWNhdGlvbnMjY29uZmlndXJhdGlvbi1vcHRpb25zXCIsXHJcbiAgICB9LFxyXG4gICAgdG9rZW5SZXF1ZXN0RW1wdHlFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidG9rZW5fcmVxdWVzdF9lbXB0eVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVG9rZW4gcmVxdWVzdCB3YXMgZW1wdHkgYW5kIG5vdCBmb3VuZCBpbiBjYWNoZS5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NvZGVfY2hhbGxlbmdlX21ldGhvZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiY29kZV9jaGFsbGVuZ2VfbWV0aG9kIHBhc3NlZCBpcyBpbnZhbGlkLiBWYWxpZCB2YWx1ZXMgYXJlIFxcXCJwbGFpblxcXCIgYW5kIFxcXCJTMjU2XFxcIi5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zOiB7XHJcbiAgICAgICAgY29kZTogXCJwa2NlX3BhcmFtc19taXNzaW5nXCIsXHJcbiAgICAgICAgZGVzYzogXCJCb3RoIHBhcmFtczogY29kZV9jaGFsbGVuZ2UgYW5kIGNvZGVfY2hhbGxlbmdlX21ldGhvZCBhcmUgdG8gYmUgcGFzc2VkIGlmIHRvIGJlIHNlbnQgaW4gdGhlIHJlcXVlc3RcIlxyXG4gICAgfSxcclxuICAgIGIyY0tub3duQXV0aG9yaXRpZXNOb3RTZXQ6IHtcclxuICAgICAgICBjb2RlOiBcImIyY19rbm93bl9hdXRob3JpdGllc19ub3Rfc2V0XCIsXHJcbiAgICAgICAgZGVzYzogXCJNdXN0IHNldCBrbm93biBhdXRob3JpdGllcyB3aGVuIHZhbGlkYXRlQXV0aG9yaXR5IGlzIHNldCB0byBUcnVlIGFuZCB1c2luZyBCMkNcIlxyXG4gICAgfSxcclxuICAgIHVudHJ1c3RlZEF1dGhvcml0eToge1xyXG4gICAgICAgIGNvZGU6IFwidW50cnVzdGVkX2F1dGhvcml0eVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIHByb3ZpZGVkIGF1dGhvcml0eSBpcyBub3QgYSB0cnVzdGVkIGF1dGhvcml0eS4gSWYgdXNpbmcgQjJDLCBwbGVhc2UgaW5jbHVkZSB0aGlzIGF1dGhvcml0eSBpbiB0aGUga25vd25BdXRob3JpdGllcyBjb25maWcgcGFyYW1ldGVyLlwiXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3IgaW4gY29uZmlndXJhdGlvbiBvZiB0aGUgTVNBTC5qcyBsaWJyYXJ5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIENsaWVudEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIHJlZGlyZWN0IHVyaSBpcyBlbXB0eSAobm90IHNldCBieSBjYWxsZXIpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVSZWRpcmVjdFVyaUVtcHR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnJlZGlyZWN0VXJpTm90U2V0LmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UucmVkaXJlY3RVcmlOb3RTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBwb3N0LWxvZ291dCByZWRpcmVjdCB1cmkgaXMgZW1wdHkgKG5vdCBzZXQgYnkgY2FsbGVyKVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlUG9zdExvZ291dFJlZGlyZWN0VXJpRW1wdHlFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UucG9zdExvZ291dFVyaU5vdFNldC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnBvc3RMb2dvdXRVcmlOb3RTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBjbGFpbXMgcmVxdWVzdCBjb3VsZCBub3QgYmUgc3VjY2Vzc2Z1bGx5IHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmRlc2N9IEdpdmVuIHZhbHVlOiAke2NsYWltc1JlcXVlc3RQYXJzZUVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgYXV0aG9yaXR5IHVyaSBpcyBnaXZlbiBhbiBpbnNlY3VyZSBwcm90b2NvbC5cclxuICAgICAqIEBwYXJhbSB1cmxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUluc2VjdXJlQXV0aG9yaXR5VXJpRXJyb3IodXJsU3RyaW5nOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW5zZWN1cmUuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnNlY3VyZS5kZXNjfSBHaXZlbiBVUkk6ICR7dXJsU3RyaW5nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgVVJMIHN0cmluZyBkb2VzIG5vdCBwYXJzZSBpbnRvIHNlcGFyYXRlIHNlZ21lbnRzLlxyXG4gICAgICogQHBhcmFtIHVybFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVXJsUGFyc2VFcnJvcih1cmxQYXJzZUVycm9yOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudXJsUGFyc2VFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVybFBhcnNlRXJyb3IuZGVzY30gR2l2ZW4gRXJyb3I6ICR7dXJsUGFyc2VFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIGlmIFVSTCBzdHJpbmcgaXMgZW1wdHkgb3IgbnVsbC5cclxuICAgICAqIEBwYXJhbSB1cmxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVybEVtcHR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVybEVtcHR5RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS51cmxFbXB0eUVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gc2NvcGVzIGFyZSBub3QgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBpbnB1dFNjb3Blc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPik6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub25BcnJheVNjb3Blc0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXNFcnJvci5kZXNjfSBHaXZlbiBTY29wZXM6ICR7aW5wdXRTY29wZXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFcnJvciB0aHJvd24gd2hlbiBzY29wZXMgYXJlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHNjb3Blc1ZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3IoaW5wdXRTY29wZXM6IEFycmF5PHN0cmluZz4pOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXNFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5U2NvcGVzRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVzOiAke2lucHV0U2NvcGVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gY2xpZW50IGlkIHNjb3BlIGlzIG5vdCBwcm92aWRlZCBhcyBzaW5nbGUgc2NvcGUuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRTY29wZXNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudElkU2luZ2xlU2NvcGVFcnJvcihpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPik6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRJZFNpbmdsZVNjb3BlRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRJZFNpbmdsZVNjb3BlRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVzOiAke2lucHV0U2NvcGVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gcHJvbXB0IGlzIG5vdCBhbiBhbGxvd2VkIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gcHJvbXB0VmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRQcm9tcHRFcnJvcihwcm9tcHRWYWx1ZTogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmRlc2N9IEdpdmVuIHZhbHVlOiAke3Byb21wdFZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gdG9rZW4gcmVxdWVzdCBpcyBlbXB0eSBhbmQgbm90aGluZyBjYWNoZWQgaW4gc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5VG9rZW5SZXF1ZXN0RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS50b2tlblJlcXVlc3RFbXB0eUVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudG9rZW5SZXF1ZXN0RW1wdHlFcnJvci5kZXNjXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIGFuIGludmFsaWQgY29kZV9jaGFsbGVuZ2VfbWV0aG9kIGlzIHBhc3NlZCBieSB0aGUgdXNlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENvZGVDaGFsbGVuZ2VNZXRob2RFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENvZGVDaGFsbGVuZ2VNZXRob2QuZGVzY1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBib3RoIHBhcmFtczogY29kZV9jaGFsbGVuZ2UgYW5kIGNvZGVfY2hhbGxlbmdlX21ldGhvZCBhcmUgbm90IHBhc3NlZCB0b2dldGhlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENvZGVDaGFsbGVuZ2VQYXJhbXNFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENvZGVDaGFsbGVuZ2VQYXJhbXMuZGVzY1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgYW4gZXJyb3Igd2hlbiB0aGUgdXNlciBwYXNzZXMgQjJDIGF1dGhvcml0eSBhbmQgZG9lcyBub3Qgc2V0IGtub3duQXV0aG9yaXRpZXNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUtub3duQXV0aG9yaXRpZXNOb3RTZXRFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYjJjS25vd25BdXRob3JpdGllc05vdFNldC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmIyY0tub3duQXV0aG9yaXRpZXNOb3RTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBwcm92aWRlZCBhdXRob3JpdHkgaXMgbm90IGEgbWVtYmVyIG9mIHRoZSB0cnVzdGVkIGhvc3QgbGlzdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVW50cnVzdGVkQXV0aG9yaXR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVudHJ1c3RlZEF1dGhvcml0eS5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVudHJ1c3RlZEF1dGhvcml0eS5kZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSB9IGZyb20gXCIuLi9zZXJ2ZXIvU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuL0lVcmlcIjtcclxuaW1wb3J0IHsgQUFEQXV0aG9yaXR5Q29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFVybCBvYmplY3QgY2xhc3Mgd2hpY2ggY2FuIHBlcmZvcm0gdmFyaW91cyB0cmFuc2Zvcm1hdGlvbnMgb24gdXJsIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXJsU3RyaW5nIHtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCB1cmwgc3RyaW5nIGZpZWxkXHJcbiAgICBwcml2YXRlIF91cmxTdHJpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgdXJsU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybFN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl91cmxTdHJpbmcgPSB1cmw7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX3VybFN0cmluZykgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmdldEhhc2goKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXJsU3RyaW5nID0gdGhpcy5jYW5vbmljYWxpemVVcmkodXJsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fdXJsU3RyaW5nKSkge1xyXG4gICAgICAgICAgICAvLyBUaHJvd3MgZXJyb3IgaWYgdXJsIGlzIGVtcHR5XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVVcmxFbXB0eUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5zdXJlIHVybHMgYXJlIGxvd2VyIGNhc2UgYW5kIGVuZCB3aXRoIGEgLyBjaGFyYWN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmwgJiYgIXVybC5lbmRzV2l0aChcIi9cIikpIHtcclxuICAgICAgICAgICAgdXJsICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBpZiB1cmxTdHJpbmcgcGFzc2VkIGlzIG5vdCBhIHZhbGlkIGF1dGhvcml0eSBVUkkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUFzVXJpKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEF0dGVtcHRzIHRvIHBhcnNlIHVybCBmb3IgdXJpIGNvbXBvbmVudHNcclxuICAgICAgICBsZXQgY29tcG9uZW50cztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzID0gdGhpcy5nZXRVcmxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVXJsUGFyc2VFcnJvcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIFVSSSBvciBwYXRoIHNlZ21lbnRzIGFyZSBub3QgcGFyc2VhYmxlLlxyXG4gICAgICAgIGlmICghY29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQgfHwgIWNvbXBvbmVudHMuUGF0aFNlZ21lbnRzIHx8IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybFBhcnNlRXJyb3IoYEdpdmVuIHVybCBzdHJpbmc6ICR7dGhpcy51cmxTdHJpbmd9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiB1cmkgaXMgaW5zZWN1cmUuXHJcbiAgICAgICAgaWYoIWNvbXBvbmVudHMuUHJvdG9jb2wgfHwgY29tcG9uZW50cy5Qcm90b2NvbC50b0xvd2VyQ2FzZSgpICE9PSBcImh0dHBzOlwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnNlY3VyZUF1dGhvcml0eVVyaUVycm9yKHRoaXMudXJsU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byByZW1vdmUgcXVlcnkgc3RyaW5nIHBhcmFtcyBmcm9tIHVybC4gUmV0dXJucyB0aGUgbmV3IHVybC5cclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKi9cclxuICAgIHVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcXFxcJlwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgICAgIHRoaXMuX3VybFN0cmluZyA9IHRoaXMudXJsU3RyaW5nLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgICAgIC8vIG5hbWU9dmFsdWUmXHJcbiAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rJlwiKTtcclxuICAgICAgICB0aGlzLl91cmxTdHJpbmcgPSB0aGlzLnVybFN0cmluZy5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuICAgICAgICAvLyBuYW1lPXZhbHVlXHJcbiAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgICAgIHRoaXMuX3VybFN0cmluZyA9IHRoaXMudXJsU3RyaW5nLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVybFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgdXJsIGxpa2UgaHR0cHM6Ly9hOmIvY29tbW9uL2Q/ZT1mI2csIGFuZCBhIHRlbmFudElkLCByZXR1cm5zIGh0dHBzOi8vYTpiL3RlbmFudElkL2RcclxuICAgICAqIEBwYXJhbSBocmVmIFRoZSB1cmxcclxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZCBUaGUgdGVuYW50IGlkIHRvIHJlcGxhY2VcclxuICAgICAqL1xyXG4gICAgcmVwbGFjZVRlbmFudFBhdGgodGVuYW50SWQ6IHN0cmluZyk6IFVybFN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gdGhpcy5nZXRVcmxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgY29uc3QgcGF0aEFycmF5ID0gdXJsT2JqZWN0LlBhdGhTZWdtZW50cztcclxuICAgICAgICBpZiAodGVuYW50SWQgJiYgKHBhdGhBcnJheS5sZW5ndGggIT09IDAgJiYgKHBhdGhBcnJheVswXSA9PT0gQUFEQXV0aG9yaXR5Q29uc3RhbnRzLkNPTU1PTiB8fCBwYXRoQXJyYXlbMF0gPT09IEFBREF1dGhvcml0eUNvbnN0YW50cy5PUkdBTklaQVRJT05TKSkpIHtcclxuICAgICAgICAgICAgcGF0aEFycmF5WzBdID0gdGVuYW50SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVcmxTdHJpbmcuY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgYW5jaG9yIHBhcnQoIykgb2YgdGhlIFVSTFxyXG4gICAgICovXHJcbiAgICBnZXRIYXNoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaGFzaEluZGV4MSA9IHRoaXMudXJsU3RyaW5nLmluZGV4T2YoXCIjXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hJbmRleDIgPSB0aGlzLnVybFN0cmluZy5pbmRleE9mKFwiIy9cIik7XHJcbiAgICAgICAgaWYgKGhhc2hJbmRleDIgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxTdHJpbmcuc3Vic3RyaW5nKGhhc2hJbmRleDIgKyAyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2hJbmRleDEgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxTdHJpbmcuc3Vic3RyaW5nKGhhc2hJbmRleDEgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGRlc2VyaWFsaXplZCBwb3J0aW9uIG9mIFVSTCBoYXNoXHJcbiAgICAgKi9cclxuICAgIGdldERlc2VyaWFsaXplZEhhc2g8VD4oKTogVCB7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IHRoaXMuZ2V0SGFzaCgpO1xyXG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZEhhc2g6IFQgPSBTdHJpbmdVdGlscy5xdWVyeVN0cmluZ1RvT2JqZWN0PFQ+KGhhc2gpO1xyXG4gICAgICAgIGlmICghZGVzZXJpYWxpemVkSGFzaCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSGFzaE5vdERlc2VyaWFsaXplZEVycm9yKEpTT04uc3RyaW5naWZ5KGRlc2VyaWFsaXplZEhhc2gpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplZEhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgb3V0IHRoZSBjb21wb25lbnRzIGZyb20gYSB1cmwgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHZhcmlvdXMgY29tcG9uZW50cy4gUGxlYXNlIGNhY2hlIHRoaXMgdmFsdWUgaW5zdGVkIG9mIGNhbGxpbmcgdGhpcyBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSB1cmwuXHJcbiAgICAgKi9cclxuICAgIGdldFVybENvbXBvbmVudHMoKTogSVVyaSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY3VydGlzei8xMTEzOWIyY2ZjYWVmNGEyNjFlMFxyXG4gICAgICAgIGNvbnN0IHJlZ0V4ID0gUmVnRXhwKFwiXigoW146Lz8jXSspOik/KC8vKFteLz8jXSopKT8oW14/I10qKShcXFxcPyhbXiNdKikpPygjKC4qKSk/XCIpO1xyXG5cclxuICAgICAgICAvLyBJZiB1cmwgc3RyaW5nIGRvZXMgbm90IG1hdGNoIHJlZ0V4LCB3ZSB0aHJvdyBhbiBlcnJvclxyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy51cmxTdHJpbmcubWF0Y2gocmVnRXgpO1xyXG4gICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybFBhcnNlRXJyb3IoYEdpdmVuIHVybCBzdHJpbmc6ICR7dGhpcy51cmxTdHJpbmd9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcmwgY29tcG9uZW50IG9iamVjdFxyXG4gICAgICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIFByb3RvY29sOiBtYXRjaFsxXSxcclxuICAgICAgICAgICAgSG9zdE5hbWVBbmRQb3J0OiBtYXRjaFs0XSxcclxuICAgICAgICAgICAgQWJzb2x1dGVQYXRoOiBtYXRjaFs1XVxyXG4gICAgICAgIH0gYXMgSVVyaTtcclxuXHJcbiAgICAgICAgbGV0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuQWJzb2x1dGVQYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBwYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHMuZmlsdGVyKCh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoID4gMCk7IC8vIHJlbW92ZSBlbXB0eSBlbGVtZW50c1xyXG4gICAgICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xyXG4gICAgICAgIHJldHVybiB1cmxDb21wb25lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdDogSVVyaSk6IFVybFN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVcmxTdHJpbmcodXJsT2JqZWN0LlByb3RvY29sICsgXCIvL1wiICsgdXJsT2JqZWN0Lkhvc3ROYW1lQW5kUG9ydCArIFwiL1wiICsgdXJsT2JqZWN0LlBhdGhTZWdtZW50cy5qb2luKFwiL1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgaGFzaCBvZiB0aGUgVVJMIHN0cmluZyBjb250YWlucyBrbm93biBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNoQ29udGFpbnNLbm93blByb3BlcnRpZXModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eSh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsU3RyaW5nID0gbmV3IFVybFN0cmluZyh1cmwpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB1cmxTdHJpbmcuZ2V0RGVzZXJpYWxpemVkSGFzaDxTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlPigpO1xyXG4gICAgICAgIHJldHVybiAhIShcclxuICAgICAgICAgICAgcGFyYW1ldGVycy5lcnJvcl9kZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmVycm9yIHx8XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuc3RhdGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5VHlwZVwiO1xyXG5pbXBvcnQgeyBUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSB9IGZyb20gXCIuL1RlbmFudERpc2NvdmVyeVJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFVybFN0cmluZyB9IGZyb20gXCIuLy4uL3VybC9VcmxTdHJpbmdcIjtcclxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuLy4uL3VybC9JVXJpXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLy4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBJTmV0d29ya01vZHVsZSB9IGZyb20gXCIuLy4uL25ldHdvcmsvSU5ldHdvcmtNb2R1bGVcIjtcclxuaW1wb3J0IHtOZXR3b3JrUmVzcG9uc2V9IGZyb20gXCIuLlwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBhdXRob3JpdHkgY2xhc3MgdmFsaWRhdGVzIHRoZSBhdXRob3JpdHkgVVJJcyB1c2VkIGJ5IHRoZSB1c2VyLCBhbmQgcmV0cmlldmVzIHRoZSBPcGVuSUQgQ29uZmlndXJhdGlvbiBEYXRhIGZyb20gdGhlXHJcbiAqIGVuZHBvaW50LiBJdCB3aWxsIHN0b3JlIHRoZSBwZXJ0aW5lbnQgY29uZmlnIGRhdGEgaW4gdGhpcyBvYmplY3QgZm9yIHVzZSBkdXJpbmcgdG9rZW4gY2FsbHMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXR5IHtcclxuXHJcbiAgICAvLyBDYW5vbmljYWwgYXV0aG9yaXR5IHVybCBzdHJpbmdcclxuICAgIHByaXZhdGUgX2Nhbm9uaWNhbEF1dGhvcml0eTogVXJsU3RyaW5nO1xyXG4gICAgLy8gQ2Fub25pY2FseSBhdXRob3JpdHkgdXJsIGNvbXBvbmVudHNcclxuICAgIHByaXZhdGUgX2Nhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM6IElVcmk7XHJcbiAgICAvLyBUZW5hbnQgZGlzY292ZXJ5IHJlc3BvbnNlIHJldHJpZXZlZCBmcm9tIE9wZW5JRCBDb25maWd1cmF0aW9uIEVuZHBvaW50XHJcbiAgICBwcml2YXRlIHRlbmFudERpc2NvdmVyeVJlc3BvbnNlOiBUZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcclxuICAgIC8vIE5ldHdvcmsgaW50ZXJmYWNlIHRvIG1ha2UgcmVxdWVzdHMgd2l0aC5cclxuICAgIHByb3RlY3RlZCBuZXR3b3JrSW50ZXJmYWNlOiBJTmV0d29ya01vZHVsZTtcclxuXHJcbiAgICAvLyBTZWUgYWJvdmUgZm9yIEF1dGhvcml0eVR5cGVcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgYXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBVUkwgdGhhdCBpcyB0aGUgYXV0aG9yaXR5IHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eS51cmxTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGNhbm9uaWNhbCBhdXRob3JpdHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2Fub25pY2FsQXV0aG9yaXR5KHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5ID0gbmV3IFVybFN0cmluZyh1cmwpO1xyXG4gICAgICAgIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eS52YWxpZGF0ZUFzVXJpKCk7XHJcbiAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYXV0aG9yaXR5IGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cygpOiBJVXJpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eS5nZXRVcmxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0ZW5hbnQgZm9yIGF1dGhvcml0eS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0ZW5hbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9BdXRoIC9hdXRob3JpemUgZW5kcG9pbnQgZm9yIHJlcXVlc3RzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VUZW5hbnQodGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5hdXRob3JpemF0aW9uX2VuZHBvaW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT0F1dGggL3Rva2VuIGVuZHBvaW50IGZvciByZXF1ZXN0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRva2VuRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLmRpc2NvdmVyeUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZVRlbmFudCh0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLnRva2VuX2VuZHBvaW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGV2aWNlQ29kZUVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLnRva2VuX2VuZHBvaW50LnJlcGxhY2UoXCIvdG9rZW5cIiwgXCIvZGV2aWNlY29kZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT0F1dGggbG9nb3V0IGVuZHBvaW50IGZvciByZXF1ZXN0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVuZFNlc3Npb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlVGVuYW50KHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuZW5kX3Nlc3Npb25fZW5kcG9pbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludERpc2NvdmVyeUluY29tcGxldGVFcnJvcihcIkRpc2NvdmVyeSBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPQXV0aCBpc3N1ZXIgZm9yIHJlcXVlc3RzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VUZW5hbnQodGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5pc3N1ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludERpc2NvdmVyeUluY29tcGxldGVFcnJvcihcIkRpc2NvdmVyeSBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyB0ZW5hbnQgaW4gdXJsIHBhdGggd2l0aCBjdXJyZW50IHRlbmFudC4gRGVmYXVsdHMgdG8gY29tbW9uLlxyXG4gICAgICogQHBhcmFtIHVybFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlcGxhY2VUZW5hbnQodXJsU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB1cmxTdHJpbmcucmVwbGFjZSgve3RlbmFudH18e3RlbmFudGlkfS9nLCB0aGlzLnRlbmFudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBvcGVuIGlkIGNvbmZpZ3VyYXRpb24gZW5kcG9pbnQgZm9yIGFueSBjYW5vbmljYWwgYXV0aG9yaXR5LlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jYW5vbmljYWxBdXRob3JpdHl9djIuMC8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIG5ldHdvcmtJbnRlcmZhY2U6IElOZXR3b3JrTW9kdWxlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHkgPSBhdXRob3JpdHk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eS52YWxpZGF0ZUFzVXJpKCk7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJvb2xlYW4gdGhhdCByZXR1cm5zIHdoZXRociBvciBub3QgdGVuYW50IGRpc2NvdmVyeSBoYXMgYmVlbiBjb21wbGV0ZWQuXHJcbiAgICAgKi9cclxuICAgIGRpc2NvdmVyeUNvbXBsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIE9BdXRoIGVuZHBvaW50cyBmcm9tIHRoZSBnaXZlbiBPcGVuSUQgY29uZmlndXJhdGlvbiBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBkaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8TmV0d29ya1Jlc3BvbnNlPFRlbmFudERpc2NvdmVyeVJlc3BvbnNlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmtJbnRlcmZhY2Uuc2VuZEdldFJlcXVlc3RBc3luYzxUZW5hbnREaXNjb3ZlcnlSZXNwb25zZT4ob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFic3RyYWN0IGZ1bmN0aW9uIHdoaWNoIHdpbGwgZ2V0IHRoZSBPcGVuSUQgY29uZmlndXJhdGlvbiBlbmRwb2ludC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGFzeW5jIGdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gZW5kcG9pbnQgZGlzY292ZXJ5IHRvIGRpc2NvdmVyIHRoZSAvYXV0aG9yaXplLCAvdG9rZW4gYW5kIGxvZ291dCBlbmRwb2ludHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyByZXNvbHZlRW5kcG9pbnRzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgb3BlbklkQ29uZmlnRW5kcG9pbnQgPSBhd2FpdCB0aGlzLmdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmRpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ0VuZHBvaW50KTtcclxuICAgICAgICB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlID0gcmVzcG9uc2UuYm9keTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBdXRob3JpdHkgdHlwZXMgc3VwcG9ydGVkIGJ5IE1TQUwuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBdXRob3JpdHlUeXBlIHtcclxuICAgIEFhZCxcclxuICAgIEFkZnMsXHJcbiAgICBCMkNcclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlUeXBlXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi4vbmV0d29yay9JTmV0d29ya01vZHVsZVwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCMkNBdXRob3JpdHkgY2xhc3MgZXh0ZW5kcyB0aGUgQXV0aG9yaXR5IGNsYXNzIGFuZCBhZGRzIGZ1bmN0aW9uYWxpdHkgc3BlY2lmaWMgdG8gQjJDIEF1dGhvcml0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEIyY0F1dGhvcml0eSBleHRlbmRzIEF1dGhvcml0eSB7XHJcbiAgICBzdGF0aWMgQjJDVHJ1c3RlZEhvc3RMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4gQXV0aG9yaXR5IGlzIEIyQyB0byBwcm92aWRlIGxpc3Qgb2YgdHJ1c3RlZC9hbGxvd2VkIGRvbWFpbnMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRLbm93bkF1dGhvcml0aWVzKGtub3duQXV0aG9yaXRpZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoQjJjQXV0aG9yaXR5LkIyQ1RydXN0ZWRIb3N0TGlzdC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBrbm93bkF1dGhvcml0aWVzLmZvckVhY2goZnVuY3Rpb24oYXV0aG9yaXR5KXtcclxuICAgICAgICAgICAgICAgIEIyY0F1dGhvcml0eS5CMkNUcnVzdGVkSG9zdExpc3QucHVzaChhdXRob3JpdHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGF1dGhvcml0eSB0eXBlIHRvIEIyQ1xyXG4gICAgcHVibGljIGdldCBhdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xyXG4gICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIG5ldHdvcmtJbnRlcmZhY2U6IElOZXR3b3JrTW9kdWxlKSB7XHJcbiAgICAgICAgc3VwZXIoYXV0aG9yaXR5LCBuZXR3b3JrSW50ZXJmYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBPSURDIGVuZHBvaW50XHJcbiAgICAgKiBPbmx5IHJlc3BvbmRzIHdpdGggdGhlIGVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5UcnVzdGVkSG9zdExpc3QodGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVVbnRydXN0ZWRBdXRob3JpdHlFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaG9zdCBpcyBpbiBhIGxpc3Qgb2YgdHJ1c3RlZCBob3N0c1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFRoZSBob3N0IHRvIGxvb2sgdXBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3Q6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBCMmNBdXRob3JpdHkuQjJDVHJ1c3RlZEhvc3RMaXN0LmluZGV4T2YoaG9zdCkgPiAtMTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBJQ3J5cHRvIH0gZnJvbSBcIi4uL2NyeXB0by9JQ3J5cHRvXCI7XHJcblxyXG4vKipcclxuICogQ2xpZW50IGluZm8gb2JqZWN0IHdoaWNoIGNvbnNpc3RzIG9mIHR3byBJRHMuIE5lZWQgdG8gYWRkIG1vcmUgaW5mbyBoZXJlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2xpZW50SW5mbyA9IHtcclxuICAgIHVpZDogc3RyaW5nLFxyXG4gICAgdXRpZDogc3RyaW5nXHJcbn07XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdG8gYnVpbGQgYSBjbGllbnQgaW5mbyBvYmplY3RcclxuICogQHBhcmFtIHJhd0NsaWVudEluZm8gXHJcbiAqIEBwYXJhbSBjcnlwdG8gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDbGllbnRJbmZvKHJhd0NsaWVudEluZm86IHN0cmluZywgY3J5cHRvOiBJQ3J5cHRvKTogQ2xpZW50SW5mbyB7XHJcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xyXG4gICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRW1wdHlFcnJvcihyYXdDbGllbnRJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWRDbGllbnRJbmZvOiBzdHJpbmcgPSBjcnlwdG8uYmFzZTY0RGVjb2RlKHJhd0NsaWVudEluZm8pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWRDbGllbnRJbmZvKSBhcyBDbGllbnRJbmZvO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG4vKipcclxuICogVGhlIFNjb3BlU2V0IGNsYXNzIGNyZWF0ZXMgYSBzZXQgb2Ygc2NvcGVzLiBTY29wZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUsIHVuaXF1ZSB2YWx1ZXMsIHNvIHRoZSBTZXQgb2JqZWN0IGluIEpTIG1ha2VzXHJcbiAqIHRoZSBtb3N0IHNlbnNlIHRvIGltcGxlbWVudCBmb3IgdGhpcyBjbGFzcy4gQWxsIHNjb3BlcyBhcmUgdHJpbW1lZCBhbmQgY29udmVydGVkIHRvIGxvd2VyIGNhc2Ugc3RyaW5ncyB0byBlbnN1cmUgdW5pcXVlbmVzcyBvZiBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjb3BlU2V0IHs7XHJcbiAgICAvLyBTY29wZXMgYXMgYSBTZXQgb2Ygc3RyaW5nc1xyXG4gICAgcHJpdmF0ZSBzY29wZXM6IFNldDxzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlucHV0U2NvcGVzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgLy8gRmlsdGVyIGVtcHR5IHN0cmluZyBhbmQgbnVsbC91bmRlZmluZWQgYXJyYXkgaXRlbXNcclxuICAgICAgICBjb25zdCBzY29wZUFyciA9IGlucHV0U2NvcGVzID8gU3RyaW5nVXRpbHMudHJpbUFuZENvbnZlcnRBcnJheUVudHJpZXNUb0xvd2VyQ2FzZShbLi4uaW5wdXRTY29wZXNdKSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSW5wdXQgPSBzY29wZUFyciA/IFN0cmluZ1V0aWxzLnJlbW92ZUVtcHR5U3RyaW5nc0Zyb21BcnJheShzY29wZUFycikgOiBbXTtcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHZhbGlkYXRlIGZ1bmN0aW9uIHRocm93cyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxyXG4gICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlcyhmaWx0ZXJlZElucHV0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZXMgPSBuZXcgU2V0PHN0cmluZz4oZmlsdGVyZWRJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgU2NvcGVTZXQgZnJvbSBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRTY29wZVN0cmluZ1xyXG4gICAgICogQHBhcmFtIGFwcENsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzUmVxdWlyZWRcclxuICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVN0cmluZyhpbnB1dFNjb3BlU3RyaW5nOiBzdHJpbmcpOiBTY29wZVNldCB7XHJcbiAgICAgICAgaW5wdXRTY29wZVN0cmluZyA9IGlucHV0U2NvcGVTdHJpbmcgfHwgXCJcIjtcclxuICAgICAgICBjb25zdCBpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPiA9IGlucHV0U2NvcGVTdHJpbmcuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgU2NvcGVTZXQoaW5wdXRTY29wZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byB2YWxpZGF0ZSB0aGUgc2NvcGVzIGlucHV0IHBhcmFtZXRlciByZXF1ZXN0ZWQgIGJ5IHRoZSBkZXZlbG9wZXIuXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlucHV0U2NvcGVzIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2NvcGVzUmVxdWlyZWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2NvcGVzIGFycmF5IGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgdmFsaWRhdGVJbnB1dFNjb3BlcyhpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHNjb3BlcyBhcmUgcmVxdWlyZWQgYnV0IG5vdCBnaXZlbiBvciBpcyBhbiBlbXB0eSBhcnJheVxyXG4gICAgICAgIGlmICghaW5wdXRTY29wZXMgfHwgaW5wdXRTY29wZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlTY29wZXNBcnJheUVycm9yKGlucHV0U2NvcGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIGdpdmVuIHNjb3BlIGlzIHByZXNlbnQgaW4gdGhpcyBzZXQgb2Ygc2NvcGVzLlxyXG4gICAgICogQHBhcmFtIHNjb3BlXHJcbiAgICAgKi9cclxuICAgIGNvbnRhaW5zU2NvcGUoc2NvcGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nVXRpbHMuaXNFbXB0eShzY29wZSkgPyB0aGlzLnNjb3Blcy5oYXMoc2NvcGUpIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIHNldCBvZiBzY29wZXMgaXMgcHJlc2VudCBpbiB0aGlzIHNldCBvZiBzY29wZXMuXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVTZXRcclxuICAgICAqL1xyXG4gICAgY29udGFpbnNTY29wZVNldChzY29wZVNldDogU2NvcGVTZXQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXNjb3BlU2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZXMuc2l6ZSA+PSBzY29wZVNldC5zY29wZXMuc2l6ZSAmJiBzY29wZVNldC5hc0FycmF5KCkuZXZlcnkoc2NvcGUgPT4gdGhpcy5jb250YWluc1Njb3BlKHNjb3BlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kcyBzaW5nbGUgc2NvcGUgaWYgcGFzc2VkXHJcbiAgICAgKiBAcGFyYW0gbmV3U2NvcGVcclxuICAgICAqL1xyXG4gICAgYXBwZW5kU2NvcGUobmV3U2NvcGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KG5ld1Njb3BlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQXBwZW5kRW1wdHlTY29wZVRvU2V0RXJyb3IobmV3U2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3Blcy5hZGQobmV3U2NvcGUudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kcyBtdWx0aXBsZSBzY29wZXMgaWYgcGFzc2VkXHJcbiAgICAgKiBAcGFyYW0gbmV3U2NvcGVzXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZFNjb3BlcyhuZXdTY29wZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZXdTY29wZXMuZm9yRWFjaChuZXdTY29wZSA9PiB0aGlzLnNjb3Blcy5hZGQobmV3U2NvcGUpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVBcHBlbmRTY29wZVNldEVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgZWxlbWVudCBmcm9tIHNldCBvZiBzY29wZXMuXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlU2NvcGUoc2NvcGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHNjb3BlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUmVtb3ZlRW1wdHlTY29wZUZyb21TZXRFcnJvcihzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGVzLmRlbGV0ZShzY29wZS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21iaW5lcyBhbiBhcnJheSBvZiBzY29wZXMgd2l0aCB0aGUgY3VycmVudCBzZXQgb2Ygc2NvcGVzLlxyXG4gICAgICogQHBhcmFtIG90aGVyU2NvcGVzXHJcbiAgICAgKi9cclxuICAgIHVuaW9uU2NvcGVTZXRzKG90aGVyU2NvcGVzOiBTY29wZVNldCk6IFNldDxzdHJpbmc+IHtcclxuICAgICAgICBpZiAoIW90aGVyU2NvcGVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbXB0eUlucHV0U2NvcGVTZXRFcnJvcihvdGhlclNjb3Blcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU2V0PHN0cmluZz4oWy4uLm90aGVyU2NvcGVzLmFzQXJyYXkoKSwgLi4uQXJyYXkuZnJvbSh0aGlzLnNjb3BlcyldKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHNjb3BlcyBpbnRlcnNlY3QgYmV0d2VlbiB0aGlzIHNldCBhbmQgYW5vdGhlci5cclxuICAgICAqIEBwYXJhbSBvdGhlclNjb3BlcyBcclxuICAgICAqL1xyXG4gICAgaW50ZXJzZWN0aW5nU2NvcGVTZXRzKG90aGVyU2NvcGVzOiBTY29wZVNldCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghb3RoZXJTY29wZXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVtcHR5SW5wdXRTY29wZVNldEVycm9yKG90aGVyU2NvcGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaW9uU2NvcGVzID0gdGhpcy51bmlvblNjb3BlU2V0cyhvdGhlclNjb3Blcyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBhbGxvdyBvZmZsaW5lX2FjY2VzcyB0byBiZSB0aGUgb25seSBpbnRlcnNlY3Rpbmcgc2NvcGVcclxuICAgICAgICBjb25zdCBzaXplT3RoZXJTY29wZXMgPSBvdGhlclNjb3Blcy5nZXRTY29wZUNvdW50KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVRoaXNTY29wZXMgPSB0aGlzLmdldFNjb3BlQ291bnQoKTtcclxuICAgICAgICBjb25zdCBzaXplVW5pb25TY29wZXMgPSB1bmlvblNjb3Blcy5zaXplO1xyXG4gICAgICAgIHJldHVybiBzaXplVW5pb25TY29wZXMgPCAoc2l6ZVRoaXNTY29wZXMgKyBzaXplT3RoZXJTY29wZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBzaXplIG9mIHNldCBvZiBzY29wZXMuXHJcbiAgICAgKi9cclxuICAgIGdldFNjb3BlQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHNjb3BlcyBhcyBhbiBhcnJheSBvZiBzdHJpbmcgdmFsdWVzXHJcbiAgICAgKi9cclxuICAgIGFzQXJyYXkoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zY29wZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJpbnRzIHNjb3BlcyBpbnRvIGEgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwcmludFNjb3BlcygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3Blcykge1xyXG4gICAgICAgICAgICBjb25zdCBzY29wZUFyciA9IHRoaXMuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVBcnIuam9pbihcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFNlcGFyYXRvcnMsXHJcbiAgICBDcmVkZW50aWFsVHlwZSxcclxuICAgIEVudmlyb25tZW50QWxpYXNlcyxcclxuICAgIENvbnN0YW50cyxcclxuICAgIEFQUF9NRVRBX0RBVEEsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJQWNjb3VudCB9IGZyb20gXCIuLi8uLi9hY2NvdW50L0lBY2NvdW50XCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi4vZW50aXRpZXMvQWNjb3VudEVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSBcIi4uL2VudGl0aWVzL0NyZWRlbnRpYWxcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vLi4vcmVxdWVzdC9TY29wZVNldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhY2hlSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIHRvIGNvbnZlcnQgc2VyaWFsaXplZCBkYXRhIHRvIG9iamVjdFxyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGpzb25cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRvT2JqZWN0PFQ+KG9iajogVCwganNvbjogb2JqZWN0KTogVCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eU5hbWUgaW4ganNvbikge1xyXG4gICAgICAgICAgICBvYmpbcHJvcGVydHlOYW1lXSA9IGpzb25bcHJvcGVydHlOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlbHBlciBmdW5jdGlvbiB0byBzd2FwIGtleXMgYW5kIG9iamVjdHNcclxuICAgICAqIEBwYXJhbSBjYWNoZU1hcFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3dhcChjYWNoZU1hcDogb2JqZWN0KTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCByZXQgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjYWNoZU1hcCkge1xyXG4gICAgICAgICAgICByZXRbY2FjaGVNYXBba2V5XV0gPSBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gbWFwIGFuIG9iaiB0byBhIG5ldyBrZXlzZXRcclxuICAgICAqIEBwYXJhbSBvYmpBVFxyXG4gICAgICogQHBhcmFtIGtleXNNYXBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlbmFtZUtleXMob2JqQVQ6IE9iamVjdCwga2V5c01hcDogT2JqZWN0KTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBPYmplY3Qua2V5cyhvYmpBVCkubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iakFUW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IGtleXNNYXBba2V5XSB8fCBrZXk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBbbmV3S2V5XTogb2JqQVRba2V5XSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCAuLi5rZXlWYWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1hdGNoSG9tZUFjY291bnRJZChcclxuICAgICAgICBlbnRpdHk6IEFjY291bnRFbnRpdHkgfCBDcmVkZW50aWFsLFxyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IHN0cmluZ1xyXG4gICAgKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGhvbWVBY2NvdW50SWQgPT09IGVudGl0eS5ob21lQWNjb3VudElkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XHJcbiAgICAgKiAvLyBUT0RPOiBBZGQgQ2xvdWQgc3BlY2lmaWMgYWxpYXNlcyBiYXNlZCBvbiBjdXJyZW50IGNsb3VkXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXRjaEVudmlyb25tZW50KFxyXG4gICAgICAgIGVudGl0eTogQWNjb3VudEVudGl0eSB8IENyZWRlbnRpYWwsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHN0cmluZ1xyXG4gICAgKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBFbnZpcm9ubWVudEFsaWFzZXMuaW5jbHVkZXMoZW52aXJvbm1lbnQpICYmXHJcbiAgICAgICAgICAgIEVudmlyb25tZW50QWxpYXNlcy5pbmNsdWRlcyhlbnRpdHkuZW52aXJvbm1lbnQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsVHlwZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWF0Y2hDcmVkZW50aWFsVHlwZShlbnRpdHk6IENyZWRlbnRpYWwsIGNyZWRlbnRpYWxUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZW50aXR5LmNyZWRlbnRpYWxUeXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVudGl0eVxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXRjaENsaWVudElkKGVudGl0eTogQ3JlZGVudGlhbCwgY2xpZW50SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjbGllbnRJZCA9PT0gZW50aXR5LmNsaWVudElkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWF0Y2hSZWFsbShlbnRpdHk6IEFjY291bnRFbnRpdHkgfCBDcmVkZW50aWFsLCByZWFsbTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWxtID09PSBlbnRpdHkucmVhbG07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRhcmdldCBzY29wZXMgYXJlIGEgc3Vic2V0IG9mIHRoZSBjdXJyZW50IGVudGl0eSdzIHNjb3BlcywgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICogQHBhcmFtIGVudGl0eVxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWF0Y2hUYXJnZXQoZW50aXR5OiBDcmVkZW50aWFsLCB0YXJnZXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eVNjb3BlU2V0OiBTY29wZVNldCA9IFNjb3BlU2V0LmZyb21TdHJpbmcoZW50aXR5LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFRhcmdldFNjb3BlU2V0OiBTY29wZVNldCA9IFNjb3BlU2V0LmZyb21TdHJpbmcodGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gZW50aXR5U2NvcGVTZXQuY29udGFpbnNTY29wZVNldChyZXF1ZXN0VGFyZ2V0U2NvcGVTZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBgQ3JlZGVudGlhbFR5cGVgXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDcmVkZW50aWFsVHlwZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU47XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZihDcmVkZW50aWFsVHlwZS5JRF9UT0tFTikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTjtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKENyZWRlbnRpYWxUeXBlLlJFRlJFU0hfVE9LRU4pICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBDb25zdGFudHMuTk9UX0RFRklORUQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGlmIGEgZ2l2ZW4gY2FjaGUgZW50aXR5IGlzIG9mIHRoZSB0eXBlIGFwcG1ldGFkYXRhXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FwcE1ldGFkYXRhKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5pbmRleE9mKEFQUF9NRVRBX0RBVEEpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhY2NvdW50IGtleSBmcm9tIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGFjY291bnRJbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQWNjb3VudENhY2hlS2V5KGFjY291bnRJbnRlcmZhY2U6IElBY2NvdW50KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50S2V5ID0gW1xyXG4gICAgICAgICAgICBhY2NvdW50SW50ZXJmYWNlLmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGFjY291bnRJbnRlcmZhY2UuZW52aXJvbm1lbnQgfHwgXCJcIixcclxuICAgICAgICAgICAgYWNjb3VudEludGVyZmFjZS50ZW5hbnRJZCB8fCBcIlwiLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBhY2NvdW50S2V5LmpvaW4oU2VwYXJhdG9ycy5DQUNIRV9LRVlfU0VQQVJBVE9SKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGVzIEFjY291bnQgSWQgZm9yIGtleXNcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVBY2NvdW50SWRGb3JDYWNoZUtleShcclxuICAgICAgICBob21lQWNjb3VudElkOiBzdHJpbmcsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHN0cmluZ1xyXG4gICAgKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQ6IEFycmF5PHN0cmluZz4gPSBbaG9tZUFjY291bnRJZCwgZW52aXJvbm1lbnRdO1xyXG4gICAgICAgIHJldHVybiBhY2NvdW50SWQuam9pbihTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgY3JlZGVudGlhbCBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQ3JlZGVudGlhbENhY2hlS2V5KFxyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IHN0cmluZyxcclxuICAgICAgICBlbnZpcm9ubWVudDogc3RyaW5nLFxyXG4gICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZSxcclxuICAgICAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHJlYWxtPzogc3RyaW5nLFxyXG4gICAgICAgIHRhcmdldD86IHN0cmluZyxcclxuICAgICAgICBmYW1pbHlJZD86IHN0cmluZ1xyXG4gICAgKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsS2V5ID0gW1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQWNjb3VudElkRm9yQ2FjaGVLZXkoaG9tZUFjY291bnRJZCwgZW52aXJvbm1lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbElkRm9yQ2FjaGVLZXkoXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsVHlwZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudElkLFxyXG4gICAgICAgICAgICAgICAgcmVhbG0sXHJcbiAgICAgICAgICAgICAgICBmYW1pbHlJZFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlVGFyZ2V0Rm9yQ2FjaGVLZXkodGFyZ2V0KSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbEtleS5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBDcmVkZW50aWFsIElkIGZvciBrZXlzXHJcbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbFR5cGVcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gZmFtaWx5SWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVDcmVkZW50aWFsSWRGb3JDYWNoZUtleShcclxuICAgICAgICBjcmVkZW50aWFsVHlwZTogQ3JlZGVudGlhbFR5cGUsXHJcbiAgICAgICAgY2xpZW50SWQ6IHN0cmluZyxcclxuICAgICAgICByZWFsbT86IHN0cmluZyxcclxuICAgICAgICBmYW1pbHlJZD86IHN0cmluZ1xyXG4gICAgKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBjbGllbnRPckZhbWlseUlkID1cclxuICAgICAgICAgICAgY3JlZGVudGlhbFR5cGUgPT09IENyZWRlbnRpYWxUeXBlLlJFRlJFU0hfVE9LRU5cclxuICAgICAgICAgICAgICAgID8gZmFtaWx5SWQgfHwgY2xpZW50SWRcclxuICAgICAgICAgICAgICAgIDogY2xpZW50SWQ7XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbElkOiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsVHlwZSxcclxuICAgICAgICAgICAgY2xpZW50T3JGYW1pbHlJZCxcclxuICAgICAgICAgICAgcmVhbG0gfHwgXCJcIixcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbElkLmpvaW4oU2VwYXJhdG9ycy5DQUNIRV9LRVlfU0VQQVJBVE9SKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgdGFyZ2V0IGtleSBjb21wb25lbnQgYXMgcGVyIHNjaGVtYTogPHRhcmdldD5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVUYXJnZXRGb3JDYWNoZUtleShzY29wZXM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIChzY29wZXMgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG9JQWNjb3VudChhY2NvdW50T2JqOiBBY2NvdW50RW50aXR5KTogSUFjY291bnQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IGFjY291bnRPYmouaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGFjY291bnRPYmouZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIHRlbmFudElkOiBhY2NvdW50T2JqLnJlYWxtLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogYWNjb3VudE9iai51c2VybmFtZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgU2VwYXJhdG9ycyxcclxuICAgIENhY2hlQWNjb3VudFR5cGUsXHJcbiAgICBFbnZpcm9ubWVudEFsaWFzZXMsXHJcbiAgICBQcmVmZXJyZWRDYWNoZUVudmlyb25tZW50LFxyXG4gICAgQ2FjaGVUeXBlLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4uLy4uL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuLi8uLi9hY2NvdW50L0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgSUNyeXB0byB9IGZyb20gXCIuLi8uLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5pbXBvcnQgeyBidWlsZENsaWVudEluZm8gfSBmcm9tIFwiLi4vLi4vYWNjb3VudC9DbGllbnRJbmZvXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IENhY2hlSGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL0NhY2hlSGVscGVyXCI7XHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGRlZmluZXMgcmVxdWlyZWQgYW5kIG9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIGFuIEFjY291bnQgZmllbGQgKGJhc2VkIG9uIHVuaXZlcnNhbCBjYWNoZSBzY2hlbWEgaW1wbGVtZW50ZWQgYnkgYWxsIE1TQUxzKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY291bnRFbnRpdHkge1xyXG4gICAgaG9tZUFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcclxuICAgIHJlYWxtOiBzdHJpbmc7XHJcbiAgICBsb2NhbEFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGF1dGhvcml0eVR5cGU6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBjbGllbnRJbmZvPzogc3RyaW5nO1xyXG4gICAgbGFzdE1vZGlmaWNhdGlvblRpbWU/OiBzdHJpbmc7XHJcbiAgICBsYXN0TW9kaWZpY2F0aW9uQXBwPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgQWNjb3VudCBJZCBrZXkgY29tcG9uZW50IGFzIHBlciB0aGUgc2NoZW1hOiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWNjb3VudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudElkOiBBcnJheTxzdHJpbmc+ID0gW3RoaXMuaG9tZUFjY291bnRJZCwgdGhpcy5lbnZpcm9ubWVudF07XHJcbiAgICAgICAgcmV0dXJuIGFjY291bnRJZC5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIEFjY291bnQgQ2FjaGUgS2V5IGFzIHBlciB0aGUgc2NoZW1hOiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+LTxyZWFsbSo+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWNjb3VudEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDYWNoZUhlbHBlci5nZW5lcmF0ZUFjY291bnRDYWNoZUtleSh7XHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IHRoaXMuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IHRoaXMuZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIHRlbmFudElkOiB0aGlzLnJlYWxtLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgY2FjaGUgKGluIHRoaXMgY2FzZSBhY2NvdW50KVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVR5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYXV0aG9yaXR5VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENhY2hlQWNjb3VudFR5cGUuQURGU19BQ0NPVU5UX1RZUEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FjaGVUeXBlLkFERlM7XHJcbiAgICAgICAgICAgIGNhc2UgQ2FjaGVBY2NvdW50VHlwZS5NU0FWMV9BQ0NPVU5UX1RZUEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FjaGVUeXBlLk1TQTtcclxuICAgICAgICAgICAgY2FzZSBDYWNoZUFjY291bnRUeXBlLk1TU1RTX0FDQ09VTlRfVFlQRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuTVNTVFM7XHJcbiAgICAgICAgICAgIGNhc2UgQ2FjaGVBY2NvdW50VHlwZS5HRU5FUklDX0FDQ09VTlRfVFlQRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuR0VORVJJQztcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmV4cGVjdGVkIGFjY291bnQgdHlwZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgQWNjb3VudCBjYWNoZSBmcm9tIElkVG9rZW4sIGNsaWVudEluZm8gYW5kIGF1dGhvcml0eS9wb2xpY3lcclxuICAgICAqIEBwYXJhbSBjbGllbnRJbmZvXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIHBvbGljeVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNjb3VudChcclxuICAgICAgICBjbGllbnRJbmZvOiBzdHJpbmcsXHJcbiAgICAgICAgYXV0aG9yaXR5OiBBdXRob3JpdHksXHJcbiAgICAgICAgaWRUb2tlbjogSWRUb2tlbixcclxuICAgICAgICBwb2xpY3k6IHN0cmluZyxcclxuICAgICAgICBjcnlwdG86IElDcnlwdG9cclxuICAgICk6IEFjY291bnRFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnRFbnRpdHkgPSBuZXcgQWNjb3VudEVudGl0eSgpO1xyXG5cclxuICAgICAgICBhY2NvdW50LmF1dGhvcml0eVR5cGUgPSBDYWNoZUFjY291bnRUeXBlLk1TU1RTX0FDQ09VTlRfVFlQRTtcclxuICAgICAgICBhY2NvdW50LmNsaWVudEluZm8gPSBjbGllbnRJbmZvO1xyXG4gICAgICAgIC8vIFRCRDogQ2xhcmlmeSBcInBvbGljeVwiIGFkZGl0aW9uXHJcbiAgICAgICAgY29uc3QgY2xpZW50SW5mb09iaiA9IGJ1aWxkQ2xpZW50SW5mbyhjbGllbnRJbmZvLCBjcnlwdG8pO1xyXG4gICAgICAgIGNvbnN0IGhvbWVBY2NvdW50SWQgPSBgJHtjbGllbnRJbmZvT2JqLnVpZH0ke1NlcGFyYXRvcnMuQ0xJRU5UX0lORk9fU0VQQVJBVE9SfSR7Y2xpZW50SW5mb09iai51dGlkfWA7XHJcbiAgICAgICAgYWNjb3VudC5ob21lQWNjb3VudElkID1cclxuICAgICAgICAgICAgcG9saWN5ICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IGhvbWVBY2NvdW50SWQgKyBTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IgKyBwb2xpY3lcclxuICAgICAgICAgICAgICAgIDogaG9tZUFjY291bnRJZDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxRW52aXJvbm1lbnQgPVxyXG4gICAgICAgICAgICBhdXRob3JpdHkuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQ7XHJcbiAgICAgICAgYWNjb3VudC5lbnZpcm9ubWVudCA9IEVudmlyb25tZW50QWxpYXNlcy5pbmNsdWRlcyhyZXFFbnZpcm9ubWVudClcclxuICAgICAgICAgICAgPyBQcmVmZXJyZWRDYWNoZUVudmlyb25tZW50XHJcbiAgICAgICAgICAgIDogcmVxRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgICAgIGFjY291bnQucmVhbG0gPSBpZFRva2VuLmNsYWltcy50aWQ7XHJcblxyXG4gICAgICAgIGlmIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgIC8vIEhvdyBkbyB5b3UgYWNjb3VudCBmb3IgTVNBIENJRCBoZXJlP1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbEFjY291bnRJZCA9ICFTdHJpbmdVdGlscy5pc0VtcHR5KGlkVG9rZW4uY2xhaW1zLm9pZClcclxuICAgICAgICAgICAgICAgID8gaWRUb2tlbi5jbGFpbXMub2lkXHJcbiAgICAgICAgICAgICAgICA6IGlkVG9rZW4uY2xhaW1zLnNpZDtcclxuICAgICAgICAgICAgYWNjb3VudC5sb2NhbEFjY291bnRJZCA9IGxvY2FsQWNjb3VudElkO1xyXG4gICAgICAgICAgICBhY2NvdW50LnVzZXJuYW1lID0gaWRUb2tlbi5jbGFpbXMucHJlZmVycmVkX3VzZXJuYW1lO1xyXG4gICAgICAgICAgICBhY2NvdW50Lm5hbWUgPSBpZFRva2VuLmNsYWltcy5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZCBBREZTIGFjY291bnQgdHlwZVxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFERlNBY2NvdW50KFxyXG4gICAgICAgIGF1dGhvcml0eTogQXV0aG9yaXR5LFxyXG4gICAgICAgIGlkVG9rZW46IElkVG9rZW5cclxuICAgICk6IEFjY291bnRFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnRFbnRpdHkgPSBuZXcgQWNjb3VudEVudGl0eSgpO1xyXG5cclxuICAgICAgICBhY2NvdW50LmF1dGhvcml0eVR5cGUgPSBDYWNoZUFjY291bnRUeXBlLkFERlNfQUNDT1VOVF9UWVBFO1xyXG4gICAgICAgIGFjY291bnQuaG9tZUFjY291bnRJZCA9IGlkVG9rZW4uY2xhaW1zLnN1YjtcclxuICAgICAgICBhY2NvdW50LmVudmlyb25tZW50ID1cclxuICAgICAgICAgICAgYXV0aG9yaXR5LmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0O1xyXG4gICAgICAgIGFjY291bnQudXNlcm5hbWUgPSBpZFRva2VuLmNsYWltcy51cG47XHJcbiAgICAgICAgLy8gYWRkIHVuaXF1ZU5hbWUgdG8gY2xhaW1zXHJcbiAgICAgICAgLy8gYWNjb3VudC5uYW1lID0gaWRUb2tlbi5jbGFpbXMudW5pcXVlTmFtZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTZXBhcmF0b3JzLCBDcmVkZW50aWFsVHlwZSwgQ2FjaGVUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgdHlwZSBmb3IgY3JlZGVudGlhbHMgdG8gYmUgc3RvcmVkIGluIHRoZSBjYWNoZTogZWc6IEFDQ0VTU19UT0tFTiwgSURfVE9LRU4gZXRjXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3JlZGVudGlhbCB7XHJcbiAgICBob21lQWNjb3VudElkOiBzdHJpbmc7XHJcbiAgICBlbnZpcm9ubWVudDogc3RyaW5nO1xyXG4gICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlO1xyXG4gICAgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHNlY3JldDogc3RyaW5nO1xyXG4gICAgZmFtaWx5SWQ/OiBzdHJpbmc7XHJcbiAgICByZWFsbT86IHN0cmluZztcclxuICAgIHRhcmdldD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIEFjY291bnQgSWQga2V5IGNvbXBvbmVudCBhcyBwZXIgdGhlIHNjaGVtYTogPGhvbWVfYWNjb3VudF9pZD4tPGVudmlyb25tZW50PlxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZUFjY291bnRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZDogQXJyYXk8c3RyaW5nPiA9IFt0aGlzLmhvbWVBY2NvdW50SWQsIHRoaXMuZW52aXJvbm1lbnRdO1xyXG4gICAgICAgIHJldHVybiBhY2NvdW50SWQuam9pbihTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBDcmVkZW50aWFsIElkIGtleSBjb21wb25lbnQgYXMgcGVyIHRoZSBzY2hlbWE6IDxjcmVkZW50aWFsX3R5cGU+LTxjbGllbnRfaWQ+LTxyZWFsbT5cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVDcmVkZW50aWFsSWQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBjbGllbnRPckZhbWlseUlkID0gQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTlxyXG4gICAgICAgICAgICA/IHRoaXMuZmFtaWx5SWQgfHwgdGhpcy5jbGllbnRJZFxyXG4gICAgICAgICAgICA6IHRoaXMuY2xpZW50SWQ7XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbElkOiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxUeXBlLFxyXG4gICAgICAgICAgICBjbGllbnRPckZhbWlseUlkLFxyXG4gICAgICAgICAgICB0aGlzLnJlYWxtIHx8IFwiXCIsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxJZC5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRhcmdldCBrZXkgY29tcG9uZW50IGFzIHBlciBzY2hlbWE6IDx0YXJnZXQ+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlVGFyZ2V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnRhcmdldCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGVzIGNyZWRlbnRpYWwga2V5XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQ3JlZGVudGlhbEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxLZXkgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBY2NvdW50SWQoKSxcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxJZCgpLFxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlVGFyZ2V0KCksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxLZXkuam9pbihTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBjYWNoZSAoaW4gdGhpcyBjYXNlIGNyZWRlbnRpYWwpXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlVHlwZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jcmVkZW50aWFsVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENyZWRlbnRpYWxUeXBlLklEX1RPS0VOOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhY2hlVHlwZS5JRF9UT0tFTjtcclxuICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FjaGVUeXBlLkFDQ0VTU19UT0tFTjtcclxuICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhY2hlVHlwZS5SRUZSRVNIX1RPS0VOO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuZXhwZWN0ZWQgY3JlZGVudGlhbCB0eXBlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSBcIi4vQ3JlZGVudGlhbFwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJRF9UT0tFTiBDYWNoZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElkVG9rZW5FbnRpdHkgZXh0ZW5kcyBDcmVkZW50aWFsIHtcclxuICAgIHJlYWxtOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgSWRUb2tlbkVudGl0eVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvblJlc3VsdFxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuRW50aXR5KFxyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IHN0cmluZyxcclxuICAgICAgICBlbnZpcm9ubWVudDogc3RyaW5nLFxyXG4gICAgICAgIGlkVG9rZW46IHN0cmluZyxcclxuICAgICAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHRlbmFudElkOiBzdHJpbmdcclxuICAgICk6IElkVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGlkVG9rZW5FbnRpdHkgPSBuZXcgSWRUb2tlbkVudGl0eSgpO1xyXG5cclxuICAgICAgICBpZFRva2VuRW50aXR5LmNyZWRlbnRpYWxUeXBlID0gQ3JlZGVudGlhbFR5cGUuSURfVE9LRU47XHJcbiAgICAgICAgaWRUb2tlbkVudGl0eS5ob21lQWNjb3VudElkID0gaG9tZUFjY291bnRJZDtcclxuICAgICAgICBpZFRva2VuRW50aXR5LmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICAgICAgaWRUb2tlbkVudGl0eS5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgICAgIGlkVG9rZW5FbnRpdHkuc2VjcmV0ID0gaWRUb2tlbjtcclxuICAgICAgICBpZFRva2VuRW50aXR5LnJlYWxtID0gdGVuYW50SWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBpZFRva2VuRW50aXR5O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3Mgd2hpY2ggZXhwb3NlcyBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGRhdGUgYW5kIHRpbWUgb3BlcmF0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUaW1lVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBjdXJyZW50IHRpbWUgaW4gVW5peCB0aW1lIChzZWNvbmRzKS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5vd1NlY29uZHMoKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBEYXRlLmdldFRpbWUoKSByZXR1cm5zIGluIG1pbGxpc2Vjb25kcy5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAuMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSBcIi4vQ3JlZGVudGlhbFwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgVGltZVV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1RpbWVVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFDQ0VTU19UT0tFTiBDcmVkZW50aWFsIFR5cGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkVudGl0eSBleHRlbmRzIENyZWRlbnRpYWwge1xyXG4gICAgcmVhbG06IHN0cmluZztcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgY2FjaGVkQXQ6IHN0cmluZztcclxuICAgIGV4cGlyZXNPbjogc3RyaW5nO1xyXG4gICAgZXh0ZW5kZWRFeHBpcmVzT24/OiBzdHJpbmc7XHJcbiAgICByZWZyZXNoT24/OiBzdHJpbmc7XHJcbiAgICBrZXlJZD86IHN0cmluZzsgLy8gZm9yIFBPUCBhbmQgU1NIIHRva2VuVHlwZXNcclxuICAgIHRva2VuVHlwZT86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBBY2Nlc3NUb2tlbkVudGl0eVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIGFjY2Vzc1Rva2VuXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZFxyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICogQHBhcmFtIGV4cGlyZXNPblxyXG4gICAgICogQHBhcmFtIGV4dEV4cGlyZXNPblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNjZXNzVG9rZW5FbnRpdHkoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpbmcsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IHN0cmluZyxcclxuICAgICAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHRlbmFudElkOiBzdHJpbmcsXHJcbiAgICAgICAgc2NvcGVzOiBzdHJpbmcsXHJcbiAgICAgICAgZXhwaXJlc09uOiBudW1iZXIsXHJcbiAgICAgICAgZXh0RXhwaXJlc09uOiBudW1iZXJcclxuICAgICk6IEFjY2Vzc1Rva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCBhdEVudGl0eTogQWNjZXNzVG9rZW5FbnRpdHkgPSBuZXcgQWNjZXNzVG9rZW5FbnRpdHkoKTtcclxuXHJcbiAgICAgICAgYXRFbnRpdHkuaG9tZUFjY291bnRJZCA9IGhvbWVBY2NvdW50SWQ7XHJcbiAgICAgICAgYXRFbnRpdHkuY3JlZGVudGlhbFR5cGUgPSBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU47XHJcbiAgICAgICAgYXRFbnRpdHkuc2VjcmV0ID0gYWNjZXNzVG9rZW47XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gVGltZVV0aWxzLm5vd1NlY29uZHMoKTtcclxuICAgICAgICBhdEVudGl0eS5jYWNoZWRBdCA9IGN1cnJlbnRUaW1lLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIFRva2VuIGV4cGlyeSB0aW1lLlxyXG4gICAgICAgIC8vIFRoaXMgdmFsdWUgc2hvdWxkIGJlIOKAr2NhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGN1cnJlbnQgVVRDIHRpbWUgbWVhc3VyZWQgbG9jYWxseSBhbmQgdGhlIHZhbHVlIOKAr2V4cGlyZXNfaW4gUmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcgaW4gSlNPTi5cclxuICAgICAgICBhdEVudGl0eS5leHBpcmVzT24gPSBleHBpcmVzT24udG9TdHJpbmcoKTtcclxuICAgICAgICBhdEVudGl0eS5leHRlbmRlZEV4cGlyZXNPbiA9IGV4dEV4cGlyZXNPbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBhdEVudGl0eS5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgICAgIGF0RW50aXR5LmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgYXRFbnRpdHkucmVhbG0gPSB0ZW5hbnRJZDtcclxuICAgICAgICBhdEVudGl0eS50YXJnZXQgPSBzY29wZXM7XHJcblxyXG4gICAgICAgIHJldHVybiBhdEVudGl0eTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENyZWRlbnRpYWwgfSBmcm9tIFwiLi9DcmVkZW50aWFsXCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFJFRlJFU0hfVE9LRU4gQ2FjaGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWZyZXNoVG9rZW5FbnRpdHkgZXh0ZW5kcyBDcmVkZW50aWFsIHtcclxuICAgIGZhbWlseUlkPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIFJlZnJlc2hUb2tlbkVudGl0eVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvblJlc3VsdFxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVSZWZyZXNoVG9rZW5FbnRpdHkoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpbmcsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiBzdHJpbmcsXHJcbiAgICAgICAgY2xpZW50SWQ6IHN0cmluZyxcclxuICAgICAgICBmYW1pbHlJZD86IHN0cmluZ1xyXG4gICAgKTogUmVmcmVzaFRva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCBydEVudGl0eSA9IG5ldyBSZWZyZXNoVG9rZW5FbnRpdHkoKTtcclxuXHJcbiAgICAgICAgcnRFbnRpdHkuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgICAgICBydEVudGl0eS5jcmVkZW50aWFsVHlwZSA9IENyZWRlbnRpYWxUeXBlLlJFRlJFU0hfVE9LRU47XHJcbiAgICAgICAgcnRFbnRpdHkuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgICAgICBydEVudGl0eS5ob21lQWNjb3VudElkID0gaG9tZUFjY291bnRJZDtcclxuICAgICAgICBydEVudGl0eS5zZWNyZXQgPSByZWZyZXNoVG9rZW47XHJcblxyXG4gICAgICAgIGlmIChmYW1pbHlJZClcclxuICAgICAgICAgICAgcnRFbnRpdHkuZmFtaWx5SWQgPSBmYW1pbHlJZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0RW50aXR5O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBBUFBfTUVUQV9EQVRBLCBTZXBhcmF0b3JzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEFQUF9NRVRBX0RBVEEgQ2FjaGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBcHBNZXRhZGF0YUVudGl0eSB7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcclxuICAgIGZhbWlseUlkPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgQWNjb3VudCBDYWNoZSBLZXkgYXMgcGVyIHRoZSBzY2hlbWE6IDxob21lX2FjY291bnRfaWQ+LTxlbnZpcm9ubWVudD4tPHJlYWxtKj5cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVBcHBNZXRhRGF0YUVudGl0eUtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGFwcE1ldGFEYXRhS2V5QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbQVBQX01FVEFfREFUQSwgdGhpcy5lbnZpcm9ubWVudCwgdGhpcy5jbGllbnRJZF07XHJcbiAgICAgICAgcmV0dXJuIGFwcE1ldGFEYXRhS2V5QXJyYXkuam9pbihTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDYWNoZUhlbHBlciB9IGZyb20gXCIuLi91dGlscy9DYWNoZUhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIE1hcCBmb3IgQWNjb3VudENhY2hlIGVudGl0eSBzZXJpYWxpemF0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q2FjaGVNYXBzIHtcclxuICAgIHN0YXRpYyB0b0NhY2hlTWFwID0ge1xyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IFwiaG9tZV9hY2NvdW50X2lkXCIsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IFwiZW52aXJvbm1lbnRcIixcclxuICAgICAgICByZWFsbTogXCJyZWFsbVwiLFxyXG4gICAgICAgIGxvY2FsQWNjb3VudElkOiBcImxvY2FsX2FjY291bnRfaWRcIixcclxuICAgICAgICB1c2VybmFtZTogXCJ1c2VybmFtZVwiLFxyXG4gICAgICAgIGF1dGhvcml0eVR5cGU6IFwiYXV0aG9yaXR5X3R5cGVcIixcclxuICAgICAgICBuYW1lOiBcIm5hbWVcIixcclxuICAgICAgICBjbGllbnRJbmZvOiBcImNsaWVudF9pbmZvXCIsXHJcbiAgICAgICAgbGFzdE1vZGlmaWNhdGlvblRpbWU6IFwibGFzdF9tb2RpZmljYXRpb25fdGltZVwiLFxyXG4gICAgICAgIGxhc3RNb2RpZmljYXRpb25BcHA6IFwibGFzdF9tb2RpZmljYXRpb25fYXBwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBmcm9tQ2FjaGVNYXAgPSBDYWNoZUhlbHBlci5zd2FwKEFjY291bnRDYWNoZU1hcHMudG9DYWNoZU1hcCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXAgZm9yIElkVG9rZW5DYWNoZSBlbnRpdHkgc2VyaWFsaXphdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWRUb2tlbkNhY2hlTWFwcyB7XHJcbiAgICBzdGF0aWMgdG9DYWNoZU1hcCA9IHtcclxuICAgICAgICBob21lQWNjb3VudElkOiBcImhvbWVfYWNjb3VudF9pZFwiLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBcImVudmlyb25tZW50XCIsXHJcbiAgICAgICAgY3JlZGVudGlhbFR5cGU6IFwiY3JlZGVudGlhbF90eXBlXCIsXHJcbiAgICAgICAgY2xpZW50SWQ6IFwiY2xpZW50X2lkXCIsXHJcbiAgICAgICAgc2VjcmV0OiBcInNlY3JldFwiLFxyXG4gICAgICAgIHJlYWxtOiBcInJlYWxtXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBmcm9tQ2FjaGVNYXAgPSBDYWNoZUhlbHBlci5zd2FwKElkVG9rZW5DYWNoZU1hcHMudG9DYWNoZU1hcCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXAgZm9yIEFjY2Vzc1Rva2VuQ2FjaGUgZW50aXR5IHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuQ2FjaGVNYXBzIHtcclxuICAgIHN0YXRpYyB0b0NhY2hlTWFwID0ge1xyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IFwiaG9tZV9hY2NvdW50X2lkXCIsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IFwiZW52aXJvbm1lbnRcIixcclxuICAgICAgICBjcmVkZW50aWFsVHlwZTogXCJjcmVkZW50aWFsX3R5cGVcIixcclxuICAgICAgICBjbGllbnRJZDogXCJjbGllbnRfaWRcIixcclxuICAgICAgICBzZWNyZXQ6IFwic2VjcmV0XCIsXHJcbiAgICAgICAgcmVhbG06IFwicmVhbG1cIixcclxuICAgICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXHJcbiAgICAgICAgY2FjaGVkQXQ6IFwiY2FjaGVkX2F0XCIsXHJcbiAgICAgICAgZXhwaXJlc09uOiBcImV4cGlyZXNfb25cIixcclxuICAgICAgICBleHRlbmRlZEV4cGlyZXNPbjogXCJleHRlbmRlZF9leHBpcmVzX29uXCIsXHJcbiAgICAgICAgcmVmcmVzaE9uOiBcInJlZnJlc2hfb25cIixcclxuICAgICAgICBrZXlJZDogXCJrZXlfaWRcIixcclxuICAgICAgICB0b2tlblR5cGU6IFwidG9rZW5fdHlwZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZnJvbUNhY2hlTWFwID0gQ2FjaGVIZWxwZXIuc3dhcChBY2Nlc3NUb2tlbkNhY2hlTWFwcy50b0NhY2hlTWFwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcCBmb3IgUmVmcmVzaFRva2VuQ2FjaGUgZW50aXR5IHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZnJlc2hUb2tlbkNhY2hlTWFwcyB7XHJcbiAgICBzdGF0aWMgdG9DYWNoZU1hcCA9IHtcclxuICAgICAgICBob21lQWNjb3VudElkOiBcImhvbWVfYWNjb3VudF9pZFwiLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBcImVudmlyb25tZW50XCIsXHJcbiAgICAgICAgY3JlZGVudGlhbFR5cGU6IFwiY3JlZGVudGlhbF90eXBlXCIsXHJcbiAgICAgICAgY2xpZW50SWQ6IFwiY2xpZW50X2lkXCIsXHJcbiAgICAgICAgc2VjcmV0OiBcInNlY3JldFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZnJvbUNhY2hlTWFwID0gQ2FjaGVIZWxwZXIuc3dhcChSZWZyZXNoVG9rZW5DYWNoZU1hcHMudG9DYWNoZU1hcCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXAgZm9yIEFwcE1ldGFkYXRhQ2FjaGUgZW50aXR5IHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwcE1ldGFkYXRhQ2FjaGVNYXBzIHtcclxuICAgIHN0YXRpYyB0b0NhY2hlTWFwID0ge1xyXG4gICAgICAgIGNsaWVudElkOiBcImNsaWVudF9pZFwiLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBcImVudmlyb25tZW50XCIsXHJcbiAgICAgICAgZmFtaWx5SWQ6IFwiZmFtaWx5X2lkXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBmcm9tQ2FjaGVNYXAgPSBDYWNoZUhlbHBlci5zd2FwKEFwcE1ldGFkYXRhQ2FjaGVNYXBzLnRvQ2FjaGVNYXApO1xyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWNjb3VudEVudGl0eSB9IGZyb20gXCIuLi9lbnRpdGllcy9BY2NvdW50RW50aXR5XCI7XHJcbmltcG9ydCB7IElkVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vZW50aXRpZXMvSWRUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkVudGl0eSB9IGZyb20gXCIuLi9lbnRpdGllcy9BY2Nlc3NUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vZW50aXRpZXMvUmVmcmVzaFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEFwcE1ldGFkYXRhRW50aXR5IH0gZnJvbSBcIi4uL2VudGl0aWVzL0FwcE1ldGFkYXRhRW50aXR5XCI7XHJcbmltcG9ydCB7IENhY2hlSGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL0NhY2hlSGVscGVyXCI7XHJcbmltcG9ydCB7IEFjY291bnRDYWNoZU1hcHMsIElkVG9rZW5DYWNoZU1hcHMsIEFjY2Vzc1Rva2VuQ2FjaGVNYXBzLCBSZWZyZXNoVG9rZW5DYWNoZU1hcHMsIEFwcE1ldGFkYXRhQ2FjaGVNYXBzIH0gZnJvbSBcIi4vSnNvbktleXNcIjtcclxuaW1wb3J0IHsgQWNjb3VudENhY2hlLCBJZFRva2VuQ2FjaGUsIEFjY2Vzc1Rva2VuQ2FjaGUsIFJlZnJlc2hUb2tlbkNhY2hlLCBBcHBNZXRhZGF0YUNhY2hlLCBJbk1lbW9yeUNhY2hlLCBKc29uQ2FjaGUgfSBmcm9tIFwiLi4vdXRpbHMvQ2FjaGVUeXBlc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL01zYWxUeXBlc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi8uLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5cclxuLy8gVE9ETzogQ2FuIHdlIHdyaXRlIHRoaXMgd2l0aCBHZW5lcmljcz9cclxuZXhwb3J0IGNsYXNzIERlc2VyaWFsaXplciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSB0aGUgSlNPTiBibG9iIGluIG1lbW9yeSBhbmQgZGVzZXJpYWxpemUgdGhlIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSBjYWNoZWRKc29uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUpTT05CbG9iKGpzb25GaWxlOiBzdHJpbmcpOiBKc29uQ2FjaGUge1xyXG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZENhY2hlID0gU3RyaW5nVXRpbHMuaXNFbXB0eShqc29uRmlsZSlcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IEpTT04ucGFyc2UoanNvbkZpbGUpO1xyXG4gICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZWRDYWNoZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2VyaWFsaXplcyBhY2NvdW50cyB0byBBY2NvdW50RW50aXR5IG9iamVjdHNcclxuICAgICAqIEBwYXJhbSBhY2NvdW50c1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVzZXJpYWxpemVBY2NvdW50cyhhY2NvdW50czogU3RyaW5nRGljdCk6IEFjY291bnRDYWNoZSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudE9iamVjdHMgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhhY2NvdW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwcGVkQWNjID0gQ2FjaGVIZWxwZXIucmVuYW1lS2V5cyhcclxuICAgICAgICAgICAgICAgIGFjY291bnRzW2tleV0sXHJcbiAgICAgICAgICAgICAgICBBY2NvdW50Q2FjaGVNYXBzLmZyb21DYWNoZU1hcFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50RW50aXR5ID0gbmV3IEFjY291bnRFbnRpdHkoKTtcclxuICAgICAgICAgICAgQ2FjaGVIZWxwZXIudG9PYmplY3QoYWNjb3VudCwgbWFwcGVkQWNjKTtcclxuICAgICAgICAgICAgYWNjb3VudE9iamVjdHNba2V5XSA9IGFjY291bnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2NvdW50T2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2VyaWFsaXplcyBpZCB0b2tlbnMgdG8gSWRUb2tlbkVudGl0eSBvYmplY3RzXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlbnNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlc2VyaWFsaXplSWRUb2tlbnMoaWRUb2tlbnM6IFN0cmluZ0RpY3QpOiBJZFRva2VuQ2FjaGUge1xyXG4gICAgICAgIGNvbnN0IGlkT2JqZWN0cyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGlkVG9rZW5zKS5tYXAoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXBwZWRJZFQgPSBDYWNoZUhlbHBlci5yZW5hbWVLZXlzKFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbnNba2V5XSxcclxuICAgICAgICAgICAgICAgIElkVG9rZW5DYWNoZU1hcHMuZnJvbUNhY2hlTWFwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkVG9rZW46IElkVG9rZW5FbnRpdHkgPSBuZXcgSWRUb2tlbkVudGl0eSgpO1xyXG4gICAgICAgICAgICBDYWNoZUhlbHBlci50b09iamVjdChpZFRva2VuLCBtYXBwZWRJZFQpO1xyXG4gICAgICAgICAgICBpZE9iamVjdHNba2V5XSA9IGlkVG9rZW47XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpZE9iamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNlcmlhbGl6ZXMgYWNjZXNzIHRva2VucyB0byBBY2Nlc3NUb2tlbkVudGl0eSBvYmplY3RzXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUFjY2Vzc1Rva2VucyhhY2Nlc3NUb2tlbnM6IFN0cmluZ0RpY3QpOiBBY2Nlc3NUb2tlbkNhY2hlIHtcclxuICAgICAgICBjb25zdCBhdE9iamVjdHMgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhhY2Nlc3NUb2tlbnMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZEFUID0gQ2FjaGVIZWxwZXIucmVuYW1lS2V5cyhcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2Vuc1trZXldLFxyXG4gICAgICAgICAgICAgICAgQWNjZXNzVG9rZW5DYWNoZU1hcHMuZnJvbUNhY2hlTWFwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuOiBBY2Nlc3NUb2tlbkVudGl0eSA9IG5ldyBBY2Nlc3NUb2tlbkVudGl0eSgpO1xyXG4gICAgICAgICAgICBDYWNoZUhlbHBlci50b09iamVjdChhY2Nlc3NUb2tlbiwgbWFwcGVkQVQpO1xyXG4gICAgICAgICAgICBhdE9iamVjdHNba2V5XSA9IGFjY2Vzc1Rva2VuO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYXRPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzZXJpYWxpemVzIHJlZnJlc2ggdG9rZW5zIHRvIFJlZnJlc2hUb2tlbkVudGl0eSBvYmplY3RzXHJcbiAgICAgKiBAcGFyYW0gcmVmcmVzaFRva2Vuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVzZXJpYWxpemVSZWZyZXNoVG9rZW5zKHJlZnJlc2hUb2tlbnM6IFN0cmluZ0RpY3QpOiBSZWZyZXNoVG9rZW5DYWNoZSB7XHJcbiAgICAgICAgY29uc3QgcnRPYmplY3RzID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMocmVmcmVzaFRva2VucykubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwcGVkUlQgPSBDYWNoZUhlbHBlci5yZW5hbWVLZXlzKFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2Vuc1trZXldLFxyXG4gICAgICAgICAgICAgICAgUmVmcmVzaFRva2VuQ2FjaGVNYXBzLmZyb21DYWNoZU1hcFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCByZWZyZXNoVG9rZW46IFJlZnJlc2hUb2tlbkVudGl0eSA9IG5ldyBSZWZyZXNoVG9rZW5FbnRpdHkoKTtcclxuICAgICAgICAgICAgQ2FjaGVIZWxwZXIudG9PYmplY3QocmVmcmVzaFRva2VuLCBtYXBwZWRSVCk7XHJcbiAgICAgICAgICAgIHJ0T2JqZWN0c1trZXldID0gcmVmcmVzaFRva2VuO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcnRPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzZXJpYWxpemVzIGFwcE1ldGFkYXRhIHRvIEFwcE1ldGFEYXRhIG9iamVjdHNcclxuICAgICAqIEBwYXJhbSBhcHBNZXRhZGF0YVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVzZXJpYWxpemVBcHBNZXRhZGF0YShhcHBNZXRhZGF0YTogU3RyaW5nRGljdCk6IEFwcE1ldGFkYXRhQ2FjaGUge1xyXG4gICAgICAgIGNvbnN0IGFwcE1ldGFkYXRhT2JqZWN0cyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGFwcE1ldGFkYXRhKS5tYXAoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXBwZWRBbWQgPSBDYWNoZUhlbHBlci5yZW5hbWVLZXlzKFxyXG4gICAgICAgICAgICAgICAgYXBwTWV0YWRhdGFba2V5XSxcclxuICAgICAgICAgICAgICAgIEFwcE1ldGFkYXRhQ2FjaGVNYXBzLmZyb21DYWNoZU1hcFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBhbWQ6IEFwcE1ldGFkYXRhRW50aXR5ID0gbmV3IEFwcE1ldGFkYXRhRW50aXR5KCk7XHJcbiAgICAgICAgICAgIENhY2hlSGVscGVyLnRvT2JqZWN0KGFtZCwgbWFwcGVkQW1kKTtcclxuICAgICAgICAgICAgYXBwTWV0YWRhdGFPYmplY3RzW2tleV0gPSBhbWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcHBNZXRhZGF0YU9iamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNlcmlhbGl6ZSBhbiBpbk1lbW9yeSBDYWNoZVxyXG4gICAgICogQHBhcmFtIGpzb25DYWNoZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVzZXJpYWxpemVBbGxDYWNoZShqc29uQ2FjaGU6IEpzb25DYWNoZSk6IEluTWVtb3J5Q2FjaGUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjY291bnRzOiBqc29uQ2FjaGUuQWNjb3VudD8gdGhpcy5kZXNlcmlhbGl6ZUFjY291bnRzKGpzb25DYWNoZS5BY2NvdW50KToge30sXHJcbiAgICAgICAgICAgIGlkVG9rZW5zOiBqc29uQ2FjaGUuSWRUb2tlbj8gdGhpcy5kZXNlcmlhbGl6ZUlkVG9rZW5zKGpzb25DYWNoZS5JZFRva2VuKToge30sXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuczoganNvbkNhY2hlLkFjY2Vzc1Rva2VuPyB0aGlzLmRlc2VyaWFsaXplQWNjZXNzVG9rZW5zKGpzb25DYWNoZS5BY2Nlc3NUb2tlbikgOiB7fSxcclxuICAgICAgICAgICAgcmVmcmVzaFRva2VuczoganNvbkNhY2hlLlJlZnJlc2hUb2tlbj8gdGhpcy5kZXNlcmlhbGl6ZVJlZnJlc2hUb2tlbnMoanNvbkNhY2hlLlJlZnJlc2hUb2tlbik6IHt9LFxyXG4gICAgICAgICAgICBhcHBNZXRhZGF0YToganNvbkNhY2hlLkFwcE1ldGFkYXRhPyB0aGlzLmRlc2VyaWFsaXplQXBwTWV0YWRhdGEoanNvbkNhY2hlLkFwcE1ldGFkYXRhKToge31cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBBY2NvdW50Q2FjaGVNYXBzLCBBY2Nlc3NUb2tlbkNhY2hlTWFwcywgSWRUb2tlbkNhY2hlTWFwcywgUmVmcmVzaFRva2VuQ2FjaGVNYXBzLCBBcHBNZXRhZGF0YUNhY2hlTWFwcyB9IGZyb20gXCIuL0pzb25LZXlzXCI7XHJcbmltcG9ydCB7IEFjY291bnRDYWNoZSwgQWNjZXNzVG9rZW5DYWNoZSwgSWRUb2tlbkNhY2hlLCBSZWZyZXNoVG9rZW5DYWNoZSwgQXBwTWV0YWRhdGFDYWNoZSB9IGZyb20gXCIuLi91dGlscy9DYWNoZVR5cGVzXCI7XHJcbmltcG9ydCB7IENhY2hlSGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzL0NhY2hlSGVscGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VyaWFsaXplciB7XHJcbiAgICAvKipcclxuICAgICAgKiBDb252ZXJ0IEFjY291bnRFbnRpdHkgdG8gc3RyaW5nXHJcbiAgICAgICogQHBhcmFtIGFjY0NhY2hlXHJcbiAgICAgICogQHBhcmFtIGtleVxyXG4gICAgICAqL1xyXG4gICAgc3RhdGljIG1hcEFjY291bnRLZXlzKGFjY0NhY2hlOiBBY2NvdW50Q2FjaGUsIGtleTogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gQ2FjaGVIZWxwZXIucmVuYW1lS2V5cyhcclxuICAgICAgICAgICAgYWNjQ2FjaGVba2V5XSxcclxuICAgICAgICAgICAgQWNjb3VudENhY2hlTWFwcy50b0NhY2hlTWFwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgSWRUb2tlbkVudGl0eSB0byBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBpZFRDYWNoZVxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWFwSWRUb2tlbktleXMoaWRUQ2FjaGU6IElkVG9rZW5DYWNoZSwga2V5OiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBDYWNoZUhlbHBlci5yZW5hbWVLZXlzKFxyXG4gICAgICAgICAgICBpZFRDYWNoZVtrZXldLFxyXG4gICAgICAgICAgICBJZFRva2VuQ2FjaGVNYXBzLnRvQ2FjaGVNYXBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBBY2Nlc3NUb2tlbkVudGl0eSB0byBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBhdENhY2hlXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXBBY2Nlc3NUb2tlbktleXMoYXRDYWNoZTogQWNjZXNzVG9rZW5DYWNoZSwga2V5OiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBDYWNoZUhlbHBlci5yZW5hbWVLZXlzKFxyXG4gICAgICAgICAgICBhdENhY2hlW2tleV0sXHJcbiAgICAgICAgICAgIEFjY2Vzc1Rva2VuQ2FjaGVNYXBzLnRvQ2FjaGVNYXBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBSZWZyZXNoVG9rZW5FbnRpdHkgdG8gc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gcnRDYWNoZVxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWFwUmVmcmVzaFRva2VuS2V5cyhydENhY2hlOiBSZWZyZXNoVG9rZW5DYWNoZSwga2V5OiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBDYWNoZUhlbHBlci5yZW5hbWVLZXlzKFxyXG4gICAgICAgICAgICBydENhY2hlW2tleV0sXHJcbiAgICAgICAgICAgIFJlZnJlc2hUb2tlbkNhY2hlTWFwcy50b0NhY2hlTWFwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgQXBwTWV0YURhdGFFbnRpdHkgdG8gc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gYW1kdENhY2hlXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXBBcHBNZXRhZGF0YUtleXMoYW1kdENhY2hlOiBBcHBNZXRhZGF0YUNhY2hlLCBrZXk6IHN0cmluZyk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIENhY2hlSGVscGVyLnJlbmFtZUtleXMoXHJcbiAgICAgICAgICAgIGFtZHRDYWNoZVtrZXldLFxyXG4gICAgICAgICAgICBBcHBNZXRhZGF0YUNhY2hlTWFwcy50b0NhY2hlTWFwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEVudGl0eVNlcmlhbGl6ZXIgfSBmcm9tIFwiLi9FbnRpdHlTZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7IEFjY291bnRDYWNoZSwgQWNjZXNzVG9rZW5DYWNoZSwgSWRUb2tlbkNhY2hlLCBSZWZyZXNoVG9rZW5DYWNoZSwgQXBwTWV0YWRhdGFDYWNoZSwgSnNvbkNhY2hlLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIi4uL3V0aWxzL0NhY2hlVHlwZXNcIjtcclxuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuLi8uLi91dGlscy9Nc2FsVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHNlcmlhbGl6ZSB0aGUgSlNPTiBibG9iXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2VyaWFsaXplSlNPTkJsb2IoZGF0YTogSnNvbkNhY2hlKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemUgQWNjb3VudHNcclxuICAgICAqIEBwYXJhbSBhY2NDYWNoZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2VyaWFsaXplQWNjb3VudHMoYWNjQ2FjaGU6IEFjY291bnRDYWNoZSk6IFN0cmluZ0RpY3Qge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYWNjQ2FjaGUpLm1hcChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGFjY291bnRzW2tleV0gPSBFbnRpdHlTZXJpYWxpemVyLm1hcEFjY291bnRLZXlzKGFjY0NhY2hlLCBrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemUgSWRUb2tlbnNcclxuICAgICAqIEBwYXJhbSBpZFRDYWNoZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2VyaWFsaXplSWRUb2tlbnMoaWRUQ2FjaGU6IElkVG9rZW5DYWNoZSk6IFN0cmluZ0RpY3R7XHJcbiAgICAgICAgY29uc3QgaWRUb2tlbnMgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhpZFRDYWNoZSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWRUb2tlbnNba2V5XSA9IEVudGl0eVNlcmlhbGl6ZXIubWFwSWRUb2tlbktleXMoaWRUQ2FjaGUsIGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpZFRva2VucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgQWNjZXNzVG9rZW5zXHJcbiAgICAgKiBAcGFyYW0gYXRDYWNoZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2VyaWFsaXplQWNjZXNzVG9rZW5zKGF0Q2FjaGU6IEFjY2Vzc1Rva2VuQ2FjaGUpOiBTdHJpbmdEaWN0IHtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbnMgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdENhY2hlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbnNba2V5XSA9IEVudGl0eVNlcmlhbGl6ZXIubWFwQWNjZXNzVG9rZW5LZXlzKGF0Q2FjaGUsIGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemUgcmVmcmVzaFRva2Vuc1xyXG4gICAgICogQHBhcmFtIHJ0Q2FjaGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNlcmlhbGl6ZVJlZnJlc2hUb2tlbnMocnRDYWNoZTogUmVmcmVzaFRva2VuQ2FjaGUpOiBTdHJpbmdEaWN0e1xyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbnMgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhydENhY2hlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW5zW2tleV0gPSBFbnRpdHlTZXJpYWxpemVyLm1hcFJlZnJlc2hUb2tlbktleXMocnRDYWNoZSwga2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemUgYW1kdENhY2hlXHJcbiAgICAgKiBAcGFyYW0gYW1kdENhY2hlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXJpYWxpemVBcHBNZXRhZGF0YShhbWR0Q2FjaGU6IEFwcE1ldGFkYXRhQ2FjaGUpOiBTdHJpbmdEaWN0IHtcclxuICAgICAgICBjb25zdCBhcHBNZXRhZGF0YSA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGFtZHRDYWNoZSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgYXBwTWV0YWRhdGFba2V5XSA9IEVudGl0eVNlcmlhbGl6ZXIubWFwQXBwTWV0YWRhdGFLZXlzKGFtZHRDYWNoZSwga2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFwcE1ldGFkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplIHRoZSBjYWNoZVxyXG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXJpYWxpemVBbGxDYWNoZShpbk1lbUNhY2hlOiBJbk1lbW9yeUNhY2hlKTogSnNvbkNhY2hlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBBY2NvdW50OiB0aGlzLnNlcmlhbGl6ZUFjY291bnRzKGluTWVtQ2FjaGUuYWNjb3VudHMpLFxyXG4gICAgICAgICAgICBJZFRva2VuOiB0aGlzLnNlcmlhbGl6ZUlkVG9rZW5zKGluTWVtQ2FjaGUuaWRUb2tlbnMpLFxyXG4gICAgICAgICAgICBBY2Nlc3NUb2tlbjogdGhpcy5zZXJpYWxpemVBY2Nlc3NUb2tlbnMoaW5NZW1DYWNoZS5hY2Nlc3NUb2tlbnMpLFxyXG4gICAgICAgICAgICBSZWZyZXNoVG9rZW46IHRoaXMuc2VyaWFsaXplUmVmcmVzaFRva2Vucyhpbk1lbUNhY2hlLnJlZnJlc2hUb2tlbnMpLFxyXG4gICAgICAgICAgICBBcHBNZXRhZGF0YTogdGhpcy5zZXJpYWxpemVBcHBNZXRhZGF0YShpbk1lbUNhY2hlLmFwcE1ldGFkYXRhKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEluTWVtb3J5Q2FjaGUsXHJcbiAgICBKc29uQ2FjaGUsXHJcbiAgICBBY2NvdW50RmlsdGVyLFxyXG4gICAgQ3JlZGVudGlhbEZpbHRlcixcclxufSBmcm9tIFwiLi91dGlscy9DYWNoZVR5cGVzXCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9BY2NvdW50RW50aXR5XCI7XHJcbmltcG9ydCB7IElDYWNoZVN0b3JhZ2UgfSBmcm9tIFwiLi9pbnRlcmZhY2UvSUNhY2hlU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBEZXNlcmlhbGl6ZXIgfSBmcm9tIFwiLi9zZXJpYWxpemUvRGVzZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7IFNlcmlhbGl6ZXIgfSBmcm9tIFwiLi9zZXJpYWxpemUvU2VyaWFsaXplclwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSBcIi4vZW50aXRpZXMvQ3JlZGVudGlhbFwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsVHlwZSwgQ2FjaGVTY2hlbWFUeXBlLCBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEFjY291bnRDYWNoZSwgQ3JlZGVudGlhbENhY2hlIH0gZnJvbSBcIi4vdXRpbHMvQ2FjaGVUeXBlc1wiO1xyXG5pbXBvcnQgeyBJQ2FjaGVNYW5hZ2VyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL0lDYWNoZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FjaGVIZWxwZXIgfSBmcm9tIFwiLi91dGlscy9DYWNoZUhlbHBlclwiO1xyXG5pbXBvcnQgeyBDYWNoZVJlY29yZCB9IGZyb20gXCIuL2VudGl0aWVzL0NhY2hlUmVjb3JkXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IElkVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9JZFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvQWNjZXNzVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuRW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvUmVmcmVzaFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbmlmaWVkQ2FjaGVNYW5hZ2VyIGltcGxlbWVudHMgSUNhY2hlTWFuYWdlciB7XHJcbiAgICAvLyBTdG9yYWdlIGludGVyZmFjZVxyXG4gICAgcHJpdmF0ZSBjYWNoZVN0b3JhZ2U6IElDYWNoZVN0b3JhZ2U7XHJcbiAgICBwcml2YXRlIGluTWVtb3J5OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhY2hlSW1wbDogSUNhY2hlU3RvcmFnZSwgY2xpZW50SWQ6IHN0cmluZywgc3RvcmVJbk1lbW9yeTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlID0gY2FjaGVJbXBsO1xyXG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgICAgICB0aGlzLmluTWVtb3J5ID0gc3RvcmVJbk1lbW9yeTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgaW4gbWVtb3J5IGNhY2hlIGZyb20gYW4gZXhpc2l0aW5nIGNhY2hlIHZhdWx0XHJcbiAgICAgKiBAcGFyYW0gY2FjaGVcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVJbk1lbW9yeUNhY2hlKGNhY2hlOiBzdHJpbmcpOiBJbk1lbW9yeUNhY2hlIHtcclxuICAgICAgICByZXR1cm4gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplQWxsQ2FjaGUoXHJcbiAgICAgICAgICAgIERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZUpTT05CbG9iKGNhY2hlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXRyaWV2ZXMgdGhlIGZpbmFsIEpTT05cclxuICAgICAqIEBwYXJhbSBpbk1lbW9yeUNhY2hlXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlSnNvbkNhY2hlKGluTWVtb3J5Q2FjaGU6IEluTWVtb3J5Q2FjaGUpOiBKc29uQ2FjaGUge1xyXG4gICAgICAgIHJldHVybiBTZXJpYWxpemVyLnNlcmlhbGl6ZUFsbENhY2hlKGluTWVtb3J5Q2FjaGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbGwgYWNjb3VudHMgaW4gbWVtb3J5XHJcbiAgICAgKi9cclxuICAgIGdldEFsbEFjY291bnRzKCk6IEFjY291bnRDYWNoZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWNjb3VudHNGaWx0ZXJlZEJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzYXZlcyBhIGNhY2hlIHJlY29yZFxyXG4gICAgICogQHBhcmFtIGNhY2hlUmVjb3JkXHJcbiAgICAgKi9cclxuICAgIHNhdmVDYWNoZVJlY29yZChjYWNoZVJlY29yZDogQ2FjaGVSZWNvcmQsIHJlc3BvbnNlU2NvcGVzOiBTY29wZVNldCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2F2ZUFjY291bnQoY2FjaGVSZWNvcmQuYWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5zYXZlQ3JlZGVudGlhbChjYWNoZVJlY29yZC5pZFRva2VuKTtcclxuICAgICAgICB0aGlzLnNhdmVBY2Nlc3NUb2tlbihjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbiwgcmVzcG9uc2VTY29wZXMpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUNyZWRlbnRpYWwoY2FjaGVSZWNvcmQucmVmcmVzaFRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmVzIGFjY291bnQgaW50byBjYWNoZVxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqL1xyXG4gICAgc2F2ZUFjY291bnQoYWNjb3VudDogQWNjb3VudEVudGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGFjY291bnQuZ2VuZXJhdGVBY2NvdW50S2V5KCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgICAgICBDYWNoZVNjaGVtYVR5cGUuQUNDT1VOVCxcclxuICAgICAgICAgICAgdGhpcy5pbk1lbW9yeVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzYXZlcyBjcmVkZW50aWFsIC0gYWNjZXNzVG9rZW4sIGlkVG9rZW4gb3IgcmVmcmVzaFRva2VuIGludG8gY2FjaGVcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsXHJcbiAgICAgKi9cclxuICAgIHNhdmVDcmVkZW50aWFsKGNyZWRlbnRpYWw6IENyZWRlbnRpYWwpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBjcmVkZW50aWFsLmdlbmVyYXRlQ3JlZGVudGlhbEtleSgpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgY3JlZGVudGlhbCxcclxuICAgICAgICAgICAgQ2FjaGVTY2hlbWFUeXBlLkNSRURFTlRJQUwsXHJcbiAgICAgICAgICAgIHRoaXMuaW5NZW1vcnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2F2ZXMgYWNjZXNzIHRva2VuIGNyZWRlbnRpYWxcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsIFxyXG4gICAgICovXHJcbiAgICBzYXZlQWNjZXNzVG9rZW4oY3JlZGVudGlhbDogQWNjZXNzVG9rZW5FbnRpdHksIHJlc3BvbnNlU2NvcGVzOiBTY29wZVNldCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb2tlbkNhY2hlID0gdGhpcy5nZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnkoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogY3JlZGVudGlhbC5jbGllbnRJZCxcclxuICAgICAgICAgICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTixcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGNyZWRlbnRpYWwuZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IGNyZWRlbnRpYWwuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgcmVhbG06IGNyZWRlbnRpYWwucmVhbG1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjdXJyZW50QWNjZXNzVG9rZW5zOiBBY2Nlc3NUb2tlbkVudGl0eVtdID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50VG9rZW5DYWNoZS5hY2Nlc3NUb2tlbnMpIGFzIEFjY2Vzc1Rva2VuRW50aXR5W107XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBY2Nlc3NUb2tlbnMpIHtcclxuICAgICAgICAgICAgY3VycmVudEFjY2Vzc1Rva2Vucy5mb3JFYWNoKCh0b2tlbkVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5TY29wZVNldCA9IFNjb3BlU2V0LmZyb21TdHJpbmcodG9rZW5FbnRpdHkudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlblNjb3BlU2V0LmludGVyc2VjdGluZ1Njb3BlU2V0cyhyZXNwb25zZVNjb3BlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNyZWRlbnRpYWwodG9rZW5FbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlQ3JlZGVudGlhbChjcmVkZW50aWFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGFjY291bnQga2V5IHJldHJpZXZlIGFuIGFjY291bnRcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgZ2V0QWNjb3VudChrZXk6IHN0cmluZyk6IEFjY291bnRFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIENhY2hlU2NoZW1hVHlwZS5BQ0NPVU5ULFxyXG4gICAgICAgICAgICB0aGlzLmluTWVtb3J5XHJcbiAgICAgICAgKSBhcyBBY2NvdW50RW50aXR5O1xyXG4gICAgICAgIHJldHVybiBhY2NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0cmlldmUgYSBjcmVkZW50aWFsIC0gYWNjZXNzVG9rZW4sIGlkVG9rZW4gb3IgcmVmcmVzaFRva2VuOyBnaXZlbiB0aGUgY2FjaGUga2V5XHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGdldENyZWRlbnRpYWwoa2V5OiBzdHJpbmcpOiBDcmVkZW50aWFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICBDYWNoZVNjaGVtYVR5cGUuQ1JFREVOVElBTCxcclxuICAgICAgICAgICAgdGhpcy5pbk1lbW9yeVxyXG4gICAgICAgICkgYXMgQ3JlZGVudGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHJpZXZlIGFjY291bnRzIG1hdGNoaW5nIGFsbCBwcm92aWRlZCBmaWx0ZXJzOyBpZiBubyBmaWx0ZXIgaXMgc2V0LCBnZXQgYWxsIGFjY291bnRzXHJcbiAgICAgKiBub3QgY2hlY2tpbmcgZm9yIGNhc2luZyBhcyBrZXlzIGFyZSBhbGwgZ2VuZXJhdGVkIGluIGxvd2VyIGNhc2UsIHJlbWVtYmVyIHRvIGNvbnZlcnQgdG8gbG93ZXIgY2FzZSBpZiBvYmplY3QgcHJvcGVydGllcyBhcmUgY29tcGFyZWRcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICovXHJcbiAgICBnZXRBY2NvdW50c0ZpbHRlcmVkQnkoYWNjb3VudEZpbHRlcj86IEFjY291bnRGaWx0ZXIpOiBBY2NvdW50Q2FjaGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjY291bnRzRmlsdGVyZWRCeUludGVybmFsKFxyXG4gICAgICAgICAgICBhY2NvdW50RmlsdGVyID8gYWNjb3VudEZpbHRlci5ob21lQWNjb3VudElkIDogXCJcIixcclxuICAgICAgICAgICAgYWNjb3VudEZpbHRlciA/IGFjY291bnRGaWx0ZXIuZW52aXJvbm1lbnQgOiBcIlwiLFxyXG4gICAgICAgICAgICBhY2NvdW50RmlsdGVyID8gYWNjb3VudEZpbHRlci5yZWFsbSA6IFwiXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0cmlldmUgYWNjb3VudHMgbWF0Y2hpbmcgYWxsIHByb3ZpZGVkIGZpbHRlcnM7IGlmIG5vIGZpbHRlciBpcyBzZXQsIGdldCBhbGwgYWNjb3VudHNcclxuICAgICAqIG5vdCBjaGVja2luZyBmb3IgY2FzaW5nIGFzIGtleXMgYXJlIGFsbCBnZW5lcmF0ZWQgaW4gbG93ZXIgY2FzZSwgcmVtZW1iZXIgdG8gY29udmVydCB0byBsb3dlciBjYXNlIGlmIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBjb21wYXJlZFxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIHJlYWxtXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0QWNjb3VudHNGaWx0ZXJlZEJ5SW50ZXJuYWwoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZD86IHN0cmluZyxcclxuICAgICAgICBlbnZpcm9ubWVudD86IHN0cmluZyxcclxuICAgICAgICByZWFsbT86IHN0cmluZ1xyXG4gICAgKTogQWNjb3VudENhY2hlIHtcclxuICAgICAgICBjb25zdCBhbGxDYWNoZUtleXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRLZXlzKCk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdBY2NvdW50czogQWNjb3VudENhY2hlID0ge307XHJcblxyXG4gICAgICAgIGFsbENhY2hlS2V5cy5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGRvbid0IHBhcnNlIGFueSBub24tY3JlZGVudGlhbCB0eXBlIGNhY2hlIGVudGl0aWVzXHJcbiAgICAgICAgICAgIGlmIChDYWNoZUhlbHBlci5nZXRDcmVkZW50aWFsVHlwZShjYWNoZUtleSkgIT09IENvbnN0YW50cy5OT1RfREVGSU5FRCB8fCBDYWNoZUhlbHBlci5pc0FwcE1ldGFkYXRhKGNhY2hlS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eTogQWNjb3VudEVudGl0eSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oY2FjaGVLZXksIENhY2hlU2NoZW1hVHlwZS5BQ0NPVU5UKSBhcyBBY2NvdW50RW50aXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGhvbWVBY2NvdW50SWQpKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gQ2FjaGVIZWxwZXIubWF0Y2hIb21lQWNjb3VudElkKGVudGl0eSwgaG9tZUFjY291bnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShlbnZpcm9ubWVudCkpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPVxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICBDYWNoZUhlbHBlci5tYXRjaEVudmlyb25tZW50KGVudGl0eSwgZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkocmVhbG0pKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcyAmJiBDYWNoZUhlbHBlci5tYXRjaFJlYWxtKGVudGl0eSwgcmVhbG0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdBY2NvdW50c1tjYWNoZUtleV0gPSBlbnRpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoaW5nQWNjb3VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXRyaWV2ZSBjcmVkZW50YWlscyBtYXRjaGluZyBhbGwgcHJvdmlkZWQgZmlsdGVyczsgaWYgbm8gZmlsdGVyIGlzIHNldCwgZ2V0IGFsbCBjcmVkZW50aWFsc1xyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxUeXBlXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBnZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnkoZmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyKTogQ3JlZGVudGlhbENhY2hlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnlJbnRlcm5hbChcclxuICAgICAgICAgICAgZmlsdGVyLmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGZpbHRlci5lbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgZmlsdGVyLmNyZWRlbnRpYWxUeXBlLFxyXG4gICAgICAgICAgICBmaWx0ZXIuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGZpbHRlci5yZWFsbSxcclxuICAgICAgICAgICAgZmlsdGVyLnRhcmdldFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwb3J0IGZ1bmN0aW9uIHRvIGhlbHAgbWF0Y2ggY3JlZGVudGlhbHNcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsVHlwZVxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gcmVhbG1cclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnlJbnRlcm5hbChcclxuICAgICAgICBob21lQWNjb3VudElkPzogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50Pzogc3RyaW5nLFxyXG4gICAgICAgIGNyZWRlbnRpYWxUeXBlPzogc3RyaW5nLFxyXG4gICAgICAgIGNsaWVudElkPzogc3RyaW5nLFxyXG4gICAgICAgIHJlYWxtPzogc3RyaW5nLFxyXG4gICAgICAgIHRhcmdldD86IHN0cmluZ1xyXG4gICAgKTogQ3JlZGVudGlhbENhY2hlIHtcclxuICAgICAgICBjb25zdCBhbGxDYWNoZUtleXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRLZXlzKCk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDcmVkZW50aWFsczogQ3JlZGVudGlhbENhY2hlID0ge1xyXG4gICAgICAgICAgICBpZFRva2Vuczoge30sXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2Vuczoge30sXHJcbiAgICAgICAgICAgIHJlZnJlc2hUb2tlbnM6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYWxsQ2FjaGVLZXlzLmZvckVhY2goKGNhY2hlS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gZG9uJ3QgcGFyc2UgYW55IG5vbi1jcmVkZW50aWFsIHR5cGUgY2FjaGUgZW50aXRpZXNcclxuICAgICAgICAgICAgY29uc3QgY3JlZFR5cGUgPSBDYWNoZUhlbHBlci5nZXRDcmVkZW50aWFsVHlwZShjYWNoZUtleSk7XHJcbiAgICAgICAgICAgIGlmIChjcmVkVHlwZSA9PT0gQ29uc3RhbnRzLk5PVF9ERUZJTkVEKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eTogQ3JlZGVudGlhbCA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oY2FjaGVLZXksIENhY2hlU2NoZW1hVHlwZS5DUkVERU5USUFMKSBhcyBDcmVkZW50aWFsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGhvbWVBY2NvdW50SWQpKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gQ2FjaGVIZWxwZXIubWF0Y2hIb21lQWNjb3VudElkKFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBob21lQWNjb3VudElkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoZW52aXJvbm1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID1cclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FjaGVIZWxwZXIubWF0Y2hFbnZpcm9ubWVudChlbnRpdHksIGVudmlyb25tZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHJlYWxtKSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMgJiYgQ2FjaGVIZWxwZXIubWF0Y2hSZWFsbShlbnRpdHksIHJlYWxtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGNyZWRlbnRpYWxUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIENhY2hlSGVscGVyLm1hdGNoQ3JlZGVudGlhbFR5cGUoZW50aXR5LCBjcmVkZW50aWFsVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShjbGllbnRJZCkpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPVxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgJiYgQ2FjaGVIZWxwZXIubWF0Y2hDbGllbnRJZChlbnRpdHksIGNsaWVudElkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWRUb2tlbnMgZG8gbm90IGhhdmUgXCJ0YXJnZXRcIiwgdGFyZ2V0IHNwZWNpZmljIHJlZnJlc2hUb2tlbnMgZG8gZXhpc3QgZm9yIHNvbWUgdHlwZXMgb2YgYXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgLy8gVE9ETzogQWRkIGNhc2UgZm9yIHRhcmdldCBzcGVjaWZpYyByZWZyZXNoIHRva2Vuc1xyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkodGFyZ2V0KSAmJiBjcmVkVHlwZSA9PT0gQ3JlZGVudGlhbFR5cGUuQUNDRVNTX1RPS0VOKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcyAmJiBDYWNoZUhlbHBlci5tYXRjaFRhcmdldChlbnRpdHksIHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNyZWRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdDcmVkZW50aWFscy5pZFRva2Vuc1tjYWNoZUtleV0gPSBlbnRpdHkgYXMgSWRUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nQ3JlZGVudGlhbHMuYWNjZXNzVG9rZW5zW2NhY2hlS2V5XSA9IGVudGl0eSBhcyBBY2Nlc3NUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ0NyZWRlbnRpYWxzLnJlZnJlc2hUb2tlbnNbY2FjaGVLZXldID0gZW50aXR5IGFzIFJlZnJlc2hUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoaW5nQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgYm9vbGVhbiBpZiB0aGUgZ2l2ZW4gYWNjb3VudCBpcyByZW1vdmVkXHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAgICovXHJcbiAgICByZW1vdmVBY2NvdW50KGFjY291bnRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLmdldEFjY291bnQoYWNjb3VudEtleSkgYXMgQWNjb3VudEVudGl0eTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjY291bnRDb250ZXh0KGFjY291bnQpICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50S2V5LFxyXG4gICAgICAgICAgICAgICAgQ2FjaGVTY2hlbWFUeXBlLkFDQ09VTlQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluTWVtb3J5XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhIGJvb2xlYW4gaWYgdGhlIGdpdmVuIGFjY291bnQgaXMgcmVtb3ZlZFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW1vdmVBY2NvdW50Q29udGV4dChhY2NvdW50OiBBY2NvdW50RW50aXR5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgYWxsQ2FjaGVLZXlzID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0S2V5cygpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZCA9IGFjY291bnQuZ2VuZXJhdGVBY2NvdW50SWQoKTtcclxuXHJcbiAgICAgICAgYWxsQ2FjaGVLZXlzLmZvckVhY2goKGNhY2hlS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRvbid0IHBhcnNlIGFueSBub24tY3JlZGVudGlhbCB0eXBlIGNhY2hlIGVudGl0aWVzXHJcbiAgICAgICAgICAgIGlmIChDYWNoZUhlbHBlci5nZXRDcmVkZW50aWFsVHlwZShjYWNoZUtleSkgPT09IENvbnN0YW50cy5OT1RfREVGSU5FRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWNoZUVudGl0eTogQ3JlZGVudGlhbCA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICBjYWNoZUtleSxcclxuICAgICAgICAgICAgICAgIENhY2hlU2NoZW1hVHlwZS5DUkVERU5USUFMLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbk1lbW9yeVxyXG4gICAgICAgICAgICApIGFzIENyZWRlbnRpYWw7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhIWNhY2hlRW50aXR5ICYmXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50SWQgPT09IGNhY2hlRW50aXR5LmdlbmVyYXRlQWNjb3VudElkKClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNyZWRlbnRpYWwoY2FjaGVFbnRpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhIGJvb2xlYW4gaWYgdGhlIGdpdmVuIGNyZWRlbnRpYWwgaXMgcmVtb3ZlZFxyXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQ3JlZGVudGlhbChjcmVkZW50aWFsOiBDcmVkZW50aWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gY3JlZGVudGlhbC5nZW5lcmF0ZUNyZWRlbnRpYWxLZXkoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICBDYWNoZVNjaGVtYVR5cGUuQ1JFREVOVElBTCxcclxuICAgICAgICAgICAgdGhpcy5pbk1lbW9yeVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uLCBidWlsZENsaWVudENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnL0NsaWVudENvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgSUNhY2hlU3RvcmFnZSB9IGZyb20gXCIuLi9jYWNoZS9pbnRlcmZhY2UvSUNhY2hlU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBJTmV0d29ya01vZHVsZSB9IGZyb20gXCIuLi9uZXR3b3JrL0lOZXR3b3JrTW9kdWxlXCI7XHJcbmltcG9ydCB7IElDcnlwdG8gfSBmcm9tIFwiLi4vY3J5cHRvL0lDcnlwdG9cIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlci9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgQUFEU2VydmVyUGFyYW1LZXlzLCBDb25zdGFudHMsIEhlYWRlck5hbWVzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBOZXR3b3JrUmVzcG9uc2UgfSBmcm9tIFwiLi4vbmV0d29yay9OZXR3b3JrTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSB9IGZyb20gXCIuLi9zZXJ2ZXIvU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgQjJjQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9CMmNBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgVW5pZmllZENhY2hlTWFuYWdlciB9IGZyb20gXCIuLi9jYWNoZS9VbmlmaWVkQ2FjaGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjb3VudEVudGl0eVwiO1xyXG5pbXBvcnQgeyBJQWNjb3VudCB9IGZyb20gXCIuLi9hY2NvdW50L0lBY2NvdW50XCI7XHJcbmltcG9ydCB7IEFjY291bnRDYWNoZSB9IGZyb20gXCIuLi9jYWNoZS91dGlscy9DYWNoZVR5cGVzXCI7XHJcbmltcG9ydCB7IENhY2hlSGVscGVyIH0gZnJvbSBcIi4uL2NhY2hlL3V0aWxzL0NhY2hlSGVscGVyXCI7XHJcblxyXG4vKipcclxuICogQmFzZSBhcHBsaWNhdGlvbiBjbGFzcyB3aGljaCB3aWxsIGNvbnN0cnVjdCByZXF1ZXN0cyB0byBzZW5kIHRvIGFuZCBoYW5kbGUgcmVzcG9uc2VzIGZyb20gdGhlIE1pY3Jvc29mdCBTVFMgdXNpbmcgdGhlIGF1dGhvcml6YXRpb24gY29kZSBmbG93LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDbGllbnQge1xyXG4gICAgLy8gTG9nZ2VyIG9iamVjdFxyXG4gICAgcHVibGljIGxvZ2dlcjogTG9nZ2VyO1xyXG5cclxuICAgIC8vIEFwcGxpY2F0aW9uIGNvbmZpZ1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ2xpZW50Q29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAvLyBDcnlwdG8gSW50ZXJmYWNlXHJcbiAgICBwcm90ZWN0ZWQgY3J5cHRvVXRpbHM6IElDcnlwdG87XHJcblxyXG4gICAgLy8gU3RvcmFnZSBJbnRlcmZhY2VcclxuICAgIHByb3RlY3RlZCBjYWNoZVN0b3JhZ2U6IElDYWNoZVN0b3JhZ2U7XHJcblxyXG4gICAgLy8gTmV0d29yayBJbnRlcmZhY2VcclxuICAgIHByb3RlY3RlZCBuZXR3b3JrQ2xpZW50OiBJTmV0d29ya01vZHVsZTtcclxuXHJcbiAgICAvLyBIZWxwZXIgQVBJIG9iamVjdCBmb3Igc2VyaWFsaXplZCBjYWNoZSBvcGVyYXRpb25zXHJcbiAgICBwcm90ZWN0ZWQgdW5pZmllZENhY2hlTWFuYWdlcjogVW5pZmllZENhY2hlTWFuYWdlcjtcclxuXHJcbiAgICAvLyBBY2NvdW50IG9iamVjdFxyXG4gICAgcHJvdGVjdGVkIGFjY291bnQ6IEFjY291bnRFbnRpdHk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBhdXRob3JpdHkgb2JqZWN0XHJcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEF1dGhvcml0eTogQXV0aG9yaXR5O1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDbGllbnRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBidWlsZENsaWVudENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGxvZ2dlclxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLmNvbmZpZy5sb2dnZXJPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBjcnlwdG9cclxuICAgICAgICB0aGlzLmNyeXB0b1V0aWxzID0gdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHN0b3JhZ2UgaW50ZXJmYWNlXHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UgPSB0aGlzLmNvbmZpZy5zdG9yYWdlSW50ZXJmYWNlO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHNlcmlhbGl6ZWQgY2FjaGUgbWFuYWdlclxyXG4gICAgICAgIHRoaXMudW5pZmllZENhY2hlTWFuYWdlciA9IG5ldyBVbmlmaWVkQ2FjaGVNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZSxcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN5c3RlbU9wdGlvbnMuc3RvcmVJbk1lbW9yeVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgbmV0d29yayBpbnRlcmZhY2VcclxuICAgICAgICB0aGlzLm5ldHdvcmtDbGllbnQgPSB0aGlzLmNvbmZpZy5uZXR3b3JrSW50ZXJmYWNlO1xyXG5cclxuICAgICAgICBCMmNBdXRob3JpdHkuc2V0S25vd25BdXRob3JpdGllcyhcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMua25vd25BdXRob3JpdGllc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdEF1dGhvcml0eSA9IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmF1dGhvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgZGVmYXVsdCBoZWFkZXJzIGZvciByZXF1ZXN0cyB0byB0b2tlbiBlbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdFRva2VuUmVxdWVzdEhlYWRlcnMoKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuY3JlYXRlRGVmYXVsdExpYnJhcnlIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoSGVhZGVyTmFtZXMuQ09OVEVOVF9UWVBFLCBDb25zdGFudHMuVVJMX0ZPUk1fQ09OVEVOVF9UWVBFKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRMaWJyYXJ5RGF0YVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdExpYnJhcnlIZWFkZXJzKCk6IE1hcDxzdHJpbmcsIHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cclxuICAgICAgICAvLyBjbGllbnQgaW5mbyBoZWFkZXJzXHJcbiAgICAgICAgaGVhZGVycy5zZXQoYCR7QUFEU2VydmVyUGFyYW1LZXlzLlhfQ0xJRU5UX1NLVX1gLHRoaXMuY29uZmlnLmxpYnJhcnlJbmZvLnNrdSk7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoYCR7QUFEU2VydmVyUGFyYW1LZXlzLlhfQ0xJRU5UX1ZFUn1gLCB0aGlzLmNvbmZpZy5saWJyYXJ5SW5mby52ZXJzaW9uKTtcclxuICAgICAgICBoZWFkZXJzLnNldChgJHtBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfT1N9YCwgdGhpcy5jb25maWcubGlicmFyeUluZm8ub3MpO1xyXG4gICAgICAgIGhlYWRlcnMuc2V0KGAke0FBRFNlcnZlclBhcmFtS2V5cy5YX0NMSUVOVF9DUFV9YCwgdGhpcy5jb25maWcubGlicmFyeUluZm8uY3B1KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIdHRwIHBvc3QgdG8gdG9rZW4gZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSB0b2tlbkVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0gcXVlcnlTdHJpbmdcclxuICAgICAqIEBwYXJhbSBoZWFkZXJzXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBleGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludCh0b2tlbkVuZHBvaW50OiBzdHJpbmcsIHF1ZXJ5U3RyaW5nOiBzdHJpbmcsIGhlYWRlcnM6IE1hcDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPE5ldHdvcmtSZXNwb25zZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrQ2xpZW50LnNlbmRQb3N0UmVxdWVzdEFzeW5jPFxyXG4gICAgICAgIFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXHJcbiAgICAgICAgPih0b2tlbkVuZHBvaW50LCB7XHJcbiAgICAgICAgICAgIGJvZHk6IHF1ZXJ5U3RyaW5nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBjdXJyZW50bHkgc2lnbmVkIGluIGFjY291bnRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QWxsQWNjb3VudHMoKTogSUFjY291bnRbXSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFjY291bnRzOiBBY2NvdW50Q2FjaGUgPSB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIuZ2V0QWxsQWNjb3VudHMoKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50VmFsdWVzOiBBY2NvdW50RW50aXR5W10gPSBPYmplY3QudmFsdWVzKGN1cnJlbnRBY2NvdW50cyk7XHJcbiAgICAgICAgY29uc3QgbnVtQWNjb3VudHMgPSBhY2NvdW50VmFsdWVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobnVtQWNjb3VudHMgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbEFjY291bnRzID0gYWNjb3VudFZhbHVlcy5tYXA8SUFjY291bnQ+KCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudE9iajogQWNjb3VudEVudGl0eSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZUhlbHBlci50b0lBY2NvdW50KGFjY291bnRPYmopO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbEFjY291bnRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IE9wZW5JZENvbmZpZ1Jlc3BvbnNlIH0gZnJvbSBcIi4vT3BlbklkQ29uZmlnUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVR5cGVcIjtcclxuaW1wb3J0IHsgQUFEVHJ1c3RlZEhvc3RMaXN0LCBDb25zdGFudHMgfSBmcm9tIFwiLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi8uLi9uZXR3b3JrL0lOZXR3b3JrTW9kdWxlXCI7XHJcblxyXG4vKipcclxuICogVGhlIEFhZEF1dGhvcml0eSBjbGFzcyBleHRlbmRzIHRoZSBBdXRob3JpdHkgY2xhc3MgYW5kIGFkZHMgZnVuY3Rpb25hbGl0eSBzcGVjaWZpYyB0byB0aGUgQXp1cmUgQUQgT0F1dGggQXV0aG9yaXR5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFhZEF1dGhvcml0eSBleHRlbmRzIEF1dGhvcml0eSB7XHJcbiAgICAvLyBTZXQgYXV0aG9yaXR5IHR5cGUgdG8gQUFEXHJcbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgQUFEIEluc3RhbmNlIERpc2NvdmVyeSBFbmRwb2ludFxyXG4gICAgcHJpdmF0ZSBnZXQgYWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHtDb25zdGFudHMuQUFEX0lOU1RBTkNFX0RJU0NPVkVSWV9FTkRQVH0/YXBpLXZlcnNpb249MS4wJmF1dGhvcml6YXRpb25fZW5kcG9pbnQ9JHt0aGlzLmNhbm9uaWNhbEF1dGhvcml0eX1vYXV0aDIvdjIuMC9hdXRob3JpemVgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgbmV0d29ya0ludGVyZmFjZTogSU5ldHdvcmtNb2R1bGUpIHtcclxuICAgICAgICBzdXBlcihhdXRob3JpdHksIG5ldHdvcmtJbnRlcmZhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIE9JREMgZW5kcG9pbnRcclxuICAgICAqIE9ubHkgcmVzcG9uZHMgd2l0aCB0aGUgZW5kcG9pbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZm9yIGN1c3RvbSBkb21haW5zIGluIEFBRCB3aGVyZSB3ZSBxdWVyeSB0aGUgc2VydmljZSBmb3IgdGhlIEluc3RhbmNlIGRpc2NvdmVyeVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLnNlbmRHZXRSZXF1ZXN0QXN5bmM8T3BlbklkQ29uZmlnUmVzcG9uc2U+KHRoaXMuYWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJvZHkudGVuYW50X2Rpc2NvdmVyeV9lbmRwb2ludDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGhvc3QgaXMgaW4gYSBsaXN0IG9mIHRydXN0ZWQgaG9zdHNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgaG9zdCB0byBsb29rIHVwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNJblRydXN0ZWRIb3N0TGlzdChob3N0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQUFEVHJ1c3RlZEhvc3RMaXN0LmluY2x1ZGVzKGhvc3QpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlUeXBlXCI7XHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlIH0gZnJvbSBcIi4uL25ldHdvcmsvSU5ldHdvcmtNb2R1bGVcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQWRmc0F1dGhvcml0eSBjbGFzcyBleHRlbmRzIHRoZSBBdXRob3JpdHkgY2xhc3MgYW5kIGFkZHMgZnVuY3Rpb25hbGl0eSBzcGVjaWZpYyB0byBBREZTIDIwMTlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBZGZzQXV0aG9yaXR5IGV4dGVuZHMgQXV0aG9yaXR5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhdXRob3JpdHkgdHlwZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWRmcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIG5ldHdvcmtJbnRlcmZhY2U6IElOZXR3b3JrTW9kdWxlKSB7XHJcbiAgICAgICAgc3VwZXIoYXV0aG9yaXR5LCBuZXR3b3JrSW50ZXJmYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBPSURDIGVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNhbm9uaWNhbEF1dGhvcml0eX0ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBYWRBdXRob3JpdHkgfSBmcm9tIFwiLi9BYWRBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQjJjQXV0aG9yaXR5IH0gZnJvbSBcIi4vQjJjQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlUeXBlXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlIH0gZnJvbSBcIi4vLi4vbmV0d29yay9JTmV0d29ya01vZHVsZVwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLy4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IFVybFN0cmluZyB9IGZyb20gXCIuLy4uL3VybC9VcmxTdHJpbmdcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBZGZzQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWRmc0F1dGhvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eUZhY3Rvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgdGhlIHVybCBhbmQgZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBkZXRlY3RBdXRob3JpdHlGcm9tVXJsKGF1dGhvcml0eVN0cmluZzogc3RyaW5nKTogQXV0aG9yaXR5VHlwZSB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5VXJsID0gbmV3IFVybFN0cmluZyhhdXRob3JpdHlTdHJpbmcpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBhdXRob3JpdHlVcmwuZ2V0VXJsQ29tcG9uZW50cygpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xyXG5cclxuICAgICAgICBpZiAocGF0aFNlZ21lbnRzLmxlbmd0aCAmJiBwYXRoU2VnbWVudHNbMF0udG9Mb3dlckNhc2UoKSA9PT0gQ29uc3RhbnRzLkFERlMpXHJcbiAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFkZnM7XHJcbiAgICAgICAgZWxzZSBpZiAoQjJjQXV0aG9yaXR5LkIyQ1RydXN0ZWRIb3N0TGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcclxuXHJcbiAgICAgICAgLy8gZGVmYXVsdHMgdG8gQWFkXHJcbiAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGF1dGhvcml0eSBvYmplY3Qgb2YgdGhlIGNvcnJlY3QgdHlwZSBiYXNlZCBvbiB0aGUgdXJsXHJcbiAgICAgKiBQZXJmb3JtcyBiYXNpYyBhdXRob3JpdHkgdmFsaWRhdGlvbiAtIGNoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBvZiBhIHZhbGlkIHR5cGUgKGVnIGFhZCwgYjJjKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eVVybDogc3RyaW5nLCBuZXR3b3JrSW50ZXJmYWNlOiBJTmV0d29ya01vZHVsZSk6IEF1dGhvcml0eSB7XHJcbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYXV0aG9yaXR5IHVybCBpcyBlbXB0eVxyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGF1dGhvcml0eVVybCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybEVtcHR5RXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBBdXRob3JpdHlGYWN0b3J5LmRldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsKTtcclxuXHJcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIGFib3ZlIGRldGVjdGlvbiwgY3JlYXRlIHRoZSByaWdodCB0eXBlLlxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQWFkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBYWRBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCBuZXR3b3JrSW50ZXJmYWNlKTtcclxuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkIyQzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQjJjQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgbmV0d29ya0ludGVyZmFjZSk7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5BZGZzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBZGZzQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgbmV0d29ya0ludGVyZmFjZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEF1dGhvcml0eVR5cGVFcnJvcihgJHthdXRob3JpdHlVcmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBJZFRva2VuQ2xhaW1zIH0gZnJvbSBcIi4vSWRUb2tlbkNsYWltc1wiO1xyXG5pbXBvcnQgeyBEZWNvZGVkSnd0IH0gZnJvbSBcIi4vRGVjb2RlZEp3dFwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IElDcnlwdG8gfSBmcm9tIFwiLi4vY3J5cHRvL0lDcnlwdG9cIjtcclxuXHJcbi8qKlxyXG4gKiBJZCBUb2tlbiByZXByZXNlbnRhdGlvbiBjbGFzcy4gUGFyc2VzIGlkIHRva2VuIHN0cmluZyBhbmQgZ2VuZXJhdGVzIGNsYWltcyBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWRUb2tlbiB7XHJcblxyXG4gICAgLy8gUmF3IElkIFRva2VuIHN0cmluZ1xyXG4gICAgcmF3SWRUb2tlbjogc3RyaW5nO1xyXG4gICAgLy8gQ2xhaW1zIGluc2lkZSBJZCBUb2tlblxyXG4gICAgY2xhaW1zOiBJZFRva2VuQ2xhaW1zO1xyXG4gICAgY29uc3RydWN0b3IocmF3SWRUb2tlbjogc3RyaW5nLCBjcnlwdG86IElDcnlwdG8pIHtcclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3IocmF3SWRUb2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJhd0lkVG9rZW4gPSByYXdJZFRva2VuO1xyXG4gICAgICAgIHRoaXMuY2xhaW1zID0gSWRUb2tlbi5leHRyYWN0SWRUb2tlbihyYXdJZFRva2VuLCBjcnlwdG8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCBJZFRva2VuIGJ5IGRlY29kaW5nIHRoZSBSQVdJZFRva2VuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVuY29kZWRJZFRva2VuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBleHRyYWN0SWRUb2tlbihlbmNvZGVkSWRUb2tlbjogc3RyaW5nLCBjcnlwdG86IElDcnlwdG8pOiBJZFRva2VuQ2xhaW1zIHtcclxuICAgICAgICAvLyBpZCB0b2tlbiB3aWxsIGJlIGRlY29kZWQgdG8gZ2V0IHRoZSB1c2VybmFtZVxyXG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbjogRGVjb2RlZEp3dCA9IFN0cmluZ1V0aWxzLmRlY29kZUp3dChlbmNvZGVkSWRUb2tlbik7XHJcbiAgICAgICAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NElkVG9rZW5QYXlsb2FkID0gZGVjb2RlZFRva2VuLkpXU1BheWxvYWQ7XHJcbiAgICAgICAgICAgIC8vIGJhc2U2NERlY29kZSgpIHNob3VsZCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBhbiBpc3N1ZVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjREZWNvZGVkID0gY3J5cHRvLmJhc2U2NERlY29kZShiYXNlNjRJZFRva2VuUGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJhc2U2NERlY29kZWQpIGFzIElkVG9rZW5DbGFpbXM7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFByb21wdFZhbHVlLCBDb2RlQ2hhbGxlbmdlTWV0aG9kVmFsdWVzfSBmcm9tIFwiLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuLi91dGlscy9Nc2FsVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZXMgc2VydmVyIGNvbnN1bWFibGUgcGFyYW1zIGZyb20gdGhlIFwicmVxdWVzdFwiIG9iamVjdHNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0VmFsaWRhdG9yIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgdG8gY2hlY2sgaWYgdGhlIGByZWRpcmVjdFVyaWAgaW4gdGhlIHJlcXVlc3QgaXMgYSBub24tbnVsbCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHJlZGlyZWN0VXJpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2YWxpZGF0ZVJlZGlyZWN0VXJpKHJlZGlyZWN0VXJpOiBzdHJpbmcpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkocmVkaXJlY3RVcmkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdFVyaUVtcHR5RXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIHZhbGlkYXRlIHByb21wdCBzZW50IGJ5IHRoZSB1c2VyIGluIHRoZSByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gcHJvbXB0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2YWxpZGF0ZVByb21wdChwcm9tcHQ6IHN0cmluZykgOiB2b2lkIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFByb21wdFZhbHVlLkxPR0lOLFxyXG4gICAgICAgICAgICAgICAgUHJvbXB0VmFsdWUuU0VMRUNUX0FDQ09VTlQsXHJcbiAgICAgICAgICAgICAgICBQcm9tcHRWYWx1ZS5DT05TRU5ULFxyXG4gICAgICAgICAgICAgICAgUHJvbXB0VmFsdWUuTk9ORVxyXG4gICAgICAgICAgICBdLmluZGV4T2YocHJvbXB0KSA8IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRQcm9tcHRFcnJvcihwcm9tcHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgdG8gdmFsaWRhdGUgY29kZV9jaGFsbGVuZ2UgYW5kIGNvZGVfY2hhbGxlbmdlX21ldGhvZFxyXG4gICAgICogQHBhcmFtIGNvZGVDaGFsbGVuZ2VcclxuICAgICAqIEBwYXJhbSBjb2RlQ2hhbGxlbmdlTWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2YWxpZGF0ZUNvZGVDaGFsbGVuZ2VQYXJhbXMoY29kZUNoYWxsZW5nZTogc3RyaW5nLCBjb2RlQ2hhbGxlbmdlTWV0aG9kOiBzdHJpbmcpIDogdm9pZCAge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGNvZGVDaGFsbGVuZ2UpIHx8IFN0cmluZ1V0aWxzLmlzRW1wdHkoY29kZUNoYWxsZW5nZU1ldGhvZCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zRXJyb3IoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ29kZUNoYWxsZW5nZU1ldGhvZChjb2RlQ2hhbGxlbmdlTWV0aG9kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIHZhbGlkYXRlIGNvZGVfY2hhbGxlbmdlX21ldGhvZFxyXG4gICAgICogQHBhcmFtIGNvZGVDaGFsbGVuZ2VNZXRob2RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHZhbGlkYXRlQ29kZUNoYWxsZW5nZU1ldGhvZChjb2RlQ2hhbGxlbmdlTWV0aG9kOiBzdHJpbmcpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBDb2RlQ2hhbGxlbmdlTWV0aG9kVmFsdWVzLlBMQUlOLFxyXG4gICAgICAgICAgICAgICAgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcy5TMjU2XHJcbiAgICAgICAgICAgIF0uaW5kZXhPZihjb2RlQ2hhbGxlbmdlTWV0aG9kKSA8IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHVubmVjZXNzYXJ5IG9yIGR1cGxpY2F0ZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzYW5pdGl6ZUVRUGFyYW1zKGVRUGFyYW1zOiBTdHJpbmdEaWN0LCBxdWVyeVBhcmFtczogTWFwPHN0cmluZywgc3RyaW5nPikgOiBTdHJpbmdEaWN0IHtcclxuICAgICAgICBpZiAoIWVRUGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGFueSBxdWVyeSBwYXJhbWV0ZXJzIGFscmVhZHkgaW5jbHVkZWQgaW4gU1NPIHBhcmFtc1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVRUGFyYW1zW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlZCBwYXJhbSBcIiArIGtleSArIFwiIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnMgc2luY2UgaXQgd2FzIGFscmVhZHkgcHJlc2VudCBpbiBsaWJyYXJ5IHF1ZXJ5IHBhcmFtZXRlcnMuXCIpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVRUGFyYW1zW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVRUGFyYW1zO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgQUFEU2VydmVyUGFyYW1LZXlzLCBDb25zdGFudHMsIFJlc3BvbnNlTW9kZSwgU1NPVHlwZXMsIENsaWVudEluZm8gfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4uL3V0aWxzL01zYWxUeXBlc1wiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0VmFsaWRhdG9yIH0gZnJvbSBcIi4uL3JlcXVlc3QvUmVxdWVzdFZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5SW5mbyB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyIHtcclxuXHJcbiAgICBwcml2YXRlIHBhcmFtZXRlcnM6IE1hcDxzdHJpbmcsIHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHJlc3BvbnNlX3R5cGUgPSBjb2RlXHJcbiAgICAgKi9cclxuICAgIGFkZFJlc3BvbnNlVHlwZUNvZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChcclxuICAgICAgICAgICAgQUFEU2VydmVyUGFyYW1LZXlzLlJFU1BPTlNFX1RZUEUsIGVuY29kZVVSSUNvbXBvbmVudChDb25zdGFudHMuQ09ERV9SRVNQT05TRV9UWVBFKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgcmVzcG9uc2VfbW9kZS4gZGVmYXVsdHMgdG8gcXVlcnkuXHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VNb2RlXHJcbiAgICAgKi9cclxuICAgIGFkZFJlc3BvbnNlTW9kZShyZXNwb25zZU1vZGU/OiBSZXNwb25zZU1vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KFxyXG4gICAgICAgICAgICBBQURTZXJ2ZXJQYXJhbUtleXMuUkVTUE9OU0VfTU9ERSxcclxuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KChyZXNwb25zZU1vZGUpID8gcmVzcG9uc2VNb2RlIDogUmVzcG9uc2VNb2RlLlFVRVJZKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgc2NvcGVzXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVTZXRcclxuICAgICAqL1xyXG4gICAgYWRkU2NvcGVzKHNjb3BlU2V0OiBTY29wZVNldCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLlNDT1BFLCBlbmNvZGVVUklDb21wb25lbnQoc2NvcGVTZXQucHJpbnRTY29wZXMoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqL1xyXG4gICAgYWRkQ2xpZW50SWQoY2xpZW50SWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNMSUVOVF9JRCwgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudElkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgcmVkaXJlY3RfdXJpXHJcbiAgICAgKiBAcGFyYW0gcmVkaXJlY3RVcmlcclxuICAgICAqL1xyXG4gICAgYWRkUmVkaXJlY3RVcmkocmVkaXJlY3RVcmk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFJlcXVlc3RWYWxpZGF0b3IudmFsaWRhdGVSZWRpcmVjdFVyaShyZWRpcmVjdFVyaSk7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuUkVESVJFQ1RfVVJJLCBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBkb21haW5faGludFxyXG4gICAgICogQHBhcmFtIGRvbWFpbkhpbnRcclxuICAgICAqL1xyXG4gICAgYWRkRG9tYWluSGludChkb21haW5IaW50OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KFNTT1R5cGVzLkRPTUFJTl9ISU5ULCBlbmNvZGVVUklDb21wb25lbnQoZG9tYWluSGludCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxvZ2luX2hpbnRcclxuICAgICAqIEBwYXJhbSBsb2dpbkhpbnRcclxuICAgICAqL1xyXG4gICAgYWRkTG9naW5IaW50KGxvZ2luSGludDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChTU09UeXBlcy5MT0dJTl9ISU5ULCBlbmNvZGVVUklDb21wb25lbnQobG9naW5IaW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY2xhaW1zXHJcbiAgICAgKiBAcGFyYW0gY2xhaW1zXHJcbiAgICAgKi9cclxuICAgIGFkZENsYWltcyhjbGFpbXM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNMQUlNUywgZW5jb2RlVVJJQ29tcG9uZW50KGNsYWltcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGNvcnJlbGF0aW9uSWRcclxuICAgICAqIEBwYXJhbSBjb3JyZWxhdGlvbklkXHJcbiAgICAgKi9cclxuICAgIGFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuQ0xJRU5UX1JFUVVFU1RfSUQsIGVuY29kZVVSSUNvbXBvbmVudChjb3JyZWxhdGlvbklkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbGlicmFyeSBpbmZvIHF1ZXJ5IHBhcmFtc1xyXG4gICAgICogQHBhcmFtIGxpYnJhcnlJbmZvXHJcbiAgICAgKi9cclxuICAgIGFkZExpYnJhcnlJbmZvKGxpYnJhcnlJbmZvOiBMaWJyYXJ5SW5mbyk6IHZvaWQge1xyXG4gICAgICAgIC8vIFRlbGVtZXRyeSBJbmZvXHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfU0tVLCBsaWJyYXJ5SW5mby5za3UpO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLlhfQ0xJRU5UX1ZFUiwgbGlicmFyeUluZm8udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfT1MsIGxpYnJhcnlJbmZvLm9zKTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5YX0NMSUVOVF9DUFUsIGxpYnJhcnlJbmZvLmNwdSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgcHJvbXB0XHJcbiAgICAgKiBAcGFyYW0gcHJvbXB0XHJcbiAgICAgKi9cclxuICAgIGFkZFByb21wdChwcm9tcHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFJlcXVlc3RWYWxpZGF0b3IudmFsaWRhdGVQcm9tcHQocHJvbXB0KTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KGAke0FBRFNlcnZlclBhcmFtS2V5cy5QUk9NUFR9YCwgZW5jb2RlVVJJQ29tcG9uZW50KHByb21wdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqL1xyXG4gICAgYWRkU3RhdGUoc3RhdGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShzdGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuU1RBVEUsIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBub25jZVxyXG4gICAgICogQHBhcmFtIG5vbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZE5vbmNlKG5vbmNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5OT05DRSwgZW5jb2RlVVJJQ29tcG9uZW50KG5vbmNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY29kZV9jaGFsbGVuZ2UgYW5kIGNvZGVfY2hhbGxlbmdlX21ldGhvZFxyXG4gICAgICogLSB0aHJvdyBpZiBlaXRoZXIgb2YgdGhlbSBhcmUgbm90IHBhc3NlZFxyXG4gICAgICogQHBhcmFtIGNvZGVDaGFsbGVuZ2VcclxuICAgICAqIEBwYXJhbSBjb2RlQ2hhbGxlbmdlTWV0aG9kXHJcbiAgICAgKi9cclxuICAgIGFkZENvZGVDaGFsbGVuZ2VQYXJhbXMoXHJcbiAgICAgICAgY29kZUNoYWxsZW5nZTogc3RyaW5nLFxyXG4gICAgICAgIGNvZGVDaGFsbGVuZ2VNZXRob2Q6IHN0cmluZ1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgUmVxdWVzdFZhbGlkYXRvci52YWxpZGF0ZUNvZGVDaGFsbGVuZ2VQYXJhbXMoY29kZUNoYWxsZW5nZSwgY29kZUNoYWxsZW5nZU1ldGhvZCk7XHJcbiAgICAgICAgaWYgKGNvZGVDaGFsbGVuZ2UgJiYgY29kZUNoYWxsZW5nZU1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5DT0RFX0NIQUxMRU5HRSwgZW5jb2RlVVJJQ29tcG9uZW50KGNvZGVDaGFsbGVuZ2UpKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuQ09ERV9DSEFMTEVOR0VfTUVUSE9ELCBlbmNvZGVVUklDb21wb25lbnQoY29kZUNoYWxsZW5nZU1ldGhvZCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ29kZUNoYWxsZW5nZVBhcmFtc0Vycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHRoZSBgYXV0aG9yaXphdGlvbl9jb2RlYCBwYXNzZWQgYnkgdGhlIHVzZXIgdG8gZXhjaGFuZ2UgZm9yIGEgdG9rZW5cclxuICAgICAqIEBwYXJhbSBjb2RlXHJcbiAgICAgKi9cclxuICAgIGFkZEF1dGhvcml6YXRpb25Db2RlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNPREUsIGVuY29kZVVSSUNvbXBvbmVudChjb2RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgdGhlIGBhdXRob3JpemF0aW9uX2NvZGVgIHBhc3NlZCBieSB0aGUgdXNlciB0byBleGNoYW5nZSBmb3IgYSB0b2tlblxyXG4gICAgICogQHBhcmFtIGNvZGVcclxuICAgICAqL1xyXG4gICAgYWRkRGV2aWNlQ29kZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5ERVZJQ0VfQ09ERSwgZW5jb2RlVVJJQ29tcG9uZW50KGNvZGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCB0aGUgYHJlZnJlc2hUb2tlbmAgcGFzc2VkIGJ5IHRoZSB1c2VyXHJcbiAgICAgKiBAcGFyYW0gcmVmcmVzaFRva2VuXHJcbiAgICAgKi9cclxuICAgIGFkZFJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLlJFRlJFU0hfVE9LRU4sIGVuY29kZVVSSUNvbXBvbmVudChyZWZyZXNoVG9rZW4pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCB0aGUgYGNvZGVfdmVyaWZpZXJgIHBhc3NlZCBieSB0aGUgdXNlciB0byBleGNoYW5nZSBmb3IgYSB0b2tlblxyXG4gICAgICogQHBhcmFtIGNvZGVWZXJpZmllclxyXG4gICAgICovXHJcbiAgICBhZGRDb2RlVmVyaWZpZXIoY29kZVZlcmlmaWVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5DT0RFX1ZFUklGSUVSLCBlbmNvZGVVUklDb21wb25lbnQoY29kZVZlcmlmaWVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY2xpZW50X3NlY3JldFxyXG4gICAgICogQHBhcmFtIGNsaWVudFNlY3JldFxyXG4gICAgICovXHJcbiAgICAvLyBUT0RPIHVuY29tbWVudCB3aGVuIGNvbmZpZGVudGlhbCBjbGllbnQgZmxvdyBpcyBhZGRlZC5cclxuICAgIC8vIGFkZENsaWVudFNlY3JldChjbGllbnRTZWNyZXQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gICAgIHBhcmFtcy5zZXQoYCR7QUFEU2VydmVyUGFyYW1LZXlzLkNMSUVOVF9TRUNSRVR9YCwgY2xpZW50U2VjcmV0KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBncmFudCB0eXBlXHJcbiAgICAgKiBAcGFyYW0gZ3JhbnRUeXBlXHJcbiAgICAgKi9cclxuICAgIGFkZEdyYW50VHlwZShncmFudFR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkdSQU5UX1RZUEUsIGVuY29kZVVSSUNvbXBvbmVudChncmFudFR5cGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBjbGllbnQgaW5mb1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgYWRkQ2xpZW50SW5mbygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KENsaWVudEluZm8sIFwiMVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBleHRyYVF1ZXJ5UGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gZVFwYXJhbXNcclxuICAgICAqL1xyXG4gICAgYWRkRXh0cmFRdWVyeVBhcmFtZXRlcnMoZVFwYXJhbXM6IFN0cmluZ0RpY3QpOiB2b2lkIHtcclxuICAgICAgICBSZXF1ZXN0VmFsaWRhdG9yLnNhbml0aXplRVFQYXJhbXMoZVFwYXJhbXMsIHRoaXMucGFyYW1ldGVycyk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZVFwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KGtleSwgZVFwYXJhbXNba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIGNyZWF0ZSBhIFVSTCBmcm9tIHRoZSBwYXJhbXMgbWFwXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVF1ZXJ5U3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJBcnJheTogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyQXJyYXkucHVzaChgJHtrZXl9PSR7dmFsdWV9YCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBxdWVyeVBhcmFtZXRlckFycmF5LmpvaW4oXCImXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9BdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgY29kZSwgZm9yIGV4YW1wbGUsIHVuYXZhaWxhYmlsaXR5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcclxuXHJcbiAgICBzdWJFcnJvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsIHN1YkVycm9yPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU2VydmVyRXJyb3JcIjtcclxuICAgICAgICB0aGlzLnN1YkVycm9yID0gc3ViRXJyb3I7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBTZXJ2ZXJFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlIGNsYXNzIGNvbnRhaW5pbmcgc3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IGVycm9yIGNvZGVzIGFuZCBtZXNzYWdlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZSA9IFtcclxuICAgIFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIixcclxuICAgIFwiY29uc2VudF9yZXF1aXJlZFwiLFxyXG4gICAgXCJsb2dpbl9yZXF1aXJlZFwiXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhTdWJFcnJvck1lc3NhZ2UgPSBbXHJcbiAgICBcIm1lc3NhZ2Vfb25seVwiLFxyXG4gICAgXCJhZGRpdGlvbmFsX2FjdGlvblwiLFxyXG4gICAgXCJiYXNpY19hY3Rpb25cIixcclxuICAgIFwidXNlcl9wYXNzd29yZF9leHBpcmVkXCIsXHJcbiAgICBcImNvbnNlbnRfcmVxdWlyZWRcIlxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHVzZXIgaW50ZXJhY3Rpb24gaXMgcmVxdWlyZWQgYXQgdGhlIGF1dGggc2VydmVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZywgc3ViRXJyb3I/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSwgc3ViRXJyb3IpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JTdHJpbmc6IHN0cmluZywgc3ViRXJyb3I/OiBzdHJpbmcpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3JDb2RlID0gIVN0cmluZ1V0aWxzLmlzRW1wdHkoZXJyb3JDb2RlKSAmJiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbmRleE9mKGVycm9yQ29kZSkgPiAtMTtcclxuICAgICAgICBjb25zdCBpc0ludGVyYWN0aW9uUmVxdWlyZWRTdWJFcnJvciA9ICFTdHJpbmdVdGlscy5pc0VtcHR5KHN1YkVycm9yKSAmJiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aFN1YkVycm9yTWVzc2FnZS5pbmRleE9mKHN1YkVycm9yKSA+IC0xO1xyXG4gICAgICAgIGNvbnN0IGlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yRGVzYyA9ICFTdHJpbmdVdGlscy5pc0VtcHR5KGVycm9yU3RyaW5nKSAmJiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5zb21lKChpckVycm9yQ29kZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3JTdHJpbmcuaW5kZXhPZihpckVycm9yQ29kZSkgPiAtMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yQ29kZSB8fCBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvckRlc2MgfHwgaXNJbnRlcmFjdGlvblJlcXVpcmVkU3ViRXJyb3I7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBBY2NvdW50RW50aXR5IH0gZnJvbSBcIi4vQWNjb3VudEVudGl0eVwiO1xyXG5pbXBvcnQgeyBJZFRva2VuRW50aXR5IH0gZnJvbSBcIi4vSWRUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkVudGl0eSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IFJlZnJlc2hUb2tlbkVudGl0eSB9IGZyb20gXCIuL1JlZnJlc2hUb2tlbkVudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhY2hlUmVjb3JkIHtcclxuICAgIGFjY291bnQ6IEFjY291bnRFbnRpdHk7XHJcbiAgICBpZFRva2VuOiBJZFRva2VuRW50aXR5O1xyXG4gICAgYWNjZXNzVG9rZW46IEFjY2Vzc1Rva2VuRW50aXR5O1xyXG4gICAgcmVmcmVzaFRva2VuOiBSZWZyZXNoVG9rZW5FbnRpdHk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudEVudGl0eTogQWNjb3VudEVudGl0eSwgaWRUb2tlbkVudGl0eTogSWRUb2tlbkVudGl0eSwgYWNjZXNzVG9rZW5FbnRpdHk6IEFjY2Vzc1Rva2VuRW50aXR5LCByZWZyZXNoVG9rZW5FbnRpdHk6IFJlZnJlc2hUb2tlbkVudGl0eSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnRFbnRpdHk7XHJcbiAgICAgICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbkVudGl0eTtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5FbnRpdHk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW4gPSByZWZyZXNoVG9rZW5FbnRpdHk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlIH0gZnJvbSBcIi4uL3NlcnZlci9TZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBidWlsZENsaWVudEluZm8sIENsaWVudEluZm8gfSBmcm9tIFwiLi4vYWNjb3VudC9DbGllbnRJbmZvXCI7XHJcbmltcG9ydCB7IElDcnlwdG8gfSBmcm9tIFwiLi4vY3J5cHRvL0lDcnlwdG9cIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3NlcnZlci9TZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9sb2dnZXIvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL1NlcnZlckVycm9yXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vYWNjb3VudC9JZFRva2VuXCI7XHJcbmltcG9ydCB7IFVuaWZpZWRDYWNoZU1hbmFnZXIgfSBmcm9tIFwiLi4vY2FjaGUvVW5pZmllZENhY2hlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTY29wZVNldCB9IGZyb20gXCIuLi9yZXF1ZXN0L1Njb3BlU2V0XCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuLi91dGlscy9UaW1lVXRpbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXN1bHQgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50RW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FjY291bnRFbnRpdHlcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5VHlwZVwiO1xyXG5pbXBvcnQgeyBJZFRva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0lkVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjZXNzVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL1JlZnJlc2hUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgQ2FjaGVSZWNvcmQgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQ2FjaGVSZWNvcmRcIjtcclxuaW1wb3J0IHsgQ2FjaGVIZWxwZXIgfSBmcm9tIFwiLi4vY2FjaGUvdXRpbHMvQ2FjaGVIZWxwZXJcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnRBbGlhc2VzLCBQcmVmZXJyZWRDYWNoZUVudmlyb25tZW50IH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaGFuZGxlcyByZXNwb25zZSBwYXJzaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlSGFuZGxlciB7XHJcbiAgICBwcml2YXRlIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHVDYWNoZU1hbmFnZXI6IFVuaWZpZWRDYWNoZU1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGNyeXB0b09iajogSUNyeXB0bztcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XHJcbiAgICBwcml2YXRlIGNsaWVudEluZm86IENsaWVudEluZm87XHJcbiAgICBwcml2YXRlIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElkOiBzdHJpbmcsIHVuaWZpZWRDYWNoZU1hbmFnZXI6IFVuaWZpZWRDYWNoZU1hbmFnZXIsIGNyeXB0b09iajogSUNyeXB0bywgbG9nZ2VyOiBMb2dnZXIpIHtcclxuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgdGhpcy51Q2FjaGVNYW5hZ2VyID0gdW5pZmllZENhY2hlTWFuYWdlcjtcclxuICAgICAgICB0aGlzLmNyeXB0b09iaiA9IGNyeXB0b09iajtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIHZhbGlkYXRlcyBzZXJ2ZXIgYXV0aG9yaXphdGlvbiBjb2RlIHJlc3BvbnNlLlxyXG4gICAgICogQHBhcmFtIHNlcnZlclJlc3BvbnNlSGFzaFxyXG4gICAgICogQHBhcmFtIGNhY2hlZFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY3J5cHRvT2JqXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZShcclxuICAgICAgICBzZXJ2ZXJSZXNwb25zZUhhc2g6IFNlcnZlckF1dGhvcml6YXRpb25Db2RlUmVzcG9uc2UsXHJcbiAgICAgICAgY2FjaGVkU3RhdGU6IHN0cmluZyxcclxuICAgICAgICBjcnlwdG9PYmo6IElDcnlwdG9cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZUhhc2guc3RhdGUgIT09IGNhY2hlZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVTdGF0ZU1pc21hdGNoRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBlcnJvclxyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3IgfHwgc2VydmVyUmVzcG9uc2VIYXNoLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHNlcnZlclJlc3BvbnNlSGFzaC5zdWJlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5pc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3IsIHNlcnZlclJlc3BvbnNlSGFzaC5lcnJvcl9kZXNjcmlwdGlvbiwgc2VydmVyUmVzcG9uc2VIYXNoLnN1YmVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ioc2VydmVyUmVzcG9uc2VIYXNoLmVycm9yLCBzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3JfZGVzY3JpcHRpb24sIHNlcnZlclJlc3BvbnNlSGFzaC5zdWJlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZXJ2ZXJFcnJvcihzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3IsIHNlcnZlclJlc3BvbnNlSGFzaC5lcnJvcl9kZXNjcmlwdGlvbiwgc2VydmVyUmVzcG9uc2VIYXNoLnN1YmVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZUhhc2guY2xpZW50X2luZm8pIHtcclxuICAgICAgICAgICAgYnVpbGRDbGllbnRJbmZvKHNlcnZlclJlc3BvbnNlSGFzaC5jbGllbnRfaW5mbywgY3J5cHRvT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCB2YWxpZGF0ZXMgc2VydmVyIGF1dGhvcml6YXRpb24gdG9rZW4gcmVzcG9uc2UuXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyUmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVUb2tlblJlc3BvbnNlKFxyXG4gICAgICAgIHNlcnZlclJlc3BvbnNlOiBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGVycm9yXHJcbiAgICAgICAgaWYgKHNlcnZlclJlc3BvbnNlLmVycm9yIHx8IHNlcnZlclJlc3BvbnNlLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHNlcnZlclJlc3BvbnNlLnN1YmVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKHNlcnZlclJlc3BvbnNlLmVycm9yLCBzZXJ2ZXJSZXNwb25zZS5lcnJvcl9kZXNjcmlwdGlvbiwgc2VydmVyUmVzcG9uc2Uuc3ViZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihzZXJ2ZXJSZXNwb25zZS5lcnJvciwgc2VydmVyUmVzcG9uc2UuZXJyb3JfZGVzY3JpcHRpb24sIHNlcnZlclJlc3BvbnNlLnN1YmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXJyU3RyaW5nID0gYCR7c2VydmVyUmVzcG9uc2UuZXJyb3JfY29kZXN9IC0gWyR7c2VydmVyUmVzcG9uc2UudGltZXN0YW1wfV06ICR7c2VydmVyUmVzcG9uc2UuZXJyb3JfZGVzY3JpcHRpb259IC0gQ29ycmVsYXRpb24gSUQ6ICR7c2VydmVyUmVzcG9uc2UuY29ycmVsYXRpb25faWR9IC0gVHJhY2UgSUQ6ICR7c2VydmVyUmVzcG9uc2UudHJhY2VfaWR9YDtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlcnZlckVycm9yKHNlcnZlclJlc3BvbnNlLmVycm9yLCBlcnJTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgaG9tZUFjY291bnRJZFxyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZS5jbGllbnRfaW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWVudEluZm8gPSBidWlsZENsaWVudEluZm8oc2VydmVyUmVzcG9uc2UuY2xpZW50X2luZm8sIHRoaXMuY3J5cHRvT2JqKTtcclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY2xpZW50SW5mby51aWQpICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY2xpZW50SW5mby51dGlkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBgJHt0aGlzLmNsaWVudEluZm8udWlkfS4ke3RoaXMuY2xpZW50SW5mby51dGlkfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgY29uc3RydWN0ZWQgdG9rZW4gcmVzcG9uc2UgYmFzZWQgb24gZ2l2ZW4gc3RyaW5nLiBBbHNvIG1hbmFnZXMgdGhlIGNhY2hlIHVwZGF0ZXMgYW5kIGNsZWFudXBzLlxyXG4gICAgICogQHBhcmFtIHNlcnZlclRva2VuUmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVBdXRoZW50aWNhdGlvblJlc3VsdChzZXJ2ZXJUb2tlblJlc3BvbnNlOiBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSwgYXV0aG9yaXR5OiBBdXRob3JpdHksIGNhY2hlZE5vbmNlPzogc3RyaW5nKTogQXV0aGVudGljYXRpb25SZXN1bHQge1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYW4gaWRUb2tlbiBvYmplY3QgKG5vdCBlbnRpdHkpXHJcbiAgICAgICAgY29uc3QgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKHNlcnZlclRva2VuUmVzcG9uc2UuaWRfdG9rZW4sIHRoaXMuY3J5cHRvT2JqKTtcclxuXHJcbiAgICAgICAgLy8gdG9rZW4gbm9uY2UgY2hlY2sgKFRPRE86IEFkZCBhIHdhcm5pbmcgaWYgbm8gbm9uY2UgaXMgZ2l2ZW4/KVxyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShjYWNoZWROb25jZSkpIHtcclxuICAgICAgICAgICAgaWYgKGlkVG9rZW5PYmouY2xhaW1zLm5vbmNlICE9PSBjYWNoZWROb25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzYXZlIHRoZSByZXNwb25zZSB0b2tlbnNcclxuICAgICAgICBjb25zdCBjYWNoZVJlY29yZCA9IHRoaXMuZ2VuZXJhdGVDYWNoZVJlY29yZChzZXJ2ZXJUb2tlblJlc3BvbnNlLCBpZFRva2VuT2JqLCBhdXRob3JpdHkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlU2NvcGVzID0gU2NvcGVTZXQuZnJvbVN0cmluZyhzZXJ2ZXJUb2tlblJlc3BvbnNlLnNjb3BlKTtcclxuICAgICAgICB0aGlzLnVDYWNoZU1hbmFnZXIuc2F2ZUNhY2hlUmVjb3JkKGNhY2hlUmVjb3JkLCByZXNwb25zZVNjb3Blcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uUmVzdWx0OiBBdXRoZW50aWNhdGlvblJlc3VsdCA9IHtcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IGlkVG9rZW5PYmouY2xhaW1zLm9pZCB8fCBpZFRva2VuT2JqLmNsYWltcy5zdWIsXHJcbiAgICAgICAgICAgIHRlbmFudElkOiBpZFRva2VuT2JqLmNsYWltcy50aWQsXHJcbiAgICAgICAgICAgIHNjb3BlczogcmVzcG9uc2VTY29wZXMuYXNBcnJheSgpLFxyXG4gICAgICAgICAgICBhY2NvdW50OiBDYWNoZUhlbHBlci50b0lBY2NvdW50KGNhY2hlUmVjb3JkLmFjY291bnQpLFxyXG4gICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuT2JqLnJhd0lkVG9rZW4sXHJcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogc2VydmVyVG9rZW5SZXNwb25zZS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIGZyb21DYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgZXhwaXJlc09uOiBuZXcgRGF0ZShjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbi5leHBpcmVzT24pLFxyXG4gICAgICAgICAgICBleHRFeHBpcmVzT246IG5ldyBEYXRlKGNhY2hlUmVjb3JkLmFjY2Vzc1Rva2VuLmV4dGVuZGVkRXhwaXJlc09uKSxcclxuICAgICAgICAgICAgZmFtaWx5SWQ6IHNlcnZlclRva2VuUmVzcG9uc2UuZm9jaSB8fCBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhdXRoZW50aWNhdGlvblJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIEFjY291bnRcclxuICAgICAqIEBwYXJhbSBzZXJ2ZXJUb2tlblJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZUFjY291bnRFbnRpdHkoc2VydmVyVG9rZW5SZXNwb25zZTogU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UsIGlkVG9rZW46IElkVG9rZW4sIGF1dGhvcml0eTogQXV0aG9yaXR5KTogQWNjb3VudEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5VHlwZSA9IGF1dGhvcml0eS5hdXRob3JpdHlUeXBlO1xyXG5cclxuICAgICAgICBpZiAoIXNlcnZlclRva2VuUmVzcG9uc2UuY2xpZW50X2luZm8pXHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRW1wdHlFcnJvcihzZXJ2ZXJUb2tlblJlc3BvbnNlLmNsaWVudF9pbmZvKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhdXRob3JpdHlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5CMkM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudEVudGl0eS5jcmVhdGVBY2NvdW50KHNlcnZlclRva2VuUmVzcG9uc2UuY2xpZW50X2luZm8sIGF1dGhvcml0eSwgaWRUb2tlbiwgXCJwb2xpY3lcIiwgdGhpcy5jcnlwdG9PYmopO1xyXG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQWRmczpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50RW50aXR5LmNyZWF0ZUFERlNBY2NvdW50KGF1dGhvcml0eSwgaWRUb2tlbik7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gQUFEXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudEVudGl0eS5jcmVhdGVBY2NvdW50KHNlcnZlclRva2VuUmVzcG9uc2UuY2xpZW50X2luZm8sIGF1dGhvcml0eSwgaWRUb2tlbiwgbnVsbCwgdGhpcy5jcnlwdG9PYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBDYWNoZVJlY29yZFxyXG4gICAgICogQHBhcmFtIHNlcnZlclRva2VuUmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBpZFRva2VuT2JqXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQ2FjaGVSZWNvcmQoc2VydmVyVG9rZW5SZXNwb25zZTogU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UsIGlkVG9rZW5PYmo6IElkVG9rZW4sIGF1dGhvcml0eTogQXV0aG9yaXR5KTogQ2FjaGVSZWNvcmQge1xyXG4gICAgICAgIC8vIEFjY291bnRcclxuICAgICAgICBjb25zdCBjYWNoZWRBY2NvdW50ICA9IHRoaXMuZ2VuZXJhdGVBY2NvdW50RW50aXR5KFxyXG4gICAgICAgICAgICBzZXJ2ZXJUb2tlblJlc3BvbnNlLFxyXG4gICAgICAgICAgICBpZFRva2VuT2JqLFxyXG4gICAgICAgICAgICBhdXRob3JpdHlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZXFFbnZpcm9ubWVudCA9IGF1dGhvcml0eS5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgICAgICBjb25zdCBlbnYgPSBFbnZpcm9ubWVudEFsaWFzZXMuaW5jbHVkZXMocmVxRW52aXJvbm1lbnQpID8gUHJlZmVycmVkQ2FjaGVFbnZpcm9ubWVudCA6IHJlcUVudmlyb25tZW50O1xyXG5cclxuICAgICAgICAvLyBJZFRva2VuXHJcbiAgICAgICAgY29uc3QgY2FjaGVkSWRUb2tlbiA9IElkVG9rZW5FbnRpdHkuY3JlYXRlSWRUb2tlbkVudGl0eShcclxuICAgICAgICAgICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIGVudixcclxuICAgICAgICAgICAgc2VydmVyVG9rZW5SZXNwb25zZS5pZF90b2tlbixcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgaWRUb2tlbk9iai5jbGFpbXMudGlkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQWNjZXNzVG9rZW5cclxuICAgICAgICBjb25zdCByZXNwb25zZVNjb3BlcyA9IFNjb3BlU2V0LmZyb21TdHJpbmcoc2VydmVyVG9rZW5SZXNwb25zZS5zY29wZSk7XHJcbiAgICAgICAgLy8gRXhwaXJhdGlvbiBjYWxjdWxhdGlvblxyXG4gICAgICAgIGNvbnN0IGV4cGlyZXNJblNlY29uZHMgPSBUaW1lVXRpbHMubm93U2Vjb25kcygpICsgc2VydmVyVG9rZW5SZXNwb25zZS5leHBpcmVzX2luO1xyXG4gICAgICAgIGNvbnN0IGV4dGVuZGVkRXhwaXJlc0luU2Vjb25kcyA9IGV4cGlyZXNJblNlY29uZHMgKyBzZXJ2ZXJUb2tlblJlc3BvbnNlLmV4dF9leHBpcmVzX2luO1xyXG5cclxuICAgICAgICBjb25zdCBjYWNoZWRBY2Nlc3NUb2tlbiA9IEFjY2Vzc1Rva2VuRW50aXR5LmNyZWF0ZUFjY2Vzc1Rva2VuRW50aXR5KFxyXG4gICAgICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllcixcclxuICAgICAgICAgICAgZW52LFxyXG4gICAgICAgICAgICBzZXJ2ZXJUb2tlblJlc3BvbnNlLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgaWRUb2tlbk9iai5jbGFpbXMudGlkLFxyXG4gICAgICAgICAgICByZXNwb25zZVNjb3Blcy5hc0FycmF5KCkuam9pbihcIiBcIiksXHJcbiAgICAgICAgICAgIGV4cGlyZXNJblNlY29uZHMsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkRXhwaXJlc0luU2Vjb25kc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHJlZnJlc2hUb2tlblxyXG4gICAgICAgIGNvbnN0IGNhY2hlZFJlZnJlc2hUb2tlbiA9IFJlZnJlc2hUb2tlbkVudGl0eS5jcmVhdGVSZWZyZXNoVG9rZW5FbnRpdHkoXHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyLFxyXG4gICAgICAgICAgICBlbnYsXHJcbiAgICAgICAgICAgIHNlcnZlclRva2VuUmVzcG9uc2UucmVmcmVzaF90b2tlbixcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgc2VydmVyVG9rZW5SZXNwb25zZS5mb2NpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYWNoZVJlY29yZChjYWNoZWRBY2NvdW50LCBjYWNoZWRJZFRva2VuLCBjYWNoZWRBY2Nlc3NUb2tlbiwgY2FjaGVkUmVmcmVzaFRva2VuKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQmFzZUNsaWVudCB9IGZyb20gXCIuL0Jhc2VDbGllbnRcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3NlcnZlci9TZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlIH0gZnJvbSBcIi4uL3NlcnZlci9TZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5RmFjdG9yeSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL2FjY291bnQvSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBTY29wZVNldCB9IGZyb20gXCIuLi9yZXF1ZXN0L1Njb3BlU2V0XCI7XHJcbmltcG9ydCB7IEFBRFNlcnZlclBhcmFtS2V5cywgQ29uc3RhbnRzLCBSZXNwb25zZU1vZGUsIEdyYW50VHlwZSwgQ3JlZGVudGlhbFR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuLi91dGlscy9UaW1lVXRpbHNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgVXJsU3RyaW5nIH0gZnJvbSBcIi4uL3VybC9VcmxTdHJpbmdcIjtcclxuaW1wb3J0IHsgQjJjQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9CMmNBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXphdGlvblVybFJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9BdXRob3JpemF0aW9uVXJsUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlciB9IGZyb20gXCIuLi9zZXJ2ZXIvUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IFJlZnJlc2hUb2tlblJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9SZWZyZXNoVG9rZW5SZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVR5cGVcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBTaWxlbnRGbG93UmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L1NpbGVudEZsb3dSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IENhY2hlSGVscGVyIH0gZnJvbSBcIi4uL2NhY2hlL3V0aWxzL0NhY2hlSGVscGVyXCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjb3VudEVudGl0eVwiO1xyXG5pbXBvcnQgeyBJZFRva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0lkVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL1JlZnJlc2hUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkVudGl0eSB9IGZyb20gXCIuLi9jYWNoZS9lbnRpdGllcy9BY2Nlc3NUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBJQWNjb3VudCB9IGZyb20gXCIuLi9hY2NvdW50L0lBY2NvdW50XCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxGaWx0ZXIsIENyZWRlbnRpYWxDYWNoZSB9IGZyb20gXCIuLi9jYWNoZS91dGlscy9DYWNoZVR5cGVzXCI7XHJcblxyXG4vKipcclxuICogU1BBQ2xpZW50IGNsYXNzXHJcbiAqXHJcbiAqIE9iamVjdCBpbnN0YW5jZSB3aGljaCB3aWxsIGNvbnN0cnVjdCByZXF1ZXN0cyB0byBzZW5kIHRvIGFuZCBoYW5kbGUgcmVzcG9uc2VzXHJcbiAqIGZyb20gdGhlIE1pY3Jvc29mdCBTVFMgdXNpbmcgdGhlIGF1dGhvcml6YXRpb24gY29kZSBmbG93LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNQQUNsaWVudCBleHRlbmRzIEJhc2VDbGllbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENsaWVudENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBJbXBsZW1lbnQgYmFzZSBtb2R1bGVcclxuICAgICAgICBzdXBlcihjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgQjJjQXV0aG9yaXR5LnNldEtub3duQXV0aG9yaXRpZXMoXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmtub3duQXV0aG9yaXRpZXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHVybCBmb3IgbG9nZ2luZyBpbiBhIHVzZXIuIEFsc28gcGVyZm9ybXMgdmFsaWRhdGlvbiBvZiB0aGUgcmVxdWVzdCBwYXJhbWV0ZXJzLlxyXG4gICAgICogSW5jbHVkaW5nIGFueSBTU08gcGFyYW1ldGVycyAoYWNjb3VudCwgc2lkLCBsb2dpbl9oaW50KSB3aWxsIHNob3J0IGNpcmN1aXQgdGhlIGF1dGhlbnRpY2F0aW9uIGFuZCBhbGxvdyB5b3UgdG8gcmV0cmlldmUgYSBjb2RlIHdpdGhvdXQgaW50ZXJhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBjcmVhdGVVcmwoXHJcbiAgICAgICAgcmVxdWVzdDogQXV0aG9yaXphdGlvblVybFJlcXVlc3RcclxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdXRob3JpdHkgb3IgdXNlIGRlZmF1bHQsIGFuZCBwZXJmb3JtIGRpc2NvdmVyeSBlbmRwb2ludCBjaGVjay5cclxuICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPVxyXG4gICAgICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3QuYXV0aG9yaXR5XHJcbiAgICAgICAgICAgICAgICA/IEF1dGhvcml0eUZhY3RvcnkuY3JlYXRlSW5zdGFuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5hdXRob3JpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR3b3JrQ2xpZW50XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuZGVmYXVsdEF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBpcyB0ZW1wb3JhcnkuIFJlbW92ZSB3aGVuIEFERlMgaXMgc3VwcG9ydGVkIGZvciBicm93c2VyXHJcbiAgICAgICAgaWYgKGFjcXVpcmVUb2tlbkF1dGhvcml0eS5hdXRob3JpdHlUeXBlID09IEF1dGhvcml0eVR5cGUuQWRmcykge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEF1dGhvcml0eVR5cGVFcnJvcihcclxuICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eS5jYW5vbmljYWxBdXRob3JpdHlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGFjcXVpcmVUb2tlbkF1dGhvcml0eS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludERpc2NvdmVyeUluY29tcGxldGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYXdhaXQgdGhpcy5jcmVhdGVVcmxSZXF1ZXN0UGFyYW1TdHJpbmcoXHJcbiAgICAgICAgICAgIHJlcXVlc3RcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBgJHthY3F1aXJlVG9rZW5BdXRob3JpdHkuYXV0aG9yaXphdGlvbkVuZHBvaW50fT8ke3F1ZXJ5U3RyaW5nfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVVcmxSZXF1ZXN0UGFyYW1TdHJpbmcocmVxdWVzdDogQXV0aG9yaXphdGlvblVybFJlcXVlc3QpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZXNwb25zZVR5cGVDb2RlKCk7XHJcblxyXG4gICAgICAgIC8vIENsaWVudCBJRFxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG4gICAgICAgIGNvbnN0IHNjb3BlU2V0ID0gbmV3IFNjb3BlU2V0KChyZXF1ZXN0ICYmIHJlcXVlc3Quc2NvcGVzKSB8fCBbXSk7XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50KSB7XHJcbiAgICAgICAgICAgIHNjb3BlU2V0LmFwcGVuZFNjb3BlcyhyZXF1ZXN0ICYmIHJlcXVlc3QuZXh0cmFTY29wZXNUb0NvbnNlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRTY29wZXMoc2NvcGVTZXQpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFJlZGlyZWN0VXJpKHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPVxyXG4gICAgICAgICAgICAocmVxdWVzdCAmJiByZXF1ZXN0LmNvcnJlbGF0aW9uSWQpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZS5jcmVhdGVOZXdHdWlkKCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb3JyZWxhdGlvbklkKGNvcnJlbGF0aW9uSWQpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvZGVDaGFsbGVuZ2VQYXJhbXMoXHJcbiAgICAgICAgICAgIHJlcXVlc3QuY29kZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgcmVxdWVzdC5jb2RlQ2hhbGxlbmdlTWV0aG9kIHx8XHJcbiAgICAgICAgICAgICAgICBgJHtDb25zdGFudHMuUzI1Nl9DT0RFX0NIQUxMRU5HRV9NRVRIT0R9YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU3RhdGUocmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkTm9uY2UocmVxdWVzdC5ub25jZSB8fCB0aGlzLmNvbmZpZy5jcnlwdG9JbnRlcmZhY2UuY3JlYXRlTmV3R3VpZCgpKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkTGlicmFyeUluZm8odGhpcy5jb25maWcubGlicmFyeUluZm8pO1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnByb21wdCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFByb21wdChyZXF1ZXN0LnByb21wdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LmxvZ2luSGludCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZExvZ2luSGludChyZXF1ZXN0LmxvZ2luSGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LmRvbWFpbkhpbnQpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGREb21haW5IaW50KHJlcXVlc3QuZG9tYWluSGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LmNsYWltcykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsYWltcyhyZXF1ZXN0LmNsYWltcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFJlc3BvbnNlTW9kZShSZXNwb25zZU1vZGUuRlJBR01FTlQpO1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkRXh0cmFRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCAmJiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhbiBhdXRob3JpemF0aW9uIGNvZGUsIGl0IHdpbGwgcGVyZm9ybSBhIHRva2VuIGV4Y2hhbmdlIHVzaW5nIGNhY2hlZCB2YWx1ZXMgZnJvbSBhIHByZXZpb3VzIGNhbGwgdG9cclxuICAgICAqIGNyZWF0ZUxvZ2luVXJsKCkgb3IgY3JlYXRlQWNxdWlyZVRva2VuVXJsKCkuIFlvdSBtdXN0IGNhbGwgdGhpcyBBRlRFUiB1c2luZyBvbmUgb2YgdGhvc2UgQVBJcyBmaXJzdC4gWW91IHNob3VsZFxyXG4gICAgICogYWxzbyB1c2UgdGhlIGhhbmRsZUZyYWdtZW50UmVzcG9uc2UoKSBBUEkgdG8gcGFzcyB0aGUgY29kZVJlc3BvbnNlIHRvIHRoaXMgZnVuY3Rpb24gYWZ0ZXJ3YXJkcy5cclxuICAgICAqIEBwYXJhbSBjb2RlUmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgYXN5bmMgYWNxdWlyZVRva2VuKGNvZGVSZXF1ZXN0OiBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QsIHVzZXJTdGF0ZTogc3RyaW5nLCBjYWNoZWROb25jZTogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIC8vIElmIG5vIGNvZGUgcmVzcG9uc2UgaXMgZ2l2ZW4sIHdlIGNhbm5vdCBhY3F1aXJlIGEgdG9rZW4uXHJcbiAgICAgICAgaWYgKCFjb2RlUmVxdWVzdCB8fCBTdHJpbmdVdGlscy5pc0VtcHR5KGNvZGVSZXF1ZXN0LmNvZGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlcXVlc3RDYW5ub3RCZU1hZGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdXRob3JpdHkgb3IgdXNlIGRlZmF1bHQsIGFuZCBwZXJmb3JtIGRpc2NvdmVyeSBlbmRwb2ludCBjaGVjay5cclxuICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPSBjb2RlUmVxdWVzdCAmJiBjb2RlUmVxdWVzdC5hdXRob3JpdHkgPyBBdXRob3JpdHlGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKGNvZGVSZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5uZXR3b3JrQ2xpZW50KSA6IHRoaXMuZGVmYXVsdEF1dGhvcml0eTtcclxuICAgICAgICBpZiAoIWFjcXVpcmVUb2tlbkF1dGhvcml0eS5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludERpc2NvdmVyeUluY29tcGxldGVFcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyQnVpbGRlciA9IG5ldyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlcigpO1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFJlZGlyZWN0VXJpKFxyXG4gICAgICAgICAgICBjb2RlUmVxdWVzdC5yZWRpcmVjdFVyaSB8fCB0aGlzLmdldFJlZGlyZWN0VXJpKClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZVNldCA9IG5ldyBTY29wZVNldChjb2RlUmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHNjb3BlU2V0KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGNvZGU6IHNldCBieSB1c2VyLCBub3QgdmFsaWRhdGVkXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRBdXRob3JpemF0aW9uQ29kZShjb2RlUmVxdWVzdC5jb2RlKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb2RlVmVyaWZpZXIoY29kZVJlcXVlc3QuY29kZVZlcmlmaWVyKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRHcmFudFR5cGUoR3JhbnRUeXBlLkFVVEhPUklaQVRJT05fQ09ERV9HUkFOVCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0b2tlbiBlbmRwb2ludC5cclxuICAgICAgICBjb25zdCB7IHRva2VuRW5kcG9pbnQgfSA9IGFjcXVpcmVUb2tlbkF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgLy8gVXNlciBoZWxwZXIgdG8gcmV0cmlldmUgdG9rZW4gcmVzcG9uc2UuXHJcbiAgICAgICAgLy8gTmVlZCB0byBhd2FpdCBmdW5jdGlvbiBjYWxsIGJlZm9yZSByZXR1cm4gdG8gY2F0Y2ggYW55IHRocm93biBlcnJvcnMuXHJcbiAgICAgICAgLy8gaWYgZXJyb3JzIGFyZSB0aHJvd24gYXN5bmNocm9ub3VzbHkgaW4gcmV0dXJuIHN0YXRlbWVudCwgdGhleSBhcmUgY2F1Z2h0IGJ5IGNhbGxlciBvZiB0aGlzIGZ1bmN0aW9uIGluc3RlYWQuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0VG9rZW5SZXNwb25zZSh0b2tlbkVuZHBvaW50LCBwYXJhbWV0ZXJCdWlsZGVyLCBhY3F1aXJlVG9rZW5BdXRob3JpdHksIGNhY2hlZE5vbmNlLCB1c2VyU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgdG9rZW4gZnJvbSBjYWNoZSBpZiBpdCBpcyBzdGlsbCB2YWxpZCwgb3IgdXNlcyB0aGUgY2FjaGVkIHJlZnJlc2ggdG9rZW4gdG8gcmVuZXdcclxuICAgICAqIHRoZSBnaXZlbiB0b2tlbiBhbmQgcmV0dXJucyB0aGUgcmVuZXdlZCB0b2tlbi4gV2lsbCB0aHJvdyBhbiBlcnJvciBpZiBsb2dpbiBpcyBub3QgY29tcGxldGVkICh1bmxlc3NcclxuICAgICAqIGlkIHRva2VucyBhcmUgbm90IGJlaW5nIHJlbmV3ZWQpLlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0VmFsaWRUb2tlbihyZXF1ZXN0OiBTaWxlbnRGbG93UmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICAvLyBDYW5ub3QgcmVuZXcgdG9rZW4gaWYgbm8gcmVxdWVzdCBvYmplY3QgaXMgZ2l2ZW4uXHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVRva2VuUmVxdWVzdEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlcXVlc3QuYWNjb3VudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9BY2NvdW50SW5TaWxlbnRSZXF1ZXN0RXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBhY2NvdW50IG9iamVjdCBmb3IgdGhpcyByZXF1ZXN0LlxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RTY29wZXMgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG5cclxuICAgICAgICAvLyBHZXQgY3VycmVudCBjYWNoZWQgdG9rZW5zXHJcbiAgICAgICAgY29uc3QgY2FjaGVkQWNjb3VudCA9IHRoaXMudW5pZmllZENhY2hlTWFuYWdlci5nZXRBY2NvdW50KENhY2hlSGVscGVyLmdlbmVyYXRlQWNjb3VudENhY2hlS2V5KHJlcXVlc3QuYWNjb3VudCkpO1xyXG5cclxuICAgICAgICBjb25zdCBob21lQWNjb3VudElkID0gY2FjaGVkQWNjb3VudC5ob21lQWNjb3VudElkO1xyXG4gICAgICAgIGNvbnN0IGVudiA9IGNhY2hlZEFjY291bnQuZW52aXJvbm1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY2Vzc1Rva2VuID0gdGhpcy5mZXRjaEFjY2Vzc1Rva2VuKGhvbWVBY2NvdW50SWQsIGVudiwgcmVxdWVzdFNjb3BlcywgY2FjaGVkQWNjb3VudC5yZWFsbSk7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkUmVmcmVzaFRva2VuID0gdGhpcy5mZXRjaFJlZnJlc2hUb2tlbihob21lQWNjb3VudElkLCBlbnYpO1xyXG4gICAgICAgIGlmICghY2FjaGVkQWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vVG9rZW5zRm91bmRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgcmVmcmVzaCBpcyBmb3JjZWQsIG9yIGlmIHRva2VucyBhcmUgZXhwaXJlZC4gSWYgbmVpdGhlciBhcmUgdHJ1ZSwgcmV0dXJuIGEgdG9rZW4gcmVzcG9uc2Ugd2l0aCB0aGUgZm91bmQgdG9rZW4gZW50cnkuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuZm9yY2VSZWZyZXNoIHx8IHRoaXMuaXNUb2tlbkV4cGlyZWQoY2FjaGVkQWNjZXNzVG9rZW4uZXhwaXJlc09uKSkge1xyXG4gICAgICAgICAgICBpZiAoIWNhY2hlZFJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vVG9rZW5zRm91bmRFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGF1dGhvcml0eSBvciB1c2UgZGVmYXVsdCwgYW5kIHBlcmZvcm0gZGlzY292ZXJ5IGVuZHBvaW50IGNoZWNrLlxyXG4gICAgICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuY3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMubmV0d29ya0NsaWVudCkgOiB0aGlzLmRlZmF1bHRBdXRob3JpdHk7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRlbXBvcmFyeS4gUmVtb3ZlIHdoZW4gQURGUyBpcyBzdXBwb3J0ZWQgZm9yIGJyb3dzZXJcclxuICAgICAgICAgICAgaWYgKGFjcXVpcmVUb2tlbkF1dGhvcml0eS5hdXRob3JpdHlUeXBlID09PSBBdXRob3JpdHlUeXBlLkFkZnMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkQXV0aG9yaXR5VHlwZUVycm9yKGFjcXVpcmVUb2tlbkF1dGhvcml0eS5jYW5vbmljYWxBdXRob3JpdHkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFjcXVpcmVUb2tlbkF1dGhvcml0eS5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFjcXVpcmVUb2tlbkF1dGhvcml0eS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmV3IHRoZSB0b2tlbnMuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgdG9rZW5FbmRwb2ludCB9ID0gYWNxdWlyZVRva2VuQXV0aG9yaXR5O1xyXG4gICAgICAgICAgICBjb25zdCByZWZyZXNoVG9rZW5SZXF1ZXN0OiBSZWZyZXNoVG9rZW5SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBjYWNoZWRSZWZyZXNoVG9rZW4uc2VjcmV0LFxyXG4gICAgICAgICAgICAgICAgc2NvcGVzOiByZXF1ZXN0LnNjb3BlcyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcml0eTogYWNxdWlyZVRva2VuQXV0aG9yaXR5LmNhbm9uaWNhbEF1dGhvcml0eVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5ld1Rva2VuKHJlZnJlc2hUb2tlblJlcXVlc3QsIGFjcXVpcmVUb2tlbkF1dGhvcml0eSwgdG9rZW5FbmRwb2ludCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY2FjaGVkSWRUb2tlbiA9IHRoaXMuZmV0Y2hJZFRva2VuKGhvbWVBY2NvdW50SWQsIGVudiwgY2FjaGVkQWNjb3VudC5yZWFsbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihjYWNoZWRJZFRva2VuLnNlY3JldCwgdGhpcy5jcnlwdG9VdGlscyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRTY29wZXMgPSBTY29wZVNldC5mcm9tU3RyaW5nKGNhY2hlZEFjY2Vzc1Rva2VuLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVJZDogaWRUb2tlbk9iai5jbGFpbXMub2lkIHx8IGlkVG9rZW5PYmouY2xhaW1zLnN1YixcclxuICAgICAgICAgICAgICAgIHRlbmFudElkOiBpZFRva2VuT2JqLmNsYWltcy50aWQsXHJcbiAgICAgICAgICAgICAgICBzY29wZXM6IGNhY2hlZFNjb3Blcy5hc0FycmF5KCksXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuT2JqLnJhd0lkVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuQ2xhaW1zOiBpZFRva2VuT2JqLmNsYWltcyxcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBjYWNoZWRBY2Nlc3NUb2tlbi5zZWNyZXQsXHJcbiAgICAgICAgICAgICAgICBmcm9tQ2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBDYWNoZUhlbHBlci50b0lBY2NvdW50KGNhY2hlZEFjY291bnQpLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJlc09uOiBuZXcgRGF0ZShjYWNoZWRBY2Nlc3NUb2tlbi5leHBpcmVzT24pLFxyXG4gICAgICAgICAgICAgICAgZXh0RXhwaXJlc09uOiBuZXcgRGF0ZShjYWNoZWRBY2Nlc3NUb2tlbi5leHRlbmRlZEV4cGlyZXNPbiksXHJcbiAgICAgICAgICAgICAgICBmYW1pbHlJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNyZWdpb24gTG9nb3V0XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdG8gbG9nIG91dCB0aGUgY3VycmVudCB1c2VyLCBhbmQgcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIHBvc3RMb2dvdXRSZWRpcmVjdFVyaS5cclxuICAgICAqIERlZmF1bHQgYmVoYXZpb3VyIGlzIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5VXJpXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxvZ291dChhY2NvdW50OiBJQWNjb3VudCwgYWNxdWlyZVRva2VuQXV0aG9yaXR5OiBBdXRob3JpdHkpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIC8vIENsZWFyIGN1cnJlbnQgYWNjb3VudC5cclxuICAgICAgICB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIucmVtb3ZlQWNjb3VudChDYWNoZUhlbHBlci5nZW5lcmF0ZUFjY291bnRDYWNoZUtleShhY2NvdW50KSk7XHJcbiAgICAgICAgLy8gR2V0IHBvc3RMb2dvdXRSZWRpcmVjdFVyaS5cclxuICAgICAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gXCJcIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmkgPSBgPyR7QUFEU2VydmVyUGFyYW1LZXlzLlBPU1RfTE9HT1VUX1VSSX09YCArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAvLyBBY3F1aXJlIHRva2VuIGF1dGhvcml0aWVzLlxyXG4gICAgICAgIGlmICghYWNxdWlyZVRva2VuQXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eSA9IHRoaXMuZGVmYXVsdEF1dGhvcml0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoaXMgaXMgdGVtcG9yYXJ5LiBSZW1vdmUgd2hlbiBBREZTIGlzIHN1cHBvcnRlZCBmb3IgYnJvd3NlclxyXG4gICAgICAgIGlmIChhY3F1aXJlVG9rZW5BdXRob3JpdHkuYXV0aG9yaXR5VHlwZSA9PT0gQXV0aG9yaXR5VHlwZS5BZGZzKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkQXV0aG9yaXR5VHlwZUVycm9yKFxyXG4gICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LmNhbm9uaWNhbEF1dGhvcml0eVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFhY3F1aXJlVG9rZW5BdXRob3JpdHkuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYWNxdWlyZVRva2VuQXV0aG9yaXR5LnJlc29sdmVFbmRwb2ludHNBc3luYygpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnN0cnVjdCBsb2dvdXQgVVJJLlxyXG4gICAgICAgIGNvbnN0IGxvZ291dFVyaSA9IGAke2FjcXVpcmVUb2tlbkF1dGhvcml0eS5lbmRTZXNzaW9uRW5kcG9pbnR9JHtwb3N0TG9nb3V0UmVkaXJlY3RVcml9YDtcclxuICAgICAgICByZXR1cm4gbG9nb3V0VXJpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFJlc3BvbnNlIEhhbmRsaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBoYXNoIGZyYWdtZW50IHJlc3BvbnNlIGZyb20gcHVibGljIGNsaWVudCBjb2RlIHJlcXVlc3QuIFJldHVybnMgYSBjb2RlIHJlc3BvbnNlIHVzZWQgYnlcclxuICAgICAqIHRoZSBjbGllbnQgdG8gZXhjaGFuZ2UgZm9yIGEgdG9rZW4gaW4gYWNxdWlyZVRva2VuLlxyXG4gICAgICogQHBhcmFtIGhhc2hGcmFnbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlRnJhZ21lbnRSZXNwb25zZShoYXNoRnJhZ21lbnQ6IHN0cmluZywgY2FjaGVkU3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHJlc3BvbnNlcy5cclxuICAgICAgICBjb25zdCByZXNwb25zZUhhbmRsZXIgPSBuZXcgUmVzcG9uc2VIYW5kbGVyKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLCB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIsIHRoaXMuY3J5cHRvVXRpbHMsIHRoaXMubG9nZ2VyKTtcclxuXHJcbiAgICAgICAgLy8gRGVzZXJpYWxpemUgaGFzaCBmcmFnbWVudCByZXNwb25zZSBwYXJhbWV0ZXJzLlxyXG4gICAgICAgIGNvbnN0IGhhc2hVcmxTdHJpbmcgPSBuZXcgVXJsU3RyaW5nKGhhc2hGcmFnbWVudCk7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyUGFyYW1zID0gaGFzaFVybFN0cmluZy5nZXREZXNlcmlhbGl6ZWRIYXNoPFNlcnZlckF1dGhvcml6YXRpb25Db2RlUmVzcG9uc2U+KCk7XHJcblxyXG4gICAgICAgIC8vIEdldCBjb2RlIHJlc3BvbnNlXHJcbiAgICAgICAgcmVzcG9uc2VIYW5kbGVyLnZhbGlkYXRlU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZShzZXJ2ZXJQYXJhbXMsIGNhY2hlZFN0YXRlLCB0aGlzLmNyeXB0b1V0aWxzKTtcclxuICAgICAgICByZXR1cm4gc2VydmVyUGFyYW1zLmNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gSGVscGVyc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2hlcyBpZFRva2VuIGZyb20gY2FjaGUgaWYgcHJlc2VudFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmZXRjaElkVG9rZW4oaG9tZUFjY291bnRJZDogc3RyaW5nLCBlbnZpcm9ubWVudDogc3RyaW5nLCBpbnB1dFJlYWxtOiBzdHJpbmcpOiBJZFRva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCBpZFRva2VuS2V5OiBzdHJpbmcgPSBDYWNoZUhlbHBlci5nZW5lcmF0ZUNyZWRlbnRpYWxDYWNoZUtleShcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIENyZWRlbnRpYWxUeXBlLklEX1RPS0VOLFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgaW5wdXRSZWFsbVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pZmllZENhY2hlTWFuYWdlci5nZXRDcmVkZW50aWFsKGlkVG9rZW5LZXkpIGFzIElkVG9rZW5FbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmZXRjaGVzIGFjY2Vzc1Rva2VuIGZyb20gY2FjaGUgaWYgcHJlc2VudFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSBzY29wZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmZXRjaEFjY2Vzc1Rva2VuKGhvbWVBY2NvdW50SWQ6IHN0cmluZywgZW52aXJvbm1lbnQ6IHN0cmluZywgc2NvcGVzOiBTY29wZVNldCwgaW5wdXRSZWFsbTogc3RyaW5nKTogQWNjZXNzVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuRmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyID0ge1xyXG4gICAgICAgICAgICBob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTixcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLFxyXG4gICAgICAgICAgICByZWFsbTogaW5wdXRSZWFsbSxcclxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZXMucHJpbnRTY29wZXMoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbENhY2hlOiBDcmVkZW50aWFsQ2FjaGUgPSB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KGFjY2Vzc1Rva2VuRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbnMgPSBPYmplY3QudmFsdWVzKGNyZWRlbnRpYWxDYWNoZS5hY2Nlc3NUb2tlbnMpO1xyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoYXQgdG8gdGhyb3cgb3IgcmV0dXJuIGhlcmUuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhY2Nlc3NUb2tlbnMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2Vuc1swXSBhcyBBY2Nlc3NUb2tlbkVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZldGNoZXMgcmVmcmVzaFRva2VuIGZyb20gY2FjaGUgaWYgcHJlc2VudFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmZXRjaFJlZnJlc2hUb2tlbihob21lQWNjb3VudElkOiBzdHJpbmcsIGVudmlyb25tZW50OiBzdHJpbmcpOiBSZWZyZXNoVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbktleTogc3RyaW5nID0gQ2FjaGVIZWxwZXIuZ2VuZXJhdGVDcmVkZW50aWFsQ2FjaGVLZXkoXHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOLFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pZmllZENhY2hlTWFuYWdlci5nZXRDcmVkZW50aWFsKHJlZnJlc2hUb2tlbktleSkgYXMgUmVmcmVzaFRva2VuRW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2sgaWYgYW4gYWNjZXNzIHRva2VuIGlzIGV4cGlyZWRcclxuICAgICAqIEBwYXJhbSBleHBpcmVzT25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1Rva2VuRXhwaXJlZChleHBpcmVzT246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGNoZWNrIGZvciBhY2Nlc3MgdG9rZW4gZXhwaXJ5XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblNlYyA9IE51bWJlcihleHBpcmVzT24pIHx8IDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0Q3VycmVudFRpbWVTZWMgPVxyXG4gICAgICAgICAgICBUaW1lVXRpbHMubm93U2Vjb25kcygpICtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3lzdGVtT3B0aW9ucy50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzO1xyXG5cclxuICAgICAgICAvLyBJZiBjdXJyZW50IHRpbWUgKyBvZmZzZXQgaXMgZ3JlYXRlciB0aGFuIHRva2VuIGV4cGlyYXRpb24gdGltZSwgdGhlbiB0b2tlbiBpcyBleHBpcmVkLlxyXG4gICAgICAgIHJldHVybiBvZmZzZXRDdXJyZW50VGltZVNlYyA+IGV4cGlyYXRpb25TZWM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlcyBhIHJlcXVlc3QgdG8gdGhlIHRva2VuIGVuZHBvaW50IHdpdGggdGhlIGdpdmVuIHBhcmFtZXRlcnMgYW5kIHBhcnNlcyB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKiBAcGFyYW0gdG9rZW5FbmRwb2ludFxyXG4gICAgICogQHBhcmFtIHRva2VuUmVxUGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gdG9rZW5SZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gY29kZVJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0VG9rZW5SZXNwb25zZSh0b2tlbkVuZHBvaW50OiBzdHJpbmcsIHBhcmFtZXRlckJ1aWxkZXI6IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyLCBhdXRob3JpdHk6IEF1dGhvcml0eSwgY2FjaGVkTm9uY2U/OiBzdHJpbmcsIHVzZXJTdGF0ZT86IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICAvLyBQZXJmb3JtIHRva2VuIHJlcXVlc3QuXHJcbiAgICAgICAgY29uc3QgYWNxdWlyZWRUb2tlblJlc3BvbnNlID0gYXdhaXQgdGhpcy5uZXR3b3JrQ2xpZW50LnNlbmRQb3N0UmVxdWVzdEFzeW5jPFxyXG4gICAgICAgIFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXHJcbiAgICAgICAgPih0b2tlbkVuZHBvaW50LCB7XHJcbiAgICAgICAgICAgIGJvZHk6IHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKSxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgcmVzcG9uc2UgaGFuZGxlclxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSGFuZGxlciA9IG5ldyBSZXNwb25zZUhhbmRsZXIodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsIHRoaXMudW5pZmllZENhY2hlTWFuYWdlciwgdGhpcy5jcnlwdG9VdGlscywgdGhpcy5sb2dnZXIpO1xyXG4gICAgICAgIC8vIFZhbGlkYXRlIHJlc3BvbnNlLiBUaGlzIGZ1bmN0aW9uIHRocm93cyBhIHNlcnZlciBlcnJvciBpZiBhbiBlcnJvciBpcyByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxyXG4gICAgICAgIHJlc3BvbnNlSGFuZGxlci52YWxpZGF0ZVRva2VuUmVzcG9uc2UoYWNxdWlyZWRUb2tlblJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgIC8vIFJldHVybiB0b2tlbiByZXNwb25zZSB3aXRoIGdpdmVuIHBhcmFtZXRlcnNcclxuICAgICAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gcmVzcG9uc2VIYW5kbGVyLmdlbmVyYXRlQXV0aGVudGljYXRpb25SZXN1bHQoYWNxdWlyZWRUb2tlblJlc3BvbnNlLmJvZHksIGF1dGhvcml0eSwgY2FjaGVkTm9uY2UpO1xyXG4gICAgICAgIHRva2VuUmVzcG9uc2Uuc3RhdGUgPSB1c2VyU3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyByZWZyZXNoVG9rZW4gcmVxdWVzdCBhbmQgc2VuZHMgdG8gZ2l2ZW4gdG9rZW4gZW5kcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0gcmVmcmVzaFRva2VuUmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHRva2VuRW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSByZWZyZXNoVG9rZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyByZW5ld1Rva2VuKHJlZnJlc2hUb2tlblJlcXVlc3Q6IFJlZnJlc2hUb2tlblJlcXVlc3QsIGF1dGhvcml0eTogQXV0aG9yaXR5LCB0b2tlbkVuZHBvaW50OiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1ZXN0IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyQnVpbGRlciA9IG5ldyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlcigpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudElkKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZWRpcmVjdFVyaSh0aGlzLmdldFJlZGlyZWN0VXJpKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZVNldCA9IG5ldyBTY29wZVNldChyZWZyZXNoVG9rZW5SZXF1ZXN0LnNjb3BlcyB8fCBbXSk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRTY29wZXMoc2NvcGVTZXQpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW5SZXF1ZXN0LnJlZnJlc2hUb2tlbik7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkR3JhbnRUeXBlKEdyYW50VHlwZS5SRUZSRVNIX1RPS0VOX0dSQU5UKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIC8vIFVzZXIgaGVscGVyIHRvIHJldHJpZXZlIHRva2VuIHJlc3BvbnNlLlxyXG4gICAgICAgIC8vIE5lZWQgdG8gYXdhaXQgZnVuY3Rpb24gY2FsbCBiZWZvcmUgcmV0dXJuIHRvIGNhdGNoIGFueSB0aHJvd24gZXJyb3JzLlxyXG4gICAgICAgIC8vIGlmIGVycm9ycyBhcmUgdGhyb3duIGFzeW5jaHJvbm91c2x5IGluIHJldHVybiBzdGF0ZW1lbnQsIHRoZXkgYXJlIGNhdWdodCBieSBjYWxsZXIgb2YgdGhpcyBmdW5jdGlvbiBpbnN0ZWFkLlxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFRva2VuUmVzcG9uc2UodG9rZW5FbmRwb2ludCwgcGFyYW1ldGVyQnVpbGRlciwgYXV0aG9yaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBHZXR0ZXJzIGFuZCBzZXR0ZXJzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogVXNlIHRvIGdldCB0aGUgcmVkaXJlY3QgdXJpIGNvbmZpZ3VyZWQgaW4gTVNBTCBvciBudWxsLlxyXG4gICAgICogRXZhbHVhdGVzIHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmVkaXJlY3QgVVJMXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXV0aE9wdGlvbnMucmVkaXJlY3RVcmkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5yZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aE9wdGlvbnMucmVkaXJlY3RVcmkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5yZWRpcmVjdFVyaSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5yZWRpcmVjdFVyaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciB0aHJvdyB1bmxlc3Mgd2luZG93LmxvY2F0aW9uLmhyZWYgaXMgcmV0dXJuaW5nIGVtcHR5LlxyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdFVyaUVtcHR5RXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaSBjb25maWd1cmVkIGluIE1TQUwgb3IgbnVsbC5cclxuICAgICAqIEV2YWx1YXRlcyBwb3N0TG9nb3V0cmVkaXJlY3RVcmkgaWYgaXRzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBzaW1wbHkgcmV0dXJucyBpdHMgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcG9zdCBsb2dvdXQgcmVkaXJlY3QgVVJMXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXV0aE9wdGlvbnMucG9zdExvZ291dFJlZGlyZWN0VXJpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMucG9zdExvZ291dFJlZGlyZWN0VXJpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5wb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aE9wdGlvbnMucG9zdExvZ291dFJlZGlyZWN0VXJpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIG5ldmVyIHRocm93IHVubGVzcyB3aW5kb3cubG9jYXRpb24uaHJlZiBpcyByZXR1cm5pbmcgZW1wdHkuXHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVBvc3RMb2dvdXRSZWRpcmVjdFVyaUVtcHR5RXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHNpZ25lZCBpbiBhY2NvdW50XHJcbiAgICAgKiAodGhlIGFjY291bnQgb2JqZWN0IGlzIGNyZWF0ZWQgYXQgdGhlIHRpbWUgb2Ygc3VjY2Vzc2Z1bCBsb2dpbilcclxuICAgICAqIG9yIG51bGwgd2hlbiBubyBzdGF0ZSBpcyBmb3VuZFxyXG4gICAgICogQHJldHVybnMge0BsaW5rIEFjY291bnR9IC0gdGhlIGFjY291bnQgb2JqZWN0IHN0b3JlZCBpbiBNU0FMXHJcbiAgICAgKi9cclxuICAgIGdldEFjY291bnQoaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIGVudj86IHN0cmluZywgcmxtPzogc3RyaW5nKTogQWNjb3VudEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudENhY2hlID0gdGhpcy51bmlmaWVkQ2FjaGVNYW5hZ2VyLmdldEFjY291bnRzRmlsdGVyZWRCeSh7XHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IGhvbWVBY2NvdW50SWRlbnRpZmllcixcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGVudixcclxuICAgICAgICAgICAgcmVhbG06IHJsbVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBudW1BY2NvdW50cyA9IE9iamVjdC5rZXlzKGFjY291bnRDYWNoZSkubGVuZ3RoO1xyXG4gICAgICAgIGlmIChudW1BY2NvdW50cyA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1BY2NvdW50cyA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdBY2NvdW50c0luQ2FjaGVFcnJvcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2NvdW50Q2FjaGVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJhc2VDbGllbnQgfSBmcm9tIFwiLi9CYXNlQ2xpZW50XCI7XHJcbmltcG9ydCB7IEF1dGhvcml6YXRpb25VcmxSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvQXV0aG9yaXphdGlvblVybFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyIH0gZnJvbSBcIi4uL3NlcnZlci9SZXF1ZXN0UGFyYW1ldGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBHcmFudFR5cGUgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnL0NsaWVudENvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UgfSBmcm9tIFwiLi4vc2VydmVyL1NlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtSZXNwb25zZSB9IGZyb20gXCIuLi9uZXR3b3JrL05ldHdvcmtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5cclxuLyoqXHJcbiAqIE9hdXRoMi4wIEF1dGhvcml6YXRpb24gQ29kZSBjbGllbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uQ29kZUNsaWVudCBleHRlbmRzIEJhc2VDbGllbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENsaWVudENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIFVSTCBvZiB0aGUgYXV0aG9yaXphdGlvbiByZXF1ZXN0IGxldHRpbmcgdGhlIHVzZXIgaW5wdXQgY3JlZGVudGlhbHMgYW5kIGNvbnNlbnQgdG8gdGhlXHJcbiAgICAgKiBhcHBsaWNhdGlvbi4gVGhlIFVSTCB0YXJnZXQgdGhlIC9hdXRob3JpemUgZW5kcG9pbnQgb2YgdGhlIGF1dGhvcml0eSBjb25maWd1cmVkIGluIHRoZVxyXG4gICAgICogYXBwbGljYXRpb24gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIE9uY2UgdGhlIHVzZXIgaW5wdXRzIHRoZWlyIGNyZWRlbnRpYWxzIGFuZCBjb25zZW50cywgdGhlIGF1dGhvcml0eSB3aWxsIHNlbmQgYSByZXNwb25zZSB0byB0aGUgcmVkaXJlY3QgVVJJXHJcbiAgICAgKiBzZW50IGluIHRoZSByZXF1ZXN0IGFuZCBzaG91bGQgY29udGFpbiBhbiBhdXRob3JpemF0aW9uIGNvZGUsIHdoaWNoIGNhbiB0aGVuIGJlIHVzZWQgdG8gYWNxdWlyZSB0b2tlbnMgdmlhXHJcbiAgICAgKiBhY3F1aXJlVG9rZW4oQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0KVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0QXV0aENvZGVVcmwocmVxdWVzdDogQXV0aG9yaXphdGlvblVybFJlcXVlc3QpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHRoaXMuY3JlYXRlQXV0aENvZGVVcmxRdWVyeVN0cmluZyhyZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5kZWZhdWx0QXV0aG9yaXR5LmF1dGhvcml6YXRpb25FbmRwb2ludH0/JHtxdWVyeVN0cmluZ31gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQVBJIHRvIGFjcXVpcmUgYSB0b2tlbiBpbiBleGNoYW5nZSBvZiAnYXV0aG9yaXphdGlvbl9jb2RlYCBhY3F1aXJlZCBieSB0aGUgdXNlciBpbiB0aGUgZmlyc3QgbGVnIG9mIHRoZVxyXG4gICAgICogYXV0aG9yaXphdGlvbl9jb2RlX2dyYW50XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBhY3F1aXJlVG9rZW4ocmVxdWVzdDogQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0KTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdD4ge1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaW4gYWNxdWlyZVRva2VuIGNhbGxcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlVG9rZW5SZXF1ZXN0KHRoaXMuZGVmYXVsdEF1dGhvcml0eSwgcmVxdWVzdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSGFuZGxlciA9IG5ldyBSZXNwb25zZUhhbmRsZXIoXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLFxyXG4gICAgICAgICAgICB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIsXHJcbiAgICAgICAgICAgIHRoaXMuY3J5cHRvVXRpbHMsXHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2VIYW5kbGVyLnZhbGlkYXRlVG9rZW5SZXNwb25zZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gcmVzcG9uc2VIYW5kbGVyLmdlbmVyYXRlQXV0aGVudGljYXRpb25SZXN1bHQoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmJvZHksXHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdEF1dGhvcml0eVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgUE9TVCByZXF1ZXN0IHRvIHRva2VuIGVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGV4ZWN1dGVUb2tlblJlcXVlc3QoYXV0aG9yaXR5OiBBdXRob3JpdHksIHJlcXVlc3Q6IEF1dGhvcml6YXRpb25Db2RlUmVxdWVzdClcclxuICAgICAgICA6IFByb21pc2U8TmV0d29ya1Jlc3BvbnNlPFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlPj4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHRoaXMuY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChhdXRob3JpdHkudG9rZW5FbmRwb2ludCwgcmVxdWVzdEJvZHksIGhlYWRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgbWFwIGZvciBhbGwgdGhlIHBhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2aWNlXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRva2VuUmVxdWVzdEJvZHkocmVxdWVzdDogQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG5cclxuICAgICAgICAvLyB2YWxpZGF0ZSB0aGUgcmVkaXJlY3RVcmkgKHRvIGJlIGEgbm9uIG51bGwgdmFsdWUpXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZWRpcmVjdFVyaShyZXF1ZXN0LnJlZGlyZWN0VXJpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGVTZXQgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHNjb3BlU2V0KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGNvZGU6IHVzZXIgc2V0LCBub3QgdmFsaWRhdGVkXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRBdXRob3JpemF0aW9uQ29kZShyZXF1ZXN0LmNvZGUpO1xyXG5cclxuICAgICAgICAvLyBhZGQgY29kZV92ZXJpZmllciBpZiBwYXNzZWRcclxuICAgICAgICBpZiAocmVxdWVzdC5jb2RlVmVyaWZpZXIpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb2RlVmVyaWZpZXIocmVxdWVzdC5jb2RlVmVyaWZpZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRHcmFudFR5cGUoR3JhbnRUeXBlLkFVVEhPUklaQVRJT05fQ09ERV9HUkFOVCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIEFQSSB2YWxpZGF0ZXMgdGhlIGBBdXRob3JpemF0aW9uQ29kZVVybFJlcXVlc3RgIGFuZCBjcmVhdGVzIGEgVVJMXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUF1dGhDb2RlVXJsUXVlcnlTdHJpbmcocmVxdWVzdDogQXV0aG9yaXphdGlvblVybFJlcXVlc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJZCh0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlU2V0ID0gbmV3IFNjb3BlU2V0KHJlcXVlc3Quc2NvcGVzIHx8IFtdKTtcclxuICAgICAgICBpZiAocmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudCkge1xyXG4gICAgICAgICAgICBzY29wZVNldC5hcHBlbmRTY29wZXMocmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHNjb3BlU2V0KTtcclxuXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgdGhlIHJlZGlyZWN0VXJpICh0byBiZSBhIG5vbiBudWxsIHZhbHVlKVxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUmVkaXJlY3RVcmkocmVxdWVzdC5yZWRpcmVjdFVyaSk7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIHRoZSBjb3JyZWxhdGlvbklkIGlmIG5vdCBzZXQgYnkgdGhlIHVzZXIgYW5kIGFkZFxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSByZXF1ZXN0LmNvcnJlbGF0aW9uSWQgfHwgdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIC8vIGFkZCByZXNwb25zZV9tb2RlLiBJZiBub3QgcGFzc2VkIGluIGl0IGRlZmF1bHRzIHRvIHF1ZXJ5LlxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUmVzcG9uc2VNb2RlKHJlcXVlc3QucmVzcG9uc2VNb2RlKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHJlc3BvbnNlX3R5cGUgPSBjb2RlXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZXNwb25zZVR5cGVDb2RlKCk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBsaWJyYXJ5IGluZm8gcGFyYW1ldGVyc1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkTGlicmFyeUluZm8odGhpcy5jb25maWcubGlicmFyeUluZm8pO1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5jb2RlQ2hhbGxlbmdlKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ29kZUNoYWxsZW5nZVBhcmFtcyhyZXF1ZXN0LmNvZGVDaGFsbGVuZ2UsIHJlcXVlc3QuY29kZUNoYWxsZW5nZU1ldGhvZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0ZSkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFN0YXRlKHJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QucHJvbXB0KSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUHJvbXB0KHJlcXVlc3QucHJvbXB0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmxvZ2luSGludCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZExvZ2luSGludChyZXF1ZXN0LmxvZ2luSGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5kb21haW5IaW50KSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkRG9tYWluSGludChyZXF1ZXN0LmRvbWFpbkhpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3Qubm9uY2UpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGROb25jZShyZXF1ZXN0Lm5vbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmNsYWltcykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsYWltcyhyZXF1ZXN0LmNsYWltcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5leHRyYVF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZEV4dHJhUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERldmljZUNvZGVSZXNwb25zZSwgU2VydmVyRGV2aWNlQ29kZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL0RldmljZUNvZGVSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBCYXNlQ2xpZW50IH0gZnJvbSBcIi4vQmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBEZXZpY2VDb2RlUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L0RldmljZUNvZGVSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIgfSBmcm9tIFwiLi4vc2VydmVyL1JlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cywgR3JhbnRUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuLi91dGlscy9UaW1lVXRpbHNcIjtcclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UgfSBmcm9tIFwiLi4vc2VydmVyL1NlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuXHJcbi8qKlxyXG4gKiBPQXV0aDIuMCBEZXZpY2UgY29kZSBjbGllbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VDb2RlQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBkZXZpY2UgY29kZSBmcm9tIGRldmljZSBjb2RlIGVuZHBvaW50LCBjYWxscyBiYWNrIHRvIHdpdGggZGV2aWNlIGNvZGUgcmVzcG9uc2UsIGFuZFxyXG4gICAgICogcG9sbHMgdG9rZW4gZW5kcG9pbnQgdG8gZXhjaGFuZ2UgZGV2aWNlIGNvZGUgZm9yIHRva2Vuc1xyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGFjcXVpcmVUb2tlbihyZXF1ZXN0OiBEZXZpY2VDb2RlUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRldmljZUNvZGVSZXNwb25zZTogRGV2aWNlQ29kZVJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXREZXZpY2VDb2RlKHJlcXVlc3QpO1xyXG4gICAgICAgIHJlcXVlc3QuZGV2aWNlQ29kZUNhbGxiYWNrKGRldmljZUNvZGVSZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlID0gYXdhaXQgdGhpcy5hY3F1aXJlVG9rZW5XaXRoRGV2aWNlQ29kZShcclxuICAgICAgICAgICAgcmVxdWVzdCxcclxuICAgICAgICAgICAgZGV2aWNlQ29kZVJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETyBoYW5kbGUgcmVzcG9uc2VcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBkZXZpY2UgY29kZSByZXF1ZXN0IGFuZCBleGVjdXRlcyBodHRwIEdFVFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXREZXZpY2VDb2RlKHJlcXVlc3Q6IERldmljZUNvZGVSZXF1ZXN0KTogUHJvbWlzZTxEZXZpY2VDb2RlUmVzcG9uc2U+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB0aGlzLmNyZWF0ZVF1ZXJ5U3RyaW5nKHJlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZURlZmF1bHRMaWJyYXJ5SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlUG9zdFJlcXVlc3RUb0RldmljZUNvZGVFbmRwb2ludCh0aGlzLmRlZmF1bHRBdXRob3JpdHkuZGV2aWNlQ29kZUVuZHBvaW50LCBxdWVyeVN0cmluZywgaGVhZGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlcyBQT1NUIHJlcXVlc3QgdG8gZGV2aWNlIGNvZGUgZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSBkZXZpY2VDb2RlRW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSBxdWVyeVN0cmluZ1xyXG4gICAgICogQHBhcmFtIGhlYWRlcnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlUG9zdFJlcXVlc3RUb0RldmljZUNvZGVFbmRwb2ludChcclxuICAgICAgICBkZXZpY2VDb2RlRW5kcG9pbnQ6IHN0cmluZyxcclxuICAgICAgICBxdWVyeVN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIGhlYWRlcnM6IE1hcDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPERldmljZUNvZGVSZXNwb25zZT4ge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJfY29kZTogdXNlckNvZGUsXHJcbiAgICAgICAgICAgICAgICBkZXZpY2VfY29kZTogZGV2aWNlQ29kZSxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl91cmk6IHZlcmlmaWNhdGlvblVyaSxcclxuICAgICAgICAgICAgICAgIGV4cGlyZXNfaW46IGV4cGlyZXNJbixcclxuICAgICAgICAgICAgICAgIGludGVydmFsLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMubmV0d29ya0NsaWVudC5zZW5kUG9zdFJlcXVlc3RBc3luYzxTZXJ2ZXJEZXZpY2VDb2RlUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICBkZXZpY2VDb2RlRW5kcG9pbnQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IHF1ZXJ5U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlckNvZGUsXHJcbiAgICAgICAgICAgIGRldmljZUNvZGUsXHJcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvblVyaSxcclxuICAgICAgICAgICAgZXhwaXJlc0luLFxyXG4gICAgICAgICAgICBpbnRlcnZhbCxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZGV2aWNlIGNvZGUgZW5kcG9pbnQgcXVlcnkgcGFyYW1ldGVycyBhbmQgcmV0dXJucyBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVRdWVyeVN0cmluZyhyZXF1ZXN0OiBEZXZpY2VDb2RlUmVxdWVzdCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXI6IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlU2V0ID0gbmV3IFNjb3BlU2V0KHJlcXVlc3Quc2NvcGVzIHx8IFtdKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFNjb3BlcyhzY29wZVNldCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJZCh0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRva2VuIHJlcXVlc3Qgd2l0aCBkZXZpY2UgY29kZSByZXNwb25zZSBhbmQgcG9sbHMgdG9rZW4gZW5kcG9pbnQgYXQgaW50ZXJ2YWwgc2V0IGJ5IHRoZSBkZXZpY2UgY29kZVxyXG4gICAgICogcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gZGV2aWNlQ29kZVJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgYWNxdWlyZVRva2VuV2l0aERldmljZUNvZGUoXHJcbiAgICAgICAgcmVxdWVzdDogRGV2aWNlQ29kZVJlcXVlc3QsXHJcbiAgICAgICAgZGV2aWNlQ29kZVJlc3BvbnNlOiBEZXZpY2VDb2RlUmVzcG9uc2UpOiBQcm9taXNlPFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0gdGhpcy5jcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3QsIGRldmljZUNvZGVSZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyczogTWFwPHN0cmluZywgc3RyaW5nPiA9IHRoaXMuY3JlYXRlRGVmYXVsdFRva2VuUmVxdWVzdEhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGV2aWNlQ29kZUV4cGlyYXRpb25UaW1lID0gVGltZVV0aWxzLm5vd1NlY29uZHMoKSArIGRldmljZUNvZGVSZXNwb25zZS5leHBpcmVzSW47XHJcbiAgICAgICAgY29uc3QgcG9sbGluZ0ludGVydmFsTWlsbGkgPSBkZXZpY2VDb2RlUmVzcG9uc2UuaW50ZXJ2YWwgKiAxMDAwO1xyXG5cclxuICAgICAgICAvLyBQb2xsIHRva2VuIGVuZHBvaW50IHdoaWxlIChkZXZpY2UgY29kZSBpcyBub3QgZXhwaXJlZCBBTkQgb3BlcmF0aW9uIGhhcyBub3QgYmVlbiBjYW5jZWxsZWQgYnlcclxuICAgICAgICAvLyBzZXR0aW5nIENhbmNlbGxhdGlvblRva2VuLmNhbmNlbCA9IHRydWUpLiBQT1NUIHJlcXVlc3QgaXMgc2VudCBhdCBpbnRlcnZhbCBzZXQgYnkgcG9sbGluZ0ludGVydmFsTWlsbGlcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsSWQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+ID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5jYW5jZWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiVG9rZW4gcmVxdWVzdCBjYW5jZWxsZWQgYnkgc2V0dGluZyBEZXZpY2VDb2RlUmVxdWVzdC5jYW5jZWwgPSB0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZURldmljZUNvZGVDYW5jZWxsZWRFcnJvcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChUaW1lVXRpbHMubm93U2Vjb25kcygpID4gZGV2aWNlQ29kZUV4cGlyYXRpb25UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBEZXZpY2UgY29kZSBleHBpcmVkLiBFeHBpcmF0aW9uIHRpbWUgb2YgZGV2aWNlIGNvZGUgd2FzICR7ZGV2aWNlQ29kZUV4cGlyYXRpb25UaW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZURldmljZUNvZGVFeHBpcmVkRXJyb3IoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdEF1dGhvcml0eS50b2tlbkVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5ib2R5ICYmIHJlc3BvbnNlLmJvZHkuZXJyb3IgPT0gQ29uc3RhbnRzLkFVVEhPUklaQVRJT05fUEVORElORykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlciBhdXRob3JpemF0aW9uIGlzIHBlbmRpbmcuIFNsZWVwIGZvciBwb2xsaW5nIGludGVydmFsIGFuZCB0cnkgYWdhaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8ocmVzcG9uc2UuYm9keS5lcnJvcl9kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBwb2xsaW5nSW50ZXJ2YWxNaWxsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHF1ZXJ5IHBhcmFtZXRlcnMgYW5kIGNvbnZlcnRzIHRvIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gZGV2aWNlQ29kZVJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0OiBEZXZpY2VDb2RlUmVxdWVzdCwgZGV2aWNlQ29kZVJlc3BvbnNlOiBEZXZpY2VDb2RlUmVzcG9uc2UpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0UGFyYW1ldGVyczogUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGVTZXQgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIHJlcXVlc3RQYXJhbWV0ZXJzLmFkZFNjb3BlcyhzY29wZVNldCk7XHJcbiAgICAgICAgcmVxdWVzdFBhcmFtZXRlcnMuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG4gICAgICAgIHJlcXVlc3RQYXJhbWV0ZXJzLmFkZEdyYW50VHlwZShHcmFudFR5cGUuREVWSUNFX0NPREVfR1JBTlQpO1xyXG4gICAgICAgIHJlcXVlc3RQYXJhbWV0ZXJzLmFkZERldmljZUNvZGUoZGV2aWNlQ29kZVJlc3BvbnNlLmRldmljZUNvZGUpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0UGFyYW1ldGVycy5jcmVhdGVRdWVyeVN0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBCYXNlQ2xpZW50IH0gZnJvbSBcIi4vQmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVG9rZW5SZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvUmVmcmVzaFRva2VuUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHksIE5ldHdvcmtSZXNwb25zZSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSB9IGZyb20gXCIuLi9zZXJ2ZXIvU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIgfSBmcm9tIFwiLi4vc2VydmVyL1JlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgR3JhbnRUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBSZXNwb25zZUhhbmRsZXIgfSBmcm9tIFwiLi4vcmVzcG9uc2UvUmVzcG9uc2VIYW5kbGVyXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3BvbnNlL0F1dGhlbnRpY2F0aW9uUmVzdWx0XCI7XHJcblxyXG4vKipcclxuICogT0F1dGgyLjAgcmVmcmVzaCB0b2tlbiBjbGllbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWZyZXNoVG9rZW5DbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDbGllbnRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlndXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFjcXVpcmVUb2tlbihyZXF1ZXN0OiBSZWZyZXNoVG9rZW5SZXF1ZXN0KTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdD57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmV4ZWN1dGVUb2tlblJlcXVlc3QocmVxdWVzdCwgdGhpcy5kZWZhdWx0QXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcihcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMudW5pZmllZENhY2hlTWFuYWdlcixcclxuICAgICAgICAgICAgdGhpcy5jcnlwdG9VdGlscyxcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXNwb25zZUhhbmRsZXIudmFsaWRhdGVUb2tlblJlc3BvbnNlKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSByZXNwb25zZUhhbmRsZXIuZ2VuZXJhdGVBdXRoZW50aWNhdGlvblJlc3VsdChcclxuICAgICAgICAgICAgcmVzcG9uc2UuYm9keSxcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0QXV0aG9yaXR5XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRva2VuUmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IFJlZnJlc2hUb2tlblJlcXVlc3QsIGF1dGhvcml0eTogQXV0aG9yaXR5KVxyXG4gICAgICAgIDogUHJvbWlzZTxOZXR3b3JrUmVzcG9uc2U8U2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2U+PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0gdGhpcy5jcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSB0aGlzLmNyZWF0ZURlZmF1bHRUb2tlblJlcXVlc3RIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVQb3N0VG9Ub2tlbkVuZHBvaW50KGF1dGhvcml0eS50b2tlbkVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGVhZGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3Q6IFJlZnJlc2hUb2tlblJlcXVlc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGVTZXQgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHNjb3BlU2V0KTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudElkKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZEdyYW50VHlwZShHcmFudFR5cGUuUkVGUkVTSF9UT0tFTl9HUkFOVCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZWZyZXNoVG9rZW4ocmVxdWVzdC5yZWZyZXNoVG9rZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVyQnVpbGRlci5jcmVhdGVRdWVyeVN0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQmFzZUNsaWVudCB9IGZyb20gXCIuL0Jhc2VDbGllbnRcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTaWxlbnRGbG93UmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L1NpbGVudEZsb3dSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3BvbnNlL0F1dGhlbnRpY2F0aW9uUmVzdWx0XCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJZFRva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0lkVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgQ2FjaGVIZWxwZXIgfSBmcm9tIFwiLi4vY2FjaGUvdXRpbHMvQ2FjaGVIZWxwZXJcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjZXNzVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL1JlZnJlc2hUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBTY29wZVNldCB9IGZyb20gXCIuLi9yZXF1ZXN0L1Njb3BlU2V0XCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vYWNjb3VudC9JZFRva2VuXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuLi91dGlscy9UaW1lVXRpbHNcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L1JlZnJlc2hUb2tlblJlcXVlc3RcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuQ2xpZW50IH0gZnJvbSBcIi4vUmVmcmVzaFRva2VuQ2xpZW50XCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgQ3JlZGVudGlhbEZpbHRlciwgQ3JlZGVudGlhbENhY2hlIH0gZnJvbSBcIi4uL2NhY2hlL3V0aWxzL0NhY2hlVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWxlbnRGbG93Q2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgdG9rZW4gZnJvbSBjYWNoZSBpZiBpdCBpcyBzdGlsbCB2YWxpZCwgb3IgdXNlcyB0aGUgY2FjaGVkIHJlZnJlc2ggdG9rZW4gdG8gcmVuZXdcclxuICAgICAqIHRoZSBnaXZlbiB0b2tlbiBhbmQgcmV0dXJucyB0aGUgcmVuZXdlZCB0b2tlblxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGFjcXVpcmVUb2tlbihyZXF1ZXN0OiBTaWxlbnRGbG93UmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICAvLyBXZSBjdXJyZW50bHkgZG8gbm90IHN1cHBvcnQgc2lsZW50IGZsb3cgZm9yIGFjY291bnQgPT09IG51bGwgdXNlIGNhc2VzOyBUaGlzIHdpbGwgYmUgcmV2aXNpdGVkIGZvciBjb25maWRlbnRpYWwgZmxvdyB1c2VjYXNlc1xyXG4gICAgICAgIGlmICghcmVxdWVzdC5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb0FjY291bnRJblNpbGVudFJlcXVlc3RFcnJvcigpO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RTY29wZXMgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIC8vIGZldGNoIGFjY291bnRcclxuICAgICAgICBjb25zdCBhY2NvdW50S2V5OiBzdHJpbmcgPSBDYWNoZUhlbHBlci5nZW5lcmF0ZUFjY291bnRDYWNoZUtleShyZXF1ZXN0LmFjY291bnQpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY291bnQgPSB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIuZ2V0QWNjb3VudChhY2NvdW50S2V5KTtcclxuXHJcbiAgICAgICAgY29uc3QgaG9tZUFjY291bnRJZCA9IGNhY2hlZEFjY291bnQuaG9tZUFjY291bnRJZDtcclxuICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IGNhY2hlZEFjY291bnQuZW52aXJvbm1lbnQ7XHJcblxyXG4gICAgICAgIC8vIGZldGNoIGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW5cclxuICAgICAgICBjb25zdCBjYWNoZWRJZFRva2VuID0gdGhpcy5yZWFkSWRUb2tlbkZyb21DYWNoZShob21lQWNjb3VudElkLCBlbnZpcm9ubWVudCwgY2FjaGVkQWNjb3VudC5yZWFsbSk7XHJcbiAgICAgICAgY29uc3QgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGNhY2hlZElkVG9rZW4uc2VjcmV0LCB0aGlzLmNvbmZpZy5jcnlwdG9JbnRlcmZhY2UpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY2Vzc1Rva2VuID0gdGhpcy5yZWFkQWNjZXNzVG9rZW5Gcm9tQ2FjaGUoaG9tZUFjY291bnRJZCwgZW52aXJvbm1lbnQsIHJlcXVlc3RTY29wZXMsIGNhY2hlZEFjY291bnQucmVhbG0pO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZFJlZnJlc2hUb2tlbiA9IHRoaXMucmVhZFJlZnJlc2hUb2tlbkZyb21DYWNoZShob21lQWNjb3VudElkLCBlbnZpcm9ubWVudCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHJlZnJlc2ggaXMgZm9yY2VkLCBvciBpZiB0b2tlbnMgYXJlIGV4cGlyZWQuIElmIG5laXRoZXIgYXJlIHRydWUsIHJldHVybiBhIHRva2VuIHJlc3BvbnNlIHdpdGggdGhlIGZvdW5kIHRva2VuIGVudHJ5LlxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmZvcmNlUmVmcmVzaCB8fCAhY2FjaGVkQWNjZXNzVG9rZW4gfHwgdGhpcy5pc1Rva2VuRXhwaXJlZChjYWNoZWRBY2Nlc3NUb2tlbi5leHBpcmVzT24pKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIHJlZnJlc2ggVG9rZW5cclxuICAgICAgICAgICAgaWYgKCFjYWNoZWRSZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb1Rva2Vuc0ZvdW5kRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuQ2xpZW50ID0gbmV3IFJlZnJlc2hUb2tlbkNsaWVudCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlblJlcXVlc3Q6IFJlZnJlc2hUb2tlblJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZXM6IHJlcXVlc3Quc2NvcGVzLFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBjYWNoZWRSZWZyZXNoVG9rZW4uc2VjcmV0LFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5OiByZXF1ZXN0LmF1dGhvcml0eVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbkNsaWVudC5hY3F1aXJlVG9rZW4ocmVmcmVzaFRva2VuUmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSBBdXRoZW50aWNhdGlvbiBSZXN1bHRcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bmlxdWVJZDogaWRUb2tlbk9iai5jbGFpbXMub2lkIHx8IGlkVG9rZW5PYmouY2xhaW1zLnN1YixcclxuICAgICAgICAgICAgdGVuYW50SWQ6IGlkVG9rZW5PYmouY2xhaW1zLnRpZCxcclxuICAgICAgICAgICAgc2NvcGVzOiByZXF1ZXN0U2NvcGVzLmFzQXJyYXkoKSxcclxuICAgICAgICAgICAgYWNjb3VudDogQ2FjaGVIZWxwZXIudG9JQWNjb3VudChjYWNoZWRBY2NvdW50KSxcclxuICAgICAgICAgICAgaWRUb2tlbjogY2FjaGVkSWRUb2tlbi5zZWNyZXQsXHJcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogY2FjaGVkQWNjZXNzVG9rZW4uc2VjcmV0LFxyXG4gICAgICAgICAgICBmcm9tQ2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGV4cGlyZXNPbjogbmV3IERhdGUoY2FjaGVkQWNjZXNzVG9rZW4uZXhwaXJlc09uKSxcclxuICAgICAgICAgICAgZXh0RXhwaXJlc09uOiBuZXcgRGF0ZShjYWNoZWRBY2Nlc3NUb2tlbi5leHRlbmRlZEV4cGlyZXNPbiksXHJcbiAgICAgICAgICAgIGZhbWlseUlkOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmZXRjaGVzIGlkVG9rZW4gZnJvbSBjYWNoZSBpZiBwcmVzZW50XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRJZFRva2VuRnJvbUNhY2hlKGhvbWVBY2NvdW50SWQ6IHN0cmluZywgZW52aXJvbm1lbnQ6IHN0cmluZywgaW5wdXRSZWFsbTogc3RyaW5nKTogSWRUb2tlbkVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgaWRUb2tlbktleTogc3RyaW5nID0gQ2FjaGVIZWxwZXIuZ2VuZXJhdGVDcmVkZW50aWFsQ2FjaGVLZXkoXHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTixcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGlucHV0UmVhbG1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIuZ2V0Q3JlZGVudGlhbChpZFRva2VuS2V5KSBhcyBJZFRva2VuRW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2hlcyBhY2Nlc3NUb2tlbiBmcm9tIGNhY2hlIGlmIHByZXNlbnRcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZEFjY2Vzc1Rva2VuRnJvbUNhY2hlKGhvbWVBY2NvdW50SWQ6IHN0cmluZywgZW52aXJvbm1lbnQ6IHN0cmluZywgc2NvcGVzOiBTY29wZVNldCwgaW5wdXRSZWFsbTogc3RyaW5nKTogQWNjZXNzVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuRmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyID0ge1xyXG4gICAgICAgICAgICBob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTixcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLFxyXG4gICAgICAgICAgICByZWFsbTogaW5wdXRSZWFsbSxcclxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZXMucHJpbnRTY29wZXMoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbENhY2hlOiBDcmVkZW50aWFsQ2FjaGUgPSB0aGlzLnVuaWZpZWRDYWNoZU1hbmFnZXIuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KGFjY2Vzc1Rva2VuRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbnMgPSBPYmplY3QudmFsdWVzKGNyZWRlbnRpYWxDYWNoZS5hY2Nlc3NUb2tlbnMpO1xyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoYXQgdG8gdGhyb3cgb3IgcmV0dXJuIGhlcmUuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhY2Nlc3NUb2tlbnMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2Vuc1swXSBhcyBBY2Nlc3NUb2tlbkVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZldGNoZXMgcmVmcmVzaFRva2VuIGZyb20gY2FjaGUgaWYgcHJlc2VudFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkUmVmcmVzaFRva2VuRnJvbUNhY2hlKGhvbWVBY2NvdW50SWQ6IHN0cmluZywgZW52aXJvbm1lbnQ6IHN0cmluZyk6IFJlZnJlc2hUb2tlbkVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuS2V5OiBzdHJpbmcgPSBDYWNoZUhlbHBlci5nZW5lcmF0ZUNyZWRlbnRpYWxDYWNoZUtleShcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIENyZWRlbnRpYWxUeXBlLlJFRlJFU0hfVE9LRU4sXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy51bmlmaWVkQ2FjaGVNYW5hZ2VyLmdldENyZWRlbnRpYWwocmVmcmVzaFRva2VuS2V5KSBhcyBSZWZyZXNoVG9rZW5FbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBpZiBhIHRva2VuIGlzIGV4cGlyZWQgYmFzZWQgb24gZ2l2ZW4gVVRDIHRpbWUgaW4gc2Vjb25kcy5cclxuICAgICAqIEBwYXJhbSBleHBpcmVzT25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1Rva2VuRXhwaXJlZChleHBpcmVzT246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGNoZWNrIGZvciBhY2Nlc3MgdG9rZW4gZXhwaXJ5XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblNlYyA9IE51bWJlcihleHBpcmVzT24pIHx8IDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0Q3VycmVudFRpbWVTZWMgPSBUaW1lVXRpbHMubm93U2Vjb25kcygpICsgdGhpcy5jb25maWcuc3lzdGVtT3B0aW9ucy50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzO1xyXG5cclxuICAgICAgICAvLyBJZiBjdXJyZW50IHRpbWUgKyBvZmZzZXQgaXMgZ3JlYXRlciB0aGFuIHRva2VuIGV4cGlyYXRpb24gdGltZSwgdGhlbiB0b2tlbiBpcyBleHBpcmVkLlxyXG4gICAgICAgIHJldHVybiAob2Zmc2V0Q3VycmVudFRpbWVTZWMgPiBleHBpcmF0aW9uU2VjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi4vdXRpbHMvTXNhbFR5cGVzXCI7XHJcbmltcG9ydCB7IElBY2NvdW50IH0gZnJvbSBcIi4uL2FjY291bnQvSUFjY291bnRcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXN1bHQgcmV0dXJuZWQgZnJvbSB0aGUgYXV0aG9yaXR5J3MgdG9rZW4gZW5kcG9pbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25SZXN1bHQge1xyXG4gICAgdW5pcXVlSWQ6IHN0cmluZztcclxuICAgIHRlbmFudElkOiBzdHJpbmc7XHJcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICBhY2NvdW50OiBJQWNjb3VudDtcclxuICAgIGlkVG9rZW46IHN0cmluZztcclxuICAgIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3Q7XHJcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgZnJvbUNhY2hlOiBib29sZWFuO1xyXG4gICAgZXhwaXJlc09uOiBEYXRlO1xyXG4gICAgZXh0RXhwaXJlc09uPzogRGF0ZTtcclxuICAgIHN0YXRlPzogc3RyaW5nO1xyXG4gICAgZmFtaWx5SWQ/OiBzdHJpbmc7XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3Mgd2hpY2ggcHJvdmlkZXMgaGVscGVycyBmb3IgT0F1dGggMi4wIHByb3RvY29sIHNwZWNpZmljIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb3RvY29sVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kcyB1c2VyIHN0YXRlIHdpdGggcmFuZG9tIGd1aWQsIG9yIHJldHVybnMgcmFuZG9tIGd1aWQuXHJcbiAgICAgKiBAcGFyYW0gdXNlclN0YXRlIFxyXG4gICAgICogQHBhcmFtIHJhbmRvbUd1aWQgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRSZXF1ZXN0U3RhdGUodXNlclN0YXRlOiBzdHJpbmcsIHJhbmRvbUd1aWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdVdGlscy5pc0VtcHR5KHVzZXJTdGF0ZSkgPyBgJHtyYW5kb21HdWlkfSR7Q29uc3RhbnRzLlJFU09VUkNFX0RFTElNfSR7dXNlclN0YXRlfWAgOiByYW5kb21HdWlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEV4dHJhY3RzIHVzZXIgc3RhdGUgdmFsdWUgZnJvbSB0aGUgc3RhdGUgc2VudCB3aXRoIHRoZSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRVc2VyUmVxdWVzdFN0YXRlKHNlcnZlclJlc3BvbnNlU3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHNlcnZlclJlc3BvbnNlU3RhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBzZXJ2ZXJSZXNwb25zZVN0YXRlLmluZGV4T2YoQ29uc3RhbnRzLlJFU09VUkNFX0RFTElNKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0SW5kZXggPiAtMSAmJiBzcGxpdEluZGV4ICsgMSA8IHNlcnZlclJlc3BvbnNlU3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmVyUmVzcG9uc2VTdGF0ZS5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMb2dMZXZlbCIsIlBlcnNpc3RlbnRDYWNoZUtleXMiLCJSZXNwb25zZU1vZGUiLCJDcmVkZW50aWFsVHlwZSIsIkNhY2hlU2NoZW1hVHlwZSIsIkF1dGhvcml0eVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBOzs7O0lBS0E7OztRQUdhLGdCQUFnQixHQUFHO1FBQzVCLGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsSUFBSSxFQUFFLHFDQUFxQztTQUM5QztNQUNIO0lBRUY7Ozs7UUFHK0IsNkJBQUs7UUFPaEMsbUJBQVksU0FBaUIsRUFBRSxZQUFxQjtZQUFwRCxpQkFRQztZQVBHLElB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
