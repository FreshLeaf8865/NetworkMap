var class_based, inventor_based, type_toggle, city, app_year, friends, map, countymap,
    energy_color = {
        "Wind": "#3C8FBB",
        "Solar": "#FFDB87",
        "Hydro": "#4E6EB1",
        "Nuclear": "#D9444E",
        "Biofuel": "#9DD7A5",
        "Geothermal": "#F77C48"
    }, ea_colors = [
        "#fa8072"
    ], fips_list = [],
    previous_type = "state",
    fips_data_file = "EA_FIPS.csv";//"https://dl.dropboxusercontent.com/s/bv2dqe8ttgw9fcb/EA_FIPS.csv";
$(function () {
    "use strict";
    $(function () {
        $(".preloader").fadeOut()
    }), jQuery(document).on("click", ".mega-dropdown", function (e) {
        e.stopPropagation()
    });
    var e = function () {
        (0 < window.innerWidth ? window.innerWidth : this.screen.width) < 1170 ? ($("body").addClass("mini-sidebar"), $(".sidebartoggler i").addClass("ti-menu")) : $("body").removeClass("mini-sidebar");
        var e = (0 < window.innerHeight ? window.innerHeight : this.screen.height) - 1;
        (e -= 190) < 1 && (e = 1), 190 < e && $(".page-wrapper").css("min-height", e + "px")
    };

    function a() {
        80 < $(window).scrollTop() ? ($("body").addClass("fixed-sidebar"), $(".left-sidebar").addClass("animated slideInDown")) : ($("body").removeClass("fixed-sidebar"), $(".left-sidebar").removeClass("animated slideInDown"))
    }
    $(window).ready(e), $(window).on("resize", e), $(".sidebartoggler").on("click", function () {
        $("body").hasClass("mini-sidebar") ? ($("body").trigger("resize"), $("body").removeClass("mini-sidebar"), $(".navbar-brand span").show()) : ($("body").trigger("resize"), $("body").addClass("mini-sidebar"), $(".navbar-brand span").hide())
    }), $(".nav-toggler").click(function () {
        $("body").toggleClass("show-sidebar"), $(".nav-toggler i").toggleClass("ti-menu"), $(".nav-toggler i").addClass("ti-close")
    }), $(".search-box a, .search-box .app-search .srh-btn").on("click", function () {
        $(".app-search").toggle(200)
    }), $(".right-side-toggle").click(function () {
        $(".right-sidebar").slideDown(50), $(".right-sidebar").toggleClass("shw-rside")
    }), $(".floating-labels .form-control").on("focus blur", function (e) {
        $(this).parents(".form-group").toggleClass("focused", "focus" === e.type || 0 < this.value.length)
    }).trigger("blur"), $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    }), $(function () {
        $('[data-toggle="popover"]').popover()
    }), $(".right-side-panel, .message-center, .right-sidebar").perfectScrollbar(), $("body").trigger("resize"), $(".list-task li label").click(function () {
        $(this).toggleClass("task-done")
    }), $('a[data-action="collapse"]').on("click", function (e) {
        e.preventDefault(), $(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ti-minus ti-plus"), $(this).closest(".card").children(".card-body").collapse("toggle")
    }), $('a[data-action="expand"]').on("click", function (e) {
        e.preventDefault(), $(this).closest(".card").find('[data-action="expand"] i').toggleClass("mdi-arrow-expand mdi-arrow-compress"), $(this).closest(".card").toggleClass("card-fullscreen")
    }), $('a[data-action="close"]').on("click", function () {
        $(this).closest(".card").removeClass().slideUp("fast")
    }), $(window).scroll(a), a();
    var i, t = ["skin-default", "skin-green", "skin-red", "skin-blue", "skin-purple", "skin-megna", "skin-default-dark", "skin-green-dark", "skin-red-dark", "skin-blue-dark", "skin-purple-dark", "skin-megna-dark"];

    function n(e) {
        var a;
        return $.each(t, function (e) {
            $("body").removeClass(t[e])
        }), $("body").addClass(e), "skin", a = e, "undefined" != typeof Storage ? localStorage.setItem("skin", a) : window.alert("Please use a modern browser to properly view this template!"), !1
    } (i = function (e) {
        if ("undefined" != typeof Storage) return localStorage.getItem("skin");
        window.alert("Please use a modern browser to properly view this template!")
    }()) && $.inArray(i, t) && n(i), $("[data-skin]").on("click", function (e) {
        $(this).hasClass("knob") || (e.preventDefault(), n($(this).data("skin")))
    }), $("#themecolors").on("click", "a", function () {
        $("#themecolors li a").removeClass("working"), $(this).addClass("working")
    })
}), $(document).ready(function () {
    $("#plus_btn").click(function () {
        $("#region_select").slideDown().addClass("region_select"), $(this).hide()
    })
});

