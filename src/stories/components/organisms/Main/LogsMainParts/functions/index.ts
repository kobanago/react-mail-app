import { MessageType, MessageContentsType } from '@/stories/common/types';

export const sortedUnionMessage = (userMessage: MessageType): MessageContentsType[] => {
  const unionMessage: MessageContentsType[] = [];
  const fieldary: ('to' | 'from')[] = ['to', 'from'];
  fieldary.forEach((key) => {
    if (userMessage && userMessage[key]) {
      userMessage[key].forEach((item: MessageContentsType) => {
        unionMessage.push(item);
      });
    }
  });
  unionMessage.sort((x, y) => {
    return x.sortTime - y.sortTime;
  });
  return unionMessage;
};
