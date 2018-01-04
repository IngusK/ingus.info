import React from 'react';
import {database} from "firebase";
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

import style from './styles.scss';

const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  LinkedinShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');
const TelegramIcon = generateShareIcon('telegram');
const EmailIcon = generateShareIcon('email');

export default class SocialMediaMobile extends React.PureComponent {

  static defaultProps = {
    shareUrl: '',
    title: '',
  }

  render() {
    const {title, shareUrl} = this.props;
    return (
      <div className="social-icons-mobile">
        <div>
          <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="social-icon-item"
            >
              <FacebookIcon
                // iconBgStyle={{'fill': 'black'}}
                // logoFillColor="white"
                size={32}
                round={true}
               />
            </FacebookShareButton>
            <FacebookShareCount
              url={shareUrl}
              className="social-icon-item">
              {count => count}
            </FacebookShareCount>
        </div>
        <div>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="social-icon-item">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>
        <div>
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="social-icon-item">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
        <div>
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="social-icon-item">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
          <LinkedinShareCount
            url={shareUrl}
            className="social-icon-item">
            {count => count}
          </LinkedinShareCount>
        </div>
      </div>
    );
  }
};
