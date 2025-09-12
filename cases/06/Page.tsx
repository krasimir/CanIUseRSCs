import React from "react";

import db from './db';
import Button from "./Button";

export default async function Page() {
  return (
    <EmptyNote />
  );
}

function EmptyNote() {
  async function createNoteAction() {
    // Server Function
    "use server";

    return await db.notes.create();
  }

  return <Button onClick={createNoteAction} />;
}
