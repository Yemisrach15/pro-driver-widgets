import React from 'react';
import { Box } from './components/Box';
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
			<Box>
				Medium tall
				<OverviewMediumTall />
			</Box>
			<Box>
				Medium wide
				<OverviewMediumWide />
				<WeeklyMediumWide />
				<MonthlyMediumWide />
			</Box>
			<Box mt={'16px'}>
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
