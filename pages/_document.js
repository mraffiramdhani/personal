import { Children } from 'react';
import { AppRegistry } from 'react-native';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from '../app.json';
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main);
    const { getStyleElement } = AppRegistry.getApplication(config.name);
    const page = await renderPage();
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link href="/icons.css" rel="stylesheet" />
        </Head>
        <body
          style={{
            height: '100%',
            overflow: 'hidden',
          }}
          className="font-['Plus_Jakarta_Sans'] bg-black"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
