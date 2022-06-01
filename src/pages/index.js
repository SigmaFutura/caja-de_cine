/* Components */
import Layout from "@containers/Layout";
import MainSection from "@containers/MainSection";

function index() {
    const title = "Home";

    return (
        <Layout title={title}>
            <MainSection />
        </Layout>
    );
}

export default index;