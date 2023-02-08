import { sharedConfig } from "config/constants/editable-copy/shared/config";
import { useCopyData } from "contexts/EditableCopyContext";
import React from "react";
import Editable from "../Editable/Editable";
import Footer from "./Footer";

const EditableFooter = () => {
  const { data } = useCopyData();

  const { footer: footerData } = data.shared;

  const footerConfig = sharedConfig.footer;

  return (
    <Editable page="shared" config={footerConfig} defaultValues={footerData}>
      <Footer {...footerData} />
    </Editable>
  );
};

export default EditableFooter;
