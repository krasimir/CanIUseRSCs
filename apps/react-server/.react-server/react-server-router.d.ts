declare namespace __react_server_routing__ {
  type SearchOrHash = `?${string}` | `#${string}`;
  type Protocol<P extends string> = P extends `${string}/${string}` ? never : P;
  type WithProtocol<P extends string> = `${Protocol<P>}://${string}`;

  type Suffix = "" | SearchOrHash;

  type SafeSlug<S extends string> = S extends `${string}/${string}`
    ? never
    : S extends `${string}${SearchOrHash}`
      ? never
      : S extends ""
        ? never
        : S;

  type CatchAllSlug<S extends string> = S extends `${string}${SearchOrHash}`
    ? never
    : S extends ""
      ? never
      : S extends `${string}/${string}`
        ? S
        : S extends SafeSlug<S>
          ? S
          : never;

  type OptionalCatchAllSlug<S extends string> =
    S extends `${string}${SearchOrHash}` ? never : S;

  type StaticRoutes = "/" | "/case/cases/01/Page" | "/case/cases/01/README" | "/case/cases/02/db" | "/case/cases/02/Expandable" | "/case/cases/02/Page" | "/case/cases/02/README" | "/case/cases/03/db" | "/case/cases/03/Expandable" | "/case/cases/03/Page" | "/case/cases/03/README" | "/case/cases/04/actions" | "/case/cases/04/LikeButton" | "/case/cases/04/Page" | "/case/cases/04/README" | "/case/cases/05/actions" | "/case/cases/05/LikeButton" | "/case/cases/05/Page" | "/case/cases/05/README" | "/case/cases/06/Button" | "/case/cases/06/db" | "/case/cases/06/Page" | "/case/cases/06/README" | "/case/cases/07/actions" | "/case/cases/07/db" | "/case/cases/07/Page" | "/case/cases/07/README" | "/case/cases/07/UpdateMyName" | "/case/cases/08/actions" | "/case/cases/08/db" | "/case/cases/08/Page" | "/case/cases/08/README" | "/case/cases/08/UpdateName" | "/case/cases/09/Comments" | "/case/cases/09/db" | "/case/cases/09/Page" | "/case/cases/09/README" | "/case/cases/10/Copyright" | "/case/cases/10/FancyText" | "/case/cases/10/InspirationGenerator" | "/case/cases/10/inspirations" | "/case/cases/10/Page" | "/case/cases/10/README" | "/case/cases/11/Controls" | "/case/cases/11/Page" | "/case/cases/11/Player" | "/case/cases/11/README" | "/case/cases/12/Page" | "/case/cases/12/Player" | "/case/cases/12/README";
  type DynamicRoutes<T0 extends string> =
    | `/case/${SafeSlug<T0>}`;

  type RouteImpl<T> =
    | StaticRoutes
    | SearchOrHash
    | (T extends WithProtocol<infer _> ? T : never)
    | `${StaticRoutes}${SearchOrHash}`
    | (T extends `${DynamicRoutes<infer _>}${Suffix}`
        ? T
        : never);

  type Param<P, R> = P extends `[[...${infer K}]]`
    ? { [key in K]?: string[] }
    : P extends `[...${infer K}]`
      ? { [key in K]: string[] }
      : P extends `[[${infer K}]]`
        ? { [key in K]?: string } & R
        : P extends `[${infer K}]`
            ? { [key in K]: string } & R
            : R;
  type ExtractParams<T> = T extends `${infer P}/${infer R}`
    ? Param<P, ExtractParams<R>>
    : Param<T, unknown>;
  type RouteParams<T> = T extends StaticRoutes
    ? boolean
    : T extends DynamicRoutes<
          infer _
        >
      ? ExtractParams<T>
      : never;

  type Outlet = never;
}

declare module "@lazarv/react-server/navigation" {
  import type {
    LinkProps as OriginalLinkProps,
    RefreshProps as OriginalRefreshProps,
    ReactServerComponentProps as OriginalReactServerComponentProps,
  } from "@lazarv/react-server/client/navigation.d.ts";
  export * from "@lazarv/react-server/client/navigation.d.ts";

  export type LinkProps<T> = Omit<OriginalLinkProps<T>, "to" | "target"> & {
    to: __react_server_routing__.RouteImpl<T>;
    target?: __react_server_routing__.Outlet;
  };

  /**
   * A component that renders an anchor element that links to a route.
   *
   * @param props - The props for the component
   * @returns The anchor element
   *
   * @example
   *
   * ```tsx
   * import { Link } from '@lazarv/react-server/navigation';
   *
   * export default function App() {
   *  return (
   *   <Link to="/todos">Todos</Link>
   *  );
   * }
   * ```
   */
  export function Link<T>(
    props: LinkProps<__react_server_routing__.RouteImpl<T>>
  ): JSX.Element;

