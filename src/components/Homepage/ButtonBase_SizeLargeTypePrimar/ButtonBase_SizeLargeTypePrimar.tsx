import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconOutlineArrowRight } from '../IconOutlineArrowRight/IconOutlineArrowRight';
import { IconOutlineCheck } from '../IconOutlineCheck/IconOutlineCheck';
import classes from './ButtonBase_SizeLargeTypePrimar.module.css';
import { IconOutlineArrowRightIcon } from './IconOutlineArrowRightIcon.js';
import { IconOutlineCheckIcon } from './IconOutlineCheckIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconOutlineCheck?: boolean;
    iconOutlineArrowRight?: boolean;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 1:107 */
export const ButtonBase_SizeLargeTypePrimar: FC<Props> = memo(function ButtonBase_SizeLargeTypePrimar(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {!props.hide?.iconOutlineCheck && (
        <IconOutlineCheck
          className={classes.iconOutlineCheck}
          swap={{
            icon: <IconOutlineCheckIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      {!props.hide?.iconOutlineArrowRight && (
        <IconOutlineArrowRight
          className={classes.iconOutlineArrowRight}
          swap={{
            icon: <IconOutlineArrowRightIcon className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
