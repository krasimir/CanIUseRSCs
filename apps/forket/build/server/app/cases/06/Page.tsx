import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import db from "./db.js";
import Button from "./Button.js";
export async function createNoteAction() {
    "use server";
    return await db.notes.create();
}
export default async function Page() {
    return (<EmptyNote/>);
}
function EmptyNote() {
    return <ButtonBoundary onClick={"$FSA_f_48_createNoteAction"}/>;
}
function ButtonBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "Button", "f_49"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_49" data-c="Button">
          {children}
        </template>)}
      <template type="forket/start/f_49" data-c="Button"></template>
      <Button {...props} children={children}/>
      <template type="forket/end/f_49" data-c="Button"></template>
      <script id="forket/init/f_49" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_49", "Button", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
