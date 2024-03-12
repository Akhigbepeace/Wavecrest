import ContactpageLayout from "components/layouts/Contact/ContactpageLayout";

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        page: "CONTACT",
      },
    },
  };
};

const ContactPage = () => {
  return <ContactpageLayout />;
};

export default ContactPage;
