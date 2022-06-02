import Image from "next/image";

/* Components */
import Layout from "@containers/Layout";
import Form from "@components/Form";

/* Styles */
import main from "@styles/main.module.scss";

/* Assets */

import slogan from '@images/eslogan_fedecajas.png';

function registrate() {
    const title = "Registrate";

    return (
        <Layout title={title}>
            <section className={main['form_container']}>
                <div className={main['form_container-form']}>
                    <h2>Registrate</h2>
                    <Form />
                </div>
                <div className={main['form_container-wrapper']}>
                    <Image 
                        alt="Slogan Fedecajas"
                        src={slogan}
                        width={340}
                        height={600}
                        layout={'intrinsic'}
                        loading="lazy"
                    />
                </div>
            </section>
        </Layout>
    );
}

export default registrate;