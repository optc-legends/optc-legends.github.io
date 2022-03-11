loadPage = function() {

	var flair_class = '';

	//SPECIAL FLAIRS
	loadSpecial = function() {
		var enter = document.getElementById('special');

		var name = [
			261,1413,
			367,1619,
			416,1445,
			459,1847,
			530,1707,
			562,1816,
			578,
			649,2868,
			669,1492,
			718,1881,
			720,1927,
			748,1663,
			870,2444,
			935,2066,
			1001,2195,
			1035,1928,
			1045,2001,
			1085,2954,
			1123,2357,
			1192,1764,
			1240,2034,
			1268,3154,
			1314,2578,
			1362,1921,
			1391,2035,
			1404,1593,
			1434,1880,
			1473,2631,
			1532,1543,
			1571,2372,
			1588,2245,
			1610,2232,
			1652,2373,
			1698,2159,
			1747,2434,
			1751,1922,
			1763,2784,
			1794,2814,
			1832,2138,
			1869,2505,
			1883,3018,
			1910,3550,
			1935,2300,
			1951,2830,
			1985,
			2007,
			2023,
			2025,
			2074,2363,
			2076,2588,
			2099,
			2113,2739,
			2148,3211,
			2181,
			2201,
			2234,2500,
			2236,3510,
			2251,2991,
			2265,3048,
			2302,3079,
			2330,
			2338,3417,
			2365,
			2418,
			2433,3448,
			2441,3393,
			2446,
			2465,3298,
			2475,3240,
			2477,3202,
			2534,
			2536,
			2561,
			2577,
			2601,
			2603,
			2651,2681,
			2672,
			2686,2909,
			2700,
			2741,
			2774,3275,
			2776,3350,
			2797,
			2802,
			2804,
			2835,
			2837,3469,
			2860,
			2862,
			2895,
			2897,
			2930,
			2958,
			2960,
			2962,
			2964,
			2980,
			2982,
			3007,
			3009,
			3027,
			3038,
			3065,
			3071,3369,
			3073,
			3100,
			3102,
			3118,
			3135,
			3157,
			3164,
			3166,
			3175,3519,
			3177,
			3204,
			3225,
			3227,
			3245,
			3253,
			3278,
			3280,
			3282,
			3300,
			3307,
			3334,
			3336,
			3338,
			3349,
			3355,
			3357,
			3364,
			3376,
			3378,
			3391,
			3398,
			3403,
			3405,
			3411,
			3422,
			3427,
			3429,3430,
			3433,
			3452,
			3454,
			3462,
			3472,
			3474,
			3483,
			3493,
			3495,
			3508,
			3513,
			3515,
			3523,
			3534,
			3536,
			3543,
			3553,
			3555,
			3563,
			5014,
		]

		//creates HTML for special flairs
		for (var v in name) {
				var flair_special = document.createElement('img');
				flair_special.setAttribute('class', 'flair');
				flair_special.setAttribute('id', name[v]);
				flair_special.setAttribute('src', 'images/icons/'+name[v]+'.png');

				enter.appendChild(flair_special);
		}
	}
	loadSpecial();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);
