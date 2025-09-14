# Can I Use RSCs (React Server Components)

Features support list across different frameworks and libraries.

There are **{{NUM_OF_CASES}}** test cases in total. You can see them all in the table below. Testing against the following frameworks/libraries:

{{GENERIC_INFO}}

## Contribute

* Do not edit manually the README.md files. There are templates in [`./scripts/templates`]([./tree/main/scripts/templates](https://github.com/krasimir/CanIUseRSCs/tree/main/scripts/templates)).
* If you want to update any of the test cases change the files in the [`./cases`](https://github.com/krasimir/CanIUseRSCs/tree/main/cases) directory. Then run `npm run build`. This will distribute them across the apps in the [`./apps`](https://github.com/krasimir/CanIUseRSCs/tree/main/scripts/apps) directory.
* Some of the frameworks/libraries need slightly different format of the test cases. That's why there are helper for that in [`./scripts/vendors`](https://github.com/krasimir/CanIUseRSCs/tree/main/scripts/vendors).

### Edit a test case

Modify the files in the [`./cases`](https://github.com/krasimir/CanIUseRSCs/tree/main/cases) diretory and run `npm run build`.

### Add a new test case

Add a new directory in the [`./cases`](https://github.com/krasimir/CanIUseRSCs/tree/main/cases) folder. Make sure there is `case.json` and `Page.tsx` file. Use some of the existing ones as a template. Then edit [`./app.json`](https://github.com/krasimir/CanIUseRSCs/blob/main/apps.json) to reflect the support level.

### Add a new framework or a library

Edit `./app.json` and `APPS` array in `./scripts/build.js`. Use the `Next.js` definition as a template. Have in mind that you can modify the cases source code so they fit the specifics of the suggested solution. Look for `processFile` and `setup` functions. Use the `npm run build` command to copy the cases (and format them) in the relevant directory.

## RSCs support per case

{{TABLE_OF_SUPPORT}}
