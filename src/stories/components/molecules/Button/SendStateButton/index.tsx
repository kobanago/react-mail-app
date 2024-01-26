import { FC, useContext } from 'react';

import { ResetSendStateContext } from '@/common/context';
import { ButtonProps } from '@/stories/components/atoms/Button/Base';
import { Button } from '@/stories/components/atoms/Button/Basic';

export interface SendStateButtonType extends ButtonProps {
  keepHandler: () => void;
  sendHandler: () => void;
}

export const SendStateButton: FC<SendStateButtonType> = ({
  keepHandler,
  sendHandler,
  disabled,
}: SendStateButtonType) => {
  const { sendState } = useContext(ResetSendStateContext) ?? {};
  return (
    <>
      {(() => {
        switch (sendState) {
          case 0:
            return (
              <Button
                label={'ready to send is ok?'}
                disabled={disabled ? disabled : false}
                clickHandler={keepHandler}
              />
            );
          case 1:
            return (
              <Button
                label={'send message'}
                disabled={false}
                clickHandler={sendHandler}
              />
            );
          case 2:
            return <Button label={'complete send message!'} disabled={true} />;
          default:
            return null;
        }
      })()}
    </>
  );
};
