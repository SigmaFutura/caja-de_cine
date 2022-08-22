/* Components */
import Layout from "@containers/Layout";
import MainSection from "@containers/MainSection";
import Title from "@components/Title";
import Feature from "@containers/Feature";
import Feature_2 from "@containers/Feature_2";
import Feature_3 from "@containers/Feature_3";
import Banner from "@containers/Banner";

function index() {
    const title = "Home";

    return (
        <Layout title={title}>
            <MainSection />
            <Banner />
            <Feature />
            <Title title={'Categorias:'} />
            <Feature_2 />
            <Feature_3 />
        </Layout>
    );
}

export default index;