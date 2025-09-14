import express from 'express';
import {renderRequest, callAction} from '@parcel/rsc/node';

import { Home } from './Home';

// <case_imports>
import Case01 from './cases/01/Page';
import Case02 from './cases/02/Page';
import Case03 from './cases/03/Page';
import Case04 from './cases/04/Page';
import Case05 from './cases/05/Page';
import Case06 from './cases/06/Page';
import Case07 from './cases/07/Page';
import Case08 from './cases/08/Page';
import Case09 from './cases/09/Page';
import Case10 from './cases/10/Page';
import Case11 from './cases/11/Page';
import Case12 from './cases/12/Page';

const routes = {
  '01': Case01,
  '02': Case02,
  '03': Case03,
  '04': Case04,
  '05': Case05,
  '06': Case06,
  '07': Case07,
  '08': Case08,
  '09': Case09,
  '10': Case10,
  '11': Case11,
  '12': Case12,
}
// </case_imports>

const app = express();

app.use(express.static('dist'));

app.get('/', async (req, res) => {
  await renderRequest(req, res, <Home />, {component: Home});
});
app.get("/case/:id", async (req, res) => {
  const id = req.params.id;
  const Case = routes[id];
  if (Case) {
    return await renderRequest(
      req,
      res,
      <Home>
        <Case />
      </Home>,
      { component: Case }
    );
  }
  await renderRequest(req, res, <Home />, { component: Home });
});

app.post('/', async (req, res) => {
  let id = req.get('rsc-action-id');
  let {result} = await callAction(req, id);
  let root: any = <Home />;
  if (id) {
    root = {result, root};
  }
  await renderRequest(req, res, root, {component: Home});
});

app.listen(3001);
console.log('Server listening on port 3001');
