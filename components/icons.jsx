/*
 * CSS icons from https://cssicon.space
 */

const color = '#227093'

const BrowserIcon = () => (
  <div className="browser">
    <style jsx>{`
      .browser {
        color: #000;
        position: absolute;
        margin-left: 2px;
        margin-top: 2px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: solid 1px ${color};
      }

      .browser:before {
        content: '';
        position: absolute;
        left: 1px;
        top: 1px;
        width: 11px;
        height: 11px;
        border-radius: 85% 15%;
        transform: rotate(-45deg);
        border: solid 1px ${color};
      }

      .browser:after {
        content: '';
        position: absolute;
        top: 7px;
        width: 15px;
        height: 1px;
        background-color: ${color};
      }
    `}</style>
  </div>
)

const CodeIcon = () => (
  <div className="code">
    <style jsx>{`
      .code {
        color: #000;
        position: absolute;
        margin-left: 3px;
        margin-top: 6px;
      }

      .code:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-left: solid 1px ${color};
        border-top: solid 1px ${color};
        transform: rotate(-45deg);
      }

      .code:after {
        content: '';
        position: absolute;
        left: 6px;
        width: 8px;
        height: 8px;
        border-bottom: solid 1px ${color};
        border-right: solid 1px ${color};
        transform: rotate(-45deg);
      }
    `}</style>
  </div>
)

const MailIcon = () => (
  <div className="mail">
    <style jsx>{`
      .mail {
        color: #000;
        position: absolute;
        margin-left: 2px;
        margin-top: 4px;
        width: 15px;
        height: 10px;
        border-radius: 1px;
        border: solid 1px ${color};
      }

      .mail:before {
        content: '';
        position: absolute;
        left: 7px;
        top: -4px;
        width: 1px;
        height: 10px;
        background-color: ${color};
        transform-origin: bottom;
        transform: rotate(-54deg);
      }

      .mail:after {
        content: '';
        position: absolute;
        left: 7px;
        top: -4px;
        width: 1px;
        height: 10px;
        background-color: ${color};
        transform-origin: bottom;
        transform: rotate(54deg);
      }
    `}</style>
  </div>
)

export { BrowserIcon, CodeIcon, MailIcon }
