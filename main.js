// 1. Red Hot Chilli Peppers
const rhcpData =
{
    id: "red-hot-chilli-peppers",
    title: "Red Hot Chilli Peppers",
    score: 98,
    image: "./images/background/rhcpLogo.png",
    description: "Red Hot Chili Peppers is an American rock band formed in Los Angeles in 1983. Known for blending funk, alternative rock, punk, and psychedelic elements, the band developed a highly distinctive sound driven by Flea’s slap bass, John Frusciante’s expressive guitar work, and Anthony Kiedis’ rhythmic vocal delivery. Over the decades, they evolved from an underground funk-punk act into one of the most successful and influential alternative rock bands in history.",
    review: "Red Hot Chili Peppers thrive on contrast: raw funk energy meets melodic introspection. Their best work balances groove, emotion, and experimentation without sounding forced. Flea’s bass lines are iconic, Frusciante’s guitar playing adds soul and atmosphere, and the band’s chemistry feels organic rather than calculated. Few bands have reinvented themselves so many times while remaining instantly recognizable. At their peak, RHCP feel both deeply personal and universally relatable.",
    genres: ["Funk Rock", "Alternative Rock", "Rap Rock", "Funk Metal", "Active: 1983 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesp8x0Poe1bDrtvf01l2ZEH",
    favouriteSongs: {
        "Can't Stop": [98, 2002, "https://www.youtube.com/watch?v=8DyziWtkfBw"],
        "Californication": [97, 1999, "https://www.youtube.com/watch?v=YlUKcNNmywk"],
        "Parallel Universe": [97, 1999, "https://www.youtube.com/watch?v=VIfxDoQDaFE"],
        "Stadium Arcadium": [96, 2006, "https://www.youtube.com/watch?v=j9qfClVvfIw"],
        "Go Robot": [96, 2016, "https://www.youtube.com/watch?v=HI-8CVixZ5o"],
        "Dosed": [95, 2002, "https://www.youtube.com/watch?v=WeMXdaId60U"],
        "Dark Necessities": [95, 2016, "https://www.youtube.com/watch?v=Q0oIoR9mLwc"],
        "The Adventures of Rain Dance Maggie": [94, 2011, "https://www.youtube.com/watch?v=RtBbinpK5XI"],
        "Otherside": [94, 1999, "https://www.youtube.com/watch?v=rn_YodiJO6k"],
        "Snow (Hey Oh)": [93, 2006, "https://www.youtube.com/watch?v=yuFI5KSPAt4"],
        "The Heavy Wing": [93, 2022, "https://www.youtube.com/watch?v=VzRYRi2cb4g"],
        "Here Ever After": [93, 2022, "https://www.youtube.com/watch?v=mjFG4U2dSUE"],
        "Scar Tissue": [92, 1999, "https://www.youtube.com/watch?v=mzJj5-lubeM"],
        "Dani California": [92, 2006, "https://www.youtube.com/watch?v=Sb5aq5HcS1A"],
        "Road Trippin'": [92, 1999, "https://www.youtube.com/watch?v=11GYvfYjyV0"],
        "By The Way": [92, 2002, "https://www.youtube.com/watch?v=JnfyjwChuNU"],
        "Under The Bridge": [92, 1992, "https://www.youtube.com/watch?v=GLvohMXgcBo"],
        "Black Summer": [91, 2022, "https://www.youtube.com/watch?v=OS8taasZl8k"],
        "Sick Love": [91, 2016, "https://www.youtube.com/watch?v=I2XfVml6o24"],
        "The Zephyr Song": [90, 2002, "https://www.youtube.com/watch?v=0fcRa5Z6LmU"],
        "Not The One": [90, 2022, "https://www.youtube.com/watch?v=5EuWBWxHs18"],
        "Veronica": [90, 2022, "https://www.youtube.com/watch?v=t1TG63eDcfY"],
        "Tangelo": [90, 2022, "https://www.youtube.com/watch?v=ZL1pd0ebh_E"],
        "Give It Away": [90, 1991, "https://www.youtube.com/watch?v=Mr_uHJPUlO8"],
        "She's A Lover": [89, 2022, "https://www.youtube.com/watch?v=E5HLF92vf9U"],
        "Venice Queen": [89, 2002, "https://www.youtube.com/watch?v=3s86rJvMIS0"],
        "Don't Forget Me": [88, 2002, "https://www.youtube.com/watch?v=SnQ0E-UVt1g"],
        "Eddie": [88, 2022, "https://www.youtube.com/watch?v=pXMEXCT5ohY"],
        "Around The World": [88, 1999, "https://www.youtube.com/watch?v=a9eNQZbjpJk"],
        "It's Only Natural": [87, 2022, "https://www.youtube.com/watch?v=ArYw6-6qKwM"]
    },
    members: [
        { name: "Anthony Kiedis", role: "Lead Vocalist", yearsActive: "1982-present", image: "./images/members/rhcp/Anthony.png" },
        { name: "Flea", role: "Bassist", yearsActive: "1982-present", image: "./images/members/rhcp/Flea.png" },
        { name: "Chad Smith", role: "Drummer", yearsActive: "1988-present", image: "./images/members/rhcp/Chad.png" },
        { name: "John Frusciante", role: "Lead Guitarist", yearsActive: "1988-1992, 1998-2009 and 2019-present", image: "./images/members/rhcp/John.png" },
        { name: "Josh Klinghoffer", role: "Lead Guitarist", yearsActive: "2009-2019", image: "./images/members/rhcp/Josh.png" }
    ],
    albums: [
        { name: "Blood Sugar Sex Magik", description: "A breakthrough album blending funk rock and introspection, featuring Under the Bridge and Give It Away.", year: 1991, image: "./images/albums/rhcp/BloodSugarSexMagik.png" },
        { name: "Californication", description: "A melodic album that marked a major comeback and commercial peak for the band.", year: 1999, image: "./images/albums/rhcp/Californication.png" },
        { name: "By the Way", description: "A melodic and harmony-driven album with emotional songwriting and layered arrangements.", year: 2002, image: "./images/albums/rhcp/ByTheWay.png" },
        { name: "Stadium Arcadium", description: "A double album showcasing the band’s full range, from funk rock energy to expansive melodic pieces.", year: 2006, image: "./images/albums/rhcp/StadiumArcadium.png" },
        { name: "I'm with You", description: "An album introducing the new guitarist era with modern textures and rhythms.", year: 2011, image: "./images/albums/rhcp/ImWithYou.png" },
        { name: "The Getaway", description: "A polished, atmospheric album emphasizing bass grooves and electronic influences.", year: 2016, image: "./images/albums/rhcp/TheGetaway.png" },
        { name: "Unlimited Love", description: "A warm, jam-oriented album marking John Frusciante’s return to the band.", year: 2022, image: "./images/albums/rhcp/UnlimitedLove.png" }
    ]
};




// 2. Linkin Park
const linkinParkData =
{
    id: "linkin-park",
    title: "Linkin Park",
    score: 98,
    image: "./images/background/linkinParkLogo.png",
    description: "Linkin Park is an American rock band formed in Agoura Hills, California in 1996. Their initial name was Xero, but they were renamed to Linkin Park, after Chester Bennington joined the band. Rising to global prominence in the early 2000s, they became one of the defining bands of the nu metal and alternative rock era by fusing heavy guitars, hip-hop influences and emotionally raw lyrics. Their music often explores themes of inner conflict, mental health, alienation and resilience, resonating deeply with a generation of listeners.",
    review: "Linkin Park’s strength lies in emotional precision. They translate vulnerability, anger and introspection into songs that feel really cathartic. Chester Bennington’s ability to move between fragility and explosive power remains unmatched, while Mike Shinoda’s balance of rap, melody and production has signified the band’s evolution. Linkin Park always reinvent their sound and have shaped their legacy as one of the most iconic bands regarding emotional impact.",
    genres: ["Nu Metal", "Alternative Rock", "Electronic Rock", "Active: 1996 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesC9IFH-X8U8HYc4MOSLRQ_",
    favouriteSongs: {
        "Faint": [99, 2003, "https://www.youtube.com/watch?v=LYU-8IFcDPw"],
        "What I've done": [98, 2007, "https://www.youtube.com/watch?v=8sgycukafqQ"],
        "Numb": [97, 2003, "https://www.youtube.com/watch?v=kXYiU_JCYtU"],
        "In The End": [97, 2000, "https://www.youtube.com/watch?v=eVTXPUF4Oz4"],
        "Somewhere I Belong": [96, 2003, "https://www.youtube.com/watch?v=zsCD5XCu6CM"],
        "New Divide": [95, 2009, "https://www.youtube.com/watch?v=ysSxxIqKNN0"],
        "Castle Of Glass": [94, 2013, "https://www.youtube.com/watch?v=ScNNfyq3d_w"],
        "One More Light": [93, 2017, "https://www.youtube.com/watch?v=Tm8LGxTLtQk"],
        "Lost In The Echo": [93, 2012, "https://www.youtube.com/watch?v=co4YpHTqmfQ"],
        "High Voltage": [93, 1999, "https://www.youtube.com/watch?v=nANdZ2ah9yI"],
        "A Place For My Head": [93, 2000, "https://www.youtube.com/watch?v=NlHnq7illkA"],
        "Pushing Me Away": [92, 2000, "https://www.youtube.com/watch?v=Ve1LNJEIKUE"],
        "Points Of Authority": [92, 2000, "https://www.youtube.com/watch?v=jZSPAp8kCl4"],
        "Leave Out All The Rest": [92, 2007, "https://www.youtube.com/watch?v=yZIummTz9mM"],
        "Crawling": [92, 2000, "https://www.youtube.com/watch?v=Gd9OhYroLN0"],
        "Lying From You": [92, 2004, "https://www.youtube.com/watch?v=NjdgcHdzvac"],
        "Burn It Down": [92, 2012, "https://www.youtube.com/watch?v=dxytyRy-O1k"],
        "Given Up": [91, 2007, "https://www.youtube.com/watch?v=0xyxtzD54rM"],
        "Final Masquerade": [90, 2014, "https://www.youtube.com/watch?v=i8q8fFs3kTM"],
        "One Step Closer": [90, 2000, "https://www.youtube.com/watch?v=4qlCC1GOwFw"],
        "Breaking The Habit": [90, 2004, "https://www.youtube.com/watch?v=v2H4l9RpkwM"],
        "Bleed It Out": [90, 2007, "https://www.youtube.com/watch?v=OnuuYcqhzCE"],
        "Runaway":[90, 2000, "https://www.youtube.com/watch?v=ig-fyQqf510"],
        "Heavy Is The Crown": [90, 2024,"https://www.youtube.com/watch?v=ZAt8oxY0GQo"],
        "Papercut": [90, 2000, "https://www.youtube.com/watch?v=vjVkXlxsO8Q"]
    },
    members: [
        { name: "Chester Bennington", role: "Lead Vocalist", yearsActive: "1999-2017", image: "./images/members/linkinPark/Chester.png" },
        { name: "Mike Shinoda", role: "Secondary Vocalist | Keyboardist", yearsActive: "1996-present", image: "./images/members/linkinPark/Mike.png" },
        { name: "Brad Delson", role: "Lead Guitarist | Backing Vocalist", yearsActive: "1996-present", image: "./images/members/linkinPark/Brad.png" },
        { name: "Dave Farrell", role: "Bassist", yearsActive: "1996-present", image: "./images/members/linkinPark/Dave.png" },
        { name: "Joe Hahn", role: "DJ | Turntablist", yearsActive: "1996-present", image: "./images/members/linkinPark/Joe.png" },
        { name: "Rob Bourdon", role: "Drummer", yearsActive: "1996-2024", image: "./images/members/linkinPark/Rob.png" },
        { name: "Emily Armstrong", role: "Lead Vocalist", yearsActive: "2024-present", image: "./images/members/linkinPark/Emily.png" },
        { name: "Colin Brittain", role: "Drummer", yearsActive: "2024-present", image: "./images/members/linkinPark/Colin.png" }
    ],
    albums: [
        { name: "Hybrid Theory", description: "A genre-defining debut blending nu metal, rap and electronic elements with deep lyrics.", year: 2000, image: "./images/albums/linkinPark/HybridTheory.png" },
        { name: "Meteora", description: "A refined continuation of their sound, with some of the band’s most iconic tracks.", year: 2003, image: "./images/albums/linkinPark/Meteora.png" },
        { name: "Minutes to Midnight", description: "A shift towards alternative rock with political themes and broader emotional scope.", year: 2007, image: "./images/albums/linkinPark/MinutesToMidnight.png" },
        { name: "A Thousand Suns", description: "An ambitious, experimental concept album focused on war, technology and human fear.", year: 2010, image: "./images/albums/linkinPark/AThousandSuns.png" },
        { name: "Living Things", description: "A balance between electronic experimentation and classic Linkin Park aggression.", year: 2012, image: "./images/albums/linkinPark/LivingThings.png" },
        { name: "The Hunting Party", description: "A guitar-driven album reacting against modern rock’s minimalism.", year: 2014, image: "./images/albums/linkinPark/TheHuntingParty.png" },
        { name: "One More Light", description: "A softer, pop-oriented album emphasizing loss, vulnerability and emotional connection.", year: 2017, image: "./images/albums/linkinPark/OneMoreLight.png" },
        { name: "From Zero", description: "A rebirth-focused album confronting loss and identity, while bridging Linkin Park’s past with a new emotional chapter and members.", year: 2024, image: "./images/albums/linkinPark/FromZero.png"}
    ]
};




// 3. Pink Floyd
const pinkFloydData =
{
    id: "pink-floyd",
    title: "Pink Floyd",
    score: 97,
    image: "./images/background/pinkFloydLogo.png",
    description: "Pink Floyd was a British rock band formed in London in 1965. Widely regarded as pioneers of progressive and psychedelic rock, they became known for their philosophical lyrics, sonic experimentation, extended compositions and elaborate live shows. Their music explores themes such as time, madness, alienation, war and human consciousness - often presented through conceptual albums that pushed the boundaries of popular music.",
    review: "Pink Floyd elevated rock music into an immersive, intellectual and emotional experience. Rather than focusing on traditional song structures, they built sonic worlds that reward deep listening. David Gilmour’s expressive guitar work, Richard Wright’s atmospheric keyboards, Roger Waters’ conceptual vision and Nick Mason’s restrained but effective drumming created a unique sound. Few bands have shaped the idea of the album as an art form like Pink Floyd. Their influence on progressive rock, sound design and modern music culture is immeasurable.",
    genres: ["Progressive Rock", "Psychedelic Rock", "Art Rock", "Experimental Rock", "Ambient", "Active: 1965 - 2014"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesDu5FBCH4hg3HkCDpaMv6_",
    favouriteSongs: {
        "High Hopes": [98, 1994, "https://www.youtube.com/watch?v=7jMlFXouPk8"],
        "Wish You Were Here": [97, 1975, "https://www.youtube.com/watch?v=IXdNnw99-Ic"],
        "Comfortably Numb": [96, 1979, "https://www.youtube.com/watch?v=_FrOQC-zEog"],
        "Shine On You Crazy Diamond": [95, 1975, "https://www.youtube.com/watch?v=cWGE9Gi0bB0"],
        "Echoes": [95, 1971, "https://www.youtube.com/watch?v=KBca3xf-j3o"],
        "Another Brick In The Wall": [94, 1979, "https://www.youtube.com/watch?v=5IpYOF4Hi6Q"],
        "Hey You": [93, 1979, "https://www.youtube.com/watch?v=TFjmvfRvjTc"],
        "Money": [92, 1973, "https://www.youtube.com/watch?v=cpbbuaIA3Ds"],
        "Time": [91, 1974, "https://www.youtube.com/watch?v=JwYX52BP2Sk"],
        "Sorrow": [91, 1987, "https://www.youtube.com/watch?v=AdKNlGfkyhc"],
        "Us And Them": [91, 1974, "https://www.youtube.com/watch?v=nDbeqj-1XOo"],
        "Breathe": [91, 1973, "https://www.youtube.com/watch?v=mrojrDCI02k"],
        "Welcome To The Machine": [91, 1975, "https://www.youtube.com/watch?v=fn1R-5p_j5c"],
        "Between Two Points (David + Romany Gilmour)": [91, 2024, "https://www.youtube.com/watch?v=o_QTaUuU8F4"]
    },
    members: [
        { name: "David Gilmour", role: "Lead Guitarist | Vocalist", yearsActive: "1967-1995 and 2005-2014", image: "./images/members/pinkFloyd/Gilmour.png" },
        { name: "Roger Waters", role: "Bassist | Vocalist", yearsActive: "1965-1985, 2005 and 2012", image: "./images/members/pinkFloyd/Waters.png" },
        { name: "Richard Wright", role: "Keyboardist | Pianist", yearsActive: "1965-1981 and 1987-1995", image: "./images/members/pinkFloyd/Wright.png" },
        { name: "Nick Mason", role: "Drummer", yearsActive: "1965-1995 and 2005-2014", image: "./images/members/pinkFloyd/Mason.png" },
        { name: "Syd Barrett", role: "Lead Guitarist | Vocalist", yearsActive: "1965-1968", image: "./images/members/pinkFloyd/Barrett.png" }
    ],
    albums: [
        { name: "Piper at the Gates of Dawn", description: "A psychedelic debut driven by Syd Barrett’s unique songwriting and experimental spirit.", year: 1967, image: "./images/albums/pinkFloyd/ThePiper.png" },
        { name: "Atom Heart Mother", description: "An experimental album blending progressive rock with avant-garde composition.", year: 1970, image: "./images/albums/pinkFloyd/AtomHeartMother.png" },
        { name: "Meddle", description: "A transitional album featuring the epic track Echoes, marking the band’s artistic maturation.", year: 1971, image: "./images/albums/pinkFloyd/Meddle.png" },
        { name: "The Dark Side of the Moon", description: "A landmark album exploring time, madness and mortality with innovative production.", year: 1973, image: "./images/albums/pinkFloyd/DarkSide.png" },
        { name: "Wish You Were Here", description: "A tribute to Syd Barrett and a critique of the music industry, filled with emotional depth.", year: 1975, image: "./images/albums/pinkFloyd/WishYouWereHere.png" },
        { name: "Animals", description: "A darker, politically-charged album using allegories to critique society and power.", year: 1977, image: "./images/albums/pinkFloyd/Animals.png" },
        { name: "The Wall", description: "A rock opera about isolation and trauma that blends ambition with commercial success.", year: 1979, image: "./images/albums/pinkFloyd/TheWall.png" },
        { name: "The Division Bell", description: "A later-era album focusing on communication, human relationships and reconciliation.", year: 1994, image: "./images/albums/pinkFloyd/DivisionBell.png" }
    ]
};




// 4. Queen
const queenData =
{
    id: "queen",
    title: "Queen",
    score: 97,
    image: "./images/background/queenLogo.png",
    description: "Queen is a British rock band formed in London in 1970, consisting of Freddie Mercury, Brian May, Roger Taylor and John Deacon. The band became known for its theatrical performances, distinctive sound and genre-blending music that combined hard rock, glam rock, progressive rock and pop. With Mercury’s powerful vocals, May’s signature guitar tone and ambitious songwriting, Queen produced some of the most iconic songs in rock history. Their influence spans multiple generations and their music remains widely recognized across the world.",
    review: "Queen is one of the most versatile and influential rock bands ever. Their ability to shift between heavy rock, operatic arrangements and radio-friendly pop without losing their identity is unmatched. Freddie Mercury’s voice and stage presence were extraordinary, while Brian May’s guitar work gave the band a unique sonic signature. What makes Queen special is not only their technical skill, but also their fearless creativity. Their songs are timeless, emotionally powerful and instantly recognizable. Few bands have achieved such a perfect balance between artistic ambition and mainstream success.",
    genres: ["Glam Rock", "Hard Rock", "Progressive Rock", "Pop Rock", "Active: 1970 - present (with Adam Lambert since 2011)"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTevlf13ESfKHMfGwuRYgJJoM",
    favouriteSongs: {
        "The Show Must Go On": [98, 1991, "https://www.youtube.com/watch?v=t99KH0TR-J4"],
        "Under Pressure": [97, 1981, "https://www.youtube.com/watch?v=a01QQZyl-_I"],
        "I Want It All": [97, 1989, "https://www.youtube.com/watch?v=hFDcoX7s6rE"],
        "Don't Stop Me Now": [95, 1979, "https://www.youtube.com/watch?v=HgzGwKwLmgM"],
        "Bohemian Rhapsody": [95, 1975, "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"],
        "We Will Rock You": [94, 1977, "https://www.youtube.com/watch?v=-tJYN-eG1zk"],
        "Radio Ga Ga": [94, 1984, "https://www.youtube.com/watch?v=azdwsXLmrHE"],
        "We Are The Champions": [93, 1977, "https://www.youtube.com/watch?v=04854XqcfCY"],
        "Living On My Own": [92, 1985, "https://www.youtube.com/watch?v=DedaEVIbTkY"],
        "A Kind Of Magic": [92, 1986, "https://www.youtube.com/watch?v=0p_1QSUsbsM"],
        "Another One Bites The Dust": [91, 1980, "https://www.youtube.com/watch?v=rY0WxgSXdEE"],
        "Who Wants to Live Forever": [90, 1986, "https://www.youtube.com/watch?v=_Jtpf8N5IDE"],
        "Somebody To Love": [90, 1976, "https://www.youtube.com/watch?v=kijpcUv-b8M"],
        "Killer Queen": [90, 1974, "https://www.youtube.com/watch?v=2ZBtPf7FOoM"],
        "Fat Bottomed Girls": [90, 1978, "https://www.youtube.com/watch?v=VMnjF1O4eH0"],
        "Innuendo": [89, 1991, "https://www.youtube.com/watch?v=g2N0TkfrQhY"],
        "Bicycle Race": [85, 1978, "https://www.youtube.com/watch?v=xt0V0_1MS0Q"],
        "Breakthru": [85, 1989, "https://www.youtube.com/watch?v=CEjU9KVABao"]
    },
    members: [
        { name: "Freddie Mercury", role: "Lead Vocalist | Pianist", yearsActive: "1970-1991", image: "./images/members/queen/Freddie.png" },
        { name: "Brian May", role: "Lead Guitarist | Backing Vocalist", yearsActive: "1970-present", image: "./images/members/queen/Brian.png" },
        { name: "John Deacon", role: "Bassist", yearsActive: "1971-1997", image: "./images/members/queen/John.png" },
        { name: "Roger Taylor", role: "Drummer | Backing Vocalist", yearsActive: "1970-present", image: "./images/members/queen/Roger.png" }
    ],
    albums: [
        { name: "Queen", description: "Queen’s debut studio album showcasing a raw blend of heavy metal, progressive rock and folk influences.", year: 1973, image: "./images/albums/queen/Queen.png" },
        { name: "Queen II", description: "A theatrical follow-up album, featuring layered harmonies, fantasy themes and progressive structures.", year: 1974, image: "./images/albums/queen/Queen2.png" },
        { name: "Sheer Heart Attack", description: "A breakthrough album mixing hard rock, glam and pop sensibilities, featuring 'Killer Queen'.", year: 1974, image: "./images/albums/queen/SheerHeartAttack.png" },
        { name: "A Night At The Opera", description: "Queen’s most iconic album, known for its legendary track 'Bohemian Rhapsody'.", year: 1975, image: "./images/albums/queen/ANightAtTheOpera.png" },
        { name: "The Works", description: "A commercially successful album blending hard rock anthems with synth-pop hits.", year: 1984, image: "./images/albums/queen/TheWorks.png" },
        { name: "Innuendo", description: "A powerful late-era album marked by epic compositions and emotional depth - released shortly before Freddie Mercury’s death.", year: 1991, image: "./images/albums/queen/Innuendo.png" },
    ]
};




// 5. Muse
const museData =
{
    id: "muse",
    title: "Muse",
    score: 96,
    image: "./images/background/museLogo.png",
   description: "Muse is a British rock band formed in Teignmouth, England, in 1994. The trio - Matt Bellamy, Chris Wolstenholme and Dominic Howard - became known for their explosive live performances, dramatic sound as well as the fusion of alternative rock with electronic, classical and progressive elements. Muse’s music often blends heavy guitar riffs, orchestral arrangements and synthesizers, while lyrically exploring themes such as dystopia, technology, control, resistance and human emotion.",
    review: "Muse stands out as one of the most ambitious and theatrical rock bands of the modern era. Their ability to merge raw rock energy with cinematic arrangements is rare, while Matt Bellamy’s falsetto vocals and virtuosic guitar playing gives the band an instantly recognizable identity. Despite the fact that some albums lean heavily into electronic or pop influences, Muse never loses their sense of scale or intensity. Their music feels designed for arenas, making them one of the most consistent and impactful live acts of the last decades.",
    genres: ["Alternative Rock", "Progressive Rock", "Electronic Rock", "Space Rock", "Active: 1994 - present", "Seen Live: 29/06/2022 at Ejekt Festival, Athens"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTetD69d7zgRVqXzGXLTvcYRY",
    favouriteSongs: {
        "Hysteria": [99, 2003, "https://www.youtube.com/watch?v=3dm_5qWWDV8"],   
        "Starlight": [96, 2006, "https://www.youtube.com/watch?v=Pgum6OT_VH8"],
        "Time Is Running Out": [96, 2003, "https://www.youtube.com/watch?v=O2IuJPh6h_A"],
        "Resistance": [95, 2009, "https://www.youtube.com/watch?v=TPE9uSFFxrI"],
        "Uprising": [94, 2009, "https://www.youtube.com/watch?v=w8KQmps-Sog"],
        "Get Up And Fight": [94, 2018, "https://www.youtube.com/watch?v=7hZFkWvUnuc"],
        "Feeling Good": [93, 2001, "https://www.youtube.com/watch?v=CmwRQqJsegw"],
        "You Make Me Feel Like It's Halloween": [93, 2022, "https://www.youtube.com/watch?v=oyu1WO0hRB0"],
        "Bliss": [93, 2001, "https://www.youtube.com/watch?v=eMqsWc8muj8"],
        "Won't Stand Down": [93, 2022, "https://www.youtube.com/watch?v=d55ELY17CFM"],
        "Undisclosed Desires": [92, 2009, "https://www.youtube.com/watch?v=R8OOWcsFj0U"],
        "Will Of The People": [91, 2022, "https://www.youtube.com/watch?v=MClg7zpm6VQ"],
        "Compliance": [91, 2022, "https://www.youtube.com/watch?v=QP3zRBtgvJo"],
        "Pressure": [91, 2018, "https://www.youtube.com/watch?v=h2eKImKZviw"],
        "Supermassive Black Hole": [91, 2006, "https://www.youtube.com/watch?v=OgvLej8ln2w"],
        "Madness": [91, 2012, "https://www.youtube.com/watch?v=Ek0SgwWmF9w"],
        "Sing For Absolution": [91, 2004, "https://www.youtube.com/watch?v=6Ck6Hcg2cjk"],
        "Algorithm": [90, 2018, "https://www.youtube.com/watch?v=X8f5RgwY8CI"],
        "Knights of Cydonia": [90, 2006, "https://www.youtube.com/watch?v=G_sBOsh-vyI"],
        "Thought Contagion": [90, 2018, "https://www.youtube.com/watch?v=QQ_3S-IQm38"],
        "The 2nd Law: Isolated System": [90, 2012, "https://www.youtube.com/watch?v=VXPoJAyeF8k"],
        "Reapers": [89, 2016, "https://www.youtube.com/watch?v=gcNEC9NaJuE"],
        "Stockholm Syndrome": [89, 2003, "https://www.youtube.com/watch?v=gXN9acC9edU"],
        "Euphoria": [89, 2022, "https://www.youtube.com/watch?v=zHNWEfES6XI"],
        "Plug In Baby": [88, 2001, "https://www.youtube.com/watch?v=dbB-mICjkQM"],
        "Exogenesis Symphony": [88, 2010, "https://www.youtube.com/watch?v=YEH98_Ha2aA"]
    },
    members: [
        { name: "Matt Bellamy", role: "Lead Vocalist | Lead Guitarist | Pianist", yearsActive: "1994-present", image: "./images/members/muse/Matt.png" },
        { name: "Chris Wolstenholme", role: "Bassist | Backing Vocalist | Synths", yearsActive: "1994-present", image: "./images/members/muse/Chris.png" },
        { name: "Dominic Howard", role: "Drummer | Percussionist", yearsActive: "1994-present", image: "./images/members/muse/Dominic.png" }
    ],
    albums: [
        { name: "Showbiz", description: "Muse’s debut album, rooted in alternative rock with emotional intensity and raw energy.", year: 1999, image: "./images/albums/muse/Showbiz.png" },
        { name: "Origin of Symmetry", description: "A breakthrough album featuring heavy riffs, falsetto vocals and progressive influences.", year: 2001, image: "./images/albums/muse/OriginOfSymmetry.png" },
        { name: "Absolution", description: "A darker and more mature album exploring themes of fear, apocalypse and isolation.", year: 2003, image: "./images/albums/muse/Absolution.png" },
        { name: "Black Holes and Revelations", description: "An expansive album blending rock with electronic, funk and global influences.", year: 2006, image: "./images/albums/muse/BlackHoles.png" },
        { name: "The Resistance", description: "A grand, orchestral album inspired by dystopian themes and classical composition.", year: 2009, image: "./images/albums/muse/TheResistance.png" },
        { name: "The 2nd Law", description: "An experimental album mixing rock, electronic, dubstep and symphonic elements.", year: 2012, image: "./images/albums/muse/The2ndLaw.png" },
        { name: "Drones", description: "A conceptual album with aggressive riffs about dehumanization, control and politics.", year: 2015, image: "./images/albums/muse/Drones.png" },
        { name: "Simulation Theory", description: "A synth-heavy, retro-futuristic album inspired by virtual reality and digital control.", year: 2018, image: "./images/albums/muse/SimulationTheory.png" },
        { name: "Will of the People", description: "A genre-hopping album reflecting rebellion, societal tension and modern unrest.", year: 2022, image: "./images/albums/muse/WOTP.png" }
    ]
};




// 6. Rammstein
const rammsteinData =
{
    id: "rammstein",
    title: "Rammstein",
    score: 96,
    image: "./images/background/rammsteinLogo.png",
    description: "Rammstein is a German industrial metal band formed in Berlin in 1994. Known for their heavy, mechanical sound and provocative imagery, the band blends metal with electronic elements, dark humor and theatrical shock value. Their lyrics - primarily in German - often explore controversial themes such as power, identity, violence, love and societal taboos. Rammstein’s disciplined riffs and pounding rhythms have made them one of the most recognizable non-English-speaking bands in the world.",
    review: "Rammstein is a band that thrives on intensity, discipline and confrontation. Their music is brutally precise, combining crushing guitar riffs with industrial beats and Till Lindemann’s commanding vocal delivery. What truly makes them unique is their uncompromising artistic vision: they never hide their identity to appeal to trends. Their live performances are legendary, turning concerts into controlled chaos filled with fire, dark theatrics and multiple symbolisms. Rammstein is not just a band - it is an experience that challenges, provokes and leaves a lasting impression.",
    genres: ["Industrial Metal", "Neue Deutsche Härte", "Alternative Metal", "Active: 1994 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesXu62pjUIxIPYR4qKxMGO6",
    favouriteSongs: {
        "Deutschland": [98, 2019, "https://www.youtube.com/watch?v=NeQM1c-XCDc"],
        "Du Hast": [97, 1997, "https://www.youtube.com/watch?v=W3q8Od5qJio"],
        "Rosenrot": [96, 2005, "https://www.youtube.com/watch?v=af59U2BRRAU"],
        "Sonne": [96, 2001, "https://www.youtube.com/watch?v=StZcUAPRRac"],
        "Donaukinder": [96, 2009, "https://www.youtube.com/watch?v=DGclueDSWD4"],
        "Du Riechst So Gut": [96, 1995, "https://www.youtube.com/watch?v=rrmsJhf89MY"],
        "Ich Will": [95, 2001, "https://www.youtube.com/watch?v=EOnSh3QlpbQ"],
        "Radio": [94, 2019, "https://www.youtube.com/watch?v=z0NfI2NeDHI"],
        "Mein Land": [93, 2011, "https://www.youtube.com/watch?v=6iaxDxHUWP8"],
        "Ohne Dich": [93, 2004, "https://www.youtube.com/watch?v=LIPc1cfS-oQ"],
        "Adieu": [93, 2022, "https://www.youtube.com/watch?v=skl6N3zGv-s"],
        "Moskau": [93, 2004, "https://www.youtube.com/watch?v=H9qtQO5d8ko"],
        "Keine Lust": [92, 2004, "https://www.youtube.com/watch?v=1M4ADcMn3dA"],
        "Links 2 3 4": [92, 2001, "https://www.youtube.com/watch?v=Ph-CA_tu5KA"],
        "Mein Herz Brennt": [92, 2012, "https://www.youtube.com/watch?v=WXv31OmnKqQ"],
        "Engel": [92, 1997, "https://www.youtube.com/watch?v=x2rQzv8OWEY"],        
        "Ich Tu Dir Weh": [90, 2009, "https://www.youtube.com/watch?v=IxuEtL7gxoM"],
        "Reise, Reise": [90, 2004, "https://www.youtube.com/watch?v=w6-6XHnmFtI"],
        "Haifisch": [90, 2010, "https://www.youtube.com/watch?v=GukNjYQZW8s"],
        "Mutter": [88, 2001, "https://www.youtube.com/watch?v=gNdnVVHfseA"],
        "Amerika": [88, 2004, "https://www.youtube.com/watch?v=Rr8ljRgcJNM"],
        "Mein Teil": [86, 2004, "https://www.youtube.com/watch?v=PBvwcH4XX6U"],
        "Auslander": [85, 2019, "https://www.youtube.com/watch?v=pat2c33sbog"]
    },
    members: [
        { name: "Till Lindemann", role: "Lead Vocalist", yearsActive: "1994-present", image: "./images/members/rammstein/Till.png" },
        { name: "Richard Kruspe", role: "Lead Guitarist | Backing Vocalist", yearsActive: "1994-present", image: "./images/members/rammstein/Richard.png" },
        { name: "Paul Landers", role: "Rhythm Guitarist", yearsActive: "1994-present", image: "./images/members/rammstein/Paul.png" },
        { name: "Oliver Riedel", role: "Bassist", yearsActive: "1994-present", image: "./images/members/rammstein/Oliver.png" },
        { name: "Christoph Schneider", role: "Drummer", yearsActive: "1994-present", image: "./images/members/rammstein/Christoph.png" },
        { name: "Christian 'Flake' Lorenz", role: "Keyboardist | Synths", yearsActive: "1994-present", image: "./images/members/rammstein/Flake.png" }
    ],
    albums: [
        { name: "Herzeleid", description: "Rammstein’s debut album introducing their raw industrial metal sound and provocative themes.", year: 1995, image: "./images/albums/rammstein/Herzeleid.png" },
        { name: "Sehnsucht", description: "A breakthrough album with heavier and darker tones that made Rammstein globally famous.", year: 1997, image: "./images/albums/rammstein/Sehnsucht.png" },
        { name: "Mutter", description: "A defining album combining brutal riffs with emotional depth and polished production.", year: 2001, image: "./images/albums/rammstein/Mutter.png" },
        { name: "Reise, Reise", description: "An expansive and melodic album exploring travel, death and human desire.", year: 2004, image: "./images/albums/rammstein/ReiseReise.png" },
        { name: "Rosenrot", description: "A more atmospheric album continuing the dark themes introduced in Reise, Reise.", year: 2005, image: "./images/albums/rammstein/Rosenrot.png" },
        { name: "Liebe ist für alle da", description: "A controversial and aggressive album marked by explicit lyrics and heavy industrial sound.", year: 2009, image: "./images/albums/rammstein/LiebeIst.png" },
        { name: "Rammstein", description: "A powerful self-titled comeback album reflecting history, identity and national themes.", year: 2019, image: "./images/albums/rammstein/Rammstein.png" },
        { name: "Zeit", description: "A somber and reflective album dealing with time, mortality and existential themes.", year: 2022, image: "./images/albums/rammstein/Zeit.png" }
    ]
};




// 7. System Of A Down
const systemOfADownData =
{
    id: "system-of-a-down",
    title: "System Of A Down",
    score: 95,
    image: "./images/background/systemOfADownLogo.png",
    description: "System Of A Down is an American-Armenian rock band formed in 1994 in Los Angeles. They are known for their politically charged lyrics, aggressive yet melodic sound and dynamic performances. The band blends alternative metal and hard rock with several experimental influences. Their music often explores social issues, war and human rights, making them one of the most distinctive voices in modern rock and metal world.",
    review: "System Of A Down stands out for their unique ability to merge heavy riffs, melodic hooks and thought-provoking lyrics. Their albums consistently explore intense themes with a mix of humor, irony and raw emotion. Tracks like 'Chop Suey!' and 'Toxicity' demonstrate their technical skill and willingness to push genre boundaries. The band's energy, creativity and socio-political awareness make them influential both musically and culturally.",
    genres: ["Alternative Metal", "Nu Metal", "Progressive Metal", "Heavy Metal", "Active: 1994 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTetcM9JOfW6D2XL_TqW_kKWo",
    favouriteSongs: {
        "Chop Suey!": [98, 2001, "https://www.youtube.com/watch?v=CSvFpBOe8eY"],
        "Protect The Land": [96, 2020, "https://www.youtube.com/watch?v=XqmknZNg1yw"],
        "Aerials": [96, 2001, "https://www.youtube.com/watch?v=L-iepu3EtyE"],
        "Toxicity": [95, 2001, "https://www.youtube.com/watch?v=iywaBOMvYLI"],
        "B.Y.O.B": [95, 2005, "https://www.youtube.com/watch?v=zUzd9KyIDrM"],
        "Lost In Hollywood": [93, 2005, "https://www.youtube.com/watch?v=mna8mZP9eSg"],
        "Lonely Day": [92, 2005, "https://www.youtube.com/watch?v=DnGdoEa1tPg"],
        "Holy Mountains": [91, 2005, "https://www.youtube.com/watch?v=33BC07zfuFA"],
        "Hypnotize": [90, 2005, "https://www.youtube.com/watch?v=LoheCz4t2xc"],
        "Spiders": [88, 1999, "https://www.youtube.com/watch?v=SqZNMvIEHhs"]
    },
    members: [
        { name: "Serj Tankian", role: "Lead Vocalist | Keyboardist", yearsActive: "1994-2006 and 2010-present", image: "./images/members/systemOfADown/Serj.png" },
        { name: "Daron Malakian", role: "Guitarist | Backing Vocalist", yearsActive: "1994-2006 and 2010-present", image: "./images/members/systemOfADown/Daron.png" },
        { name: "Shavo Odadjian", role: "Bassist", yearsActive: "1994-2006 and 2010-present", image: "./images/members/systemOfADown/Shavo.png" },
        { name: "John Dolmayan", role: "Drummer", yearsActive: "1997-2006 and 2010-present", image: "./images/members/systemOfADown/John.png" }
    ],
    albums: [
        { name: "System Of A Down", description: "Debut album with politically charged lyrics and alternative metal sound.", year: 1998, image: "./images/albums/systemOfADown/SystemOfADown.png" },
        { name: "Toxicity", description: "Breakthrough album blending aggressive riffs with melodic elements and social commentary.", year: 2001, image: "./images/albums/systemOfADown/Toxicity.png" },
        { name: "Steal This Album!", description: "Collection of unreleased tracks showcasing the band’s experimentation and humor.", year: 2002, image: "./images/albums/systemOfADown/StealThisAlbum.png" },
        { name: "Mezmerize", description: "First part of a two-album set exploring political themes and personal reflection.", year: 2005, image: "./images/albums/systemOfADown/Mezmerize.png" },
        { name: "Hypnotize", description: "Second album in 2005's double release that continues the social critique in various styles.", year: 2005, image: "./images/albums/systemOfADown/Hypnotize.png" }
    ]
};




// 8. Metallica
const metallicaData =
{
    id: "metallica",
    title: "Metallica",
    score: 95,
    image: "./images/background/metallicaLogo.png",
    description: "Metallica is an American heavy metal band formed in 1981 in Los Angeles. They are considered one of the most influential metal bands of all time, pioneers of thrash metal alongside the 'Big Four' - the other three bands are Megadeth, Slayer and Anthrax. Their sound evolved from fast, aggressive riffs to more melodic and experimental compositions, while maintaining a powerful and unmistakable identity.",
    review: "Metallica’s career is marked by constant evolution and massive cultural impact. From the raw aggression of their early thrash era to the refined songwriting of their mainstream success, the band has consistently pushed metal into new territories. Albums like 'Master of Puppets' and 'Metallica (The Black Album)' are regarded as genre-defining, while later works show a willingness to experiment without losing intensity.",
    genres: ["Heavy Metal", "Thrash Metal", "Speed Metal", "Hard Rock", "Active: 1981 - present", "Seen Live: 09/05/2026 at Athens"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesUqZHWE9uCtcG01zHz6EJg",
    favouriteSongs: {
        "The Day That Never Comes": [98, 2008, "https://www.youtube.com/watch?v=dkNfNR1WYMY"],
        "Enter Sandman": [97, 1991, "https://www.youtube.com/watch?v=CD-E-LDc384"],
        "Fade To Black": [96, 1984, "https://www.youtube.com/watch?v=WEQnzs8wl6E"],
        "The Unforgiven II": [95, 1998, "https://www.youtube.com/watch?v=5bt7kAVxKfs"],
        "Master Of Puppets": [94, 1986, "https://www.youtube.com/watch?v=xnKhsTXoKCI"],
        "The Unforgiven I": [94, 1991, "https://www.youtube.com/watch?v=Axw30njaMlY"],
        "Wherever I May Roam": [94, 1991, "https://www.youtube.com/watch?v=S5TnPjOd_To"],
        "One": [93, 1989, "https://www.youtube.com/watch?v=WM8bTdBs-cw"],
        "Nothing Else Matters": [93, 1991, "https://www.youtube.com/watch?v=tAGnKpE4NCI"],
        "The Unforgiven III": [92, 2008, "https://www.youtube.com/watch?v=J3m6et00DfQ"],
        "For Whom The Bell Tolls": [91, 1984, "https://www.youtube.com/watch?v=B_HSa1dEL9s"],
        "Sad But True": [89, 1993, "https://www.youtube.com/watch?v=A8MO7fkZc5o"],
        "Seek And Destroy": [88, 1983, "https://www.youtube.com/watch?v=FLTchCiC0T0"],
        "Blackened": [87, 1988, "https://www.youtube.com/watch?v=8G4xF_VGhEw"],
        "The Four Horsemen": [85, 1983, "https://www.youtube.com/watch?v=-zKOhVSERS8"],
    },
    members: [
        { name: "James Hetfield", role: "Lead Vocalist | Rhythm Guitarist", yearsActive: "1981-present", image: "./images/members/metallica/James.png" },
        { name: "Lars Ulrich", role: "Drummer", yearsActive: "1981-present", image: "./images/members/metallica/Lars.png" },
        { name: "Kirk Hammett", role: "Lead Guitarist", yearsActive: "1983-present", image: "./images/members/metallica/Kirk.png" },
        { name: "Robert Trujillo", role: "Bassist", yearsActive: "2003-present", image: "./images/members/metallica/Robert.png" },
        { name: "Cliff Burton", role: "Bassist", yearsActive: "1982-1986", image: "./images/members/metallica/Cliff.png" },
        { name: "Jason Newsted", role: "Bassist", yearsActive: "1986-2001", image: "./images/members/metallica/Jason.png" }
    ],
    albums: [
        { name: "Kill 'Em All", description: "A raw and aggressive debut album that helped define the thrash metal genre.", year: 1983, image: "./images/albums/metallica/KillEmAll.png" },
        { name: "Ride the Lightning", description: "Expanded songwriting with darker themes and more complex compositions.", year: 1984, image: "./images/albums/metallica/RideTheLightning.png" },
        { name: "Master of Puppets", description: "A genre-defining masterpiece, blending technical precision with emotional depth.", year: 1986, image: "./images/albums/metallica/MasterOfPuppets.png" },
        { name: "...And Justice for All", description: "A complex and politically charged album known for its progressive structures.", year: 1988, image: "./images/albums/metallica/AndJusticeForAll.png" },
        { name: "Metallica (The Black Album)", description: "An iconic album that marked a shift towards a more accessible and polished sound.", year: 1991, image: "./images/albums/metallica/MetallicaBlackAlbum.png" },
        { name: "Load", description: "A stylistic departure exploring hard rock and alternative influences.", year: 1996, image: "./images/albums/metallica/Load.png" },
        { name: "Reload", description: "Continuation of the experimental direction introduced in 'Load'.", year: 1997, image: "./images/albums/metallica/Reload.png" },
        { name: "Death Magnetic", description: "A return to a heavier, more aggressive sound inspired by early thrash roots.", year: 2008, image: "./images/albums/metallica/DeathMagnetic.png" }
    ]
};




// 9. Depeche Mode
const depecheModeData =
{
    id: "depeche-mode",
    title: "Depeche Mode",
    score: 94,
    image: "./images/background/depecheModeLogo.png",
    description: "Depeche Mode is an English electronic band formed in 1980 in Basildon. They are one of the most influential acts in electronic and alternative music, known for blending synthesizer-driven soundscapes with dark, emotional and often provocative themes. Over the decades, the band evolved from synth-pop origins into deeper, more industrial and atmospheric territory.",
    review: "Depeche Mode’s longevity comes from their ability to reinvent themselves while preserving a strong emotional core. Albums like 'Violator' and 'Songs of Faith and Devotion' pushed electronic music into darker and more mature spaces, influencing countless artists. Their music balances introspection, social critique and sensuality, making them a defining force in modern alternative music.",
    genres: ["Synth-Pop", "Electronic Rock", "Alternative Rock", "Active: 1980 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTet65rDC0l9NvGQj8gIeXjHf",
    favouriteSongs: {
        "Wrong": [97, 2009, "https://www.youtube.com/watch?v=fhnrrLxQEVQ"],
        "Useless": [96, 1997, "https://www.youtube.com/watch?v=U2Kyu4XURaE"],
        "Policy Of Truth": [95, 1990, "https://www.youtube.com/watch?v=M2VBmHOYpV8"],
        "Strangelove": [95, 1987, "https://www.youtube.com/watch?v=JIrm0dHbCDU"],
        "Never Let Me Down Again": [94, 1987, "https://www.youtube.com/watch?v=snILjFUkk_A"],
        "Personal Jesus": [94, 1989, "https://www.youtube.com/watch?v=u1xrNaTO1bI"],    
        "A Question Of Time": [94, 1986, "https://www.youtube.com/watch?v=9pt7EWFF_T8"],
        "Where's The Revolution": [94, 2017, "https://www.youtube.com/watch?v=jsCR05oKROA"],
        "Enjoy The Silence": [93, 1990, "https://www.youtube.com/watch?v=aGSKrC7dGcY"],
        "Precious": [93, 2005, "https://www.youtube.com/watch?v=8yn3ViE6mhY"],
        "Just Can't Get Enough": [92, 1981, "https://www.youtube.com/watch?v=_6FBfAQ-NDE"],
        "Everything Counts": [92, 1983, "https://www.youtube.com/watch?v=1t-gK-9EIq4"],
        "Walking In My Shoes": [92, 1993, "https://www.youtube.com/watch?v=GrC_yuzO-Ss"],
        "It's No Good": [91, 1997, "https://www.youtube.com/watch?v=_-QPvffO1gs"],
        "Shake The Disease": [90, 1985, "https://www.youtube.com/watch?v=r_0sL_SQYvw"],
        "World In My Eyes": [90, 1990, "https://www.youtube.com/watch?v=nhZdL4JlnxI"],
        "Suffer Well": [89, 2006, "https://www.youtube.com/watch?v=SsKyxkfj8ak"],
        "People are people": [89, 1984, "https://www.youtube.com/watch?v=MzGnX-MbYE4"],
        "Behind The Wheel": [88, 1987, "https://www.youtube.com/watch?v=VEAuMiKqP-4"],
        "Black Celebration": [86, 1986, "https://www.youtube.com/watch?v=4WtXSnh0Mu8"]
    },
    members: [
        { name: "Dave Gahan", role: "Lead Vocalist", yearsActive: "1980-present", image: "./images/members/depecheMode/Dave.png" },
        { name: "Martin Gore", role: "Lead Guitarist | Backing Vocalist", yearsActive: "1980-present", image: "./images/members/depecheMode/Martin.png" },
        { name: "Andy Fletcher", role: "Keyboardist", yearsActive: "1980-2022", image: "./images/members/depecheMode/Andy.png" },
        { name: "Alan Wilder", role: "Keyboardist", yearsActive: "1982-1995", image: "./images/members/depecheMode/Alan.png" }
    ],
    albums: [
        { name: "Speak & Spell", description: "Bright synth-pop debut that introduced the band’s electronic foundations.", year: 1981, image: "./images/albums/depecheMode/SpeakAndSpell.png" },
        { name: "Construction Time Again", description: "Industrial-influenced album expanding their political and sonic ambitions.", year: 1983, image: "./images/albums/depecheMode/ConstructionTimeAgain.png" },
        { name: "Black Celebration", description: "Dark, atmospheric record marking a mature and moody shift in sound.", year: 1986, image: "./images/albums/depecheMode/BlackCelebration.png" },
        { name: "Music for the Masses", description: "Anthemic and expansive album that pushed Depeche Mode into stadium status.", year: 1987, image: "./images/albums/depecheMode/MusicForTheMasses.png" },
        { name: "Violator", description: "Their most iconic album, blending minimalism with emotional and sensual depth.", year: 1990, image: "./images/albums/depecheMode/Violator.png" },
        { name: "Songs of Faith and Devotion", description: "A bold fusion of electronic music with rock, gospel and industrial elements.", year: 1993, image: "./images/albums/depecheMode/SongsOfFaithAndDevotion.png" },
        { name: "Ultra", description: "A darker, introspective comeback album following major internal changes.", year: 1997, image: "./images/albums/depecheMode/Ultra.png" },
        { name: "Spirit", description: "A politically charged album reflecting global unrest and social division.", year: 2017, image: "./images/albums/depecheMode/Spirit.png" }
    ]
};




// 10. Guns N' Roses
const gunsNRosesData =
{
    id: "guns-n-roses",
    title: "Guns N' Roses",
    score: 93,
    image: "./images/background/gunsNRosesLogo.png",
    description: "Guns N' Roses is an American hard rock band formed in Los Angeles in 1985. Rising from the gritty Sunset Strip scene, the band became known for their raw sound, rebellious attitude and explosive performances. Blending hard rock, blues rock and heavy metal, Guns N' Roses captured both the danger and decadence of late-1980s rock culture.",
    review: "Guns N' Roses redefined hard rock by combining street-level aggression with ambitious songwriting. Albums like 'Appetite for Destruction' and the 'Use Your Illusion' era showcased both unfiltered energy and emotional depth. Axl Rose’s distinctive vocals and Slash’s iconic guitar work helped create timeless anthems that continue to resonate decades later. Only a few bands have matched their impact, chaos and legacy.",
    genres: ["Hard Rock", "Blues Rock", "Heavy Metal", "Glam Metal", "Active: 1985 - present", "Seen Live: 22/07/2023 at Athens"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesp03Dx6IQplhd8C05L_PFl",
    favouriteSongs: {
        "Sweet Child O' Mine": [98, 1988, "https://www.youtube.com/watch?v=1w7OgIMMRc4"],
        "Civil War": [96, 1991, "https://www.youtube.com/watch?v=isCh4kCeNYU"],
        "November Rain": [96, 1992, "https://www.youtube.com/watch?v=8SbUC-UaAxE"],
        "Estranged": [94, 1991, "https://www.youtube.com/watch?v=dpmAY059TTY"],
        "Knockin' On Heaven's Door": [93, 1991, "https://www.youtube.com/watch?v=f8OHybVhQwc"],
        "Paradise City": [92, 1989, "https://www.youtube.com/watch?v=Rbm6GXllBiw"],
        "Don't Cry": [90, 1991, "https://www.youtube.com/watch?v=zRIbf6JqkNc"],
        "Welcome To The Jungle": [90, 1987, "https://www.youtube.com/watch?v=o1tj2zJ2Wvg"],
        "Patience": [89, 1988, "https://www.youtube.com/watch?v=ErvgV4P6Fzc"],
        "Used To Love Her": [86, 1988, "https://www.youtube.com/watch?v=VpDefS3C83k"]
    },
    members: [
        { name: "Axl Rose", role: "Lead Vocalist | Pianist", yearsActive: "1985-present", image: "./images/members/gunsNRoses/Axl.png" },
        { name: "Slash", role: "Lead Guitarist", yearsActive: "1985-1996 and 2016-present", image: "./images/members/gunsNRoses/Slash.png" },
        { name: "Duff McKagan", role: "Bassist | Backing Vocalist", yearsActive: "1985-1997 and 2016-present", image: "./images/members/gunsNRoses/Duff.png" },
        { name: "Dizzy Reed", role: "Keyboardist", yearsActive: "1990-present", image: "./images/members/gunsNRoses/Dizzy.png" },
        { name: "Richard Fortus", role: "Guitarist", yearsActive: "2002-present", image: "./images/members/gunsNRoses/Richard.png" },
        { name: "Melissa Reese", role: "Second Keyboardist | Synthesizer", yearsActive: "2016-present", image: "./images/members/gunsNRoses/Melissa.png" },
        { name: "Isaac Carpenter", role: "Drummer", yearsActive: "2025-present", image: "./images/members/gunsNRoses/Isaac.png" },
        { name: "Frank Ferrer", role: "Drummer", yearsActive: "2006-2025", image: "./images/members/gunsNRoses/Frank.png" },
        { name: "Chris Pitman", role: "Second Keyboardist | Bassist", yearsActive: "1998-2016", image: "./images/members/gunsNRoses/Chris.png" },
        { name: "Tommy Stinson", role: "Bassist", yearsActive: "1998-2014", image: "./images/members/gunsNRoses/Tommy.png" },
    ],
    albums: [
        { name: "Appetite for Destruction", description: "Explosive debut album filled with raw energy, grit and hard rock anthems.", year: 1987, image: "./images/albums/gunsNRoses/Appetite.png" },
        { name: "G N' R Lies", description: "Half live, half acoustic release showing both controversy and vulnerability.", year: 1988, image: "./images/albums/gunsNRoses/GNRLies.png" },
        { name: "Use Your Illusion I", description: "Ambitious and diverse album featuring orchestral rock and epic songwriting.", year: 1991, image: "./images/albums/gunsNRoses/IllusionI.png" },
        { name: "Use Your Illusion II", description: "Darker and heavier companion album balancing aggression and emotion.", year: 1991, image: "./images/albums/gunsNRoses/IllusionII.png" },
        { name: "The Spaghetti Incident?", description: "Covers album paying tribute to punk and hard rock influences.", year: 1993, image: "./images/albums/gunsNRoses/Spaghetti.png" },
        { name: "Chinese Democracy", description: "Long-awaited experimental album marked by modern production and lineup changes.", year: 2008, image: "./images/albums/gunsNRoses/ChineseDemocracy.png" }
    ]
};




// 11. Arctic Monkeys
const arcticMonkeysData =
{
    id: "arctic-monkeys",
    title: "Arctic Monkeys",
    score: 93,
    image: "./images/background/arcticMonkeysLogo.png",
    description: "Arctic Monkeys are an English rock band formed in Sheffield in 2002. They rose to fame through early Internet-driven hype and quickly became one of the defining bands of 21st-century British rock. Known for sharp lyricism, evolving sound and distinctive vocals, the band has successfully shifted from indie rock roots to darker, more atmospheric and lounge-influenced styles over time.",
    review: "Arctic Monkeys stand out for their lyrical intelligence and constant artistic evolution. From the raw energy of their early work to the moody sound of later albums like 'AM', they have consistently reinvented themselves without losing identity. Alex Turner’s storytelling, paired with tight instrumentation, makes their music both emotionally engaging and culturally relevant. Few modern bands have aged so confidently while maintaining critical and commercial success.",
    genres: ["Indie Rock", "Garage Rock", "Alternative Rock", "Post-Punk Revival", "Active: 2002 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTeuqtTh8i7oxUPs_NGrMb4xp",
    favouriteSongs: {
        "Do I Wanna Know?": [98, 2013, "https://www.youtube.com/watch?v=bpOSxM0rNPM"],
        " 505": [97, 2007, "https://www.youtube.com/watch?v=MrmPDUvKyLs"],
        "I Wanna Be Yours": [95, 2013, "https://www.youtube.com/watch?v=fJLQCf4mFP0"],
        "Arabella": [95, 2013, "https://www.youtube.com/watch?v=Jn6-TItCazo"],
        "Crying Lightning": [94, 2009, "https://www.youtube.com/watch?v=fLsBJPlGIDU"],
        "Snap Out Of It": [93, 2013, "https://www.youtube.com/watch?v=1_O_T6Aq85E"],
        "Fluorescent Adolescent": [93, 2007, "https://www.youtube.com/watch?v=ma9I9VBKPiw"],
        "Knee Socks": [92, 2013, "https://www.youtube.com/watch?v=R7A1mIdiheE"],
        "R U Mine?": [91, 2012, "https://www.youtube.com/watch?v=VQH8ZTgna3Q"],
        "Baby I'm Yours": [91, 2006, "https://www.youtube.com/watch?v=atYNqvZcQ3M"],
        "A Certain Romance": [91, 2006, "https://www.youtube.com/watch?v=CUGzWETn1HQ"],
        "Mardy Bum": [91, 2006, "https://www.youtube.com/watch?v=dO368WjwyFs"],
        "When The Sun Goes Down": [91, 2006, "https://www.youtube.com/watch?v=EqkBRVukQmE"],  
        "Why'd You Only Call Me When You're High?": [90, 2013, "https://www.youtube.com/watch?v=ddwxyI3hgz8"]
    },
    members: [
        { name: "Alex Turner", role: "Lead Vocalist | Guitarist", yearsActive: "2002-present", image: "./images/members/arcticMonkeys/Alex.png" },
        { name: "Jamie Cook", role: "Lead Guitarist", yearsActive: "2002-present", image: "./images/members/arcticMonkeys/Jamie.png" },
        { name: "Matt Helders", role: "Drummer | Backing Vocalist", yearsActive: "2002-present", image: "./images/members/arcticMonkeys/Matt.png" },
        { name: "Nick O'Malley", role: "Bassist", yearsActive: "2006-present", image: "./images/members/arcticMonkeys/Nick.png" }        
    ],
    albums: [
        { name: "Whatever People Say I Am, That's What I'm Not", description: "Explosive debut capturing British youth culture with sharp lyrics and raw indie energy.", year: 2006, image: "./images/albums/arcticMonkeys/WhateverPeople.png" },
        { name: "Favourite Worst Nightmare", description: "Faster, darker follow-up refining the band’s aggressive and rhythmic edge.", year: 2007, image: "./images/albums/arcticMonkeys/FavouriteWorstNightmare.png" },
        { name: "Humbug", description: "Moody and experimental album introducing desert rock influences and darker tones.", year: 2009, image: "./images/albums/arcticMonkeys/Humbug.png" },
        { name: "Suck It and See", description: "Melodic and reflective record balancing romantic themes with classic rock vibes.", year: 2011, image: "./images/albums/arcticMonkeys/SuckItAndSee.png" },
        { name: "AM", description: "Iconic global success built on heavy grooves, falsetto hooks and late-night atmosphere.", year: 2013, image: "./images/albums/arcticMonkeys/AM.png" },
        { name: "Tranquility Base Hotel & Casino", description: "Conceptual lounge-pop album set in a retro-futuristic moon hotel.", year: 2018, image: "./images/albums/arcticMonkeys/TranquilityBase.png" },
        { name: "The Car", description: "Cinematic and orchestral album emphasizing introspection and sophisticated arrangements.", year: 2022, image: "./images/albums/arcticMonkeys/TheCar.png" }
    ]
};




// 12. U2
const u2Data =
{
    id: "u2",
    title: "U2",
    score: 93,
    image: "./images/background/u2Logo.png",
    description: "U2 are an Irish rock band formed in Dublin in 1976. Known for their anthemic sound, politically and spiritually charged lyrics, as well as their massive global reach, they became one of the most influential bands in modern rock history. Their music blends post-punk roots with arena rock ambition, atmospheric textures and socially conscious themes.",
    review: "U2’s greatness lies in their ability to merge emotional intimacy with stadium-scale power. From politically driven early records to the polished, expansive sound of the late 1980s and beyond, they consistently balanced relevance with ambition. Bono’s earnest lyricism, The Edge’s signature delay-driven guitar work and the band’s disciplined rhythm section created a sound that defined an era and left an undeniable impact on global rock culture.",
    genres: ["Rock", "Alternative Rock", "Pop Rock", "Arena Rock", "Post-Punk", "Active: 1976 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTevMsU1J3k91EDbxxTwLJWlu",
    favouriteSongs: {
        "Beautiful Day": [98, 2000, "https://www.youtube.com/watch?v=co6WMzDOh1o"],
        "Ordinary Love": [97, 2013, "https://www.youtube.com/watch?v=XC3ahd6Di3M"],
        "Pride (In The Name Of Love)": [96, 1984, "https://www.youtube.com/watch?v=Jn6wRE43dAY"],
        "Hold Me, Thrill Me, Kiss Me, Kill Me": [95, 1995, "https://www.youtube.com/watch?v=eIdTNyJp38A"],
        "One": [94, 1992, "https://www.youtube.com/watch?v=ftjEcrrf7r0"],
        "With Or Without You": [94, 1987, "https://www.youtube.com/watch?v=ujNeHIo7oTE"],
        "Sunday Bloody Sunday": [92, 1983, "https://www.youtube.com/watch?v=Iqlzoz_jH3c"],
        "Vertigo": [92, 2004, "https://www.youtube.com/watch?v=98W9QuMq-2k"],
        "I Still Haven't Found What I'm Looking For": [91, 1987, "https://www.youtube.com/watch?v=e3-5YC_oHjE"],
        "Where The Streets Have No Name": [87, 1987, "https://www.youtube.com/watch?v=GzZWSrr5wFI"]
    },
    members: [
        { name: "Bono", role: "Lead Vocalist", yearsActive: "1976-present", image: "./images/members/u2/Bono.png" },
        { name: "The Edge", role: "Guitarist | Keyboardist | Vocalist", yearsActive: "1976-present", image: "./images/members/u2/TheEdge.png" },
        { name: "Adam Clayton", role: "Bassist", yearsActive: "1976-present", image: "./images/members/u2/Adam.png" },
        { name: "Larry Mullen Jr.", role: "Drummer | Percussionist", yearsActive: "1976-present", image: "./images/members/u2/Larry.png" }
    ],
    albums: [
        { name: "Boy", description: "Debut album marked by youthful urgency and post-punk intensity.", year: 1980, image: "./images/albums/u2/Boy.png" },
        { name: "War", description: "Politically charged record featuring some of the U2’s most iconic protest songs.", year: 1983, image: "./images/albums/u2/War.png" },
        { name: "The Unforgettable Fire", description: "Atmospheric and experimental shift, introducing ambient textures.", year: 1984, image: "./images/albums/u2/UnforgettableFire.png" },
        { name: "The Joshua Tree", description: "Landmark album blending Americana, spirituality and global ambition.", year: 1987, image: "./images/albums/u2/JoshuaTree.png" },
        { name: "Achtung Baby", description: "Radical reinvention embracing industrial, electronic and alternative influences.", year: 1991, image: "./images/albums/u2/AchtungBaby.png" },
        { name: "Zooropa", description: "An experimental album exploring media saturation, technology and identity in a fragmented modern world.", year: 1993, image: "./images/albums/u2/Zooropa.png"},
        { name: "All That You Can't Leave Behind", description: "Return to classic anthemic songwriting with modern polish.", year: 2000, image: "./images/albums/u2/AllThat.png" },
        { name: "Songs of Innocence", description: "Reflective and personal album revisiting youth, memory and identity.", year: 2014, image: "./images/albums/u2/SongsOfInnocence.png" }
    ]
};




// 13. Green Day
const greenDayData =
{
    id: "green-day",
    title: "Green Day",
    score: 93,
    image: "./images/background/greenDayLogo.png",
    description: "Green Day are an American punk rock band formed in Berkeley, California in 1987. Emerging from the East Bay punk scene, they brought punk rock into the mainstream with catchy melodies, political anger and sharp humor. Over decades, they evolved from scrappy punk outsiders into one of the most influential rock bands of their generation.",
    review: "Green Day’s strength lies in their ability to balance raw punk energy with ambitious storytelling. While early albums captured youthful frustration and rebellion, later works like 'American Idiot' transformed punk into large-scale political rock opera. Billie Joe Armstrong’s direct lyricism, combined with relentless hooks and tight musicianship, has kept the band culturally relevant far longer than most of their peers.",
    genres: ["Punk Rock", "Pop-Punk", "Alternative Rock", "Hard Rock", "Skate Punk", "Active: 1987 - present", "Seen Live: 06/07/2025 at Ejekt Festival, Athens"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTeuc6Pdop0Kzcb5dDFK56o1T",
    favouriteSongs: {
        "Jesus Of Suburbia": [98, 2005, "https://www.youtube.com/watch?v=4DrwrpDXnts"],
        "Revolution Radio": [96, 2016, "https://www.youtube.com/watch?v=LHPKOy3dtqQ"],
        "Holiday": [95, 2004, "https://www.youtube.com/watch?v=A1OqtIqzScI"],
        "Boulevard Of Broken Dreams": [94, 2004, "https://www.youtube.com/watch?v=Soa3gO7tL-c"],
        "Basket Case": [93, 1994, "https://www.youtube.com/watch?v=NUTGr5t3MoY"],
        "American Idiot": [93, 2004, "https://www.youtube.com/watch?v=Ee_uujKuJMI"],
        "Wake Me Up When September Ends": [92, 2004, "https://www.youtube.com/watch?v=rdpBZ5_b48g"],
        "21 Guns": [92, 2009, "https://www.youtube.com/watch?v=r00ikilDxW4"],
        "Bang Bang": [90, 2016, "https://www.youtube.com/watch?v=mg5Bp_Gzs0s"],
        "When I Come Around": [90, 1994, "https://www.youtube.com/watch?v=i8dh9gDzmz8"],
        "Know Your Enemy": [90, 2009, "https://www.youtube.com/watch?v=9IclmVdWNbI"],
        "Good Riddance": [88, 1997, "https://www.youtube.com/watch?v=CnQ8N1KacJc"],
        "Brain Stew": [86, 1995, "https://www.youtube.com/watch?v=lfppdaW24YQ"]
    },
    members: [
        { name: "Billie Joe Armstrong", role: "Lead Vocalist | Guitarist", yearsActive: "1987-present", image: "./images/members/greenDay/Billie.png" },
        { name: "Mike Dirnt", role: "Bassist | Backing Vocalist", yearsActive: "1987-present", image: "./images/members/greenDay/Mike.png" },
        { name: "Tré Cool", role: "Drummer | Percussionist", yearsActive: "1990-present", image: "./images/members/greenDay/TreCool.png" },
        { name: "John Kiffmeyer", role: "Drummer", yearsActive: "1987-1990", image: "./images/members/greenDay/John.png" }
    ],
    albums: [
        { name: "Dookie", description: "Breakthrough album that made punk rock mainstream with raw humor and angst.", year: 1994, image: "./images/albums/greenDay/Dookie.png" },
        { name: "Insomniac", description: "Darker, faster follow-up amplifying paranoia, anger and punk intensity.", year: 1995, image: "./images/albums/greenDay/Insomniac.png" },
        { name: "Nimrod", description: "Eclectic album expanding the band’s sound beyond punk into a more melodic territory.", year: 1997, image: "./images/albums/greenDay/Nimrod.png" },
        { name: "American Idiot", description: "Politically charged rock opera critiquing media, war and modern American disillusionment.", year: 2004, image: "./images/albums/greenDay/AmericanIdiot.png" },
        { name: "21st Century Breakdown", description: "Ambitious concept album exploring love, rebellion and societal collapse.", year: 2009, image: "./images/albums/greenDay/21st.png" },
        { name: "Revolution Radio", description: "Return to urgent, politically aware songwriting with modern punk aggression.", year: 2016, image: "./images/albums/greenDay/RevolutionRadio.png" },
        { name: "Saviors", description: "High-energy record revisiting classic punk roots while addressing contemporary chaos.", year: 2024, image: "./images/albums/greenDay/Saviors.png" }
    ]
};




// 14. Nirvana
const nirvanaData =
{
    id: "nirvana",
    title: "Nirvana",
    score: 93,
    image: "./images/background/nirvanaLogo.png",
    description: "Nirvana were an American rock band formed in Aberdeen, Washington in 1987. As the defining force behind the grunge movement, they brought underground alternative rock into the mainstream, reshaping popular music in the early 1990s with raw emotion, distorted sound and anti-establishment ethos.",
    review: "Nirvana’s impact far exceeds their short lifespan. Kurt Cobain’s songwriting captured alienation, vulnerability and rage with rare honesty, while the band’s stripped-down sound rejected rock excess. Albums like 'Nevermind' and 'In Utero' changed the cultural direction of rock music, proving that imperfection, noise and authenticity could overthrow polish and spectacle. Their legacy remains both musically and culturally monumental.",
    genres: ["Grunge", "Alternative Rock", "Punk Rock", "Hard Rock", "Indie Rock", "Active: 1987 - 1994"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesSSk8ASpabxbn6Wfp5B-lH",
    favouriteSongs: {
        "Smells Like Teen Spirit": [97, 1991, "https://www.youtube.com/watch?v=hTWKbfoikeg"],
        "Where Did You Sleep Last Night": [96, 1994, "https://www.youtube.com/watch?v=hEMm7gxBYSc"],
        "The Man Who Sold The World": [95, 1994, "https://www.youtube.com/watch?v=QgtuQLqxbC0"],
        "Come As You Are": [94, 1992, "https://www.youtube.com/watch?v=vabnZ9-ex7o"],
        "Lithium": [94, 1991, "https://www.youtube.com/watch?v=pkcJEvMcnEg"],
        "Something In The Way": [93, 1991, "https://www.youtube.com/watch?v=4VxdufqB9zg"],
        "In Bloom": [91, 1991, "https://www.youtube.com/watch?v=XwcpiYqmEWc"],
        "Drain You": [90, 1991, "https://www.youtube.com/watch?v=YyPavIQnaOc"],
        "Heart-Shaped Box": [88, 1993, "https://www.youtube.com/watch?v=n6P0SitRwy8"],
        "About A Girl": [87, 1994, "https://www.youtube.com/watch?v=AhcttcXcRYY"]
    },
    members: [
        { name: "Kurt Cobain", role: "Lead Vocalist | Guitarist", yearsActive: "1987-1994", image: "./images/members/nirvana/Kurt.png" },
        { name: "Krist Novoselic", role: "Bassist", yearsActive: "1987-1994", image: "./images/members/nirvana/Krist.png" },
        { name: "Dave Grohl", role: "Drummer | Backing Vocalist", yearsActive: "1990-1994", image: "./images/members/nirvana/Dave.png" }
    ],
    albums: [
        { name: "Bleach", description: "Raw debut album rooted in punk aggression and heavy grunge distortion.", year: 1989, image: "./images/albums/nirvana/Bleach.png" },
        { name: "Nevermind", description: "Genre-defining breakthrough album that made grunge and alternative rock mainstream.", year: 1991, image: "./images/albums/nirvana/Nevermind.png" },
        { name: "In Utero", description: "Intentionally irritating and emotionally unfiltered response to mainstream success.", year: 1993, image: "./images/albums/nirvana/InUtero.png" },
        { name: "MTV Unplugged in NY", description: "Intimate live album revealing the band’s vulnerability and depth.", year: 1994, image: "./images/albums/nirvana/MTVUnplugged.png" }
    ]
};




// 15. Bon Jovi
const bonJoviData =
{
    id: "bon-jovi",
    title: "Bon Jovi",
    score: 92,
    image: "./images/background/bonJoviLogo.png",
    description: "Bon Jovi are an American rock band formed in Sayreville, New Jersey in 1983. Rising during the glam metal explosion of the 1980s, they combined arena-like hooks, blue-collar storytelling and polished production to become one of the best selling rock bands of all time.",
    review: "Bon Jovi mastered the art of the stadium anthem. While often grouped with metal peers, their songwriting leaned more toward melodic rock and heartland themes than pure glam excess. The band successfully reinvented themselves in the 2000s with a more mature and mainstream rock sound, proving longevity beyond their 1980s peak.",
    genres: ["Hard Rock", "Arena Rock", "Glam Metal", "Pop Rock", "Active: 1983 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTeu5NIQQHvFIlOd_jbbKjAO1",
    favouriteSongs: {
        "Have A Nice Day": [98, 2005, "https://www.youtube.com/watch?v=uCg2BoKiuOM"],
        "It's My Life": [97, 2000, "https://www.youtube.com/watch?v=vx2u5uUu3DE"],
        "Always": [96, 1994, "https://www.youtube.com/watch?v=EwWMUUe_9PI"],
        "Runaway": [93, 1984, "https://www.youtube.com/watch?v=s86K-p089R8"],
        "You Give Love A Bad Name": [91, 1986, "https://www.youtube.com/watch?v=KrZHPOeOxQQ"],
        "Livin' On A Prayer": [91, 1986, "https://www.youtube.com/watch?v=lDK9QqIzhwk"],
        "Bed Of Roses": [91, 1993, "https://www.youtube.com/watch?v=NvR60Wg9R7Q"],
        "Never Say Goodbye": [89, 1987, "https://www.youtube.com/watch?v=ifm00JEjSeo"],
        "Wanted Dead Or Alive": [88, 1987, "https://www.youtube.com/watch?v=SRvCvsRp5ho"],
        "Thank You For Loving Me": [86, 2000, "https://www.youtube.com/watch?v=nddTokI9hHY"]
    },
    members: [
        { name: "Jon Bon Jovi", role: "Lead Vocalist", yearsActive: "1983-present", image: "./images/members/bonJovi/Jon.png" },
        { name: "David Bryan", role: "Keyboardist | Backing Vocalist", yearsActive: "1983-present", image: "./images/members/bonJovi/David.png" },
        { name: "Tico Torres", role: "Drummer | Percussionist", yearsActive: "1983-present", image: "./images/members/bonJovi/Tico.png" },
        { name: "Phil X", role: "Lead Guitarist", yearsActive: "2013-present", image:  "./images/members/bonJovi/Phil.png" },
        { name: "Hugh McDonald", role: "Bassist", yearsActive: "2016-present", image: "./images/members/bonJovi/Hugh.png" },
        { name: "Everett Bradley", role: "Percussionist", yearsActive: "2016-present", image: "./images/members/bonJovi/Everett.png" },
        { name: "John Shanks", role: "Rhythm Guitarist", yearsActive: "2024-present", image: "./images/members/bonJovi/John.png" },
        { name: "Richie Sambora", role: "Lead Guitarist | Backing Vocalist", yearsActive: "1983-2013", image: "./images/members/bonJovi/Richie.png" },
    ],
    albums: [
        { name: "Bon Jovi", description: "Debut album introducing their melodic hard rock sound.", year: 1984, image: "./images/albums/bonJovi/BonJovi.png" },
        { name: "Slippery When Wet", description: "Breakthrough album packed with era-defining arena rock anthems.", year: 1986, image: "./images/albums/bonJovi/SlipperyWhenWet.png" },
        { name: "New Jersey", description: "Polished and ambitious follow-up album, expanding their global dominance.", year: 1988, image: "./images/albums/bonJovi/NewJersey.png" },
        { name: "Keep The Faith", description: "Transitional album shifting toward a heavier and more mature rock sound.", year: 1992, image: "./images/albums/bonJovi/KeepTheFaith.png" },
        { name: "Crush", description: "Commercial comeback featuring a modernized arena rock style.", year: 2000, image: "./images/albums/bonJovi/Crush.png" },
        { name: "Have A Nice Day", description: "Confident mid-2000s release blending pop-rock polish with classic hooks.", year: 2005, image: "./images/albums/bonJovi/HaveANiceDay.png" },
        { name: "Lost Highway", description: "Country-influenced rock album blending Nashville songwriting with Bon Jovi’s arena-rock identity.", year: 2007, image: "./images/albums/bonJovi/LostHighway.png" },
        { name: "Forever", description: "Recent release reflecting resilience and classic melodic rock foundations.", year: 2024, image: "./images/albums/bonJovi/Forever.png" }
    ]
};




// 16. Scorpions
const scorpionsData =
{
    id: "scorpions",
    title: "Scorpions",
    score: 92,
    image: "./images/background/scorpionsLogo.png",
    description: "Scorpions are a German hard rock band formed in Hanover, Germany in 1965 by the guitarist Rudolf Schenker. Renowned for their powerful riffs, emotionally charged ballads and electrifying live performances, they became one of the most successful and influential rock acts to emerge from continental Europe, selling over 100 million records worldwide.",
    review: "By mastering both blistering hard rock and deeply emotive power ballads, Scorpions gained a unique position in rock history. From the raw psychedelic energy of their early albums to the polished anthems of the '80s and the timeless resonance of 'Wind Of Change', their ability to evolve while retaining their identity makes them as one of the greatest rock bands of all time.",
    genres: ["Hard Rock", "Arena Rock", "Power Ballad", "Heavy Metal",  "Glam Metal", "Active: 1965 – present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTevNdupCs9TyyryiLdbRLjsg",
    favouriteSongs: {
        "Rock You Like A Hurricane": [98, 1984, "https://www.youtube.com/watch?v=6yP1tcy9a10"],
        "Wind Of Change": [96, 1991, "https://www.youtube.com/watch?v=n4RjJKxsamQ"],
        "Holiday": [95, 1979, "https://www.youtube.com/watch?v=kVGl-psCiPs"],
        "Still Loving You": [94, 1984, "https://www.youtube.com/watch?v=7pOr3dBFAeY"],
        "Always Somewhere": [94, 1979, "https://www.youtube.com/watch?v=AepjLbcLrJE"],
        "In Trance": [93, 1975, "https://www.youtube.com/watch?v=o0RGCMFP1KI"],
        "No One Like You": [92, 1982, "https://www.youtube.com/watch?v=6VwbyBGbqPY"],
        "Send Me An Angel": [91, 1991, "https://www.youtube.com/watch?v=1UUYjd2rjsE"],
        "Big City Nights": [90, 1984, "https://www.youtube.com/watch?v=pmE_l_dN9UM"],
        "The Zoo": [89, 1979, "https://www.youtube.com/watch?v=X27IfAgzhTY"],
        "You And I": [88, 1996, "https://www.youtube.com/watch?v=5nw0vxba3cE"],
        "When The Smoke Is Going Down": [88, 1982, "https://www.youtube.com/watch?v=XgCnUYeyeiA"],
        "Tease Me Please Me": [87, 1990, "https://www.youtube.com/watch?v=wENdZneWDYs"],
        "Dynamite": [87, 1982, "https://www.youtube.com/watch?v=Bz8RpZGK3eY"],
        "Lorelei": [86, 2010, "https://www.youtube.com/watch?v=8qDK2E57V7M"],
        "Blackout": [85, 1982, "https://www.youtube.com/watch?v=qGPT1kfaSEs"],
        "Coming Home": [85, 2025, "https://www.youtube.com/watch?v=a9V7R7WoNys"]
    },
    members: [
        { name: "Rudolf Schenker", role: "Rhythm Guitarist", yearsActive: "1965–present", image: "./images/members/scorpions/Rudolf.png" },
        { name: "Klaus Meine", role: "Lead Vocalist", yearsActive: "1969–present", image: "./images/members/scorpions/Klaus.png" },
        { name: "Matthias Jabs", role: "Lead Guitarist", yearsActive: "1978–present", image: "./images/members/scorpions/Matthias.png" },
        { name: "Paweł Mąciwoda", role: "Bassist", yearsActive: "2003–present", image: "./images/members/scorpions/Pawel.png" },
        { name: "Mikkey Dee", role: "Drummer", yearsActive: "2016–present", image: "./images/members/scorpions/Mikkey.png" },
        { name: "Uli Jon Roth", role: "Lead Guitarist", yearsActive: "1973–1978", image: "./images/members/scorpions/Uli.png" },
        { name: "Francis Buchholz", role: "Bassist", yearsActive: "1973–1992", image: "./images/members/scorpions/Francis.png" },
        { name: "Herman Rarebell", role: "Drummer", yearsActive: "1977–1996", image: "./images/members/scorpions/Herman.png" }
    ],
    albums: [
        { name: "Lonesome Crow", description: "A raw psychedelic debut featuring a young Michael Schenker, searching for a sound.", year: 1972, image: "./images/albums/scorpions/LonesomeCrow.png" },
        { name: "In Trance", description: "A hard rock landmark that announced them to the world, making them famous.", year: 1975, image: "./images/albums/scorpions/InTrance.png" },
        { name: "Lovedrive", description: "A pivotal melodic hard rock masterpiece that introduced Matthias Jabs and marked the classic Scorpions lineup and sound.", year: 1979, image: "./images/albums/scorpions/Lovedrive.png" },
        { name: "Blackout", description: "A triumphant comeback record after Klaus' vocal surgery, producing some classics.", year: 1982, image: "./images/albums/scorpions/Blackout.png" },
        { name: "Love At First Sting", description: "Their commercial peak, featuring 'Rock You Like A Hurricane' and 'Still Loving You', earning them the MTV title 'Ambassadors of Rock'.", year: 1984, image: "./images/albums/scorpions/LoveAtFirstSting.png" },
        { name: "Savage Amusement", description: "A polished arena rock album with a more accessible but still powerful sound.", year: 1988, image: "./images/albums/scorpions/SavageAmusement.png" },
        { name: "Crazy World", description: "Their most politically resonant album, home to 'Wind Of Change', which became a global anthem for the fall of the Berlin Wall.", year: 1990, image: "./images/albums/scorpions/CrazyWorld.png" },
        { name: "Rock Believer", description: "A powerful return to their hard rock roots, proving their creativity after five decades.", year: 2022, image: "./images/albums/scorpions/RockBeliever.png" }
    ]
};




// 17. Black Keys
const blackKeysData =
{
    id: "the-black-keys",
    title: "The Black Keys",
    score: 92,
    image: "./images/background/blackKeysLogo.png",
    description: "The Black Keys are an American rock duo formed in Akron, Ohio in 2001. Blending garage rock rawness with blues grit and psychedelic textures, they evolved from lo-fi basement recordings into one of the most successful rock acts of the 2010s.",
    review: "What makes The Black Keys compelling is their balance between minimalism and groove. Early records leaned heavily on distorted blues riffs and stripped-down production, while later albums introduced richer textures and sharper hooks. Dan Auerbach’s gritty vocals and Patrick Carney’s punchy, direct drumming created a sound that felt both retro and modern — accessible without losing edge.",
    genres: ["Garage Rock", "Blues Rock", "Indie Rock", "Punk Blues", "Active: 2001 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTetzPUgJyslhZQCpcGKPc4gh",
    favouriteSongs: {
        "Fever": [97, 2014, "https://www.youtube.com/watch?v=trk7P-9QDyc"],
        "Weight Of Love": [96, 2014, "https://www.youtube.com/watch?v=ygdVEIrVnIk"],
        "10 Lovers": [95, 2014, "https://www.youtube.com/watch?v=ktgqpEJsnHY"],
        "Lonely Boy": [94, 2011, "https://www.youtube.com/watch?v=a_426RiwST8"],
        "Sister": [93, 2011, "https://www.youtube.com/watch?v=6P2Wn03RCKc"],
        "Gold On The Ceiling": [91, 2012, "https://www.youtube.com/watch?v=6yCIDkFI7ew"],
        "Tighten Up": [90, 2010, "https://www.youtube.com/watch?v=mpaPBCBjSVc"],
        "Howling For You": [90, 2011, "https://www.youtube.com/watch?v=Zs3cyuXSFII"],
        "In Our Prime": [89, 2014, "https://www.youtube.com/watch?v=aHwGucd6z5w"],
        "Little Black Submarines": [88, 2011, "https://www.youtube.com/watch?v=6k8es2BNloE"],
        "Too Afraid To Love You": [87, 2010, "https://www.youtube.com/watch?v=Ft_-5kuYY-E"],
        "Fireman Ring The Bell": [87, 2026, "https://www.youtube.com/watch?v=Kg6UoiQ7ZGg"],
        "Where There's Smoke, There's Fire": [87, 2026, "https://www.youtube.com/watch?v=d8eHpiLdBOI"],
    },
    members: [
        { name: "Dan Auerbach", role: "Lead Vocalist | Guitarist", yearsActive: "2001-present", image: "./images/members/blackKeys/Dan.png" },
        { name: "Patrick Carney", role: "Drummer", yearsActive: "2001-present", image: "./images/members/blackKeys/Patrick.png" }
    ],
    albums: [
        { name: "The Big Come Up", description: "Lo-fi debut rooted in raw blues covers and gritty garage rock.", year: 2002, image: "./images/albums/blackKeys/TheBigComeUp.png" },
        { name: "Rubber Factory", description: "Breakthrough indie record refining their blues-rock attack.", year: 2004, image: "./images/albums/blackKeys/RubberFactory.png" },
        { name: "Brothers", description: "Soulful and groove-driven album that pushed them into mainstream recognition.", year: 2010, image: "./images/albums/blackKeys/Brothers.png" },
        { name: "El Camino", description: "High-energy release packed with radio-ready garage rock anthems.", year: 2011, image: "./images/albums/blackKeys/ElCamino.png" },
        { name: "Turn Blue", description: "Psychedelic-influenced, darker and more atmospheric exploration.", year: 2014, image: "./images/albums/blackKeys/TurnBlue.png" },
        { name: "Let's Rock", description: "Return to stripped-down guitar-driven rock foundations.", year: 2019, image: "./images/albums/blackKeys/LetsRock.png" },
        { name: "Ohio Players", description: "Recent collaborative album blending funk, soul and modern rock textures.", year: 2024, image: "./images/albums/blackKeys/OhioPlayers.png" },
        { name: "Peaches!", description: "Their 14th studio album, full of blues-heavy covers that were recorded almost entirely live.", year: 2026, image: "./images/albums/blackKeys/Peaches.png" }
    ]
};




// 18. Robbie Williams
const robbieWilliamsData =
{
    id: "robbie-williams",
    title: "Robbie Williams",
    score: 92,
    image: "./images/background/robbieWilliamsLogo.png",
    description: "Robbie Williams is a British pop singer and songwriter who rose to fame in the 1990s as a member of 'Take That' before launching one of the most successful solo careers in UK music history. Known for his charisma, theatricality and emotional openness, he blends pop, rock and swing influences with arena-sized ambition.",
    review: "Robbie Williams’ appeal lies in his duality - he is an intelligent showman and deeply self-aware lyricist. His late-1990s and early-2000s run produced era-defining British pop anthems, while his swing experiments and introspective ballads demonstrated flexibility beyond standard chart pop. Though controversial and often polarizing, his stage presence and songwriting instincts established his status as a major European pop icon.",
    genres: ["Pop Rock", "Pop", "Britpop", "Swing", "Active: 1990 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTetSQWTGmlPVT3InXHO1ooSZ",
    favouriteSongs: {
        "Me And My Monkey": [97, 2002, "https://www.youtube.com/watch?v=t_FYDJz5GIE"],
        "Can't Stop Christmas": [96, 2020, "https://www.youtube.com/watch?v=BW4nXP9N7Fg"],
        "The Road To Mandalay": [95, 2000, "https://www.youtube.com/watch?v=KohurXfPb7s"],
        "Supreme": [94, 2000, "https://www.youtube.com/watch?v=ULTtWUZhD9c"],
        "Let Me Entertain You": [93, 1997, "https://www.youtube.com/watch?v=ymPu2PdLW3I"],
        "Feel": [93, 2002, "https://www.youtube.com/watch?v=iy4mXZN1Zzk"],
        "Millenium": [93, 1998, "https://www.youtube.com/watch?v=xcWOviMI6Lk"],
        "Angels": [92, 1997, "https://www.youtube.com/watch?v=luwAMFcc2f8"],
        "Rock DJ": [89, 2000, "https://www.youtube.com/watch?v=BnO3nijfYmU"],
        "Come Undone": [89, 2002, "https://www.youtube.com/watch?v=AozyrxAgeOA"],
        "She's The One": [88, 1998, "https://www.youtube.com/watch?v=sVaRHJn_dgM"],
        "My Way": [88, 2000, "https://www.youtube.com/watch?v=t9HCaBk4Kmo"],
        "Better Man": [87, 2000, "https://www.youtube.com/watch?v=gY2ekm_krNU"],
        "Love My Life": [86, 2016, "https://www.youtube.com/watch?v=j4ggyO-OFXU"]
    },
    members: [
        { name: "Robbie Williams", role: "Lead Vocalist | Songwriter | Performer", yearsActive: "1990-present", image: "./images/members/robbieWilliams/Robbie.png" },
        { name: "Gary Nuttall", role: "Guitarist", yearsActive: "Touring Band Member", image: "./images/members/robbieWilliams/Gary.png" },
        { name: "Tom Longworth", role: "Guitarist", yearsActive: "Touring Band Member", image: "./images/members/robbieWilliams/Tom.png" }
    ],
    albums: [
        { name: "Life thru a Lens", description: "Debut solo album featuring the breakthrough ballad 'Angels'.", year: 1997, image: "./images/albums/robbieWilliams/LifeThruALens.png" },
        { name: "I've Been Expecting You", description: "Confident follow-up establishing his dominance in late-90s British pop.", year: 1998, image: "./images/albums/robbieWilliams/IveBeenExpectingYou.png" },
        { name: "Sing When You're Winning", description: "Commercial peak blending swagger, satire and massive pop hooks.", year: 2000, image: "./images/albums/robbieWilliams/SingWhen.png" },
        { name: "Escapology", description: "More personal and introspective record with darker undertones.", year: 2002, image: "./images/albums/robbieWilliams/Escapology.png" },
        { name: "Intensive Care", description: "Melodic and reflective mid-2000s release.", year: 2005, image: "./images/albums/robbieWilliams/IntensiveCare.png" },
        { name: "The Heavy Entertainment Show", description: "Return to flamboyant, theatrical pop spectacle.", year: 2016, image: "./images/albums/robbieWilliams/HeavyEntertainmentShow.png" },
        { name: "XXV", description: "Anniversary compilation reimagining his greatest hits with orchestral arrangements.", year: 2022, image: "./images/albums/robbieWilliams/XXV.png" }
    ]
};




// 19. AC/DC
const acdcData =
{
    id: "acdc",
    title: "AC/DC",
    score: 91,
    image: "./images/background/acdcLogo.png",
    description: "AC/DC are an Australian hard rock band formed in Sydney in 1973 by brothers Angus and Malcolm Young. Fusing blues-driven riffs with raw, high-voltage energy, they became one of the best-selling music acts of all time, with over 200 million records sold worldwide and an electrifying live reputation that made them one of the greatest stadium rock bands in history.",
    review: "With a no-nonsense philosophy built on stripped-back riffs, thunderous rhythms and relentless power, AC/DC created one of the most recognizable sounds in rock history. Whether fronted by the Bon Scott or the wild Brian Johnson, their consistency across decades is staggering. Besides, 'Back In Black' alone stands as one of the greatest rock albums ever made.",
    genres: ["Hard Rock", "Arena Rock", "Blues Rock", "Rock and Roll", "Heavy Metal", "Active: 1973 – present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTevnR3ty0nIu1dOGDi9qMQjf",
    favouriteSongs: {
        "Rock n Roll Train": [97, 2008, "https://www.youtube.com/watch?v=XRPwNU3f3Tw"],
        "Back In Black": [96, 1980, "https://www.youtube.com/watch?v=pAgnJDJN4VA"],
        "Highway To Hell": [95, 1979, "https://www.youtube.com/watch?v=SgLy-6yj1Ws"],
        "Thunderstruck": [95, 1990, "https://www.youtube.com/watch?v=v2AC41dglnM"],
        "It's A Long Way To The Top": [93, 1975, "https://www.youtube.com/watch?v=GChhRrU6BJU"],
        "Hells Bells": [93, 1980, "https://www.youtube.com/watch?v=etAIpkdhU9Q"],
        "The Jack": [92, 1975, "https://www.youtube.com/watch?v=kq_GSIw0X0w"],
        "Dirty Deeds Done Dirt Cheap": [91, 1976, "https://www.youtube.com/watch?v=UIE4UjBtx-o"],
        "T.N.T.": [91, 1975, "https://www.youtube.com/watch?v=CiJeSSzu9Bo"],
        "You Shook Me All Night Long": [90, 1980, "https://www.youtube.com/watch?v=Lo2qQmj0_h4"],
        "Shoot To Thrill": [90, 1980, "https://www.youtube.com/watch?v=xRQnJyP77tY"],
        "For Those About To Rock": [88, 1981, "https://www.youtube.com/watch?v=qsaTFcXVCNU"]
    },
    members: [
        { name: "Brian Johnson", role: "Lead Vocalist", yearsActive: "1980–present", image: "./images/members/acdc/Brian.png" },
        { name: "Angus Young", role: "Lead Guitarist", yearsActive: "1973–present", image: "./images/members/acdc/Angus.png" },
        { name: "Malcolm Young", role: "Rhythm Guitarist", yearsActive: "1973–2014", image: "./images/members/acdc/Malcolm.png" },
        { name: "Stevie Young", role: "Rhythm Guitarist", yearsActive: "2014–present", image: "./images/members/acdc/Stevie.png" },
        { name: "Cliff Williams", role: "Bassist", yearsActive: "1977–2016", image: "./images/members/acdc/Cliff.png" },
        { name: "Phil Rudd", role: "Drummer", yearsActive: "1975–1983 and 1994–2015", image: "./images/members/acdc/Phil.png" },
        { name: "Bon Scott", role: "Lead Vocalist", yearsActive: "1974–1980", image: "./images/members/acdc/Bon.png" },
        { name: "Axl Rose", role: "Guest Lead Vocalist", yearsActive: "2016", image: "./images/members/acdc/Axl.png" },
    ],
    albums: [
        { name: "High Voltage", description: "Their international breakthrough debut, establishing the raw blues-driven hard rock blueprint that would define the band.", year: 1976, image: "./images/albums/acdc/HighVoltage.png" },
        { name: "Dirty Deeds Done Dirt Cheap", description: "A menacing classic album with Bon Scott's sardonic humour and the band's signature high-energy riffing.", year: 1976, image: "./images/albums/acdc/DirtyDeedsDoneDirtCheap.png" },
        { name: "Let There Be Rock", description: "A raw and relentless record widely regarded as the purest product of AC/DC's live wildness.", year: 1977, image: "./images/albums/acdc/LetThereBeRock.png" },
        { name: "Highway To Hell", description: "Bon Scott's final studio album and the record that brought AC/DC to global superstardom with a smoother but still savage sound.", year: 1979, image: "./images/albums/acdc/HighwayToHell.png" },
        { name: "Back In Black", description: "A monumental tribute to Bon Scott and the second best-selling album in history, launching the Brian Johnson's era.", year: 1980, image: "./images/albums/acdc/BackInBlack.png" },
        { name: "For Those About To Rock", description: "Their first US No1 album, delivering great anthems that made them kings of arena rock.", year: 1981, image: "./images/albums/acdc/ForThoseAboutToRock.png" },
        { name: "The Razors Edge", description: "A powerful commercial comeback featuring 'Thunderstruck', reaffirming their dominance.", year: 1990, image: "./images/albums/acdc/TheRazorsEdge.png" },
        { name: "Black Ice", description: "Their first Billboard No1 album in decades, a really thunderous return.", year: 2008, image: "./images/albums/acdc/BlackIce.png" }
    ]
};




// 20. Oasis
const oasisData =
{
    id: "oasis",
    title: "Oasis",
    score: 91,
    image: "./images/background/oasisLogo.png",
    description: "Oasis were an English rock band formed in Manchester in 1991. Central to the Britpop movement, they became one of the defining bands of 1990s British music, combining Beatles-inspired melody with working-class swagger and stadium-sized ambition.",
    review: "Between 1994 and 1996, Oasis delivered one of the strongest back-to-back runs in British rock history. Their early material fused melodic brilliance with cultural timing, capturing the optimism and attitude of mid-90s Britain. Later releases showed uneven quality, but the impact of their first two albums alone secures their legacy as one of the most important British bands of the modern era.",
    genres: ["Britpop", "Alternative Rock", "Rock", "Active: 1991 - 2009 and 2024 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesO_Y1lHwodr4KNKHK7FPdR",
    favouriteSongs: {
        "Morning Glory": [96, 1995, "https://www.youtube.com/watch?v=Wm54XyLwBAk"],
        "Wonderwall": [96, 1995, "https://www.youtube.com/watch?v=6hzrDeceEKc"],
        "Don't Look Back In Anger": [95, 1996, "https://www.youtube.com/watch?v=r8OipmKFDeM"],
        "Stop Crying Your Heart Out": [94, 2002, "https://www.youtube.com/watch?v=dhZUsNJ-LQU"],
        "Supersonic": [92, 1994, "https://www.youtube.com/watch?v=BJKpUH2kJQg"],
        "Slide Away": [92, 1994, "https://www.youtube.com/watch?v=3GCSUSwcDwg"],
        "Champagne Supernova": [91, 1996, "https://www.youtube.com/watch?v=tI-5uv4wryI"],
        "Stand By Me": [91, 1997, "https://www.youtube.com/watch?v=maTP315XZCQ"],
        "Live Forever": [91, 1994, "https://www.youtube.com/watch?v=TDe1DqxwJoc"],
        "Hey Now!": [89, 1995, "https://www.youtube.com/watch?v=Rl5DRpBqs4Q"],
        "Whatever": [86, 1994, "https://www.youtube.com/watch?v=EHfx9LXzxpw"]
    },
    members: [
        { name: "Liam Gallagher", role: "Lead Vocalist", yearsActive: "1991–2009 and 2024-present", image: "./images/members/oasis/Liam.png" },
        { name: "Noel Gallagher", role: "Lead Guitarist | Songwriter", yearsActive: "1991–2009 and 2024-present", image: "./images/members/oasis/Noel.png" },
        { name: "Paul Arthurs (Bonehead)", role: "Rhythm Guitarist", yearsActive: "1991–1999 and 2024-present", image: "./images/members/oasis/Bonehead.png" },
        { name: "Gem Archer", role: "Lead Guitarist | Rhythm Guitarist", yearsActive: "1999-2009 and 2024-present", image: "./images/members/oasis/Gem.png"},
        { name: "Andy Bell", role: "Bassist", yearsActive: "1999-2009 and 2024-present", image: "./images/members/oasis/Andy.png" },
        { name: "Paul McGuigan (Guigsy)", role: "Bassist", yearsActive: "1991–1999", image: "./images/members/oasis/Guigsy.png" },
        { name: "Alan White", role: "Drummer", yearsActive: "1995–2004", image: "./images/members/oasis/Alan.png" },
        { name: "Tony McCarroll", role: "Drummer", yearsActive: "1991–1995", image: "./images/members/oasis/Tony.png" }
    ],
    albums: [
        { name: "Definitely Maybe", description: "Explosive debut that helped ignite Britpop’s mainstream breakthrough.", year: 1994, image: "./images/albums/oasis/DefinitelyMaybe.png" },
        { name: "(What's the Story) Morning Glory?", description: "Global phenomenon filled with generational anthems.", year: 1995, image: "./images/albums/oasis/MorningGlory.png" },
        { name: "Be Here Now", description: "Overproduced, yet commercially massive follow-up at the height of Britpop excess.", year: 1997, image: "./images/albums/oasis/BeHereNow.png" },
        { name: "Standing on the Shoulder of Giants", description: "Darker, more experimental pivot after the classic lineup era.", year: 2000, image: "./images/albums/oasis/ShoulderOfGiants.png" },
        { name: "Heathen Chemistry", description: "Mixed but containing some of their strongest post-90s singles.", year: 2002, image: "./images/albums/oasis/HeathenChemistry.png" },
        { name: "Don't Believe the Truth", description: "Tighter, more collaborative record showing renewed focus.", year: 2005, image: "./images/albums/oasis/DontBelieveTheTruth.png" },
        { name: "Dig Out Your Soul", description: "Psych-influenced final album before the band’s breakup.", year: 2008, image: "./images/albums/oasis/DigOutYourSoul.png" }
    ]
};




// 21. The Beatles
const theBeatlesData =
{
    id: "the-beatles",
    title: "The Beatles",
    score: 91,
    image: "./images/background/theBeatlesLogo.png",
    description: "The Beatles were a revolutionary rock band that was formed in Liverpool in 1960. They that redefined popular music through innovation, songwriting depth, and studio experimentation, shaping modern rock and pop forever. The Lennon-McCartney songwriting partnership is regarded as the most successful in music history.",
    review: "By blending melodic brilliance, cultural impact and constant artistic evolution, the Beatles progressed from simple pop rock to complex, genre-defining works that influenced nearly every modern artist. Until now, they are considered as one of the most iconic and influential bands ever.",
    genres: ["Rock", "Pop Rock", "Psychedelia", "Beat", "Active: 1960–1970"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTetQOeUwmYxWGoESw9AA5XGQ",
    favouriteSongs: {
        "Hey Jude": [97, 1968, "https://www.youtube.com/watch?v=mQER0A0ej0M"],
        "Come Together": [95, 1969, "https://www.youtube.com/watch?v=oolpPmuK2I8"],
        "Love You To": [95, 1966, "https://www.youtube.com/watch?v=tE93TJDKTQU"],
        "All You Need Is Love": [93, 1967, "https://www.youtube.com/watch?v=4EGczv7iiEk"],
        "Let It Be": [92, 1970, "https://www.youtube.com/watch?v=QDYfEBY9NM4"],
        "Twist And Shout": [91, 1963, "https://www.youtube.com/watch?v=2RicaUqd9Hg"],
        "Don't Let Me Down": [91, 1969, "https://www.youtube.com/watch?v=EyHKuyGsu4U"],
        "She Loves You": [90, 1963, "https://www.youtube.com/watch?v=nGbWU8S3vzs"],
        "Here Comes The Sun": [90, 1969, "https://www.youtube.com/watch?v=tDEzmaZHuS0"],
        "Something": [90, 1969, "https://www.youtube.com/watch?v=UelDrZ1aFeY"],
        "Ob-La-Di, Ob-La-Da": [89, 1968, "https://www.youtube.com/watch?v=_J9NpHKrKMw"],
        "Love Me Do": [88, 1962, "https://www.youtube.com/watch?v=0pGOFX1D_jg"],
        "Help!": [88, 1965, "https://www.youtube.com/watch?v=N4KvafPbauw"],
        "Yellow Submarine": [87, 1968, "https://www.youtube.com/watch?v=m2uTFF_3MaA"],
        "And I Love Her": [86, 1964, "https://www.youtube.com/watch?v=5tc0gLSSU1M"],
        "Yesterday": [85, 1965, "https://www.youtube.com/watch?v=NrgmdOz227I"],
        "Blackbird": [85, 1968, "https://www.youtube.com/watch?v=Man4Xw8Xypo"]
    },
    members: [
        { name: "John Lennon", role: "Vocalist | Rhythm Guitarist", yearsActive: "1960–1970", image: "./images/members/theBeatles/John.png" },
        { name: "Paul McCartney", role: "Bassist | Vocalist | Keyboardist", yearsActive: "1960–1970", image: "./images/members/theBeatles/Paul.png" },
        { name: "George Harrison", role: "Lead Guitarist", yearsActive: "1960–1970", image: "./images/members/theBeatles/George.png" },
        { name: "Ringo Starr", role: "Drummer", yearsActive: "1962–1970", image: "./images/members/theBeatles/Ringo.png" },
        { name: "Pete Best", role: "Drummer", yearsActive: "1960-1962", image: "./images/members/theBeatles/Pete.png" }
    ],
    albums: [
        { name: "Please Please Me", description: "A vibrant debut blending rock and roll energy with early pop songwriting charm.", year: 1963, image: "./images/albums/theBeatles/PleasePleaseMe.png" },
        { name: "A Hard Day's Night", description: "A defining pop rock album, showcasing sharp songwriting and Beatlemania-era brilliance.", year: 1964, image: "./images/albums/theBeatles/AHardDaysNight.png" },
        { name: "Rubber Soul", description: "A transitional album introducing deeper lyrics, folk influences and artistic maturity.", year: 1965, image: "./images/albums/theBeatles/RubberSoul.png" },
        { name: "Revolver", description: "An innovative psychedelic rock landmark filled with studio experimentation and sonic evolution.", year: 1966, image: "./images/albums/theBeatles/Revolver.png" },
        { name: "Sgt. Pepper's Lonely Hearts Club Band", description: "A groundbreaking concept album, redefining production, creativity and psychedelic music.", year: 1967, image: "./images/albums/theBeatles/SgtPepper.png" },
        { name: "The Beatles (White Album)", description: "A diverse and expansive double album exploring multiple genres and artistic individuality.", year: 1968, image: "./images/albums/theBeatles/WhiteAlbum.png" },
        { name: "Abbey Road", description: "A polished masterpiece featuring iconic production and songwriting peaks - the one that depicts Beatles on pedestrian walking.", year: 1969, image: "./images/albums/theBeatles/AbbeyRoad.png" },
        { name: "Let It Be", description: "A reflective closing-era album blending raw performances with a more stripped-back sound.", year: 1970, image: "./images/albums/theBeatles/LetItBe.png" }
    ]
};




// 22. Coldplay
const coldplayData =
{
    id: "coldplay",
    title: "Coldplay",
    score: 91,
    image: "./images/background/coldplayLogo.png",
    description: "Coldplay are a British alternative rock band formed in London in 1997. Known for their atmospheric sound, emotional songwriting and melodic piano-driven compositions, they evolved from introspective alternative rock into expansive pop and arena-oriented music.",
    review: "By combining emotional lyricism, accessible melodies and evolving production styles, Coldplay transitioned from melancholic alternative rock to global pop dominance while maintaining strong musical identity. Their consistency in crafting anthemic yet intimate songs secures their place as one of the most successful bands of the 21st century.",
    genres: ["Alternative Rock", "Pop Rock", "Ambient Pop", "Synth Pop", "Active: 1997 - present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTevuUSLEmEetpA_3hKABxWVL",
    favouriteSongs: {
        "Adventure Of A Lifetime": [97, 2015, "https://www.youtube.com/watch?v=QtXby3twMmI"],
        "Viva La Vida": [96, 2008, "https://www.youtube.com/watch?v=dvgZkm1xWPE"],
        "Clocks": [94, 2003, "https://www.youtube.com/watch?v=d020hcWA_Wg"],
        "Trouble": [92, 2000, "https://www.youtube.com/watch?v=kcASPx3-HuI"],
        "Paradise": [92, 2011, "https://www.youtube.com/watch?v=1G4isv_Fylg"],
        "Hymn For The Weekend": [92, 2016, "https://www.youtube.com/watch?v=YykjpeuMNEk"],
        "A Sky Full Of Stars": [92, 2014, "https://www.youtube.com/watch?v=VPRjCeoBqrI"],
        "The Scientist": [90, 2002, "https://www.youtube.com/watch?v=RB-RcX5DS5A"],
        "Speed Of Sound": [89, 2005, "https://www.youtube.com/watch?v=0k_1kvDh2UA"],
        "Yellow": [89, 2000, "https://www.youtube.com/watch?v=yKNxeF4KMsY"],
        "Fix You": [88, 2005, "https://www.youtube.com/watch?v=k4V3Mo61fJM"]
    },
    members: [
        { name: "Chris Martin", role: "Lead Vocalist | Pianist", yearsActive: "1997–present", image: "./images/members/coldplay/Chris.png" },
        { name: "Jonny Buckland", role: "Lead Guitarist", yearsActive: "1997–present", image: "./images/members/coldplay/Jonny.png" },
        { name: "Guy Berryman", role: "Bassist", yearsActive: "1997–present", image: "./images/members/coldplay/Guy.png" },
        { name: "Will Champion", role: "Drummer | Percussionist", yearsActive: "1997–present", image: "./images/members/coldplay/Will.png" },
        { name: "Phil Harvey", role: "Manager | Creative Director", yearsActive: "1997–present", image: "./images/members/coldplay/Phil.png" },
    ],
    albums: [
        { name: "Parachutes", description: "A soft and melancholic debut defined by atmospheric sound and emotional songwriting.", year: 2000, image: "./images/albums/coldplay/Parachutes.png" },
        { name: "A Rush of Blood to the Head", description: "A breakthrough album fusing introspective lyrics with iconic piano-driven anthems.", year: 2002, image: "./images/albums/coldplay/RushOfBlood.png" },
        { name: "X&Y", description: "A grand and atmospheric record emphasizing spacey production and arena-sized melodies.", year: 2005, image: "./images/albums/coldplay/XY.png" },
        { name: "Viva la Vida", description: "An artistic peak blending orchestral elements, experimentation and thematic depth.", year: 2008, image: "./images/albums/coldplay/VivaLaVida.png" },
        { name: "Mylo Xyloto", description: "A colorful, pop-oriented concept album with vibrant electronic and arena influences.", year: 2011, image: "./images/albums/coldplay/MyloXyloto.png" },
        { name: "Ghost Stories", description: "A minimalist and intimate album centered on heartbreak and atmospheric textures.", year: 2014, image: "./images/albums/coldplay/GhostStories.png" },
        { name: "A Head Full of Dreams", description: "An uplifting, pop-focused record filled with bright production and optimistic themes.", year: 2015, image: "./images/albums/coldplay/AHeadFullOfDreams.png" },
        { name: "Music of the Spheres", description: "A futuristic pop album exploring cosmic themes with mainstream electronic influences.", year: 2021, image: "./images/albums/coldplay/MusicOfTheSpheres.png" }
    ]
};




// 23. The Killers
const theKillersData =
{
    id: "the-killers",
    title: "The Killers",
    score: 90,
    image: "./images/background/theKillersLogo.png",
    description: "The Killers are an American rock band formed in Las Vegas in 2001, known for blending post-punk revival, new wave and synth-driven alternative rock with anthemic songwriting and nostalgic 80s influences.",
    review: "By merging synth-pop textures, sharp guitar riffs and cinematic lyricism, the Killers crafted a distinctive modern rock sound that achieves mainstream appeal. Their debut era defined 2000s alternative rock, while later albums expanded into heartland rock and conceptual storytelling.",
    genres: ["Alternative Rock", "Heartland Rock", "Post-Punk Revival", "New Wave Revival", "Pop Rock", "Active: 2001 – present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTesYNpUZOg41du1MBepiwXee",
    favouriteSongs: {
        "Somebody Told Me": [97, 2004, "https://www.youtube.com/watch?v=Y5fBdpreJiU"],
        "Read My Mind": [95, 2006, "https://www.youtube.com/watch?v=zc8hbSM1zVo"],
        "Mr. Brightside": [94, 2004, "https://www.youtube.com/watch?v=gGdGFtwCNBE"],
        "Human": [91, 2008, "https://www.youtube.com/watch?v=RIZdjT1472Y"],
        "When You Were Young": [89, 2006, "https://www.youtube.com/watch?v=ff0oWESdmH0"],
        "Just Another Girl": [89, 2013, "https://www.youtube.com/watch?v=3BwzP1laWkQ"],
        "A Dustland Fairytale": [88, 2008, "https://www.youtube.com/watch?v=-3hyrkzFRss"],
        "For Reasons Unknown": [86, 2006, "https://www.youtube.com/watch?v=TG5X4kOjEX8"],
        "All These Things That I've Done": [86, 2004, "https://www.youtube.com/watch?v=sZTpLvsYYHw"],
        "Smile Like You Mean It": [85, 2004, "https://www.youtube.com/watch?v=ZAErD8xzjCM"],
    },
    members: [
        { name: "Brandon Flowers", role: "Lead Vocalist | Keyboardist", yearsActive: "2001–present", image: "./images/members/theKillers/Brandon.png" },
        { name: "Dave Keuning", role: "Lead Guitarist", yearsActive: "2001–present (limited touring since 2017)", image: "./images/members/theKillers/Dave.png" },
        { name: "Mark Stoermer", role: "Bassist", yearsActive: "2002–present", image: "./images/members/theKillers/Mark.png" },
        { name: "Ronnie Vannucci Jr.", role: "Drummer", yearsActive: "2002–present", image: "./images/members/theKillers/Ronnie.png" }
    ],
    albums: [
        { name: "Hot Fuss", description: "A landmark debut packed with synth-driven indie rock hits and sharp new wave energy.", year: 2004, image: "./images/albums/theKillers/HotFuss.png" },
        { name: "Sam's Town", description: "A grand and ambitious album embracing heartland rock and cinematic storytelling.", year: 2006, image: "./images/albums/theKillers/SamsTown.png" },
        { name: "Day & Age", description: "A polished synth-pop oriented record with danceable rhythms and anthemic hooks.", year: 2008, image: "./images/albums/theKillers/DayAndAge.png" },
        { name: "Battle Born", description: "A dramatic arena rock album rooted in Americana themes and expansive production.", year: 2012, image: "./images/albums/theKillers/BattleBorn.png" },
        { name: "Wonderful Wonderful", description: "A darker and more introspective album exploring personal and emotional themes.", year: 2017, image: "./images/albums/theKillers/WonderfulWonderful.png" },
        { name: "Imploding the Mirage", description: "A vibrant and uplifting record blending synth rock with nostalgic beauty.", year: 2020, image: "./images/albums/theKillers/ImplodingTheMirage.png" },
        { name: "Pressure Machine", description: "A conceptual album focused on storytelling and small-town life.", year: 2021, image: "./images/albums/theKillers/PressureMachine.png" }
    ]
};




// 24. Billy Idol
const billyIdolData =
{
    id: "billy-idol",
    title: "Billy Idol",
    score: 90,
    image: "./images/background/billyIdolLogo.png",
    description: "Billy Idol is an English rock musician who emerged from the punk scene as a member of Generation X before launching a highly successful solo career in the early 1980s. He became a defining figure of the MTV era, blending punk attitude with new wave, hard rock and pop sensibilities, creating a rebellious yet commercially appealing sound.",
    review: "Billy Idol successfully bridged punk rawness with mainstream rock appeal, delivering iconic anthems driven by attitude, catchy hooks and the signature guitar work of Steve Stevens. His early solo era remains highly influential, defining the sound and image of 80s rock culture, though later releases saw a decline in consistency.",
    genres: ["Hard Rock", "Punk Rock", "New Wave", "Pop Rock", "Active: 1976 – present"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTev7RJUkfms9UbkCWNL917To",
    favouriteSongs: {
        "White Wedding": [98, 1982, "https://www.youtube.com/watch?v=AAZQaYKZMTI"],
        "Rebel Yell": [97, 1983, "https://www.youtube.com/watch?v=VdphvuyaV_I"],
        "Flesh For Fantasy": [95, 1984, "https://www.youtube.com/watch?v=dw1oM7LBbxE"],
        "Dancing With Myself": [94, 1981, "https://www.youtube.com/watch?v=FG1NrQYXjLU"],
        "Eyes Without A Face": [93, 1984, "https://www.youtube.com/watch?v=9OFpfTd0EIs"],
        "Sweet Sixteen": [92, 1986, "https://www.youtube.com/watch?v=ClxXDfvtoj0"],
        "Cradle Of Love": [92, 1990, "https://www.youtube.com/watch?v=NCZuYS-9qaw"],
        "Hot In The City": [89, 1982, "https://www.youtube.com/watch?v=PinBVYKQGeM"],
        "Speed": [86, 1994, "https://www.youtube.com/watch?v=rd-0LtV5Axo"]
    },
    members: [
        { name: "Billy Idol", role: "Lead Vocalist", yearsActive: "1976–present", image: "./images/members/billyIdol/Billy.png" },
        { name: "Steve Stevens", role: "Lead Guitarist", yearsActive: "1979–present", image: "./images/members/billyIdol/Steve.png" },
        { name: "Tony James", role: "Bassist", yearsActive: "1976–1981", image: "./images/members/billyIdol/Tony.png" }
    ],
    albums: [
        { name: "Billy Idol", description: "A strong debut introducing his signature blend of punk energy and new wave polish.", year: 1982, image: "./images/albums/billyIdol/BillyIdol.png" },
        { name: "Rebel Yell", description: "His breakthrough album packed with iconic hits and defining 80s rock production.", year: 1983, image: "./images/albums/billyIdol/RebelYell.png" },
        { name: "Whiplash Smile", description: "A polished follow-up expanding his pop-rock sound with darker undertones.", year: 1986, image: "./images/albums/billyIdol/WhiplashSmile.png" },
        { name: "Charmed Life", description: "A successful late-80s comeback featuring major hits and refined songwriting.", year: 1990, image: "./images/albums/billyIdol/CharmedLife.png" },
        { name: "Cyberpunk", description: "An experimental and controversial album exploring electronic and digital themes.", year: 1993, image: "./images/albums/billyIdol/Cyberpunk.png" },
        { name: "Devil's Playground", description: "A return to his classic rock sound after a long pause.", year: 2005, image: "./images/albums/billyIdol/DevilsPlayground.png" },
        { name: "Kings & Queens of the Underground", description: "A reflective and mature record revisiting his legacy and influences.", year: 2014, image: "./images/albums/billyIdol/KingsQueens.png" },
        { name: "The Roadside (EP)", description: "A modern-era release with a more introspective tone and atmospheric sound.", year: 2021, image: "./images/albums/billyIdol/TheRoadside.png" }
    ]
};




// 25. More: Alternative Rock
const alternativeRockData =
{
    id: "alternative-rock",
    title: "More: Alternative Rock",
    score: 98,
    image: "./images/background/alternativeRockLogo.png",
    description: "A wide-ranging collection drawing from the very best of alternative rock across three decades. From the anthemic melancholy of Keane and No Doubt, to the angular riffs of Kasabian and Franz Ferdinand, to the emotional intensity of Placebo and My Chemical Romance, this playlist captures the diversity, raw honesty and genre-defying spirit that defines alternative rock at its finest.",
    review: "Alternative rock's greatest strength is its refusal to be pinned down. This playlist includes several song features, such as the quiet introspection of R.E.M. and The Cure, the arena-sized angst of Foo Fighters and Twenty One Pilots, as well as the swagger of The White Stripes and Queens of the Stone Age. Although no two songs sound alike, all of them share the same restless and uncompromising energy that makes this genre really powerful.",
    genres: ["Alternative Rock", "Songs span: 1991 - 2015"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTeuZYTB_D880T0jJRk-QEo2z",
    favouriteSongs: {
        "Don't Speak": [99, "No Doubt - 1995", "https://www.youtube.com/watch?v=TR3Vdo5etCQ"],
        "Somewhere Only We Know": [98, "Keane - 2004", "https://www.youtube.com/watch?v=Oextk-If8HQ"],
        "Everybody's Changing": [98, "Keane - 2004", "https://www.youtube.com/watch?v=RSNmgE6L8AU"],
        "Stressed Out": [98, "Twenty One Pilots - 2015", "https://www.youtube.com/watch?v=pXRviuL6vMY"],
        "Song 2": [97, "Blur - 1997", "https://www.youtube.com/watch?v=SSbBvKaM6sk"],
        "Club Foot": [97, "Kasabian - 2004", "https://www.youtube.com/watch?v=lk5iMgG-WJI"],
        "Rock & Roll Queen": [96, "The Subways - 2005", "https://www.youtube.com/watch?v=lLZvJ_rtZO8"],
        "Be Yourself": [96, "Audioslave - 2005", "https://www.youtube.com/watch?v=WC5FdFlUcl0"],
        "Losing My Religion": [95, "R.E.M. - 1991", "https://www.youtube.com/watch?v=xwtdhWltSIg"],
        "Runnin' Down A Dream": [95, "Tom Petty And The Heartbreakers - 1989", "https://www.youtube.com/watch?v=Y1D3a5eDJIs"],
        "Seven Nation Army": [95, "The White Stripes - 2003", "https://www.youtube.com/watch?v=0J2QdDbelmY"],
        "Where Is My Mind?": [94, "Pixies - 1988", "https://www.youtube.com/watch?v=OJ62RzJkYUo"],
        "Every You Every Me": [94, "Placebo - 1999", "https://www.youtube.com/watch?v=OMaycNcPsHI"],
        "The Bitter End": [93, "Placebo - 2003", "https://www.youtube.com/watch?v=-JJAXwAaA2w"],
        "Fly Away": [93, "Lenny Kravitz - 1998", "https://www.youtube.com/watch?v=EvuL5jyCHOw"],
        "No One Knows": [93, "Queens Of The Stone Age - 2002", "https://www.youtube.com/watch?v=s88r_q7oufE"],
        "How You Remind Me": [93, "Nickelback - 2001", "https://www.youtube.com/watch?v=Aiay8I5IPB8"],
        "Iris": [92, "Goo Goo Dolls - 1998", "https://www.youtube.com/watch?v=NdYWuo9OFAw"],
        "Zombie": [92, "The Cranberries - 1994", "https://www.youtube.com/watch?v=95HqlWRFrAk"],
        "Sex On Fire": [92, "Kings Of Leon - 2008", "https://www.youtube.com/watch?v=RF0HhrwIwp0"],
        "Ruby": [91, "Kaiser Chiefs - 2007", "https://www.youtube.com/watch?v=qObzgUfCl28"],
        "In The Shadows": [91, "Rasmus - 2003", "https://www.youtube.com/watch?v=7gwO8-oqwFw"],
        "Friday I'm In Love": [91, "The Cure - 1992", "https://www.youtube.com/watch?v=mGgMZpGYiy"],
        "Teenagers": [91, "My Chemical Romance - 2007", "https://www.youtube.com/watch?v=k6EQAOmJrbw"],
        "The Pretender": [91, "Foo Fighters - 2007", "https://www.youtube.com/watch?v=SBjQ9tuuTJQ"],
        "What's Up": [90, "4 Non Blondes - 1993", "https://www.youtube.com/watch?v=6NXnxTNIWkc"],
        "Are You Gonna Be My Girl": [89, "Jet - 2003", "https://www.youtube.com/watch?v=tuK6n2Lkza0"],
        "The Reason": [89, "Hoobastank - 2003", "https://www.youtube.com/watch?v=fV4DiAyExN0"],
        "Reptilia": [88, "The Strokes - 2003", "https://www.youtube.com/watch?v=b8-tXG8KrWs"],
        "Black Hole Sun": [87, "Soundgarden - 1994", "https://www.youtube.com/watch?v=3mbBbFH9fAg"],
    },
    members: [
        { name: "Gwen Stefani", role: "No Doubt: Lead Vocalist", yearsActive: "1986–2015 and 2024-present", image: "./images/members/alternativeRock/GwenStefani.png" },
        { name: "Tony Kanal", role: "No Doubt: Bassist", yearsActive: "1986–2015 and 2024-present", image: "./images/members/alternativeRock/TonyKanal.png" },
        { name: "Tom Chaplin", role: "Keane: Lead Vocalist", yearsActive: "1995–present", image: "./images/members/alternativeRock/TomChaplin.png" },
        { name: "Tim Rice-Oxley", role: "Keane: Pianist | Keyboardist", yearsActive: "1995–present", image: "./images/members/alternativeRock/TimRiceOxley.png" },
        { name: "Tyler Joseph", role: "Twenty One Pilots: Lead Vocalist | Keyboardist", yearsActive: "2009–present", image: "./images/members/alternativeRock/TylerJoseph.png" },
        { name: "Josh Dun", role: "Twenty One Pilots: Drummer", yearsActive: "2011–present", image: "./images/members/alternativeRock/JoshDun.png" },
        { name: "Damon Albarn", role: "Blur: Lead Vocalist | Keyboardist", yearsActive: "1988–2003 and 2009–2015", image: "./images/members/alternativeRock/DamonAlbarn.png" },
        { name: "Graham Coxon", role: "Blur: Lead Guitarist", yearsActive: "1988–2003 and 2009–2015", image: "./images/members/alternativeRock/GrahamCoxon.png" },
        { name: "Sergio Pizzorno", role: "Kasabian: Lead Guitarist | Vocalist", yearsActive: "1997–present", image: "./images/members/alternativeRock/SergioPizzorno.png" },
        { name: "Chris Edwards", role: "Kasabian: Bassist", yearsActive: "1997–present", image: "./images/members/alternativeRock/ChrisEdwards.png" },
        { name: "Billy Lunn", role: "The Subways: Lead Vocalist | Guitarist", yearsActive: "2003–present", image: "./images/members/alternativeRock/BillyLunn.png" },
        { name: "Charlotte Cooper", role: "The Subways: Bassist | Vocalist", yearsActive: "2003–present", image: "./images/members/alternativeRock/CharlotteCooper.png" },
        { name: "Chris Cornell", role: "Audioslave: Lead Vocalist", yearsActive: "2001–2007", image: "./images/members/alternativeRock/ChrisCornellAudioslave.png" },
        { name: "Tom Morello", role: "Audioslave: Lead Guitarist", yearsActive: "2001–2007", image: "./images/members/alternativeRock/TomMorello.png" },
        { name: "Michael Stipe", role: "R.E.M.: Lead Vocalist", yearsActive: "1980–2011", image: "./images/members/alternativeRock/MichaelStipe.png" },
        { name: "Peter Buck", role: "R.E.M.: Lead Guitarist", yearsActive: "1980–2011", image: "./images/members/alternativeRock/PeterBuck.png" },
        { name: "Tom Petty", role: "Tom Petty And The Heartbreakers: Lead Vocalist | Guitarist", yearsActive: "1976–2017", image: "./images/members/alternativeRock/TomPetty.png" },
        { name: "Mike Campbell", role: "Tom Petty And The Heartbreakers: Lead Guitarist", yearsActive: "1976–2017", image: "./images/members/alternativeRock/MikeCampbell.png" },
        { name: "Jack White", role: "The White Stripes: Vocalist | Guitarist", yearsActive: "1997–2011", image: "./images/members/alternativeRock/JackWhite.png" },
        { name: "Meg White", role: "The White Stripes: Drummer", yearsActive: "1997–2011", image: "./images/members/alternativeRock/MegWhite.png" },
        { name: "Black Francis", role: "Pixies: Lead Vocalist | Rhythm Guitarist", yearsActive: "1986–1993 and 2004–present", image: "./images/members/alternativeRock/BlackFrancis.png" },
        { name: "Joey Santiago", role: "Pixies: Lead Guitarist", yearsActive: "1986–1993 and 2004–present", image: "./images/members/alternativeRock/JoeySantiago.png" },
        { name: "Brian Molko", role: "Placebo: Lead Vocalist | Guitarist", yearsActive: "1994–present", image: "./images/members/alternativeRock/BrianMolko.png" },
        { name: "Stefan Olsdal", role: "Placebo: Bassist | Keyboardist", yearsActive: "1994–present", image: "./images/members/alternativeRock/StefanOlsdal.png" },
        { name: "Lenny Kravitz", role: "Vocalist | Multi-Instrumentalist", yearsActive: "1987–present", image: "./images/members/alternativeRock/LennyKravitz.png" },
        { name: "Josh Homme", role: "Queens Of The Stone Age: Lead Vocalist | Guitarist", yearsActive: "1996–present", image: "./images/members/alternativeRock/JoshHomme.png" },
        { name: "Troy Van Leeuwen", role: "Queens Of The Stone Age: Lead Guitarist", yearsActive: "2002–present", image: "./images/members/alternativeRock/TroyVanLeeuwen.png" },
        { name: "Chad Kroeger", role: "Nickelback: Lead Vocalist | Guitarist", yearsActive: "1995–present", image: "./images/members/alternativeRock/ChadKroeger.png" },
        { name: "Ryan Peake", role: "Nickelback: Rhythm Guitarist", yearsActive: "1995–present", image: "./images/members/alternativeRock/RyanPeake.png" },
        { name: "Johnny Rzeznik", role: "Goo Goo Dolls: Lead Vocalist | Guitarist", yearsActive: "1986–present", image: "./images/members/alternativeRock/JohnnyRzeznik.png" },
        { name: "Robby Takac", role: "Goo Goo Dolls: Bassist | Vocalist", yearsActive: "1986–present", image: "./images/members/alternativeRock/RobbyTakac.png" },
        { name: "Dolores O'Riordan", role: "The Cranberries: Lead Vocalist", yearsActive: "1990–2019", image: "./images/members/alternativeRock/DoloresORiordan.png" },
        { name: "Noel Hogan", role: "The Cranberries: Lead Guitarist", yearsActive: "1989–2019", image: "./images/members/alternativeRock/NoelHogan.png" },
        { name: "Caleb Followill", role: "Kings Of Leon: Lead Vocalist | Rhythm Guitarist", yearsActive: "1999–present", image: "./images/members/alternativeRock/CalebFollowill.png" },
        { name: "Matthew Followill", role: "Kings Of Leon: Lead Guitarist", yearsActive: "1999–present", image: "./images/members/alternativeRock/MatthewFollowill.png" },
        { name: "Ricky Wilson", role: "Kaiser Chiefs: Lead Vocalist", yearsActive: "2000–present", image: "./images/members/alternativeRock/RickyWilson.png" },
        { name: "Andrew White", role: "Kaiser Chiefs: Lead Guitarist", yearsActive: "2000–present", image: "./images/members/alternativeRock/AndrewWhite.png" },
        { name: "Lauri Ylönen", role: "Rasmus: Lead Vocalist", yearsActive: "1994–present", image: "./images/members/alternativeRock/LauriYlonen.png" },
        { name: "Pauli Rantasalmi", role: "Rasmus: Lead Guitarist", yearsActive: "1994–present", image: "./images/members/alternativeRock/PauliRantasalmi.png" },
        { name: "Robert Smith", role: "The Cure: Lead Vocalist | Guitarist", yearsActive: "1976–present", image: "./images/members/alternativeRock/RobertSmith.png" },
        { name: "Simon Gallup", role: "The Cure: Bassist", yearsActive: "1979–present", image: "./images/members/alternativeRock/SimonGallup.png" },
        { name: "Gerard Way", role: "My Chemical Romance: Lead Vocalist", yearsActive: "2001–2013 and 2019–present", image: "./images/members/alternativeRock/GerardWay.png" },
        { name: "Frank Iero", role: "My Chemical Romance: Rhythm Guitarist", yearsActive: "2002–2013 and 2019–present", image: "./images/members/alternativeRock/FrankIero.png" },
        { name: "Dave Grohl", role: "Foo Fighters: Lead Vocalist | Guitarist", yearsActive: "1994–present", image: "./images/members/alternativeRock/DaveGrohl.png" },
        { name: "Nate Mendel", role: "Foo Fighters: Bassist", yearsActive: "1995–present", image: "./images/members/alternativeRock/NateMendel.png" },
        { name: "Linda Perry", role: "4 Non Blondes: Lead Vocalist", yearsActive: "1989–1994", image: "./images/members/alternativeRock/LindaPerry.png" },
        { name: "Nic Cester", role: "Jet: Lead Vocalist | Guitarist", yearsActive: "2001–2012 and 2017–present", image: "./images/members/alternativeRock/NicCester.png" },
        { name: "Cameron Muncey", role: "Jet: Lead Guitarist", yearsActive: "2001–2012 and 2017–present", image: "./images/members/alternativeRock/CameronMuncey.png" },
        { name: "Doug Robb", role: "Hoobastank: Lead Vocalist", yearsActive: "1994–present", image: "./images/members/alternativeRock/DougRobb.png" },
        { name: "Dan Estrin", role: "Hoobastank: Lead Guitarist", yearsActive: "1994–present", image: "./images/members/alternativeRock/DanEstrin.png" },
        { name: "Julian Casablancas", role: "The Strokes: Lead Vocalist", yearsActive: "1998–present", image: "./images/members/alternativeRock/JulianCasablancas.png" },
        { name: "Nick Valensi", role: "The Strokes: Lead Guitarist", yearsActive: "1998–present", image: "./images/members/alternativeRock/NickValensi.png" },
        { name: "Chris Cornell", role: "Soundgarden: Lead Vocalist", yearsActive: "1984–1997 and 2010–2017", image: "./images/members/alternativeRock/ChrisCornellSoundgarden.png" },
        { name: "Kim Thayil", role: "Soundgarden: Lead Guitarist", yearsActive: "1984–1997 and 2010–2017", image: "./images/members/alternativeRock/KimThayil.png" }
    ],
    albums: [
        { name: "Tragic Kingdom", description: "No Doubt", year: 1995, image: "./images/albums/alternativeRock/TragicKingdom.png" },
        { name: "Hopes and Fears", description: "Keane", year: 2004, image: "./images/albums/alternativeRock/HopesAndFears.png" },
        { name: "Blurryface", description: "Twenty One Pilots", year: 2015, image: "./images/albums/alternativeRock/Blurryface.png" },
        { name: "Blur", description: "Blur", year: 1997, image: "./images/albums/alternativeRock/Blur.png" },
        { name: "Kasabian", description: "Kasabian", year: 2004, image: "./images/albums/alternativeRock/Kasabian.png" },
        { name: "Young For Eternity", description: "The Subways", year: 2005, image: "./images/albums/alternativeRock/YoungForEternity.png" },
        { name: "Revelations", description: "Audioslave", year: 2006, image: "./images/albums/alternativeRock/Revelations.png" },
        { name: "Automatic For The People", description: "R.E.M.", year: 1992, image: "./images/albums/alternativeRock/AutomaticForThePeople.png" },
        { name: "Full Moon Fever", description: "Tom Petty And The Heartbreakers", year: 1989, image: "./images/albums/alternativeRock/FullMoonFever.png" },
        { name: "Elephant", description: "The White Stripes", year: 2003, image: "./images/albums/alternativeRock/Elephant.png" },
        { name: "Doolittle", description: "Pixies", year: 1989, image: "./images/albums/alternativeRock/Doolittle.png" },
        { name: "Without You I'm Nothing", description: "Placebo", year: 1998, image: "./images/albums/alternativeRock/WithoutYouImNothing.png" },
        { name: "Greatest Hits", description: "Lenny Kravitz", year: 2000, image: "./images/albums/alternativeRock/LennyKravitzGreatestHits.png" },
        { name: "Songs For The Deaf", description: "Queens Of The Stone Age", year: 2002, image: "./images/albums/alternativeRock/SongsForTheDeaf.png" },
        { name: "Silver Side Up", description: "Nickelback", year: 2001, image: "./images/albums/alternativeRock/SilverSideUp.png" },
        { name: "Dizzy Up The Girl", description: "Goo Goo Dolls", year: 1998, image: "./images/albums/alternativeRock/DizzyUpTheGirl.png" },
        { name: "No Need To Argue", description: "The Cranberries", year: 1994, image: "./images/albums/alternativeRock/NoNeedToArgue.png" },
        { name: "Only By The Night", description: "Kings Of Leon", year: 2008, image: "./images/albums/alternativeRock/OnlyByTheNight.png" },
        { name: "Yours Truly, Angry Mob", description: "Kaiser Chiefs", year: 2007, image: "./images/albums/alternativeRock/YoursTrulyAngryMob.png" },
        { name: "Dead Letters", description: "Rasmus", year: 2003, image: "./images/albums/alternativeRock/DeadLetters.png" },
        { name: "Disintegration", description: "The Cure", year: 1989, image: "./images/albums/alternativeRock/Disintegration.png" },
        { name: "The Black Parade", description: "My Chemical Romance", year: 2006, image: "./images/albums/alternativeRock/TheBlackParade.png" },
        { name: "Echoes Silence Patience & Grace", description: "Foo Fighters", year: 2007, image: "./images/albums/alternativeRock/EchoesSilencePatience.png" },
        { name: "Bigger Better Faster More!", description: "4 Non Blondes", year: 1992, image: "./images/albums/alternativeRock/BiggerBetterFasterMore.png" },
        { name: "Get Born", description: "Jet", year: 2003, image: "./images/albums/alternativeRock/GetBorn.png" },
        { name: "The Reason", description: "Hoobastank", year: 2003, image: "./images/albums/alternativeRock/TheReason.png" },
        { name: "Room On Fire", description: "The Strokes", year: 2003, image: "./images/albums/alternativeRock/RoomOnFire.png" },
        { name: "Superunknown", description: "Soundgarden", year: 1994, image: "./images/albums/alternativeRock/Superunknown.png" }
    ]
};




// 26. More: Classic Rock
const classicRockData =
{
    id: "classic-rock",
    title: "More: Classic Rock",
    score: 97,
    image: "./images/background/classicRockLogo.png",
    description: "A grand tour through the golden age of rock and roll, spanning from the raw British Invasion energy of The Animals and the psychedelic mysticism of The Doors, to the stadium-filling anthems of Led Zeppelin, Eagles and Toto. This playlist brings together the songwriters, guitarists and visionaries who built the foundations of modern rock music across three unforgettable decades.",
    review: "Classic rock is the genre that proved rock music could be both enormously popular and artistically ambitious. From the blues-rooted riffs of Led Zeppelin to the meticulous songcraft of Dire Straits and from the cinematic sweep of Toto to the swaggering cool of the Rolling Stones, every track here is a true landmark. A playlist that doesn't just represent classic rock - it defines it.",
    genres: ["Classic Rock", "Songs span: 1964 - 1998"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTeujIFAhSQWdPiow-Rsbi4ph",
    favouriteSongs: {
        "Hotel California": [98, "Eagles - 1977", "https://www.youtube.com/watch?v=dLl4PZtxia8"],
        "Sympathy For The Devil": [97, "Rolling Stones - 1968", "https://www.youtube.com/watch?v=GgnClrx8N2k"],
        "Paint It Black": [96, "Rolling Stones - 1966", "https://www.youtube.com/watch?v=O4irXQhgMqg"],
        "Gimme Shelter": [96, "Rolling Stones - 1970", "https://www.youtube.com/watch?v=RbmS3tQJ7Os"],
        "Kashmir": [96, "Led Zeppelin - 1975", "https://www.youtube.com/watch?v=ww9484EM2OQ"],
        "I Just Died In Your Arms": [96, "Cutting Crew - 1986", "https://www.youtube.com/watch?v=6dOwHzCHfgA"],
        "Narcotic": [95, "Liquido - 1998", "https://www.youtube.com/watch?v=PJ7E40Ec5ec"],
        "Sultans Of Swing": [95, "Dire Straits - 1978", "https://www.youtube.com/watch?v=h0ffIJ7ZO4U"],
        "I'm Still Standing": [95, "Elton John - 1983", "https://www.youtube.com/watch?v=ZHwVBirqD2s"],
        "House Of The Rising Sun": [95, "The Animals - 1964", "https://www.youtube.com/watch?v=4-43lLKaqBQ"],
        "Stairway To Heaven": [95, "Led Zeppelin - 1971", "https://www.youtube.com/watch?v=Lx2kjji1gKc"],
        "Hold The Line": [95, "Toto - 1978", "https://www.youtube.com/watch?v=htgr3pvBr-I"],
        "Moonchild": [95, "Rory Gallagher - 1976", "https://www.youtube.com/watch?v=-DVbP8pun0I"],
        "I Don't Want To Miss A Thing": [95, "Aerosmith - 1998", "https://www.youtube.com/watch?v=bn8QPRYWAdk"],
        "Walk Of Life": [94, "Dire Straits - 1985", "https://www.youtube.com/watch?v=kd9TlGDZGkI"],        
        "Dust In The Wind": [94, "Kansas - 1977", "https://www.youtube.com/watch?v=tH2w6Oxx0kQ"],
        "Africa": [94, "Toto - 1982", "https://www.youtube.com/watch?v=FTQbiNvZqaY"],
        "Space Oddity": [94, "David Bowie - 1969", "https://www.youtube.com/watch?v=iYYRH4apXDo"],
        "Money For Nothing": [93, "Dire Straits - 1985", "https://www.youtube.com/watch?v=wTP2RUD_cL0"],
        "Starman": [93, "David Bowie - 1972", "https://www.youtube.com/watch?v=t365MuktYQs"],
        "Riders On The Storm": [93, "The Doors - 1971", "https://www.youtube.com/watch?v=1hrgT_ZDUvs"],
        "Free Bird": [93, "Lynyrd Skynyrd - 1974", "https://www.youtube.com/watch?v=MQNRKX8GwPo"],
        "Angie": [92, "Rolling Stones - 1973", "https://www.youtube.com/watch?v=RcZn2-bGXqQ"],
        "Shadow Play": [92, "Rory Gallagher - 1978", "https://www.youtube.com/watch?v=m04dNK-e7pQ"],
        "Have You Ever Seen The Rain": [92, "Creedence Clearwater Revival - 1970", "https://www.youtube.com/watch?v=u1V8YRJnr4Q"],
        "Don't Stop Believin'": [92, "Journey - 1981", "https://www.youtube.com/watch?v=1k8craCGpgs"],
        "Smoke On The Water": [92, "Deep Purple - 1973", "https://www.youtube.com/watch?v=Q2FzZSBD5LE"],
        "Child On Time": [92, "Deep Purple - 1970", "https://www.youtube.com/watch?v=PfAWReBmxEs"],
        "Black Betty": [91, "Ram Jam - 1977", "https://www.youtube.com/watch?v=I_2D8Eo15wE"],
        "Rosanna": [91, "Toto - 1982", "https://www.youtube.com/watch?v=qmOLtTGvsbM"],
        "Whole Lotta Love": [90, "Led Zeppelin - 1969", "https://www.youtube.com/watch?v=HQmmM_qwG4k"],
        "Fortunate Son": [90, "Creedence Clearwater Revival - 1969", "https://www.youtube.com/watch?v=ZWijx_AgPiA"],
        "Sweet Home Alabama": [90, "Lynyrd Skynyrd - 1974", "https://www.youtube.com/watch?v=-p8GXZcdrIk"],
        "Rocket Man": [90, "Elton John - 1972", "https://www.youtube.com/watch?v=DtVBCG6ThDk"],    
        "Should I Stay Or Should I Go": [89, "The Clash - 1982", "https://www.youtube.com/watch?v=BN1WwnEDWAM"],
        "Carry On Wayward Son": [88, "Kansas - 1976", "https://www.youtube.com/watch?v=P5ZJui3aPoQ"]
    },
    members: [
        { name: "Steven Tyler", role: "Aerosmith: Lead Vocalist", yearsActive: "1970–present", image: "./images/members/classicRock/StevenTyler.png" },
        { name: "Tom Hamilton", role: "Aerosmith: Bassist", yearsActive: "1970–present", image: "./images/members/classicRock/TomHamilton.png" },
        { name: "John Fogerty", role: "Creedence Clearwater Revival: Lead Vocalist | Lead Guitarist", yearsActive: "1959–present", image: "./images/members/classicRock/JohnFogerty.png" },
        { name: "Doug Clifford", role: "Creedence Clearwater Revival: Drummer", yearsActive: "1959–present", image: "./images/members/classicRock/DougClifford.png" },
        { name: "Nick Van Eede", role: "Cutting Crew: Lead Vocalist", yearsActive: "1985-present", image: "./images/members/classicRock/NickVanEede.png" },
        { name: "Kevin MacMichael", role: "Cutting Crew: Lead Guitarist", yearsActive: "1985-2002", image: "./images/members/classicRock/KevinMacMichael.png" },
        { name: "David Bowie", role: "Vocalist", yearsActive: "1962-2016", image: "./images/members/classicRock/DavidBowie.png" },
        { name: "Ian Paice", role: "Deep Purple: Drummer", yearsActive: "1968–1976 and 1984–present", image: "./images/members/classicRock/IanPaice.png" },
        { name: "Roger Glover", role: "Deep Purple: Bassist", yearsActive: "1968–1973 and 1984–present", image: "./images/members/classicRock/RogerGlover.png" },
        { name: "Mark Knopfler", role: "Dire Straits: Lead Vocalist | Lead Guitarist", yearsActive: "1977–1988 and 1990–1995", image: "./images/members/classicRock/MarkKnopfler.png" },
        { name: "John Illsley", role: "Dire Straits: Bassist", yearsActive: "1977–1988 and 1990–1995", image: "./images/members/classicRock/JohnIllsley.png" },
        { name: "Don Henley", role: "Eagles: Vocalist | Drummer", yearsActive: "1971–1980 and 1994–present", image: "./images/members/classicRock/DonHenley.png" },
        { name: "Joe Walsh", role: "Eagles: Lead Guitarist", yearsActive: "1971–1980 and 1994–present", image: "./images/members/classicRock/JoeWalsh.png" },
        { name: "Elton John", role: "Vocalist", yearsActive: "1962-present", image: "./images/members/classicRock/EltonJohn.png" },
        { name: "Neal Schon", role: "Journey: Lead Guitarist", yearsActive: "1973–1987 and 1995–present", image: "./images/members/classicRock/NealSchon.png" },
        { name: "Jonathan Cain", role: "Journey: Keyboardist | Rhythm Guitarist", yearsActive: "1973–1987 and 1995–present", image: "./images/members/classicRock/JonathanCain.png" },
        { name: "Phil Ehart", role: "Kansas: Drummer", yearsActive: "1973-present", image: "./images/members/classicRock/PhilEhart.png" },
        { name: "Rich Williams", role: "Kansas: Guitarist", yearsActive: "1973-present", image: "./images/members/classicRock/RichWilliams.png" },
        { name: "Robert Plant", role: "Led Zeppelin: Lead Vocalist", yearsActive: "1968-1980 and 1985,1995,2007", image: "./images/members/classicRock/RobertPlant.png" },
        { name: "Jimmy Page", role: "Led Zeppelin: Lead Guitarist", yearsActive: "1968-1980 and 1985,1995,2007", image: "./images/members/classicRock/JimmyPage.png" },
        { name: "Johnny Van Zant", role: "Lynyrd Skynyrd: Lead Vocalist", yearsActive: "1987–present", image: "./images/members/classicRock/JohnnyVanZant.png" },
        { name: "Rickey Medlocke", role: "Lynyrd Skynyrd: Guitarist", yearsActive: "1971–1972, 1979 and 1996–present", image: "./images/members/classicRock/RickeyMedlocke.png" },
        { name: "Bill Bartlett", role: "Ram Jam: Lead Vocalist | Lead Guitarist", yearsActive: "1977-1978", image: "./images/members/classicRock/BillBartlett.png" },
        { name: "Mick Jagger", role: "Rolling Stones: Lead Vocalist", yearsActive: "1962–present", image: "./images/members/classicRock/MickJagger.png" },
        { name: "Keith Richards", role: "Rolling Stones: Lead Guitarist", yearsActive: "1962–present", image: "./images/members/classicRock/KeithRichards.png" },
        { name: "Rory Gallagher", role: "Vocalist | Guitarist", yearsActive: "1963-1995", image: "./images/members/classicRock/RoryGallagher.png" },
        { name: "Eric Burdon", role: "The Animals: Lead Vocalist", yearsActive: "1962–1969, 1975–1977 and 1992–present", image: "./images/members/classicRock/EricBurdon.png" },
        { name: "Joe Strummer", role: "The Clash: Lead Vocalist", yearsActive: "1976–1986", image: "./images/members/classicRock/JoeStrummer.png" },
        { name: "Mick Jones", role: "The Clash: Lead Guitarist", yearsActive: "1976–1986", image: "./images/members/classicRock/MickJones.png" },
        { name: "Jim Morrison", role: "The Doors: Lead Vocalist", yearsActive: "1965–1971", image: "./images/members/classicRock/JimMorrison.png" },
        { name: "John Densmore", role: "The Doors: Drummer", yearsActive: "1965–1973", image: "./images/members/classicRock/JohnDensmore.png" },
        { name: "David Paich", role: "Toto: Keyboardist | Secondary Vocalist", yearsActive: "1977–2008 and 2010–present", image: "./images/members/classicRock/DavidPaich.png" },
        { name: "Steve Lukather", role: "Toto: Lead Guitarist", yearsActive: "1977–2008 and 2010–present", image: "./images/members/classicRock/SteveLukather.png" },
        { name: "Joseph Williams", role: "Toto: Lead Vocalist", yearsActive: "1986-1988 and 2010–present", image: "./images/members/classicRock/JosephWilliams.png" }   
    ],
    albums: [
        { name: "Get A Grip", description: "Aerosmith", year: 1993, image: "./images/albums/classicRock/GetAGrip.png" },
        { name: "Cosmos Factory", description: "Creedence Clearwater Revival", year: 1970, image: "./images/albums/classicRock/CosmosFactory.png" },
        { name: "Broadcast", description: "Cutting Crew", year: 1986, image: "./images/albums/classicRock/Broadcast.png" },
        { name: "The Rise And Fall Of Ziggy Stardust", description: "David Bowie", year: 1972, image: "./images/albums/classicRock/TheRiseAndFallOfZiggyStardust.png" },
        { name: "Machine Head", description: "Deep Purple", year: 1972, image: "./images/albums/classicRock/MachineHead.png" },
        { name: "Brothers In Arms", description: "Dire Straits", year: 1985, image: "./images/albums/classicRock/BrothersInArms.png" },
        { name: "Hotel California", description: "Eagles", year: 1976, image: "./images/albums/classicRock/HotelCalifornia.png" },
        { name: "Goodbye Yellow Brick Road", description: "Elton John", year: 1973, image: "./images/albums/classicRock/GoodbyeYellowBrickRoad.png" },
        { name: "Escape", description: "Journey", year: 1981, image: "./images/albums/classicRock/Escape.png" },
        { name: "Leftoverture", description: "Kansas", year: 1976, image: "./images/albums/classicRock/Leftoverture.png" },
        { name: "Led Zeppelin IV", description: "Led Zeppelin", year: 1971, image: "./images/albums/classicRock/LedZeppelinIV.png"},
        { name: "Liquido", description: "Liquido", year: 1999, image: "./images/albums/classicRock/Liquido.png" },
        { name: "Lynyrd Skynyrd", description: "Lynyrd Skynyrd", year: 1973, image: "./images/albums/classicRock/LynyrdSkynyrd.png" },
        { name: "Ram Jam", description: "Ram Jam", year: 1977, image: "./images/albums/classicRock/RamJam.png" },
        { name: "Exile On Main St.", description: "Rolling Stones", year: 1972, image: "./images/albums/classicRock/ExileOnMainSt.png" },
        { name: "Taste", description: "Rory Gallagher", year: 1969, image: "./images/albums/classicRock/Taste.png" },
        { name: "The Animals", description: "The Animals", year: 1964, image: "./images/albums/classicRock/TheAnimals.png" },
        { name: "London Calling", description: "The Clash", year: 1979, image: "./images/albums/classicRock/LondonCalling.png" },
        { name: "The Doors", description: "The Doors", year: 1967, image: "./images/albums/classicRock/TheDoors.png" },
        { name: "Toto IV", description: "Toto", year: 1982, image: "./images/albums/classicRock/TotoIV.png" }
    ]
};




// 27. More: Hard Rock
const hardRockData =
{
    id: "hard-rock",
    title: "More: Hard Rock",
    score: 96,
    image: "./images/background/hardRockLogo.png",
    description: "A dynamic collection celebrating the most electrifying artists in hard rock history. Among the tracks, one can enjoy the ZZ Top's Texas blues swagger, the sinister edge of Alice Cooper, the coolness of Iggy Pop and the psychedelic thunder of Steppenwolf. The playlist is a relentless celebration of high-voltage rock at its most primal form.",
    review: "Hard rock has always been about energy, attitude and the power of a great riff. This playlist has all three in abundance. Whether it's the surgical handles of Blue Öyster Cult or the arena-ready anthems of Kiss, every track here hits hard. A playlist that captures the sheer physical force that has made hard rock one of the most enduring genres in music history.",
    genres: ["Hard Rock", "Songs span: 1968 - 2012"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTes_Y8OXVsT1w8zYi13eYb2p",
    favouriteSongs: {
        "(Don't Fear) The Reaper": [96, "Blue Öyster Cult - 1976", "https://www.youtube.com/watch?v=Dy4HA3vUv2c"],
        "Take Me Out": [95, "Franz Ferdinand - 2004", "https://www.youtube.com/watch?v=Ijk4j-r7qPA"],
        "La Grange": [95, "ZZ Top - 1973", "https://www.youtube.com/watch?v=fnwZeLdLPdQ"],
        "Sharp Dressed Man": [94, "ZZ Top - 1983", "https://www.youtube.com/watch?v=7wRHBLwpASw"],
        "Anastasia": [93, "Slash ft Myles Kennedy and The Conspirators - 2012", "https://www.youtube.com/watch?v=sWljWFSdx_g"],
        "The Passenger": [93, "Iggy Pop - 1977", "https://www.youtube.com/watch?v=-fWw7FE9tTo"],
        "Poison": [92, "Alice Cooper - 1989", "https://www.youtube.com/watch?v=Qq4j1LtCdww"],
        "I Was Made For Lovin' You": [91, "Kiss - 1979", "https://www.youtube.com/watch?v=ZhIsAZO5gl0"],
        "Born To Be Wild": [90, "Steppenwolf - 1968", "https://www.youtube.com/watch?v=egMWlD3fLJ8"],
        "Lick It Up": [90, "Kiss - 1983", "https://www.youtube.com/watch?v=Gcj34XixuYg"]
    },
    members: [
        { name: "Buck Dharma", role: "Blue Öyster Cult: Guitarist", yearsActive: "1967-present", image: "./images/members/hardRock/BuckDharma.png" },
        { name: "Eric Bloom", role: "Blue Öyster Cult: Lead Vocalist", yearsActive: "1972-present", image: "./images/members/hardRock/EricBloom.png" },
        { name: "Alex Kapranos", role: "Franz Ferdinand: Lead Vocalist", yearsActive: "2002-present", image: "./images/members/hardRock/AlexKapranos.png" },
        { name: "Bob Hardy", role: "Franz Ferdinand: Bassist", yearsActive: "2002-present", image: "./images/members/hardRock/BobHardy.png" },
        { name: "Billy Gibbons", role: "ZZ Top: Lead Vocalist | Guitarist", yearsActive: "1969–present", image: "./images/members/hardRock/BillyGibbons.png" },
        { name: "Frank Beard", role: "ZZ Top: Drummer", yearsActive: "1969–present", image: "./images/members/hardRock/FrankBeard.png" },
        { name: "Elwood Francis", role: "ZZ Top: Bassist", yearsActive: "2021–present", image: "./images/members/hardRock/ElwoodFrancis.png" },
        { name: "Dusty Hill", role: "ZZ Top: Bassist", yearsActive: "1969–2021", image: "./images/members/hardRock/DustyHill.png" },
        { name: "Slash", role: "Slash ft Myles Kennedy and The Conspirators: Lead Guitarist", yearsActive: "2009-present", image: "./images/members/hardRock/Slash.png" },
        { name: "Myles Kennedy", role: "Slash ft Myles Kennedy and The Conspirators: Lead Vocalist", yearsActive: "2009-present", image: "./images/members/hardRock/MylesKennedy.png" },
        { name: "Iggy Pop", role: "Vocalist", yearsActive: "1963–present", image: "./images/members/hardRock/IggyPop.png" },
        { name: "Alice Cooper", role: "Vocalist", yearsActive: "1964–present", image: "./images/members/hardRock/AliceCooper.png" },
        { name: "Paul Stanley", role: "Kiss: Lead Vocalist | Rhythm Guitarist", yearsActive: "1973–2023 and 2025", image: "./images/members/hardRock/PaulStanley.png" },
        { name: "Gene Simmons", role: "Kiss: Bassist", yearsActive: "1973–2023 and 2025", image: "./images/members/hardRock/GeneSimmons.png" },
        { name: "John Kay", role: "Steppenwolf: Lead Vocalist", yearsActive: "1967–1972, 1974–1976 and 1980–2018", image: "./images/members/hardRock/JohnKay.png" },
        { name: "Nick St. Nicholas", role: "Steppenwolf: Bassist", yearsActive: "1967–1972, 1974–1976 and 1980–2018", image: "./images/members/hardRock/NickStNicholas.png" }
    ],
    albums: [
        { name: "Agents of Fortune", description: "Blue Öyster Cult", year: 1976, image: "./images/albums/hardRock/AgentsOfFortune.png" },
        { name: "Franz Ferdinand", description: "Franz Ferdinand", year: 2004, image: "./images/albums/hardRock/FranzFerdinand.png" },
        { name: "Tres Hombres", description: "ZZ Top", year: 1973, image: "./images/albums/hardRock/TresHombres.png" },
        { name: "Eliminator", description: "ZZ Top", year: 1983, image: "./images/albums/hardRock/Eliminator.png" },
        { name: "Apocalyptic Love", description: "Slash ft Myles Kennedy and The Conspirators", year: 2012, image: "./images/albums/hardRock/ApocalypticLove.png" },
        { name: "Lust for Life", description: "Iggy Pop", year: 1977, image: "./images/albums/hardRock/LustForLife.png" },
        { name: "Billion Dollar Babies", description: "Alice Cooper", year: 1973, image: "./images/albums/hardRock/BillionDollarBabies.png" },
        { name: "Trash", description: "Alice Cooper", year: 1989, image: "./images/albums/hardRock/Trash.png" },
        { name: "Destroyer", description: "Kiss", year: 1976, image: "./images/albums/hardRock/Destroyer.png" },
        { name: "Love Gun", description: "Kiss", year: 1977, image: "./images/albums/hardRock/LoveGun.png" },
        { name: "Dynasty", description: "Kiss", year: 1979, image: "./images/albums/hardRock/Dynasty.png" },
        { name: "Steppenwolf", description: "Steppenwolf", year: 1968, image: "./images/albums/hardRock/Steppenwolf.png" }
    ]
};




// 28. More: Metal
const metalData =
{
    id: "metal",
    title: "More: Metal",
    score: 95,
    image: "./images/background/metalLogo.png",
    description: "A powerful and emotionally charged collection spanning the heaviest and most intense corners of the metal world. From Black Sabbath's pioneering doom to Evanescence's orchestral gothic metal, this playlist represents metal in all its raw, aggressive and deeply human forms.",
    review: "Metal at its best is catharsis, with this playlist delivering that in full. Whether it's the symphonic grandeur of Savatage, the righteous fury of Rage Against The Machine or the desperate sincerity of Papa Roach and Three Days Grace, every song here carries a real emotional weight. This is music that hits hardest when life hits hardest.",
    genres: ["Metal", "Heavy Metal", "Songs span: 1970 - 2015"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTeu38ZhBk2L--103IZC1Fyhz",
    favouriteSongs: {
        "Christmas Eve / Sarajevo": [100, "Savatage - 1995", "https://www.youtube.com/watch?v=yZSWKB1_o4E"],
        "Bring Me To Life": [97, "Evanescence - 2003", "https://www.youtube.com/watch?v=3YxaaGgTQYM"],
        "Last Resort": [96, "Papa Roach - 2000", "https://www.youtube.com/watch?v=j0lSpNtjPM8"],
        "The Sound Of Silence": [95, "Disturbed - 2015", "https://www.youtube.com/watch?v=u9Dg-g7t2l4"],
        "Killing In The Name": [94, "Rage Against The Machine - 1992", "https://www.youtube.com/watch?v=bWXazVhlyxQ"],
        "Sweet Dreams": [93, "Marilyn Manson Version - 1995", "https://www.youtube.com/watch?v=QUvVdTlA23w"],
        "The Kids Aren't Alright": [93, "The Offspring - 1999", "https://www.youtube.com/watch?v=7iNbnineUCI"],
        "Iron Man": [93, "Black Sabbath - 1970", "https://www.youtube.com/watch?v=8aQRq9hhekA"],
        "Paranoid": [92, "Black Sabbath - 1970", "https://www.youtube.com/watch?v=0qanF-91aJo"],
        "Lithium": [90, "Evanescence - 2006", "https://www.youtube.com/watch?v=PJGpsL_XYQI"],
        "I Hate Everything About You": [89, "Three Days Grace - 2003", "https://www.youtube.com/watch?v=d8ekz_CSBVg"],
        "My Immortal": [88, "Evanescence - 2003", "https://www.youtube.com/watch?v=5anLPw0Efmo"],
    },
    members: [
        { name: "Jon Oliva", role: "Savatage: Keyboardist", yearsActive: "1978–2002 and 2014-present", image: "./images/members/metal/JonOliva.png" },
        { name: "Johnny Lee Middleton", role: "Savatage: Bassist", yearsActive: "1978–2002 and 2014-present", image: "./images/members/metal/JohnnyLeeMiddleton.png" },
        { name: "Chris Caffery", role: "Savatage: Lead Guitarist", yearsActive: "1978–2002 and 2014-present", image: "./images/members/metal/ChrisCaffery.png" },
        { name: "Amy Lee", role: "Evanescence: Lead Vocalist", yearsActive: "1995–present", image: "./images/members/metal/AmyLee.png" },
        { name: "Tim McCord", role: "Evanescence: Bassist | Guitarist", yearsActive: "1995–present", image: "./images/members/metal/TimMcCord.png" },
        { name: "Jacoby Shaddix", role: "Papa Roach: Lead Vocalist", yearsActive: "1993-present", image: "./images/members/metal/JacobyShaddix.png" },
        { name: "Marilyn Manson", role: "Vocalist", yearsActive: "1989–present", image: "./images/members/metal/MarilynManson.png" },
        { name: "Ozzy Osbourne", role: "Black Sabbath: Lead Vocalist", yearsActive: "1968–2006, 2011–2017 and 2025", image: "./images/members/metal/OzzyOsbourne.png" },
        { name: "Tony Iommi", role: "Black Sabbath: Lead Guitarist", yearsActive: "1968–2006, 2011–2017 and 2025", image: "./images/members/metal/TonyIommi.png" },
        { name: "Geezer Butler", role: "Black Sabbath: Bassist", yearsActive: "1968–2006, 2011–2017 and 2025", image: "./images/members/metal/GeezerButler.png" },
        { name: "Bill Ward", role: "Black Sabbath: Drummer", yearsActive: "1969–2006, 2011–2017 and 2025", image: "./images/members/metal/BillWard.png" },
        { name: "David Draiman", role: "Disturbed: Lead Vocalist", yearsActive: "1996–2011 and 2015–present", image: "./images/members/metal/DavidDraiman.png" },
        { name: "Dan Donegan", role: "Disturbed: Lead Guitarist", yearsActive: "1994–2011 and 2015–present", image: "./images/members/metal/DanDonegan.png" },
        { name: "Zack De La Rocha", role: "Rage Against The Machine: Lead Vocalist", yearsActive: "1991–2000, 2007–2011 and 2019–2024", image: "./images/members/metal/ZackDeLaRocha.png" },
        { name: "Tim Commerford", role: "Rage Against The Machine: Bassist | Backing Vocalist", yearsActive: "1991–2000, 2007–2011 and 2019–2024", image: "./images/members/metal/TimCommerford.png" },
        { name: "Adam Gontier", role: "Three Days Grace: Lead Vocalist | Rhythm Guitarist", yearsActive: "1992–1995 and 1997–present", image: "./images/members/metal/AdamGontier.png" },
        { name: "Neil Sanderson", role: "Three Days Grace: Drummer", yearsActive: "1992–1995 and 1997–present", image: "./images/members/metal/NeilSanderson.png" },
        { name: "Dexter Holland", role: "The Offspring: Lead Vocalist | Rhythm Guitarist", yearsActive: "1984–present", image: "./images/members/metal/DexterHolland.png" },
        { name: "Noodles", role: "The Offspring: Lead Guitarist | Backing Vocalist", yearsActive: "1984–present", image: "./images/members/metal/Noodles.png" }
    ],
    albums: [
        { name: "Hall of the Mountain King", description: "Savatage", year: 1987, image: "./images/albums/metal/HallOfTheMountainKing.png" },
        { name: "Dead Winter Dead", description: "Savatage", year: 1995, image: "./images/albums/metal/DeadWinterDead.png" },
        { name: "Fallen", description: "Evanescence", year: 2003, image: "./images/albums/metal/Fallen.png" },
        { name: "The Open Door", description: "Evanescence", year: 2006, image: "./images/albums/metal/TheOpenDoor.png" },
        { name: "Infest", description: "Papa Roach", year: 2000, image: "./images/albums/metal/Infest.png" },
        { name: "Paranoid", description: "Black Sabbath", year: 1970, image: "./images/albums/metal/Paranoid.png" },
        { name: "Black Sabbath", description: "Black Sabbath", year: 1970, image: "./images/albums/metal/BlackSabbath.png" },
        { name: "Master of Reality", description: "Black Sabbath", year: 1971, image: "./images/albums/metal/MasterOfReality.png" },
        { name: "The Sickness", description: "Disturbed", year: 2000, image: "./images/albums/metal/TheSickness.png" },
        { name: "Evil Empire", description: "Rage Against The Machine", year: 1996, image: "./images/albums/metal/EvilEmpire.png" },
        { name: "One-X", description: "Three Days Grace", year: 2006, image: "./images/albums/metal/One-X.png" },
        { name: "Americana", description: "The Offspring", year: 1998, image: "./images/albums/metal/Americana.png" }
    ]
};




// 29. More: Folk and Country
const folkCountryData =
{
    id: "folk-and-country",
    title: "More: Folk and Country",
    score: 94,
    image: "./images/background/folkCountryLogo.png",
    description: "A curated collection spanning the most iconic voices in folk, country and roots music. From Johnny Cash's outlaw storytelling and redemptive baritone to Bob Dylan's revolutionary poetic lyricism and the Dropkick Murphys' Celtic punk anthems, this playlist captures the raw emotional power of music rooted in life, struggle and personal identity.",
    review: "Only a few genres can touch our souls and hearts as folk and country. Johnny Cash's matured dignity, Dylan's unmatched wordcraft and the Dropkick Murphys' rebellious working-class spirit represent a different face of the same truth-telling tradition. A music that doesn't flinch from pain, pride or the human condition.",
    genres: ["Folk", "Rock", "Country", "Blues", "Songs span: 1955 - 2013"],
    playlistLink: "https://www.youtube.com/playlist?list=PL1dJYVxuiTev_seYdCESbRfAADUx0mTrT",
    favouriteSongs: {
        "Rose Tattoo": [98, "Dropkick Murphys - 2013", "https://www.youtube.com/watch?v=9d8SzG4FPyM"],
        "Hurt": [98, "Johnny Cash - 2003", "https://www.youtube.com/watch?v=8AHCfZTRGiI"],
        "God's Gonna Cut You Down": [94, "Johnny Cash - 2006", "https://www.youtube.com/watch?v=eJlN9jdQFSc"],
        "Like A Rolling Stone": [92, "Bob Dylan - 1965", "https://www.youtube.com/watch?v=IwOfCgkyEj0"],
        "Folsom Prison Blues": [90, "Johnny Cash - 1955", "https://www.youtube.com/watch?v=AeZRYhLDLeU"]
    },
    members: [
        { name: "Johnny Cash", role: "Vocalist | Guitarist", yearsActive: "1954–2003", image: "./images/members/folkCountry/JohnnyCash.png" },
        { name: "Bob Dylan", role: "Vocalist | Harmonica | Guitarist", yearsActive: "1957–present", image: "./images/members/folkCountry/BobDylan.png" },
        { name: "Ken Casey", role: "Dropkick Murphys: Lead Vocalist | Bassist", yearsActive: "1996–present", image: "./images/members/folkCountry/KenCasey.png" },
        { name: "Matt Kelly", role: "Dropkick Murphys: Drummer", yearsActive: "1997–present", image: "./images/members/folkCountry/MattKelly.png" }
    ],
    albums: [
        { name: "At Folsom Prison", description: "Johnny Cash", year: 1968, image: "./images/albums/folkCountry/AtFolsomPrison.png" },
        { name: "At San Quentin", description: "Johnny Cash", year: 1969, image: "./images/albums/folkCountry/AtSanQuentin.png" },
        { name: "American Recordings", description: "Johnny Cash", year: 1994, image: "./images/albums/folkCountry/AmericanRecordings.png" },
        { name: "Highway 61 Revisited", description: "Bob Dylan", year: 1965, image: "./images/albums/folkCountry/Highway61Revisited.png"},
        { name: "Blonde on Blonde", description: "Bob Dylan", year: 1966, image: "./images/albums/folkCountry/BlondeOnBlonde.png"},
        { name: "Blood on the Tracks", description: "Bob Dylan", year: 1975, image: "./images/albums/folkCountry/BloodOnTheTracks.png"},
        { name: "The Warrior's Code", description: "Dropkick Murphys", year: 2005, image: "./images/albums/folkCountry/TheWarriorsCode.png"},
        { name: "Signed and Sealed in Blood", description: "Dropkick Murphys", year: 2013, image: "./images/albums/folkCountry/SignedAndSealedInBlood.png"},
    ]
};




// All Bands
const bandsData = [
    rhcpData,               // 01
    linkinParkData,         // 02
    pinkFloydData,          // 03
    queenData,              // 04
    museData,               // 05
    rammsteinData,          // 06
    systemOfADownData,      // 07
    metallicaData,          // 08
    depecheModeData,        // 09
    gunsNRosesData,         // 10
    arcticMonkeysData,      // 11
    u2Data,                 // 12
    greenDayData,           // 13
    nirvanaData,            // 14
    bonJoviData,            // 15
    scorpionsData,          // 16
    blackKeysData,          // 17
    robbieWilliamsData,     // 18
    acdcData,               // 19
    oasisData,              // 20
    theBeatlesData,         // 21
    coldplayData,           // 22
    theKillersData,         // 23
    billyIdolData,          // 24
    alternativeRockData,    // 25
    classicRockData,        // 26
    hardRockData,           // 27
    metalData,              // 28
    folkCountryData         // 29
]




function renderHomePage() {
  const mainContent = document.getElementById('main-content');

  const gridHtml = `
    <div class="bands-grid">
      ${bandsData.map(band => `
        <div class="band-card" onclick="navigateToBand('${band.id}')">
          <div class="band-card-bg" style="background-image: url('${band.image}')"></div>
          <div class="band-card-overlay">
            <h2 class="band-title">${band.title}</h2>
            <span class="band-score">${band.score}/100</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  mainContent.innerHTML = gridHtml;
  document.title = "Band Reviews";
}

function renderBandDetail(bandId) {
  const band = bandsData.find(b => b.id === bandId);

  if (!band) {
    renderHomePage();
    return;
  }

  const mainContent = document.getElementById('main-content');

  const detailHtml = `
    <div class="band-detail">
      <button class="back-button" onclick="navigateHome()">← Back to All Reviews</button>

      <div class="detail-header">
        <div class="detail-bg" style="background-image: url('${band.image}')"></div>
        <div class="detail-overlay">
          <h1 class="detail-title">${band.title}</h1>
          <div class="detail-meta">
            <span class="final-score">${band.score}/100</span>
            <div class="genres">
              ${band.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="detail-content">
        <div class="detail-section">
          <h2 class="section-title">Description</h2>
          <p class="description-text">${band.description}</p>
        </div>

        <div class="detail-section">
          <h2 class="section-title">Review</h2>
          <p class="review-text">${band.review}</p>
        </div>
        
        
        <!-- Members -->
        <div class="detail-section">
          <h2 class="section-title">Members</h2>
          <div class="members-grid">
            ${band.members.map(member => `
              <div class="member-item" style="background-image: url('${member.image}')">
                <div class="member-content">
                  <div class="member-role">${member.role}</div>
                  <div class="member-yearsActive">${member.yearsActive}</div>
                  <div class="member-name">${member.name}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>


        <!-- Favourite Song Ratings -->
        <div class="detail-section">
          <h2 class="section-title">Favourite Song Ratings - <a href="${band.playlistLink}" target="_blank">Playlist Here</a></h2>
          <div class="ratings-grid-5col">
            ${Object.entries(band.favouriteSongs).map(([song, [score, date, url]]) => `
              <div class="rating-item">
                <a href="${url}" target="_blank" class="rating-label">  
                  ${song}
                </a>
                <div class="rating-date">${date}</div>
                <div class="rating-value">${score}/100</div>
              </div>
            `).join('')}
          </div>
        </div>


        <!-- Albums -->
        <div class="detail-section">
          <h2 class="section-title">Albums</h2>
          <div class="albums-grid">
            ${band.albums.map(album => `
              <div class="album-item" style="background-image: url('${album.image}')">
                <div class="album-content">
                  <div class="album-year">${album.year}</div>
                  <div class="album-description">${album.description}</div>
                  <div class="album-name">${album.name}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        
      </div>
    </div>
  `;

  mainContent.innerHTML = detailHtml;
  document.title = `${band.title}`;
}

function isLocalFile() {
  return window.location.protocol === 'file:';
}

function navigateToBand(bandId) {
  if (isLocalFile()) {
    window.location.hash = bandId;
  } else {
    history.pushState({ bandId }, '', `/${bandId}`);
  }
  renderBandDetail(bandId);
  window.scrollTo(0, 0);
}

function navigateHome() {
  if (isLocalFile()) {
    window.location.hash = '';
  } else {
    history.pushState({}, '', '/');
  }
  renderHomePage();
  window.scrollTo(0, 0);
}

window.navigateHome = navigateHome;
window.navigateToBand = navigateToBand;

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.bandId) {
    renderBandDetail(event.state.bandId);
  } else {
    renderHomePage();
  }
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    renderBandDetail(hash);
  } else {
    renderHomePage();
  }
  window.scrollTo(0, 0);
});

function initializeApp() {
  if (isLocalFile()) {
    const hash = window.location.hash.substring(1);
    if (hash) {
      renderBandDetail(hash);
    } else {
      renderHomePage();
    }
  } else {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
      renderHomePage();
    } else {
      const bandId = path.substring(1);
      renderBandDetail(bandId);
    }
  }
}

initializeApp();



