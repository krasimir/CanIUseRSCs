"use client-entry";

import type {ReactElement} from 'react';
import {hydrate, fetchRSC} from '@parcel/rsc/client';

// Hydrate initial RSC payload embedded in the HTML.
let updateRoot = hydrate({
  // Setup a callback to perform server actions.
  // This sends a POST request to the server, and updates the page with the response.
  async callServer(id: string, args: any[]) {
    console.log('Handling server action', id, args)
    const {result, root} = await fetchRSC<{root: ReactElement, result: any}>(location.pathname, {
      method: 'POST',
      headers: {
        'rsc-action-id': id
      },
      body: args
    });
    updateRoot(root);
    return result;
  }
});
