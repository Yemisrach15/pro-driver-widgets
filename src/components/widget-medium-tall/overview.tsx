import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ReactComponent as DownArrowIcon } from '../../assets/icons/down-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icons/up-arrow.svg';
import { Box } from '../Box';
import Flex from "../Flex";
import { Table, Td, Th, Tr } from '../Table';
import Text from "../Text";

ChartJS.register(ArcElement);

export default function OverviewMediumTall() {
	return (
		<Flex alignItems={'center'} flexDirection={'column'} p={'16px'} pl={'30px'} bg={'white'} width={284} height={580} borderRadius={16}>
			<Text as={'h2'} color={'hsla(0, 0%, 33%, 0.7)'}	fontSize={20.5} fontWeight={600}>This month</Text>
			<Box mt={'20px'} width={'127px'} height={'127px'} position={'relative'}>
				<Doughnut options={{ aspectRatio: 1, cutout: 47 }} data={{ 
					datasets: [{
						data: [78, 22],
						backgroundColor: ['hsla(315, 100%, 50%, 1)', 'hsla(315, 80%, 90%, 1)'],
						borderWidth: 0,
					}],
				}} />
				<Flex bg={'hsla(0, 0%, 77%, 0.2)'} position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }} width={86} height={86} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'}>
					<Text color={'hsla(0, 0%, 33%, 0.5)'} fontSize={'12.5px'} fontWeight={600} textAlign={'center'}>Scale: 150 Trips</Text>
				</Flex>
			</Box>
			<Table mt={20}>
				<thead>
					<Tr>
						<Th width={'10%'}></Th>
						<Th width={'40%'}>Previous<br /> week</Th>
						<Th width={'40%'}>Current<br /> week</Th>
						<Th width={'10%'}></Th>
					</Tr>
				</thead>
				<tbody>
					<Tr>
						<Td color={'hsla(0, 0%, 33%, 0.5)'} fontSize={10}>S</Td>
						<Td fontSize={18}>
							06/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.7hrs</Text>
						</Td>
						<Td fontSize={18}>
							05/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.8hrs</Text>
						</Td>
						<Td><DownArrowIcon width={20} height={20} /></Td>
					</Tr>
					<Tr>
						<Td color={'hsla(0, 0%, 33%, 0.5)'} fontSize={10}>M</Td>
						<Td fontSize={18}>
							03/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.9hrs</Text>
						</Td>
						<Td fontSize={18}>
							04/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.9hrs</Text>
						</Td>
						<Td><UpArrowIcon width={20} height={20} /></Td>
					</Tr>
					<Tr>
						<Td color={'hsla(0, 0%, 33%, 0.5)'} fontSize={10}>T</Td>
						<Td fontSize={18}>
							03/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.8hrs</Text>
						</Td>
						<Td fontSize={18}>
							05/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>3hrs</Text>
						</Td>
						<Td><UpArrowIcon width={20} height={20} /></Td>
					</Tr>
					<Tr>
						<Td color={'hsla(0, 0%, 33%, 0.5)'} fontSize={10}>W</Td>
						<Td fontSize={18}>
							07/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.9hrs</Text>
						</Td>
						<Td fontSize={18}>
							04/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.7hrs</Text>
						</Td>
						<Td><DownArrowIcon width={20} height={20} /></Td>
					</Tr>
					<Tr opacity={0.2}>
						<Td color={'hsla(0, 0%, 33%, 0.5)'} fontSize={10}>T</Td>
						<Td fontSize={18}>
						</Td>
						<Td fontSize={18}>
							04/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.7hrs</Text>
						</Td>
						<Td><RightArrowIcon width={20} height={20} /></Td>
					</Tr>
					<Tr opacity={0.2}>
						<Td color={'hsla(0, 0%, 33%, 0.5)'} fontSize={10}>F</Td>
						<Td fontSize={18}>
						</Td>
						<Td fontSize={18}>
							04/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.7hrs</Text>
						</Td>
						<Td><RightArrowIcon width={20} height={20} /></Td>
					</Tr>
					<Tr opacity={0.2}>
						<Td color={'hsla(0, 0%, 33%, 0.5)'} fontSize={10}>S</Td>
						<Td fontSize={18}>
						</Td>
						<Td fontSize={18}>
							02/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={14}>2.7hrs</Text>
						</Td>
						<Td><RightArrowIcon width={20} height={20} /></Td>
					</Tr>
				</tbody>
			</Table>
		</Flex>
	);
}