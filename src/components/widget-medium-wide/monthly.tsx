import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from "../Box";
import Flex from "../Flex";
import Text from "../Text";

ChartJS.register(
	CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

const labels = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];

export default function MonthlyMediumWide() {
	return (
		<Flex mt={'16px'} flexDirection={'column'} justifyContent={'space-between'} p={'17px 27px'} width={600} height={264} bg={'white'} borderRadius={16}>
			<Flex>
				<Text as={'h2'} mr={'40px'} fontSize={16} fontWeight={600} textAlign={'right'}>
					Current
					<Text>Month</Text>
				</Text>
				<Text fontSize={16} fontWeight={600}>
					4 Trips
					<Text  mt={'2px'} color={'hsla(0, 0%, 33%, 0.6)'} fontSize={12}>Daily average</Text>
				</Text>
			</Flex>
			<Flex mt={'6px'}>
				<Flex mr={'30px'} flexDirection={'column'} alignItems={'flex-end'}>
					<Text mt={'4px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10} fontWeight={500}>Sundays</Text>
					<Text mt={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10} fontWeight={500}>Mondays</Text>
					<Text mt={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10} fontWeight={500}>Tuesdays</Text>
					<Text mt={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10} fontWeight={500}>Wednesdays</Text>
					<Text mt={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10} fontWeight={500}>Thursdays</Text>
					<Text mt={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10} fontWeight={500}>Fridays</Text>
					<Text mt={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10} fontWeight={500}>Saturdays</Text>
				</Flex>
				<Box position={'relative'} height={'195px'} width={'80%'}>
					<Bar 
						options={{
							indexAxis: 'y' as const,
							elements: {
								bar: {
									borderWidth: 0,
									borderSkipped: false
								},
							},
							responsive: true,
							maintainAspectRatio: false,
							datasets: {
								bar: {
									barPercentage: 0.4,
								}
							},
							scales: {
								x: {
									grid: {
										display: false,
										drawBorder: false,
									},
									ticks: {
										padding: 8,
										align: 'start',
										stepSize: 3,
										callback: (value, index, ticks) => {
											if (value.toString().length === 1) {
												return '0' + value;
											}
											return value;
										},
									},
									max: 30,
								},
								y: {
									grid: {
										display: false,
										drawBorder: false,
									},
									ticks: {
										display: false,
										padding: -8,
									}
								}
							}
						}} 
						data={{
							labels,
							datasets: [
								{
									data: [20, 20, 16, 17, 20, 16, 11],
									backgroundColor: 'hsla(315, 80%, 90%, 1)',
									borderRadius: Number.MAX_VALUE
								}
							],
						}} 
					/>
				</Box>
			</Flex>
		</Flex>
	);
}