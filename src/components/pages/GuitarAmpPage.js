import React, { useEffect, useState, useRef } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from '../elements/BasicBlock'
import BasicImage from '../elements/BasicImage'
import BasicHeader from '../elements/BasicHeader'
import Latex from 'react-latex'

const useStyles = makeStyles((theme) => ({
    videoBox: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 10
    },
    blogHeader: {
        marginBottom: 10,
        marginTop: 20
    },
    imgContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    }
}))

export default function GuitarAmp(props) {

    const styles = useStyles()

    const introRef = useRef(null)
    const designRef = useRef(null)
    const implRef = useRef(null)
    const demoRef = useRef(null)

    useEffect(() => {
        props.setScrollFunctions({
            introScroll: (e) => window.scrollTo(0, introRef.current.offsetTop - 60) ,
            designScroll: (e) => window.scrollTo(0, designRef.current.offsetTop - 60), 
            implScroll: (e) => window.scrollTo(0, implRef.current.offsetTop - 60), 
            demoScroll: (e) => window.scrollTo(0, demoRef.current.offsetTop - 60)
        })
        props.setScrollButtons([
            'Intro',
            'Design',
            'Build',
            'Demo'
        ])
    }, [])

    const backgroundText = [
        'Introduction',
        'My Junior fall I took Power Electronics Lab (6.131) with Professor Steve Leeb, and throughout the semester we learned about different types of power converters \
        and worked on labs where we built a 15W stereo music amplifier, a go-cart speed controller, a DC motor from discrete parts, an induction motor \
        controller, a 200V DC flash-bulb power supply, a lamp ballast, and other mini projects. The last 4 weeks of the course were spent designing and \
        building our own project, for which I chose a guitar amplifier with a flyback converter power supply.'
    ]
    
    const designText = [
        'System Design',
        ''
    ]
    
    const implText = [
        'System Build',
        ''
    ]

    let tex0 = "The basic idea for the project was to amplify, modulate, and finally drive a speaker with a signal from a usual acoustic guitar piezo pickup. There is a series of signal processing modules: a fuzz effect that the user can toggle on or off, a JFET preamp with adjustable gain, and a 15W MOSFET class AB power amplifier. The system runs off a 12V DC supply, so there will be a flyback converter that generates the +30V $V_{dd}$ and -30V $-V_{dd}$ rails for the power amplifier and preamp, and a linear regulator for the +5V $V_{cc}$ rail."
    
    let tex1 = "The amplifier is a bipolar class AB push-pull design, and as such requires both $V_{dd}$ and $-V_{dd}$ rails. "
    let tex2 = "30V is high enough that there will still be significant volume (i.e. power delivered to the speaker) without distorting the signal, but low enough that if the preamp is pushed enough, the signal will clip past 30V and distort. Therefore, I designed a flyback converter to generate +30V and -30V from a 12V input. I picked a flyback topology to easily get a negative voltage and to have multiple outputs from one converter. In order to design our flyback converter, we need to first establish the intended power transfer through the system. For a class AB amplifier, an efficiency of 50% is admirable. So, if we want to deliver 15W to the speaker, a relatively loud volume, we need to deliver 30W from the flyback, or 15W from each voltage rail. Therefore: $$P_{out} = I_{out} * V_{out}$$ $$15W = 0.5A * 30V$$ Assuming a current limiting situation on the input power supply, we have $P_{in} = 3A * 12V = 36W$. Therefore, we can allow 6W of loss in the flyback, or a minimum efficiency of 83%. Since we only need to boost by a factor of 2.5, we can choose a small transformer turns ratio of 1.5, allowing us to solve for the duty cycle: $$30V = 12V * 1.5 * \\frac{D}{1-D}$$ $$D = 0.63$$"
    let tex3 = "Furthermore, the switch and magnetizing inductance of the transformer will have to sustain the input current as well as the reflected load currents, for a total of $4.5A$. With such a large current, we cannot use a micrometals toroid core as the core losses will be far too high. Selecting the largest ferrite core, a 36/19, will bring the core losses to on the order of a few watts while ensuring the core does not saturate, leading to DCM operation. "
    let tex4 = "Assuming a switching frequency of 250 kHz, to stay in CCM: $$L_{mag} > \\frac{V_{in}*DT}{2*I_{mag}}$$ $$L_{mag} > \\frac{12V*0.63}{2*250000s*4.5A} = 3.3\\mu H$$" 
    let tex5 = "We will use $60\\mu H$ as our intended $L_{mag}$ value for plenty of headroom in the actual implementation. Therefore, our core will have 7 turns on the primary, and 11 turns on each of the secondaries." 
    let tex6 = "To size the output capacitors, if we allow 0.5V of ripple: $$C = \\frac{I_{load}*DT}{\\Delta V_{out}}$$ $$C = \\frac{0.5A * 0.63}{250000s*0.5V} = 2.2\\mu F$$" 
    let tex7 = "Therefore, we must have a minimum output capacitance of $2.2\\mu F$, but more capacitance will reduce noise in the amplifier to an extent. Our final consideration in designing the flyback converter is the clamp circuit. A resistance of $22k\\Omega$ sets the clamp voltage at a reasonable voltage greater than $V_{out}$, and a 10nF capacitor will keep the $\\tau$ about 10x larger than $f_{sw}$."

    let tex8 = "When designing the pre and power amplifiers, Bob Cordell's \"Designing Audio Power Amplifiers\" was extremely valuable, as well as looking at various open access designs online. I wanted to use a JFET for the preamp, as I had read that the harmonics added when it saturates are very similar to those of a tube overdriving, which is the gold standard in guitar amplification. Therefore, the JFET would perform the voltage amplification in my overall amplifier, shaping the tone of the signal by adding harmonics and other distortions. I essentially used a circuit designed by James T. Hawes in 2007 that uses the MFP-101, seen below. However, I lowered the value of R3 to push the FET to deliver more current out the emitter, as well has added some potentiometers to increase the resistance of R2, as that value determines the gain and overall shape of the signal, and planned to use a $12V$ $V_{dd}$."
    let tex9 = "The power amplifier consists of a MOSFET PNP/NPN pair (IRF9540 and IRF540), that is driven from the output of the preamp. It is a class AB design, meaning the FETs are biased so that their conduction overlaps near the zero point of the signal, leading to very little crossover distortion. Looking at the specs for the IRFx540s, the threshold voltage $V_{gs}$ is about 4V, so our bias will be approximately 4V, but can be determined experimentally as each FET is slightly different. This bias will be set with diodes wired between the signal and the gate of each FET, and the diode current set by a 22k resistor at the top and bottom of the bias chain."
    let tex10 = "I wanted to have a range of different tones for my amplifier, so decided to implement a bypassable fuzz stage that goes before the preamp, as a fuzz pedal would go before the input to a regular guitar amplifier. The \"Fuzz Face\" is perhaps the most iconic sounding fuzz effect, a very simply circuit made from only two transistors, and I chose a variant known as the \"Dallas Arbiter Fuzz Face\" that used a positive voltage source and NPN silicon transistors."
    
    let tex11 = "After building the flyback converter as designed, I decided to increase the duty cycle to approximately 0.7 for output voltages of +40V and -40V in order to give the power amplifier more voltage headroom (i.e. get more power/volume out before the edges of the signal starts to get near the rails and distort). To increase robustness, I hard wired in the voltage divider needed for the LM311 input for a 0.7 duty cycle instead of using a potentiometer and soldered all the control circuitry to the totem board. In the end, I had an ~240 kHz 70% duty cycle square wave driving a flyback converter that generated stable +40V and -40V supplies with about 2.5V peak to peak of noise and ripple."
    let tex12 = "The first step when building my amplifier was to build the preamp circuit as specified by Hawes, and establish the proper biasing point of the FETs. To find the proper bias, I started with a 3.3V zener diode as the bias and added 1N4001s facing the opposite direction to further offset the signal by 0.6V until there was no crossover distortion, but not so high that the FETs were totally on all the time (class A operation). The ideal point was about 4.5V in either direction, for a total of 2 zeners and 4 regular diodes. However, once coupling in the preamp, I was not delivering enough power to the speaker for significant volume. I read in the Cordell text that sometimes MOSFETs need to be driven by a much higher voltage in order to source any significant amount of current when used in a power amp push-pull configuration. So, I changed the preamp $V_{dd}$ to +40V and increased the gain by adding more resistance on the JFET collector. This produced much higher volume without distorting, but was still able to distort with a high enough resistance (about $12 k\\Omega$) on the collector of the JFET."
    let tex13 = "For the fuzz, I directly implemented the \"Dallas Arbiter Fuzz Face\" circuit (although with 12V instead of 9V). The most difficult part was making it bypassable. I needed to move the guitar signal between the input to the fuzz and the input to the preamp, and the output of the fuzz between floating (or ground for less noise) and the input to the preamp. There were no DPDT switches in lab, so I used two SPDT switches next to each other to be used in sync, which worked quite well."
    let tex14 = "I decided to mount my circuits into some kind of structure to increase durability and ease of use. Given more time and materials, I would have liked to construct a full box and speaker cabinet, but given the constraints, I instead just mounted the two circuit cards on standoffs on a piece of 1/4\" plywood. The controls (two gain knobs for the preamp, a \"fuzz\" knob for the fuzz effect, the two fuzz bypass switches, and a final switch to turn the power supply on and off by connecting the square wave to the 2125 that drives the flyback) are mounted in another piece of plywood which is turn mounted on 10\" standoffs from the bottom piece. This way, the circuit is somewhat protected, it is easy to move, and the controls are intuitive and accessible."


    return (
        <>
        <div ref={introRef} />
        <BasicBlock header={backgroundText[0]} paragraph={backgroundText[1]} />
        <br />
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex0}</Latex></div>
        <BasicImage src="/amp_img.jpeg" width="806" height="604" caption="The final product"/>
        <BasicImage src="/schematic_img.png" width="806" height="604" caption="The system schematic"/>
        <div ref={designRef} />
        <BasicBlock header={designText[0]} paragraph={designText[1]} />
        <h3>The Power Supply</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}>
        <Latex >{tex1}</Latex>
        <Latex displayMode={true}>{tex2}</Latex>
        <Latex >{tex3}</Latex>
        <Latex displayMode={true}>{tex4}</Latex>
        <Latex >{tex5}</Latex>
        <Latex displayMode={true}>{tex6}</Latex>
        <Latex >{tex7}</Latex>
        </div>
        <h3>The Pre-Amplifier</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex8}</Latex></div>
        <BasicImage src="/jfet_preamp.png" width="606" height="404" caption="Hawes's preamp design"/>
        <h3>The Power Amplifier</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex9}</Latex></div>
        <h3>The Fuzz</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex10}</Latex></div>
        <BasicImage src="/ff_schematic.png" width="606" height="404" caption="Example Dallas Arbiter Fuzz Face circuit"/>
        <div ref={implRef} />
        <BasicBlock header={implText[0]} paragraph={implText[1]} />
        <h3>The Power Supply</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex11}</Latex></div>
        <BasicImage src="/amp_in_progress1.jpg" width="800" height="600" caption="Breadboarding the amplifier with a finished flyback converter"/>
        <h3>The Amplifier</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex12}</Latex></div>
        <h3>The Fuzz</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex13}</Latex></div>
        <BasicImage src="/amp_in_progress2.jpg" width="800" height="500" caption="The finished boards, the flyback converter with controls (right) and fuzz, pre-amp, and power amp circuits (left)"/>
        <h3>The Structure</h3>
        <div style={{fontSize: '1rem', lineHeight:'1.5'}}><Latex >{tex14}</Latex></div>
        <div ref={demoRef} />
        <BasicBlock header="Demonstration" paragraph="" />
        <div className={styles.imgContainer}>
            <iframe src="https://drive.google.com/file/d/1WUgRS4lQlcigZoBl-upsaXhzaoMyoSdw/preview" width="800" height="480" allow="autoplay"></iframe>
        </div>
        </>
    )
}