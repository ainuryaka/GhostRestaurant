import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlineLocationMarker.module.css';
import { IconOutlineLocationMarkerIcon } from './IconOutlineLocationMarkerIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:96 */
export const IconOutlineLocationMarker: FC<Props> = memo(function IconOutlineLocationMarker(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        {props.swap?.icon || <IconOutlineLocationMarkerIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
