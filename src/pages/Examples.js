import React from 'react'

import Headings from '../components/Headings';
import Utilities from '../components/Utilities';
import Buttons from '../components/Buttons';
import Lists from '../components/Lists';
import CodeBlock from '../components/CodeBlock';
import Tables from '../components/Tables';
import Forms from '../components/Forms';
import Grid from '../components/Grid';

const Examples = () => {
  return (
    <div className='container'>
      <Headings />
      <Utilities />
      <Buttons />
      <Lists />
      <CodeBlock />
      <Tables />
      <Forms />
      <Grid />
    </div>
  )
}

export default Examples
