import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '../Box';
import Flex from "../Flex";
import Text from "../Text";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

export default function MonthlyLineMediumTall() {
	return (
		<Flex mt={'16px'} alignItems={'center'} flexDirection={'column'} p={'14px 17px'} pb={24} bg={'white'} width={284} height={580} borderRadius={16}>
			<Flex width={'100%'}>
				<Text as={'h2'} mr={'40px'} fontSize={16} fontWeight={600} textAlign={'right'}>
					Current vs <br />
					<Text as={'span'}>previous week</Text>
				</Text>
				<Text fontSize={16} fontWeight={600}>
					4 Trips <br />
					<Text as={'span'}  mt={'2px'} color={'hsla(0, 0%, 33%, 0.6)'} fontSize={12}>Daily average</Text>
				</Text>
			</Flex>
			
			<Box mt={32} position={'relative'} height={'100%'} width={'100%'}>
				<Line 
					options={{
						elements: {
							line: {
								borderWidth: 1,
							}
						},
						responsive: true,
						maintainAspectRatio: false,
						scales: {
							x: {
								grid: {
									display: false,
									drawBorder: false,
								},
							},
							y: {
								grid: {
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
								beginAtZero: true,
							}
						}
					}} 
					
					data={{
						labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						datasets: [
							{
								data: [20, 20, 16, 16.5, 20, 16, 11],
								backgroundColor: 'hsla(315, 100%, 50%, 0.5)',
								borderColor: 'hsla(315, 100%, 50%, 0.5)',
							}
						]
					}} 
				/>
			</Box>
		</Flex>
	);
}