window.constants = {
    instance: {
        client: '',
        user: '',
        ui: ''
    },
    urls: {
        getReports: appconfig.api.base + '/' + appconfig.api.stage + '/getWebReports'
    }
};

window.chart = (function () {
    var chart = {
        palette: {
            wheel: 0,
            assign: function () {
                var colors = chart.palette.color.length - 1;
                if(chart.palette.wheel > colors){
                    chart.palette.wheel = 0;
                }
                var color = chart.palette.color[chart.palette.wheel];
                chart.palette.wheel++;
                return {bg: color[0], txt: color[1]};
            },
            get: function (c) {
                var color = chart.palette.color[c];
                return { bg: color[0], txt: color[1] };
            },
            color: [
                ['#5DA5DA', 'white'],
                ['#FAA43A', 'rgb(86,86,86)'],
                ['#60BD68', 'white'],
                ['#F17CB0', 'white'],
                ['#B2912F', 'white'],
                ['#B276B2', 'white'],
                ['#DECF3F', 'rgb(86,86,86)'],
                ['#F15854', 'white'],
                ['#4D4D4D', 'white']
            ]
        },
        animate: {
            bar: function ($chart) {
                window.setTimeout(function () {
                    $chart.find('.chart-bar-segment').each(function () {
                        $(this).css('width', $(this).attr('data-p'));
                    });
                }, 200);
            },
            readout: function ($chart) {
                $chart.find('.hidden').fadeIn(400);
            },
            'stacked bar': function () {

            }
        },
        segment: {
            bar: function (val, largest) {
                var wid = ((val / largest)*90) + '%';
                var color = chart.palette.get(0);
                return '<div class="chart-bar-segment" style="width:0%;background-color:' + color.bg + ';color:' + color.txt + ';" data-p="' + wid + '"><div class="centered vCenter">' + val + '</div></div>';
            },
            label: function (label) {
                return '<div class="maintxt chart-bar-label"><div class="vCenter">' + label + '</div></div>';
            },
            row: function (contents) {
                return '<div class="chart-bar-row">' + contents + '</div>';
            }
        },
        body:{
            bar: function (contents) {
                return '<div class="chart-bar-body">' + contents + '</div>';
            }
        },
        'bar': function (info, data) {
            var markup = '';
            var lim = data.length;
            var x = info.X_AXIS;
            var y = info.Y_AXIS;
            var label;
            var val = 0;
            var largest = 0;
            var sBar = '';

            //lim = Math.min(lim,20);

            for (var i = 0; i < lim; i++) {
                if(+data[i][y] > +largest){
                    largest = data[i][y];
                }
            }

            for (var i = 0; i < lim; i++) {
                label = data[i][x];
                sBar = chart.segment.label(label) + chart.segment.bar(data[i][y], largest);
                sBar = chart.segment.row(sBar);
                markup = markup + sBar;
            }
            markup = chart.body.bar(markup);
            return markup;
        },
        'stacked bar': function (info, data) {
            var markup = '<div class="infoTxt centered vCenter">This report is currently only available through csv data download. Click \"Download\" to view this report\'s data.</div>';
            return markup;
        },
        'readout': function (info, data) {
            var markup = '';
            var lim = data.length;
            
            var fn = {
                count: function (x,y,label) {
                    var subTxt = 'Count';
                    var val = 0;
                    var markup = '';
                    
                    for (var i = 0; i < lim; i++) {
                        val++;
                    }

                    markup =    '<div class="chart-readout" style="background-color:white;">' +
                                    '<div class="vCenter maintxt">' +
                                        '<div style="font-size:11pt;font-style:italic;">' + label + '</div>' +
                                        '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                        '<div style="font-size:32pt;font-weight:bold;">' + val + '</div>' +
                                        '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                        '<div style="font-size:11pt;font-style:italic;">' + subTxt + '</div>' +
                                    '</div>' +
                                '</div>';
                    return markup;
                },
                'aggregate count': function(x,y){
                    var subTxt = 'Count';
                    var markup = '';
                    var map = {};

                    for (var i = 0; i < lim; i++) {
                        if(!map[data[i][x]]){
                            map[data[i][x]] = {
                                label: data[i][x],
                                val: 0
                            };
                        }
                        map[data[i][x]].val++;
                    }

                    for(var agg in map){
                        markup = markup +
                                 '<div class="chart-readout" style="background-color:white;">' +
                                     '<div class="vCenter maintxt">' +
                                         '<div style="font-size:11pt;font-style:italic;">' + map[agg].label + '</div>' +
                                         '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                         '<div style="font-size:32pt;font-weight:bold;">' + map[agg].val + '</div>' +
                                         '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                         '<div style="font-size:11pt;font-style:italic;">' + subTxt + '</div>' +
                                     '</div>' +
                                 '</div>';
                    }

                    return markup;
                },
                sum: function (x,y) {
                    var subTxt = 'Sum';
                    var markup = '';
                    var map = {};

                    for (var i = 0; i < lim; i++) {
                        if (!map[data[i][x]]) {
                            map[data[i][x]] = {
                                label: data[i][x],
                                val: 0
                            };
                        }
                        map[data[i][x]].val += data[i][y];
                    }

                    for (var agg in map) {
                        markup = markup +
                                 '<div class="chart-readout" style="background-color:white;">' +
                                     '<div class="vCenter maintxt">' +
                                         '<div style="font-size:11pt;font-style:italic;">' + map[agg].label + '</div>' +
                                         '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                         '<div style="font-size:32pt;font-weight:bold;">' + map[agg].val + '</div>' +
                                         '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                         '<div style="font-size:11pt;font-style:italic;">' + subTxt + '</div>' +
                                     '</div>' +
                                 '</div>';
                    }

                    return markup;

                },
                average: function (x,y) {
                    var subTxt = 'Average';
                    var markup = '';
                    var map = {};

                    for (var i = 0; i < lim; i++) {
                        if (!map[data[i][x]]) {
                            map[data[i][x]] = {
                                label: data[i][x],
                                val: 0,
                                cnt: 0
                            };
                        }
                        map[data[i][x]].val += data[i][y];
                        map[data[i][x]].cnt++;
                    }

                    for (var agg in map) {
                        map[agg].val = map[agg].val / map[agg].cnt;
                        map[agg].val = Math.round(map[agg].val);

                        markup = markup +
                                 '<div class="chart-readout" style="background-color:white;">' +
                                     '<div class="vCenter maintxt">' +
                                         '<div style="font-size:11pt;font-style:italic;">' + map[agg].label + '</div>' +
                                         '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                         '<div style="font-size:32pt;font-weight:bold;">' + map[agg].val + '</div>' +
                                         '<hr style="width:45%;height:1px;border:none;background-color:rgb(86,86,86);" />' +
                                         '<div style="font-size:11pt;font-style:italic;">' + subTxt + '</div>' +
                                     '</div>' +
                                 '</div>';
                    }

                    return markup;

                }
            };

            var axes = info.X_AXIS.split(';');
            var lbls = info.X_LABEL.split(';');
            var fns = info.CHART_FUNCTION.toLowerCase().split(';');
            var nax = axes.length;
            var f;

            for (var n = 0; n < nax; n++){
                f = fns[n] || 0;
                markup = markup + '<div class="centered hidden">' + fn[f](axes[n], info.Y_AXIS, lbls[n]) + '</div>';
            }

            return markup;
        },
        draw: function (rid, info, data) {
            window.setTimeout(function () {
                var markup = chart[info.CHART_TYPE](info, data);
                $('#' + rid + '-frame').html(markup);
                chart.animate[info.CHART_TYPE]($('#' + rid + '-frame'));
            }, 1);
        }
    };
    return chart;
})();

