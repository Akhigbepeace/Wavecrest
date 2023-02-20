import HomepageLayout from "components/layouts/Home/HomepageLayout";

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        page: "HOME",
      
      },
    },
  };
};

const HomePage = () => {
  return (
    <>
      <HomepageLayout />
    </>
  );
};

export default HomePage;
