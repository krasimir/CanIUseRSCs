import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import db from "./db.js";
import Expandable from "./Expandable.js";
export default async function Page() {
    const notes = await db.notes.getAll();
    return (<div>
      {notes.map((note)=>(<ExpandableBoundary key={note.id}>
          <p>{note.content}</p>
        </ExpandableBoundary>))}
    </div>);
}
function ExpandableBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "Expandable", "f_39"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_39" data-c="Expandable">
          {children}
        </template>)}
      <template type="forket/start/f_39" data-c="Expandable"></template>
      <Expandable {...props} children={children}/>
      <template type="forket/end/f_39" data-c="Expandable"></template>
      <script id="forket/init/f_39" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_39", "Expandable", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
