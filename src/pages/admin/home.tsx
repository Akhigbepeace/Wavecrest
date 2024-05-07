import HomepageLayout from "components/layouts/Home/HomepageLayout";
import Head from "next/head";

const AdminHomePage = () => {
  return (
    <>
      <Head>
        <title>WAVECREST COLLEGE OF HOSPITALITY</title>
      </Head>

      <HomepageLayout />
    </>
  );
};
AdminHomePage.requireAuth = false;
export default AdminHomePage;
