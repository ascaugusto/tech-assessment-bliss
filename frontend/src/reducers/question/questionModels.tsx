export type choiceType = {
  choice: string,
  votes: number
}

export interface questionType {
  id: number,
  question: string, 
  image_url: string,
  thumb_url: string,
  published_at: string,
  choices: choiceType[],
  onClick?: () => void,
}