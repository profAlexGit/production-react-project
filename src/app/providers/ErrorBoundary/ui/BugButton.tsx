import { type FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = (props) => {
  const {
    className
  } = props;

  const [error, setError] = useState(false);

  const throwError = (): void => { setError(true); };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={throwError}
    >
			throw error
    </Button>
  );
};
