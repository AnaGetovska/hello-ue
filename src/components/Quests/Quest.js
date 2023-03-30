import { useState, createContext } from 'react'
import {
	Flex,
	Box,
	Text,
	IconButton,
	Image,
	Stack,
	Heading,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
	IconCurrent,
	IconDone,
	IconLocked,
	IconCurrentSmall,
	IconDoneSmall,
	IconLockedSmall,
} from './Icons'
import PathImage from './icons/path.png'

export const CurrentQuest = createContext()

export default function QuestList() {
	const [quests, setQuests] = useState([
		{
			id: 1,
			name: '1',
			isComplete: false,
			isUnlocked: true,
		},
		{ id: 2, name: '2', isComplete: false, isUnlocked: false },
		{ id: 3, name: '3', isComplete: false, isUnlocked: false },
		{ id: 4, name: '4', isComplete: false, isUnlocked: false },
		{ id: 5, name: '5', isComplete: false, isUnlocked: false },
		{ id: 6, name: '6', isComplete: false, isUnlocked: false },
	])

	function completeQuest(questId) {
		const updatedQuests = quests.map((quest) => {
			if (quest.id === questId) {
				return {
					...quest,
					isComplete: true,
				}
			} else if (quest.id === questId + 1) {
				return { ...quest, isUnlocked: true }
			} else {
				return quest
			}
		})
		setQuests(updatedQuests)
	}

	return (
		<Flex direction="column" mr={100} mt={5}>
			{quests.map((quest) => (
				<Box
					direction="column"
					alignItems="center"
					key={quest.id}
					maxW="250px"
					mx="auto"
				>
					{quest.isComplete ? (
						<Box maxWidth={100}>
							<IconButton
								bg="#FFFFFF"
								_hover="#FFFFFF"
								icon={<IconDone />}
								mt={8}
							/>
							<Image
								src={PathImage}
								height="90px"
								m={41}
								mt={70}
							/>
						</Box>
					) : quest.isUnlocked ? (
						<Box maxWidth={100}>
							<IconButton
								bg="#FFFFFF"
								_hover="#FFFFFF"
								icon={<IconCurrent />}
								mt={8}
								onClick={() => {
									completeQuest(quest.id)
								}}
								as={Link}
								to="/questTwo"
							></IconButton>

							<Image
								src={PathImage}
								height="90px"
								m={41}
								mt={70}
							/>
						</Box>
					) : (
						<Box maxWidth={100}>
							<IconButton
								bg="#FFFFFF"
								_hover="#FFFFFF"
								icon={<IconLocked />}
								mt={8}
							/>
							<Image
								src={PathImage}
								height="90px"
								m={41}
								mt={70}
							/>
						</Box>
					)}
				</Box>
			))}

			{/* Legend */}
			<Box position="absolute" top="auto" right={0}>
				<Stack spacing="3" mr="20px">
					<Flex alignItems="center">
						<IconLockedSmall />
						<Text mt="2px" ml={3} fontSize={13}>
							Заключен
						</Text>
					</Flex>

					<Flex alignItems="center">
						<IconCurrentSmall />
						<Text mt="2px" ml={3} fontSize={13}>
							Отключен
						</Text>
					</Flex>

					<Flex alignItems="center">
						<IconDoneSmall />
						<Text mt="2px" ml={3} fontSize={13}>
							Завършен
						</Text>
					</Flex>
				</Stack>
			</Box>

			<Heading title="Куестове"></Heading>
		</Flex>
	)
}