// Credit for swtich: https://codepen.io/mikemang/pen/JEqgeO/
export default function Switch() {
  return (
    <div className="box">
      <div className="screen-outer">
        <div className="screen-inner">
          <div className="switch-left">
            <div className="switch-circle-left"></div>
          </div>
          <div className="switch-right">
            <div className="switch-circle-right"></div>
          </div>
        </div>
        <div className="controller-left">
          <div className="square-bottom"></div>
          <div className="top-button"></div>
          <div className="dpad-left">
            <div className="up"></div>
            <div className="down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <div className="joystick-left">
            <div className="joystick-inner"></div>
          </div>
        </div>
        <div className="jig">
          
        </div>
      </div>
      <style jsx>{`
        .box {
          position: relative;
          display: block;
          margin: auto;
          margin-top: 6%;
          width: 600px;
          height: 400px;
          background: none;
        }

        .screen-outer {
          position: absolute;
          height: 60%;
          width: 75%;
          left: 12.5%;
          top: 10%;
          background: #0d161d;
        }

        .screen-inner {
          position: absolute;
          height: 80%;
          width: 90%;
          background: #e60001;
          top: 10%;
          left: 5%;
        }

        .switch-left {
          position: absolute;
          background: none;
          height: 60%;
          top: 15%;
          width: 10%;
          left: 32.5%;
          border-top-left-radius: 40px;
          border-bottom-left-radius: 40px;
          border: solid 8px white;
        }

        .switch-right {
          position: absolute;
          background: white;
          height: 60%;
          top: 15%;
          width: 10%;
          right: 32.5%;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 40px;
          border: solid 8px white;
        }

        .switch-circle-left {
          position: absolute;
          border-radius: 50%;
          background: white;
          width: 50%;
          height: 20%;
          top: 20%;
          left: 25%;
          animation: move1 0.7s infinite;
        }
        .switch-circle-right {
          position: absolute;
          border-radius: 50%;
          background: #e60001;
          width: 50%;
          height: 20%;
          bottom: 20%;
          left: 25%;
          animation: move2 0.7s infinite;
        }
        .controller-left {
          position: absolute;
          width: 15%;
          height: 100%;
          left: -15%;
          background: #737a80;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }

        .jig {
          position: absolute;
          top: 50%;
          width: 2.5%;
          height: 30%;
          right: -2.5%;
          background: #F22E38;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          animation: slide 1.5s linear 1s infinite alternate;
        }

        .joystick-left {
          position: absolute;
          border-radius: 50%;
          height: 15%;
          width: 50%;
          top: 20%;
          left: 25%;
          background: #36383f;
        }

        .joystick-inner {
          position: absolute;
          border-radius: 50%;
          height: 80%;
          width: 80%;
          top: 10%;
          left: 10%;
          background: #202226;
        }

        .dpad-left {
          position: absolute;
          background: none;
          width: 80%;
          left: 10%;
          bottom: 30%;
          height: 25%;
        }

        .up {
          position: absolute;
          background: #202226;
          height: 30%;
          width: 35%;
          border-radius: 50%;
          left: 32.5%;
        }

        .left {
          position: absolute;
          background: #202226;
          height: 30%;
          width: 35%;
          top: 35%;
          border-radius: 50%;
          left: 0%;
        }

        .right {
          position: absolute;
          background: #202226;
          height: 30%;
          width: 35%;
          top: 35%;
          border-radius: 50%;
          right: 0%;
        }

        .down {
          position: absolute;
          background: #202226;
          height: 30%;
          width: 35%;
          bottom: 0%;
          border-radius: 50%;
          left: 32.5%;
        }

        .top-button {
          position: absolute;
          top: 10%;
          right: 5%;
          width: 30%;
          height: 4%;
          background: #202226;
          border-radius: 40px;
        }

        .top-dpad {
          position: absolute;
          top: 3%;
          height: 10%;
          width: 30%;
          left: 8%;
          background: #202226;
        }

        .square-top-left {
          position: absolute;
          background: #737a80;
          height: 35%;
          width: 35%;
          left: -5%;
        }

        .square-top-right {
          position: absolute;
          background: #737a80;
          height: 35%;
          width: 35%;
          right: -5%;
        }

        .square-bottom-left {
          position: absolute;
          background: #737a80;
          height: 35%;
          width: 35%;
          left: -5%;
          bottom: 0%;
        }

        .square-bottom-right {
          position: absolute;
          background: #737a80;
          height: 35%;
          width: 35%;
          right: -5%;
          bottom: 0%;
        }

        .square-bottom {
          position: absolute;
          background: #202226;
          height: 7%;
          width: 25%;
          bottom: 18%;
          right: 10%;
        }

        .circle-bottom {
          position: absolute;
          border-radius: 50%;
          height: 7.5%;
          width: 25%;
          bottom: 15%;
          left: 15%;
          background: #36383f;
        }

        .circle-inner {
          position: absolute;
          border-radius: 50%;
          height: 80%;
          width: 80%;
          top: 10%;
          left: 10%;
          background: #202226;
        }

        @media all and (max-width: 600px) {
          .box {
            margin-top: 100px;
            width: 250px;
            height: 175px;
          }
        }

        @keyframes slide {
          from {
            top: 50%;
          }
          70% {
            top: 50%;
          }
          100% {
            top: -20%;
          }
        }


      `}</style>
    </div>
  );
}
