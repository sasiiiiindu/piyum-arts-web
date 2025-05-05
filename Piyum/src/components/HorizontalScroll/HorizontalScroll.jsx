import React, {useRef} from "react";
import"./HorizontalScroll.css";
import one from "../../assets/1.jpg";
import {motion, useScroll, useTransform} from "framer-motion";
import ImageContainer from "../ImageContainer/ImageContainer";  

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const{ scrollYProgress } = useScroll({target: targetRef});

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return(
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="images" style={{x}}>
                    <motion.div 
                        className="imageItem"
                        initial={{opacity:0, y: 150}}
                        whileInView={{opacity:1, y:0, threshhold:0.99}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <ImageContainer 
                            imageSource={one} 
                            description={"Tote Bag"}
                        />
                    </motion.div>
                    <motion.div
                        className="imageItem"
                        initial={{opacity:0, y: 150}}
                        whileInView={{opacity:1, y:0, threshhold:0.99}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <ImageContainer 
                            imageSource={one} 
                            
                        />
                    </motion.div>
                    <motion.div 
                        className="imageItem"
                        initial={{opacity:0, y: 150}}
                        whileInView={{opacity:1, y:0, threshhold:0.99}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <ImageContainer 
                            imageSource={one} 
                            
                        />
                    </motion.div>
                    <motion.div
                        className="imageItem"
                        initial={{opacity:0, y: 150}}
                        whileInView={{opacity:1, y:0, threshhold:0.99}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <ImageContainer 
                            imageSource={one} 
                            
                        />
                    </motion.div>
                    <motion.div
                        className="imageItem"
                        initial={{opacity:0, y: 150}}
                        whileInView={{opacity:1, y:0, threshhold:0.99}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <ImageContainer 
                            imageSource={one} 
                            
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
};

export default HorizontalScroll;