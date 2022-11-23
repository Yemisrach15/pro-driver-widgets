import { Bar } from 'react-chartjs-2';
import { Box } from '../Box';
import Flex from "../Flex";
import Text from "../Text";

export default function MonthlyBarMediumTall() {
	return (
		<Flex mt={'16px'} alignItems={'center'} flexDirection={'column'} p={'14px 17px'} pb={24} bg={'white'} width={284} height={580} borderRadius={16}>
			<Flex width={'100%'}>
				<Text as={'h2'} mr={'40px'} fontSize={16} fontWeight={600} textAlign={'right'}>
					Current
					<Text>Month</Text>
				</Text>
				<Text fontSize={16} fontWeight={600}>
					4 Trips
					<Text  mt={'2px'} color={'hsla(0, 0%, 33%, 0.6)'} fontSize={12}>Daily average</Text>
				</Text>
			</Flex>
			
			<Box mt={32} position={'relative'} height={'100%'} width={'100%'}>
				<Bar 
					options={{
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
								barPercentage: 0.85,
								borderRadius: Number.MAX_VALUE,
							}
						},
						scales: {
							x: {
								stacked: true,
								grid: {
									display: false,
									drawBorder: false,
								},
							},
							y: {
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
							}
						}
					}} 
					
					data={{
						labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						datasets: [
							{
								data: [20, 20, 16, 16.5, 20, 16, 11],
								backgroundColor: 'hsla(315, 80%, 90%, 1)',
							},
							{
								data: [30, 30, 30, 30, 30, 30, 30, 30],
								backgroundColor: 'hsla(0, 0%, 77%, 0.2)',
							}
						]
					}} 
				/>
			</Box>
		</Flex>
	);
}