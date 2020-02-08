# Remember my netflix profile

Say goodbye to this page:

![Profile page](./src/img/profile-page.png)

The cookie used by Netflix to store profiles is expiring 30 minutes after being created. When the cookie is about to expired, this extension extends the expiration date for one more year. 

It has been developed thanks to [this repo](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate).


## To run it on your machine

1. Check if your Node.js version is >= 6.
2. Clone the repository.
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/).
4. Run `yarn`.
5. Run `npm run start`
6. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder.
7. Have fun.
