import React from 'react';
import {database} from 'firebase';
import DescriptionPage from '../../components/descr_page/index.jsx';
import Company from '../../components/company/index.jsx';
import Code from '../../../../img/icons/code-icon.svg';
import Camera from '../../../../img/icons/camera-icon.svg';
import Shutter from '../../../../img/icons/shutter-icon.svg';
import Cto from '../../../../img/icons/cto-icon.svg';
import Certificate from '../../../../img/icons/certificate-icon.svg';

import style from './styles.scss';

export default class CV extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    cvPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('cv/');
    aboutPage.on('value', (data) => {
      this.setState({ cvPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.cvPageContent[nr] && this.state.cvPageContent[nr][val];
  }

  render() {

    const { cvPageContent } = this.state;

    return (
      <div className="cv-content">
        <div className="main-info">
          <img src="../../../../img/Ingus_kruklitis.jpg" alt="Ingus Kruklitis CV background" />
          <div className="description">
            <h2>{this.getValue('nameBlock', 0)}</h2>
            <h3>{this.getValue('nameBlock', 1)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('nameBlock', 2)}} />
          </div>
        </div>
        <div className="cv_info">
          <div className="coding">
            <h3><Code />{this.getValue('coding', 0)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('coding', 1)}} />
            <ul>
              {cvPageContent.map((item, index) => {
                if (index > 5) {
                  return;
                }
                return (
                  <li key={index} dangerouslySetInnerHTML={{__html:this.getValue('coding', [index+2])}} />
                )
              })}
            </ul>
            <p dangerouslySetInnerHTML={{__html:this.getValue('coding', 9)}} />
          </div>
          <div className="travel">
            <h3><Camera />{this.getValue('travel', 0)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('travel', 1)}} />
            <ul>
              {cvPageContent.map((item, index) => {
                if (index > 4) {
                  return;
                }
                return (
                  <li key={index} dangerouslySetInnerHTML={{__html:this.getValue('travel', [index+2])}} />
                )
              })}
            </ul>
            <p dangerouslySetInnerHTML={{__html:this.getValue('travel', 7)}} />
          </div>
          <div className="work-exp">
            <h3>{this.getValue('workExperience', 0)}</h3>
            <Company
              date={this.getValue('4finance', 0)}
              company={this.getValue('4finance', 1)}
              location={this.getValue('4finance', 2)}
              position={this.getValue('4finance', 3)}
              description={this.getValue('4finance', 4)}
            />
            <Company
              date={this.getValue('lifland', 0)}
              company={this.getValue('lifland', 1)}
              location={this.getValue('lifland', 2)}
              position={this.getValue('lifland', 3)}
              description={this.getValue('lifland', 4)}
            />
            <Company
              date={this.getValue('geta', 0)}
              company={this.getValue('geta', 1)}
              location={this.getValue('geta', 2)}
              position={this.getValue('geta', 3)}
              description={this.getValue('geta', 4)}
            />
            <Company
              date={this.getValue('inbox', 0)}
              company={this.getValue('inbox', 1)}
              location={this.getValue('inbox', 2)}
              position={this.getValue('inbox', 3)}
              description={this.getValue('inbox', 4)}
            />
            <Company
              date={this.getValue('tezgsm', 0)}
              company={this.getValue('tezgsm', 1)}
              location={this.getValue('tezgsm', 2)}
              position={this.getValue('tezgsm', 3)}
              description={this.getValue('tezgsm', 4)}
            />
            <Company
              date={this.getValue('hortus', 0)}
              company={this.getValue('hortus', 1)}
              location={this.getValue('hortus', 2)}
              position={this.getValue('hortus', 3)}
              description={this.getValue('hortus', 4)}
            />
            <Company
              date={this.getValue('tieto', 0)}
              company={this.getValue('tieto', 1)}
              location={this.getValue('tieto', 2)}
              position={this.getValue('tieto', 3)}
              description={this.getValue('tieto', 4)}
            />
          </div>
          <div className="certificates">
            <h3><Certificate />{this.getValue('certificates', 0)}</h3>
            <div className="certificate-wrapper">
              {cvPageContent.map((item, index) => {
                if (!cvPageContent[index].certificateImages) {
                  return;
                }
                return (
                  <DescriptionPage
                    key={index}
                    img={cvPageContent[index].certificateImages}
                    alt={cvPageContent[index].certificates}
                  />
                )
              })}
            </div>
          </div>
          <div className="stocks">
            <h3><Shutter />{this.getValue('stocks', 0)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('stocks', 1)}} />
          </div>
          <div className="cto">
            <h3><Cto />{this.getValue('cto', 0)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('cto', 1)}} />
            <ul>
              <li dangerouslySetInnerHTML={{__html:this.getValue('cto', 2)}} />
              <li dangerouslySetInnerHTML={{__html:this.getValue('cto', 3)}} />
            </ul>
            <p dangerouslySetInnerHTML={{__html:this.getValue('cto', 4)}} />
          </div>
        </div>
      </div>
    );
  }
};
