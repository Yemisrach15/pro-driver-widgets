import { ReactComponent as DownArrowIcon } from '../../assets/icons/down-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icons/up-arrow.svg';
import { Box } from '../Box';
import Flex from "../Flex";
import Text from "../Text";

export default function OverviewMediumWide() {
	return (
		<Flex flexDirection={'column'} p={'25px'} pl={'30px'} bg={'white'} width={600} height={264} borderRadius={16}>
			<Flex justifyContent={'space-between'}>
				<Box>
					<Text as={'h2'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={24}>Trips Today</Text>
					<Text mt={'8px'} fontSize={40} fontWeight={600}>04/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'}fontSize={30}>2.7hrs</Text></Text>
				</Box>
				<Flex justifyContent={'space-between'}>
					<Flex flexDirection={'column'} justifyContent={'center'}>
						<DownArrowIcon width={14} height={14} />
						<Text mt={'10px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={11}>Yesterday</Text>
						<Text mt={'2px'} fontSize={14} fontWeight={600}>05/
							<Text as={'span'} fontSize={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
						</Text>
					</Flex>
					<Flex ml={'36px'} flexDirection={'column'} justifyContent={'center'}>
						<RightArrowIcon width={14} height={14} />
						<Text mt={'10px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={11}>Monday</Text>
						<Text mt={'2px'} fontSize={14} fontWeight={600}>04/
							<Text as={'span'} fontSize={'10.5px'} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
						</Text>
					</Flex>
				</Flex>
			</Flex>

			<Box mt={'16px'}>
				<Text color={'hsla(0, 0%, 33%, 0.7)'} fontSize={'12px'} fontWeight={500}>LAST WEEK</Text>
				<Flex mt={'14px'} justifyContent={'space-between'}>
					<Flex flexDirection={'column'} justifyContent={'center'}>
						<UpArrowIcon width={20} height={20} />
						<Text mt={'14px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={14}>Yesterday</Text>
						<Text mt={'5px'} fontSize={20} fontWeight={600}>05/
							<Text as={'span'} fontSize={15} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
						</Text>
					</Flex>
					<Flex flexDirection={'column'} justifyContent={'center'}>
						<UpArrowIcon width={20} height={20} />
						<Text mt={'14px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={14}>Yesterday</Text>
						<Text mt={'5px'} fontSize={20} fontWeight={600}>05/
							<Text as={'span'} fontSize={15} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
						</Text>
					</Flex>
					<Flex flexDirection={'column'} justifyContent={'center'}>
						<DownArrowIcon width={20} height={20} />
						<Text mt={'14px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={14}>Yesterday</Text>
						<Text mt={'5px'} fontSize={20} fontWeight={600}>05/
							<Text as={'span'} fontSize={15} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
						</Text>
					</Flex>
					<Flex flexDirection={'column'} justifyContent={'center'}>
						<DownArrowIcon width={20} height={20} />
						<Text mt={'14px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={14}>Yesterday</Text>
						<Text mt={'5px'} fontSize={20} fontWeight={600}>05/
							<Text as={'span'} fontSize={15} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
						</Text>
					</Flex>
					<Flex flexDirection={'column'} justifyContent={'center'}>
						<RightArrowIcon width={20} height={20} />
						<Text mt={'14px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={14}>Monday</Text>
						<Text mt={'5px'} fontSize={20} fontWeight={600}>04/
							<Text as={'span'} fontSize={15} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
}