AmCharts.ready(function () {
    map = new AmCharts.AmMap(AmCharts.themes.light);
    map.hideCredits = !0;
    var wordlDataProvider = {
        mapVar: AmCharts.maps.usaLow,
        getAreasFromMap: true,
        areas: [
            {
                id: "US-AL",
                value: 4447100
            }, {
                id: "US-AK",
                value: 626932
            }, {
                id: "US-AZ",
                value: 5130632
            }, {
                id: "US-AR",
                value: 2673400
            }, {
                id: "US-CA",
                value: 33871648
            }, {
                id: "US-CO",
                value: 4301261
            }, {
                id: "US-CT",
                value: 3405565
            }, {
                id: "US-DE",
                value: 783600
            }, {
                id: "US-FL",
                value: 15982378
            }, {
                id: "US-GA",
                value: 8186453
            }, {
                id: "US-HI",
                value: 1211537
            }, {
                id: "US-ID",
                value: 1293953
            }, {
                id: "US-IL",
                value: 12419293
            }, {
                id: "US-IN",
                value: 6080485
            }, {
                id: "US-IA",
                value: 2926324
            }, {
                id: "US-KS",
                value: 2688418
            }, {
                id: "US-KY",
                value: 4041769
            }, {
                id: "US-LA",
                value: 4468976
            }, {
                id: "US-ME",
                value: 1274923
            }, {
                id: "US-MD",
                value: 5296486
            }, {
                id: "US-MA",
                value: 6349097
            }, {
                id: "US-MI",
                value: 9938444
            }, {
                id: "US-MN",
                value: 4919479
            }, {
                id: "US-MS",
                value: 2844658
            }, {
                id: "US-MO",
                value: 5595211
            }, {
                id: "US-MT",
                value: 902195
            }, {
                id: "US-NE",
                value: 1711263
            }, {
                id: "US-NV",
                value: 1998257
            }, {
                id: "US-NH",
                value: 1235786
            }, {
                id: "US-NJ",
                value: 8414350
            }, {
                id: "US-NM",
                value: 1819046
            }, {
                id: "US-NY",
                value: 18976457
            }, {
                id: "US-NC",
                value: 8049313
            }, {
                id: "US-ND",
                value: 642200
            }, {
                id: "US-OH",
                value: 11353140
            }, {
                id: "US-OK",
                value: 3450654
            }, {
                id: "US-OR",
                value: 3421399
            }, {
                id: "US-PA",
                value: 12281054
            }, {
                id: "US-RI",
                value: 1048319
            }, {
                id: "US-SC",
                value: 4012012
            }, {
                id: "US-SD",
                value: 754844
            }, {
                id: "US-TN",
                value: 5689283
            }, {
                id: "US-TX",
                value: 20851820
            }, {
                id: "US-UT",
                value: 2233169
            }, {
                id: "US-VT",
                value: 608827
            }, {
                id: "US-VA",
                value: 7078515
            }, {
                id: "US-WA",
                value: 5894121
            }, {
                id: "US-WV",
                value: 1808344
            }, {
                id: "US-WI",
                value: 5363675
            }, {
                id: "US-WY",
                value: 493782
            }]
    };

    map.imagesSettings = {
        "labelPosition": "middle",
        "labelFontSize": 8
    },

        map.dataProvider = wordlDataProvider;
    map.areasSettings = {
        alpha: 0.8,
        selectable: true,
        unlistedAreasAlpha: 0.1,
        selectedOutlineThickness: 5,
        OutlineThickness: 5,
    };
    map.zoomControl = {
        zoomControlEnabled: !1
    };

    map.addListener("clickMapObject", function (event) {
        var id = event.mapObject.id;
        var map_id = id.replace("US-", "").toLowerCase();
        var map_type = map_id + 'Counties';
        document.getElementById('chart_state').setAttribute('data-type', map_type);
        loadCountyMap(map_id, map_type);
        jQuery('.graph-subarea a[data-type="county"]').click();
        city = id;
        update_graph();
    });

    map.write("chart_state");
});

function createClassDatabase(e) {
    class_based = TAFFY(e), console.log("Succeed to get class Based Data")
}

function createInventorDatabase(e) {
    inventor_based = TAFFY(e), console.log("Succeed to get Inventor Based Data")
}

function createTypeToggleDatabase(e) {
    type_toggle = TAFFY(e), console.log("Succeed to get Type Toggle Data")
}

