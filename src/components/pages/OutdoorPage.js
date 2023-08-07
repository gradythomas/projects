import React, { useEffect, useState, useRef } from 'react'
import {
  Typography, Divider, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container, Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from '../elements/BasicBlock'
import BasicHeader from '../elements/BasicHeader'
import BasicImage from '../elements/BasicImage'
import BasicParagraph from '../elements/BasicParagraph';

export default function Outside(props) {

    const introRef = useRef(null)
    const scoutsRef = useRef(null)
    const nolsRef = useRef(null)
    const mitocRef = useRef(null)
    const moondanceRef = useRef(null)
    const certsRef = useRef(null)

    useEffect(() => {
        props.setScrollFunctions({
            introScroll: (e) => window.scrollTo(0, introRef.current.offsetTop - 60),
            scoutsScroll: (e) => window.scrollTo(0, scoutsRef.current.offsetTop - 60),
            nolsScroll: (e) => window.scrollTo(0, nolsRef.current.offsetTop - 60), 
            mitocScroll: (e) => window.scrollTo(0, mitocRef.current.offsetTop - 60), 
            moondanceScroll: (e) => window.scrollTo(0, moondanceRef.current.offsetTop - 60), 
            certsScroll: (e) => window.scrollTo(0, certsRef.current.offsetTop - 60),
        })
        props.setScrollButtons([
            'Intro',
            'Moondance',
            'NOLS',
            'MITOC',
            'Scouts',
        ])
    }, [])

    const scoutsText = [
        'Boy Scouts',
        'Growing up, I spent a lot of time playing and being outside. My first exposure to leadership in the woods was with Scouts, where I progressed from a rookie in 6th grade to an Eagle Scout by 11th grade. Scouts taught me a lot of lessons about working in a team, the importance of being stewards of our natural places, and being independent and self-sufficient. For my Eagle Scout project, I built a trail at a local park. My project was my first experience with any kind of project or team management, and I learned how to manage logistics and a budget for the first time. I am very grateful for my time in Scouts, and plan to be a Scoutmaster some day to give others the same experience I had.'
    ]

    const nolsText = [
        'NOLS',
        'In 2020 I took a gap year due to COVID-19, where I worked at Georgia Tech Research Institute as a software engineer Co-Op from May 2020 until May 2021. That summer, I did a NOLS semester in Alaska where we spent 75 days in the backcountry, camping the entire time. The course was split into three sections, mountaineering, sea kayaking, and backpacking. We spent the whole summer with the same other eight people, learning to work with and lead each other. NOLS is first and foremost a leadership school (National Outdoor Leadership School) and we spent a lot of time learning about various leadership tenets and styles, better communication, how to give and receive feedback, and other important soft skills. We also got to practice these skills every day as designated leaders or our smaller cook groups. We also spent time learning hard skills relevant to the current terrain and activity, such as glacier travel and snow anchors on the Nelchina glacier, reading weather and sea conditions in Prince William Sound, and navigation and route-finding in the Talkeetna Mountains. \
        <br /><br />NOLS was an extremely transformative experience for me. I had just come out of a year living at home during the pandemic when my mental health and self-confidence had been at an all time low. Spending that much time outside in an incredible place would have been amazing by itself; but the challenges that came with the leadership practice and navigating unique social situations (i.e. living with the same people for so long) forced me to grow and reflect in ways I never had before. It also left me with a renewed passion for the outdoors and protecting our planet.',
        'The farthest north route is where we did backpacking, the central one mountaineering, and the farthest south sea kayaking. During my trip, I used a Garmin Instinct GPS watch to save a waypoint for each campsite. When I got home, I imported the data into <a href=\"https://caltopo.com/\" target=\"__blank\">CalTopo</a>, a wonderful online mapping resource, and generated these maps. \
        <a href=\"/routes_topo.pdf\" target=\"_blank\">Here</a> is a pdf the individual route topo maps, and <a href=\"/routes_satellite.pdf\" target=\"_blank\">here</a> are the satellite maps. In CalTopo, I added lines between campsites and for side excursions like peak ascents (this interactive map can be viewed <a href=\"https://caltopo.com/\" target=\"__blank\">here</a>) and then exported the route data into Google Earth.  \
        In Google Earth I recorded a tour as a sort of flyby through the mountains with 3D imagery:',
        'Our first section as a new group christened \"SAK 1\" was mountaineering. Only a few days after meeting each other and our instructors, we set out into the Chugach National Forest \
        on our 3 day approach to the Nelchina glacier, where we would meet a pilot bringing in our snow and glacier gear, as well as our next ration of food.',
        'On day 4 we met Pilot Mike Meekin at an \"airstrip\" (really just a flay area of gravel at the foot of the glacier) to get our food for the next 5 days, as well as all of our mountaineering gear: ropes, ice axes, harnesses, snowshoes, crampons, helmets, avalanche transceivers. The weight on our backs was about to double with all this new gear, so we took a layover day to learn some snow skills and glacier safety. Although delayed one more day for various issues, we were soon roping up for the first time and with some apprehension stepping out onto the glacier, ice axe in hand and snow shoes on feet.',
        'We learned quite quickly that living on a glacier is hard. When the sun was out the glacier acted as a sort of icy solar oven, making the heat overwhelming and softening snow. When the sun was hidden, it could drop below freezing. Storms on the glacier were especially intense, as its smooth surface meant that winds could get extreme quite quickly. Snow or rain of some kind occurred for some time almost every day. On top of the weather, we had to create a new camp every time we moved - probing in a programmatic fashion to make sure the area is free of crevasses, staking flags to make this probed perimeter visible, digging out a bathroom area and privacy wall, digging out a kitchen with wind walls, stomping tent platforms and setting up tents, building wind walls for tents if it was storming - exhausting work that would be destroyed the next day as we moved on. \
        <br /><br />But it was a truly incredible place that we were suffering in. We were just dots on a big white pancake ringed by dramatic, icy peaks, slowly trudging over crevasses and icy streams and past rumbling avalanches. Everyday on the rope, you were quite spread out and as such completely alone with your thoughts, in silence far from civilization or even other living creatures. Usually for an hour a time before taking a break, then back into your own head. It was a very unique experience to spend that much time alone with myself in such an amazing place. On the other side of the spectrum, we sometimes spent days huddled in our tents in groups of 3 and 4 hunkering out a big storm. In total, we spent 12 exhausting but amazing days exploring the Nelchina glacier.',
        'After a brutal 14 hour push to get off the glacier, we had the opportunity the next day to ice climb, and then began our trek back to the road. Spring had sprung in the valley while we were on the ice; everything was green, water was flowing, flowers were blooming. It was amazing the difference 2 weeks had made.',
        'Emerging from our first 3-week backcountry expedition was an experience in itself. We were fairly filthy, exhausted, and unused to people or noise or plumbing. We had about 48 hours to decompress, shower, sleep, eat, decomission mountaineering gear, get sea kayaking gear, brief our route, and leave for Whittier, our launching point.',
        'Finishing Sea Kayaking meant getting fully dry for the first time in 25 days - we were still living in tents, but at least we had laundry, indoor space, and there was no sand! To finish our semester we had the backpacking section. We had been looking forward to this. July often had the nicest weather, there was no special gear or anything, we were just hiking and excited to explore the Talkeetna mountains. Over the course of 3 weeks we traversed the full spread of the Northern Talkeetnas, about 80ish miles of off trail hiking, scrambling, and route-finding in the Alaskan tundra.'
        
    ]

// 
    const mitocText = [
        'MIT Outing Club',
        'Talk about SoR, leading trips, and being the president'
    ]

    const moondanceText = [
        'Moondance Adventures',
        'Moondance Adventures is an adventure travel company that takes kids on trips all around the world and is focused on having fun in the outdoors. I was very lucky to have been able to go on a few trips as a student in highschool, and they changed my life. My leaders had a massive impact on me and I realized that doing cool stuff outside brought me more joy than almost anything else. After my first trip to the Pacific Northwest in 2016, I decided I wanted to be a leader someday and hopefully give kids the same experience I had.<br /><br />\
        6 years later, in 2022, I led my first summer in Alaska on a trip that included a few days of ice climbing and hiking on the Matanuska glacier, a five day sea kayaking section in Prince William Sound, two days of rafting on the Matanuska river, and eight days of backpacking in the Talkeetna mountains. We worked with guides for most activities, but the backpack was led only by my two co-leaders and I. After three weeks of staff training in North Carolina and Nashville, we headed to Anchorage where we would have two 3-week sessions with about ten 17-year-olds each. \
        It was extremely difficult - we were responsible for the safety and comfort of these kids, some of which who had never been camping before, while also meal planning and cooking, doing first aid, managing the trip budget and logistics, and teaching skills. It also rained pretty much every day. However, it was certainly one of the most rewarding experiences of my life. It was amazing to see these kids grow and develop over only a few short weeks and come together as a team, all in my favorite place on Earth. I developed quite a bit myself, as I got lots of experience having to quickly think and make decisions on my feet, solving difficult social problems, and managing risk. It made me a much better leader, and I decided to do it again the next summer. \
        <br /><br />In 2023, after my Junior year at MIT, I led another backcountry trip in California with one of my same co-leaders from Alaska who had become one of my best friends. Our trip this summer had three days of surfing in Half Moon Bay, two days of rock climbing in Yosemite Valley, six days of backpacking in the Yosemite Wilderness, two days of rafting on the American River, and finally a three day summit attempt on Mt. Shasta. This trip presented a different set of challenges, as the logistics and driving were quite a burden on top of everything else. Once again, though, this summer had a huge impact on me and helped me become a better teacher and person.'
    ]

    const certsText = [
        'Introduction',
        'I have always loved being outside and for most of my life I have tried to spend as much time in nature as possible while honing my outdoor and leadership skills. I am primarily a climber and hiker, though I love skiing and whitewater as well and am always interested in learning new sports. This page talks about different leadership experiences I have had outside and is a place for me to share pictures and stories.<br /><br />\
        My credentials:<br />- Wilderness First Responder (WFR)<br />- CPR + AED Certified<br />- Eagle Scout<br />- NOLS Semester in Alaska Graduate<br />- 2 Summers leading trips with Moondance Adventures'
    ]


    let photoWidth = props.expandedView? "1000": "800"

    return (
        <>

        <div ref={introRef} />
        <BasicBlock header={certsText[0]} paragraph={certsText[1]} />

        <div ref={moondanceRef} />
        <BasicBlock header={moondanceText[0]} paragraph={moondanceText[1]} />

        <div ref={nolsRef} />
        <BasicBlock header={nolsText[0]} paragraph={nolsText[1]} />

        <BasicImage src="/nols_map_img.PNG" width="800" height="auto" caption={"The areas of our expeditions layed out around Palmer, the location of the NOLS farm"} />
        <BasicParagraph text={nolsText[2]} />
        <div style={{ display: 'flex', justifyContent: 'center', padding: 30, margin: 10 }}>
            <iframe 
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kUVEDEVADIg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen 
            />
        </div>
        
        <h2 style={{  margin: 0 }}>Full Trip Report</h2>
        <Divider />
        <br />
        <h3><b>Section 1: Mountaineering</b></h3>
        <BasicImage src="/trip_report/mountaineering_topo.PNG" width={photoWidth} height="auto" caption={"Our route up the Nelchina glacier in the Chugach Mountains."} />
        <BasicParagraph text={nolsText[3]} />
        <BasicImage src="/trip_report/goober_lake_frozen.jpg" width={photoWidth} height="auto" caption={"Our first campsite of the summer, Goober Lake."} />
        <BasicImage src="/trip_report/bog_day2.jpg" width={photoWidth} height="auto" caption={"Looking up the Nelchina River valley (through frozen swamp)."} />
        <BasicImage src="/trip_report/camp_day3.jpg" width={photoWidth} height="auto" caption={"Camp day 2."} />
        <BasicImage src="/trip_report/group_day3.jpg" width={photoWidth} height="auto" caption={"The group day 3, making progress up the valley."} />
        <BasicImage src="/trip_report/grady_day3.jpg" width={photoWidth} height="auto" caption={"Our first look at the mighty Nelchina glacier."} />
        <BasicImage src="/trip_report/nelchina_day3.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicParagraph text={nolsText[4]} />
        <BasicImage src="/trip_report/sleds_day5.jpg" width={photoWidth} height="auto" caption={"Some shots from around our re-ration campsite and first layover day."} />
        <BasicImage src="/trip_report/pizza_day5.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/storm_day5.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/alpenglow1.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/alpenglow3.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/alpenglow2.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/creek_day6.jpg" width={photoWidth} height="auto" caption={"A beautifully clear stream near the base of the glacier."} />
        <BasicImage src="/trip_report/camp_day6.jpg" width={photoWidth} height="auto" caption={"Our final off-glacier campsite."} />
        <BasicImage src="/trip_report/grady_day7.jpg" width={photoWidth} height="auto" caption={"Stepping onto the glacier."} />
        <BasicImage src="/trip_report/rope_team1.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/glacier_sunset1.jpg" width={photoWidth} height="auto" caption={"Our first glacier camp."} />
        <BasicParagraph text={nolsText[5]} />
        <br />
        <BasicImage src="/trip_report/glacier_camp2.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/rope_team2.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/rope_team3.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/glacier_last_day1.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/glacier_last_day2.jpg" width={photoWidth} height="auto" caption={"The final push off the glacier into some sinister clouds."} />
        <BasicImage src="/trip_report/glacier_last_day3.jpg" width={photoWidth} height="auto" caption={"Clear sky looking back up the glacier at the same time."} />
        <BasicImage src="/trip_report/glacier_last_day4.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/ice_axe.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicParagraph text={nolsText[6]} />
        <br />
        <BasicImage src="/trip_report/ice_climbing.jpg" width={photoWidth} height="auto" caption={"Lowering into the crevasse to climb out of."} />
        <BasicImage src="/trip_report/moraine_pond_camp1.jpg" width={photoWidth} height="auto" caption={"Possibly my favorite campsite of the summer."} />
        <BasicImage src="/trip_report/moraine_pond_camp2.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/water_canyon.jpg" width={photoWidth} height="auto" caption={"The ice canyon was now a water canyon."} />
        <BasicImage src="/trip_report/hiking_out_gravel.jpg" width={photoWidth} height="auto" caption={""} />

        <h3><b>Section 2: Sea Kayaking</b></h3>
        <Divider />
        <BasicImage src="/trip_report/sea_kayak_topo.PNG" width={photoWidth} height="auto" caption={"Our route through Southern Prince William Sound."} />
        <BasicParagraph text={nolsText[7]} />
        <br />
        <BasicImage src="/trip_report/point_noel1.jpg" width={photoWidth} height="auto" caption={"Point Noel, the beach where we were dropped off."} />
        <BasicImage src="/trip_report/jim_point_noel.jpg" width={photoWidth} height="auto" caption={"Jim Chism, one of my sea kayaking instructors and a NOLS legend."} />
        <BasicImage src="/trip_report/shrimp_boat_point_noel.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/grilling_salmon.jpg" width={photoWidth} height="auto" caption={"Fresh salmon from fishermen grilled over a flame on the beach."} />
        <BasicImage src="/trip_report/camp_2.jpg" width={photoWidth} height="auto" caption={"Our campsite after our first travel day in kayaks."} />
        <BasicImage src="/trip_report/sea_view1.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/nassau_fjord_water.jpg" width={photoWidth} height="auto" caption={"The water in Nassau fjord made turquoise by its glacier."} />
        <BasicImage src="/trip_report/nassau_fjord_glacier.jpg" width={photoWidth} height="auto" caption={"The Chenega Glacier at the head of Nassau fjord."} />
        <BasicImage src="/trip_report/nassau_fjord_tents.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/nassau_fjord_beach.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/nassau_fjord_icebergs.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/grady_nassau_fjord.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/sea_view2.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/sea_view3.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/sea_view4.jpg" width={photoWidth} height="auto" caption={"Traveling through Bainbridge Passage."} />
        <BasicImage src="/trip_report/sea_view5.jpg" width={photoWidth} height="auto" caption={""} />
        <BasicImage src="/trip_report/sea_view6.jpg" width={photoWidth} height="auto" caption={"The Bainbridge Glacier in the distance."} />
        <h3><b>Section 3: Backpacking</b></h3>
        <Divider />
        <BasicImage src="/trip_report/backpacking_topo.PNG" width={photoWidth} height="auto" caption={"Our route across the Northern Talkeetnas."} />
        <BasicParagraph text={nolsText[8]} />
        <br />
        <BasicImage src="/trip_report/first_backpack_camp.jpg" width={photoWidth} height="auto" caption={"Our first campsite of the section. It felt bittersweet that we were starting our final section."} />
        <BasicImage src="/nols_talkeetna_denali_blue.jpg" width={photoWidth} height="auto" caption={"The mighty Denali towering above everything else!"} />
        <BasicImage src="/trip_report/hidden_valley1.jpg" width={photoWidth} height="auto" caption={"One of our ISGE campsites."} />
        <BasicImage  src="/nols_talkeetna_sun_hills.jpg" width={photoWidth} height="auto" caption={"A midnight sunset at our last ISGE campsite."} />
        <BasicImage src="/nols_talkeetna_flower.jpg" width={photoWidth} height="auto" caption={""} />
        
        <div ref={mitocRef} />
        <BasicBlock header={mitocText[0]} paragraph={mitocText[1]} />

        <div ref={scoutsRef} />
        <BasicBlock header={scoutsText[0]} paragraph={scoutsText[1]} />
        <BasicImage src="/trail_pic.JPG" width="504" height="378" caption="A portion of the trail"/>

        
        </>
    )
}