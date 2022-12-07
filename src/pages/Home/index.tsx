import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

//Reducer
import { useAppDispatch } from '../../redux/hooks'
import { fetchHealth, fetchQuestionList, useHealth, useQuestionList } from '../../redux/question/questionSlice' 

//Components
import { HomeContainer, QuestionItemsContainer } from './elements'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Question from '../../components/Question'
import SearchInputContainer from '../../components/SearchInput'

function Home() {
	const [searchParams, setSearchParams] = useSearchParams()
	const [filter, setFilter] = useState(searchParams.get('filter'))
	// const [offset, setOffset] = useState(searchParams.get('offset'))

	const [isLoading, setIsLoading] = useState(true)
	const dispath = useAppDispatch()
	const serviceHealth = useSelector(useHealth)
	const questionList = useSelector(useQuestionList)


	useEffect(() => {
		dispath(fetchHealth())
	}, [])

	useEffect(() => {
		if (serviceHealth) {
			dispath(fetchQuestionList())
			setIsLoading(false)
		}
	}, [serviceHealth])

	const _handleRetryAction = () => {
		window.location.reload()
	}

	const _handleChange = (value: string) => {
		setFilter(value)
		setSearchParams({
			filter: value,
			// offset: 0
		})
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
								<Container column align='flex-start'>
									<Text>
										Search
									</Text>
									<SearchInputContainer
										value={filter || undefined}
										onChange={e => _handleChange(e.target.value)}
									/>
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
		</HomeContainer>
	)
}

export default Home