function creat_database() {
    var loading = $.loading();
    loading.open(30000);
    var a1 = $.ajax({
        method: "get",
        dataType: "json",
        url: "https://dl.dropboxusercontent.com/s/052wqqnok9fcfi1/client-based.json"
    }),
        a2 = $.ajax({
            method: "get",
            dataType: "json",
            url: "https://dl.dropboxusercontent.com/s/09kv3sju3im78jh/inventor-based.json"
        }),
        a3 = $.ajax({
            method: "get",
            dataType: "json",
            url: "https://dl.dropboxusercontent.com/s/nwvcg20huq7v99g/type-toggle.json"
        });

    $.when(a1, a2, a3).done(function (r1, r2, r3) {
        createClassDatabase(r1[0]);
        createInventorDatabase(r2[0]);
        createTypeToggleDatabase(r3[0]);
        loading.close();
    });
}

function get_assignee_type() {
    var assignee_type = [];
    if ($("#ck-type-sm-firm").is(":checked")) {
        assignee_type.push("Small & Medium Firms");
    }
    if ($("#ck-type-vb-firm").is(":checked")) {
        assignee_type.push("Venture Backed Firms");
    }
    if ($("#ck-type-lg-firm").is(":checked")) {
        assignee_type.push("Large Firms");
    }
    if ($("#ck-type-university").is(":checked")) {
        assignee_type.push("Academic");
    }
    if ($("#ck-type-government").is(":checked")) {
        assignee_type.push("Government");
    }
    if ($("#ck-type-lone-inventor").is(":checked")) {
        assignee_type.push("Lone Inventor");
    }
    return assignee_type;
}

function get_energy_type() {
    var energy_type = [];
    if ($("#ck-sector-wind").is(":checked")) {
        energy_type.push("Wind");
    }
    if ($("#ck-sector-solar").is(":checked")) {
        energy_type.push("Solar");
    }
    if ($("#ck-sector-hydro").is(":checked")) {
        energy_type.push("Hydro");
    }
    if ($("#ck-sector-nuclear").is(":checked")) {
        energy_type.push("Nuclear");
    }
    if ($("#ck-sector-biofuel").is(":checked")) {
        energy_type.push("Biofuel");
    }
    if ($("#ck-sector-geothermal").is(":checked")) {
        energy_type.push("Geothermal");
    }
    return energy_type;
}

function get_patent() {
    var patent = [], assignee_type = get_assignee_type();

    if (type_toggle && assignee_type.length > 0) {
        type_toggle({
            assignee_type: assignee_type,
            state1: city.replace("US-", ""),
            country1: "US",
        }).each(function (e) {
            patent.push(Number(e.patent));
        })
    }

    return patent;
}
/**
 * 
 * @param {*} energy_type 
 * @param {*} a : data -> choosen by class or inventor
 * @param {*} i : boolean -> is class based?
 * @param {*} g : object -> for drawing graph
 */
function query_by_selector(energy_type, a, i, g) {
    var patent = get_patent(), nodes = [], edges = [];
    conf = {
        "state1": city.replace("US-", ""),
        "sector": energy_type,
        "application_year": app_year
    };

    // if any patent condition
    if (patent.length > 0) {
        conf["patent"] = patent;
    }

    // if any fips condition
    if (fips_list.length > 0) {
        conf["fips"] = fips_list;
    }

    a(conf).each(function (e) {
        var temp = [];
        if (i) {
            nodes.push(e.alter_class);
            nodes.push(e.focal_class);
            temp.push(i ? e.alter_class : e.alter_inv_Lastname);
            temp.push(i ? e.focal_class : e.focal_inv_Lastname);
        } else {
            nodes.push(e.alter_inv_Lastname);
            nodes.push(e.focal_inv_Lastname);
            temp.push(e.alter_inv_Lastname);
            temp.push(e.focal_inv_Lastname);
        }
        edges.push(temp);
    })

    // remove duplicates from nodes
    var uniqueNodes = [];
    $.each(nodes, function (i, el) {
        if ($.inArray(el, uniqueNodes) === -1) uniqueNodes.push(el);
    });

    g.addNodesFrom(uniqueNodes, { color: energy_color[energy_type] });
    g.addEdgesFrom(edges);

}

