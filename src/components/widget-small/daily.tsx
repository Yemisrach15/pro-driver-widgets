import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from "../Box";
import Flex from "../Flex";
import Text from "../Text";

ChartJS.register(ArcElement);

export default function Daily() {
	return (
		<Flex mt={'16px'} flexDirection={'column'} alignItems={'center'} p={'24px'} bg={'white'} width={284} height={264} borderRadius={16}>
			<Text as={'h2'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={600} fontSize={20.5}>Today</Text>
			<Text mt={'8px'} fontWeight={600} fontSize={'10px'}>percentage of your total trips this week</Text>
			<Box mt={'20px'} width={'127px'} height={'127px'} position={'relative'}>
				<Doughnut options={{ aspectRatio: 1, cutout: 42}} data={{ 
					datasets: [{
						data: [22, 78],
						backgroundColor: ['hsla(315, 100%, 50%, 1)', 'hsla(315, 80%, 90%, 1)'],
						borderWidth: 0,
					}],
				}} />
				<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
					<Text fontSize={'20px'} fontWeight={600}>22%</Text>
				</Box>
			</Box>
		</Flex>
	);
}