import React from 'react';

function Layout({ header, content, footer }) {
  return (
    <div>
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </div>
  );
}

function AppTask9Example2() {
  return (
    <Layout
      header={<h1>Header</h1>}
      content={<p>Main content goes here.</p>}
      footer={<p>Footer content goes here.</p>}
    />
  );
}

export default AppTask9Example2;