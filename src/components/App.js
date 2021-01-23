import React, { Component } from 'react';
import './App.css';
import Content from './content'


class App extends Component {
  render() {
   
    return (
      <div className="App">
        <div className="top-header">
          <h1>Techno-Dict Resources</h1>
        </div>
        <Content header="DBMS Roadmap" link="https://whimsical.com/dbms-roadmap-by-love-babbar-FmUi8ffVop33t3MmpVxPCo"/>
        <Content header="Competitive Programming" link="https://whimsical.com/codeforces-candidate-master-roadmap-by-love-babbar-CiXPPD3CnwoXPr2d8Ajx1h"/>
        <Content header="OOP Roadmap" link="https://whimsical.com/object-oriented-programming-cheatsheet-by-love-babbar-YbSgLatbWQ4R5paV7EgqFw"/>
        <Content header="OS Roadmap" link="https://whimsical.com/operating-system-cheatsheet-by-love-babbar-S9tuWBCSQfzoBRF5EDNinQ"/>
       <Content header="SDE Problems" link="https://docs.google.com/document/u/0/d/1SM92efk8oDl8nyVw8NHPnbGexTS9W-1gmTEYfEurLWQ/mobilebasic?urp=gmail_link&gxids=7628"/>
       <Content header="CP Problems" link="https://docs.google.com/document/u/0/d/1vShwt8yXYUOgkF53-iYAuJXWR7Yi5VSJrW2xB49o0PM/mobilebasic?urp=gmail_link&gxids=7628"/>
      <Content header="450 DS-Algo Problems" link="https://docs.google.com/spreadsheets/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit#gid=1773184282"/>
        <hr></hr>
        <h2>Youtube Channels:-</h2>
        <Content header="love babbar" link="https://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw"/>
        <Content header="take U forward" link="https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig"/>
        <Content header="Gaurav Sen" link="https://www.youtube.com/channel/UCRPMAqdtSgd0Ipeef7iFsKw"/>
        <Content header="Akshay Saini" link="https://www.youtube.com/channel/UC3N9i_KvKZYP4F84FPIzgPQ"/>
        <Content header="Eddie Jaoude" link="https://www.youtube.com/user/eddiejaoude"/>
        <Content header="Code for Cause" link="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg"/>
        <Content header="Code With Harry" link="https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww"/>
        <Content header="Sentdex" link="https://www.youtube.com/user/sentdex"/>
        <Content header="Corey Schafer" link="https://www.youtube.com/user/schafer5"/>
        <hr></hr>
        <h2>Websites:-</h2>
        <Content header="Codechef" link="https://www.codechef.com/"/>
        <Content header="Hackerrank" link="https://www.hackerrank.com/"/>
        <Content header="Hackearth" link="https://www.hackerearth.com/"/>
        <Content header="codeforces" link="https://codeforces.com/"/>
        <Content header="Deep Learning Drizzle" link="https://deep-learning-drizzle.github.io/index.html#contents"/>
        <Content header="Github" link="https://github.com/"/>
        <Content header="GeeksforGeeks" link="https://www.geeksforgeeks.org/"/>
        <h3 > Made by Techno-Dict[Aniket Singh]</h3>
      </div>

    );
  }
}

export default App;
