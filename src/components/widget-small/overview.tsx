import { ReactComponent as DownArrowIcon } from '../../assets/icons/down-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';
import Flex from "../Flex";
import Text from "../Text";

export default function Overview() {
	return (
		<Flex flexDirection={'column'} p={'36px 28px'} bg={'white'} width={284} height={264} borderRadius={16}>
			<Text as={'h2'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={26}>Trips Today</Text>
			<Text mt={'10px'} fontSize={42} fontWeight={600}>04/<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'}>2.7hrs</Text></Text>

			<Flex mt={'auto'} justifyContent={'space-between'}>
				<Flex flexDirection={'column'}>
					<DownArrowIcon />
					<Text mt={'12px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={16}>Yesterday</Text>
					<Text mt={'4px'} fontSize={16} fontWeight={600}>05/
						<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
					</Text>
				</Flex>
				<Flex flexDirection={'column'}>
					<RightArrowIcon />
					<Text mt={'12px'} color={'hsla(0, 0%, 33%, 0.7)'} fontWeight={500} fontSize={16}>Monday</Text>
					<Text mt={'4px'} fontSize={16} fontWeight={600}>04/
						<Text as={'span'} color={'hsla(0, 0%, 33%, 0.8)'}>2.9hrs</Text>
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}