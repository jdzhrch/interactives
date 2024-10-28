mapboxgl.accessToken = "pk.eyJ1IjoibWxub3ciLCJhIjoiY2t0d2FsdWRpMmkxbDMxcnJ4eTNsMmFlMiJ9.dUju5BD_HqseLNWGIGvXpg";

    // define basemap
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mlnow/clsnkxahw00nj01r9apk2awp0',
    zoom: 10.85,
    pitch: 0,
    bearing: 0,
    center: [-122.453, 37.762],
    scrollZoom: false,
    dragPan: false,
    touchZoomRotate: false
    });
// 定義每個選區的種族構成數據
//數據來源: https://sfgov.maps.arcgis.com/apps/webappviewer/index.html?id=57159538a9a3422a9d22ef75d66565b6
var raceBreakdown = {
    "第 1 選區": {
        "亞裔": 41.25,
        "非裔": 2.89,
        "原住民": 0.44,
        "拉美裔": 7.16,
        "白人": 47.17
    },
    "第 3 選區": {
        "亞裔": 38.03,
        "非裔": 3.85,
        "原住民": 0.78,
        "拉美裔": 6.95,
        "白人": 49.43
    },
    "第 5 選區": {
        "亞裔": 20.75,
        "非裔": 12.6,
        "原住民": 0.87,
        "拉美裔": 10.59,
        "白人": 53.51
    },
    "第 7 選區": {
        "亞裔": 35,
        "非裔": 4.01,
        "原住民": 0.4,
        "拉美裔": 11.2,
        "白人": 48.21
    },
    "第 9 選區": {
        "亞裔": 25.34,
        "非裔": 4.91,
        "原住民": 0.49,
        "拉美裔": 26.24,
        "白人": 41.87
    },
    "第 11 選區": {
        "亞裔": 56.55,
        "非裔": 5.39,
        "原住民": 0.19,
        "拉美裔": 21.12,
        "白人": 15.85
    }		
};

