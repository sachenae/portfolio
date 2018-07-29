import React from 'react';

import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Let's Connect!</h3>
                <hr className="sub"/>
                <p className="text-faded contact dark">Obey the principles without being bound by them.</p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="_blank" rel="noopener noreferrer" href="https://github.com/sachenae"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a className="" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1mpjxiYGbM7EjmDWJms76kfANGdjFiUdN"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sachin-shrestha-7a8292128/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>

                </div>

              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            
            </div>
          </div>
        </section>
    );
}