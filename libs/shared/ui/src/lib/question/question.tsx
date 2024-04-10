import { CardChoice, CardChoiceProps } from '../card-choice/card-choice'
import Button from '../button/button'
import ShareTwitter from '../share-twitter/share-twitter'
import Info from '../info/info'

export interface QuestionProps {
  leftChoiceProps: CardChoiceProps
  rightChoiceProps: CardChoiceProps
  questionSlug: string
  showResult: boolean
  onNext: () => void
  onGoToForm: () => void
  onSkip: () => void
  onLeft: () => void
  onRight: () => void
  className?: string
  websiteUrl?: string
}

export function Question(props: QuestionProps) {
  const showResultButton = props.showResult
    ? `transition-opacity duration-300 delay-700 !opacity-100`
    : `opacity-0 pointer-events-none`

  return (
    <div className={`relative w-full h-full lg:h-screen ${props.className || ''}`}>
      <CardChoice {...props.leftChoiceProps} showResult={props.showResult} onClick={props.onLeft} position="left" />
      <CardChoice {...props.rightChoiceProps} showResult={props.showResult} onClick={props.onRight} position="right" />

      <div className="absolute bottom-10 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <ShareTwitter
          websiteUrl={props.websiteUrl || 'https://choiceof.dev'}
          questionSlug={props.questionSlug}
          showResult={props.showResult}
        />
        <Button onClick={props.onGoToForm} className={`${showResultButton || ''}`}>
          Ajouter mon propre 'choices'
        </Button>

        <Button onClick={props.onNext} className={`${showResultButton || ''}`}>
          Next question
        </Button>
      </div>
      <Info />
    </div>
  )
}

export default Question
