import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

type FeedbackTypesStep = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypesStep) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <main className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, item]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 py-5 rounded-lg w-24 h-28 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={item.image.source} alt={item.image.alt} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </main>
    </>
  );
}