// 定義每個選區的候選人信息
var candidates = {
    "第 1 選區": [
        {
            name: "Jeremiah Boehner",
            jobDescription: "市場營銷專家和美國陸軍退伍軍人",
            age: "39",
            residency: "租戶, 自2006年起居住在第 1 選區",
            transportation: "駕車",
            education: "University of San Francisco",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D1-Jeremiah-Boehner.png"
        },
        {
            name: "Connie Chan",
            jobDescription: "現任第 1 選區市議員",
            age: "45",
            residency: "房主, 自2011年起居住在第 1 選區",
            transportation: "駕車和步行",
            education: "University of California, Davis學士學位",
            languages: "英語、粵語、普通話",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D1-Connie-Chan.png"
        },
        {
            name: "Sherman D'Silva",
            jobDescription: "Geary Boulevard自助洗衣店店主",
            age: "51",
            residency: "房主, 自1973年起居住在第 1 選區",
            transportation: "駕車",
            education: "San Francisco State University學士學位",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D1-Sherman-DSilva.png"
        },
        {
            name: "Jen Nossokoff",
            jobDescription: "醫療保健公司副總裁和醫師助理",
            age: "38",
            residency: "房主, 自2020年起居住在第 1 選區",
            transportation: "步行、騎行、公共交通、駕車",
            education: "Colorado State University學士學位和Samuel Merritt University碩士學位",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D1-Jen-Nossokoff.png"
        },
        {
            name: "Marjan Philhour",
            jobDescription: "企業主和London Breed前顧問及籌款人",
            age: "50",
            residency: "房主, 出生於第 1 選區並於2006年搬回",
            transportation: "騎行、步行、駕車和公共交通",
            education: "University of California, Berkeley學士學位",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D1-Marjan-Philhour.png"
        }
    ],
    "第 3 選區": [
        {
            name: "Wendy Ha Chau",
            jobDescription: "律師",
            age: "44",
            residency: "租戶, 自2009年起居住在第 3 選區",
            transportation: "步行",
            education: "John F. Kennedy University法學博士學位",
            languages: "英語",
            imageURL: "https://newspack-missionlocal.s3.amazonaws.com/mission/wp-content/uploads/2024/06/Wendy-Ha-Chau.png"
        },
        {
            name: "Moe Jamil",
            jobDescription: "San Francisco市檢察官辦公室副市檢察官",
            age: "46",
            residency: "自住公寓業主, 自2014年5月起居住在第 3 選區",
            transportation: "步行",
            education: "University of California, Berkeley和Santa Clara University法學院, K-12公立學校",
            languages: "英語、粵語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D3-Moe-Jamil.png"
        },
        {
            name: "Sharon Lai",
            jobDescription: "World Economic Forum經濟復甦負責人, San Francisco Municipal Transportation Agency前董事會成員",
            age: "41",
            residency: "租戶和業主, 自2023年起居住在第 3 選區, 2005年首次搬到SF",
            transportation: "多模式: 單獨時步行和乘坐MUNI, 與孩子一起時駕車",
            education: "University of California, Berkeley發展研究和城市與區域規劃學士學位; Harvard Kennedy School公共管理碩士學位",
            languages: "英語、普通話、粵語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D3-Sharon-Lai.png"
        },
        {
            name: "Eduard Navarro",
            jobDescription: "科技創業公司創始人",
            age: "44",
            residency: "租戶，自2021年12月起居住在第 3 選區",
            transportation: "步行、公共交通",
            education: "CFA Institute：特許金融分析師，通過一級。Columbia University建築學碩士，城市設計方向。Columbia University房地產開發碩士，金融方向。Ecole d'Architecture de La Villette。Georgia Institute of Technology建築學學士",
            languages: "西班牙語、法語、德語、英語、Valèncian (Catalan)",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/03/D3-Eduard-Navarro.png"
        },
        {
            name: "Danny Sauter",
            jobDescription: "Neighborhood Centers Together執行主任",
            age: "36",
            residency: "租戶，自2014年起居住在第 3 選區",
            transportation: "公共交通",
            education: "Miami University學士學位",
            languages: "英語、粵語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D3-Danny-Sauter.png"
        },
        {
            name: "Matthew Susk",
            jobDescription: "Divvy homes前負責人",
            age: "32",
            residency: "TIC業主，2007年首次搬到第 3 選區。2007-2009年就讀高中期間，2014-2016年大學畢業後，2023年至今與妻子居住",
            transportation: "步行",
            education: "St. Lawrence University學士學位，Georgetown University工商管理碩士",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D3-Matthew-Susk-640x640.png"
        }
    ],
    "第 5 選區": [
        {
            name: "Scotty Jacobs",
            jobDescription: "市場營銷",
            age: "30",
            residency: "租戶，自2022年11月起居住在第 5 選區，房主",
            transportation: "公共自行車",
            education: "Washington University學士學位",
            languages: "英語",
            imageURL: "https://newspack-missionlocal.s3.amazonaws.com/mission/wp-content/uploads/2024/06/Scotty-Jacobs.png"
        },
        {
            name: "Allen Jones",
            jobDescription: "活動家",
            age: "67",
            residency: "租戶，自2021年11月起居住在第 5 選區",
            transportation: "輪椅",
            education: "少年感化院聖經研究教師",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D5-Allen-Jones.png"
        },
        {
            name: "Autumn Looijen",
            jobDescription: "學校董事會罷免運動共同創始人",
            age: "46",
            residency: "租戶，自2020年12月起居住在第 5 選區，地主",
            transportation: "公共交通",
            education: "California Institute of Technology學士學位",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/03/Autumn-Looijen.png"
        },
        {
            name: "Bilal Mahmood",
            jobDescription: "私營和慈善組織創始人",
            age: "37",
            residency: "租戶，自2023年5月起居住在第 5 選區",
            transportation: "步行",
            education: "Stanford University學士學位，University of Cambridge哲學碩士學位",
            languages: "英語、烏爾都語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D5-Bilal-Mahmood.png"
        },
        {
            name: "Dean Preston",
            jobDescription: "現任議員，租戶律師",
            age: "54",
            residency: "房主，自1996年起居住在第 5 選區",
            transportation: "公共交通",
            education: "Bowdoin College學士學位，University of California Law, San Francisco法學博士學位",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D5-Dean-Preston.png"
        }
    ],
    "第 7 選區": [
        {
            name: "Matthew Boschetto",
            jobDescription: "小企業主",
            age: "35",
            residency: "房主，自2014年起居住在第 7 選區",
            education: "Saint Mary's College of California哲學學士學位",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D7-Matt-Boschetto.png"
        },
        {
            name: "Stephen Martin-Pinto",
            jobDescription: "消防員/美國海軍陸戰隊少校",
            age: "46",
            residency: "SF租戶，Lemon Grove, California房產業主和房東，自2014年起居住在第 7 選區的Sunnyside，此前從1983年至1998年也在此居住",
            education: "University of California, Davis",
            languages: "英語、西班牙語、俄語、格魯吉亞語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D7-Stephen-Martin-Pinto.png"
        },
        {
            name: "Myrna Melgar",
            jobDescription: "第 7 選區市議員",
            age: "56",
            residency: "房主，自2014年起居住在第 7 選區的Sunnyside，此前從1983年至1988年也在此居住",
            transportation: "騎行",
            education: "Excelsior College學士學位，Columbia University城市規劃碩士學位",
            languages: "英語、西班牙語、法語、瑞典語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D7-Myrna-Melgar.png"
        },
        {
            name: "Edward Yee",
            jobDescription: "退休外科醫生",
            age: "74",
            residency: "房主，自1981年起居住在第 7 選區",
            transportation: "步行、Muni，偶爾駕車",
            education: "University of California, Berkeley理學學士；University of California, San Francisco醫學博士；UC Berkeley公共衛生碩士",
            languages: "英語、粵語",
            imageURL: "https://newspack-missionlocal.s3.amazonaws.com/mission/wp-content/uploads/2024/09/D7-Edward-Yee.png"
        }
    ],
    "第 9 選區": [
        {
            name: "Julian Bermudez",
            jobDescription: "在家族企業Rancho Grande Appliance工作並擔任主管",
            age: "27",
            residency: "租戶，2017年9月至2018年6月、2019年10月至2020年8月以及2021年4月至今居住在第 9 選區",
            transportation: "拼車/搭便車",
            education: "City College of San Francisco, Chico State University",
            languages: "英語、西班牙語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/01/D9-Candidate-Bermudez.png"
        },
        {
            name: "h brown",
            jobDescription: "退休特殊教育教師",
            age: "80",
            residency: "租戶，在現址居住九年，2022年4月重新劃區至第 9 選區",
            transportation: "步行",
            education: "Clemson University教育學學士學位和特殊教育碩士學位",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/hBrown.png"
        },
        {
            name: "Trevor Chandler",
            jobDescription: "自2023年起擔任公立學校教師。前Citizen公共安全應用公司政府和公共政策主管",
            age: "37",
            residency: "租戶，自2021年7月起居住在第 9 選區",
            transportation: "公共交通",
            education: "Plymouth State University",
            languages: "英語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/01/D9-Candidate-Chandler.png"
        },
        {
            name: "Jackie Fielder",
            jobDescription: "Stop the Money Pipeline非營利組織聯合主任。前San Francisco State University教育工作者，San Francisco Public Bank Coalition共同創始人。民主社會主義者",
            age: "29",
            residency: "租戶，2017年9月至2018年6月、2019年10月至2020年8月以及2021年4月至今居住在第 9 選區",
            transportation: "公共交通",
            education: "Stanford University公共政策學士學位和社會學碩士學位",
            languages: "英語、西班牙語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/01/D9Fielder_2.png"
        },
        {
            name: "Roger Marenco",
            jobDescription: "公交車司機",
            age: "42",
            residency: "租戶，自2014年5月起居住在第 11 選區",
            transportation: "公共交通",
            education: "San Francisco State University環境可持續發展和社會正義學士學位。City College San Francisco",
            languages: "英語、西班牙語",
            imageURL: "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2024/02/D11-Roger-Marenco.png"
        },
        {
            name: "Jose Morales",
            jobDescription: "銷售專業人員，小企業主",
            age: "28",
            residency: "租戶，1995年出生於第 11 選區並一直居住在此，除了2014年至2017年上大學期間和2021年至2022年底在Idaho居住期間",
            transportation: "駕車",
            education: "Sonoma State University經濟學學士學位",
            languages: "英語、西班牙語",
            imageURL: "https://newspack-missionlocal.s3.amazonaws.com/mission/wp-content/uploads/2024/05/Jose-Morales.png"
        }
    ]
};

