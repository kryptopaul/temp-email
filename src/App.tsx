import React from 'react';
import './App.css';
import { Container } from '@mantine/core';
import { HeaderMiddle } from './HeaderMiddle';
import { EmailInput } from './EmailInput';
import { Grid } from '@mantine/core';
import { EmailGrid } from './EmailGrid';
import { Footer } from './Footer';

const links = [{link: '#', label: 'Home'}, {link: '#', label: 'About'}, {link: '#', label: 'Contact'}];

function App() {
  return (
    <>
    <HeaderMiddle links={links} />
    <Container size={"xs"}>
        <EmailInput />
    </Container>
        <EmailGrid />
      
      <Footer links={links} />
    </>
  );
}

export default App;
