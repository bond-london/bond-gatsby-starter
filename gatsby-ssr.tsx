import React from "react";
import { PreRenderHTMLArgs } from "gatsby";
import { oneLine } from "common-tags";

export function onPreRenderHTML(args: PreRenderHTMLArgs) {
  const headComponents = args.getHeadComponents();

  const script = (
    <script
      key="configure-gtag-storage"
      dangerouslySetInnerHTML={{
        __html: oneLine`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
 
    gtag('consent', 'default', {
      'ad_storage': 'denied'
    });
    `,
      }}
    />
  );

  const newHeadComponents = [script, ...headComponents];
  args.replaceHeadComponents(newHeadComponents);
}
