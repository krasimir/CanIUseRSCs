# Can I Use RSCs (React Server Components)

Features support list across different frameworks and libraries.

There are **12** test cases in total. You can see them all in the table below. Testing against the following frameworks/libraries:

- [Next.js](https://nextjs.org/) (100% support)
- [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md) (100% support)
- [Forket](https://github.com/krasimir/forket) (83% support)

---

| Case | Framework / Library |
| ---- | ---- |
| (01) [Rendering async component on the server](./cases/01)<br />Basic example of an async server component. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (02) [Mixing server and client components](./cases/02)<br />Passing server generated data as a child of a client component. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (03) [Hydrating client component](./cases/03)<br />A client component that is hydrated on top of server-side rendered data. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (04) [Passing server function to client component](./cases/04)<br />A client component receives a server function as a prop and calls it. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (05) [Client component imports server function](./cases/05)<br />A client component imports server function and uses it. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (06) [Inlined server function (inside a server component)](./cases/06)<br />Creating a server function and pass it as a prop to client component | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (07) [Server Functions with Actions](./cases/07)<br />A server function is called inside a client component within a form submit handler to demonstrate server-side processing in response to a form submission. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (08) [Server Functions with useActionState](./cases/08)<br />A server function is used as the action for a form to demonstrate server-side processing in response to a form submission. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (09) [Passing promise from server to client component](./cases/09)<br />A server component passes a promise to a client component which "awaits" it and renders the result. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (10) [Inspirational quote generator app](./cases/10)<br />An app that generates and displays inspirational quotes to motivate users. Little app from [here](https://react.dev/reference/rsc/use-client#how-use-client-marks-client-code).  | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />✅ [Forket](https://github.com/krasimir/forket) |
| (11) [Nested Client Components](./cases/11)<br />A test case for nested client components | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />❌ [Forket](https://github.com/krasimir/forket) |
| (12) [Inlined server action to access variables in the near scope](./cases/12)<br />When we define a inlined server action inside a component, it should be able to access variables in the near scope. This means that the server function is aware of its surrounding context. | ✅ [Next.js](https://nextjs.org/)<br />✅ [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rsc/README.md)<br />❌ [Forket](https://github.com/krasimir/forket) |