// 定義選區信息和鏈接
var districtInfo = {
    "第 1 選區": {
        intro: "四名候選人已<span class='districtLink' data-url='https://www.sf.gov/reports/november-2024/candidates-november-5-2024-consolidated-general-election'>申請參選</span>，挑戰現任市議員Connie Chan在第 1 選區的席位。該選區包括Richmond、Lone Mountain、Golden Gate Park、Lincoln Park和University of San Francisco。閱讀第 1 選區「認識候選人」系列報導請點擊<span class='districtLink' data-url='https://missionlocal.org/2024/02/meet-the-candidates-all-2024-district-1-supervisor-answers/'>這裡</span>。"
    },
    "第 3 選區": {
        intro: "因為市議員Aaron Peskin任期將於明年1月結束，六名候選人已<span class='districtLink' data-url='https://www.sf.gov/reports/november-2024/candidates-november-5-2024-consolidated-general-election'>申請參選</span>第 3 選區的席位，該選區包括North Beach、Chinatown、Union Square、Financial District、Russian Hill和Nob Hill。閱讀第 3 選區「認識候選人」系列報導請點擊<span class='districtLink' data-url='https://missionlocal.org/2024/02/meet-the-candidates-all-2024-district-3-supervisor-answers/'>這裡</span>。"
    },
    "第 5 選區": {
        intro: "四名候選人已<span class='districtLink' data-url='https://www.sf.gov/reports/november-2024/candidates-november-5-2024-consolidated-general-election'>申請參選</span>，挑戰現任市議員Dean Preston在第 5 選區的席位。該選區在2022年重新劃區時發生了重大變化，現在範圍從Golden Gate Park東端經過Haight-Ashbury、Japantown和Western Addition、Lower Haight和Hayes Valley，以及大部分Tenderloin地區。閱讀第 5 選區「認識候選人」系列報導請點擊<span class='districtLink' data-url='https://missionlocal.org/2024/02/meet-the-candidates-all-2024-district-5-supervisor-answers/'>這裡</span>。"
    },
    "第 7 選區": {
        intro: "在包括Inner Sunset、Parkmerced和West Portal的第 7 選區，Matt Boschetto和Stephen Martin-Pinto正在挑戰現任市議員Myrna Melgar。閱讀第 7 選區「認識候選人」系列報導請點擊<span class='districtLink' data-url='https://missionlocal.org/2024/02/meet-the-candidates-all-2024-district-7-supervisor-answers/'>這裡</span>。"
    },
    "第 9 選區": {
        intro: "隨著Hilary Ronen今年卸任——以及她的助手Santiago Lerma<span class='districtLink' data-url='https://missionlocal.org/2023/10/santiago-lerma-hillary-ronen-aide-confirms-he-wont-run-for-her-d9-seat/'>選擇不參選</span>接替她的席位——第 9 選區的競選格局對各方挑戰者來說都是開放的，該選區包括Mission、Bernal Heights和Portola。十一位候選人已<span class='districtLink' data-url='https://www.sf.gov/reports/november-2024/candidates-november-5-2024-consolidated-general-election'>申請參選</span>，其中八人正在積極競選，使第 9 選區成為全市競爭最激烈的選區。閱讀第 9 選區「認識候選人」系列報導請點擊<span class='districtLink' data-url='https://missionlocal.org/2024/01/meet-the-candidates-all-2024-district-9-supervisor-answers/'>這裡</span>。"
    },
    "第 11 選區": {
        intro: "第 11 選區市議員Ahsha Safaí任期已滿——並正在競選市長——目前已有七名候選人<span class='districtLink' data-url='https://www.sf.gov/reports/november-2024/candidates-november-5-2024-consolidated-general-election#board-of-supervisors-district-11'>宣布參選</span>接替他作為Excelsior、Oceanview和Outer Mission的代表。其中六名候選人正在積極競選。閱讀第 11 選區「認識候選人」系列報導請點擊<span class='districtLink' data-url='https://missionlocal.org/2024/02/meet-the-candidates-all-2024-district-11-supervisor-answers/'>這裡</span>。"
    }
};


    // function to define map layers information
    function mapLineFunction(mapID, visibility, source) {
        map.addLayer({
            id: mapID,
            type: "line",
            source: {
                type: "geojson",
                data: source,
            },
            layout: {
                'visibility': visibility
            },
            paint: {
                "line-color": "black",
                "line-opacity": 1,
                "line-width": 3.3
            }
        });
    }

    // function to define map fill information
    function mapFillFunction(mapID, visibility, source) {
        map.addLayer({
            id: mapID,
            type: "fill",
            source: {
                type: "geojson",
                data: source,
            },
            layout: {
                'visibility': visibility
            },
            paint: {
                "fill-color": ["match",     
                    ["get", "DISTRICT"],
                    "1", "#6b92ff",
                    "3", "#cb5074",
                    "5", "#00813d",
                    "7", "#ee6d65",
                    "9", "#ffc352",
                    "11", "#ff6fae",
                    "#000000"
                ],
                "fill-opacity": [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1,
                    0.7
                ]
            }
        });
    }

    // function to define district label information
    function mapLabelFunction() {
        map.addLayer({
            id: "labels",
            type: "symbol",
            source: {
                'type': "geojson",
                'data': "map4ALabels.geojson",
            },
            layout: {
                'visibility': "visible",
                'text-field': ['get', 'name'],
                'text-size': 28,
            },
            paint: {
            "text-color": 'black',
        }
        });
    }

    map.on("load", function () {
        map.addSource('map_fill_source', {
            type: 'geojson',
            data: 'districtMap.geojson'
        });
    
        mapLineFunction("map_line", "none", 'districtMap.geojson');
        mapFillFunction("map_fill", "visible", 'districtMap.geojson');
        mapLabelFunction();
    
        updateContent("第 1 選區");
    
        var popup;
    
        function removePopup() {
            if (popup) {
                popup.remove();
                popup = null;
            }
        }
    
        function createPopupContent(district) {
            var breakdown = raceBreakdown["第 " + district + " 選區"];
            var popupContent = "<h4>第 " + district + " 選區</h4>";
            for (var race in breakdown) {
                popupContent += "<p>" + race + ": " + breakdown[race] + "%</p>";
            }
            return popupContent;
        }
    
        function onFeatureClick(e) {
            var feature = e.features[0];
            var district = feature.properties.DISTRICT;
            updateContent("第 " + district + " 選區");
            removePopup(); // Optionally, you may want to keep the popup open on click
        }
    
        function onFeatureHover(e) {
            var district = e.features[0].properties.DISTRICT;
            map.setFeatureState({ source: 'map_fill_source', id: district }, { hover: true });
    
            var popupContent = createPopupContent(district);
    
            removePopup(); // Remove any existing popup
    
            popup = new mapboxgl.Popup({
                closeButton: false,
                offset: [0, 10] // Adjust offset to position the popup better
            })
                .setLngLat(e.lngLat)
                .setHTML(popupContent)
                .addTo(map);
    
            map.setPaintProperty('map_fill', 'fill-outline-color', [
                'case',
                ['==', ['get', 'DISTRICT'], district],
                'black',
                'transparent'
            ]);
            map.setPaintProperty('map_fill', 'fill-outline-width', 2);
        }
    
        function onFeatureLeave() {
            var features = map.queryRenderedFeatures({ layers: ['map_fill'] });
            if (features.length > 0) {
                var district = features[0].properties.DISTRICT;
                map.setFeatureState({ source: 'map_fill_source', id: district }, { hover: false });
            }
    
            removePopup();
            map.setPaintProperty('map_fill', 'fill-outline-width', 0);
        }
    
        map.on('click', 'map_fill', onFeatureClick);
        map.on('touchstart', 'map_fill', onFeatureClick);
        map.on('mouseenter', 'map_fill', onFeatureHover);
        map.on('mousemove', 'map_fill', onFeatureHover);
        map.on('mouseleave', 'map_fill', onFeatureLeave);
        map.on('touchend', 'map_fill', onFeatureLeave);
    
        // Resize map when window is resized
        map.once('load', () => {
            map.resize();
        });
    });
    


    // number formatting function
    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

