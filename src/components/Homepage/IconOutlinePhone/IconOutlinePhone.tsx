import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlinePhone.module.css';
import { IconOutlinePhoneIcon } from './IconOutlinePhoneIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:92 */
export const IconOutlinePhone: FC<Props> = memo(function IconOutlinePhone(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconOutlinePhoneIcon className={classes.icon2} />}</div>
    </div>
  );
});
