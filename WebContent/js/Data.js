/**
 * 
 */




Graphs =
[
{"graphId":1,
"graphName":"Login Graph",
"graphProperties":{"class": "go.GraphLinksModel",
  "nodeDataArray": [
{"category":"Comment", "text":"Login graph", "key":-15, "loc":"1101.031244193186 486.9151529333166"},
{"category":"Source", "key":-1, "loc":"567.6123906175246 -30.70888764731837", "text":"Start"},
{"key":-2, "loc":"545.53396777134 91.88782520021729", "text":"Enter URL"},
{"text":"Click on login link", "loc":"510.4797258679263 161.14121932401144", "key":-4},
{"text":"Enter Email id", "loc":"522.078519902665 241.1624537387712", "key":-5},
{"text":"Enter password", "loc":"524.6691426262556 320.00585205896033", "key":-6},
{"text":"Click on Signin", "loc":"538.0143437352608 413.0166603656985", "key":-7},
{"category":"UndesiredEvent", "reasonsList":[ {"text":""},{"text":""},{"text":""},{"text":"Test URL: http://thprdqahttp.pvh.com/shop/en/thb2cus"} ], "key":-9, "loc":"30.81827101045249 -60.530176414789594", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":""},{"text":""},{"text":""},{"text":"Locator: xpath"},{"text":"Value: .//*[@id='headerLinks']//a[1][contains(.,'LOG IN')]\n"},{"text":"Data: N/A"} ], "key":-10, "loc":"41.89878181630863 106.49556270291308", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":""},{"text":""},{"text":""},{"text":"Locator: id"},{"text":"Value: WC_AccountDisplay_FormInput_logonPassword_In_Logon_1"},{"text":"Data: testing1"} ], "key":-11, "loc":"983.6174347481482 149.88600168508123", "text":""},
{"category":"DesiredEvent", "key":-3, "loc":"568.140487186884 510.3144834019595"},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value: WC_AccountDisplay_FormInput_logonId_In_Logon_1"},{"text":"Data: sathishibm999@yopmail.com"} ], "key":-12, "loc":"948.3464620727635 -43.369502838693506", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value: WC_AccountDisplay_links_2"},{"text":"Data: N/A"} ], "key":-13, "loc":"985.506677031693 405.10946407626903", "text":""}
 ],
  "linkDataArray": [ 
{"from":-1, "to":-2, "points":[602.5607681554136,6.557097399338836,611.7417131264971,35.31235475291428,611.2156580814931,63.74806309333577,600.4660740162018,91.88782520021729]},
{"from":-2, "to":-4, "points":[602.3784520090227,123.65465106691651,609.0365752780472,136.90707718816955,608.4447937786899,149.40259994053454,601.0816688197949,161.14121932401147]},
{"from":-4, "to":-5, "points":[597.9081570935955,192.90804519071068,605.1896526115983,209.94253237374852,604.2332485665924,226.02733522310203,595.512517042926,241.1624537387712]},
{"from":-5, "to":-6, "points":[596.9894998875268,272.9292796054704,606.1680325568279,286.6453518851044,608.1210876536587,302.3375427029344,601.8294973029562,320.00585205896033]},
{"from":-6, "to":-7, "points":[605.4707805227779,351.77267792565954,616.3278395154139,370.3208041703746,618.7257541247594,390.73546498372093,611.9376018935347,413.0166603656985]},
{"from":-2, "to":-9, "points":[545.53396777134,102.85764303744592,439.5703636142895,92.20242504133489,336.83598407382317,71.03224568668728,237.32176307519637,42.50772366642383]},
{"from":-6, "to":-11, "points":[655.5388917917907,320.00585205896033,770.2468611486529,289.31534436276144,875.5625284083759,270.96376227209294,983.6197543884972,260.5187404734631]},
{"from":-7, "to":-3, "points":[615.4318863486646,444.7834862323977,626.1939239611223,465.29611762911713,628.0182574136977,487.14036156622217,621.049981693395,510.3356253906132]},
{"from":-4, "to":-10, "points":[510.4797258679264,190.14678740664357,422.539117000559,204.4571180291715,333.51937197034255,210.47484747788084,243.42156190089722,208.995186247944]},
{"from":-5, "to":-12, "points":[612.4180524649456,241.1624537387712,722.2341104902815,174.22362187719443,831.8589143707687,121.7148615425624,948.3817362027823,75.46139765292976]},
{"from":-7, "to":-13, "points":[676.1828312840889,428.26590005137473,780.6203075710349,427.3071944204355,883.7288320550985,435.9010308608068,985.5131907083388,452.4930777972113]}
 ]}
},
{"graphId":2,
	"graphName":"Add to cart",
	"graphProperties":
	{ "class": "go.GraphLinksModel",
  "nodeDataArray": [ 
{"category":"Source", "key":-1, "loc":"649.2015083309946 -50.62630660291739"},
{"key":-2, "loc":"580.9080677449275 13.22557772449045", "text":"Hover department header\nat the top\n"},
{"key":-11, "loc":"575.8213070816619 99.70050900000506", "text":"select any category e.g., dress"},
{"key":-3, "loc":"569.8585292302442 156.50288596293126", "text":"Click on any product image\nfrom the dress category"},
{"key":-4, "loc":"571.7518985510493 226.86952558164418", "text":"Select attributes(size/color)\nfrom the PDP"},
{"key":-5, "loc":"574.8039549490085 316.39651325511824", "text":"Click on Add to Cart button"},
{"category":"DesiredEvent", "key":-6, "loc":"652.1227170306453 382.52440187757037"},

{"category":"UndesiredEvent", "reasonsList":[ {"text":""},{"text":""},{"text":"Locator: xpath"},{"text":"Value: .//*[@id='headerNavWrapper']/nav/div[1]/a"},{"text":"Data: N/A"} ], "key":-8, "loc":"209.56874322149702 -49.62457265736866", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: xpath"},{"text":"Value: WC_CachedHeaderDisplay_links_1_4"},{"text":"Data: N/A"} ], "key":-9, "loc":"-19.697680311616864 53.29960554908121", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: xpath"},{"text":"Value: .//*[@id='catalogEntry_img3779002']/div[1]/img\n"},{"text":"Data: N/A"} ], "key":-10, "loc":"36.03302863841205 199.18257497344473", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value: size_S_4"},{"text":"Data: N/A"} ], "key":-12, "loc":"1002.9192971024714 158.14495902414188", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value: pdpAdd2CartButton\n"},{"text":"Data: N/A"} ], "key":-13, "loc":"973.8926906993053 296.27156880472177", "text":""}
 ],
  "linkDataArray": [ 
{"from":-1, "to":-2, "points":[700.0823410272435,-13.419254567815187,705.3772252628177,-5.392013407395305,705.8810273949265,3.4623260504411806,702.9136365349267,13.22557772449045]},
{"from":-3, "to":-4, "points":[703.0506312390439,207.03653769632973,706.3626045098862,213.21525936476766,706.5412799571958,219.82625532653913,703.2425286199798,226.86952558164418]},
{"from":-4, "to":-5, "points":[702.9170391248953,277.4031773150426,708.6074656017186,289.8966219432477,709.0173706571306,302.89440058993955,702.0878177734648,316.39651325511824]},
{"from":-5, "to":-6, "points":[704.9859575772961,348.16333912181744,712.0684191043935,358.3439236680723,712.9831001177619,369.798140132261,707.4703167982291,382.5653662901794]},
{"from":-2, "to":-8, "points":[580.9080677449275,54.37161143867914,525.2805328460865,57.613125532557376,470.25330755400876,55.54708508763361,415.8219711466171,47.97194052646179]},
{"from":-2, "to":-11, "points":[715.8622722688127,82.5260553245881,717.3006842560575,84.64876498080093,718.6234810168467,90.37358287260658,714.7031989206287,99.70050900000506]},
{"from":-11, "to":-3, "points":[712.829086631749,131.46733486670428,716.6555529792988,144.12404962411026,714.3203895758675,152.46923332285257,710.9044362471501,156.5028859629313]},
{"from":-11, "to":-9, "points":[575.8213070816619,123.95066177278989,446.1907858890605,132.1544235194327,316.52540552850934,132.43692589436773,186.82406520194348,123.81148994059394]},
{"from":-3, "to":-10, "points":[580.3056970363824,207.0365376963297,460.95738989343,234.65119107933663,349.5210667230189,252.53407542514398,235.55409403130977,262.18211463883557]},
{"from":-4, "to":-12, "points":[809.8475406480871,226.86952558164418,873.0403272997224,213.38846739863712,936.9928822138085,205.42246659777928,1002.9193067870666,205.83279972291405]},
{"from":-5, "to":-13, "points":[813.0683134695163,327.53841507476307,867.5155667011015,325.37139137124893,921.1239216873947,328.1860099445789,973.8988838758352,336.5705368144634]}
 ]}
 
},
{"graphId":3,
	"graphName":"Checkout",
	"graphProperties":
	{ "class": "go.GraphLinksModel",
  "nodeDataArray": [ 
{"category":"Source", "key":-1, "loc":"526.7383776439926 -167.59857470490675"},
{"key":-2, "loc":"456.31880844025045 -74.64474335596685", "text":"Click the checkout button\nin minibag"},
{"key":-3, "loc":"457.727199824325 2.816782768149693", "text":"Click the checkout button\nin the shopping bag page"},
{"key":-4, "loc":"466.1775481287741 83.09509166041596", "text":"Click next button in the\ncheckout page"},
{"key":-5, "loc":"476.99426335733347 154.86590839627684", "text":"Enter the CC Number"},
{"key":-6, "loc":"497.16215857842076 216.8922731475264", "text":"Enter the CVV"},
{"key":-7, "loc":"453.5020256721007 269.0027543582957", "text":"Click the month dropdown"},
{"key":-8, "loc":"517.9233292734384 331.4223911016284", "text":"Select a month"},
{"key":-9, "loc":"474.62789643322344 391.5328047728074", "text":"Click the year dropdown"},
{"key":-10, "loc":"528.1467690280674 449.27685151987606", "text":"Select a year"},
{"key":-11, "loc":"492.9369844261962 499.9789413465706", "text":"Select Place order button"},
{"category":"DesiredEvent", "key":-12, "loc":"553.1369336094409 562.0791011273765"},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value:  WC_MiniShopCartDisplay_link_3"},{"text":"Data: N/A"} ], "key":-13, "loc":"-267.0825262865685 -148.91874192948063", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value: registeredShopperContinue\n"},{"text":"Data: N/A"} ], "key":-14, "loc":"-263.8451623315798 11.330773842460452", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: xpath"},{"text":"Value: .//*[@id='shipBox']//a[2]\n"},{"text":"Data: N/A"} ], "key":-15, "loc":"-252.51438848911926 176.43633554688458", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":""},{"text":"Locator: id"},{"text":"Value: account1_1"},{"text":"Data: 4111111111111111"} ], "key":-16, "loc":"-241.349529549352 335.06716934133163", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value: cc_cvc_1"},{"text":"Data: 123"} ], "key":-17, "loc":"1168.688387750923 35.61100350487584", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id "},{"text":"Value:  expire_month_1"},{"text":"Data: N/A"} ], "key":-18, "loc":"1131.4587022685555 -95.50223667216683", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: xpath"},{"text":"Value: .//*[@id='expire_month_1']/option[7]"},{"text":"Data: N/A"} ], "key":-19, "loc":"1089.3729708537005 152.1561058844694", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":" Value: expire_year_1"},{"text":"Data: N/A"} ], "key":-20, "loc":"1115.2718824936105 294.60011990397254", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: xpath"},{"text":"Value: .//*[@id = 'expire_year_1']/option[2]"},{"text":"Data: N/A"} ], "key":-21, "loc":"-220.14074893923228 464.5617275408798", "text":""},
{"category":"UndesiredEvent", "reasonsList":[ {"text":"Locator: id"},{"text":"Value: shippingBillingPageNext"},{"text":"Data: N/A"} ], "key":-22, "loc":"1047.558368670078 471.13357636950684", "text":""}
 ],
  "linkDataArray": [ 
{"from":-1, "to":-2, "points":[574.1234610406791,-130.35645914618357,582.620292159437,-112.2934598194651,583.2458152985362,-93.73864586290989,576.9988230332275,-74.64474335596685]},
{"from":-2, "to":-3, "points":[581.1006952346888,-24.111091622568416,585.3521745418,-15.425994511009238,585.5153737805315,-6.450036380769868,581.3896836052197,2.816782768149693]},
{"from":-3, "to":-4, "points":[581.0022359334274,53.35043450154813,585.4071111151545,63.5972662434646,585.2013664020533,73.5121519630872,580.6019051919976,83.09509166041596]},
{"from":-4, "to":-5, "points":[582.3219706122126,133.6287433938144,585.8304922922496,140.03069339211996,586.13033988369,147.1097483929408,581.2045496093804,154.86590839627684]},
{"from":-5, "to":-6, "points":[577.6842583953434,186.63273426297604,582.874257254946,199.1857042912604,581.3005749254029,209.2722172527772,574.8615928808098,216.8922731475264]},
{"from":-6, "to":-7, "points":[576.4944124609956,248.6590990142256,580.6681785792601,253.06271231666568,581.6871834889092,259.84393076468905,577.1460077011303,269.0027543582957]},
{"from":-7, "to":-8, "points":[585.5330464895128,300.7695802249949,591.7404328403685,306.8322932771961,594.4880035656573,317.0498969027406,590.4823504031781,331.4223911016284]},
{"from":-8, "to":-9, "points":[594.5441497917977,363.1892169683276,600.203304749333,373.77838686945597,599.5276514639297,383.2262494709492,593.425371115452,391.5328047728074]},
{"from":-9, "to":-10, "points":[594.5198032309005,423.29963063950663,600.1747034826241,430.33712928147446,601.0568291295266,438.9962029082643,595.7847283084737,449.27685151987606]},
{"from":-10, "to":-11, "points":[608.1680345698381,481.04367738657527,610.001856358154,482.46254382599466,612.0291450173239,488.77429847932643,608.6767841424044,499.9789413465706]},
{"from":-11, "to":-12, "points":[612.5525251534567,531.7457672132698,618.5097802317813,542.712615368221,617.968365510194,552.823965084843,612.109526546149,562.155644128939]},
{"from":-2, "to":-13, "points":[456.31880844025045,-48.58939928188829,282.2442972673674,-47.368362426814315,108.95126927172319,-55.84257567502123,-63.562532858747346,-74.35450428351514]},
{"from":-3, "to":-14, "points":[457.727199824325,41.602341377287686,285.39818594997496,62.326468502409995,112.0480079390251,73.41275723278754,-62.32232289976031,74.40324724004685]},
{"from":-4, "to":-15, "points":[466.1775481287741,132.84595019860427,290.964448691198,174.78183038508462,112.90542798127329,206.9664186587845,-67.99517510823108,228.89684090356567]},
{"from":-5, "to":-16, "points":[528.4306000085772,186.63273426297604,324.86541679837615,262.37787842169257,126.17458075283355,322.8155221983654,-77.16526846361543,372.75305453259455]},
{"from":-6, "to":-17, "points":[615.8943932386019,216.8922731475264,803.2167236245509,162.25352434707517,984.2109071926036,121.73467079094303,1168.694399650624,92.86528925416988]},
{"from":-7, "to":-18, "points":[595.6017320955651,269.0027543582957,770.0526209447147,163.77079400234666,947.2211750111682,72.77121606984474,1131.5021946882032,-9.563616408629855]},
{"from":-8, "to":-19, "points":[639.7618178882581,331.4223911016284,795.8499790269698,285.25990156417237,940.9154932203729,253.67988167113907,1089.3786479682701,231.11487248960324]},
{"from":-9, "to":-20, "points":[674.4401688648453,391.5328047728074,829.3229441205394,364.9900819570135,971.4525579779811,349.87046022772756,1115.2721539719614,345.1292133507949]},
{"from":-10, "to":-21, "points":[528.1467690280674,473.606470892489,340.45387660594076,500.2533362815601,151.53182724958737,514.8097814274189,-38.61800064960613,518.5982649966869]},
{"from":-11, "to":-22, "points":[714.9121431176025,510.181826621013,826.1276251627822,504.48963452545854,937.0097365279547,506.8004389730994,1047.5608863453638,517.9366658863415]}
 ]}
 
},
{"graphId":4,
	"graphName":"New graph",
	"graphProperties":
	{ "class": "go.GraphLinksModel",
		  "nodeDataArray": [ 
		{"category":"Source", "key":-1, "loc":"-11.2054482421876 -216.96786562500006"},
		{"key":-2, "loc":"-31.86905449218756 -136.74445312500004", "text":"Enter URL"},
		{"key":-3, "loc":"-40.37759824218756 -65.02958437500004", "text":"Click Log In"},
		{"key":-4, "loc":"-48.886141992187504 10.331803124999965", "text":"Enter Username"},
		{"key":-5, "loc":"-44.024116992187544 78.40015312500003", "text":"Enter password"},
		{"key":-6, "loc":"-57.39468574218756 156.19255312500007", "text":"Click Log in button"},
		{"category":"DesiredEvent", "key":-7, "loc":"-24.57601699218756 229.12292812500004"}
		 ],
		  "linkDataArray": [ 
		{"from":-1, "to":-2, "points":[26.58902832408056,-179.7261579055158,33.4554756034,-165.20129388635144,33.30728367601467,-150.89003857337215,25.6233763282536,-136.74445312500004]},
		{"from":-2, "to":-3, "points":[25.193767186522983,-104.97762725830081,32.27049285436524,-91.26713801518075,31.942090900592532,-77.95112372074715,24.443836374599968,-65.02958437500004]},
		{"from":-3, "to":-4, "points":[26.0540969039464,-33.26275850830082,34.68818296265492,-20.596700467119042,36.394067572667176,-6.06517992268545,30.13585639444001,10.331803124999965]},
		{"from":-4, "to":-5, "points":[34.22888963586438,42.09862899169919,41.45415556878159,53.39939442059974,42.059743286560845,65.49990246503336,35.525507151994915,78.40015312500003]},
		{"from":-5, "to":-6, "points":[35.63951834679199,110.16697899169925,43.512189439329276,125.49246137138317,43.527891517801635,140.8343194158168,35.67808806620731,156.19255312500007]},
		{"from":-6, "to":-7, "points":[34.86404799320671,187.95937899169928,41.64177950311226,202.69797604575322,40.76777176742768,216.41949616460295,33.423418024735625,229.18949847790273]}
		 ]}
}
];

newGraph = {"class": "go.GraphLinksModel",
	  "nodeDataArray": [],
	  "linkDataArray": []
}
	
