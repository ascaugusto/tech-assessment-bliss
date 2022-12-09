import { Request, Response } from "express"
import { questionType } from "./QuestionModels"

export const QuestionGet = (req: Request, res: Response) => {
  const limit = req.query.limit || ''
  const offset = req.query.offset
  const filter = req.query.filter
  let newQuetions: questionType[] = QUESTIONS
  if (offset && isNaN(Number(offset))) {
    res.status(400).send('The offset value must be an number!')
  } else if (limit && isNaN(Number(limit))) {
    res.status(400).send('The limit value must be an number!')
  } 
  else {
    if (offset && limit) {
      const startIndex = (Number(offset) - 1) * Number(limit)
      const endIndex = Number(offset) * Number(limit)
      newQuetions = QUESTIONS.slice(startIndex, endIndex)
    }
    if (filter && typeof filter === 'string') {
      const filteredQuestions: questionType[] = []
      QUESTIONS.forEach(questionItem => {
        if (questionItem.question.includes(filter)) {
          filteredQuestions.push(questionItem)
        } else {
          questionItem.choices.forEach(choiceItem => {
            if (choiceItem.choice.includes(filter)){
              filteredQuestions.push(questionItem)
            }
          }) 
        }

        newQuetions = filteredQuestions
      });
    }

    return res.json(newQuetions)
  }
}


const QUESTIONS = [
  {
    "id": 1,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 2,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 3,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 4,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 5,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 6,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 7,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 8,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 9,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  },
  {
    "id": 10,
    "question": "Favourite programming language?",
    "image_url": "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    "thumb_url": "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    "published_at": "2015-08-05T08:40:51.620Z",
    "choices": [
      {
        "choice": "Swift",
        "votes": 2048
      },
      {
        "choice": "Python",
        "votes": 1024
      },
      {
        "choice": "Objective-C",
        "votes": 512
      },
      {
        "choice": "Ruby",
        "votes": 256
      }
    ]
  }
]
