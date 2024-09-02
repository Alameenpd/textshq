import React from 'react';
import type { PlatformAPI, LoginCreds } from '@textshq/platform-sdk';
export declare const Auth: React.FC<{
    api: PlatformAPI;
    login: (creds: LoginCreds) => void;
}>;
export default Auth;
