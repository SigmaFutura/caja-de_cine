import Document, {Html, Head, Main, NextScript} from "next/document";
import favicon from "@public/favicon.png";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render() {
        return (
            <Html>
                <Head>
                    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                    <link rel="icon" type="image/png" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;