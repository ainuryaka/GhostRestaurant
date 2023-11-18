import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypeBorder } from './Button_StateNormalTypeBorder/Button_StateNormalTypeBorder';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import { ButtonBase_SizeLargeTypePrimar } from './ButtonBase_SizeLargeTypePrimar/ButtonBase_SizeLargeTypePrimar';
import { Ellipse6Icon } from './Ellipse6Icon.js';
import { Ellipse43Icon } from './Ellipse43Icon.js';
import { FarmSvgrepoCom1Icon } from './FarmSvgrepoCom1Icon.js';
import { FoodDishSvgrepoCom11Icon } from './FoodDishSvgrepoCom11Icon.js';
import { Footer } from './Footer/Footer';
import { GhostSvgrepoCom31Icon } from './GhostSvgrepoCom31Icon.js';
import classes from './Homepage.module.css';
import { IconOutlineLocationMarker } from './IconOutlineLocationMarker/IconOutlineLocationMarker';
import { IconOutlineLocationMarkerIcon } from './IconOutlineLocationMarkerIcon.js';
import { IconOutlineMail } from './IconOutlineMail/IconOutlineMail';
import { IconOutlineMailIcon2 } from './IconOutlineMailIcon2.js';
import { IconOutlineMailIcon } from './IconOutlineMailIcon.js';
import { IconOutlinePhone } from './IconOutlinePhone/IconOutlinePhone';
import { IconOutlinePhoneIcon2 } from './IconOutlinePhoneIcon2.js';
import { IconOutlinePhoneIcon } from './IconOutlinePhoneIcon.js';
import { Line6Icon } from './Line6Icon.js';
import { Line7Icon } from './Line7Icon.js';
import { MoneyAlt1SvgrepoCom1Icon } from './MoneyAlt1SvgrepoCom1Icon.js';
import { OriginalLogo_TypeMain } from './OriginalLogo_TypeMain/OriginalLogo_TypeMain';
import { SocialIcon } from './SocialIcon.js';
import { TextIcon } from './TextIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
    iconOutlineCheckCircle2?: boolean;
    iconOutlineArrowRight2?: boolean;
    iconOutlineCheck?: boolean;
    iconSolidCheveronRight?: boolean;
    iconOutlineCheck2?: boolean;
    iconSolidCheveronRight2?: boolean;
    iconOutlineCheck3?: boolean;
    iconSolidCheveronRight3?: boolean;
    iconOutlineCheck4?: boolean;
    iconSolidCheveronRight4?: boolean;
    iconOutlineCheck5?: boolean;
    iconSolidCheveronRight5?: boolean;
    iconOutlineCheckCircle3?: boolean;
    iconOutlineArrowRight3?: boolean;
    iconOutlineCheckCircle4?: boolean;
    iconOutlineArrowRight4?: boolean;
    hotFood1?: boolean;
  };
}
/* @figmaId 1:342 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bg}></div>
      <div className={classes.content}>
        <div className={classes.title}>
          <div className={classes.youCanEnjoyTheCulinaryDelights}>You can enjoy the culinary delights through apps</div>
          <div className={classes.weVeMadeOrderingYourFavoriteDi}>
            We&#39;ve made ordering your favorite dishes as easy as possible
          </div>
        </div>
        <div className={classes.logo}>
          <div className={classes._1}>
            <div className={classes._131}></div>
            <div className={classes.woltSymbol1}></div>
            <div className={classes.glovo_logo1}></div>
          </div>
        </div>
      </div>
      <Footer />
      <div className={classes.bg2}></div>
      <div className={classes.info}>
        <div className={classes.call}>
          <IconOutlinePhone
            className={classes.iconOutlinePhone}
            swap={{
              icon: <IconOutlinePhoneIcon className={classes.icon} />,
            }}
          />
          <div className={classes._77172645716}>+7 (7172) 645-716</div>
        </div>
        <div className={classes.mail}>
          <IconOutlineMail
            className={classes.iconOutlineMail}
            swap={{
              icon: <IconOutlineMailIcon className={classes.icon2} />,
            }}
          />
          <div className={classes.infoAstanaitEduKz}>info@astanait.edu.kz</div>
        </div>
        <div className={classes.location}>
          <IconOutlineLocationMarker
            className={classes.iconOutlineLocationMarker}
            swap={{
              icon: <IconOutlineLocationMarkerIcon className={classes.icon3} />,
            }}
          />
          <div className={classes.mangilikElAvenue5511BusinessCe}>
            Mangilik El avenue, 55/11Business center EXPO, block C1
          </div>
        </div>
      </div>
      <div className={classes.content2}>
        <div className={classes.title2}>
          <div className={classes.isYourRestaurantInterestedInPa}>
            Is your restaurant interested in partnering with us?
          </div>
        </div>
      </div>
      <div className={classes.rectangle477}></div>
      <div className={classes.request}>
        <div className={classes.leaveARequestAndWeWillContactY}>Leave a request and we will contact you!</div>
        <div className={classes.yourName}>Your name</div>
        <div className={classes.line5}></div>
        <div className={classes.phoneNumber}>Phone number</div>
        <div className={classes.line6}>
          <Line6Icon className={classes.icon6} />
        </div>
        <div className={classes.email}>Email</div>
        <div className={classes.line7}>
          <Line7Icon className={classes.icon7} />
        </div>
      </div>
      <Button_StateNormalTypeBorder
        className={classes.button}
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Send</div>,
        }}
      />
      <div className={classes.bg3}></div>
      <div className={classes.card}>
        <div className={classes._12}>
          <div className={classes.text}>
            <div className={classes.cuisineVariety}>Cuisine Variety</div>
            <div className={classes.weOfferAnExtensiveMenuFeaturin}>
              We offer an extensive menu featuring so you can find the perfect meal for any occasion.
            </div>
          </div>
          <div className={classes.foodDishSvgrepoCom11}>
            <FoodDishSvgrepoCom11Icon className={classes.icon8} />
          </div>
        </div>
        <div className={classes._6}>
          <div className={classes.text2}>
            <div className={classes.localSourcing}>Local Sourcing</div>
            <div className={classes.weSupportLocalSuppliersAndFarm}>
              We support local suppliers and farmers, providing you with fresh, locally-sourced ingredients
            </div>
          </div>
          <div className={classes.farmSvgrepoCom1}>
            <FarmSvgrepoCom1Icon className={classes.icon9} />
          </div>
        </div>
        <div className={classes._2}>
          <div className={classes.text3}>
            <div className={classes.vector}>
              <VectorIcon className={classes.icon10} />
            </div>
            <div className={classes.timelyDelivery}>Timely Delivery</div>
            <div className={classes.wePrioritizePunctualAndEfficie}>
              We prioritize punctual and efficient delivery, ensuring that your meals arrive promptly and at the peak of
              freshness.
            </div>
          </div>
        </div>
        <div className={classes._3}>
          <div className={classes.text4}>
            <div className={classes.moneyAlt1SvgrepoCom1}>
              <MoneyAlt1SvgrepoCom1Icon className={classes.icon11} />
            </div>
            <div className={classes.affordability}>Affordability</div>
            <div className={classes.ourPricesAreCompetitiveAndDesi}>
              Our prices are competitive and designed to accommodate various budgets.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.title3}>
        <div className={classes.whyPeopleChooseUs}>Why people choose us ?</div>
      </div>
      <div className={classes.bg4}></div>
      <div className={classes.content3}>
        <div className={classes.img}>
          <div className={classes.image}>
            <div className={classes.jonathanBorbaUB7q7aipU2oUnspla}></div>
          </div>
        </div>
        <div className={classes.text5}>
          <div className={classes.title4}>
            <div className={classes.weReDedicatedToBringingTheWorl}>
              We&#39;re dedicated to bringing the world&#39;s diverse culinary traditions right to your doorstep
            </div>
            <div className={classes.ourMissionIsSimpleToServeDelic}>
              Our mission is simple - to serve delicious food that brings people together. At Phantom Taste, our passion
              lies in crafting dishes that span the globe. Our team of expert chefs meticulously prepares each dish to
              ensure an authentic and memorable dining experience.
            </div>
            <div className={classes.joinUsAndEmbarkOnAWorldwideCul}>
              Join us and embark on a worldwide culinary adventure without leaving your home.
            </div>
          </div>
          <Button_StateNormalTypeBorder
            className={classes.button2}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
            text={{
              getStartedNow: <div className={classes.getStartedNow2}>Explore Menu</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.bg5}></div>
      <div className={classes.card2}>
        <div className={classes._13}>
          <div className={classes.bg6}></div>
          <div className={classes.bg7}></div>
          <div className={classes.text6}>
            <div className={classes.icon12}>
              <TextIcon className={classes.icon13} />
            </div>
            <div className={classes.text7}>
              <div className={classes.kazakh}>Kazakh</div>
              <div className={classes.heartyFlavorsOfRichCulinaryTra}>Hearty flavors of rich culinary traditions </div>
            </div>
            <ButtonBase_SizeLargeTypePrimar
              className={classes.buttonBase}
              hide={{
                iconOutlineCheck: true,
                iconOutlineArrowRight: true,
              }}
              text={{
                button: <div className={classes.button3}>Explore Menu</div>,
              }}
            />
          </div>
        </div>
        <div className={classes._7}>
          <div className={classes.bg8}></div>
          <div className={classes.bg9}></div>
          <div className={classes.text8}>
            <div className={classes.pngTransparentBentoTakeOutJapa}></div>
            <div className={classes.text9}>
              <div className={classes.asian}>Asian</div>
              <div className={classes.fromJapaneseSushiToChineseDeli}>From Japanese sushi to Chinese delights</div>
            </div>
            <ButtonBase_SizeLargeTypePrimar
              className={classes.buttonBase2}
              hide={{
                iconOutlineCheck: true,
                iconOutlineArrowRight: true,
              }}
              text={{
                button: <div className={classes.button4}>Explore Menu</div>,
              }}
            />
          </div>
        </div>
        <div className={classes._8}>
          <div className={classes.bg10}></div>
          <div className={classes.bg11}></div>
          <div className={classes.text10}>
            <div className={classes.image112}></div>
            <div className={classes.text11}>
              <div className={classes.european}>European</div>
              <div className={classes.classicAndTimelessEuropeanFlav}> Classic and timeless European flavors</div>
            </div>
            <ButtonBase_SizeLargeTypePrimar
              className={classes.buttonBase3}
              hide={{
                iconOutlineCheck: true,
                iconOutlineArrowRight: true,
              }}
              text={{
                button: <div className={classes.button5}>Explore Menu</div>,
              }}
            />
          </div>
        </div>
        <div className={classes._9}>
          <div className={classes.bg12}></div>
          <div className={classes.bg13}></div>
          <div className={classes.text12}>
            <div className={classes._449191_foodPngTransparentFreeI}></div>
            <div className={classes.text13}>
              <div className={classes.american}>American</div>
              <div className={classes.comfortingAmericanMenuFilledWi}>
                {' '}
                Comforting American menu filled with all your favorites{' '}
              </div>
            </div>
            <ButtonBase_SizeLargeTypePrimar
              className={classes.buttonBase4}
              hide={{
                iconOutlineCheck: true,
                iconOutlineArrowRight: true,
              }}
              text={{
                button: <div className={classes.button6}>Explore Menu</div>,
              }}
            />
          </div>
        </div>
        <div className={classes._62}>
          <div className={classes.bg14}></div>
          <div className={classes.bg15}></div>
          <div className={classes.text14}>
            <div className={classes.PngtreeIftarPartyWithEasternFo}></div>
            <div className={classes.text15}>
              <div className={classes.easternCuisine}>Eastern cuisine</div>
              <div className={classes.exoticAndAromaticDishesFromThe}> Exotic and aromatic dishes from the East</div>
            </div>
            <ButtonBase_SizeLargeTypePrimar
              className={classes.buttonBase5}
              hide={{
                iconOutlineCheck: true,
                iconOutlineArrowRight: true,
              }}
              text={{
                button: <div className={classes.button7}>Explore Menu</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.title5}>
        <div className={classes.browseMenu}>Browse Menu</div>
      </div>
      <div className={classes.bg16}></div>
      <div className={classes.pexelsPixabay544551}></div>
      <div className={classes.ellipse43}>
        <Ellipse43Icon className={classes.icon14} />
      </div>
      <div className={classes.title6}>
        <div className={classes.text16}>
          <div className={classes.welcomeToOurGhostRestaurant}>Welcome to our Ghost Restaurant</div>
          <div className={classes.readyToEmbarkOnAGastronomicJou}>Ready to embark on a gastronomic journey?</div>
        </div>
        <div className={classes.buttons}>
          <Button_StateNormalTypePrimary
            className={classes.button8}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
            text={{
              getStartedNow: <div className={classes.getStartedNow3}>Order Now</div>,
            }}
          />
          <Button_StateNormalTypeBorder
            className={classes.button9}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
            text={{
              getStartedNow: <div className={classes.getStartedNow4}>Explore Menu</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.topBar}>
          <div className={classes.social}>
            <SocialIcon className={classes.icon15} />
          </div>
          <div className={classes.info2}>
            <div className={classes.call2}>
              <IconOutlinePhone
                className={classes.iconOutlinePhone2}
                swap={{
                  icon: <IconOutlinePhoneIcon2 className={classes.icon4} />,
                }}
              />
              <div className={classes._771726457162}>+7 (7172) 645-716</div>
            </div>
            <div className={classes.mail2}>
              <IconOutlineMail
                className={classes.iconOutlineMail2}
                swap={{
                  icon: <IconOutlineMailIcon2 className={classes.icon5} />,
                }}
              />
              <div className={classes.infoAstanaitEduKz2}>info@astanait.edu.kz</div>
            </div>
          </div>
        </div>
        <div className={classes.header2}>
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
              <GhostSvgrepoCom31Icon className={classes.icon16} />
            </div>
          </div>
          <div className={classes.menu}>
            <div className={classes.home}>Home</div>
          </div>
          <div className={classes.menu2}>
            <div className={classes.about}>About</div>
          </div>
          <div className={classes.menu3}>
            <div className={classes.menu4}>Menu</div>
          </div>
          <div className={classes.menu5}>
            <div className={classes.contact}>Contact</div>
          </div>
          <div className={classes.basketSvgrepoCom1}>
            <div className={classes.vector2}>
              <VectorIcon2 className={classes.icon17} />
            </div>
            <div className={classes.ellipse6}>
              <Ellipse6Icon className={classes.icon18} />
            </div>
            <div className={classes.unnamed}>0</div>
          </div>
        </div>
      </div>
    </div>
  );
});
