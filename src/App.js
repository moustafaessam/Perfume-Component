import React, { Suspense } from "react"; // Ensure React is imported

import "./styles.css";

// Lazy load all components using React.lazy
const Content = React.lazy(() => import("./Content"));
const Image = React.lazy(() => import("./Image"));
const TextBox = React.lazy(() => import("./TextBox"));
const Text = React.lazy(() => import("./Text"));
const Price = React.lazy(() => import("./Price"));
const Button = React.lazy(() => import("./Button"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content>
        <Suspense fallback={<div>Loading image...</div>}>
          <Image />
        </Suspense>
        <TextBox>
          <Suspense fallback={<div>Loading text...</div>}>
            <Text />
          </Suspense>
          <Suspense fallback={<div>Loading price...</div>}>
            <Price />
          </Suspense>
          <Suspense fallback={<div>Loading button...</div>}>
            <Button />
          </Suspense>
        </TextBox>
      </Content>
    </Suspense>
  );
}

export default App;
