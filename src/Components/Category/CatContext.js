import React, { useState,createContext } from "react";


export const CatContext = createContext();
export const DataProvider = (props) => {
    const [data, setData] =useState([
        {
            Id: "1",
            Category: "business",
            Name: "Fed Chair Powell grilled on inflation, economy during confirmation hearing",
            Date: "11 jan 2022",
            Img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2021-11/211130-Jerome-Powell-ew-1207p-fbcf9f.jpg",
            About: "Federal Reserve Chairman Jerome Powell was in the hot seat on Tuesday, testifying before the Senate Banking Committee in his renomination hearing. Coming just one day ahead of a Consumer Price Index reading that is expected to show a sky-high 7 percent annualized inflation rate, the hearing was dominated by the topic of fast-rising prices and how the Fed plans to respond. Powell indicated a willingness to raise interest rates and unwind other pandemic-era economic support programs as the central bank contends with rising inflation, but noted that rising wages at the bottom of the income spectrum are not currently a contributing factor. After spending much of 2021 characterizing steadily building inflation as “transitory” — triggered by supply chain bottlenecks rather than more fundamental drivers — the Fed shifted its stance over the last few months and indicated a future trajectory that backs out much of the pandemic-era policy support it put into place to prevent a financial meltdown in March 2020. Powell acknowledged the unprecedented nature of both the economic shock dealt by the pandemic as well as the uncharted path of the recovery. “Monetary policy must take a broad and forward-looking view, keeping pace with an ever-evolving economy,” he said. In keeping monetary policy accommodative for close to two years after the Covid-19 pandemic hit American shores, Powell and other Fed officials had made the argument that it was necessary to keep rates low and backstop bond markets until the labor market recovered from its swoon. ",
        },


        {
            Id: "2",
            Category: "business",
            Name: "Full return to office is 'dead,' experts say — and remote is only growing",
            Date: "08 jan 2022",
            Img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220107-remote-work-mn-0840-df1238.jpg",
            About: "The rise of remote work, in what some labor experts are calling “the largest change in American working and living conditions since World War II,” is set to accelerate and become a more permanent fixture as of 2022, industry observers say. The latest jobs report, released Friday, revealed a still-volatile labor market with payrolls gaining just 199,000 for the month of December, down from November's 249,000 and missing expectations of 422,000. It was a fizzling cap to a year when millions of workers voluntarily left their job each month. Full return to office is 'dead,' experts say — and remote is only growing. The change in attitudes can be charted in the survey he's been conducting of employers about their planned number of work-from-home days “post-Covid.” From June 2020 to November 2021, the number of days has steadily increased, from 1.4 days per week to more than 2 days. Firms have become increasingly positive on work from home as the pandemic has dragged on. They have adapted their management, organization and IT to operate more effectively with work from home employees,” Bloom said. “Additional return-to-office delays are likely to further increase long-run work from home levels."
        },


        {
            Id: "3",
            Category: "business",
            Name: "A record 4.5 million people quit their jobs in November",
            Date: "11 jan 2022",
            Img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/newscms/2022_01/3527960/220104-restaurant-waiter-se-1048a.jpg",
            About: "The number of people voluntarily quitting their jobs surged to a record 4.5 million in November, a show of confidence in the labor market and an indication that higher wages could prevail for a while. The increase of 370,000 people who quit, which was reported Tuesday in the Labor Department's monthly Job Openings and Labor Turnover Survey, was led by the accommodation and food services industry. There were also big increases in the health care and social assistance fields, as well as the transportation, warehousing and utilities sectors. All four U.S. regions reported rises in the number of people quitting their jobs. The historic rates of quitting continued through the end of 2021, said Nick Bunker, the director of research at the job services company Indeed Hiring Lab. Workers continued to switch jobs in light of the many opportunities the current labor market provides, with the private-sector quits rate hitting an all-time high of 3.4 percent. Of course, whether these conditions continue into 2022 is one of the biggest questions for the year ahead."
        },


        {
            Id: "4",
            Category: "business",
            Name: "Elizabeth Holmes guilty of 4 counts of fraud, acquitted of 4 in Theranos trial",
            Date: "04 jan 2022",
            Img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2022-01/220103-elizabeth-holmes-jm-1425-a3c0d8.jpg",
            About: "SAN JOSE, Calif. — Theranos founder Elizabeth Holmes was convicted Monday of four federal charges of fraud for exaggerating to investors what her blood testing company's machines could do, how much money the company could earn and how widely the machines were being used. Holmes faces a maximum of 20 years in prison per charge, likely to be served concurrently. A sentencing date could be set at a hearing next week. As a first-time offender, Holmes is unlikely to face the full term. She could also be fined and required to pay restitution to her former investors. Of the 11 charges, Holmes was acquitted on all that related to defrauding patients and one count of conspiracy. The jury remained deadlocked on three counts of defrauding investors. The underlying wire fraud amounts on those counts ranged from $99 thousand to $5.3 million. In total, Holmes was found guilty of defrauding investors of nearly $145 million. The underlying wire fraud amounts for those charges ranged from $38 million for PFM Healthcare Master Fund, a San-Francisco based healthcare hedge fund, to almost $100 million for Lakeshore Capital Management, a fund connected to the DeVos family office."
        },


        {
            Id: "5",
            Category: "business",
            Name: "Walmart temporarily closed almost 60 stores for Covid cleaning last month",
            Date: "11 jan 2022",
            Img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2022_01/3527922/220104-walmart-jm-0841.jpg",
            About: "Walmart temporarily shut almost 60 U.S. stores in Covid-19 hotspots in December to sanitize them against the virus, in a sign the new omicron variant is disrupting the retail industry. The Walmart stores — in locations including Texas and New Jersey — were closed for two days for cleaning “to present a safe and clean in-store environment for our associates and customers, a company spokesperson told Reuters in a statement. Walmart has more than 4,700 U.S. locations in total. It adopted a policy two years ago at the start of the coronavirus pandemic of closing stores for fewer than two days to “get ahead” of potential outbreaks. We've been closely monitoring our stores across the country, making the decision to temporarily close locations on a store-by-store basis through a collection of market-related data, the Walmart spokesperson said, declining to confirm that there were staff Covid cases at the closed locations."
        },


        {
            Id: "6",
            Category: "business",
            Name: "Bank accidentally deposits $176 million into people's accounts on Christmas Day",
            Date: "31 Dec 2021",
            Img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2021-12/211231-santander-bank-branch-se-205p-3b67fd.jpg",
            About: "LONDON — Thousands of people received a surprise gift on Christmas Day when European bank Santander accidentally deposited £130 million ($176 million) across 75,000 transactions. The mistake happened when payments from 2,000 business accounts in the U.K. were processed twice, meaning some employees saw their wages double, while suppliers also got more than they were expecting. The bank said the duplicate payments were caused by a “scheduling issue” that has now been rectified. It is now trying to recuperate the mistaken payments, many of which have gone into bank accounts operated by rival banks. We're sorry that due to a technical issue, some payments from our corporate clients were incorrectly duplicated on the recipients accounts, a Santander spokesperson told CNBC. None of our clients were at any point left out of pocket as a result and we will be working hard with many banks across the UK to recover the duplicated transactions over the coming days."
        },



        {
            Id: "7",
            Category: "technology",
            Name: "High-tech cars steal the show at CES consumer electronics extravaganza",
            Date: "08 jan 2022",
            Img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220107-ces-togg-ew-238p-c7ddc8.jpg",
            About: "The annual CES electronics show in Las Vegas has long been a fantasyland of high-def televisions, drones, video games and audio gear but, in recent years, it's also become the place to check out the latest in high-tech automotive. All told, more than a dozen new production and concept cars made their debut at the Las Vegas Convention Center this week, including some from as far away as Turkey and Vietnam. There's plenty of news about autonomous vehicles, the latest in-car infotainment, and “wearable robots” that could help create “super-human” factory workers. GM's Chevrolet Silverado EV is the big draw. Set to go on sale in 2023, it will be the battery-powered alternative to General Motors' best-selling product line. What may surprise some is that, at 664 horsepower and 780 pound-feet of torque, the electric pickup has substantially more power than the top-line V-8 Silverado."
        },


        {
            Id:"8",
            Category:"technology",
            Name:"GM unveils Chevy Silverado electric pickup truck to rival Ford's F-150 Lightning",
            Date:"05 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220105-2024-Chevrolet-Silverado-al-1124-93e5e3.jpg",
            About:"If General Motors is “on a path to an all-electric future,” as CEO Mary Barra often says, the new Chevrolet Silverado EV will do some heavy lifting along the way. Barra helped pull the covers off the all-electric pickup during her virtual keynote address at the CES tech show in Las Vegas on Wednesday, boasting it will match the power and performance of a conventional pickup — while also delivering 400 miles range. Set to go into production early next year, it will be GM's second battery-powered pickup and one of at least 30 all-electric models set to reach market by 2025. “The fastest-growing segment we see for EV consideration is the full-size truck segment,” Steve Majoros, Chevy's marketing chief, told NBC News. Ford has logged nearly 200,000 advance reservations for its F-150 Lightning electric pickup, while Tesla says it has over 400,000 deposits for its repeatedly delayed Cybertruck. All told, there could be 10 or more battery-electric pickups on sale by mid-decade, including versions of the Ram 1500 and Toyota Tundra, as well as the new Rivian R1T and others."
        },

        {
            Id:"9",
            Category:"technology",
            Name:"Sony to launch car company to explore electric vehicle market",
            Date:"05 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2022-01/220105-sony-vision-car-mn-1030-2e0922.jpg",
            About:"While best known for consumer electronics devices like the PlayStation game console, Sony soon may start building electric vehicles, as well, or so suggested the company's top executive during a presentation Tuesday at the CES electronics show in Las Vegas. The electronics giant has teased its interest in the auto industry during prior appearances at CES but, this time, Chairman, President and CEO Kenichiro Yoshida confirmed that Sony is setting up its own mobility unit. And to give show attendees an idea of what he has in mind, Yoshida pointed to a seven-seat, all-electric sport utility vehicle. Referencing the response to a Sony SUV concept revealed two years ago, Yoshida said, “The excitement we received after we showed off the (original) Vision-S really encouraged us to further consider how we can bring creativity and technology to change the experience of moving from one place to another.” "
        },

        {
            Id:"10",
            Category:"technology",
            Name:"Ford plans surge in production of all-electric F-150 Lightning pickup truck",
            Date:"05 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2022-01/220104-ford-f150-lightning-jm-1124-db5606.jpg",
            About:"Buoyed by a growing demand, Ford Motor Co. said Tuesday it will double the production of its first electric version of the F-150 pickup truck, America's bestselling vehicle.The surge in production of the F-150 Lightning to 150,000 vehicles per year builds on the automaker's previous announcement in the fall that it would double the manufacturing from 40,000 to 80,000 vehicles at its new factory in Dearborn, Michigan.Kumar Galhotra, Ford's president of the Americas, said the company has racked up nearly 200,000 reservations from people clamoring for an electric incarnation of the popular model.The reality is clear: People are ready for an all-electric F-150 and Ford is pulling out all the stops to scale our operations and increase production capacity, he said in a statement."
        },

        {
            Id:"11",
            Category:"technology",
            Name:"GM dethroned by Toyota after almost century-long run as top selling carmaker in the U.S.",
            Date:"05 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220104-Akio-Toyoda-ew-1148a-40f55c.jpg",
            About:"Toyota has dethroned General Motors as America's top-selling automaker in 2021, marking the first time since 1931 that the Detroit automaker wasn't the best-selling car company in the U.S.It also marks the first time a non-domestic automaker has taken the top spot in America.Toyota was able to manage supply chain issues better, allowing it to take away GM's throne for the first time in 90 years. An ongoing shortage of semiconductor chips caused sporadic shutdowns of plants and led to record-low vehicle inventories in 2021. GM said Tuesday it sold 2.2 million vehicles in the U.S. in 2021, down by 12.9 percent compared to the year earlier. Toyota, by comparison, said it sold 2.3 million vehicles in the U.S. last year, up by 10.4 percent compared to 2020. The difference in sales between the two automakers was 114,034 vehicles."
        },

        {
            Id:"12",
            Category:"technology",
            Name:"Here are the electric vehicle startups vying for your attention this year",
            Date:"05 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2021-12/211229-rivian-2019-ac-540p-bdef30.jpg",
            About:"Over the past 75 years, many startups have tried to crack the code and enter the U.S. automotive market. Virtually none have succeeded.Tesla is the rare exception, having taken advantage of the emerging interest in battery-electric vehicles. Its sales nearly doubled last year, to 960,172 vehicles. And with two more plants opening — in Berlin and Austin, Texas — it's expected to quickly blast through the 1 million mark this year. That's providing a note of hope for the dozen or more competitors hoping to match its success.Long-skeptical investors have recently shown great readiness to embrace the most promising newcomers. But some are struggling for capital, and their vehicles may not make it into production, analysts warned.“The potential some of these startups have is that they're breaking into a nascent EV market that has doubled in size this past year and is ready to take off,” said Sam Abuelsamid, the principal auto analyst for Guidehouse Insight. "
        },

        {
            Id:"13",
            Category:"covid",
            Name:"Omicron on track to infect more than half of Europe, WHO says",
            Date:"22 dec 2021",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220111-covid-greece-mb-1446-ca4700.jpg",
            About:"The omicron variant of Covid-19 is on track to infect more than half of Europeans, but it should not yet be seen as a flu-like endemic illness, the World Health Organization (WHO) said on Tuesday.Europe saw more than 7 million newly-reported cases in the first week of 2022, more than doubling over a two-week period, WHO's Europe director Hans Kluge told a news briefing.“At this rate, the Institute for Health Metrics and Evaluation forecasts that more than 50 percent of the population in the region will be infected with omicron in the next 6-8 weeks,” Kluge said, referring to a research centre at the University of Washington. On Monday, Spain's Prime Minister Pedro Sanchez said it may be time to change how it tracks Covid-19's evolution to instead use a method similar to flu, because its lethality has fallen. That would imply treating the virus as an endemic illness, rather than a pandemic, without recording every case and without testing all people presenting symptoms."
        },


        {
            Id:"14",
            Category:"covid",
            Name:"Map: Covid hospitalizations double in more than a dozen states in two weeks",
            Date:"11 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_02/3529107/220104-nurse-covid-patient-ew-334p.jpg",
            About:"Covid-19 hospitalizations have doubled in 15 states, Puerto Rico and Washington, D.C., over the past two weeks, contributing to a new national record for pandemic hospitalizations. Across the country, average Covid hospitalizations increased by more than 60,000 from Dec. 27 to Jan. 10, according to an NBC News analysis of Department of Health and Human Services data. The U.S. set a record for single-day Covid hospitalizations on Sunday, when more than 142,000 hospitalizations were reported. One out of every 10 of those patients is in Florida, where hospitals are facing a near-quadrupling of Covid patients in that time period. Average hospitalizations there rose from about 2,400 to more than 9,100. In Washington, D.C., 1 out of every 800 residents are hospitalized for Covid. In New Jersey, that number is 1 out of every 1,500. Covid hospitalizations include those admitted for the disease as well as Covid-positive patients who went to the hospital for other reasons, all of whom contribute to hospital stress levels."
        },


        {
            Id:"15",
            Category:"covid",
            Name:"Covid vaccines prevented nearly a quarter-million deaths last spring",
            Date:"11 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220111-covid-vaccine-mn-1450-a40fcc.jpg",
            About:"The Covid vaccination campaign in the United States cut hospitalizations and deaths by nearly half in the first six months of 2021, new research suggests. The shots saved nearly 241,000 lives and prevented almost 1.2 million hospitalizations, according to a model published Tuesday in the journal JAMA Network Open. Full coverage of the Covid-19 pandemic But as 2021 progressed, the vaccines were met with a significant hurdle that blunted the shots' effectiveness: People stopped getting vaccinated. “By late spring and summer vaccine uptake started leveling out,” said Dr. Eric C. Schneider, a senior vice president for policy and research at The Commonwealth Fund who collaborated on the model. “We could have had even greater impact if we had more people vaccinated.” Even without reaching higher vaccination levels, the vaccines decreased the impact of the alpha variant, a moderately more contagious form of the virus that was first detected in the United Kingdom and began circulating worldwide by the end of 2020. It became the dominant variant in the U.S. in April 2021. According to researchers from Yale University, the University of Maryland, Canada's York University and The Commonwealth Fund, vaccinations averted more than 14 million cases of Covid from mid-December 2020, when the first vaccines were authorized, through the end of June 2021, by which point about 50 percent of U.S. adults were vaccinated. "
        },


        {
            Id:"16",
            Category:"covid",
            Name:"Many patients hospitalized for other ailments are also testing positive for Covid",
            Date:"05 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220107-hospital-new-york-mn-0901-988a33.jpg",
            About:"As the super contagious omicron variant of the coronavirus spreads, hospitals are seeing a growing trend: Patients admitted for other ailments are also testing positive for Covid-19. Doctors say it may mean more people have asymptomatic or undiagnosed disease than the current data show. Across NewYork-Presbyterian Hospital's 10 campuses, just less than half of patients are admitted with Covid, meaning they were hospitalized for a non-Covid related issue but were also tested and found to be carrying the virus. Statewide the figure is 43 percent, according to state data. “I've admitted patients with abdominal pain, I've admitted patients with chest pain who had no symptoms of respiratory illness, cough or Covid, and they just ended up being Covid positive,” said Dr. Rahul Sharma, the emergency physician-in-chief for the NewYork-Presbyterian/Weill Cornell Medical Center. Hospitals across the country are also seeing a greater proportion of these so-called incidental Covid cases amid the omicron surge."
        },

        {
            Id:"17",
            Category:"covid",
            Name:"Omicron symptoms: What we know about illness caused by the new variant",
            Date:"22 dec 2021",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220107-covid-test-ew-1120a-baa6b4.jpg",
            About:"The dizzying speed of omicron's spread has left Americans questioning much of what they know about Covid-19. Though much remains uncertain, experts are beginning to understand more about the variant and how it affects people who are vaccinated, unvaccinated or who have had a Covid infection. For example, people who are exposed to omicron appear to get sick faster and may have symptoms that are different than those of other variants. Dr. Katherine Poehling, an infectious disease specialist and vaccinologist at Atrium Health Wake Forest Baptist in North Carolina, said that these appear to be the prominent symptoms from omicron: i) Cough  ii)Fatigue or tiredness iii)Congestion and runny nose iv)Sore throat  v)Headache  “We're seeing a lot of sore throat, runny nose, fatigue and mild headache,” said Dr. Rahul Sharma, the emergency physician-in-chief at the NewYork-Presbyterian/Weill Cornell Medical Center."
        },


        {
            Id:"18",
            Category:"covid",
            Name:"In a confusing pandemic moment, experts share their own approaches",
            Date:"07 jan 2022",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220106-covid-pandemic-confusing-2x1-cs-50c361.jpg",
            About:"The rapid spread of the omicron variant has left many vaccinated people feeling confused about which activities are safe as the U.S. heads into the third year of the Covid-19 crisis. Omicron appears to be far more transmissible than prior versions of the virus and better able to evade immune protection from vaccines or prior infection, though it seems to cause less severe illness. The average number of new cases in the U.S. topped 590,000 on Wednesday, with an average of 1,349 deaths. More than 110,000 Covid patients are hospitalized. For many people, those stark statistics raise familiar questions about whether to curtail social gatherings, travel and other activities. NBC News asked four public health experts about their own personal behavior and risk calculus during this chapter of the pandemic. All of them advised vaccinated people to remain vigilant and conscientious — and not to return fully to pre-pandemic life — but there was no firm consensus around some activities like air travel. Michael Osterholm, director of the Center for Infectious Disease Research and Policy at the University of Minnesota, struck the most cautious note, saying he has avoided travel and restaurant dining since March 2020."
        },


        {
            Id:"19",
            Category:"sport",
            Name:"Ishan Pandita delivers late blow to SCEB",
            Date:"11 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/pANDITA.jpg",
            About:"A resilient performance from Jamshedpur FC saw them win 1-0 against SC East Bengal in the Indian Super League here on Tuesday. The result allowed Owen Coyle's men to leapfrog the competition and reach first place in the points table with 19 points. The early exchanges saw both teams create half chances as there was little to separate the teams. Arindam Bhattacharja was called into action in the 27th minute after Murray found space behind the defensive line. The goalkeeper did well to leave the box and make the clearance. No major scoring chances fell to either team until the half-hour mark."
        },

        {
            Id:"20",
            Category:"sport",
            Name:"Boxing: Mary Kom, Amit Panghal",
            Date:"11 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/Mary-Kom-Panghal.jpg",
            About:"Six-time world champion M C Mary Kom and Asian Games gold-medallist Amit Panghal were among six Indian boxers who were on Tuesday included in the ongoing national camps for women and men in Delhi and Patiala respectively. Panghal was joined by a fit-again Vikas Krishan, who underwent a shoulder surgery last year after the Olympics, Manish Kaushik, Satish Kumar, and Ashish Kumar in the men's camp in Patiala. Mary Kom will report to the women's camp at the Indira Gandhi Indoor Stadium here after the inclusion of their names was recommended by the Boxing Federation of India. The two camps will continue till March 14, the Sports Authority of India said in a statement."
        },

        {
            Id:"21",
            Category:"sport",
            Name:"Turkey defender Ahmet Calik dies in road accident",
            Date:"11 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/Calik.jpg",
            About:"Former Turkey national soccer team defender Ahmet Calik died Tuesday in a traffic accident near Ankara, his current club said. The state-run Anadolu Agency said the 27-year-old Calik, who had been playing for Ittifak Holding Konyaspor, was killed after he lost control of his car in slippery conditions. The vehicle overturned and landed in a field. Calik was heading to Ankara from the city of Konya, where he is currently based, to deal with paperwork ahead of his wedding, Anadolu quoted his childhood friend, Onder Eryildirim, as saying."
        },

        {
            Id:"22",
            Category:"sport",
            Name:"Women's Asian Cup",
            Date:"11 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/india-womens-football-dalima-chibber.jpg",
            About:"Host nation India on Tuesday named its 23-member squad for the upcoming AFC Women's Asian Cup, including four youngsters from the team that finished runners-up in the U-19 SAFF Championships in Dhaka last month. While the All India Football Federation (AIFF) has not named a captain yet, the experienced Ashalata Devi is likely to lead the side in the continental tournament, which will be held in three venues across Maharasthra from January 20 to February 6. The players and support staff, who have already been camping in Kochi, Kerala since the team's return from Brazil, will fly out to Mumbai on Thursday, January 13, 2021. India have been drawn against IR Iran (January 20), Chinese Taipei (January 23) and China PR (January 26) in Group A of the competition that consists of 12 teams. With as many as 15 players under the age of 25 in the relatively young squad, Dennerby believes that it would “the youngsters and the experienced bunch can help each other out, both on and off the pitch.”  “We have a good bunch of young players, and some experienced heads too. The young ones are hungry to prove themselves, so that brings in a good level of energy and healthy competition for places,” said Dennerby before adding, “But it also works the other way round — as the experienced players can guide the young ones in different things both on and off the pitch.”"
        },

        {
            Id:"23",
            Category:"sport",
            Name:"India Open",
            Date:"11 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/Sindhu.jpg",
            About:"Young Indian shuttler Ashmita Chaliha recorded the first upset of the India Open when she stunned fifth seed Evgeniya Kosetskaya while top seed PV Sindhu also sailed into the women's singles second round of the tournament here on Tuesday. Reigning world champion Loh Kean Yew was stretched to three games while home favourite Kidambi Srikanth registered a convincing win in their respective men's singles first round matches of the World Tour 500 tournament series event. Unseeded Chaliha took just 31 minutes to get the better of world number 28 Russian 24-22 21-16, while double Olympic medallist Sindhu cruised past compatriot Sri Krishna Priya Kudaravalli 21-5 21-16 in her opening round. However, it was curtains for Chirag Sen as he lost 8-21 7-21 to Soong Joo Ven of Malaysia in the men's singles opening round."
        },

        {
            Id:"24",
            Category:"sport",
            Name:"Indian Premier League",
            Date:"11 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/Untitled-design-15.jpg",
            About:"One of India's largest business conglomerates, the Tata Group, is all set to replace Chinese mobile manufacturer Vivo as the Indian Premier League's title sponsor from this year, the event's governing council decided in a meeting on Tuesday. BCCI secretary Jay Shah stated, “This is indeed a momentous occasion for the BCCI IPL as the Tata Group is the epitome of global Indian enterprise with an over 100 year old legacy and operations in more than 100 countries across six continents. The BCCI like the TATA Group is keen to promote the spirit of cricket across international borders, and the growing popularity of the IPL as a global sporting franchise bears testimony to the BCCI's efforts. We are truly happy that India's largest and most trusted business groups has believed in the IPL growth story and together with the Tata Group, we will look to take Indian cricket and the IPL forward to greater heights.” “Yes, Tata group is coming in as IPL title sponsor,” IPL chairman Brijesh Patel confirmed the development to PTI. Vivo had a deal of Rs 2200 crore for title sponsorship rights from 2018-2022 but after the 2020 Galwan Valley military face-off between the Indian and Chinese Army soldiers, the brand took a break for a year with Dream11 replacing it."
        },

        {
            Id:"25",
            Category:"world",
            Name:"North Korea conducts second missile test",
            Date:"05 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/northkorea.jpg",
            About:"North Korea appeared to test fire a ballistic missile on Tuesday for the second time in less than a week, drawing condemnation from South Korea and Japan where officials said the repeated launches risked destabilising the region. The suspected ballistic missile launch was detected around 7:27 a.m. (2227 GMT) from an inland area of North Korea toward the ocean off its east coast, South Korea's Joint Chiefs of Staff (JCS) said in a statement. South Korea's National Security Council held an emergency meeting and expressed “strong regret” that the missile test came at a time when regional stability is extremely important. “Members of the NSC urged North Korea to swiftly respond to the international community's expectations for peace and stability on the Korean peninsula, and agree to resume dialogue and cooperation,” the presidential Blue House said in a statement. Coming after nuclear-armed North Korea claimed to have tested a hypersonic missile on Wednesday, the launch underscored leader Kim Jong Un's New Year's vow to bolster the military at a time when talks with South Korea and the United States have stalled. Japan's defence ministry said that if the projectile followed a normal trajectory for ballistic missiles it would have flown less than 700 km (435 miles), similar to recent tests of short-range ballistic missiles by North Korea. The South Korean military said it was cooperating with its U.S. allies and closely monitoring the situation in preparation for additional launches."
        },


        {
            Id:"26",
            Category:"world",
            Name:"East village Indian boutique",
            Date:"05 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/NY-BOUTIQUE-CLOSURE-1200.jpg",
            About:"Walking into Dress Shoppe II is like walking into an emporium of color and cloth. The shelves are overflowing with hand-embroidered fabrics and saris, the racks are tightly packed with kurtas and salwar suits, and even the ceilings are covered in intricate tapestries. Below the main floor of the shop, there are two storage floors packed with piles of additional product. All of it needs to go by Jan 31. After nearly 50 years of business, the treasured East Village store is shutting down. Following nearly two years of pandemic-related struggles, combined with a landlord dispute, the loss of her husband and her own health problems, Saroj Goyal, the owner, decided that closing the store was the best choice. “Every moment is special here,” said Goyal, 72, as she sat sipping hot tea on a December afternoon. Every so often, she paused the conversation to help a customer who had wandered in, sharing suggestions and telling them to check out the shop's Instagram. Goyal and her husband, Purushottam Goyal, emigrated from Delhi, India, in the 1970s. It was his idea to open the business in 1977; the shop soon became a slice of South Asia in Manhattan. For decades, the couple would travel to India to find one-of-a-kind objects to sell. “My husband walked from village to village to collect all these things. He had a very unique taste,” Saroj Goyal said, picking up a hand-beaded textile."
        },


        {
            Id:"27",
            Category:"world",
            Name:"China locks down 3rd city",
            Date:"05 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/China-lockdown.jpg",
            About:"A third Chinese city has locked down its residents because of a COVID-19 outbreak, raising the number confined to their homes in China to about 20 million people. The lockdown of Anyang, home to 5.5 million people, was announced late Monday after two cases of the omicron variant were reported. Residents are not allowed to go out and stores have been ordered shut except those selling necessities. Another 13 million people have been locked down in Xi'an for nearly three weeks, and 1.1 million more in Yuzhou for more than a week. It wasn't clear how long the lockdown of Anyang would last, as it was announced as a measure to facilitate mass testing of residents, which is standard procedure in China's strategy of identifying and isolating infected people as quickly as possible. The lockdowns are the broadest since the shutting down of Wuhan and most of the rest of Hubei province in early 2020 at the start of the pandemic. Since then, China's approach has evolved into one of targeting smaller areas hit by outbreaks for lockdowns. The approach of the Winter Olympics, which open Feb. 4 in Beijing, and the emergence of omicron have brought back citywide lockdowns in a bid to snuff out outbreaks and prevent them from spreading to other parts of China. A Beijing Olympics official responsible for disease control, Huang Chun, said organizers are counting on the cooperation of athletes and officials to prevent an outbreak that could affect participation."
        },


        {
            Id:"28",
            Category:"world",
            Name:"Russian-led troops to start leaving Kazakhstan in two days: President",
            Date:"05 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/Kazakhstan-Reuters-1.jpg",
            About:"A Russian-led military bloc will begin withdrawing its troops from Kazakhstan in two days after fulfilling its main mission of stabilising the Central Asian country after serious unrest, Kazakh President Kassym-Jomart Tokayev said on Tuesday. Tokayev told parliament he was appointing a long-serving career public servant Alikhan Smailov as prime minister and spoke of initiatives to narrow the wealth gap, raise taxes on the mining sector, and eliminate irregularities in state procurement. Tokayev, 68, last week asked the Moscow-led Collective Security Treaty Organisation (CSTO) to send in troops at the peak of what he later said was an attempted coup d'etat whose unnamed instigators had plunged half of the oil-rich nation's territory into violence. A day earlier, he said that the CSTO mission, whose legitimacy and duration were queried by Washington prompting an angry response from Moscow, numbered 2,030 troops and 250 pieces of military hardware.”The main mission of the CSTO peacekeeping forces has been successfully completed,” Tokayev told parliament in a video conference call. “In two days' time, a phased withdrawal of the CSTO united peacekeeping contingent will begin. The withdrawal process of the contingent will take no more than 10 days.” Russian President Vladimir Putin on Monday said the deployment had been crucial, claiming victory in defending Kazakhstan from what he described as a foreign-backed terrorist uprising. Also read |Kazakhstan roiled by violent unrest: Here's everything you need to know Kazakh authorities say order has been largely restored in the nation of 19 million and that almost 10,000 people have been detained over the unrest with a hunt for others ongoing. The authorities say that initially peaceful protests against car fuel price increases were hijacked by groups aiming to overthrow the government. Some Central Asia analysts have suggested that intra-clan infighting among the country's wealthy elite may have played a major role in what was the deadliest violence in the ex-Soviet republic's 30 years of independence from Moscow."
        },



        {
            Id:"29",
            Category:"world",
            Name:"Thailand detects African swine fever",
            Date:"05 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/thailand.jpg",
            About:"Thai authorities said on Tuesday that African swine fever had been detected in a surface swab sample collected at a slaughterhouse in Nakhon Pathom province, marking the country's first official confirmation of the disease. Authorities launched a probe at the weekend, after growing speculation in recent weeks that the disease was already decimating Thai pig herds. There were accusations of a cover up. “One sample had tested positive for African swine fever out of 309 collected, including blood samples from pigs at 10 farms and surface swabs at two slaughterhouses in swine-raising provinces,” said Sorravis Thaneto, director-general of the Department of Livestock Development. He also vowed to trace the source of the disease. The confirmation came after Thai authorities had for years denied a local outbreak of the fatal disease that has swept through Europe and Asia in recent years, and killed hundreds of millions of pigs."
        },


        {
            Id:"30",
            Category:"world",
            Name:"Russia positioning helicopters, in possible sign of Ukraine plans",
            Date:"05 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/4b11d1fe6dd44c1190b511289cbe9bb6-4b11d1fe6dd44c1190b511289cbe9bb6-a3b68da3d74d48e7a39d277448ee86d4.jpg",
            About:"The number of Russian troops at Ukraine's border has remained steady in recent weeks, despite US intelligence predictions of a surge, but US officials say that President Vladimir Putin has begun taking steps to move military helicopters into place, a possible sign that planning for an attack continues. US officials had expected additional Russian troops to stream toward the Ukrainian border in December and early January, building toward a force of 175,000. While troop movements have slowed, there are still 1,00,000 military personnel near the border and now the Russians have positioned additional attack aircraft there, US officials said. Attack and transport helicopters, along with ground attack fighter jets, would be a critical Russian advantage, should Putin decide to invade Ukraine. US officials say the Russian president's window for an invasion is limited, dictated by temperatures that will freeze the ground — allowing for the easy movement of heavy vehicles and equipment — before a spring thaw, which could begin by March, creates a muddy quagmire."
        },


        {
            Id:"31",
            Category:"tourism",
            Name:"Take a Beach Break",
            Date:"05 jan 2022",
            Img:"https://www.planetware.com/photos-large/UAE/uae-beaches-dubai-beach.jpg",
            About:"For many visitors, a UAE vacation centers around the beach. Late October to May, while temperatures plummet over Europe and North America, is high season here as the UAE's punishing summer heat gives way to winter's beach weather. Dubai and Abu Dhabi are the more obvious beach choices, offering city sightseeing, shopping, and theme parks in easy reach of the sand. For sun-and-sand focused vacations in Dubai, luxury resorts are focused along the coast west of the central city. Abu Dhabi's luxury resorts rim the shoreline of the city's various islands. Away from these two destinations, though, there are more beach options. The beach resorts of Ras Al-Khaimah and Ajman in particular are favorite city getaways, while on the UAE's eastern coast, Al Aqah beach in the Emirate of Fujairah is a popular option for beachgoers who want to head away from the crowds."
        },

        {
            Id:"32",
            Category:"tourism",
            Name:"Zoom Up Dubai's Burj Khalifa",
            Date:"05 jan 2022",
            Img:"https://www.planetware.com/photos-large/UAE/uae-dubai-burj-khalifa.jpg",
            About:"The Burj Khalifa is one of the United Arab Emirates most famous buildings and the soaring sky-high landmark of Dubai. Not only is it the world's tallest building (at 828 meters high) it also lays claim to the titles of tallest freestanding structure in the world, highest observation deck in the world, and elevator with the longest travel distance in the world. A trip up to the observation deck, with its panoramic views across Dubai, is on most visitor itineraries, both to marvel at this modern engineering and architectural feat and to admire the dizzying views of Dubai laid out below you. Address: Entry from Dubai Mall, Sheikh Zayed Road, Dubai . Official site: www.burjkhalifa.ae"
        },

        {
            Id:"33",
            Category:"tourism",
            Name:"Admire Abu Dhabi's Sheikh Zayed Mosque",
            Date:"05 jan 2022",
            Img:"https://www.planetware.com/photos-large/UAE/uae-abu-dhabi-sheikh-ziyeed-grand-mosque.jpg",
            About:"Abu Dhabi's Sheikh Zayed Grand Mosque is a mammoth modern mosque of incredible beauty. Fusing contemporary design with traditional craftsmanship, the mosque harmoniously blends modern and ancient styles and techniques to create a new interpretation of Islamic architecture. Both its exterior and interior utilize lavish amounts of gold, mosaic tiles, and glasswork to decorate the mosque's white marble stonework, while the architecture itself blends the various mosque designs of multiple Islamic empires. Inside, the prayer hall is laid with the world's largest hand-knotted carpet (5,700 square meters) and illuminated by chandeliers made from 24-karat gold and crystals. While outside, the vast marble courtyard incorporates a mammoth swirling floral floor mosaic of semi-precious stones. Address: Al Khaleej al Arabi Street, Abu Dhabi"
        },

        {
            Id:"34",
            Category:"tourism",
            Name:"Get Active on Jebel Jais in Ras Al-Khaimah",
            Date:"05 jan 2022",
            Img:"https://www.planetware.com/wpimages/2019/04/united-arab-emirates-top-attractions-jebel-jais.jpg",
            About:"The highest peak in the United Arab Emirates, Jebel Jais in the emirate of Ras Al-Khaimah is a major activity center. You could come here simply to admire the vista of rugged Hajar Mountain peaks rippling down to the coastline plateau from the viewing platform terrace near the summit, or you can choose to match those views with some adventure activities. The most popular mountain experience here is the Jebel Jais Flight, the world's longest zipline, which runs down the side of the peak for over two kilometers, reaching speeds of up to 120 kilometers per hour. For less speed thrills and more mountain time, Jebel Jais's Via Ferrata climbing route offers guided tours during the cooler months, while independent hikers can choose from six marked trails on the lower reaches of the mountain. Official site: https://visitjebeljais.com/"
        },

        {
            Id:"35",
            Category:"tourism",
            Name:"Family Fun at the Theme Parks",
            Date:"05 jan 2022",
            Img:"https://www.planetware.com/wpimages/2021/05/united-arab-emirates-top-attractions-family-fun-them-parks-wild-wadi-park.jpg",
            About:" In Dubai, Dubai Parks & Resorts offers four major theme parks rolled into one: Motiongate, dedicated to rides themed around Hollywood films; Bollywood Parks; Legoland Dubai; and Legoland Water Park. The city is also home to MG Worlds of Adventure with rides, roller coasters, and experiences themed around both Marvel storylines and characters for older kids, and the Cartoon Network for little ones. If you just want to splash about for the day, though, Dubai's Wild Wadi Water Park is your best bet in town. The best water park for older kids and teenagers wanting something more than simply slides is Wadi Adventure in Al Ain. Here, it's all about white water kayaking, surfing, and wakeboarding, though there are swimming pools here, too, for when you need a rest from all the activities. Abu Dhabi is home to two of the country's most famous branded theme parks both on Yas Island."
        },

        {
            Id:"36",
            Category:"tourism",
            Name:"UAE's Desert Landscapes",
            Date:"05 jan 2022",
            Img:"https://www.planetware.com/photos-large/UAE/uae-desert-excursions-sand-dune-view.jpg",
            About:"For those with an adventurous streak, make a beeline for the UAE's desert reaches that stretch across the country's southern interior. There are plenty of adventure activities on offer, from 4WD trips across the desert dunes to camel trekking, sandboarding, and dune buggy trips. Popular desert day trips from Dubai or Abu Dhabi usually include dinner at a desert camp after a 4WD journey into the dunes, and offer time at camp for other activities such as sandboarding or short camel rides. Other desert tours allow more scope for wildlife spotting and specialized desert operators also offer overnight camping amid the dunes. The desert interiors of the emirates of Dubai, Abu Dhabi, and Ras Al-Khaimah are also home to a number of luxury desert resorts, where stays are all about soaking up the dune scenery and heading out on desert activities."
        },

        {
            Id:"37",
            Category:"covid",
            Name:"Omicron on track to infect more than half of Europe, WHO says",
            Date:"22 dec 2021",
            Img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220111-covid-greece-mb-1446-ca4700.jpg",
            About:"The omicron variant of Covid-19 is on track to infect more than half of Europeans, but it should not yet be seen as a flu-like endemic illness, the World Health Organization (WHO) said on Tuesday.Europe saw more than 7 million newly-reported cases in the first week of 2022, more than doubling over a two-week period, WHO's Europe director Hans Kluge told a news briefing.“At this rate, the Institute for Health Metrics and Evaluation forecasts that more than 50 percent of the population in the region will be infected with omicron in the next 6-8 weeks,” Kluge said, referring to a research centre at the University of Washington. On Monday, Spain's Prime Minister Pedro Sanchez said it may be time to change how it tracks Covid-19's evolution to instead use a method similar to flu, because its lethality has fallen. That would imply treating the virus as an endemic illness, rather than a pandemic, without recording every case and without testing all people presenting symptoms."
        },

        {
            Id:"38",
            Category:"world",
            Name:"Russian-led troops to start leaving Kazakhstan in two days: President",
            Date:"05 jan 2022",
            Img:"https://images.indianexpress.com/2022/01/Kazakhstan-Reuters-1.jpg",
            About:"A Russian-led military bloc will begin withdrawing its troops from Kazakhstan in two days after fulfilling its main mission of stabilising the Central Asian country after serious unrest, Kazakh President Kassym-Jomart Tokayev said on Tuesday. Tokayev told parliament he was appointing a long-serving career public servant Alikhan Smailov as prime minister and spoke of initiatives to narrow the wealth gap, raise taxes on the mining sector, and eliminate irregularities in state procurement. Tokayev, 68, last week asked the Moscow-led Collective Security Treaty Organisation (CSTO) to send in troops at the peak of what he later said was an attempted coup d'etat whose unnamed instigators had plunged half of the oil-rich nation's territory into violence. A day earlier, he said that the CSTO mission, whose legitimacy and duration were queried by Washington prompting an angry response from Moscow, numbered 2,030 troops and 250 pieces of military hardware.”The main mission of the CSTO peacekeeping forces has been successfully completed,” Tokayev told parliament in a video conference call. “In two days' time, a phased withdrawal of the CSTO united peacekeeping contingent will begin. The withdrawal process of the contingent will take no more than 10 days.” Russian President Vladimir Putin on Monday said the deployment had been crucial, claiming victory in defending Kazakhstan from what he described as a foreign-backed terrorist uprising. Also read |Kazakhstan roiled by violent unrest: Here's everything you need to know Kazakh authorities say order has been largely restored in the nation of 19 million and that almost 10,000 people have been detained over the unrest with a hunt for others ongoing. The authorities say that initially peaceful protests against car fuel price increases were hijacked by groups aiming to overthrow the government. Some Central Asia analysts have suggested that intra-clan infighting among the country's wealthy elite may have played a major role in what was the deadliest violence in the ex-Soviet republic's 30 years of independence from Moscow."
        },

    ])
    return (
        <CatContext.Provider value={ [data,setData] }> 
               {props.children}
        </CatContext.Provider>


         
      )
  }