# Can I Use RSCs (React Server Components)

Features support list across different frameworks and libraries.

There are **12** test cases in total. You can see them all in the table below. Testing against the following frameworks/libraries:

- [Next.js](https://nextjs.org/) (100% support) - Probably the most popular React framework
- [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md) (100% support) - Official Vite plugin for React Server Components. Framework agnostic.
- [Waku](https://waku.gg/) (100% support) - A React framework with first-class support for React Server Components
- [Forket](https://github.com/krasimir/forket) (83% support) - A framework agnostic library that produces server and client version of your code. Plugable to your current setup.
- [Parcel](https://parceljs.org/recipes/rsc/) (83% support) - Official Parcel support for React Server Components. Framework agnostic.
- [ReactRouter](https://remix.run/blog/rsc-preview) (83% support) - Experimental version of React Router with RSC support
- [RedwoodSDK](https://docs.rwsdk.com/) (83% support) - A full-stack React framework

## Contribute

* Do not edit manually the README.md files. There are templates in [`./scripts/templates`](https://github.com/krasimir/CanIUseRSCs/tree/main/scripts/templates).
* If you want to update any of the test cases change the files in the [`./cases`](https://github.com/krasimir/CanIUseRSCs/tree/main/cases) directory. Then run `npm run build`. This will distribute them across the apps in the [`./apps`](https://github.com/krasimir/CanIUseRSCs/tree/main/apps) directory.
* Some of the frameworks/libraries need slightly different format of the test cases. That's why there are helper for that in [`./scripts/vendors`](https://github.com/krasimir/CanIUseRSCs/tree/main/scripts/vendors).

### Edit a test case

Modify the files in the [`./cases`](https://github.com/krasimir/CanIUseRSCs/tree/main/cases) diretory and run `npm run build`.

### Add a new test case

Add a new directory in the [`./cases`](https://github.com/krasimir/CanIUseRSCs/tree/main/cases) folder. Make sure there is `case.json` and `Page.tsx` file. Use some of the existing ones as a template. Then edit [`./app.json`](https://github.com/krasimir/CanIUseRSCs/blob/main/apps.json) to reflect the support level.

### Add a new framework or a library

Edit `./app.json` and `APPS` array in `./scripts/build.js`. Use the `Next.js` definition as a template. Have in mind that you can modify the cases source code so they fit the specifics of the suggested solution. Look for `processFile` and `setup` functions. Use the `npm run build` command to copy the cases (and format them) in the relevant directory.

## RSCs support per case

| Case | Framework / Library |
| ---- | ---- |
| | <img width="450"/> |
| (01) [Rendering async component on the server](./cases/01)<br />Basic example of an async server component. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (02) [Mixing server and client components](./cases/02)<br />Passing server generated data as a child of a client component. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (03) [Hydrating client component](./cases/03)<br />A client component that is hydrated with children passed from the server component. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (04) [Passing server function to client component](./cases/04)<br />A client component receives a server function as a prop and calls it. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (05) [Client component imports server function](./cases/05)<br />A client component imports server function and uses it. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (06) [Inlined server function (inside a server component)](./cases/06)<br />Creating a server function and pass it as a prop to client component | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />❌ [Parcel](https://parceljs.org/recipes/rsc/)<br />❌ [ReactRouter](https://remix.run/blog/rsc-preview)<br />❌ [RedwoodSDK](https://docs.rwsdk.com/) |
| (07) [Server Functions with Actions](./cases/07)<br />A server function is called inside a client component within a form submit handler to demonstrate server-side processing in response to a form submission. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (08) [Server Functions with useActionState](./cases/08)<br />A server function is used as the action for a form to demonstrate server-side processing in response to a form submission. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (09) [Passing promise from server to client component](./cases/09)<br />A server component passes a promise to a client component which "awaits" it and renders the result. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (10) [Inspirational quote generator app](./cases/10)<br />An app that generates and displays inspirational quotes to motivate users. Little app from [here](https://react.dev/reference/rsc/use-client#how-use-client-marks-client-code).  | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />✅ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (11) [Nested Client Components](./cases/11)<br />A test case for nested client components | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />❌ [Forket](https://github.com/krasimir/forket)<br />✅ [Parcel](https://parceljs.org/recipes/rsc/)<br />✅ [ReactRouter](https://remix.run/blog/rsc-preview)<br />✅ [RedwoodSDK](https://docs.rwsdk.com/) |
| (12) [Inlined server action to access variables in the near scope](./cases/12)<br />When we define an inlined server action inside a component, it should be able to access variables in the near scope. This means that the server function is aware of its surrounding context. | ✅ [Next.js](https://nextjs.org/)<br />✅ [Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Waku](https://waku.gg/)<br />❌ [Forket](https://github.com/krasimir/forket)<br />❌ [Parcel](https://parceljs.org/recipes/rsc/)<br />❌ [ReactRouter](https://remix.run/blog/rsc-preview)<br />❌ [RedwoodSDK](https://docs.rwsdk.com/) |

