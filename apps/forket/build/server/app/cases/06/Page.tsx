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
    return <ButtonBoundary onClick={"$FSA_f_43_createNoteAction"}/>;
}
function ButtonBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "Button", "f_44"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_44" data-c="Button">
          {children}
        </template>)}
      <template type="forket/start/f_44" data-c="Button"></template>
      <Button {...props} children={children}/>
      <template type="forket/end/f_44" data-c="Button"></template>
      <script id="forket/init/f_44" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_44", "Button", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
