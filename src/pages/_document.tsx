import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { InitializeColorMode } from "theme-ui";
import { getCssText } from "@stitches/theme";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <InitializeColorMode />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
