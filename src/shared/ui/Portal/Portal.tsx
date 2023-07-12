import { type FC } from 'react';
import { type ReactNode } from '@mdx-js/react/lib';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
  const {
    children,
    element = document.body
  } = props;

  return createPortal(children, element);
};