// generate a graph from query data
function generateGraph(G) {
    var e, isClassBased = false;

    if (class_based && inventor_based && type_toggle) {
        if ($("#switch-class-inventor").is(":checked")) {
            e = class_based;
            isClassBased = true;
        } else {
            e = inventor_based;
        }

        if ($("#ck-sector-wind").is(":checked")) {
            query_by_selector("Wind", e, isClassBased, G);
        }
        if ($("#ck-sector-solar").is(":checked")) {
            query_by_selector("Solar", e, isClassBased, G);
        }
        if ($("#ck-sector-hydro").is(":checked")) {
            query_by_selector("Hydro", e, isClassBased, G);
        }
        if ($("#ck-sector-nuclear").is(":checked")) {
            query_by_selector("Nuclear", e, isClassBased, G);
        }
        if ($("#ck-sector-biofuel").is(":checked")) {
            query_by_selector("Biofuel", e, isClassBased, G);
        }
        if ($("#ck-sector-geothermal").is(":checked")) {
            query_by_selector("Geothermal", e, isClassBased, G);
        }
    }
}

function update_graph() {
    var g = new jsnx.Graph;
    generateGraph(g), jsnx.draw(g, {
        element: "#canvas",
        weighted: !0,
        withLabels: !0,
        labelStyle: {
            fill: "Black"
        },
        nodeStyle: {
            fill: function (d) {
                return d.data.color;
            },
            stroke: function (d) {
                return d.data.color;
            }
        },
        edgeStyle: {
            "stroke-width": 10,
            fill: '#d3d3d3'
        }
    })
}
$("#switch-class-inventor").on("switchChange.bootstrapSwitch", function (e, a) {
    update_graph()
}), $("#ck-sector-wind").change(function (e) {
    update_graph()
}), $("#ck-sector-solar").change(function (e) {
    update_graph()
}), $("#ck-sector-hydro").change(function (e) {
    update_graph()
}), $("#ck-sector-nuclear").change(function (e) {
    update_graph()
}), $("#ck-sector-biofuel").change(function (e) {
    update_graph()
}), $("#ck-sector-geothermal").change(function (e) {
    update_graph()
}), $("#ck-type-sm-firm").change(function (e) {
    update_graph()
}), $("#ck-type-vb-firm").change(function (e) {
    update_graph()
}), $("#ck-type-lg-firm").change(function (e) {
    update_graph()
}), $("#ck-type-university").change(function (e) {
    update_graph()
}), $("#ck-type-government").change(function (e) {
    update_graph()
}), $("#ck-type-lone-inventor").change(function (e) {
    update_graph()
});
//////////////////////////////////
function state_form_init(state) {
    $(".map_area").hide();
    $("#chart_state").show();
}
function ea_form_init(state) {
    $(".map_area").hide();
    $("#chart_ea").show();
}
function county_form_init(state) {
    $(".map_area").hide();
    $("#chart_county").show();
}
function city_form_init(state) {
    $(".map_area").hide();
    $("#chart_city").show();
}

function loadCountyMap(mapName, map_type) {

    if (AmCharts.maps[map_type] != undefined) {
        setCountyMap(mapName);
        setCountyEAMap(mapName);
    } else {
        var url = window.location.href + '/dist/js/us-counties/js/' + map_type + '.js';//'https://dl.dropboxusercontent.com/s/rl7h401zq3txwd7/' + map_type + '.js';
        jQuery.getScript(url, function () {
            setCountyMap(mapName);
            setCountyEAMap(mapName);
        });
    }
}

function setCountyMap(mapName) {
    d3.csv(fips_data_file).get(function (error, rows) {
        var county_areas = [];
        var county_images = [];
        var k = 0;
        for (var i = 0; i < rows.length; i++) {

            var countyname = rows[i]['countyname'];
            var fips = rows[i]['fips'];
            county_n = countyname.split(", ");
            var data_state_name = county_n[county_n.length - 1];
            data_state_name = data_state_name.toLowerCase();
            if (data_state_name == mapName) {
                county_areas.push({ 'id': fips, 'value': county_n[0] });
                county_images.push({ 'labelPosition': 'center', 'label': county_n[0] + "asdasd" });
            }

            k++;
        }

        var dataProvider = {
            mapVar: AmCharts.maps[mapName + 'Counties'],
            getAreasFromMap: true,
            areas: county_areas,
            images: county_images,
        };
        countymap = new AmCharts.AmMap(AmCharts.themes.light);
        countymap.dataProvider = dataProvider;
        countymap.areasSettings = {
            alpha: 0.8,
            selectable: true,
            unlistedAreasAlpha: 0.1,
            selectedOutlineThickness: 1,
            OutlineThickness: 1,
        };
        countymap.hideCredits = !0;

        countymap.zoomControl = {
            zoomControlEnabled: !1
        };

        countymap.addListener("clickMapObject", function (event) {
            // deselect the area by assigning all of the dataProvider as selected object
            countymap.selectedObject = countymap.dataProvider;
            // toggle showAsSelected
            event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
            // bring it to an appropriate color
            countymap.returnInitialColor(event.mapObject);

            var id = event.mapObject.id;
            var fips = id.replace("C", "");
            if (event.mapObject.showAsSelected) {
                // selected fips
                fips_list.push(Number(fips));
            } else {
                // deselect fips
                var index = fips_list.indexOf(Number(fips));
                if (index > -1) {
                    fips_list.splice(index, 1);
                }
            }
            // update graph
            update_graph();
        });

        countymap.write("chart_county");
    });
}

