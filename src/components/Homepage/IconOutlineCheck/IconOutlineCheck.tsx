import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlineCheck.module.css';
import { IconOutlineCheckIcon } from './IconOutlineCheckIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:291 */
export const IconOutlineCheck: FC<Props> = memo(function IconOutlineCheck(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconOutlineCheckIcon className={classes.icon2} />}</div>
    </div>
  );
});
