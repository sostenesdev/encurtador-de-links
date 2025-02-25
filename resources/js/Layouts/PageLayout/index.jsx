import React from 'react';
import Sidebar from '../../components/Sidebar';

function PageLayout(props) {
  return <Sidebar>{props.children}</Sidebar>
}
export default PageLayout;
