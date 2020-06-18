import { Session } from 'bc-react-session'
import { GET } from "./utils/api"
import log from './utils/log'
import toaster from "toasted-notes"

export const autoLogin = (token = '') => {
    Session.destroy();

    return new Promise((resolve, reject) => GET('auth/user/me', null, { 'Authorization': 'Token ' + token })
        .then(function (user) {
            // if (!profile.employer) {
            //     Notify.error("Only employers are allowed to login into this application");
            //     reject("Only employers are allowed to login into this application");
            // }
            // else if (!profile.status === 'SUSPENDED') {
            //     Notify.error("Your account seems to be innactive, contact support for any further details");
            //     reject("Your account seems to be innactive, contact support for any further details");
            // }
            // else {
                const payload = { user, access_token: token };
                Session.start({ payload });
                resolve(payload);
            // }
        })
        .catch(function (error) {
            reject(error.message || error);
            toaster.notify(error.message || error);
            log.error(error);
        })
    );
};

export const logout = () => {
    setTimeout(() => {
        Session.destroy();
        // store = new _Store();
      }, 3000);
};