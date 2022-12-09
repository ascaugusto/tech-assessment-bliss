import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Modal from 'react-modal'
import debounce from 'lodash/debounce'

//Reducer
import { useAppDispatch } from '../../redux/hooks'
import { fetchHealth, fetchQuestionList, useHealth, useQuestionList, setFilterValue, submitShareUrl } from '../../redux/question/questionSlice' 

//Components
import { HomeContainer, QuestionItemsContainer } from './elements'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Question from '../../components/Question'
import Input from '../../components/Input'

function Home() {
	const [searchParams, setSearchParams] = useSearchParams()
	const [filter, setFilter] = useState(searchParams.get('filter'))
	const [isLoading, setIsLoading] = useState(true)
	const [openShareScreenModal, setOpenShareScreenModal] = useState(false)
	const [email, setEmail] = useState('')
	const [invalidEmailMessage, setInvalidEmailMessage] = useState('')

	const dispatch = useAppDispatch()
	const serviceHealth = useSelector(useHealth)
	const questionList = useSelector(useQuestionList)
	const inputRef = useRef<HTMLInputElement>(null)
	const inputRefModal = useRef<HTMLInputElement>(null)

	//The screen will render
	useEffect(() => {
		dispatch(fetchHealth())
		inputRef.current?.focus()
	}, [])
	
	//When the health is ok!
	useEffect(() => {
		if (serviceHealth) {
			dispatch(fetchQuestionList())
			setIsLoading(false)
			filter !== null && setTimeout(() => _handleInputFocus(), 500)
		}
		setTimeout(() => setIsLoading(false), 510) 
	}, [serviceHealth])

	//The retry action will reload the page!
	const _handleRetryAction = () => {
		window.location.reload()
	}

	const _handleChange = (value: string) => {
		setFilter(value)
		setSearchParams({
			filter: value,
		})
		dispatch(setFilterValue(value))
		_debounceFetchQuestionList()
	}

	const _handleInputFocus = () => {
		inputRef.current?.focus()
		if (filter !== null) {
			dispatch(setFilterValue(filter))
		}
		dispatch(fetchQuestionList())
	}

	const _handleClearSearch = () => {
		setFilter('')
		setSearchParams({
			filter: '',
			// offset: 0
		})
		if (inputRef.current) {
			inputRef.current.value = ''
		}
	}

	const _debounceFetchQuestionList = debounce(() => {
		dispatch(fetchQuestionList())
	}, 300)

	const _handleOpenShareScreen = () => {
		setOpenShareScreenModal(true)
	}

	const _handleCloseShareScreen = () => {
		setOpenShareScreenModal(false)
		_handleClearEmail()
	}

	const _handleOnChangeEmail = (value: string) => {
		isValidEmail(value)
		setEmail(value)
	}

	const isValidEmail = debounce((email: string) => {
		if (email === '') {
			setInvalidEmailMessage('')
			return false
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setInvalidEmailMessage('Email is invalid!')
			return false
		} else {
			setInvalidEmailMessage('')
			return true
		}
	}, 300)

	const _handleClearEmail = () => {
		if (inputRefModal.current) {
			inputRefModal.current.value = ''
			setEmail('')
			setInvalidEmailMessage('')
		}
	}

	const _submitShare = () => {
		dispatch(submitShareUrl(email))
	}

	return (
		<HomeContainer>
			<Container>
				{isLoading ? (
					<Text bold>LOADING ...</Text>
				): (
					<>
						{serviceHealth ? (
							<Container column>
								<Container align='center' justify='space-between'>
									<Container column align='flex-start'>
										<Text>
											Search
										</Text>
										<Input
											value={filter || undefined}
											onChange={e => _handleChange(e.target.value)}
											onClearSearch={_handleClearSearch}
											ref={inputRef}
										/>
									</Container>
									<Text color=''>
										{invalidEmailMessage}
									</Text>
									<Button onClick={_handleOpenShareScreen}>
										Share Screen
									</Button>
								</Container>
								<QuestionItemsContainer>
									{questionList?.map((item, index) => (
										<Question 
											key={index}
											id={item.id}
											question={item.question} 
											image_url={item.image_url}
											thumb_url={item.thumb_url}
											published_at={item.published_at}
											choices={item.choices}											
										/>
									))}
								</QuestionItemsContainer>
							</Container>
						) :
							(
								<Button onClick={_handleRetryAction}>
									Retry Action
								</Button>
							)}
					</>
				)}
				
			</Container>
			<Modal
				isOpen={openShareScreenModal}
				onRequestClose={_handleCloseShareScreen}
				style={customStyles}
				contentLabel="Share Screen Modal"
			>
				<Container column height='100%' justify='space-between'>
					<Container column paddingTop='12px'>
						<Container paddingBottom='18px'>
							<Text bold size='32px'>
								Share Screen
							</Text>
						</Container>
						<Text>
							Email
						</Text>
						<Input
							value={email || undefined}
							onChange={e => _handleOnChangeEmail(e.target.value)}
							onClearSearch={_handleClearEmail}
							ref={inputRefModal}
						/>
					</Container>
					<Container column width='100%'>
						<Text>
							{invalidEmailMessage}
						</Text>
						<Button
							onClick={_submitShare}
							disabled={invalidEmailMessage !== '' || email === ''}
						>
							Send
						</Button>
					</Container>
				</Container>
			</Modal>
		</HomeContainer>
	)
}

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		height: '350px',
		width: '350px'
	},
}

export default Home