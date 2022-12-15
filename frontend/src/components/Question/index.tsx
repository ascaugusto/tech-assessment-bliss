import React from 'react'

//models
import { questionType } from '../../reducers/question/questionModels'

//Components
import { QuestionContainer, QuestionTitleWrapper, ImgWrapper, QuestionChoiceWrapper } from './elements'
import Text from '../Text'
// import Container from '../Container'


const Question = ({id, question, thumb_url, choices, onClick }: questionType) => {
	return (
		<QuestionContainer onClick={onClick}>
			<ImgWrapper>
				<img src={thumb_url} />
			</ImgWrapper>
			<QuestionTitleWrapper>
				<Text bold paddingRight='6px'>
					{id.toString()}
				</Text>
				<Text paddingRight='6px'>
            -
				</Text>
				<Text bold>
					{question}
				</Text>
			</QuestionTitleWrapper>
			{choices.map((item, index) => (
				<QuestionChoiceWrapper key={index}>
					<Text>
            -
					</Text>
					<Text bold >
						{item.choice}
					</Text>
					<Text paddingRight='8px'>
            :
					</Text>
					<Text>
						{item.votes.toString()}
					</Text>
				</QuestionChoiceWrapper>
			))}       
		</QuestionContainer>
	)
}

export default Question