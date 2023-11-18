import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { HotFood1Icon } from './HotFood1Icon.js';
import classes from './OriginalLogo_TypeMain.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    hotFood1?: boolean;
  };
  text?: {
    cuisine?: ReactNode;
  };
}
/* @figmaId 1:3 */
export const OriginalLogo_TypeMain: FC<Props> = memo(function OriginalLogo_TypeMain(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.cuisine != null ? props.text?.cuisine : <div className={classes.cuisine}>Cuisine</div>}
      {!props.hide?.hotFood1 && (
        <div className={classes.hotFood1}>
          <HotFood1Icon className={classes.icon} />
        </div>
      )}
    </div>
  );
});