window.reports = (function () {
    var reports = {
        count: 0,
        total: 0,
        data: {},
        info: {},
        templates:[],
        catalog: {},
        getCatalog: function (onComplete) {
            $.ajax({
                type: "GET",
                contentType: 'application/json',
                dataType: "json",
                url: constants.urls.getReports + '?cliid=' + constants.instance.client,
                success: function (data) {
                    reports.total = data.catalog.length;
                    reports.catalog = data.catalog;
                    reports.templates = data.templates;
                    onComplete(data.catalog);
                },
                error: function (xhr, ajaxOptions, error) {
                    console.log(xhr);
                }
            });
        },
        get: function (rid, onComplete) {
            $.ajax({
                type: "GET",
                contentType: 'application/json',
                dataType: "json",
                url: constants.urls.getReports + '?cliid=' + constants.instance.client + '&rid=' + rid,
                success: function (data) {
                    reports.data['rpt-' + rid] = data.data['rpt-' + rid];
                    reports.info['rpt-' + rid] = data.info['rpt-' + rid];
                    onComplete(rid, data);
                },
                error: function (xhr, ajaxOptions, error) {
                    console.log(xhr);
                }
            });
        }
    };
    return reports;
})();

window.ui = (function () {
    var ui = {
        loader: {
            open: function (id) {
                if (!id) {
                    id = 'msg-bg-overlay';
                }
                $('#' + id).stop();
                $('#' + id).fadeIn(200);
            },
            close: function (id) {
                if(!id){
                    id = 'msg-bg-overlay';
                }
                $('#' + id).stop();
                $('#' + id).fadeOut(200);
            }
        },
        load: function () {
            ui.loader.open();
            reports.getCatalog(function (data) {
                ui.loader.close();
                var tmp = reports.templates.join('');
                $('#dynamic-content-area').html(tmp);
                ui.getReportData(data);
            });
        },
        getReportData: function (catalog) {
            console.log(catalog);
            var lim = catalog.length;
            for (var i = 0; i < lim; i++){
                reports.get(catalog[i], ui.checkLoad);
            }
        },
        checkLoad: function (rid, data) {
            ui.render(rid, data);
        },
        render: function (rid, data) {
            var rpt = 'rpt-' + rid;
            $('#' + rpt + '-output').html('<div class="ckablef centered vCenter brightTxt" onclick="util.runDownload(\'' + rpt + '\');">Download</div>');
            chart.draw(rpt, data.info[rpt], data.data[rpt]);
        }
    };
    return ui;
})();

