import ContactpageLayout from "components/layouts/ContactpageLayout";
import HomepageLayout from "components/layouts/HomepageLayout";
import Head from "next/head";

const AdminHomePage = () => {
  return (
    <>
      <Head>
        <title>WAVECREST COLLEGE OF HOSPITALITY</title>
      </Head>

      <HomepageLayout />
      <ContactpageLayout />
    </>
  );
};

export default AdminHomePage;