// Function to update content based on the clicked district
function updateContent(district) {
    var container = document.getElementById("results-body");
    container.innerHTML = "";
    
    // Check if the district exists in the districtInfo object
    if (districtInfo.hasOwnProperty(district)) {
        // Create and append intro paragraph
        var introParaElement = document.createElement("p");
        introParaElement.innerHTML = districtInfo[district].intro;
        introParaElement.classList.add("intro-para");
        container.appendChild(introParaElement);
    } else {
        container.textContent = "No information found for " + district;
    }

    // Check if the district exists in the candidates object
    if (candidates.hasOwnProperty(district)) {
        // Update the header with the clicked district name
        document.getElementById("results-header").textContent = district;

        // Iterate over candidates for the selected district
        candidates[district].forEach(function(candidate) {
            // Div for each candidate information
            var candidateDiv = document.createElement("div");
            candidateDiv.classList.add("candidate-info");

            // Candidate portraits
            var image = document.createElement("img");
            image.classList.add("candidates");
            image.src = candidate.imageURL;
            image.style.width = "70px";
            image.style.height = "auto";
            image.style.marginTop = "7px";
            image.style.alignSelf = "flex-start"; 
            candidateDiv.appendChild(image);

            // Div for candidate details
            var detailsDiv = document.createElement("div");
            detailsDiv.classList.add("candidate-details");

            // Candidate name
            var nameParagraph = document.createElement("p");
            nameParagraph.textContent = candidate.name;
            nameParagraph.classList.add("candidate-name");
            detailsDiv.appendChild(nameParagraph);

            // Candidate job description
            var jobParagraph = document.createElement("p");
            jobParagraph.innerHTML = "<strong>Job:</strong> " + candidate.jobDescription;
            jobParagraph.classList.add("candidate-job");
            detailsDiv.appendChild(jobParagraph);

            // Candidate age
            var ageParagraph = document.createElement("p");
            ageParagraph.innerHTML = "<strong>Age:</strong> " + candidate.age;
            ageParagraph.classList.add("candidate-age");
            detailsDiv.appendChild(ageParagraph);

            // Candidate residency
            var residencyParagraph = document.createElement("p");
            residencyParagraph.innerHTML = "<strong>Residency:</strong> " + candidate.residency;
            residencyParagraph.classList.add("candidate-residency");
            detailsDiv.appendChild(residencyParagraph);

            // Candidate transportation
            var transportationParagraph = document.createElement("p");
            transportationParagraph.innerHTML = "<strong>Transportation:</strong> " + candidate.transportation;
            transportationParagraph.classList.add("candidate-transportation");
            detailsDiv.appendChild(transportationParagraph);

            // Candidate education
            var educationParagraph = document.createElement("p");
            educationParagraph.innerHTML = "<strong>Education:</strong> " + candidate.education;
            educationParagraph.classList.add("candidate-education");
            detailsDiv.appendChild(educationParagraph);

            // Candidate languages
            var languagesParagraph = document.createElement("p");
            languagesParagraph.innerHTML = "<strong>Languages:</strong> " + candidate.languages;
            languagesParagraph.classList.add("candidate-languages");
            detailsDiv.appendChild(languagesParagraph);

            // Append the details div to the candidate div
            candidateDiv.appendChild(detailsDiv);

            // Append the candidate div to the container
            container.appendChild(candidateDiv);
        });
    } else {
        container.textContent = "No candidates found for " + district;
    }


        // Add event listeners to all links with the 'districtLink' class
        var links = document.getElementsByClassName("districtLink");
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", handleLinkClick);
        }
    }

    // Event handler for link clicks (same as before)
    function handleLinkClick() {
        var url = this.getAttribute('data-url');
        window.open(url, '_blank');

    }

    // add navigation controls
    map.addControl(new mapboxgl.NavigationControl());
