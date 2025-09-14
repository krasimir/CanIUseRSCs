# Rendering async component on the server

Basic example of an async server component.

## Code

```typescript
// Page.tsx

import React from 'react';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>SSR Async Page</div>;
}
```