import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../../../../components/image/index.jsx';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
import {database} from "firebase";

import style from '../styles.scss';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const TumblrIcon = generateShareIcon('tumblr');
const MailruIcon = generateShareIcon('mailru');
const EmailIcon = generateShareIcon('email');
const LivejournalIcon = generateShareIcon('livejournal');

// Overrides sample of FB default styles
const facebookIconStyles = {
  logoFillColor: '#fff',
  size: 42,
  round: true,
  iconBgStyle: {
    fill: 'red'
  }
};

export default class BogPost extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    blogPostPageContent: [],
  }

  componentDidMount() {
    var blogPage = database().ref('blog/');
    blogPage.on('value', (data) => {
      this.setState({ blogPostPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.blogPostPageContent[nr] && this.state.blogPostPageContent[nr][val];
  }

  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';
    return (
      <div className="blog-post">
        <div className="blog-post-content">
          <h2>Why you should turn an idea into reality quickly</h2>
        </div>
        <div className="blog-post-slide">
          <img
            alt="Alt text"
            src="../../../../../../img/blog/1/elephant.jpeg"
          />
          <h5>Photo by <a href="https://www.shutterstock.com/g/inguskruklitis" target="_blank">Bdougherty on Pixbay</a></h5>
        </div>
        <div className="blog-post-content">
          <p>It can take years to go from concept to a final video game.</p>
          <p>And yet, <a href="#">at the start everyone</a> has an idea in their head what that game looks like. The concept is clear. Mostly.</p>
          <p>The path that takes a game from concept to execution is a long and arduous one — and very similar for any idea. In any industry, when someone comes to you with a new idea and wants to create something from scratch, then everyone has the same set of problems.</p>
          <p>The first problem is how to communicate your vision.</p>
          <h4>Stay away from negative people they have a problem for every solution</h4>
          <p>How do you take an idea to your manager and talk about it in a way that the manager will understand, appreciate and dream alongside you?</p>
          <p>How do game ideas become reality?</p>
          <h3>Simon P P Williams is COO of Mitenkai — Find Your Way</h3>
          <p>The first reality is that for most games, the original idea didn’t come from one person. Of course, there are some game properties that started from the vision of one genius and became gaming heritage. But there are many more games that begin as a version of an existing idea, for example Call of Duty WWII. And many games that begin as a discussion between some very creative individuals.</p>
          <p>But every game, no matter how it began, requires those that have the initial idea to communicate it. Even if it’s just to say, let’s do Call of Duty and set it in the Second World War.</p>
          <p>This <a href="#">particular</a> language problem has been solved to an extent in Hollywood by the elevator pitch. As any writer will tell you, trying to distill anything into a short sentence or paragraph is a lot harder than writing 1000 words about something. But the elevator pitch has developed into a formula for doing just that. And the games industry has something similar — with different terminology but the same purpose: to communicate simply and clearly what the game will be.</p>
          <p>Whatever technique you use, it is important to bear in mind how it works — and most importantly how your words affect the person you are talking to.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <div className="blog-post-photo right">
            <Image
              img={"../../../../../../img/blog/1/soldier.jpeg"}
              alt={"Aerial image of Riga old town"}
            />
            <h5>Photo by <a href="https://www.shutterstock.com/g/inguskruklitis" target="_blank">Bdougherty on Pixbay</a></h5>
          </div>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <div className="blog-post-photo left">
            <div className="iframe-wrapper">
              <iframe src="https://www.youtube.com/embed/5yluPQd2qYA" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <h5>Photo by <a href="https://www.shutterstock.com/g/inguskruklitis" target="_blank">Bdougherty on Pixbay</a></h5>
          </div>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>So when you pitch any idea, every word that you use causes the person listening to fire up requests along neural fibres that gather up the necessary images and combine them, ready to picture the game.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <div className="blog-post-photo double">
            <Image
              img={"../../../../../../img/sample.jpg"}
              alt={"Aerial image of Riga old town"}
            />
            <Image
              img={"../../../../../../img/sample.jpg"}
              alt={"Aerial image of Riga old town"}
            />
          </div>
          <h5>Photo by <a href="https://www.shutterstock.com/g/inguskruklitis" target="_blank">Bdougherty on Pixbay</a></h5>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
        </div>
        <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon {...facebookIconStyles} />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </FacebookShareCount>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>

          <LinkedinShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </LinkedinShareCount>
        <div className="related-posts">
          <h2>You may also be interested in</h2>
          <ul>
            <li>
              <a href="#">
                <img
                  alt="Alt text"
                  src="../../../../../../img/blog/1/elephant.jpeg"
                />
                <h5>Travel</h5>
                <h3>Can VR be used for social change?</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  alt="Alt text"
                  src="../../../../../../img/blog/1/elephant.jpeg"
                />
                <h5>Travel</h5>
                <h3>Can VR be used for social change?</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  alt="Alt text"
                  src="../../../../../../img/blog/1/soldier.jpeg"
                />
                <h5>Travel</h5>
                <h3>Can VR be used for social change?</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
