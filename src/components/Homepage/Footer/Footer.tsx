import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { OriginalLogo_TypeMain } from '../OriginalLogo_TypeMain/OriginalLogo_TypeMain';
import classes from './Footer.module.css';
import { GhostSvgrepoCom31Icon } from './GhostSvgrepoCom31Icon.js';
import { SocialIcon } from './SocialIcon.js';

interface Props {
  className?: string;
  hide?: {
    hotFood1?: boolean;
  };
}
/* @figmaId 1:343 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bG}></div>
      <div className={classes.copyright2023HashtagDeveloperA}>
        Copyright © 2023 Hashtag Developer. All Rights Reserved
      </div>
      <div className={classes.line311}></div>
      <div className={classes.col1}>
        <div className={classes.social}>
          <SocialIcon className={classes.icon} />
        </div>
      </div>
      <OriginalLogo_TypeMain
        className={classes.originalLogo}
        hide={{
          hotFood1: true,
        }}
        text={{
          cuisine: <div className={classes.cuisine}>Phantom Taste</div>,
        }}
      />
      <div className={classes.ghostSvgrepoCom21}>
        <div className={classes.ghostSvgrepoCom31}>
          <GhostSvgrepoCom31Icon className={classes.icon2} />
        </div>
      </div>
    </div>
  );
});
