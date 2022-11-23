import React from 'react';
import { Box } from './components/Box';
import MonthlyLineMediumTall from './components/widget-medium-tall/monthly-line';
import MonthlyBarMediumTall from './components/widget-medium-tall/montly-bar';
import OverviewMediumTall from './components/widget-medium-tall/overview';
import MonthlyMediumWide from './components/widget-medium-wide/monthly';
import OverviewMediumWide from './components/widget-medium-wide/overview';
import WeeklyMediumWide from './components/widget-medium-wide/weekly';
import Daily from './components/widget-small/daily';
import Overview from './components/widget-small/overview';
import Recent from './components/widget-small/recent';
import Weekly from './components/widget-small/weekly';
import { GlobalStyle } from './global-styles';

function App() {
  return (
		<>
			<GlobalStyle />
			<Box my={16}>
				Medium tall
				<OverviewMediumTall />
				<MonthlyBarMediumTall />
				<MonthlyLineMediumTall />
			</Box>
			<Box my={16}>
				Medium wide
				<OverviewMediumWide />
				<WeeklyMediumWide />
				<MonthlyMediumWide />
			</Box>
			<Box my={16}>
				Small
				<Overview />
				<Daily />
				<Recent />
				<Weekly />
			</Box>
		</>
  );
}

export default App;
