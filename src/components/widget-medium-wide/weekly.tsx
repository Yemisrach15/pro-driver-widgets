import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from "../Box";
import Flex from "../Flex";
import Text from "../Text";

ChartJS.register(ArcElement);

export default function WeeklyMediumWide() {
	return (
		<Flex mt={'16px'} flexDirection={'column'} p={'17px 27px'} width={600} height={264} bg={'white'} borderRadius={16}>
			<Text textAlign={'right'} color={'hsla(0, 0%, 20%, 0.8)'} fontWeight={600} fontSize={8.5}>
				( Daily percentage comparison of your total trips on working days for current & previous week )
			</Text>

			<Box mt={'7px'}>
				<Text color={'hsla(0, 0%, 33%, 1)'} fontSize={12} fontWeight={500}>THIS WEEK</Text>
				<Flex mt={'6px'} justifyContent={'space-between'}>
					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [22, 78],
									backgroundColor: ['hsla(145, 56%, 45%, 1)', 'hsla(145, 36%, 84%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>22%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Monday</Text>
					</Flex>
					
					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [27, 73],
									backgroundColor: ['hsla(145, 56%, 45%, 1)', 'hsla(145, 36%, 84%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>27%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Tuesday</Text>
					</Flex>

					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [22, 78],
									backgroundColor: ['hsla(0, 88%, 57%, 1)', 'hsla(0, 54%, 79%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>22%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Wednesday</Text>
					</Flex>

					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [100],
									backgroundColor: ['hsla(0, 0%, 76%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>-</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Thursday</Text>
					</Flex>

					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [100],
									backgroundColor: ['hsla(0, 0%, 76%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>-</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Friday</Text>
					</Flex>
				</Flex>
			</Box>

			<Box mt={'24px'}>
				<Text color={'hsla(0, 0%, 33%, 1)'} fontSize={12} fontWeight={500}>LAST WEEK</Text>
				<Flex mt={'6px'} justifyContent={'space-between'}>
					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [10, 90],
									backgroundColor: ['hsla(0, 88%, 57%, 1)', 'hsla(0, 54%, 79%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>10%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Monday</Text>
					</Flex>
					
					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [10, 90],
									backgroundColor: ['hsla(0, 88%, 57%, 1)', 'hsla(0, 54%, 79%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>10%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Tuesday</Text>
					</Flex>

					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [24, 76],
									backgroundColor: ['hsla(145, 56%, 45%, 1)', 'hsla(145, 36%, 84%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>24%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Wednesday</Text>
					</Flex>

					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [13, 87],
									backgroundColor: ['hsla(0, 0%, 33%, 1)', 'hsla(0, 0%, 76%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>13%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Thursday</Text>
					</Flex>

					<Flex flexDirection={'column'} alignItems={'center'}>
						<Box width={'56px'} height={'56px'} position={'relative'}>
							<Doughnut options={{ cutout: 20}} data={{ 
								datasets: [{
									data: [13, 87],
									backgroundColor: ['hsla(0, 0%, 33%, 1)', 'hsla(0, 0%, 76%, 1)'],
									borderWidth: 0,
								}],
							}} />
							<Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)' }}>
								<Text fontSize={'8px'} fontWeight={600}>13%</Text>
							</Box>
						</Box>
						<Text mt={'6px'} color={'hsla(0, 0%, 33%, 0.8)'} fontSize={10}>Friday</Text>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
}