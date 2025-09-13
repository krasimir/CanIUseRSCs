import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import UpdateName from "./UpdateName.js";
export default async function Page() {
    return (<div>
      <UpdateNameBoundary/>
    </div>);
}
function UpdateNameBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "UpdateName", "f_53"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_53" data-c="UpdateName">
          {children}
        </template>)}
      <template type="forket/start/f_53" data-c="UpdateName"></template>
      <UpdateName {...props} children={children}/>
      <template type="forket/end/f_53" data-c="UpdateName"></template>
      <script id="forket/init/f_53" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_53", "UpdateName", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
