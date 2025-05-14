import Image from 'next/image';
import './goals.scss';

export default function Goals() {
  return (
    <article className="goals">
      <h2 className="sub-title goals__title">Portfolio Goals</h2>

      <div className="goals__indicator goals__indicator--first">
        <h3 className="head-name">portfolio loss ratio target</h3>

        <div className="goals__line goals__line--loss-ratio">
          <div className="goals__line--green"></div>
          <div className="goals__line--yellow"></div>
          <div className="goals__line--red"></div>

          <div className="goals__flag goals__flag--top">
            <p className="goals__tg">TG:55%</p>
            <Image
              className="goals__triangle goals__triange--top"
              style={{ flexShrink: 0 }}
              alt="triangle-blue"
              src="/icons/triangle-blue.svg"
              width={20}
              height={12}
            />
          </div>

          <p className="goals__number goals__number--first">48.2%</p>

          <div className="goals__flag goals__flag--bottom">
            <Image
              className="goals__triangle goals__triange--bottom"
              style={{ flexShrink: 0 }}
              alt="triangle-blue"
              src="/icons/triangle-green.svg"
              width={20}
              height={12}
            />
            <p className="goals__tg goals__tg--active">-6.8%(GOOD)</p>
          </div>
        </div>
      </div>

      <div className="goals__indicator goals__indicator--second">
        <h3 className="head-name">renewal retention</h3>

        <div className="goals__line goals__line--renewal-retention">
          <div className="goals__line--red-2"></div>
          <div className="goals__line--yellow-2"></div>
          <div className="goals__line--green-2"></div>
          <div className="goals__line--yellow-3"></div>

          <div className="goals__flag goals__flag--top">
            <p className="goals__tg">TG:85-90%</p>
          </div>

          <p className="goals__number goals__number--second">88%</p>

          <div className="goals__flag goals__flag--bottom-2">
            <Image
              className="goals__triangle goals__triange--bottom"
              style={{ flexShrink: 0 }}
              alt="triangle-blue"
              src="/icons/triangle-green.svg"
              width={20}
              height={12}
            />
            <p className="goals__tg goals__tg--active">ON TARGET</p>
          </div>
        </div>
      </div>

      <div className="goals__third">
        <h3 className="head-name">new business target</h3>

        <div className="goals__line goals__line--business-target-wrapper">
          <div className="goals__line goals__line--business-target">
            <div className="goals__gradient">
              <p className="goals__gradient-number">$8.1M</p>
              <p className="goals__tg goals__gradient-percentage">67%</p>
            </div>
          </div>

          <span className="goals__gradient-number goals__gradient-number--aside">
            $12M
          </span>
        </div>
      </div>

      <div className="goals__fourth">
        <h3 className="head-name">annual gwp target</h3>

        <div className="goals__line goals__line--business-target-wrapper">
          <div className="goals__line goals__line--business-target">
            <div className="goals__gradient">
              <p className="goals__gradient-number">$28.4M</p>
              <p className="goals__tg goals__gradient-percentage goals__tg--light">
                68%
              </p>
            </div>
          </div>

          <span className="goals__gradient-number goals__gradient-number--aside">
            $42M
          </span>
        </div>
      </div>
    </article>
  );
}
