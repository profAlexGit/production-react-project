import styles from './code.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const {
    className,
    text
  } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.code, {}, [className])}>
      <Button
        className={styles.copyBtn}
        theme={ThemeButton.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon className={styles.copyIcon}/>
        {/* <Icon Svg={CopyIcon}/> */}
      </Button>
      <code className={styles.codeContent}>
        {text}
      </code>
    </pre>
  );
});
