
odoo.define('month_year_widget.month_year_format', function (require) {
    "use strict";

    var fieldRegistry = require('web.field_registry');
    var DateWidget = require('web.datepicker').DateWidget;
    var FieldDate = require('web.basic_fields').FieldDate;
    var time = require('web.time');


    // Modified DateWidget to be used used for month and years
    var MonthYearDateWidget = DateWidget.extend({

        _parseMonthYearDate: function (value, field, options) {
            if (!value) {
                return false;
            }
            var datePattern = this.options.format;
            var datePatternWoZero = datePattern.replace('MM','M');
            var date;
            if (options && options.isUTC) {
                date = moment.utc(value);
            } else {
                date = moment.utc(value, [datePattern, datePatternWoZero, moment.ISO_8601], true);
            }
            if (date.isValid()) {
                if (date.year() === 0) {
                    date.year(moment.utc().year());
                }
                if (date.year() >= 1900) {
                    date.toJSON = function () {
                        return this.clone().locale('en').format('YYYY-MM-DD');
                    };
                    return date;
                }
            }
            throw new Error(_.str.sprintf(core._t("'%s' is not a correct date"), value));
        },

        _parseClient: function (v) {
            return this._parseMonthYearDate(v, null, {timezone: false});
        }

    });

    // Widget 'month_year_format' to be added from the xml at field declaration
    var MonthYearFormatFieldDate = FieldDate.extend({
        supportedFieldTypes: ['date'],

        init: function () {
            this._super.apply(this, arguments);
            this.datepickerOptions = _.defaults(
                {},
                this.nodeOptions.datepicker || {},
                {
                    defaultDate: this.value,
                    format: this._convertMonthYearDateFormat(time.getLangDateFormat()),
                    viewMode: 'months'
                }
            );
        },

        _convertMonthYearDateFormat: function (dateFormat) {
            var isletter = /[a-zA-Z]/;
            dateFormat = dateFormat
            .replace("Do", "")
            .replace(/D/g, "")
            .replace("//", "/")
            .replace("..", ".")
            .replace("--", "-");
            if (!isletter.test(dateFormat[0])){
                // If we have some . or / or - at the beggining of the string, remove it.
                dateFormat = dateFormat.substring(1);
            }
            return dateFormat;
        },

        _formatMonthYearDate: function (value, field, options) {
            if (value === false) {
                return "";
            }
            return value.format(this.datepickerOptions.format);
        },

        _formatValue: function (value) {
            var options = _.extend({}, this.nodeOptions, { data: this.recordData }, this.formatOptions);
            return this._formatMonthYearDate(value, this.field, options);
        },

        _makeDatePicker: function () {
            return new MonthYearDateWidget(this, this.datepickerOptions);
        }

    });

    fieldRegistry.add('month_year_format', MonthYearFormatFieldDate);

    return {
        MonthYearDateWidget: MonthYearDateWidget
    }

});
