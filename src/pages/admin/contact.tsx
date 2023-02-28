import ContactpageLayout from "components/layouts/Contact/ContactpageLayout";
import Head from "next/head";

const AdminContactPage = () => {
  return (
    <>
      <Head>
        <title>WAVECREST COLLEGE OF HOSPITALITY</title>
      </Head>

      <ContactpageLayout />
    </>
  );
};

AdminContactPage.requireAuth = true;

export default AdminContactPage;
