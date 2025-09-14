# Can I Use RSCs (React Server Components)

Features support list across different frameworks and libraries.

There are **{{NUM_OF_CASES}}** test cases in total. You can see them all in the table below. Testing against the following frameworks/libraries:

{{GENERIC_INFO}}

## Contribute

* Do not edit manually the README.md files. There are templates in `./scripts/templates`.
* If you want to update any of the test cases change the files in the `./cases` directory. Then run `npm run build`. This will distribute them across the apps in the `./apps` directory.
* Some of the frameworks/libraries need slightly different format of the test cases. That's why there are helper functions to prepare the case files in `./scripts/vendors`.

### Add a new test case

Add a new directory in the `./cases` folder. Make sure there is `case.json` and `Page.tsx` file. Use some of existing ones as a template. Then edit `./app.json` to reflect the support level.

### Add a new framework or a library

Edit `./app.json` and `APPS` array in `./scripts/build.js`. Use the `Next.js` definition as a template. Have in mind that you can modify the cases source code so they fit the specifics of the suggested solution. Look for `processFile` and `setup` functions. Use the `npm run build` command to copy the cases (and format them) in the relevant directory.

## RSCs support per case

{{TABLE_OF_SUPPORT}}
