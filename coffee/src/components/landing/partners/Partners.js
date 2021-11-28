import React from 'react';
import './Partners.css';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";



export default function Partners() {
    const [loading, setLoading] = React.useState(false);
    const onStart = () => {
        setLoading(true);
    };
    const onEnd = () => {
        setLoading(false);
    };
    const containerProps = {
        "aria-busy": loading,
    };
    return(
        <div className='partners'>
          <div className="our_partners">НАШИ ПАРТНЕРЫ</div>
          <div className='partners_count'>
                <div><img style={{zIndex: "3"}}
                    src="/images/hands.svg"/>
                </div>
            
            <div className="counterStyle1">
                <CountUp
                    end={25}
                    duration="4"
                    onStart={onStart}
                    onEnd={onEnd}
                    redraw={false}
                    containerProps={containerProps}
                >
                    {({countUpRef, start}) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <div
                                ref={countUpRef}
                                style={{
                                    // fontFamily: "SF UI Display",
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    fontSize: "40px",
                                    lineHeight: "16px",
                                    zIndex: "5",
                                    marginTop: "45px",
                                    marginLeft: "25%",
                                    position: "absolute",
                                    width: "93.19px",
                                    height: "75px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "0px",
                                }}
                            />
                        </VisibilitySensor>
                    )}
                </CountUp>
            </div>
            <div className="partners_text">партнеров</div>
            </div>




            <div className='partners_count'>
                <div><img style={{zIndex: "3"}}
                    src="/images/corn_count.svg"/>
                </div>
           
            <div className="counterStyle2">
                <CountUp
                    end={114}
                    duration="4"
                    onStart={onStart}
                    onEnd={onEnd}
                    redraw={false}
                    containerProps={containerProps}
                    style={{
                        fontFamily: "SF UI Display",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "40px",
                        lineHeight: "16px",
                        marginLeft: "25%",
                        marginTop: "72px",
                        position: "absolute",
                    }}
                >
                    {({countUpRef, start}) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <div
                                ref={countUpRef}
                                style={{
                                    // fontFamily: "SF UI Display",
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    fontSize: "40px",
                                    lineHeight: "16px",
                                    zIndex: "5",
                                    marginTop: "40px",
                                    marginLeft: "20%",
                                    position: "absolute",
                                    width: "93.19px",
                                    height: "75px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "0px",
                                }}
                            />
                        </VisibilitySensor>
                    )}
                </CountUp>
            </div>
            <div className="partners_text">кофеен</div>
            </div>


        <div className='partners_example'>
            <div><img  src="images/hotfix.svg"/></div>
            <div><img  src="images/lavazza.svg"/></div>
            <div><img  src="images/perspective.svg"/></div>
            <div><img  src="images/sound.svg"/></div>
            <div><img  src="images/cofix.svg"/></div>
        </div>
        <div className='become_partner'>
        <button>Стать партнером</button>
        </div>
        </div>
    )
}