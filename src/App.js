import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import Header from './modules/Header/Header';
import Timer from './modules/Timer/TimerContainer';
import Footer from './modules/Footer/Footer';

const App = () => {
  return (
    <StyledLayout>
      <Header />
      <Timer />
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

export default App;
