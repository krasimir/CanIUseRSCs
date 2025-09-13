import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React, { Suspense } from "react";
import db from "./db.js";
import Comments from "./Comments.js";
export default async function Page() {
    const note = await db.notes.get(42);
    const commentsPromise = db.comments.get(note.id);
    return (<div>
      {note.title}
      <Suspense fallback={<p>Loading Comments...</p>}>
        <CommentsBoundary commentsPromise={commentsPromise}/>
      </Suspense>
    </div>);
}
function CommentsBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "Comments", "f_49"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_49" data-c="Comments">
          {children}
        </template>)}
      <template type="forket/start/f_49" data-c="Comments"></template>
      <Comments {...props} children={children}/>
      <template type="forket/end/f_49" data-c="Comments"></template>
      <script id="forket/init/f_49" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_49", "Comments", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
