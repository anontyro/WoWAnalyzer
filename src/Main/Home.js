import React, { Component } from 'react';

import AVAILABLE_CONFIGS from 'Parser/AVAILABLE_CONFIGS';

import PatreonButton from './PatreonButton';
import Changelog from './Changelog';

import MasteryRadiusImage from './Images/mastery-radius.png';
import ItemsImage from './Images/items.png';
import SuggestionsImage from './Images/suggestions.png';
import ImportantMetricsImage from './Images/important-metrics.png';
import CooldownUsagesImage from './Images/cooldownusages.png';
import ManaBreakdownImage from './Images/mana-breakdown.png';
import OpenSourceImage from './Images/open-source.png';
import OkHandImage from './Images/ok_hand.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="panel">
              <div className="panel-heading">
                <h2>The World of Warcraft Analyzer</h2>
              </div>
              <div className="panel-body">
                <img src={MasteryRadiusImage} alt="Mastery radius" className="pull-right" style={{ margin: 15 }} />
                Use this tool to analyze your performance based on important metrics for the spec.<br /><br />

                You will need a Warcraft Logs report with advanced combat logging enabled to start. Private logs can not be used, if your guild has private logs you will have to
                {' '}<a href="https://www.warcraftlogs.com/help/start/">upload your own logs</a> or change the existing logs to the
                {' '}<i>unlisted</i> privacy option instead.<br /><br />

                Feature requests (<dfn data-tip="Provided that you're not using one of Microsoft's browsers.">and bug reports*</dfn>) are welcome! On <a href="https://discord.gg/AxphPxU">Discord</a> or create an issue <a href={`https://github.com/MartijnHols/WoWAnalyzer/issues`}>here</a>.
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h2>Features</h2>
              </div>
              <div className="panel-body text-muted">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img src={ItemsImage} style={{ maxWidth: '100%', border: '1px solid black', borderRadius: 5 }} alt="Item performance breakdowns" /><br />
                    Item performance breakdowns
                  </div>
                  <div className="col-md-6 text-center">
                    <img src={SuggestionsImage} style={{ maxWidth: '100%', border: '1px solid black', borderRadius: 5 }} alt="Suggestions for improvement" /><br />
                    Suggestions for improvement
                  </div>
                </div>
                <div className="row" style={{ marginTop: 15 }}>
                  <div className="col-md-6 text-center">
                    <img src={ImportantMetricsImage} style={{ maxWidth: '100%', border: '1px solid black', borderRadius: 5 }} alt="Important metrics" /><br />
                    Important spec specific metrics
                  </div>
                  <div className="col-md-6 text-center">
                    <img src={CooldownUsagesImage} style={{ maxWidth: '100%', border: '1px solid black', borderRadius: 5 }} alt="Cooldown usages" /><br />
                    Cooldown usage details
                  </div>
                </div>
                <div className="row" style={{ marginTop: 15 }}>
                  <div className="col-md-6 text-center">
                    <img src={ManaBreakdownImage} style={{ maxWidth: '100%', border: '1px solid black', borderRadius: 5 }} alt="Mana breakdown" /><br />
                    Mana breakdown
                  </div>
                  <div className="col-md-6 text-center">
                    <img src={OpenSourceImage} style={{ maxWidth: '100%', border: '1px solid black', borderRadius: 5 }} alt="Open source" /><br />
                    Open source
                  </div>
                </div><br />

                Full source is available on <a href="https://github.com/MartijnHols/WoWAnalyzer">GitHub</a>. Contributions are extremely welcome! Add your own module or spec if you want to be able to analyze something not yet available. The repository contains information on how to contribute, if you need any more information please join our Discord (link further below).
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h2>Changes</h2>
              </div>
              <div className="panel-body text-muted">
                <Changelog />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-5">
            <div className="panel">
              <div className="panel-heading">
                <h2>Available specs</h2>
              </div>
              <div className="panel-body text-muted">
                <ul className="list-unstyled">
                  {AVAILABLE_CONFIGS.map((config) => {
                    const className = config.spec.className.replace(/ /g, '');
                    return (
                      <li key={config.spec.id} style={{ marginBottom: 3 }}>
                        <img src={`/specs/${className}-${config.spec.specName.replace(' ', '')}.jpg`} alt="Spec logo" style={{ height: '1.6em', marginRight: 10 }} />{' '}
                        <span className={className}>{config.spec.specName} {config.spec.className}</span> maintained by <span style={{ color: '#fff' }}>{config.maintainer}</span>
                      </li>
                    );
                  })}
                </ul>

                If your spec is not in the list it may not be supported yet. Specs are added by enthusiastic players of the spec themselves. Adding specs is easy if you're familiar with JavaScript, find out more on <a href="https://github.com/MartijnHols/WoWAnalyzer/blob/master/CONTRIBUTING.md">GitHub</a> or <a href="https://discord.gg/AxphPxU" target="_blank" rel="noopener noreferrer">join the WoW Analyzer Discord</a> for additional help.<br /><br />

                If you're looking to help out development in other ways, please consider donating.<br />
                <PatreonButton text="Become a Patron" />
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h2>Discord</h2>
              </div>
              <div className="panel-body text-muted">
                I believe it's important to keep class discussion as much in class Discords as possible, so if you have spec specific questions and/or suggestions please try to discuss them in your class Discord (class Discords mods approve of this message <img src={OkHandImage} alt=":ok_hand:" style={{ height: '1.5em' }} />). The WoW Analyzer Discord is for more general questions and developers looking to contribute.<br /><br />

                <iframe src="https://discordapp.com/widget?id=316864121536512000&theme=dark" width="100%" height="300" allowTransparency="true" frameBorder="0" title="Discord Widget" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