  export type RefreshProps = Omit<OriginalRefreshProps, "target"> & {
    target?: __react_server_routing__.Outlet;
  };

  /**
   * A component that triggers a refresh of the current route.
   *
   * @param props - The props for the component
   * @returns The anchor element
   *
   * @example
   *
   * ```tsx
   * import { Refresh } from '@lazarv/react-server/navigation';
   *
   * export default function App() {
   *  return (
   *   <Refresh>Refresh</Refresh>
   *  );
   * }
   */
  export function Refresh(props: RefreshProps): JSX.Element;

  export type ReactServerComponentProps = Omit<
    OriginalReactServerComponentProps,
    "url" | "outlet"
  > & {
    url?: string;
    outlet: __react_server_routing__.Outlet;
  };

  /**
   * The props for the `ReactServerComponent` component.
   *
   * @property url - The URL to fetch the component from
   * @property outlet - Outlet name to use for the component
   * @property defer - If true, the component is re-fetched after the initial render on the client side
   * @property children - The children to render
   */
  export function ReactServerComponent(
    props: ReactServerComponentProps
  ): JSX.Element;

  /**
   * A hook that returns the current location.
   *
   * @param outlet - which outlet to watch (optional, defaults to root)
   * @returns The current location
   */
  export function useLocation(
    outlet?: __react_server_routing__.Outlet
  ): Location | null;

  /**
   * A hook that returns the current search parameters.
   *
   * @param outlet - which outlet to watch (optional, defaults to root)
   * @returns The current search parameters
   */
  export function useSearchParams(
    outlet?: __react_server_routing__.Outlet
  ): URLSearchParams | null;

  /**
   * A hook that returns the current pathname.
   *
   * @param outlet - which outlet to watch (optional, defaults to root)
   * @returns The current pathname
   */
  export function usePathname(
    outlet?: __react_server_routing__.Outlet
  ): string | null;
}

declare module "@lazarv/react-server/client" {
  import type { ReactServerClientContext as OriginalReactServerClientContext } from "@lazarv/react-server/client/index.d.ts";
  export * from "@lazarv/react-server/client/index.d.ts";

  /**
   * The client context.
   *
   * @property refresh - Refreshes the current route
   * @property prefetch - Prefetches a route
   * @property navigate - Navigates to a route
   * @property replace - Replaces the current route
   */
  export type ReactServerClientContext = Omit<
    OriginalReactServerClientContext,
    "navigate" | "replace" | "prefetch"
  > & {
    navigate<T extends string>(
      url: __react_server_routing__.RouteImpl<T>,
      options?: {
        outlet?: __react_server_routing__.Outlet;
        push?: boolean;
        rollback?: number;
        revalidate?:
          | boolean
          | number
          | ((context: {
              outlet: string;
              url: string;
              timestamp: number;
            }) => Promise<boolean> | boolean);
        fallback?: React.ReactNode;
        Component?: React.ReactNode;
      }
    ): Promise<void>;
    replace<T extends string>(
      url: __react_server_routing__.RouteImpl<T>,
      options?: {
        outlet?: __react_server_routing__.Outlet;
        rollback?: number;
        revalidate?:
          | boolean
          | number
          | ((context: {
              outlet: string;
              url: string;
              timestamp: number;
            }) => Promise<boolean> | boolean);
        fallback?: React.ReactNode;
        Component?: React.ReactNode;
      }
    ): Promise<void>;
    prefetch<T extends string>(
      url: __react_server_routing__.RouteImpl<T>,
      options?: { outlet?: __react_server_routing__.Outlet; ttl?: number }
    ): Promise<void>;
    abort(outlet?: __react_server_routing__.Outlet, reason?: Error): void;
  };

  /**
   * A hook that returns the client context.
   *
   * @returns The client context
   */
  export function useClient(): ReactServerClientContext;
}

declare module "@lazarv/react-server/router" {
  import type { MatchOptions } from "@lazarv/react-server/server/router.d.ts";
  export * from "@lazarv/react-server/server/router.d.ts";

  /**
   * This hook returns the route parameters for the given path.
   *
   * @param path The path to match
   * @param options Options for the match
   *
   * @returns The route parameters for the given path
   *
   * @example
   *
   * ```tsx
   * import { useMatch } from '@lazarv/react-server';
   *
   * export default function Todo() {
   *  const { id } = useMatch('/todos/[id]');
   *  return <p>Todo id: {id}</p>;
   * }
   * ```
   */
  export function useMatch<T>(
    path: __react_server_routing__.RouteImpl<T>,
    options?: MatchOptions
  ): __react_server_routing__.RouteParams<T> | null;
}
