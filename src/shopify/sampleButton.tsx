import { AppProvider, Button } from "@shopify/polaris";
import React from "react";

export const SampleButton = () => (
  <>
    <AppProvider i18n={{}}>
      <h1>hoge</h1>
      <Button>Add product</Button>
    </AppProvider>
  </>
);
