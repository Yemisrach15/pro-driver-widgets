import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from "../Box";
import Flex from "../Flex";
import { HorizontalLine } from '../HorizontalLine';
import Text from "../Text";

ChartJS.register(ArcElement);

export default function Weekly() {
	return (
		<Flex mt={'16px'} flexDirection={'column'} justifyContent={'space-between'} p={'14px 23px'} bg={'white'} width={284} height={264} borderRadius={16}>
			<Text as={'h2'} color={'hsla(0, 0%, 20%, 0.8)'} fontWeight={500} fontSize={12}>This week</Text>
			<HorizontalLine height={'0.5px'} />
			<Flex alignItems={'center'}>
				<Box mr={'29px'} width={'46px'} height={'46px'} position={'relative'}>
					<Doughnut options={{ cutout: 16}} data={{ 
						datasets: [{
							data: [15, 85],
							backgroundColor: ['hsla(315, 100%, 50%, 1)', 'hsla(315, 80%, 90%, 1)'],
							borderWidth: 0,
						}],
					}} />
					<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
						<Text fontSize={'8px'} fontWeight={600}>15%</Text>
					</Box>
				</Box>
				<Box>
					<Text as={'h2'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={600} fontSize={20.5}>Trips</Text>
					<Text mt={'8px'} fontWeight={600} fontSize={'8.5px'}>percentage of total month trips</Text>
				</Box>
			</Flex>

			<HorizontalLine height={'0.5px'} />
			<Flex alignItems={'center'}>
				<Box mr={'29px'} width={'46px'} height={'46px'} position={'relative'}>
					<Doughnut options={{ cutout: 16}} data={{ 
						datasets: [{
							data: [14, 86],
							backgroundColor: ['hsla(199, 100%, 47%, 1)', 'hsla(199, 77%, 82%, 1)'],
							borderWidth: 0,
						}],
					}} />
					<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
						<Text fontSize={'8px'} fontWeight={600}>14%</Text>
					</Box>
				</Box>
				<Box>
					<Text as={'h2'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={600} fontSize={20.5}>Income</Text>
					<Text mt={'8px'} fontWeight={600} fontSize={'8.5px'}>percentage of total month income</Text>
				</Box>
			</Flex>

			<HorizontalLine height={'0.5px'} />
			<Flex alignItems={'center'}>
				<Box mr={'29px'} width={'46px'} height={'46px'} position={'relative'}>
					<Doughnut options={{ cutout: 16}} data={{ 
						datasets: [{
							data: [18, 82],
							backgroundColor: ['hsla(44, 100%, 50%, 1)', 'hsla(44, 47%, 85%, 1)'],
							borderWidth: 0,
						}],
					}} />
					<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
						<Text fontSize={'8px'} fontWeight={600}>18%</Text>
					</Box>
				</Box>
				<Box>
					<Text as={'h2'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={600} fontSize={20.5}>Distance</Text>
					<Text mt={'8px'} fontWeight={600} fontSize={'8.5px'}>percentage of total month distance</Text>
				</Box>
			</Flex>
		</Flex>
	);
}