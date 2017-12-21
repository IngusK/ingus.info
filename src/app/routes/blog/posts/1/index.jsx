import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from '../styles.scss';

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
          <p>How do you take an idea to your manager and talk about it in a way that the manager will understand, appreciate and dream alongside you?</p>
          <p>How do game ideas become reality?</p>
          <h3>Simon P P Williams is COO of Mitenkai — Find Your Way</h3>
          <p>The first reality is that for most games, the original idea didn’t come from one person. Of course, there are some game properties that started from the vision of one genius and became gaming heritage. But there are many more games that begin as a version of an existing idea, for example Call of Duty WWII. And many games that begin as a discussion between some very creative individuals.</p>
          <p>But every game, no matter how it began, requires those that have the initial idea to communicate it. Even if it’s just to say, let’s do Call of Duty and set it in the Second World War.</p>
          <p>This <a href="#">particular</a> language problem has been solved to an extent in Hollywood by the elevator pitch. As any writer will tell you, trying to distill anything into a short sentence or paragraph is a lot harder than writing 1000 words about something. But the elevator pitch has developed into a formula for doing just that. And the games industry has something similar — with different terminology but the same purpose: to communicate simply and clearly what the game will be.</p>
          <p>Whatever technique you use, it is important to bear in mind how it works — and most importantly how your words affect the person you are talking to.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <div className="blog-post-photo left">
            <img
              alt="Alt text"
              src="../../../../../../img/blog/1/elephant.jpeg"
            />
            <h5>Photo by <a href="https://www.shutterstock.com/g/inguskruklitis" target="_blank">Bdougherty on Pixbay</a></h5>
          </div>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5yluPQd2qYA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          <p>Communication is all about the words you choose, and the affect they have on the person you are talking to. Neuroscience is beginning to narrow down how this works and when it comes to a concept, the most important factor involved in communicating it is imagination.</p>
          <p>So when you pitch any idea, every word that you use causes the person listening to fire up requests along neural fibres that gather up the necessary images and combine them, ready to picture the game.</p>
        </div>
      </div>
    );
  }
};
