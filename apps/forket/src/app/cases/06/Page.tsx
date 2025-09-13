import React from "react";
import db from "./db.js";
import Button from "./Button.js";
export default async function Page() {
    return (<EmptyNote/>);
}
function EmptyNote() {
    async function createNoteAction() {
        "use server";
        return await db.notes.create();
    }
    return <Button onClick={createNoteAction}/>;
}
