var class_based, inventor_based, type_toggle, city, app_year, friends, 
energy_color = {
    "Wind": "#3C8FBB",
    "Solar": "#FFDB87",
    "Hydro": "#4E6EB1",
    "Nuclear": "#D9444E",
    "Biofuel": "#9DD7A5",
    "Geothermal": "#F77C48"
};
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
var map = AmCharts.makeChart("chartdiv", {
    type: "map",
    theme: "light",
    colorSteps: 10,
    hideCredits: !0,
    dataProvider: {
        map: "usaLow",
        areas: [{
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
    },
    areasSettings: {
        autoZoom: !0
    },
    valueLegend: {
        right: 10,
        minValue: "little",
        maxValue: "a lot!"
    },
    export: {
        enabled: !1
    },
    zoomControl: {
        zoomControlEnabled: !1
    },
    listeners: [{
        event: "clickMapObject",
        method: function (e) {
            city = e.mapObject.id, update_graph()
        }
    }]
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
    loading.open(10000);
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

function query_by_selector(energy_type, a, i, g) {
    var patent = get_patent(), nodes = [], edges = [];
    conf = {
        "state1": city.replace("US-", ""),
        "sector": energy_type,
        "application_year": app_year
    };

    if (patent.length > 0) {
        conf["patent"] = patent;
    }

    a(conf).each(function (e) {
        var temp = [];
        if(i) {
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

    if(class_based && inventor_based && type_toggle) {
        if($("#switch-class-inventor").is(":checked")) {
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

$(document).ready(function () {
    // Create the database from csv file
    creat_database();

    $('.graph-subarea span').click(function (e) {

        var $this = $(this);
        $('.graph-subarea span').removeClass('active');

        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });

    // init App Year Range Slider
    $("#app_year_range").ionRangeSlider({
        min: 1980,
        max: 2010,
        from: 1980,
        onFinish: function (data) {
            app_year = data.from;
            update_graph();
        }
    });

});