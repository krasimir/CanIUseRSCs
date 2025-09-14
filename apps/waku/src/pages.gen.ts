// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_CaseCaseId_getConfig } from './pages/case/[caseId]';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';

// prettier-ignore
type Page =
| ({ path: '/case/[caseId]' } & GetConfigResponse<typeof File_CaseCaseId_getConfig>)
| { path: '/case/cases/01/Page'; render: 'dynamic' }
| { path: '/case/cases/02/Expandable'; render: 'dynamic' }
| { path: '/case/cases/02/Page'; render: 'dynamic' }
| { path: '/case/cases/03/Expandable'; render: 'dynamic' }
| { path: '/case/cases/03/Page'; render: 'dynamic' }
| { path: '/case/cases/04/LikeButton'; render: 'dynamic' }
| { path: '/case/cases/04/Page'; render: 'dynamic' }
| { path: '/case/cases/05/LikeButton'; render: 'dynamic' }
| { path: '/case/cases/05/Page'; render: 'dynamic' }
| { path: '/case/cases/06/Button'; render: 'dynamic' }
| { path: '/case/cases/06/Page'; render: 'dynamic' }
| { path: '/case/cases/07/Page'; render: 'dynamic' }
| { path: '/case/cases/07/UpdateMyName'; render: 'dynamic' }
| { path: '/case/cases/08/Page'; render: 'dynamic' }
| { path: '/case/cases/08/UpdateName'; render: 'dynamic' }
| { path: '/case/cases/09/Comments'; render: 'dynamic' }
| { path: '/case/cases/09/Page'; render: 'dynamic' }
| { path: '/case/cases/10/Copyright'; render: 'dynamic' }
| { path: '/case/cases/10/FancyText'; render: 'dynamic' }
| { path: '/case/cases/10/InspirationGenerator'; render: 'dynamic' }
| { path: '/case/cases/10/Page'; render: 'dynamic' }
| { path: '/case/cases/11/Controls'; render: 'dynamic' }
| { path: '/case/cases/11/Page'; render: 'dynamic' }
| { path: '/case/cases/11/Player'; render: 'dynamic' }
| { path: '/case/cases/12/Page'; render: 'dynamic' }
| { path: '/case/cases/12/Player'; render: 'dynamic' }
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