window.util = (function () {
    var util = {
        getURLParams: function () {
            var uParts = window.location.href.split('?');
            var pObj = {};
            if (uParts.length > 1) {
                var paramString = uParts[1];
                var params = paramString.split('\&');
                var pInfo;
                for (var i = 0; i < params.length; i++) {
                    pInfo = params[i].split(/=(.+)/);
                    pInfo.push('');
                    pObj[pInfo[0]] = pInfo[1];
                }
                constants.instance.id = pObj.iref;
                constants.instance.user = pObj.uid;
                constants.instance.ui = pObj.uiid;
                constants.instance.client = pObj.cliid;
            }
        },
        runDownload: function (rpt) {
            var data = util.toCSV(reports.data[rpt]);
            util.downloadCSV(rpt,data);
        },
        toCSV: function (data) {
            var lim = data.length;
            var out = [];
            var tmp = [];

            if (lim > 0) {
                for(var fld in data[0]){
                    tmp.push(fld);
                }
                tmp = tmp.join(',');
                out.push(tmp);
            }

            for (var i = 0; i < lim; i++) {
                tmp = [];
                for (var fld in data[i]) {
                    tmp.push('"' + data[i][fld] + '"');
                }
                tmp = tmp.join(',');
                out.push(tmp);
            }

            out = out.join('\r\n');
            return out;
        },
        downloadCSV: function (reportName, data) {
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(new Blob([data], { type: 'text/csv' }));
            a.download = reportName.split('-').join('_') + '.csv';

            // Append anchor to body.
            document.body.appendChild(a)
            a.click();

            // Remove anchor from body
            document.body.removeChild(a)
        }
    };
    return util;
})();

$(document).ready(function () {
    util.getURLParams();
    ui.load();
    $('.dynamicContent').fadeIn('fast');
});