function setCountyEAMap(mapName) {

    d3.csv(fips_data_file).get(function (error, data) {
        var ea_areas = [];
        const ea_groups = {};
        const ea_groups_dddd = [];
        var k = 0;
        for (var i = 0; i < data.length; i++) {
            var countyname = data[i]['countyname'];
            var fips = data[i]['fips'];
            var ea_code = data[i]['ea'];
            var ea_name_o = data[i]['eaname'];

            ea_name_o = ea_name_o.split(", ");
            ea_name = ea_name_o[0];
            ea_name = ea_name.toLowerCase().replace(/[^A-Z0-9]/ig, "_");
            county_n = countyname.split(", ");
            var data_state_name = county_n[county_n.length - 1];
            data_state_name = data_state_name.toLowerCase();
            if (data_state_name == mapName) {
                ea_areas.push({
                    'value': fips,
                    'id': 'C' + fips,
                    'groupId': ea_code,
                    'customData': ea_name_o[0],
                    'group_title': ea_name_o[0]
                });
            }

            k++;


        }

        var ea_areas_n = d3.nest().key(function (d) { return d.groupId; }).entries(ea_areas);

        for (var i = 0; i < ea_areas_n.length; i++) {
            if (ea_areas_n[i]) {
                var color_i = ea_colors[i];
                // console.log(ea_areas_n[i]);
                for (var j = 0; j < ea_areas_n[i].values.length; j++) {
                    var l = ea_areas_n[i].values[j];
                    //l.color = color_i;
                    ea_groups_dddd.push(l);

                    // console.log(l);
                }
            }

        }

        eamap = new AmCharts.AmMap(AmCharts.themes.light);
        eamap.dataProvider = {
            mapVar: AmCharts.maps[mapName + 'Counties'],
            getAreasFromMap: true,
            areas: ea_groups_dddd,
        };
        eamap.areasSettings = {
            alpha: 0.8,
            selectable: true,
            unlistedAreasAlpha: 0.1,
            selectedOutlineThickness: 1,
            OutlineThickness: 1,
        };
        eamap.hideCredits = !0;

        eamap.zoomControl = {
            zoomControlEnabled: !1
        };

        eamap.addListener("clickMapObject", function (event) {
            // empty fips list
            fips_list = [];
            // Walkthrough areas
            for (i in eamap.dataProvider.areas) {
                var area = eamap.dataProvider.areas[i];
                var path = area.displayObject.node;

                // CURRENT GROUP
                if (event.mapObject.groupId == area.groupId) {
                    // CURRENT
                    var fips = area.id.replace("C", "");
                    fips_list.push(Number(fips));
                }
            }

            // update graph
            update_graph();
        });

        eamap.write("chart_ea");
    });
}

$(document).ready(function () {
    // Create the database from csv file
    creat_database();

    // init map view
    var type = $('.graph-subarea a[data-status="active"]').data('type');

    if (typeof (type) != "undefined") {
        $('#chart_' + type).show();
    }

    // init App Year Range Slider
    $("#app_year_range").ionRangeSlider({
        min: 1980,
        max: 2010,
        from: 1980,
        onChange: function (data) {
            app_year = data.from;
            update_graph();
        },
        onFinish: function (data) {
            app_year = data.from;
            update_graph();
        }
    });

});

$(document).on('click', '.graph-subarea a', function (event) {
    event.preventDefault();
    var $this = $(this);

    $('.graph-subarea a').attr('data-status', '');
    $this.attr('data-status', 'active');

    var current_type = $this.data('type');
    var current_status = $this.data('status');

    if (current_type == 'state') {
        state_form_init(1);
    } else if (current_type == 'ea') {
        ea_form_init(1);
    } else if (current_type == 'county') {
        county_form_init(1);
    } else if (current_type == 'city') {
        city_form_init(1);
    }

    fips_list = [];
    // if state changed, update network graph
    if (previous_type != current_type && city) {
        update_graph();
        previous_type = current_type;
    }
});