import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import PieCharte from '../src/Pies';
import BarreCharte from '../src/BarreChart';
import FillForm from '../src/FillForm';
import FirstComp from '../src/FirstComponent';
import Carde from '../src/Carte';
import NavBarre from '../src/NavBarre';
import CardeTwo from '../src/CarteTwo';
import LineGraph from '../src/LineGraf';
import AreaCharte from '../src/ZoneChart';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('PieCharte', module)
  .add('Camembert', () => <PieCharte onClick={action('clicked')}>Hello Pie Chart</PieCharte>);

storiesOf('BarreCharte', module)
  .add('Batons', () => <BarreCharte onClick={action('clicked')}>Hello Bar Chart</BarreCharte>);

storiesOf('FirstComp', module)
  .add('Tableau', () => <FirstComp onClick={action('clicked')}>Hello Table</FirstComp>);

storiesOf('NavBarre', module)
  .add('Navigation', () => <NavBarre onClick={action('clicked')}>Hello NavBar</NavBarre>);

storiesOf('Carde', module)
  .add('Carte', () => <Carde onClick={action('clicked')}>Hello Card</Carde>);

storiesOf('CardeTwo', module)
  .add('Carte Profile', () => <CardeTwo onClick={action('clicked')}>Hello Card</CardeTwo>);

storiesOf('LineGraph', module)
  .add('Graphique traditionnel', () => <LineGraph onClick={action('clicked')}>Hello Line Graph</LineGraph>);

storiesOf('AreaCharte', module)
  .add('Graphique volumique', () => <AreaCharte onClick={action('clicked')}>Hello Area Chart</AreaCharte>);

storiesOf('FillForm', module)
  .add('Formulaire', () => <FillForm onClick={action('clicked')}>Hello Area Chart</FillForm>);
